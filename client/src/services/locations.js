import axios from "axios";

const baseUrl = "/api/locations";

const getLocations = (keyword) => {
  const request = axios.get(baseUrl, keyword);
  return request.then((response) => response.data);
};

export default { getLocations };
