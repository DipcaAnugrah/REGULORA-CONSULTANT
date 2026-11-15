import { LegalPage, legalMetadata } from "@/views/pages";
export const metadata = legalMetadata("id", "disclaimer");
export default function Page() {
  return <LegalPage lang="id" slug="disclaimer" />;
}
