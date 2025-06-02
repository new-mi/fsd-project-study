export const ROUTES = {
	index: "/",
	community: "/community",
	category: (alias: string) => `/${alias}`,
	article: {
		alias: (alias: string) => `/article/${alias}`,
	},
	profile: {
		index: "/profile",
		edit: "/profile/edit",
	},
};
