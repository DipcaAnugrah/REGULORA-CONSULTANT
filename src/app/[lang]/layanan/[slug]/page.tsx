import { ServicePage, serviceMetadata, serviceParams } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string; slug: string }> };
export const generateStaticParams = serviceParams;
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const p = await params;
  return serviceMetadata(toLocale(p.lang), p.slug);
}
export default async function Page({ params }: Props) {
  const p = await params;
  return <ServicePage lang={toLocale(p.lang)} slug={p.slug} />;
}
