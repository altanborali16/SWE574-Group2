import React from "react";
import { FaLock, FaLockOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Styles/CommunitiesPage.css"; // Ensure CSS is scoped or modular
import CommunityImages from "../../Helpers/CommunityImages";

// Default image
const defaultImage =
  "https://www.the-rampage.org/wp-content/uploads/2019/05/263480.jpg";

const CommunityListOld = ({ communityList, title = "Communities" }) => {
  return (
    <div className="communities-page">
      <h1>{title}</h1>
      <div className="community-list">
        {communityList.map((community, index) => {
          // Find the first matching image based on tags
          const matchingImage = community.tags
            .map((tag) =>
              CommunityImages.find(
                (image) => image.tag.toLowerCase() === tag.name.toLowerCase()
              )
            )
            .find(Boolean); // Get the first non-null match

          const imageUrl = matchingImage
            ? matchingImage.imageUrl
            : defaultImage;

          return (
            <Link
              to={`/community/${community.id}`}
              key={index}
              className="community-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="community-card" key={index}>
                <img
                  src={
                    community?.imageData
                      ? `data:${community.imageType};base64,${community.imageData}`
                      : imageUrl
                  } // Use the matched or default image
                  alt={`${community.name} cover`}
                  className="community-card__image"
                />
                <div className="community-card__content">
                  <h2 className="community-card__name">{community.name}</h2>
                  <p className="community-card__description">
                    {community.communityDescription}
                  </p>
                  {/* Categories */}
                  <div className="community-card__categories">
                    {community.tags.map((tag, idx) => (
                      <span className="community-card__category" key={idx}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  {/* Status (Private or Public) */}
                  <div className="community-card__status">
                    {community.private ? (
                      <FaLock className="community-card__icon private" />
                    ) : (
                      <FaLockOpen className="community-card__icon public" />
                    )}
                    <span>{community.private ? "Private" : "Public"}</span>
                  </div>
                  {/* Stats (Post count and Subscriber count) */}
                  <div className="community-card__stats">
                    <div className="community-card__stat">
                      <FaClipboardList />{" "}
                      <span>{community.posts.length} Posts</span>
                    </div>
                    <div className="community-card__stat">
                      <FaUsers />{" "}
                      <span>{community.memberships.length} Subscribers</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CommunityListOld;
