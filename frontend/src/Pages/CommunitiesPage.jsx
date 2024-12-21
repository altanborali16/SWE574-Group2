import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityListOld from "./SharedComponents/CommunityListOld";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from 'jwt-decode';
import LoadingScreen from "./SharedComponents/LoadingScreen";

const CommunitiesPage = () => {
  const [communityListDb, setcommunityListDb] = useState([]);
  const [matchingCommunityListDb, setMatchingCommunityListDb] = useState([]);
  const [nonMatchingCommunityListDb, setNonMatchingCommunityListDb] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const user = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')) : null
        console.log("User : ", user);
        const response = await httpClient.get("/community/list");
        const userCommunities = response.data.filter((community) =>
          community.memberships.some(
            (membership) => membership.id.userId === user.userId
          )
        );
        const userTags = userCommunities
          .flatMap((community) => community.tags.map((tag) => tag.name.toLowerCase())); // Extract tag names and convert to lowercase
        const uniqueUserTags = [...new Set(userTags)]; // Remove duplicates
        console.log("User Tags:", uniqueUserTags);

        // Step 2: Find communities with matching tags
        const matchingTagCommunities = response.data.filter(
          (community) =>
            !community.memberships.some(
              (membership) => membership.id.userId === user.userId // Exclude user's own communities
            ) &&
            community.tags.some((tag) =>
              uniqueUserTags.includes(tag.name.toLowerCase()) // Check for matching tags
            )
        );
        const nonMatchingTagCommunities = response.data.filter(
          (community) =>
            !community.memberships.some(
              (membership) => membership.id.userId === user.userId // Exclude user's own communities
            ) &&
            !community.tags.some((tag) =>
              uniqueUserTags.includes(tag.name.toLowerCase()) // Exclude communities with matching tags
            )
        );
        setMatchingCommunityListDb(matchingTagCommunities);
        setNonMatchingCommunityListDb(nonMatchingTagCommunities);
        // const filteredCommunities = response.data.filter(community =>
        //   !community.memberships.some(membership => membership.id.userId === user.userId)
        // );
        // setcommunityListDb(filteredCommunities);
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
        <>
          {matchingCommunityListDb.length > 0 && (
            <CommunityListOld
              communityList={matchingCommunityListDb}
              title="Recommended Communities"
            />
          )}
          {nonMatchingCommunityListDb.length > 0 && (
            <CommunityListOld
              communityList={nonMatchingCommunityListDb}
              title="Explore Communities"
            />
          )}
        </>
      )}
    </>
  );
};

export default CommunitiesPage;
