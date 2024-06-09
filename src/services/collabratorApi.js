import axios from "axios";

const baseUrl = "http://localhost:4000/";

// Collaborator API calls
const addCollaborator = async (token, collaboratorData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/collaborators/addcollaborator`,
      collaboratorData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Add Collaborator Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error adding collaborator:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const signInCollaborator = async (collaboratorData) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/collabrators/signin`,
      collaboratorData
    );
    console.log("Sign In Collaborator Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error signing in collaborator:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const getCollaborators = async (token) => {
  try {
    const response = await axios.get(
      `${baseUrl}/collaborators/getcollaborators`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Get Collaborators Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching collaborators:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteCollaborator = async (token, id) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/collaborators/delete/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Delete Collaborator Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting collaborator:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const updateCollaborator = async (token, id, collaboratorData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/collaborators/update/${id}`,
      collaboratorData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Update Collaborator Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating collaborator:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
