import React, { useState } from "react";
import "../../Styles/PostView.css";
import { FaReply, FaThumbsUp, FaThumbsDown, FaTransgender } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import httpClient from "../../Helpers/HttpClient";
import LoadingScreen from "../SharedComponents/LoadingScreen";
import { useParams } from "react-router-dom";
import { useNotificationContext } from "../../Context/useNotificationContext.jsx";

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
  const { showNotification } = useNotificationContext();

  const [localPosts, setLocalPosts] = useState(
    posts.map((post) => ({
      ...post,
      upvotes: post.upvotes || 0,
      downvotes: post.downvotes || 0,
      voters: post.voters || [],
    }))
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

  // Handle comment text change
  const handleCommentChange = (postId, value) => {
    setNewComment((prevState) => ({
      ...prevState,
      [postId]: value,
    }));
  };

  // Handle adding a comment
  const handleAddComment = async (postId) => {
    setLoading(true);
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
          author: { id: auth.user.userId },
          post: { id: postId },
        });

        const newCommentData = response.data; // Assuming this is the new comment object
        console.log("New Comment Data: ", newCommentData);

        const updatedPost = posts.find((post) => post.id === postId);
        if (updatedPost) {
          const updatedPostWithComments = {
            ...updatedPost,
            comments: [...updatedPost.comments, newCommentData], // Add new comment
          };
        }

        // Update the comments state for the specific post
        setComments((prevState) => ({
          ...prevState,
          [postId]: [...prevState[postId], newCommentData],
        }));

        // Clear the comment input field
        setNewComment((prevState) => ({
          ...prevState,
          [postId]: "",
        }));
        console.log("New Comment Added to Post ID:", postId);
        setLoading(false);
      } catch (error) {
        console.error("Error adding comment:", error);
        alert("Failed to add comment. Please try again later.");
      }
    }
  };
//HAndle Upvote
  const handleUpvote = async (postId) => {
    if (!postId) {
      console.error("Post ID is undefined");
      return;
    }
  
    console.log("Post ID:", postId);
    console.log("Posts:", posts);
  
    // Find the target post by postId
    const targetPost = posts.find((post) => post.id === postId);
  
    if (!targetPost) {
      console.error("Post not found with ID:", postId);
      return;
    }
  
    console.log("Target Post:", targetPost);
  
    // Extract voter IDs for comparison
    const voterIds = targetPost.voters.map((voter) => voter.id);
    console.log("Voters:", voterIds);
    console.log("User ID:", auth.user.userId);
  
    // Check if the user has already voted
    if (voterIds.includes(auth.user.userId)) {
      showNotification({
        message: "You have already voted on this post.",
        variant: "danger",
      });
      return;
    }
  
    try {
      setLoading(true);
  
      // Perform the upvote API call
      const response = await httpClient.post(`post/upvote/${postId}`);
      console.log("Upvote Response:", response.data);
  
      // Update the specific post directly
      const updatedPost = {
        ...targetPost,
        voteCounter: targetPost.voteCounter + 1, // Increment vote counter
        voters: [...targetPost.voters, { id: auth.user.userId }], // Add voter
      };
  
      // Update the posts array immutably
      const updatedPosts = posts.map((post) =>
        post.id === postId ? updatedPost : post
      );
  
      setPosts(updatedPosts); // Update state
      console.log("Updated Posts:", updatedPosts);
  
      showNotification({
        message: "Upvoted successfully!",
        variant: "success",
      });
      setLoading(false);
    } catch (error) {
      console.error("Error upvoting post:", error);
      showNotification({
        message: "Failed to upvote. Please try again later.",
        variant: "danger",
      });
      setLoading(false);
    }
  };

  const handleDownvote = async (postId) => {
    const postIndex = localPosts.findIndex((post) => post.id === postId);
    if (postIndex === -1) return;

    // Check if the user has already voted
    if (localPosts[postIndex].voters.includes(auth.user.id)) {
      alert("You have already voted on this post.");
      return;
    }

    try {
      const response = await httpClient.post(`post/downvote/${postId}`);
      console.log("Downvote Response:", response.data);

      // Update local state
      const updatedPosts = [...localPosts];
      updatedPosts[postIndex].voteCounter -= 1; // Decrement voteCounter
      updatedPosts[postIndex].voters.push(auth.user.id); // Track voter
      setLocalPosts(updatedPosts); // Update state
    } catch (error) {
      console.error("Error downvoting post:", error);
      alert("Failed to downvote. Please try again later.");
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
            <hr></hr>
            <div className="vote-buttons">
              <button
                className="upvote-button"
                onClick={() => handleUpvote(post.id)}
              >
                <FaThumbsUp /> Upvote ({post.voteCounter || 0})
              </button>
              {/* <button
                className="downvote-button"
                onClick={() => handleDownvote(post.id)}
              >
                <FaThumbsDown /> Downvote ({post.downvotes || 0})
              </button> */}
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <hr></hr>
              <h3>Comments</h3>
              {(comments[post.id] || []).length > 0 ? (
                (comments[post.id] || []).map((comment, index) => (
                  <div key={index} className="comment-item">
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
                      </div>
                      <div className="reply-section">
                        {(comment.replies || []).length > 0 && (
                          <div className="replies-list">
                            {comment.replies.map((reply, replyIndex) => (
                              <div key={replyIndex} className="reply-item">
                                <p>
                                  <strong>Posted by:</strong> {auth.user.sub}
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
                  </div>
                ))
              ) : (
                <p className="no-comments">No comments yet.</p>
              )}

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
