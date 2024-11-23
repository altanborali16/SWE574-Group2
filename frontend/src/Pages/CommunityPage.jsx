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

const CommunityPage = () => {
  const { id } = useParams();

  const [communityDb, setcommunityDb] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [dataFromDb, setDataOnDb] = useState(false); // Initialize loading state
  const [isUserMember, setIsUserMember] = useState(false);

  const [isSearchForm, setIsSearchForm] = useState(false);
  const [isSearchCommunity, setIsSearchCommunity] = useState(false);
  const [resultCommunity, setResultCommunity] = useState([]);
  const [searchObject, setSearchObject] = useState({});

  const [isUserOwner, setIsUserOwner] = useState(false);
  const user = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;

  const [showSubscribersList, setShowSubscribersList] = useState(false);

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

      setSubscribers(response.data);
    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, [id]);

  useEffect(() => {
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
        setLoading(false); // Set loading to false once fetch completes or fails
      }
    };
    fetchCommunity();
  }, [id]);
  // Logging state changes
  useEffect(() => {
    console.log("Is User Member:", isUserMember);
    console.log("Is User Owner:", isUserOwner);
    console.log("Data from db:", dataFromDb);
    console.log("Community", community);
  }, [isUserMember, isUserOwner]);

  const searchResults = useSearchEngine(communityDb, searchObject);

  console.log({ searchResults });
  console.log({ isSearchForm, isSearchCommunity });

  useEffect(() => {
    if (isSearchCommunity) {
      // Eğer arama aktifse, searchResults'i setResultCommunity ile kaydediyoruz
      setResultCommunity(searchResults);
    }
  }, [isSearchCommunity, searchResults]);

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
      const res = await httpClient.post("/community/leave/" + id);
      console.log("Res : ", res);
      window.location.href = window.location.href; // This will refresh the page
    } catch (error) {
      console.error("Error unfollow:", error);
    }
  };
  const community = communityDb
  if (loading) {
    // Display loading message or spinner
    return <div>Loading...</div>;
  }
  if (!community) {
    return <div>Community not found</div>;
  }
    return (
      <>
        <PageMetaData title="Communities" />
        <NavbarCommunity isSearchForm={setIsSearchForm} />
        {isSearchForm && (
          <div className="modal-overlay" onClick={handleCloseForm}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
              src={community.picture}
              alt={community.name}
              className="community-picture"
            />
            <div className="community-header-content">
              <h1>{community.name}</h1>
              <p>{community.description}</p>
              <div className="community-stats">
                <span>{community.posts.length} Posts</span> |
                <span
                  className="subscribers-link"
                  onClick={handleShowSubscribers}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {community.memberships.length} Subscribers{" "}
                </span>
              </div>
              {/* <div className="community-categories">
              {community.categories.map((category, index) => (
                <span key={index} className="category-tag">{category}</span>
              ))}
            </div> */}
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
          {isSearchCommunity ? (
            searchResults.length > 0 ? (
              <PostsView
                posts={searchResults}
                header={"Search Results"}
                onClickSearch={setIsSearchCommunity}
              />
            ) : (
              <p>No results found</p>
            )
          ) : community.posts.length > 0 ? (
            <PostsView posts={community.posts} header={"Posts"} />
          ) : (
            <p>No posts available in this community.</p>
          )}
        </div>
        {showSubscribersList && (
          <div className="subscribers-modal">
            <div className="modal-overlay" onClick={handleCloseSubscribers}>
              <div
                className="modal-content"
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
                    <li key={index}>
                      {subscriber.username || "Unknown Subscriber"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default CommunityPage;
