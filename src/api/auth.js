// src/api/auth.js
import httpClient from "@/api/httpClient";

export const loginRequest = async (credentials) => {
	const response = await httpClient.post("/auth/login", credentials);
	return response.data;
};
