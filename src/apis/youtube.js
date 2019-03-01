import axios from "axios";

const KEY = "AIzaSyAjBXem-1g4piBFTPWetEtvVIR_QNY6eOk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
