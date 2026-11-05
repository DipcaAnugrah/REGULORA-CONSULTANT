import { notFound } from "next/navigation";
import Link from "next/link";
import { legal } from "@/content/legal";
import { meta } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui";
export function generateStaticParams() {
  return Object.keys(legal).map((legal) => ({ legal }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal: key } = await params;
  const p = legal[key as keyof typeof legal];
  return p ? meta(p.title, p.intro, `/${key}`) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal: key } = await params;
  if (!Object.hasOwn(legal, key)) notFound();
  const p = legal[key as keyof typeof legal];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: p.title }]} />
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </div>
      </section>
      <article className="container prose page-body">
        {p.sections.map(([h, t]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{t}</p>
          </section>
        ))}
        <Link href="/kontak">Hubungi REGULORA CONSULTANT →</Link>
      </article>
    </>
  );
}
