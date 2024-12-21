import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar.jsx";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostListForFeed.jsx";
import LoadingScreen from "./SharedComponents/LoadingScreen.jsx";

const Feed = () => {
  // Inline styles for the component
  const [filteredCommunities, setFilteredCommunityListDb] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPosts, setFilteredPosts] = useState([]);
  const [postComingFrom, setPostComingFrom] = useState(2); // 0 => recom, 1=> We have recom but no post, 2 => Please subscribe communities so we can help you 
  // const [combinedDistinctPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem("token")
          ? jwtDecode(localStorage.getItem("token"))
          : null;
        console.log("User : ", user);
        const response = await httpClient.get("/community/list");
        console.log("Communities : ", response.data)
        const userCommunities = response.data.filter((community) =>
          community.memberships.some(
            (membership) => membership.id.userId === user.userId
          )
        );

        const userTags = userCommunities
          .flatMap((community) => community.tags.map((tag) => tag.name.toLowerCase())); // Extract tag names and convert to lowercase
        const uniqueUserTags = [...new Set(userTags)]; // Remove duplicates
        console.log("User Tags:", uniqueUserTags);

        // Step 2: Find communities with matching tags
        const matchingTagCommunities = response.data.filter(
          (community) =>
            !community.memberships.some(
              (membership) => membership.id.userId === user.userId // Exclude user's own communities
            ) &&
            community.tags.some((tag) =>
              uniqueUserTags.includes(tag.name.toLowerCase()) // Check for matching tags
            )
        );

        console.log("Communities with Matching Tags:", matchingTagCommunities);

        if (matchingTagCommunities.length > 0) {
          const allPosts = matchingTagCommunities
            .flatMap((community) =>
              community.posts.map((post) => ({
                ...post,
                communityId: community.id, // Add communityId to each post
              }))
            )
            .sort((a, b) => {
              if ((b.voteCounter || 0) !== (a.voteCounter || 0)) {
                return (b.voteCounter || 0) - (a.voteCounter || 0);
              }
              return new Date(b.time) - new Date(a.time);
            });
          if (allPosts.length > 0) {
            setFilteredPosts(allPosts); // Assuming a state to hold just the posts
            setPostComingFrom(0);
          }
          else {
            const filteredCommunities = response.data.filter(
              (community) =>
                !community.memberships.some(
                  (membership) => membership.id.userId === user.userId
                ) && !community.privateCommunity // Exclude private communities
            );
            setFilteredCommunityListDb(filteredCommunities);
            const allPosts = filteredCommunities
              .flatMap((community) =>
                community.posts.map((post) => ({
                  ...post,
                  communityId: community.id, // Add communityId to each post
                }))
              )
              .sort((a, b) => {
                if ((b.voteCounter || 0) !== (a.voteCounter || 0)) {
                  return (b.voteCounter || 0) - (a.voteCounter || 0);
                }
                return new Date(b.time) - new Date(a.time);
              });
            setFilteredPosts(allPosts); // Assuming a state to hold just the posts
            setPostComingFrom(1);
          }
        }
        else {
          const filteredCommunities = response.data.filter(
            (community) =>
              !community.memberships.some(
                (membership) => membership.id.userId === user.userId
              ) && !community.privateCommunity // Exclude private communities
          );
          setFilteredCommunityListDb(filteredCommunities);
          const allPosts = filteredCommunities
            .flatMap((community) =>
              community.posts.map((post) => ({
                ...post,
                communityId: community.id, // Add communityId to each post
              }))
            )
            .sort((a, b) => {
              if ((b.voteCounter || 0) !== (a.voteCounter || 0)) {
                return (b.voteCounter || 0) - (a.voteCounter || 0);
              }
              return new Date(b.time) - new Date(a.time);
            });
          setFilteredPosts(allPosts); // Assuming a state to hold just the posts
          setPostComingFrom(2);
        }
        // console.log("Communities:", response.data);
        // console.log("Filtered:", filteredCommunities);
        // const responseByTags = await httpClient.get("/post/recommendations-by-tags");
        // console.log("response by tags: ", responseByTags.data)
        // const responseByLikes = await httpClient.get("/post/recommendations-by-likes");
        // console.log("response by likes: ", responseByLikes.data)
        // const postsByTags = responseByTags.data; // Assuming response.data is an array of posts
        // const postsByLikes = responseByLikes.data; // Assuming response.data is an array of posts
        // // Combine both arrays and remove duplicates based on a unique identifier (e.g., `id`)
        // const combinedDistinctPosts = [
        //   ...new Map(
        //     [...postsByTags, ...postsByLikes].map((post) => [post.id, post]) // Use post.id as the unique key
        //   ).values(),
        // ];
        // setRecommendedPosts(combinedDistinctPosts);
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
          {allPosts.length > 0 ? (
            <div>
              {postComingFrom === 0 ? (<p style={{ textAlign: "center" }}>Here are the recommendations for you</p>) : postComingFrom === 1 ? (<p style={{textAlign : "center"}}>Recommended communities does not have post to show so we create you explore page </p>) : (<p style={{textAlign : "center"}}>Please subscribe communities so we can help you with your recommendations</p>)}

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
              <p>No Feed is available </p>
            </div>
          )}
        </div >
      )}
    </>
  );
};

export default Feed;