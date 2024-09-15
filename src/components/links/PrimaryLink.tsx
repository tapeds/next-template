import * as React from "react";

import UnstyledLink, {
  UnstyledLinkProps,
} from "@/components/links/UnstyledLink";
import clsxm from "@/lib/clsxm";

const primaryLinkSize = ["medium", "small"] as const;
const primaryLinkVariant = ["blue", "secondary", "green", "red"] as const;

type primaryLinkProps = {
  size?: (typeof primaryLinkSize)[number];
  variant?: (typeof primaryLinkVariant)[number];
  underline?: boolean;
} & UnstyledLinkProps;

const primaryLink = React.forwardRef<HTMLAnchorElement, primaryLinkProps>(
  (
    {
      className,
      children,
      size = "medium",
      variant = "blue",
      underline = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "button inline-flex items-center justify-center font-semibold",
          "focus:outline-none focus-visible:ring",
          "transition duration-150",
          "decoration-current hover:decoration-white/0 active:decoration-current disabled:hover:decoration-current",
          underline && "underline",
          //*=========== Size ===========
          size === "medium" && "text-md md:text-lg ",
          size === "small" && "md:text-md text-sm",
          //*======== Size ===========
          //*=========== Variant ===========
          variant === "blue" && [
            "text-blue-500 hover:text-blue-600 active:text-blue-700",
          ],
          variant == "green" && [
            "text-green-500 hover:text-green-600 active:text-green-700",
          ],
          variant == "red" && [
            "text-red-500 hover:text-red-600 active:text-red-700",
          ],
          //*======== Variant ===========
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default primaryLink;
