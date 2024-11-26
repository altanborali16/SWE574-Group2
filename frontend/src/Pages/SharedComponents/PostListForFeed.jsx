import React, { useState } from "react";
import "../../Styles/PostView.css";
import { FaReply, FaThumbsUp, FaThumbsDown, FaTransgender } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import httpClient from "../../Helpers/HttpClient.js";
import LoadingScreen from "./LoadingScreen.jsx";
import { useParams } from "react-router-dom";
import { useNotificationContext } from "../../Context/useNotificationContext.jsx";
import { useNavigate } from "react-router-dom";

const PostsView = ({ posts, header, setPosts }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // State to hold comments for each post, each comment can have nested replies
  const [comments, setComments] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = post.comments || [];
      return acc;
    }, {})
  );
  const navigate = useNavigate();
  const onNavigateClick = (communityId) => {
    navigate(`/community/${communityId}`);
  };


  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="posts-view">
      <h1>{header}</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>
              {" "}
              <span>Title:</span> {post.title}
            </h2>
            <hr></hr>
            <p>
              <strong>Posted at:</strong> {new Date(post.time).toLocaleString()}
            </p>
            <p>
            <strong>Posted by:</strong> {post.author.username}
            </p>
            <p>
              <strong>Template:</strong>{" "}
              {post.template ? post.template.name : "No Template"}
            </p>
            {/* Display post contents dynamically */}
            <div className="post-contents">
              {post.postContents.map((content, index) => (
                <div key={index} className="post-content">
                  {content.field.dataType === "IMAGE" ? (
                    <div>
                      <strong>{content.field.name}:</strong>
                      <img
                        src={content.value}
                        alt={content.field.name}
                        style={{
                          width: "60vh",
                          maxWidth: "1000px",
                          height: "60vh",
                        }}
                      />
                    </div>
                  ) : (
                    <p>
                      <strong>{content.field.name}:</strong> {content.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => onNavigateClick(post.communityId)}>Check Community</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsView;
