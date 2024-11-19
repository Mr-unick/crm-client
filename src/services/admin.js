import axios from "axios";

// const baseUrl = "https://crm-server-zeta.vercel.app";

 const baseUrl = "http://api.livincompany.co:4000/";


export const signInAdmin = async (Admindata) => {
  try {
    const response = await axios.post(
      `${baseUrl}/admin/signin`,
      Admindata
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error signing in collaborator:",
      error.response ? error.response.data : error.message
    );
    return error.response ? error.response.data : error.message;
  }
};
