import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://video-streaming-app-bpp4.vercel.app/api',
});

export default axiosInstance;
