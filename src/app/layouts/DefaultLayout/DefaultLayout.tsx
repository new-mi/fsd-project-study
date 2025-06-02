import { Outlet } from "react-router";
import classes from "./DefaultLayout.module.css";

export const DefaultLayout = () => {
  return (
    <div className={classes.layout}>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};
