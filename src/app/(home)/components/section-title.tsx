import { ComponentProps } from "react";

export function SectionTitle({ children, ...props }: ComponentProps<"strong">) {
  return <strong {...props} className="block tracking-wider uppercase mb-3 pl-5">{children}</strong>

}
