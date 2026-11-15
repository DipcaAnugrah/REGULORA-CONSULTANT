import { RootShell, shellMetadata } from "@/views/shell";
import "../globals.css";
export const metadata = shellMetadata("id");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="id">{children}</RootShell>;
}
