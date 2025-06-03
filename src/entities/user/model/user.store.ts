import type { StateCreator } from "zustand";
import type { IUser } from ".";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getUserRequest } from "../api";

export interface IUserState {
	loading: boolean;
	user: IUser | null;
}

export interface IUserActions {
	fetchUser: (id: number) => Promise<void>;
	clearUser: () => void;
}

export interface IUserStore extends IUserState, IUserActions {}

const initialState: IUserState = {
	loading: false,
	user: null,
};

const store: StateCreator<IUserStore, [["zustand/devtools", never]]> = (
	set
) => ({
	...initialState,
	fetchUser: async (id: number) => {
		set({ loading: true });
		const { data, error } = await getUserRequest(id);
		if (error) {
			console.error(error);
			set({ loading: false });
			return;
		}
		set({ user: data, loading: false });
	},
	clearUser: () => {
		set({ user: null, loading: false });
	},
});

export const useUserStore = create<IUserStore>()(
	devtools(store, { name: "userStore" })
);
