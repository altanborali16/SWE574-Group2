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

                {/* Status (Private or Public) */}
                <div className="community-card__status">
                  {community.private ? (
                    <FaLock className="community-card__icon private" />
                  ) : (
                    <FaLockOpen className="community-card__icon public" />
                  )}
                  <span>{community.isPrivate ? "Private" : "Public"}</span>
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
