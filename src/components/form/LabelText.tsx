import { ReactNode } from "react";

import Typography from "@/components/Typography";
import clsxm from "@/lib/clsxm";

export default function LabelText({
  children,
  labelTextClasname,
  required,
}: {
  children: ReactNode;
  labelTextClasname?: string;
  required?: boolean;
}) {
  return (
    <label>
      <Typography
        as="p"
        variant="p"
        weight="bold"
        className={clsxm("text-xs text-gray-900", labelTextClasname)}
      >
        {children} {required && <span className="text-red-500">*</span>}
      </Typography>
    </label>
  );
}
