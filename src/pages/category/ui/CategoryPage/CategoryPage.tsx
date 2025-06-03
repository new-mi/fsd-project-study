import { useUserStore } from "@/entities/user";
import { Review } from "@/entities/review";
import { Link } from "react-router";
import { ROUTES } from "@/shared/routes";

export const CategoryPage = () => {
	const { user } = useUserStore();
	return (
		<div>
			<Link to={ROUTES.index}>to home</Link>
			<h1>CategoryPage</h1>
			<p>{user?.name}</p>
			<Review />
		</div>
	);
};
