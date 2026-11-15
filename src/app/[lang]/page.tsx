import { HomePage, homeMetadata } from "@/views/home";
import { toLocale } from "@/i18n";
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  return homeMetadata(toLocale((await params).lang));
}
export default async function Page({ params }: Props) {
  return <HomePage lang={toLocale((await params).lang)} />;
}
