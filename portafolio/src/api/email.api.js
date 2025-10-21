import axios from "axios";

const emailApi = axios.create({
  baseURL:
    "https://backend-porfolio-bhf2.onrender.vercel.app/api_portfolio/api/v1/api_portfilio/",
});

export function sendDataforEmail(data) {
  return emailApi.post("/", data);
}
