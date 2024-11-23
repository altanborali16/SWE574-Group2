import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostList";
import LoadingScreen from "./SharedComponents/LoadingScreen.jsx";

const Home = () => {
  // Inline styles for the component
  const [filteredCommunities, setFilteredCommunityListDb] = useState([]);
  const [allPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        // Extract all posts and include the communityId
        const allPosts = filteredCommunities
          .flatMap((community) =>
            community.posts.map((post) => ({
              ...post,
              communityId: community.id, // Add communityId to each post
            }))
          )
          .sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort by descending time

        console.log("All Sorted Posts with Community ID:", allPosts);

        setFilteredPosts(allPosts); // Assuming a state to hold just the posts
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
            display: "flex", // Flexbox for centering
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center", // Centering vertically
            minHeight: "100vh", // Full viewport height for vertical centering
          }}
        >
          {allPosts.length > 0 ? (

              <div>
                {/* Display community name or other details */}
                  <PostsView posts={allPosts} />
              </div>

          ) : (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", // Center text alignment
              height: "50vh", // Adjust as needed
            }}
          >
            <p>No subscribed or owned communities available. You can check Communities Page or Feed :) </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
