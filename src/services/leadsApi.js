import axios from "axios";

const baseUrl = "https://crm-server-zeta.vercel.app";

// const baseUrl = "http://localhost:4000";

// Leads API calls
export const getLeads = async (token,level,id) => {
  

  let isadmin =false;

  if(level == 'admin'){
    isadmin = true;
  }

  try {
    if(isadmin){
      const response = await axios.get(`${baseUrl}/leads/allleads?isadmin=${isadmin}&id=${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    }else{
      const response = await axios.get(`${baseUrl}/leads/${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching leads:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getLeadsRemainder = async (token,level,id) => {

  let isadmin =false;

  if(level == 'admin'){
    isadmin = true;
  }

  try {
    if(isadmin){
      const response = await axios.get(`${baseUrl}/leads/remainderleads?isadmin=${isadmin}&id=${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    }else{
      const response = await axios.get(`${baseUrl}/leads/remainderleads/${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching leads:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};


export const addLead = async (token, leadData) => {
  console.log('leades fro api',leadData);
  try {
    const response = await axios.post(`${baseUrl}/leads/addleads`, leadData, {
      headers: { Authorization: token },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error adding lead:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const addComment = async (token, id,data) => {
 
 console.log(data,'comment')
  try {
    const response = await axios.post(
      `${baseUrl}/leads/addcoment/${id}`,
      data,
      {
        headers: { Authorization: token },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error adding comment:",
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
   
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting lead:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const updateLead = async (token, id, leadData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/leads/update/${id}`,
      leadData,
      {
        headers: { Authorization: `${token}` },
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

