import axios from "axios";

const GITHUB_API = axios.create({
    baseURL: "https://api.github.com"
});

export default GITHUB_API;