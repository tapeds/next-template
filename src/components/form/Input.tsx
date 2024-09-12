import { useState } from "react";
import { RegisterOptions, get, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import { HiEye, HiEyeOff } from "react-icons/hi";

import Typography from "@/components/Typography";
import ErrorMessage from "@/components/form/ErrorMessage";
import HelperText from "@/components/form/HelperText";
import LabelText from "@/components/form/LabelText";
import clsxm from "@/lib/clsxm";

export type InputProps = {
  id: string;
  label?: string;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  prefix?: string;
  suffix?: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
  rightIconClassName?: string;
  leftIconClassName?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  prefix,
  suffix,
  className,
  type = "text",
  readOnly = false,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  rightIconClassName,
  leftIconClassName,
  helperTextClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const error = get(errors, id);

  return (
    <div className="w-full space-y-2">
      {label && (
        <LabelText required={validation?.required ? true : false}>
          {label}
        </LabelText>
      )}

      <div className="relative flex w-full gap-0">
        <div
          className={clsxm(
            "pointer-events-none absolute h-full w-full rounded-md border-gray-300 ring-1 ring-inset ring-gray-500",
          )}
        />

        {prefix && (
          <Typography
            variant="p"
            className="flex w-min items-center rounded-l-md border-r bg-slate-50 px-3 text-sm text-gray-600"
          >
            {prefix}
          </Typography>
        )}

        <div
          className={clsxm(
            "relative w-full rounded-md",
            prefix && "rounded-l-md",
            suffix && "rounded-r-md",
          )}
        >
          {LeftIcon && (
            <div
              className={clsxm(
                "absolute left-0 top-0 h-full",
                "flex items-center justify-center pl-2.5",
                "text-lg text-gray-900 md:text-xl",
                leftIconClassName,
              )}
            >
              <LeftIcon />
            </div>
          )}

          <input
            {...register(id, validation)}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            id={id}
            name={id}
            readOnly={readOnly}
            disabled={readOnly}
            className={clsxm(
              "h-full w-full rounded-md border border-gray-500 px-3 py-2.5 caret-gray-900",
              [LeftIcon && "pl-9", RightIcon && "pr-9"],
              "focus:outline-1 focus:outline-gray-900 focus:ring-inset",
              "bg-slate-50 text-sm",
              "hover:ring-1 hover:ring-inset hover:ring-gray-900",
              "placeholder:text-sm placeholder:text-gray-500",
              "text-gray-900",
              readOnly && "cursor-not-allowed",
              error &&
                "border-none ring-2 ring-inset ring-red-500 placeholder:text-gray-500 focus:ring-red-500",
              prefix && "rounded-l-none rounded-r-md ",
              suffix && "rounded-l-md rounded-r-none",
              prefix && suffix && "rounded-none",
              className,
            )}
            aria-describedby={id}
            {...rest}
          />

          {RightIcon && type !== "password" && (
            <div
              className={clsxm(
                "absolute bottom-0 right-0 h-full",
                "flex items-center justify-center pr-2.5",
                "text-lg text-gray-900 md:text-xl",
                rightIconClassName,
              )}
            >
              <RightIcon />
            </div>
          )}

          {type === "password" && (
            <div
              className={clsxm(
                "absolute bottom-0 right-0 h-full",
                "flex items-center justify-center pr-3",
                "text-lg text-gray-900 md:text-xl",
                rightIconClassName,
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEye /> : <HiEyeOff />}
            </div>
          )}
        </div>

        {suffix && (
          <Typography
            variant="p"
            className="flex w-min items-center rounded-r-md border-l bg-slate-50 px-3 text-sm text-gray-600"
          >
            {suffix}
          </Typography>
        )}
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {helperText && (
        <HelperText helperTextClassName={helperTextClassName}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
}
