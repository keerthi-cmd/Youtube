const GOOGLE_API_KEY = "AIzaSyA29HOdIQrdWHuz5pT14Nq68_tGgz1SUqY";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=AU&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_INFO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const previewLength = 400;
