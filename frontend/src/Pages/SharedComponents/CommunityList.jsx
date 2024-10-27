import React from 'react';
import { FaLock, FaLockOpen, FaClipboardList, FaUsers } from 'react-icons/fa';
import '../../Styles/CommunitiesPage.css'; // Ensure CSS is scoped or modular

const CommunityList = ({ communityList, title = "Communities" }) => {
  return (
    <div className="communities-page">
      <h1>{title}</h1>
      <div className="community-list">
        {communityList.map((community, index) => (
          <div className="community-card" key={index}>
            <img src={community.picture} alt={`${community.name} cover`} className="community-card__image" />
            <div className="community-card__content">
              <h2 className="community-card__name">{community.name}</h2>
              <p className="community-card__description">{community.description}</p>

              {/* Categories */}
              <div className="community-card__categories">
                {community.categories.map((category, idx) => (
                  <span className="community-card__category" key={idx}>{category}</span>
                ))}
              </div>

              {/* Created by */}
              <div className="community-card__creator">
                <img src={community.creator.profilePic} alt="Creator" className="creator-profile-pic" />
                <span>{community.creator.name}</span>
              </div>

              {/* Status (Private or Public) */}
              <div className="community-card__status">
                {community.isPrivate ? (
                  <FaLock className="community-card__icon private" />
                ) : (
                  <FaLockOpen className="community-card__icon public" />
                )}
                <span>{community.isPrivate ? "Private" : "Public"}</span>
              </div>

              {/* Stats (Post count and Subscriber count) */}
              <div className="community-card__stats">
                <div className="community-card__stat">
                  <FaClipboardList /> <span>{community.postCount} Posts</span>
                </div>
                <div className="community-card__stat">
                  <FaUsers /> <span>{community.subscriberCount} Subscribers</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityList;