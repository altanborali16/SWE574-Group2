// // src/pages/CommunityDetail.js
// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import {
//   getCommunityById,
//   joinCommunity,
//   leaveCommunity,
//   getCommunityMembers,
// } from '../services/communityService';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import MemberList from '../components/MemberList'; // Ensure this path is correct
// import { Button, Spinner, Alert } from 'react-bootstrap';

// const CommunityDetail = () => {
//   const { id } = useParams(); // Extract community ID from URL
//   const navigate = useNavigate();
//   const { auth } = useAuth();

//   const [community, setCommunity] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [membershipStatus, setMembershipStatus] = useState(false); // Indicates if the user has joined the community
//   const [actionLoading, setActionLoading] = useState(false); // Indicates if join/leave action is in progress
//   const [actionError, setActionError] = useState('');
//   const [actionSuccess, setActionSuccess] = useState('');

//   // State for Member List Modal
//   const [showMemberList, setShowMemberList] = useState(false);
//   const [members, setMembers] = useState([]);
//   const [membersLoading, setMembersLoading] = useState(false);
//   const [membersError, setMembersError] = useState('');

//   useEffect(() => {
//     const fetchCommunity = async () => {
//       try {
//         const data = await getCommunityById(id);
//         setCommunity(data);
//         // Determine if the current user is a member
//         const isMember = data.memberships.some(
//           (membership) => membership.id.userId === auth.user?.id // Corrected access
//         );
//         setMembershipStatus(isMember);
//       } catch (err) {
//         setError('Failed to fetch community details.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCommunity();
//   }, [id, auth.user?.id]);

//   const handleJoin = async () => {
//     setActionLoading(true);
//     setActionError('');
//     setActionSuccess('');
//     try {
//       await joinCommunity(id);
//       setMembershipStatus(true);
//       setActionSuccess('Successfully joined the community!');
//       // Optionally, refresh community data to update memberships
//       const updatedCommunity = await getCommunityById(id);
//       setCommunity(updatedCommunity);
//     } catch (err) {
//       // Check if the error is due to already being a member
//       if (err.response && err.response.data) {
//         if (err.response.data === 'You are already a member of this community.') {
//           setActionError('You are already a member of this community.');
//         } else {
//           setActionError(err.response.data);
//         }
//       } else {
//         setActionError('Failed to join community.');
//       }
//       console.error(err);
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   const handleLeave = async () => {
//     setActionLoading(true);
//     setActionError('');
//     setActionSuccess('');
//     try {
//       await leaveCommunity(id);
//       setMembershipStatus(false);
//       setActionSuccess('Successfully left the community.');
//       // Optionally, refresh community data to update memberships
//       const updatedCommunity = await getCommunityById(id);
//       setCommunity(updatedCommunity);
//     } catch (err) {
//       setActionError(err.response?.data?.message || 'Failed to leave community.');
//       console.error(err);
//     } finally {
//       setActionLoading(false);
//     }
//   };


//   const handleShowMembers = async () => {
//     setShowMemberList(true);
//     setMembersLoading(true);
//     setMembersError('');
//     try {
//       const membersData = await getCommunityMembers(id);
//       setMembers(membersData);
//     } catch (err) {
//       setMembersError('Failed to fetch member list.');
//       console.error(err);
//     } finally {
//       setMembersLoading(false);
//     }
//   };

//   const handleCloseMembers = () => {
//     setShowMemberList(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         {loading ? (
//           <div className="d-flex justify-content-center">
//             <Spinner animation="border" role="status">
//               <span className="visually-hidden">Loading community details...</span>
//             </Spinner>
//           </div>
//         ) : error ? (
//           <Alert variant="danger">{error}</Alert>
//         ) : community ? (
//           <div className="card">
//             <div className="card-body">
//               <h3 className="card-title">{community.name}</h3>
//               <p className="card-text">{community.communityDescription}</p>
//               <p>
//                 <strong>Private:</strong> {community.isPrivate ? 'Yes' : 'No'}
//               </p>
//               <p>
//                 <strong>Archived:</strong> {community.isArchived ? 'Yes' : 'No'}
//               </p>

//               {/* Member Count */}
//               <p>
//                 <strong>Members:</strong>{' '}
//                 <Button variant="link" onClick={handleShowMembers} className="p-0">
//                   {community.memberships.length}
//                 </Button>
//               </p>

//               {/* Membership Actions */}
//               {auth.token && !community.isArchived && (
//                 <div className="mt-3">
//                   {membershipStatus ? (
//                     <Button
//                       variant="danger"
//                       onClick={handleLeave}
//                       disabled={actionLoading}
//                     >
//                       {actionLoading ? (
//                         <>
//                           <Spinner
//                             as="span"
//                             animation="border"
//                             size="sm"
//                             role="status"
//                             aria-hidden="true"
//                           />{' '}
//                           Leaving...
//                         </>
//                       ) : (
//                         'Leave Community'
//                       )}
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="primary"
//                       onClick={handleJoin}
//                       disabled={actionLoading}
//                     >
//                       {actionLoading ? (
//                         <>
//                           <Spinner
//                             as="span"
//                             animation="border"
//                             size="sm"
//                             role="status"
//                             aria-hidden="true"
//                           />{' '}
//                           Joining...
//                         </>
//                       ) : (
//                         'Join Community'
//                       )}
//                     </Button>
//                   )}
//                   {/* Add more actions as needed */}
//                 </div>
//               )}

//               {/* Action Feedback */}
//               {actionError && (
//                 <Alert variant="danger" className="mt-3">
//                   {actionError}
//                 </Alert>
//               )}
//               {actionSuccess && (
//                 <Alert variant="success" className="mt-3">
//                   {actionSuccess}
//                 </Alert>
//               )}
//             </div>
//           </div>
//         ) : (
//           <p>Community not found.</p>
//         )}

//         {/* Member List Modal */}
//         <MemberList
//           show={showMemberList}
//           handleClose={handleCloseMembers}
//           members={members}
//           loading={membersLoading}
//           error={membersError}
//         />
//       </div>
//     </>
//   );
// };

// export default CommunityDetail;


// src/pages/CommunityDetail.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  getCommunityById,
  joinCommunity,
  leaveCommunity,
  getCommunityMembers,
} from '../services/communityService';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MemberList from '../components/MemberList'; // Ensure this path is correct
import { Button, Spinner, Alert } from 'react-bootstrap';

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

  // State for Member List Modal
  const [showMemberList, setShowMemberList] = useState(false);
  const [members, setMembers] = useState([]);
  const [membersLoading, setMembersLoading] = useState(false);
  const [membersError, setMembersError] = useState('');

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const data = await getCommunityById(id);
        setCommunity(data);
        // Determine if the current user is a member
        const isMember = data.memberships?.some(
          (membership) => membership.id?.userId === auth.user?.id
        );
        setMembershipStatus(isMember);
        console.log('Community Data:', data);
        console.log('Is Member:', isMember);
      } catch (err) {
        setError('Failed to fetch community details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunity();
  }, [id, auth.user?.id]);

  const handleJoin = async () => {
    setActionLoading(true);
    setActionError('');
    setActionSuccess('');
    try {
      await joinCommunity(id);
      setMembershipStatus(true);
      setActionSuccess('Successfully joined the community!');
      // Optionally, refresh community data to update memberships
      const updatedCommunity = await getCommunityById(id);
      setCommunity(updatedCommunity);
    } catch (err) {
      // Check if the error is due to already being a member
      if (err.response && err.response.data) {
        if (err.response.data === 'You are already a member of this community.') {
          setActionError('You are already a member of this community.');
        } else {
          setActionError(err.response.data);
        }
      } else {
        setActionError('Failed to join community.');
      }
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
      // Optionally, refresh community data to update memberships
      const updatedCommunity = await getCommunityById(id);
      setCommunity(updatedCommunity);
    } catch (err) {
      setActionError(err.response?.data?.message || 'Failed to leave community.');
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleShowMembers = async () => {
    setShowMemberList(true);
    setMembersLoading(true);
    setMembersError('');
    try {
      const membersData = await getCommunityMembers(id);
      setMembers(membersData);
    } catch (err) {
      setMembersError('Failed to fetch member list.');
      console.error(err);
    } finally {
      setMembersLoading(false);
    }
  };

  const handleCloseMembers = () => {
    setShowMemberList(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading community details...</span>
            </Spinner>
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : community ? (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{community.name}</h3>
              <p className="card-text">{community.communityDescription}</p>
              <p>
                <strong>Private:</strong> {community.private ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Archived:</strong> {community.archived ? 'Yes' : 'No'}
              </p>

              {/* Member Count */}
              <p>
                <strong>Members:</strong>{' '}
                <Button variant="link" onClick={handleShowMembers} className="p-0">
                  {community.memberships.length}
                </Button>
              </p>

              {/* Membership Actions */}
              {auth.token && !community.archived && (
                <div className="mt-3">
                  {membershipStatus ? (
                    <Button
                      variant="danger"
                      onClick={handleLeave}
                      disabled={actionLoading}
                    >
                      {actionLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />{' '}
                          Leaving...
                        </>
                      ) : (
                        'Leave Community'
                      )}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={handleJoin}
                      disabled={actionLoading}
                    >
                      {actionLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />{' '}
                          Joining...
                        </>
                      ) : (
                        'Join Community'
                      )}
                    </Button>
                  )}
                  {/* Add more actions as needed */}
                </div>
              )}

              {/* Action Feedback */}
              {actionError && (
                <Alert variant="danger" className="mt-3">
                  {actionError}
                </Alert>
              )}
              {actionSuccess && (
                <Alert variant="success" className="mt-3">
                  {actionSuccess}
                </Alert>
              )}
            </div>
          </div>
        ) : (
          <p>Community not found.</p>
        )}

        {/* Member List Modal */}
        <MemberList
          show={showMemberList}
          handleClose={handleCloseMembers}
          members={members}
          loading={membersLoading}
          error={membersError}
        />
      </div>
    </>
  );
};

export default CommunityDetail;






