import { notFound, redirect } from 'next/navigation';
import { services } from '@/lib/config';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!services.some(service => service.slug === slug)) notFound();
  redirect(`/#details-${slug}`);
}
