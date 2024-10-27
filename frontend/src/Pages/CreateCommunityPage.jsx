import React, { useState } from "react";
import "../Styles/CreateCommunityPage.css";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";

const CreateCommunityPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/mycommunities");
    // onCreateCommunity(communityData);
    // setCommunityData({
    //   name: '',
    //   description: '',
    //   picture: '',
    //   isPrivate: false,
    //   categories: [],
    // });
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
