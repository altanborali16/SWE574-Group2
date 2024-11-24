function MemberList({ memberResult }) {
  if (!memberResult || memberResult.length === 0) {
    return <div>No members found.</div>;
  }

  return (
    <div style={styles.container}>
      {memberResult.map((member, index) => (
        <div key={index} style={styles.card}>
          <img
            src={member.profilePicture || "https://via.placeholder.com/50"}
            alt={`${member.username}'s profile`}
            style={styles.image}
          />
          <p style={styles.username}>{member.username}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "0.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  username: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    color: "#333",
    textAlign: "center",
  },
};

export default MemberList;
