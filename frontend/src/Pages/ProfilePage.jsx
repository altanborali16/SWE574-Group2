import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import "../Styles/ProfilePage.css";
import { FaEdit } from "react-icons/fa";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import LoadingScreen from "./SharedComponents/LoadingScreen.jsx";
import firstInteractionImage from "../assets/team.png";
import firstCommunityImage from "../assets/number.png";
import communityGrowerImage from "../assets/leader.png";
import communitiestImage from "../assets/role-model.png";
import postIdealistImage from "../assets/5.png";
import thoughtLeaderImage from "../assets/anniversary.png";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState({
    user: localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null,
  });
  const [postCount, setPostCount] = useState(0); // State for post count
  const [communityCount, setCommunityCount] = useState(0); // State for community count
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentProfile = async () => {
      try {
        // Fetch current profile
        const response = await httpClient.get("/profile/currentProfile");
        const user = response.data;
        setUser(user);
        setBio(user.bio || "");
        setAvatarUrl(user.avatarUrl || "");
        console.log("User:", user);
        console.log("Auth : ", auth);

        // Fetch additional data for community and post counts
        if (auth.user.userId) {
          try {
            console.log("Id : ", auth.user.userId);
            const postCountResponse = await httpClient.get(
              `/user/userPostCount/${auth.user.userId}`
            );
            console.log("Post count : ", postCountResponse.data);
            const communityCountResponse = await httpClient.get(
              `/user/userCommunityCount/${auth.user.userId}`
            );

            const postCount = postCountResponse.data || 0; // Assuming response includes 'count'
            const communityCount = communityCountResponse.data || 0; // Assuming response includes 'count'
            //const communityCount = 0; // Assuming response includes 'count'
            setPostCount(postCount); // Set post count in state
            setCommunityCount(communityCount); // Set community count in state

            console.log("Post Count:", postCount);
            console.log("Community Count:", communityCount);
            setLoading(false);

            // Update your state or UI accordingly if needed
          } catch (err) {
            console.error("Error fetching counts:", err);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Error fetching profile:", err);

        // If no profile exists, create one
        try {
          const res = await httpClient.post("/profile/create", {
            bio: "I am using community app",
            avatarUrl:
              "https://i.pinimg.com/236x/d6/cd/f2/d6cdf2a5daaf96462127cc31fb621851.jpg",
          });
          window.location.href = window.location.href;
        } catch (creationErr) {
          console.error("Error creating profile:", creationErr);
          setLoading(false);
        }
      }
    };

    fetchCurrentProfile();
  }, []);

  const badges = [
    {
      title: "First Community",
      image: firstCommunityImage,
      counter: 1,
      tag: "Community",
      requirement: "Create your first community to earn this badge."
    },
    {
      title: "Community Grower",
      image: communityGrowerImage,
      counter: 5,
      tag: "Community",
      requirement: "Create at least 5 communities to earn this badge."
    },
    {
      title: "Communitiest",
      image: communitiestImage,
      counter: 10,
      tag: "Community",
      requirement: "Create at least 10 communities to earn this badge."
    },
    {
      title: "First Interaction",
      image: firstInteractionImage,
      counter: 1,
      tag: "Post",
      requirement: "Create your first post to earn this badge."
    },
    {
      title: "Post Idealist",
      image: postIdealistImage,
      counter: 5,
      tag: "Post",
      requirement: "Create at least 5  posts to earn this badge."
    },
    {
      title: "Thought Leader",
      image: thoughtLeaderImage,
      counter: 10,
      tag: "Post",
      requirement: "Create at least 10  posts to earn this badge."
    }
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
      const response = await httpClient.put("/profile/update", updatedData);

      console.log("Bio updated successfully:", response.data);

      setUser((prevUser) => ({
        ...prevUser,
        bio: response.data.bio,
        avatarUrl: response.data.avatarUrl,
      }));

      setShowModal(false);
    } catch (err) {
      console.error("Error updating bio:", err);
    }
  };

  return (
    <>
      <PageMetaData title="Profile Page" />
      <Navbar />
      {loading ? (
        <LoadingScreen /> // Show the loading screen while data is being fetched
      ) : (
        <div className="profile-page">
          <div className="profile-card">
            <img
              src={
                user.avatarUrl ||
                "https://i.pinimg.com/236x/d6/cd/f2/d6cdf2a5daaf96462127cc31fb621851.jpg"
              }
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
              {badges.map((badge, index) => {
                const isBlurred =
                  (badge.tag === "Post" && postCount < badge.counter) ||
                  (badge.tag === "Community" && communityCount < badge.counter);

                return (
                  <div
                    key={index}
                    className={`badge ${isBlurred ? "badge--blurred" : ""}`}
                  >
                    <img
                      src={badge.image}
                      alt={badge.title}
                      className="badge__image"
                    />
                    <span className="badge__title">{badge.title}</span>
                    <span className="badge__requirement-profile">{badge.requirement}</span>
                  </div>
                );
              })}
            </div>
          </div>


          {showModal && (
            <div className="modal-profile">
              <div className="modal-profile-content-profile">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
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
                  <button
                    type="button"
                    className="button-1"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProfilePage;
