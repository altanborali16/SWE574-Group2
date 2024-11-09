import React from 'react';
import "../../Styles/PostView.css"; // Import your styles here

const PostsView = ({ posts }) => {
    return (
        <div className="posts-view">
            <h1>Posts</h1>
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p><strong>Time:</strong> {new Date(post.time).toLocaleString()}</p>
                        <p><strong>Template:</strong> {post.template ? post.template.name : 'No Template'}</p>

                        {/* Display post contents dynamically */}
                        <div className="post-contents">
                            {post.postContents.map((content, index) => (
                                <div key={index} className="post-content">
                                    <p><strong>{content.field.name}:</strong> {content.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* You can add additional fields or buttons here if needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsView;

