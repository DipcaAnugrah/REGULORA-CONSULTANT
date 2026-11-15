import { ArticlePage, articleMetadata, articleParams } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string; slug: string }> };
export const generateStaticParams = articleParams;
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const p = await params;
  return articleMetadata(toLocale(p.lang), p.slug);
}
export default async function Page({ params }: Props) {
  const p = await params;
  return <ArticlePage lang={toLocale(p.lang)} slug={p.slug} />;
}
