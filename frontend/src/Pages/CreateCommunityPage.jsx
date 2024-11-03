import React, { useState, useEffect } from "react";
import "../Styles/CreateCommunityPage.css";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { connection_string } from '../Context/constants';
import httpClient from '../Helpers/HttpClient';  

const CreateCommunityPage = () => {
  // useEffect(() => {
  //   const myCookie = getCookie('COMMUNITY_AUTH_TOKEN');
  //   setToken(myCookie);  // Store the cookie in state
  //   console.log('My Cookie:', myCookie);
  // }, []);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const response = await httpClient.get('/profile/currentProfile');
        console.log('profile:', response.data);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    fetchCommunityList();
  }, []);
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const [token, setToken] = useState('');
  const [communityData, setCommunityData] = useState({
    name: "",
    description: "",
    picture: "",
    isPrivate: false,
    categories: [],
  });
  const navigate = useNavigate();

  const [categoryInput, setCategoryInput] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCommunityData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryAdd = () => {
    if (categoryInput.trim()) {
      setCommunityData((prevData) => ({
        ...prevData,
        categories: [...prevData.categories, categoryInput.trim()],
      }));
      setCategoryInput("");
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Token : ", token)
    try {
      const response = await httpClient.get(
        '/profile/currentProfile', // relative URL since we set baseURL in axiosInstance
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer token header
          },
        }
      );
    console.log('Community created successfully:', response.data);
  } catch (error) {
    // Check if error response is present
    if (error.response) {
        // The request was made and the server responded with a status code
        console.log('Error response:', error.response.data);
        console.log('Error status:', error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        console.log('Error request:', error.request);
    } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error message:', error.message);
    }
}
  try {
    const response = await httpClient.get(
      '/community/list', // relative URL since we set baseURL in axiosInstance
      {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer token header
        },
      }
    );
  console.log('Community created successfully:', response.data);
} catch (error) {
  // Check if error response is present
}
    try {
      const response = await httpClient.post(
        '/community/create', // relative URL since we set baseURL in axiosInstance
        {
          name: communityData.name,
          communityDescription: communityData.description,
          isPrivate: communityData.isPrivate,
          isArchived: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer token header
          },
        }
      );
    console.log('Community created successfully:', response.data);
    navigate("/mycommunities");
    // onCreateCommunity(communityData);
    // setCommunityData({
    //   name: '',
    //   description: '',
    //   picture: '',
    //   isPrivate: false,
    //   categories: [],
    // });
  } catch (error) {
    // Check if error response is present
    if (error.response) {
      console.error('Error creating community:', error.response.data);
      console.error('Status code:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
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
            />
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
            <label>Categories</label>
            <input
              type="text"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
            />
            <button
              type="button"
              style={{ marginTop: "2vh" }}
              onClick={handleCategoryAdd}
            >
              Add Category
            </button>
            <div className="categories-list">
              {communityData.categories.map((cat, idx) => (
                <span key={idx} className="category-item">
                  {cat}
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
