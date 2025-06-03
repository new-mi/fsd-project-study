import { axiosClient } from "@/shared/api";
import { USER_API_ROUTES } from "../routes";

export const getUserRequest = async (id: number) => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const { data } = await axiosClient.get(USER_API_ROUTES.getUser(id));
		return {
			data: data,
			error: null,
		};
	} catch (err) {
		return {
			data: null,
			error: err,
		};
	}
};
