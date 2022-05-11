import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const notionApi = axios.create({
  baseURL: import.meta.env.VITE_NOTION_API
})