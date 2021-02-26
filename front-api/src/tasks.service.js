import axios from "axios";

const projectsApi = axios.create({
    baseURL: "http://localhost:4000/tasks"
});

export const createTasksService = (projectId,data) => projectsApi.post(`/${projectId}`,data)

export const removeTasksService = (taskId) => projectsApi.delete(`/${taskId}`)




