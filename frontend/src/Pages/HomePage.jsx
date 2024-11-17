import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostList";

const Home = () => {
  // Inline styles for the component
  const [filteredCommunities, setFilteredCommunityListDb] = useState([]);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null;
        console.log("User : ", user);
        const response = await httpClient.get("/community/list");
        const filteredCommunities = response.data.filter((community) =>
          community.memberships.some(
            (membership) => membership.id.userId === user.userId
          )
        );
        setFilteredCommunityListDb(filteredCommunities);
        console.log("Communities:", response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCommunityList();
  }, []);
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Stack headings vertically
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f0f0f0", // Light background color
    margin: 0, // Remove default margin
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem", // Title font size
    color: "#333", // Dark text color
    margin: "10px 0", // Margin between headings
  };

  return (
    <>
      <PageMetaData title="Home" />
      <Navbar />
      <div
        style={{
          margin: "0 auto",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map((community) => (
            <div key={community.id} style={{ marginBottom: "20px" }}>
              {/* Display community name or other details */}
              {community.posts && community.posts.length > 0 ? (
                <PostsView posts={community.posts} />
              ) : (
                <p>No posts available in this community.</p>
              )}
            </div>
          ))
        ) : (
          <p>No subscribed or owned communities available.</p>
        )}
      </div>
    </>
  );
};

export default Home;

