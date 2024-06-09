import axios from "axios";

const baseUrl = "http://localhost:4000"; // Replace with your API base URL

// Leads API calls
export const getLeads = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/leads/allleads`, {
      headers: { Authorization: token },
    });
    console.log("Get Leads Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching leads:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const addLead = async (token, leadData) => {
  try {
    const response = await axios.post(`${baseUrl}/leads/addleads`, leadData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Add Lead Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error adding lead:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const deleteLead = async (token, id) => {
  try {
    const response = await axios.delete(`${baseUrl}/leads/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Delete Lead Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting lead:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const updateLead = async (token, id, leadData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/leads/update/${id}`,
      leadData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Update Lead Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating lead:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

