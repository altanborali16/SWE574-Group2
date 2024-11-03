import React, { useEffect, useState } from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityList from "./SharedComponents/CommunityList";
import CommunityListOld from "./SharedComponents/CommunityListOld";
import httpClient from "../Helpers/HttpClient";
import { jwtDecode } from 'jwt-decode';

const CommunitiesPage = () => {
  // useEffect(() => {
  //   const myCookie = getCookie('COMMUNITY_AUTH_TOKEN');
  //   console.log('My Cookie:', myCookie);
  // }, []);
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
  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }
  // Sample data for community list
  const communityList = [
    {
      id: "f",
      name: "Tech Enthusiasts",
      description: "A community for technology lovers.",
      picture:
        "https://www.globalts.com/images/easyblog_shared/October_2023/10-25-23/modernTechnology_620977929_400.jpg",
      isPrivate: false,
      categories: ["Technology", "Innovation"],
      creator: {
        name: "Alex Johnson",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      postCount: 120,
      subscriberCount: 2400,
    },
    {
      id: "g",
      name: "Art Lovers",
      communityDescription: "Explore the world of art.",
      picture:
        "https://img.freepik.com/free-photo/fantasy-eye-illustration_23-2151675421.jpg",
      isPrivate: true,
      categories: ["Art", "Creativity", "Painting", "Patates"],
      creator: {
        name: "Lily Evans",
        profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      postCount: 85,
      subscriberCount: 1500,
    },
    {
      id: "h",
      name: "Travelers",
      communityDescription: "For those who love to explore.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HY0QhzCuKiWHSsHVUPsK4g4VDfWH4QpPFQ&s",
      isPrivate: false,
      categories: ["Travel", "Adventure"],
      creator: {
        name: "Emma Davis",
        profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      postCount: 200,
      subscriberCount: 3400,
    },
    {
      id: "j",
      name: "Fitness Fanatics",
      description: "A group for health and fitness enthusiasts.",
      picture:
        "https://minio.yalispor.com.tr/sneakscloud/blog/yeni-baslayanlar-icin-fitness-nedir_5e560dd58b34f.jpg",
      isPrivate: false,
      categories: ["Fitness", "Wellness"],
      creator: {
        name: "Chris Taylor",
        profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
      },
      postCount: 95,
      subscriberCount: 2200,
    },
    {
      id: "k",
      name: "Book Club",
      description: "Join us to discuss and recommend books.",
      picture:
        "https://images-cdn.reedsy.com/discovery/post/109/featured_image/large_aa7b8fcc4ee3a86626aca3157bbd8d697c38429a.jpg",
      isPrivate: true,
      categories: ["Books", "Literature"],
      creator: {
        name: "Sarah Brown",
        profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      postCount: 60,
      subscriberCount: 980,
    },
    // Add more communities as needed
  ];

  return (
    <>
      <PageMetaData title="Communities" />
      <Navbar />
      <CommunityList
        communityList={communityList}
        title="Explore Communities"
      />
      {communityListDb.length > 0 && (
        <CommunityListOld
          communityList={communityListDb}
          title="Backend Communities"
        />
      )}
    </>
  );
};

export default CommunitiesPage;
