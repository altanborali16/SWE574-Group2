import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityListOld from "./SharedComponents/CommunityListOld";
import { Link } from "react-router-dom";
import "../Styles/MyCommunitiesPage.css"
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from 'jwt-decode';

const MyCommunitiesPage = () => {
  const [ownedCommunityListDb, setOwnedCommunityListDb] = useState([]);
  const [subscribedCommunityListDb, setSubscribedOwnedCommunityListDb] = useState([]);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null
        console.log("User : " , user);
        const response = await httpClient.get("/community/list");
        const filteredOwnedCommunities = response.data.filter(community => 
          community.memberships.some(membership => membership.id.userId === user.userId && membership.role === "CREATOR")
        );
        setOwnedCommunityListDb(filteredOwnedCommunities);
        const filteredSubscribedCommunities = response.data.filter(community => 
          community.memberships.some(membership => membership.id.userId === user.userId && membership.role !== "CREATOR")
        );
        setSubscribedOwnedCommunityListDb(filteredSubscribedCommunities);
        console.log("Communities:", response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCommunityList();
  }, []);

  return (
    <>
      <PageMetaData title="My Communities" />
      <Navbar />
      <div className="create-community-button" style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/createcommunity">
          <button>Create New Community</button>
        </Link>
      </div>
      {ownedCommunityListDb.length > 0 && (
        <CommunityListOld communityList={ownedCommunityListDb} title="Owned Communities"/>
      )}
      {subscribedCommunityListDb.length > 0 && (
        <CommunityListOld communityList={subscribedCommunityListDb} title="Subscribed Communities"/>
      )}
    </>
  );
};

export default MyCommunitiesPage;
