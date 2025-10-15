import axios from "axios";

const emailApi = axios.create({
  bseURL: "http://localhost:8000/portfolio/api/v1/portfolio/",
});

export function sendDataforEmail(data) {
  return emailApi.post("/", data);
}
