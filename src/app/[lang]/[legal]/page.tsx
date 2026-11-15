import { LegalPage, legalMetadata, legalParams } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string; legal: string }> };
export const generateStaticParams = legalParams;
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const p = await params;
  return legalMetadata(toLocale(p.lang), p.legal);
}
export default async function Page({ params }: Props) {
  const p = await params;
  return <LegalPage lang={toLocale(p.lang)} slug={p.legal} />;
}
