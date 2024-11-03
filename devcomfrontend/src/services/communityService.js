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


/**
 * Fetch members of a specific community by its ID.
 * @param {number} communityId - The ID of the community.
 * @returns {Promise<Array>} - An array of MemberDTO objects.
 */
export const getCommunityMembers = async (communityId) => {
    try {
      const response = await api.get(`/community/members/${communityId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };



// // 2222222222222222222222222222

// /**
//  * Fetch all templates for a community.
//  * @param {number} communityId - The ID of the community.
//  * @returns {Promise<Array>} - An array of templates.
//  */
// export const getTemplatesByCommunity = async (communityId) => {
//     try {
//       const response = await api.get(`/templates/list/${communityId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   /**
//    * Create a new template for a community.
//    * @param {number} communityId - The ID of the community.
//    * @param {Object} templateData - The data for the new template.
//    * @param {string} templateData.name - The name of the template.
//    * @param {string} templateData.description - The description of the template.
//    * @returns {Promise<Object>} - The created template data.
//    */
//   export const createTemplate = async (communityId, templateData) => {
//     try {
//       const response = await api.post(`/templates/create/${communityId}`, templateData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   /**
//    * Add a new field to a template.
//    * @param {number} templateId - The ID of the template.
//    * @param {Object} fieldData - The data for the new field.
//    * @param {string} fieldData.name - The name of the field.
//    * @param {string} fieldData.dataType - The data type of the field (e.g., TEXT, IMAGE, GEOLOCATION).
//    * @returns {Promise<Object>} - The created field data.
//    */
//   export const addFieldToTemplate = async (templateId, fieldData) => {
//     try {
//       const response = await api.post(`/templates/addField/${templateId}`, fieldData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   /**
//    * Fetch all fields for a template.
//    * @param {number} templateId - The ID of the template.
//    * @returns {Promise<Array>} - An array of fields.
//    */
//   export const getFieldsByTemplate = async (templateId) => {
//     try {
//       const response = await api.get(`/templates/fields/${templateId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
