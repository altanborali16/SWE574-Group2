// src/pages/CommunityDetail.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCommunityById, joinCommunity, leaveCommunity } from '../services/communityService';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CommunityDetail = () => {
  const { id } = useParams(); // Extract community ID from URL
  const navigate = useNavigate();
  const { auth } = useAuth();

  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [membershipStatus, setMembershipStatus] = useState(false); // Indicates if the user has joined the community
  const [actionLoading, setActionLoading] = useState(false); // Indicates if join/leave action is in progress
  const [actionError, setActionError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const data = await getCommunityById(id);
        setCommunity(data);
        // Optionally, determine if the user is already a member
        // This requires backend support to check membership status
        // For simplicity, let's assume the user is not a member initially
        setMembershipStatus(false);
      } catch (err) {
        setError('Failed to fetch community details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunity();
  }, [id]);

  const handleJoin = async () => {
    setActionLoading(true);
    setActionError('');
    setActionSuccess('');
    try {
      await joinCommunity(id);
      setMembershipStatus(true);
      setActionSuccess('Successfully joined the community!');
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to join community.');
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleLeave = async () => {
    setActionLoading(true);
    setActionError('');
    setActionSuccess('');
    try {
      await leaveCommunity(id);
      setMembershipStatus(false);
      setActionSuccess('Successfully left the community.');
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to leave community.');
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {loading && <p>Loading community details...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && community && (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{community.name}</h3>
              <p className="card-text">{community.communityDescription}</p>
              <p>
                <strong>Private:</strong> {community.isPrivate ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Archived:</strong> {community.isArchived ? 'Yes' : 'No'}
              </p>

              {/* Membership Actions */}
              {auth.token && !community.isArchived && (
                <div className="mt-3">
                  {membershipStatus ? (
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleLeave}
                      disabled={actionLoading}
                    >
                      {actionLoading ? 'Leaving...' : 'Leave Community'}
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary me-2"
                      onClick={handleJoin}
                      disabled={actionLoading}
                    >
                      {actionLoading ? 'Joining...' : 'Join Community'}
                    </button>
                  )}
                  {/* Add more actions as needed */}
                </div>
              )}

              {/* Action Feedback */}
              {actionError && <div className="alert alert-danger mt-3">{actionError}</div>}
              {actionSuccess && <div className="alert alert-success mt-3">{actionSuccess}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommunityDetail;
