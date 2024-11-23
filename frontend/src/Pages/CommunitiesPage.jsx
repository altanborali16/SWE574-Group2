import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityListOld from "./SharedComponents/CommunityListOld";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from 'jwt-decode';
import LoadingScreen from "./SharedComponents/LoadingScreen";

const CommunitiesPage = () => {
  const [communityListDb, setcommunityListDb] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
      {loading ? (
        <LoadingScreen />
      ) : (
        communityListDb.length > 0 && (
          <CommunityListOld
            communityList={communityListDb}
            title="Explore Communities"
          />
        )
      )}
    </>
  );
};

export default CommunitiesPage;
