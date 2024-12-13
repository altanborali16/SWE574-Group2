import React, { useState, useEffect } from "react";
import "../../Styles/PostView.css";
import {
  FaReply,
  FaThumbsUp,
  FaThumbsDown,
  FaTransgender,
} from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import httpClient from "../../Helpers/HttpClient";
import LoadingScreen from "../SharedComponents/LoadingScreen";
import { useParams } from "react-router-dom";
import { useNotificationContext } from "../../Context/useNotificationContext.jsx";

const PostsView = ({ posts, header, setPosts, privateCommunity }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [isMember, setIsMember] = useState(false);
  // State to hold comments for each post, each comment can have nested replies
  const [comments, setComments] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = post.comments || [];
      return acc;
    }, {})
  );
  const { showNotification } = useNotificationContext();

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
  // console.log("Reply IDs:", replyIds);
  // console.log(privateCommunity);

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
    const content = newComment[postId]?.trim();
    if (content === "" || content === undefined) {
      showNotification({
        message: "Please add a comment",
        variant: "danger",
      });
      return;
    }
    setLoading(true);
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

        const newCommentData = {
          ...response.data,
          replies: response.data.replies || [], // Ensure replies is an array
        };

        console.log("New Comment Data: ", newCommentData);
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
        showNotification({
          message: "Commet added",
          variant: "success",
        });
      } catch (error) {
        console.error("Error adding comment:", error);
        alert("Failed to add comment. Please try again later.");
      }
    }
    setLoading(false);
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

    try {
      setLoading(true);
      let voteIncrementor = 1;
      // Check if the user has already voted
      if (voterIds.includes(auth.user.userId)) {
        voteIncrementor = -1;
      }

      // Perform the upvote API call
      const response = await httpClient.post(`post/upvote/${postId}`);
      console.log("Upvote Response:", response.data);

      // Update the specific post directly
      const updatedPost = {
        ...targetPost,
        voteCounter: targetPost.voteCounter + voteIncrementor, // Increment or decrement vote counter
        voters:
          voteIncrementor === 1
            ? [...targetPost.voters, { id: auth.user.userId }] // Add voter
            : targetPost.voters.filter((voter) => voter.id !== auth.user.userId), // Remove voter
      };

      // Update the posts array immutably
      const updatedPosts = posts.map((post) =>
        post.id === postId ? updatedPost : post
      );

      setPosts(updatedPosts); // Update state
      console.log("Updated Posts:", updatedPosts);
      if (voteIncrementor === 1) {
        showNotification({
          message: "Upvoted successfully!",
          variant: "success",
        });
      }
      else {
        showNotification({
          message: "Upvote taken back successfully!",
          variant: "success",
        });
      }

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

  const user = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;

  const [subscribers, setSubscribers] = useState([]);
  const fetchSubscribers = async () => {
    if (header !== "Posts") {
      setIsMember(true);
      return;
    }
    try {
      const response = await httpClient.get("community/members/" + id);
      console.log("Subscribers:", response.data);

      setSubscribers(response.data);

      if (user) {
        const userId = user.userId;
        const isUserMember = response.data.some(
          (subscriber) => subscriber.id === userId
        );
        setIsMember(isUserMember);
        console.log("Is User Member:", isUserMember);

      }

    } catch (err) {
      console.error("Failed to fetch subscribers:", err);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, [id]);


  // const handleDownvote = async (postId) => {
  //   const postIndex = localPosts.findIndex((post) => post.id === postId);
  //   if (postIndex === -1) return;

  //   // Check if the user has already voted
  //   if (localPosts[postIndex].voters.includes(auth.user.id)) {
  //     alert("You have already voted on this post.");
  //     return;
  //   }

  //   try {
  //     const response = await httpClient.post(`post/downvote/${postId}`);
  //     console.log("Downvote Response:", response.data);

  //     // Update local state
  //     const updatedPosts = [...localPosts];
  //     updatedPosts[postIndex].voteCounter -= 1; // Decrement voteCounter
  //     updatedPosts[postIndex].voters.push(auth.user.id); // Track voter
  //     setLocalPosts(updatedPosts); // Update state
  //   } catch (error) {
  //     console.error("Error downvoting post:", error);
  //     alert("Failed to downvote. Please try again later.");
  //   }
  // };

  // // Handle reply text change
  const handleReplyChange = (postId, commentIndex, value) => {
    setNewReply((prevState) => ({
      ...prevState,
      [`${postId}-${commentIndex}`]: value,
    }));
  };

  // // Handle adding a reply to a comment
  const handleAddReply = async (postId, index, commentId) => {
    const replyContent = newReply[`${postId}-${index}`]?.trim();
    console.log("Reply content :", replyContent)
    if (replyContent === "" || replyContent === undefined) {
      showNotification({
        message: "Please add a reply",
        variant: "danger",
      });
      return;
    }
    if (replyContent !== "") {
      try {
        const now = new Date();
        const currentTime = now.toISOString().slice(0, 19); // Format as "YYYY-MM-DDTHH:MM:SS"
        console.log(replyContent);

        // API call to add the reply
        const response = await httpClient.post(
          `/comment/reply/${postId}/${commentId}`,
          {
            content: replyContent,
            time: currentTime,
            author: { id: auth.user.userId },
            post: { id: postId },
          }
        );

        const newReplyData = {
          ...response.data,
          replies: response.data.replies || [], // Ensure nested replies is an array
        };

        console.log("New Reply Data: ", newReplyData);

        // Update the comments state
        setComments((prevState) => ({
          ...prevState,
          [postId]: prevState[postId].map((comment) =>
            comment.id === commentId
              ? {
                ...comment,
                replies: [...(comment.replies || []), newReplyData], // Safely add the new reply
              }
              : comment
          ),
        }));

        // Clear the reply input field and hide the reply form
        setNewReply((prevState) => ({
          ...prevState,
          [`${postId}-${index}`]: "",
        }));

        setReplyFormVisible((prevState) => ({
          ...prevState,
          [`${postId}-${index}`]: false,
        }));
        showNotification({
          message: "Commet replied",
          variant: "success",
        });
      } catch (error) {
        console.error("Error adding reply:", error);
      }
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

      <div className={`posts-container ${privateCommunity && !isMember ? "post--blurred" : ""}`}>
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
                          <div
                            className="reply-button-wrapper"
                            onClick={() => handleReplyButtonClick(post.id, index)}
                            style={{ cursor: "pointer" }} /* Adds a pointer cursor for clarity */
                          >
                            <span style={{ paddingRight: "5px" }}>Reply</span>
                            <FaReply className="reply-icon" />
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
                                onClick={() =>
                                  handleAddReply(post.id, index, comment.id)
                                }
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
