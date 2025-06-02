export interface IEnvConfig {
  API_URL: string;
}

export const CONFIG: IEnvConfig = {
  API_URL: import.meta.env.VITE_API_URL || "",
};
