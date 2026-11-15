import { ServicePage, serviceMetadata, serviceParams } from "@/views/pages";
type Props = { params: Promise<{ slug: string }> };
export const generateStaticParams = serviceParams;
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  return serviceMetadata("id", (await params).slug);
}
export default async function Page({ params }: Props) {
  return <ServicePage lang="id" slug={(await params).slug} />;
}
