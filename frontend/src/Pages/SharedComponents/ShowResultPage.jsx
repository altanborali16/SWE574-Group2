import { useState } from "react";
import MemberList from "./MemberList";
import PostsView from "./PostList";

function ShowResultPage({ onClickSearch, posts, header, memberResult }) {
  const [view, setView] = useState("posts");
  console.log({ posts, memberResult });

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        {onClickSearch && (
          <button
            style={styles.buttonBack}
            onClick={() => onClickSearch(false)}
          >
            Return to page
          </button>
        )}
        <button style={styles.button} onClick={() => setView("posts")}>
          Show Post Results
        </button>
        <button style={styles.button} onClick={() => setView("users")}>
          Show Users Results
        </button>
      </div>
      <div style={styles.results}>
        {view === "users" &&
          (memberResult?.length > 0 ? (
            <MemberList memberResult={memberResult} />
          ) : (
            <div> No user results available </div>
          ))}
        {view === "posts" &&
          (posts?.length > 0 ? (
            <PostsView posts={posts} header={header} />
          ) : (
            <div> No post results available </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "1rem",
  },
  buttonContainer: {
    marginBottom: "1rem",
  },
  button: {
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonBack: {
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#228B22",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  results: {
    marginTop: "1rem",
  },
  postContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  postCard: {
    backgroundColor: "#f9f9f9",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "left",
  },
};

export default ShowResultPage;
