import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityListOld from "./SharedComponents/CommunityListOld";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from 'jwt-decode';

const CommunitiesPage = () => {
  const [communityListDb, setcommunityListDb] = useState([]);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null
        console.log("User : " , user);
        const response = await httpClient.get("/community/list");
        const filteredCommunities = response.data.filter(community => 
          !community.memberships.some(membership => membership.id.userId === user.userId)
        );
        setcommunityListDb(filteredCommunities);
        // setcommunityListDb(response.data);
        console.log("Communities:", response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCommunityList();
  }, []);

  return (
    <>
      <PageMetaData title="Communities" />
      <Navbar />
      {communityListDb.length > 0 && (
        <CommunityListOld
        communityList={communityListDb}
          title="Explore Communities"
        />
      )}
    </>
  );
};

export default CommunitiesPage;
