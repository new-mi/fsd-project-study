import axios from "axios";
import { CONFIG } from "../../config";
import { applyInterceptors } from "./interceptors";

const axiosClient = axios.create({
	baseURL: CONFIG.API_URL,
});

applyInterceptors(axiosClient);

export { axiosClient };
