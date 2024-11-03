// // src/services/profileService.js
// import api from './api';

// /**
//  * Fetch the current user's profile.
//  * Assumes the backend endpoint is GET /profile/currentProfile
//  */
// export const fetchCurrentProfile = async () => {
//   try {
//     const response = await api.get('/profile/currentProfile');
//     return response.data;
//   } catch (error) {
//     // If the profile doesn't exist, the backend might return a 404
//     if (error.response && error.response.status === 404) {
//       return null; // Indicate that the profile doesn't exist
//     }
//     throw error;
//   }
// };

// /**
//  * Create a new profile for the current user.
//  * Assumes the backend endpoint is POST /profile/createProfile
//  * and expects necessary profile data in the request body.
//  */
// export const createProfile = async (profileData) => {
//   try {
//     const response = await api.post('/profile/createProfile', profileData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };



// src/services/profileService.js 222
import api from './api';

/**
 * Fetch the current user's profile.
 * Assumes the backend endpoint is GET /profile/currentProfile
 */
export const fetchCurrentProfile = async () => {
  try {
    const response = await api.get('/profile/currentProfile');
    return response.data;
  } catch (error) {
    // If the profile doesn't exist, the backend might return a 404
    if (error.response && error.response.status === 404) {
      return null; // Indicate that the profile doesn't exist
    }
    throw error;
  }
};

/**
 * Create a new profile for the current user.
 * Assumes the backend endpoint is POST /profile/create
 * and expects "bio" and "avatarUrl" in the request body.
 */
export const createProfile = async (profileData) => {
    try {
      const payload = {
        bio: profileData.bio,
        avatarUrl: profileData.avatarUrl,
      };
      const response = await api.post('/profile/create', payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
