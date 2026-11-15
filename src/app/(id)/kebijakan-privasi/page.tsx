import { LegalPage, legalMetadata } from "@/views/pages";
export const metadata = legalMetadata("id", "kebijakan-privasi");
export default function Page() {
  return <LegalPage lang="id" slug="kebijakan-privasi" />;
}
