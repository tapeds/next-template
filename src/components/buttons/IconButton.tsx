import * as React from "react";
import { IconType } from "react-icons";
import { ImSpinner } from "react-icons/im";

import clsxm from "@/lib/clsxm";

const IconButtonVariant = [
  "blue",
  "green",
  "yellow",
  "red",
  "outline",
  "ghost",
] as const;
const IconButtonSize = ["xs", "sm", "base", "lg"] as const;

type IconButtonProps = {
  isLoading?: boolean;
  variant?: (typeof IconButtonVariant)[number];
  size?: (typeof IconButtonSize)[number];
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<"button">;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "blue",
      size = "base",
      icon: Icon,
      iconClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center justify-center rounded-lg font-medium",
          "focus:outline-none focus-visible:ring",
          "shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Size ===========
          [
            size === "lg" && [
              "min-h-[2.75rem] min-w-[2.75rem] md:min-h-[3rem] md:min-w-[3rem]",
              "text-base",
            ],
            size === "base" && [
              "min-h-[2.25rem] min-w-[2.25rem] md:min-h-[2.5rem] md:min-w-[2.5rem]",
              "text-sm md:text-base",
            ],
            size === "sm" && [
              "min-h-[1.75rem] min-w-[1.75rem] md:min-h-[2rem] md:min-w-[2rem]",
              "text-xs md:text-sm",
            ],
            size === "xs" && ["p-1", "text-xs md:text-sm"],
          ],
          //#region  //*=========== Variants ===========
          //#region  //*=========== Variants ===========
          [
            variant === "blue" && [
              "bg-blue-500 text-white",
              "border border-blue-600",
              "hover:bg-blue-600 hover:text-white",
              "active:bg-blue-700",
              "disabled:bg-blue-700",
              "focus-visible:ring-blue-400",
            ],
            variant === "green" && [
              "bg-green-500 text-white",
              "border border-green-600",
              "hover:bg-green-600 hover:text-white",
              "active:bg-green-700",
              "disabled:bg-green-700",
              "focus-visible:ring-green-400",
            ],
            variant === "red" && [
              "bg-red-500 text-white",
              "border border-red-600",
              "hover:bg-red-600 hover:text-white",
              "active:bg-red-700",
              "disabled:bg-red-700",
              "focus-visible:ring-red-400",
            ],
            variant === "yellow" && [
              "bg-yellow-500 text-white",
              "border border-yellow-500",
              "hover:bg-yellow-600 hover:text-white",
              "active:bg-yellow-700",
              "disabled:bg-yellow-700",
              "focus-visible:ring-yellow-400",
            ],
            variant === "outline" && [
              "text-black",
              "border border-gray-300",
              "hover:bg-slate-200 focus-visible:ring-gray-400 active:bg-slate-500 disabled:bg-slate-500",
            ],
            variant === "ghost" && [
              "text-neutral-500",
              "shadow-none",
              "hover:bg-neutral-50 focus-visible:ring-neutral-400 active:bg-neutral-100 disabled:bg-neutral-100",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["blue", "green", "red", "yellow"].includes(
                  variant,
                ),
                "text-blue-500": ["outline", "ghost"].includes(variant),
              },
            )}
          >
            <ImSpinner size={18} className="animate-spin" />
          </div>
        )}
        {Icon && <Icon size="1em" className={clsxm(iconClassName)} />}
      </button>
    );
  },
);

export default IconButton;
