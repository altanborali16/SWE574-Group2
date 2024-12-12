import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import "../Styles/CommunityPage.css";
import CreateTemplateForm from "../Components/Forms/CreateTemplateForm";
import AdvancedSearchForm from "../Components/Forms/AdvancedSearchForm";
import CreatePostForm from "../Components/Forms/CreatePostForm";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from "jwt-decode";
import PostsView from "./SharedComponents/PostList";
import NavbarCommunity from "./NavBarCommunity";
import { useSearchEngine } from "./Functions/SearchFunctions/SearchEngine";
import MemberList from "./SharedComponents/MemberList";
import ShowResultPage from "./SharedComponents/ShowResultPage";
import LoadingScreen from "./SharedComponents/LoadingScreen";
import CommunityImages from "../Helpers/CommunityImages";
import topContibutorImage from "../assets/first-prize.png";
import creativityImage from "../assets/creativity.png";
import leadershipImage from "../assets/leadership.png";
import commentImage from "../assets/comment.png";
import likeImage from "../assets/like.png";
import AspiringAuthorImage from "../assets/writer.png";

const CommunityPage = () => {
  const { id } = useParams();

  const [communityDb, setcommunityDb] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [dataFromDb, setDataOnDb] = useState(false); // Initialize loading state
  const [isUserMember, setIsUserMember] = useState(false);

  const [isSearchForm, setIsSearchForm] = useState(false);
  const [isSearchCommunity, setIsSearchCommunity] = useState(false);
  const [searchObject, setSearchObject] = useState({});

  const [isUserOwner, setIsUserOwner] = useState(false);
  const user = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;

  const updateCommunityPosts = (updatedPosts) => {
    setcommunityDb((prevCommunity) => ({
      ...prevCommunity,
      posts: updatedPosts,
    }));
  };
  const [showSubscribersList, setShowSubscribersList] = useState(false);
  const [postCount, setPostCount] = useState(0); // State for post count
  const [commentCount, setcommentCount] = useState(0); // State for community count
  const badges = [
    {
      title: "First Comment",
      image: commentImage,
      counter: 1,
      tag: "Comment",
      requirement: "Post at least 1 comment to earn this badge.",
    },
    {
      title: "Innovator",
      image: creativityImage,
      counter: 5,
      tag: "Comment",
      requirement: "Post at least 5 comments to earn this badge.",
    },
    {
      title: "Visionary",
      image: leadershipImage,
      counter: 10,
      tag: "Comment",
      requirement: "Post at least 10 comments to earn this badge.",
    },
    {
      title: "First Post",
      image: likeImage,
      counter: 1,
      tag: "Post",
      requirement: "Create at least 1 post to earn this badge.",
    },
    {
      title: "Aspiring Author",
      image: AspiringAuthorImage,
      counter: 5,
      tag: "Post",
      requirement: "Create at least 5 posts to earn this badge.",
    },
    {
      title: "Top Contributor",
      image: topContibutorImage,
      counter: 10,
      tag: "Post",
      requirement: "Create at least 10 posts to earn this badge.",
    },
  ];

  const handleShowSubscribers = () => {
    fetchSubscribers();
    setShowSubscribersList(true);
  };

  const handleCloseSubscribers = () => {
    setShowSubscribersList(false);
  };

  const [subscribers, setSubscribers] = useState([]);
  const fetchSubscribers = async () => {
    try {
      const response = await httpClient.get("community/members/" + id);
      console.log("Subscribers:", response.data);
  
      // Ensure community data is loaded before mapping roles
      if (communityDb.memberships && communityDb.memberships.length > 0) {
        const subscribersWithRoles = response.data.map((subscriber) => {
          const membership = communityDb.memberships.find(
            (m) => m.id.userId === subscriber.id
          );
          return {
            ...subscriber,
            role: membership ? membership.role : "Member", // Default role to "Member"
          };
        });
  
        setSubscribers(subscribersWithRoles);
      } else {
        console.error("Community memberships data not available.");
        setSubscribers(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
    }
  };
  
  const fetchBadges = async () => {
    try {
      console.log("Id : ", user.userId);
      const postCountResponse = await httpClient.get(
        `/community/userPostCount/${id}/${user.userId}`
      );
      const commentCountResponse = await httpClient.get(
        `/community/userCommentCount/${id}/${user.userId}`
      );

      const postCount = postCountResponse.data || 0; // Assuming response includes 'count'
      const commentCount = commentCountResponse.data || 0; // Assuming response includes 'count'
      setPostCount(postCount); // Set post count in state
      setcommentCount(commentCount); // Set community count in state

      console.log("Post Count:", postCount);
      console.log("Comment Count:", commentCount);

      // Update your state or UI accordingly if needed
    } catch (err) {
      console.error("Error fetching counts:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Wait for all fetch functions to finish
        await Promise.all([
          fetchCommunity(),
          fetchSubscribers(),
          fetchBadges(),
        ]);
        console.log("Is User Member:", isUserMember);
        console.log("Is User Owner:", isUserOwner);
        console.log("Data from db:", dataFromDb);
        console.log("Community", community);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchData();
  }, [id]);

  const fetchCommunity = async () => {
    setLoading(true); // Set loading to true when starting the fetch
    try {
      const response = await httpClient.get("/community/" + id);
      const communityData = response.data;
      setcommunityDb(communityData);
      setDataOnDb(true);
      // Check if the user is a member
      console.log("User : ", user);
      const userMembership = communityData.memberships.find(
        (membership) => Number(membership.id.userId) === Number(user.userId)
      );
      setIsUserMember(!!userMembership); // Set to true if user is a member
      // Check if the user is the owner
      setIsUserOwner(userMembership && userMembership.role === "CREATOR");
      console.log("Community:", response.data);
    } catch (err) {
      console.error(err);
      setcommunityDb([]);
    } finally {
      // setLoading(false); // Set loading to false once fetch completes or fails
    }
  };

  // Logging state changes
  // useEffect(() => {
  //   console.log("Is User Member:", isUserMember);
  //   console.log("Is User Owner:", isUserOwner);
  //   console.log("Data from db:", dataFromDb);
  //   console.log("Community", community);
  // }, [isUserMember, isUserOwner]);

  console.log({ searchObject });

  const filter = searchObject?.basicSearch?.filters;

  let { result: searchResults, memberResult } = useSearchEngine(
    communityDb,
    searchObject,
    subscribers
  );

  if (
    !filter?.posts &&
    !filter?.comments &&
    searchObject?.basicSearch?.searchQuery === ""
  ) {
    searchResults = [];
  }

  console.log({ searchResults, memberResult });
  console.log({ isSearchForm, isSearchCommunity });

  const [showCreateTemplateForm, setShowCreateTemplateForm] = useState(false);
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);

  const createFields = async (templateId, fields) => {
    for (const field of fields) {
      try {
        const responseCreateField = await httpClient.post(
          `/templates/addField/${templateId}`,
          field
        );
        console.log("Field created: ", responseCreateField.data);
      } catch (error) {
        console.error("Error creating field: ", error);
      }
    }
  };

  const addTemplate = async (newTemplate) => {
    try {
      const responseCreateTemplate = await httpClient.post(
        "/templates/create/" + id,
        {
          name: newTemplate.name,
          description: newTemplate.description,
        }
      );
      console.log(
        "Template created successfully:",
        responseCreateTemplate.data
      );
      await createFields(responseCreateTemplate.data.id, newTemplate.fields);
      window.location.href = window.location.href; // This will refresh the page
    } catch (error) {
      console.error("Error creating template:", error);
    }
    // setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
  };

  const addPost = async (newPost) => {
    console.log(newPost);
    try {
      const responseCreatePost = await httpClient.post(
        "/post/create/" + id,
        newPost
      );
      console.log("Post created successfully:", responseCreatePost.data);
      window.location.href = window.location.href; // This will refresh the page
    } catch (error) {
      console.error("Error creating post:", error);
    }
    // setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
  };

  const handleKickMember = async (userId) => {
    try {
      const response = await httpClient.delete(`/community/remove-member/${id}/${userId}`);
      alert(response.data); // Display a success message
      setSubscribers((prevSubscribers) =>
        prevSubscribers.filter((subscriber) => subscriber.id !== userId)
      ); // Remove the kicked member from the list
    } catch (error) {
      console.error("Error kicking member:", error);
      alert("Failed to remove the member. Please try again.");
    }
  };

  const handleOpenForm = () => {
    setShowCreateTemplateForm(true);
  };

  const handleOpenPostForm = () => {
    setShowCreatePostForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateTemplateForm(false);
    setShowCreatePostForm(false);
    setIsSearchForm(false);
  };

  const handleFollow = async () => {
    try {
      const res = await httpClient.post("/community/join/" + id);
      console.log("Res : ", res);
      window.location.href = window.location.href; // This will refresh the page
    } catch (error) {
      console.error("Error follow:", error);
    }
  };
  const handleUnFollow = async () => {
    try {
      const res = await httpClient.delete("/community/leave/" + id);
      console.log("Res : ", res);
      window.location.href = window.location.href; // This will refresh the page
    } catch (error) {
      console.error("Error unfollow:", error);
    }
  };
  const community = communityDb;
  console.log({ community });
  if (loading) {
    // Display loading message or spinner
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  } else if (!community) {
    return <div>Community not found</div>;
  } else {
    return (
      <>
        <PageMetaData title="Communities" />
        <NavbarCommunity isSearchForm={setIsSearchForm} />
        {isSearchForm && (
          <div className="modal-overlay" onClick={handleCloseForm}>
            <div
              className="modal-content-community"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={handleCloseForm}>
                &times;
              </button>
              <AdvancedSearchForm
                formPlace="community"
                community={community}
                setSearchObject={setSearchObject}
                setIsSearchForm={setIsSearchForm}
                setIsSearch={setIsSearchCommunity}
              />
            </div>
          </div>
        )}

        {showCreateTemplateForm && (
          <div className="modal-overlay" onClick={handleCloseForm}>
            <div
              className="modal-content-community"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={handleCloseForm}>
                &times;
              </button>
              <CreateTemplateForm
                onTemplateCreated={addTemplate}
                onClose={handleCloseForm}
              />
            </div>
          </div>
        )}
        {showCreatePostForm && (
          <div className="modal-overlay" onClick={handleCloseForm}>
            <div
              className="modal-content-community"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={handleCloseForm}>
                &times;
              </button>
              <CreatePostForm
                templates={community.templates}
                onPostCreated={addPost}
                onClose={handleCloseForm}
              />
            </div>
          </div>
        )}
        <div className="community-page">
          <div className="community-header-card">
            <img
              src={
                community?.imageData
                  ? `data:${community.imageType};base64,${community.imageData}` // Öncelikli olarak imageData kullanılır
                  : community?.tags?.find((tag) =>
                      CommunityImages.some(
                        (image) =>
                          image.tag.toLowerCase() === tag.name?.toLowerCase()
                      )
                    )
                  ? CommunityImages.find(
                      (image) =>
                        image.tag.toLowerCase() ===
                        community?.tags
                          ?.find((tag) =>
                            CommunityImages.some(
                              (image) =>
                                image.tag.toLowerCase() ===
                                tag.name?.toLowerCase()
                            )
                          )
                          ?.name?.toLowerCase()
                    )?.imageUrl
                  : "https://www.the-rampage.org/wp-content/uploads/2019/05/263480.jpg" // Varsayılan görsel
              }
              alt={community?.name || "community"}
              className="community-picture"
            />
            <div className="community-header-content">
              <h1>{community.name}</h1>
              <p>{community.description}</p>
              <div className="community-stats">
                <span>{community?.posts?.length || 0} Posts</span> |
                <span
                  className="subscribers-link"
                  onClick={handleShowSubscribers}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {community.memberships.length} Subscribers{" "}
                </span>
              </div>
              <div className="community-categories">
                {community.tags.map((category, index) => (
                  <span key={index} className="category-tag">
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Button to open the form */}
            {isUserOwner && (
              <button onClick={handleOpenForm}>Create Template</button>
            )}
            {isUserMember && (
              <button onClick={handleOpenPostForm}>Create Post</button>
            )}
            {!isUserMember && (
              <button
                style={{ backgroundColor: "green" }}
                onClick={handleFollow}
              >
                Follow
              </button>
            )}
            {isUserMember && !isUserOwner && (
              <button
                style={{ backgroundColor: "red" }}
                onClick={handleUnFollow}
              >
                UnFollow
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="badges-section">
            <h3>Badges</h3>
            <div className="badges-list">
              {badges.map((badge, index) => {
                const isBlurred =
                  (badge.tag === "Post" && postCount < badge.counter) ||
                  (badge.tag === "Comment" && commentCount < badge.counter);

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
                    <span className="badge__requirement-community">
                      {badge.requirement}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {isSearchCommunity ? (
            <ShowResultPage
              onClickSearch={setIsSearchCommunity}
              posts={searchResults}
              header={`${searchResults.length} Post Results`}
              memberResult={memberResult}
            />
          ) : community.posts.length > 0 ? (
            <PostsView
              posts={community.posts}
              header={"Posts"}
              setPosts={updateCommunityPosts}
              privateCommunity={community.privateCommunity}
            />
          ) : (
            <p>No posts available in this community.</p>
          )}
        </div>
        {showSubscribersList && (
      <div className="subscribers-modal">
        <div className="modal-overlay" onClick={handleCloseSubscribers}>
          <div
            className="modal-content-community"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={handleCloseSubscribers}
            >
              &times;
            </button>
            <h2>Subscribers</h2>
            <ul className="subscribers-list">
              {subscribers.map((subscriber, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <span>
                      {subscriber.username || "Unknown Subscriber"}{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          fontSize: "0.9em",
                          color: "gray",
                        }}
                      >
                        ({subscriber.role || "Member"})
                      </span>
                    </span>
                  </div>
                  {isUserOwner && subscriber.role !== "CREATOR" && (
                    <button
                      style={{
                        marginLeft: "10px",
                        padding: "5px 10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      onClick={() => handleKickMember(subscriber.id)}
                    >
                      Kick
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )}
      </>
    );
  }
};

export default CommunityPage;
