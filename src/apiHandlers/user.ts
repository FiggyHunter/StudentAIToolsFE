import axios from "axios";

export const getAllUsers = async () => {
  try {
    // Make GET request using Axios to another backend API
    const response = await axios.get(`${process.env.BACKEND_API}/users`); // Replace with your backend API endpoint

    // Extract data from the response
    const data = response.data;
    console.log(data);
    // Return the data to the client
    return data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    return { error: "Internal Server Error" };
  }
};
