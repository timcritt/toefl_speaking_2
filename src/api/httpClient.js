import axios from "axios";

// Create Axios instance
const baseURL = import.meta.env.VITE_API_URL;

console.log("Using API baseURL:", baseURL);

const httpClient = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Function to update headers with the token
export const setAuthHeaders = (token) => {
	if (token) {
		httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete httpClient.defaults.headers.common["Authorization"];
	}
};

export default httpClient;
