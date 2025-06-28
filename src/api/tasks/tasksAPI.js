import httpClient from "@/api/httpClient";

export const getSpeakingTaskTwoSummaries = async () => {
	const response = await httpClient.get("/speaking-tasks/2/summary");
	return response.data; // just an array of { id, title }
};

export const getAllSpeakingTaskTwo = async () => {
	const response = await httpClient.get("/speaking-tasks/2");
	console.log("Fetched Speaking Task 2:", response.data);
	return response.data;
};

export const getSpeakingTaskTwoById = async (id) => {
	const response = await httpClient.get(`/speaking-tasks/2/${id}`);
	console.log("Fetched Speaking Task 2 by ID:", response.data);
	return response.data;
};
