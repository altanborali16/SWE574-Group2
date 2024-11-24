import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostList";
import LoadingScreen from "./SharedComponents/LoadingScreen.jsx";

const Feed = () => {
  // Inline styles for the component
  const [filteredCommunities, setFilteredCommunityListDb] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null;
        console.log("User : ", user);
        const response = await httpClient.get("/community/list");
        const filteredCommunities = response.data.filter(
          (community) =>
            !community.memberships.some(
              (membership) => membership.id.userId === user.userId
            )
        );
        setFilteredCommunityListDb(filteredCommunities);
        console.log("Communities:", response.data);
        console.log("Filtered:", filteredCommunities);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchCommunityList();
  }, []);

  return (
    <>
      <PageMetaData title="Home" />
      <Navbar />
      {loading ? (
        <LoadingScreen /> // Show the loading screen while data is being fetched
      ) : (
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
            <p>No avaliable post exist</p>
          )}
        </div>
      )}
    </>
  );
};

export default Feed;
