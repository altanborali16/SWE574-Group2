import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostListForFeed.jsx";
import LoadingScreen from "./SharedComponents/LoadingScreen.jsx";

const Feed = () => {
  // Inline styles for the component
  // const [filteredCommunities, setFilteredCommunityListDb] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [allPosts, setFilteredPosts] = useState([]);
  const [combinedDistinctPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null;
        console.log("User : ", user);
        // const response = await httpClient.get("/community/list");
        // const filteredCommunities = response.data.filter(
        //   (community) =>
        //     !community.memberships.some(
        //       (membership) => membership.id.userId === user.userId
        //     )
        // );
        // setFilteredCommunityListDb(filteredCommunities);
        // const allPosts = filteredCommunities
        //   .flatMap((community) =>
        //     community.posts.map((post) => ({
        //       ...post,
        //       communityId: community.id, // Add communityId to each post
        //     }))
        //   )
        //   .sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort by descending time

        // console.log("All Sorted Posts with Community ID:", allPosts);

        // setFilteredPosts(allPosts); // Assuming a state to hold just the posts
        // console.log("Communities:", response.data);
        // console.log("Filtered:", filteredCommunities);
        const responseByTags = await httpClient.get("/post/recommendations-by-tags");
        console.log("response by tags: " , responseByTags.data)
        const responseByLikes = await httpClient.get("/post/recommendations-by-likes");
        console.log("response by likes: " , responseByLikes.data)
        const postsByTags = responseByTags.data; // Assuming response.data is an array of posts
        const postsByLikes = responseByLikes.data; // Assuming response.data is an array of posts
        // Combine both arrays and remove duplicates based on a unique identifier (e.g., `id`)
        const combinedDistinctPosts = [
          ...new Map(
            [...postsByTags, ...postsByLikes].map((post) => [post.id, post]) // Use post.id as the unique key
          ).values(),
        ];
        setRecommendedPosts(combinedDistinctPosts);
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
      <PageMetaData title="Feed" />
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
          {combinedDistinctPosts.length > 0 ? (

            <div>
              {/* Display community name or other details */}
              <PostsView posts={combinedDistinctPosts} />
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
              <p>No Feed is available </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Feed;
