import { createBrowserRouter } from "react-router";
import { CategoryPage } from "../../pages";
import { DefaultLayout } from "../layout";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: DefaultLayout,
		children: [
			{
				index: true,
				element: <div>Main page</div>,
			},
			{
				path: "community",
				element: <div>Community page</div>,
			},
			{
				path: ":category",
				Component: CategoryPage,
			},
			{
				path: "article",
				children: [
					{
						path: ":alias",
						element: <div>Article page</div>,
					},
				],
			},
			{
				path: "profile",
				children: [
					{
						index: true,
						element: <div>Profile page</div>,
					},
					{
						path: "edit",
						element: <div>Profile edit page</div>,
					},
				],
			},
		],
	},
]);
