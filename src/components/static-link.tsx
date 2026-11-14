import type { ComponentProps } from "react";

// Ordinary document navigation works without Next.js route payloads on shared hosting.
export default function StaticLink({ href, ...props }: ComponentProps<"a">) {
  let target = href;
  if (href?.startsWith("/") && !href.startsWith("//")) {
    const match = href.match(/^([^?#]*)(.*)$/);
    if (match && !match[1].endsWith("/") && !match[1].split("/").pop()?.includes(".")) {
      target = match[1] + "/" + match[2];
    }
  }
  return <a href={target} {...props} />;
}
