import { Client, Account, Databases } from "appwrite";

export const client = new Client();

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export const database = new Databases(client);
export { ID } from "appwrite";
