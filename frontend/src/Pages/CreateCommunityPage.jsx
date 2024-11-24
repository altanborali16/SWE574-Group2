import React, { useState, useEffect } from "react";
import "../Styles/CreateCommunityPage.css";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import httpClient from "../Helpers/HttpClient";
import { useNotificationContext } from '../Context/useNotificationContext.jsx'

const CreateCommunityPage = () => {
  const {
    showNotification
  } = useNotificationContext();
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const response = await httpClient.get("/profile/currentProfile");
        console.log("profile:", response.data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    fetchCommunityList();
  }, []);
  const [communityData, setCommunityData] = useState({
    name: "",
    description: "",
    picture: "",
    isPrivate: false,
    tags: [],
  });
  const navigate = useNavigate();

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Enforce character limit for description
    if (name === "description" && value.length > 250) {
      return; // Prevent updates if length exceeds 250
    }
    setCommunityData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagAdd = () => {
    if (tagInput.trim()) {
      setCommunityData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, { name: tagInput.trim() }],
      }));
      setTagInput("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(communityData.tags.length === 0){
      console.error("Error: Tags are required.");
      showNotification({
        message: 'Please add at least one tag before creating a community.',
        variant: 'danger'
      });
      return; // Exit the function if validation fails
    }
    console.log("Private : ", communityData.isPrivate)
    try {
      const response = await httpClient.post(
        "/community/create", // relative URL since we set baseURL in axiosInstance
        {
          name: communityData.name,
          communityDescription: communityData.description,
          isPrivate: communityData.isPrivate,
          isArchived: false,
          tags: communityData.tags,
        }
      );
      console.log("Community created successfully:", response.data);
      navigate("/mycommunities");
    } catch (error) {
      if (error.response) {
        console.error("Error creating community:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
    }
  };

  return (
    <>
      <PageMetaData title="Communities" />
      <Navbar />
      <div className="create-community-page" style={{ marginTop: "4vh" }}>
        <h1>Create a New Community</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={communityData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={communityData.description}
              onChange={handleChange}
              required
              style={{height : "14vh"}}
            />
            <div>
              <small>{communityData.description.length}/250 characters</small>
            </div>
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              name="picture"
              value={communityData.picture}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Private</label>
            <input
              type="checkbox"
              name="isPrivate"
              checked={communityData.isPrivate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button
              type="button"
              style={{ marginTop: "2vh" }}
              onClick={handleTagAdd}
            >
              Add Tag
            </button>
            <div className="categories-list">
              {communityData.tags.map((tag, idx) => (
                <span key={idx} className="category-item">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <button type="submit">Create Community</button>
        </form>
      </div>
    </>
  );
};

export default CreateCommunityPage;
