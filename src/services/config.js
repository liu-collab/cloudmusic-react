const devBaseURL = "https://coderwhy-music.vercel.app/";
const proBaseURL = "https://coderwhy-music.vercel.app/";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
