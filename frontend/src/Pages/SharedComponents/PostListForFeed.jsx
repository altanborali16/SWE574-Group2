import React, { useState, useEffect } from "react";
import "../../Styles/PostView.css";
import {
  FaThumbsUp,
} from "react-icons/fa";
import LoadingScreen from "../SharedComponents/LoadingScreen";
import { useNotificationContext } from "../../Context/useNotificationContext.jsx";
import { useNavigate } from "react-router-dom";

const PostsView = ({ posts, header }) => {
  // State to hold comments for each post, each comment can have nested replies
  const [comments, setComments] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = post.comments || [];
      return acc;
    }, {})
  );
  const { showNotification } = useNotificationContext();

  // State to hold new comment text for each post
  // Function to extract reply IDs from posts
  const getReplyIds = (posts) => {
    const replyIds = [];

    posts.forEach((post) => {
      post.comments.forEach((comment) => {
        comment.replies.forEach((reply) => {
          replyIds.push(reply.id);
        });
      });
    });

    return replyIds;
  };

  // Example usage
  const replyIds = getReplyIds(posts);
  console.log("Reply IDs:", replyIds);
  const handleUpvote = async () => {
    showNotification({
      message: "Please go to community!",
      variant: "primary",
    });
  };
  const navigate = useNavigate();
  const onNavigateClick = (communityId) => {
    navigate(`/community/${communityId}`);
  };
  return (
    <div className="posts-view">
      <h1>{header}</h1>

      <div className={"posts-container"}>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>
              {" "}
              {post.title}
            </h2>
            <hr></hr>
            {/* Display post contents dynamically */}
            <div className="post-contents">
              {post.postContents.map((content, index) => (
                <div key={index} className="post-content">
                  {content.field.dataType === "IMAGE" ? (
                    <div className="post-image">
                      {/* <strong>{content.field.name}:</strong> */}
                      <img
                        src={content.value}
                        alt={content.field.name}
                      />
                    </div>
                  ) : content.field.dataType === "GEOLOCATION" ? (
                    <div style={{ marginBottom: "1rem" }}>
                      <strong>{content.field.name}:</strong>{" "}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.value)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="geo-link"
                      >
                        {content.value}
                      </a>
                    </div>
                  ) : content.field.dataType === "DATE" ? (
                    <p>
                      <strong>{content.field.name}:</strong> {new Date(content.value).toLocaleDateString('en-GB')}
                    </p>
                  ) : (
                    <p>
                      <strong>{content.field.name}:</strong> {content.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
              <strong>Posted by:</strong> {post.author.username}
            </p>
            <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
              <strong>Posted at:</strong> {new Date(post.time).toLocaleString('en-GB')}
            </p>
            <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
              <strong>Template:</strong> {post.template ? post.template.name : "No Template"}
            </p>
            <div style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
              <button onClick={() => onNavigateClick(post.communityId)}>Check Community</button>
            </div>
            <hr></hr>
            <div className="vote-buttons">
              <button
                className="upvote-button"
                onClick={() => handleUpvote(post.id)}
              >
                <FaThumbsUp /> Upvote ({post.voteCounter || 0})
              </button>
            </div>
            {/* Comment Section */}
            <div className="comment-section">
              <hr></hr>
              <h3>Comments</h3>
              {(comments[post.id] || []).length > 0 ? (
                (comments[post.id] || [])
                  .filter((comment) => !replyIds.includes(comment.id)) // Exclude comments whose id is in replyIds
                  .map((comment, index) => (
                    <div key={index} className="comment-item">
                      <>
                        <div className="comment-content">
                          <p className="comment">{comment.content}</p>
                          <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
                            <strong>Posted by:</strong>{" "}
                            {comment.author.username}
                          </p>
                          <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
                            <strong>Posted at:</strong>{" "}
                            {new Date(comment.time).toLocaleString('en-GB')}
                          </p>
                        </div>
                        {/* Reply Section */}
                        <div className="reply-section">
                          {(comment.replies || []).length > 0 && (
                            <div className="replies-list">
                              {comment.replies.map((comment, replyIndex) => (
                                <div key={replyIndex} className="reply-item">
                                  <p className="reply">{comment.content}</p>
                                  <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
                                    <strong>Posted by:</strong>{" "}
                                    {comment.author.username}
                                  </p>
                                  <p style={{ textAlign: "right", fontSize: "0.85rem", color: "#888", marginBottom: "0" }}>
                                    <strong>Posted at:</strong>{" "}
                                    {new Date(comment.time).toLocaleString('en-GB')}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    </div>
                  ))
              ) : (
                <p className="no-comments">No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default PostsView;
