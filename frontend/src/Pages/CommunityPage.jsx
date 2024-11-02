import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import "../Styles/CommunityPage.css";
import CreateTemplateForm from "../Components/Forms/CreateTemplateForm"

const CommunityPage = () => {
  const { id } = useParams();

  const [communityList, setCommunityList] = useState([
    {
      id: 1,
      name: "BJJ Club",
      description: "A community for BJJ athletes",
      picture: "https://hooshmand.net/wp-content/uploads/2024/02/bjj-black-belt-on-tatami-mat.jpg",
      isPrivate: false,
      isFollowing : true,
      categories: ["BJJ", "Martial Arts", "MMA"],
      postCount: 120,
      subscriberCount: 2400,
      posts: [
        {
          creationDate: "2024-10-01",
          createdBy: { name: "Altan Boralı", profilePic: "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg" },
          title: "BJJ Training Tips",
          description: "Some tips for beginners in BJJ.",
          likes: 30,
          dislikes: 2,
          comments: [
            { id: 1, text: "Great tips!", author: "Alice", profilePic: "https://example.com/alice.jpg" },
            { id: 2, text: "Very helpful, thanks!", author: "Bob", profilePic: "https://example.com/bob.jpg" },
          ],
        },
        {
          creationDate: "2024-09-20",
          createdBy: { name: "Efe Göçmen", profilePic: "https://corporateleagues.com/media/oyuncu/resim1703022799.jpg" },
          title: "Upcoming MMA Event",
          description: "Details about the upcoming event.",
          location: "Downtown Arena",
          likes: 45,
          dislikes: 5,
          comments: [
            { id: 3, text: "Can't wait for this event!", author: "Chris", profilePic: "https://example.com/chris.jpg" },
          ],
        },
      ],
    },
    {
        id : 7,
        name: "Art Lovers",
        description: "Explore the world of art.",
        picture: "https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675421.jpg",
        isPrivate: true,
        categories: ["Art", "Creativity","Painting","Patates"],
        creator: {
          name: "Lily Evans",
          profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        postCount: 85,
        subscriberCount: 1500,
        posts: [
          {
            creationDate: "2024-10-01",
            createdBy: { name: "Altan Boralı", profilePic: "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg" },
            title: "Art Event",
            description: "Some tips for beginners in BJJ.",
            likes: 30,
            dislikes: 2,
            comments: [
              { id: 1, text: "Great tips!", author: "Alice", profilePic: "https://example.com/alice.jpg" },
              { id: 2, text: "Very helpful, thanks!", author: "Bob", profilePic: "https://example.com/bob.jpg" },
            ],
          },
          {
            creationDate: "2024-09-20",
            createdBy: { name: "Efe Göçmen", profilePic: "https://corporateleagues.com/media/oyuncu/resim1703022799.jpg" },
            title: "Upcoming Painting Event",
            description: "Details about the upcoming event.",
            location: "Downtown Arena",
            likes: 45,
            dislikes: 5,
            comments: [
              { id: 3, text: "Can't wait for this event!", author: "Chris", profilePic: "https://example.com/chris.jpg" },
            ],
          },
        ],
      },
  ]);
  
  const [showCreateTemplateForm, setShowCreateTemplateForm] = useState(false);
  const [templates, setTemplates] = useState([
    {
      "name": "Basic Template",
      "description": "Basic Templates",
      "fields": [
        {
          "name": "Title",
          "dataType": "TEXT"
        },
        {
          "name": "Description",
          "dataType": "TEXT"
        }
      ],
      "name": "Event Template",
      "description": "Event Templates",
      "fields": [
        {
          "name": "Title",
          "dataType": "TEXT"
        },
        {
          "name": "Description",
          "dataType": "TEXT"
        }
      ],
    }
  ]); // State to hold list of templates

    // Function to add new template to the list
    const addTemplate = (newTemplate) => {
      setTemplates((prevTemplates) => [...prevTemplates, newTemplate]);
    };

  const handleOpenForm = () => {
    setShowCreateTemplateForm(true);
  };

  const handleCloseForm = () => {
    setShowCreateTemplateForm(false);
  };

  const community = communityList.find((community) => community.id === parseInt(id));
  const [newComment, setNewComment] = useState({});

  const handleLike = (postIndex) => {
    const updatedList = [...communityList];
    updatedList[0].posts[postIndex].likes += 1;
    setCommunityList(updatedList);
  };

  const handleDislike = (postIndex) => {
    const updatedList = [...communityList];
    updatedList[0].posts[postIndex].dislikes += 1;
    setCommunityList(updatedList);
  };

  const handleCommentChange = (postIndex, text) => {
    setNewComment({ ...newComment, [postIndex]: text });
  };

  const addComment = (postIndex) => {
    const updatedList = [...communityList];
    const newCommentObj = {
      id: Date.now(), // Unique id for each new comment
      text: newComment[postIndex],
      author: "Current User",
      profilePic: "https://example.com/currentuser.jpg", // Profile pic of the current user
    };
    updatedList[0].posts[postIndex].comments.push(newCommentObj);
    setCommunityList(updatedList);
    setNewComment({ ...newComment, [postIndex]: "" }); // Clear the comment input
  };

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <>
      <PageMetaData title="Communities" />
      <Navbar />

      {/* Conditionally render the CreateTemplateForm as a modal */}
      {showCreateTemplateForm && (
        <div className="modal-overlay" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseForm}>&times;</button>
            <CreateTemplateForm onTemplateCreated={addTemplate} onClose={handleCloseForm} />
          </div>
        </div>
      )}
      <div className="community-page">
        <div className="community-header-card">
          <img src={community.picture} alt={community.name} className="community-picture" />
          <div className="community-header-content">
            <h1>{community.name}</h1>
            <p>{community.description}</p>
            <div className="community-stats">
              <span>{community.postCount} Posts</span> |
              <span>{community.subscriberCount} Subscribers</span>
            </div>
            <div className="community-categories">
              {community.categories.map((category, index) => (
                <span key={index} className="category-tag">{category}</span>
              ))}
            </div>
          </div>
                {/* Button to open the form */}
          <button onClick={handleOpenForm}>Create Template</button>
        </div>

        <div className={`posts-section ${community.isPrivate && !community.isFollowing ? "blurred" : ""}`}>
          {community.posts.map((post, postIndex) => (
            <div key={postIndex} className="post-card">
              <div className="post-header">
                <img src={post.createdBy.profilePic} alt={post.createdBy.name} className="author-profile-pic" />
                <div>
                  <h3>{post.title}</h3>
                  <p>by {post.createdBy.name} on {post.creationDate}</p>
                </div>
              </div>
              <p>{post.description}</p>
              <div className="post-actions">
                <button onClick={() => handleLike(postIndex)}>👍 {post.likes}</button>
                <button onClick={() => handleDislike(postIndex)}>👎 {post.dislikes}</button>
              </div>

              <div className="comments-section">
                <h4>Comments</h4>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <img src={comment.profilePic} alt={comment.author} className="comment-profile-pic" />
                    <div>
                      <strong>{comment.author}</strong>
                      <p>{comment.text}</p>
                    </div>
                  </div>
                ))}
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment[postIndex] || ""}
                    onChange={(e) => handleCommentChange(postIndex, e.target.value)}
                  />
                  <button onClick={() => addComment(postIndex)}>Post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
