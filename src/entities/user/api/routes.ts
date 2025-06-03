import { CONFIG } from "@/shared/config";

export const USER_API_ROUTES = {
	getUser: (id: number) => `/users/${id}`,
};

export const USER_API_ROUTES_FULL_URL = {
	getUser: (id: number) => `${CONFIG.API_URL}${USER_API_ROUTES.getUser(id)}`,
};
