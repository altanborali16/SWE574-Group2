// src/pages/Community.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';

const Community = () => {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommunityList = async () => {
      try {
        const response = await api.get('/community/list');
        setCommunities(response.data);
      } catch (err) {
        setError('Failed to fetch communities.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunityList();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Communities</h2>
        {loading && <p>Loading...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && communities.length === 0 && <p>No communities available.</p>}
        <div className="row">
          {communities.map((community) => (
            <div className="col-md-4" key={community.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{community.name}</h5>
                  <p className="card-text">{community.communityDescription}</p>
                  <p>
                    <strong>Private:</strong> {community.isPrivate ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <strong>Archived:</strong> {community.isArchived ? 'Yes' : 'No'}
                  </p>
                  {/* Add buttons for joining/leaving community as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community;
