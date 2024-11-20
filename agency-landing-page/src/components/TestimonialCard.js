import React from "react";

const TestimonialCard = ({ name, username, testimonial, image }) => {
  return (
    <div style={styles.card}>
      <p style={styles.testimonial}>{testimonial}</p>
      <div style={styles.userInfo}>
        <img src={image} alt={name} style={styles.image} />
        <div>
          <h4 style={styles.name}>{name}</h4>
          <p style={styles.username}>{username}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    margin: "10px",
  },
  testimonial: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  name: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  username: {
    fontSize: "12px",
    color: "#888",
  },
};

export default TestimonialCard;
