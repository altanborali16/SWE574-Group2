// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { auth } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCurrentProfile = async () => {
      try {
        const response = await api.get('/profile/currentProfile');
        setProfile(response.data);
      } catch (err) {
        setError('Failed to fetch profile.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentProfile();
  }, [auth.token]); // Dependency on auth.token ensures that the effect runs when the token changes

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>User Profile</h2>
        {loading && <p>Loading...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {profile && (
          <div className="card" style={{ width: '18rem' }}>
            <img
              src={profile.avatarUrl}
              className="card-img-top"
              alt={`${profile.username}'s avatar`}
            />
            <div className="card-body">
              <h5 className="card-title">{profile.username}</h5>
              <p className="card-text">{profile.bio}</p>
              {/* Add more profile details as needed */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
