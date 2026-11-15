import { ServicesPage, servicesMetadata } from "@/views/pages";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  return servicesMetadata(toLocale((await params).lang));
}
export default async function Page({ params }: Props) {
  return <ServicesPage lang={toLocale((await params).lang)} />;
}
