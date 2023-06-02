import { cva } from "class-variance-authority";
import clsx from "clsx";

import Link from "next/link";

const Button = ({ href, placeholder, color, size }) => {
	const buttonVariance = cva("rounded-lg", {
		variants: {
			color: {
				primary: "uppercase bg-white text-black hover:bg-yellow-200",
				secondary: "uppercase bg-yellow-200 text-black hover:bg-white",
				info: "uppercase text-center bg-yellow-200 hover:bg-black hover:text-white"
			},
			size: {
				default: "py-3 px-6",
				full: "w-full",
			},
		},
		defaultVariants: {
			color: "primary",
			size: "default",
		},
	});
	return (
		<Link href={href} className={clsx(buttonVariance({ color, size }))}>
			{placeholder}
		</Link>
	);
};

export default Button;
