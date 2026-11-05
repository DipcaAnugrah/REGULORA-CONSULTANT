import { notFound } from "next/navigation";
import { articles } from "@/content/services";
import { Breadcrumb, CTA } from "@/components/ui";
import { meta } from "@/lib/seo";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a ? meta(a.title, a.description, `/artikel/${slug}`) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Artikel", href: "/artikel" },
              { label: a.category },
            ]}
          />
          <span className="eyebrow">{a.category}</span>
          <h1>{a.title}</h1>
          <p>{a.description}</p>
        </div>
      </section>
      <article className="container prose page-body">
        {a.sections.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <p>
          Artikel ini merupakan informasi umum, bukan penetapan persyaratan
          untuk suatu produk.
        </p>
      </article>
      <CTA />
    </>
  );
}
