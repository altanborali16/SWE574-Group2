import React from 'react';
import PageMetaData from './PageMetaData';
import Navbar from './NavBar.jsx';

const Home = () => {
    // Inline styles for the component
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack headings vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: '#f0f0f0', // Light background color
        margin: 0, // Remove default margin
        fontFamily: 'Arial, sans-serif',
    };

    const titleStyle = {
        fontSize: '2rem', // Title font size
        color: '#333', // Dark text color
        margin: '10px 0', // Margin between headings
    };

    return <>
        <PageMetaData title='Home' />
        <Navbar />
            <div style={containerStyle}>
                <h1 style={titleStyle}>Welcome to Home Page</h1>
                <h1 style={titleStyle}>User Logged In</h1>
            </div>
        </>;
};

export default Home;