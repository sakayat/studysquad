import { cva } from "class-variance-authority";
import clsx from "clsx";

import Link from "next/link";

const Button = ({ href, placeholder, color, size }) => {
	const buttonVariance = cva("rounded-lg", {
		variants: {
			color: {
				primary: "bg-white text-black hover:bg-gray-400",
				secondary: "bg-yellow-100 text-black",
				info: "bg-black text-white text-center"
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
