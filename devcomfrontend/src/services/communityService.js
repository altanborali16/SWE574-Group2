// src/services/communityService.js
import api from './api';

/**
 * Fetch a community by ID.
 * @param {number} id - The ID of the community.
 * @returns {Promise<Object>} - The community data.
 */
export const getCommunityById = async (id) => {
  try {
    const response = await api.get(`/community/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch the list of all communities.
 * @returns {Promise<Array>} - An array of communities.
 */
export const getCommunityList = async () => {
  try {
    const response = await api.get('/community/list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Create a new community.
 * @param {Object} communityData - The data for the new community.
 * @param {string} communityData.name - The name of the community.
 * @param {string} communityData.communityDescription - The description of the community.
 * @param {boolean} communityData.isPrivate - Whether the community is private.
 * @param {boolean} communityData.isArchived - Whether the community is archived.
 * @returns {Promise<Object>} - The created community data.
 */
export const createCommunity = async (communityData) => {
  try {
    const response = await api.post('/community/create', communityData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Join a community by ID.
 * @param {number} id - The ID of the community to join.
 * @returns {Promise<Object>} - The membership data.
 */
export const joinCommunity = async (id) => {
  try {
    const response = await api.post(`/community/join/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Leave a community by ID.
 * @param {number} id - The ID of the community to leave.
 * @returns {Promise<string>} - A success message.
 */
export const leaveCommunity = async (id) => {
  try {
    const response = await api.delete(`/community/leave/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
