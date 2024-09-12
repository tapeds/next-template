import * as React from "react";

import clsxm from "@/lib/clsxm";

export enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
}

enum FontVariant {
  Inter,
}

enum FontWeight {
  thin,
  extralight,
  light,
  regular,
  medium,
  semibold,
  bold,
  extrabold,
  black,
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = "regular",
  className,
  font = "Inter",
  variant = "p",
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || "p";
  return (
    <Component
      className={clsxm(
        // *=============== Font Type ==================
        "text-black",
        [
          font === "Inter" && [
            "font-inter",
            [
              weight === "regular" && "font-normal",
              weight === "medium" && "font-medium",
              weight === "bold" && "font-bold",
            ],
          ],
        ],
        // *=============== Font Variants ==================
        [
          variant === "h1" && ["md:text-[80px] md:leading-[96px]"],
          variant === "h2" && ["md:text-[72px] md:leading-[90px]"],
          variant === "h3" && ["md:text-[64px] md:leading-[84px]"],
          variant === "h4" && ["md:text-[48px] md:leading-[64px]"],
          variant === "h5" && ["md:text-[32px] md:leading-[48px]"],
          variant === "h6" && ["md:text-[24px] md:leading-[32px]"],
          variant === "p" && ["md:text-[18px] md:leading-[24px]"],
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
