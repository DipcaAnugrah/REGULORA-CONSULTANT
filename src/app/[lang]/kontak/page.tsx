import { ContactPage, contactMetadata } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  return contactMetadata(toLocale((await params).lang));
}
export default async function Page({ params }: Props) {
  return <ContactPage lang={toLocale((await params).lang)} />;
}
