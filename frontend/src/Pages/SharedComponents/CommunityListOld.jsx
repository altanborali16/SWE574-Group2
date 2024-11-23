import React from "react";
import { FaLock, FaLockOpen, FaClipboardList, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../../Styles/CommunitiesPage.css"; // Ensure CSS is scoped or modular

const CommunityListOld = ({ communityList, title = "Communities" }) => {
  return (
    <div className="communities-page">
      <h1>{title}</h1>
      <div className="community-list">
        {communityList.map((community, index) => (
          <Link
            to={`/community/${community.id}`}
            key={index}
            className="community-card-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="community-card" key={index}>
              <img
                src={community.picture}
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
                    <FaClipboardList /> <span>{community.posts.length} Posts</span>
                  </div>
                  <div className="community-card__stat">
                    <FaUsers />{" "}
                    <span>{community.memberships.length} Subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunityListOld;
