import { HomePage, homeMetadata } from "@/views/home";
export const metadata = homeMetadata("id");
export default function Page() {
  return <HomePage lang="id" />;
}
