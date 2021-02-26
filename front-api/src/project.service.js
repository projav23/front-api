import axios from "axios";

const projectsApi = axios.create({
    baseURL: "http://localhost:4000"
});

export const getAllProjectsService = () =>  projectsApi.get("/projects");

export const getProjectService = (projectId) => projectsApi.get(`projects/${projectId}`);

