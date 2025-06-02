import { Outlet } from "react-router";
import classes from "./DefautlLayout.module.css";

export const DefaultLayout = () => {
	return (
		<div className={classes.layout}>
			<header>Header</header>
			<main className={classes.layoutMain}>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</div>
	);
};
