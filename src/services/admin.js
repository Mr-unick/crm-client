import axios from "axios";

export const signInAdmin = async (Admindata) => {
  try {
    const response = await axios.post(
      `https://82.112.231.43:400/admin/signin`,
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
