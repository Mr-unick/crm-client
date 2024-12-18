import axios from "axios";

const baseUrl = "https://api.livincompany.co";

// Collaborator API calls
export const addCollaborator = async (token, collaboratorData) => {
  try {
    const response = await axios.post(
      `https://api.livincompany.co/collabrators/addcollabrator`,
      collaboratorData,
      {
        headers: { Authorization: token },
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
      `https://api.livincompany.co/collabrators/signin`,
      collaboratorData
    );
    console.log("Sign In Collaborator Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error signing in collaborator:",
       error.response ? error.response.data : error.message
    );
    return error.response ? error.response.data : error.message
  }
};

export const getCollaborators = async (token) => {
  try {
    const response = await axios.get(
      `https://api.livincompany.co/collabrators/getcollabrators`,
      {
        headers: { Authorization: token },
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

export const deleteCollaborator = async (token, id) => {
  try {
    const response = await axios.delete(
      `https://api.livincompany.co/collabrators/delete/${id}`,
      {
        headers: { Authorization: token },
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

export const updateCollaborator = async (token, id, collaboratorData) => {
  try {
    const response = await axios.post(
      `https://api.livincompany.co/collaborators/update/${id}`,
      collaboratorData,
      {
        headers: { Authorization: token },
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
