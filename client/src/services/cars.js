import axios from "axios";

const baseUrl = "api/cars";

const getCars = (newObject) => {
  const request = axios.get(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default { getCars };
