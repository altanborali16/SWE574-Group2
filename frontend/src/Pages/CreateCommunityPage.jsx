import React, { useState } from "react";
import "../Styles/CreateCommunityPage.css";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import httpClient from "../Helpers/HttpClient";
import { useNotificationContext } from "../Context/useNotificationContext.jsx";

const CreateCommunityPage = () => {
  const { showNotification } = useNotificationContext();
  const [communityData, setCommunityData] = useState({
    name: "",
    communityDescription: "",
    imageData: null, // Base64 kodlanmış resim
    imageType: "",
    privateCommunity: false,
    tags: [],
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "picture" && files && files[0]) {
      const file = files[0];
    
      // Check file type (accept only image formats)
      const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validImageTypes.includes(file.type)) {
        alert("Invalid file format. Please upload an image (JPEG, PNG, GIF, or WebP).");
        return;
      }
    
      // Check file size (5MB = 5 * 1024 * 1024 bytes)
      if (file.size > 5 * 1024 * 1024) {
        alert("The file size exceeds the 5MB limit. Please upload a smaller image.");
        return;
      }
    
      const reader = new FileReader();
      reader.onloadend = () => {
        setCommunityData((prevData) => ({
          ...prevData,
          imageData: reader.result.split(",")[1], // Extract Base64 content
          imageType: file.type,
        }));
        setPreviewImage(reader.result); // Set preview image
      };
      reader.readAsDataURL(file);
      return;
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

    if (communityData.tags.length === 0) {
      showNotification({
        message: "Please add at least one tag before creating a community.",
        variant: "danger",
      });
      return;
    }
    console.log("privateCommunity : ", communityData.privateCommunity);
    try {
      const response = await httpClient.post(
        "/community/create",
        communityData,
        {
          headers: { "Content-Type": "application/json" },
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
  //console.log({ previewImage });
  return (
    <>
      <PageMetaData title="Create Community" />
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
              name="communityDescription"
              value={communityData.communityDescription}
              onChange={handleChange}
              required
              style={{ height: "14vh" }}
            />
            <div>
              <small>
                {communityData.communityDescription.length}/250 characters
              </small>
            </div>
          </div>

          <div className="form-group">
            <label>Image</label>
            {previewImage && (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              name="picture"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Private</label>
            <input
              type="checkbox"
              name="privateCommunity"
              checked={communityData.privateCommunity}
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
