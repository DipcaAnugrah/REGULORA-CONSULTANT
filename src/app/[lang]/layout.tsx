import { RootShell, shellMetadata } from "@/views/shell";
import { prefixedLocales, toLocale } from "@/i18n";
import "../globals.css";
// Only /en and /zh exist; Indonesian lives at the root in the (id) group.
export const generateStaticParams = () =>
  prefixedLocales.map((lang) => ({ lang }));
export const dynamicParams = false;
type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Omit<Props, "children">) {
  return shellMetadata(toLocale((await params).lang));
}
export default async function Layout({ children, params }: Props) {
  return <RootShell lang={toLocale((await params).lang)}>{children}</RootShell>;
}
