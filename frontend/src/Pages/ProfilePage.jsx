import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import "../Styles/ProfilePage.css";
import { FaEdit } from "react-icons/fa"; 
import httpClient from '../Helpers/HttpClient'; 
import { jwtDecode } from 'jwt-decode';

const ProfilePage = () => {
  const [user, setUser] = useState({}); 
  const [showModal, setShowModal] = useState(false); 
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); 
  const token = localStorage.getItem('token'); 
  const [auth, setAuth] = useState({
    user: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null,
  });

  useEffect(() => {
    const fetchCurrentProfile = async () => {
      try {
        const response = await httpClient.get('/profile/currentProfile');
        setUser(response.data); 
        setBio(response.data.bio || ""); 
        setAvatarUrl(response.data.avatarUrl || "");
        console.log('User:', response.data);
      } catch (err) {
        console.error(err);
        console.log("enes burada");
        const res = await httpClient.post('/profile/create', { bio:"I am using community app", avatarUrl:"https://i.pinimg.com/236x/d6/cd/f2/d6cdf2a5daaf96462127cc31fb621851.jpg" });
        window.location.href = window.location.href; 
      }
    };
    fetchCurrentProfile();
  }, []);

  const badges = [
    {
      title: "Community Creator",
      image: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-badge-png-image_996483.jpg",
    },
    {
      title: "Post Creator",
      image: "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-golden-red-ribbon-badge-illustration-image_2286597.jpg",
    },
    {
      title: "I am out of memory",
      image: "https://clipartspub.com/images/badge-clipart-ribbon-3.jpg",
    },
  ];

  const handleEdit = () => {
    console.log("Edit Profile clicked");
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleSaveChanges = async () => {
    try {
      const updatedData = { bio, avatarUrl };
      const response = await httpClient.put('/profile/update', updatedData); 
      
      console.log("Bio updated successfully:", response.data);
      
      
      setUser(prevUser => ({ ...prevUser, bio: response.data.bio, avatarUrl: response.data.avatarUrl }));
      
      setShowModal(false); 
    } catch (err) {
      console.error("Error updating bio:", err);
    }
  };

  return (
    <>
      <PageMetaData title="Profile Page" />
      <Navbar />
      <div className="profile-page">
        <div className="profile-card">
          <img
            src={user.avatarUrl || "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg"}
            alt="Profile"
            className="profile-card__image"
          />
          <h2 className="profile-card__name">{user.username}</h2>
          <p className="profile-card__info">Email: {auth.user.sub}</p>
          <p className="profile-card__info">Bio: {user.bio || ""}</p> 
          <button className="profile-card__edit-button" onClick={handleEdit}>
            <FaEdit /> Edit Profile 
          </button>
        </div>

        <div className="badges-section">
          <h3>Badges</h3>
          <div className="badges-list">
            {badges.map((badge, index) => (
              <div key={index} className="badge">
                <img src={badge.image} alt={badge.title} className="badge__image" />
                <span className="badge__title">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Update Profile</h2>
            <form>

              
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                cols="50"
              />

          <label htmlFor="avatarUrl">Photo URL: </label> 
              <input
                type="text"
                id="avatarUrl"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
              />
              <button type="button" onClick={handleSaveChanges}>Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
