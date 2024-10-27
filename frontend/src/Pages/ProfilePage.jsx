import React from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import "../Styles/ProfilePage.css";
import { FaEdit } from "react-icons/fa"; // Font Awesome edit icon

const ProfilePage = () => {
  // Sample user data
  const user = {
    profilePic:
      "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg", // Replace with actual image URL
    username: "altan16",
    email: "altan@gmail.com",
    bio: "Software Engineer at AVL Turkey",
    badges: [
        {
          title: "Community Creator",
          image: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-badge-png-image_996483.jpg", // Replace with actual badge image URL
        },
        {
          title: "Post Creator",
          image: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-golden-red-ribbon-badge-illustration-image_2286597.jpg", // Replace with actual badge image URL
        },
        {
          title: "I am out of memmory",
          image: "https://clipartspub.com/images/badge-clipart-ribbon-3.jpg", // Replace with actual badge image URL
        },
      ],
  };

  // Function to handle edit profile button click
  const handleEdit = () => {
    // Logic to handle editing the profile
    console.log("Edit Profile clicked");
  };

  return (
    <>
      <PageMetaData title="Profile Page" />
      <Navbar />
      <div className="profile-page">
        <div className="profile-card">
          <img
            src={user.profilePic}
            alt="Profile"
            className="profile-card__image"
          />
          <h2 className="profile-card__name">{user.username}</h2>
          <p className="profile-card__info">Email: {user.email}</p>
          <p className="profile-card__info">Bio: {user.bio}</p>
          <button className="profile-card__edit-button" onClick={handleEdit}>
            <FaEdit /> Edit Profile
          </button>
        </div>
        
        <div className="badges-section">
          <h3>Badges</h3>
          <div className="badges-list">
            {user.badges.map((badge, index) => (
              <div key={index} className="badge">
                <img src={badge.image} alt={badge.title} className="badge__image" />
                <span className="badge__title">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
