import { cva } from "class-variance-authority";
import clsx from "clsx";

import Link from "next/link";

const Button = ({ href, placeholder, color, size }) => {
  const buttonVariance = cva("rounded-lg", {
    variants: {
      color: {
        primary: "uppercase text-black bg-[#8fb4ff] hover:bg-[#ff8f94]",
      },
      size: {
        default: "py-3 px-6",
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
