import { AboutPage, aboutMetadata } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  return aboutMetadata(toLocale((await params).lang));
}
export default async function Page({ params }: Props) {
  return <AboutPage lang={toLocale((await params).lang)} />;
}
