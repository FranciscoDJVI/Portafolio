import axios from "axios";

const emailApi = axios.create({
  baseURL: "http://localhost:8000/api_portfilio/api/v1/api_portfilio/",
});

export function sendDataforEmail(data) {
  return emailApi.post("/", data);
}
