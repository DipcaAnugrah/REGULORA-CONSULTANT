import { LegalPage, legalMetadata } from "@/views/pages";
export const metadata = legalMetadata("id", "syarat-ketentuan");
export default function Page() {
  return <LegalPage lang="id" slug="syarat-ketentuan" />;
}
