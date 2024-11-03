import React from "react";
import PageMetaData from "./PageMetaData";
import Navbar from "./NavBar";
import CommunityList from "./SharedComponents/CommunityList";
import { Link } from "react-router-dom";
import "../Styles/MyCommunitiesPage.css"

const MyCommunitiesPage = () => {
  const communityList = [
    {
      id: "a",
      name: "BJJ Club",
      description: "A community for bjj athelthes",
      picture:
        "https://hooshmand.net/wp-content/uploads/2024/02/bjj-black-belt-on-tatami-mat.jpg",
      isPrivate: false,
      categories: ["BJJ", "Martial Arts", "MMA"],
      creator: {
        name: "Altan Boralı",
        profilePic:
          "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg",
      },
      postCount: 120,
      subscriberCount: 2400,
    },
    {
      id: "b",
      name: "Kurtlar Vadisi Fanları",
      description: "Kurtlar Vadisi hakkında her şey",
      picture: "https://cdn.wmaraci.com/blog/kurtlar-vadisi.jpg",
      isPrivate: true,
      categories: ["Siyaset", "Türk", "Dizi"],
      creator: {
        name: "Altan Boralı",
        profilePic:
          "https://robotics.ozyegin.edu.tr/sites/default/files/AltanBorali.jpg",
      },
      postCount: 85,
      subscriberCount: 1500,
    },
  ];
  const subscribedCommunityList = [
    {
      id: "c",
      name: "European side basketball",
      description:
        "Community for basketball organizations at European side of Istanbul",
      picture: "https://storage.googleapis.com/pod_public/1300/180356.jpg",
      isPrivate: true,
      categories: ["Basketball", "Sport"],
      creator: {
        name: "Efe Göçmen",
        profilePic:
          "https://corporateleagues.com/media/oyuncu/resim1703022799.jpg",
      },
      postCount: 200,
      subscriberCount: 3400,
    },
    {
      id: "d",
      name: "Stocks Market",
      description: "Discussion Community For Stocks",
      picture:
        "https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg",
      isPrivate: false,
      categories: ["Banking", "Stocks", "Money"],
      creator: {
        name: "Enes Akkal",
        profilePic:
          "https://media.licdn.com/dms/image/v2/D4D03AQHsV87jga3WAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720270782538?e=2147483647&v=beta&t=kn8GWFp8Y76olbqRi5gdlAhlH8NPvBIgsNYvJy4mBX0",
      },
      postCount: 95,
      subscriberCount: 2200,
    },
    {
      id: "e",
      name: "DevOps Club",
      description: "Join us to discuss devops technologies.",
      picture:
        "https://miro.medium.com/v2/resize:fit:605/0*TivrYUJ7f-RywS7C.png",
      isPrivate: true,
      categories: ["DevOps", "Software"],
      creator: {
        name: "Feridun Akyol",
        profilePic:
          "https://media.licdn.com/dms/image/v2/C4D03AQGMH3IQRxCZZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1554068079271?e=2147483647&v=beta&t=5cR4EaD4DYG2bMdHsh3R9VtEA9d3mQCVqcrm878yghQ",
      },
      postCount: 60,
      subscriberCount: 980,
    },
  ];

  return (
    <>
      <PageMetaData title="My Communities" />
      <Navbar />
      <div className="create-community-button" style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/createcommunity">
          <button>Create New Community</button>
        </Link>
      </div>
      <CommunityList communityList={communityList} title="Owned Communities" />
      <CommunityList
        communityList={subscribedCommunityList}
        title="Subscribed Communities"
      />
    </>
  );
};

export default MyCommunitiesPage;
