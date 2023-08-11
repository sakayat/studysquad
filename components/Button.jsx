import { cva } from "class-variance-authority";
import clsx from "clsx";

import Link from "next/link";

const Button = ({ href, placeholder, color, size }) => {
  const buttonVariance = cva("rounded-lg", {
    variants: {
      color: {
        primary: "text-black bg-[#90EE90] hover:bg-white",
      },
      size: {
        default: "py-3 px-8",
        full: "w-full text-center py-3 px-6",
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
