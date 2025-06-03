import { Link } from "react-router";
import { CONFIG } from "@/shared/config";
import { ROUTES } from "@/shared/routes";
import { Button, Icon } from "@/shared/ui";
import { useUserStore } from "@/entities/user";
import { Review } from "@/entities/review";
import { useEffect } from "react";

export const HomePage = () => {
	const { user, fetchUser, clearUser, loading } = useUserStore();

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 10) + 1;

		fetchUser(randomId);

		return clearUser;
	}, [fetchUser, clearUser]);

	return (
		<div>
			<h1>HomePage</h1>
			<Link to={ROUTES.category("test")}>to category test</Link>
			<Review />
			<p>CONFIG.API_URL: {CONFIG.API_URL}</p>
			<Link to={ROUTES.community}>to community</Link>
			<Button onClick={() => alert("alert")}>
				<Icon.BoltCircle width={24} height={24} />
			</Button>

			{loading ? (
				<p>Loading...</p>
			) : (
				<pre style={{ font: "inherit" }}>{JSON.stringify(user, null, 2)}</pre>
			)}
		</div>
	);
};
