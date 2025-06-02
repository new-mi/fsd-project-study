import { Link } from "react-router";
import { CONFIG } from "@/shared/config";
import { ROUTES } from "@/shared/routes";
import { Button, Icon } from "@/shared/ui";

export const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<p>{CONFIG.API_URL}</p>
			<Link to={ROUTES.community}>to community</Link>
			<Button onClick={() => alert("alert")}>
				<Icon.BoltCircle width={24} height={24} />
			</Button>
		</div>
	);
};
