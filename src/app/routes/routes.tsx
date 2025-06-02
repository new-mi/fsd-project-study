import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home";
import { CategoryPage } from "@/pages/category";
import { DefaultLayout } from "@/app/layout";
import { ROUTES } from "@/shared/routes";

export const routes = createBrowserRouter([
	{
		path: ROUTES.index,
		Component: DefaultLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: ROUTES.community,
				element: <div>Community page</div>,
			},
			{
				path: ROUTES.category(":category"),
				Component: CategoryPage,
			},
			{
				path: ROUTES.article.alias(":alias"),
				children: [
					{
						index: true,
						element: <div>Article page</div>,
					},
				],
			},
			{
				path: ROUTES.profile.index,
				children: [
					{
						index: true,
						element: <div>Profile page</div>,
					},
					{
						path: ROUTES.profile.edit,
						element: <div>Profile edit page</div>,
					},
				],
			},
		],
	},
]);
