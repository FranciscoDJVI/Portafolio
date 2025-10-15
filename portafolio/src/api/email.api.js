import axios from "axios";

const emailApi = axios.create({
  baseURL: "http://localhost:8000/portfolio/api/v1/portfolio/",
});

export function sendDataforEmail(data) {
  return emailApi.post("/", data);
}
