export type TEnvConfig = {
	API_URL: string;
};

export const CONFIG: TEnvConfig = {
	API_URL: import.meta.env.VITE_API_URL || "",
};
