import type { AxiosInstance } from "axios";
import { accessTokenInterceptor } from "./access-token";

export const applyInterceptors = (axiosClient: AxiosInstance) => {
	accessTokenInterceptor(axiosClient);
};
