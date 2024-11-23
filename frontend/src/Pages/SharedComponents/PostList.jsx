import React, { useState, useEffect } from "react";
import "../../Styles/PostView.css";
import { FaReply } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import httpClient from "../../Helpers/HttpClient";

const PostsView = ({ posts, header, onClickSearch }) => {
  // State to hold comments for each post, each comment can have nested replies
  const [comments, setComments] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = [];
      return acc;
    }, {})
  );

  // State to hold new comment text for each post
  const [newComment, setNewComment] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = "";
      return acc;
    }, {})
  );

  const [auth, setAuth] = useState({
    user: localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null,
  });

  // State to hold new reply text for each comment
  const [newReply, setNewReply] = useState({});

  // State to handle reply form visibility
  const [replyFormVisible, setReplyFormVisible] = useState({});

  // State to hold edit status and text for comments and replies
  const [editComment, setEditComment] = useState({
    postId: null,
    commentIndex: null,
    text: "",
  });

  // State to handle dropdown visibility for each comment
  const [dropdownVisible, setDropdownVisible] = useState({
    postId: null,
    commentIndex: null,
  });

  // Handle comment text change
  const handleCommentChange = (postId, value) => {
    setNewComment((prevState) => ({
      ...prevState,
      [postId]: value,
    }));
  };

  // Handle adding a comment
  const handleAddComment = async (postId) => {
    const content = newComment[postId]?.trim();
    if (content !== "") {
      try {
        console.log("Content: ", content);
        console.log("Post ID: ", postId);
  
        const now = new Date();
        const currentTime = now.toISOString().slice(0, 19); // Format as "YYYY-MM-DDTHH:MM:SS"
  
        // API call to add the comment
        const response = await httpClient.post(`/comment/create/${postId}`, {
          content: content,
          time: currentTime,
          author: { id: auth.user.id },
          post: { id: postId },
        });
  
        const newCommentData = response.data; // Assuming this is the new comment object
        console.log("New Comment Data: ", newCommentData);
  
        // Update the posts state in the parent via onUpdatePosts
        const updatedPost = posts.find((post) => post.id === postId);
        if (updatedPost) {
          const updatedPostWithComments = {
            ...updatedPost,
            comments: [...updatedPost.comments, newCommentData], // Add new comment
          };

        }
  
        // Clear the comment input field
        setNewComment((prevState) => ({
          ...prevState,
          [postId]: "",
        }));
  
        console.log("New Comment Added to Post ID:", postId);
      } catch (error) {
        console.error("Error adding comment:", error);
        alert("Failed to add comment. Please try again later.");
      }
    }
  };

  // Handle reply text change
  const handleReplyChange = (postId, commentIndex, value) => {
    setNewReply((prevState) => ({
      ...prevState,
      [`${postId}-${commentIndex}`]: value,
    }));
  };

  // Handle adding a reply to a comment
  const handleAddReply = (postId, commentIndex) => {
    if (newReply[`${postId}-${commentIndex}`]?.trim() !== "") {
      setComments((prevState) => ({
        ...prevState,
        [postId]: prevState[postId].map((comment, index) =>
          index === commentIndex
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  newReply[`${postId}-${commentIndex}`],
                ],
              }
            : comment
        ),
      }));
      setNewReply((prevState) => ({
        ...prevState,
        [`${postId}-${commentIndex}`]: "",
      }));
      setReplyFormVisible((prevState) => ({
        ...prevState,
        [`${postId}-${commentIndex}`]: false,
      }));
    }
  };

  // Handle toggling reply form visibility
  const handleReplyButtonClick = (postId, commentIndex) => {
    setReplyFormVisible((prevState) => ({
      ...prevState,
      [`${postId}-${commentIndex}`]: !prevState[`${postId}-${commentIndex}`],
    }));
  };

  // Handle deleting a comment
  const handleDeleteComment = (postId, commentIndex) => {
    setComments((prevState) => ({
      ...prevState,
      [postId]: prevState[postId].filter((_, index) => index !== commentIndex),
    }));
    setDropdownVisible({ postId: null, commentIndex: null });
  };

  // Handle starting the edit process for a comment
  const handleEditComment = (postId, commentIndex, currentText) => {
    setEditComment({
      postId,
      commentIndex,
      text: currentText,
    });
    setDropdownVisible({ postId: null, commentIndex: null });
  };

  // Handle edit comment text change
  const handleEditChange = (value) => {
    setEditComment((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  // Handle saving an edited comment
  const handleSaveEdit = () => {
    setComments((prevState) => ({
      ...prevState,
      [editComment.postId]: prevState[editComment.postId].map(
        (comment, index) =>
          index === editComment.commentIndex
            ? { ...comment, text: editComment.text }
            : comment
      ),
    }));
    // Clear the edit state
    setEditComment({
      postId: null,
      commentIndex: null,
      text: "",
    });
  };

  // Handle cancelling edit
  const handleCancelEdit = () => {
    setEditComment({
      postId: null,
      commentIndex: null,
      text: "",
    });
  };

  // Handle showing/hiding the dropdown menu
  const handleDropdownToggle = (postId, commentIndex) => {
    setDropdownVisible((prevState) => ({
      postId:
        prevState.postId === postId && prevState.commentIndex === commentIndex
          ? null
          : postId,
      commentIndex:
        prevState.commentIndex === commentIndex && prevState.postId === postId
          ? null
          : commentIndex,
    }));
  };

  return (
    <div className="posts-view">
      {onClickSearch && (
        <button
          className="comment-button save-button"
          onClick={() => onClickSearch(false)}
        >
          Return to page
        </button>
      )}
      <h1>{header}</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>
              {" "}
              <span>Topic:</span> {post.title}
            </h2>
            <hr></hr>
            <p>
              <strong>Posted at:</strong> {new Date(post.time).toLocaleString()}
            </p>
            <p>
              <strong>Posted by:</strong> {auth.user.sub}
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

            {/* Comment Section */}
            <div className="comment-section">
              <hr></hr>
              <h3>Comments</h3>
              <div className="comments-list">
                {post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <div key={index} className="comment-item">
                      {editComment.postId === post.id &&
                      editComment.commentIndex === index ? (
                        <div className="edit-comment">
                          <textarea
                            value={editComment.text}
                            onChange={(e) => handleEditChange(e.target.value)}
                            className="comment-input"
                          />
                          <button
                            onClick={handleSaveEdit}
                            className="comment-button save-button"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="comment-button cancel-button"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="comment-content">
                            <p>
                              <strong>Posted by:</strong> {comment.author.username}
                            </p>
                            <p>
                              <strong>Posted at:</strong>{" "}
                              {new Date(comment.time).toLocaleString()}
                            </p>
                            <p className="comment">{comment.content}</p>
                            {/* <div className="comment-options">
                                                            <span
                                                                className="three-dots"
                                                                onClick={() => handleDropdownToggle(post.id, index)}
                                                            >
                                                                &#x22EE;
                                                                
                                                            </span>
                                                            {dropdownVisible.postId === post.id && dropdownVisible.commentIndex === index && (
                                                                <div className="dropdown-menu">
                                                                    <button
                                                                        onClick={() => handleEditComment(post.id, index, comment.text)}
                                                                        className="dropdown-button"
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteComment(post.id, index)}
                                                                        className="dropdown-button"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div> */}
                          </div>
                          {/* Reply Section */}
                          <div className="reply-section">
                            {comment.replies.length > 0 && (
                              <div className="replies-list">
                                {comment.replies.map((reply, replyIndex) => (
                                  <div key={replyIndex} className="reply-item">
                                    <p>
                                      <strong>Posted by:</strong>{" "}
                                      {auth.user.sub}
                                    </p>
                                    <p>
                                      <strong>Posted at:</strong>{" "}
                                      {new Date(post.time).toLocaleString()}
                                    </p>
                                    <p className="reply">{reply}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="reply-button-wrapper">
                              <span>Reply</span>
                              <FaReply
                                className="reply-icon"
                                onClick={() =>
                                  handleReplyButtonClick(post.id, index)
                                }
                              />
                            </div>
                            {replyFormVisible[`${post.id}-${index}`] && (
                              <div className="add-reply">
                                <textarea
                                  value={newReply[`${post.id}-${index}`] || ""}
                                  onChange={(e) =>
                                    handleReplyChange(
                                      post.id,
                                      index,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Write a reply..."
                                  className="reply-input"
                                />
                                <button
                                  onClick={() => handleAddReply(post.id, index)}
                                  className="reply-button"
                                >
                                  Reply
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="no-comments">No comments yet.</p>
                )}
              </div>

              {/* Text area for adding comments */}
              <div className="add-comment">
                <textarea
                  value={newComment[post.id]}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  placeholder="Write a comment..."
                  className="comment-input"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="comment-button"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsView;
