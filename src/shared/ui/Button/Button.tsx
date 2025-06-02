import type { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: IButtonProps) => {
	return (
		<button className={clsx(classes.btn, className)} {...props}>
			{children}
		</button>
	);
};
