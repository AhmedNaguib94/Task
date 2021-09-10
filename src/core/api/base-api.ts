import Axios from "axios";

const BaseApi = Axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    "app-id": `${process.env.REACT_APP_API_ID}`,
    "Content-Type": " application/json",
    Accept: "application/json",
  },
});

export default BaseApi;
