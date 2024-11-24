import React from "react";
import "../../Styles/LoadingScreen.css"

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingScreen;