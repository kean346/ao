import { redirect } from 'next/navigation';
import { services } from '@/lib/config';

type PageProps = { searchParams: Promise<{ service?: string | string[] }> };

export default async function ContactPage({ searchParams }: PageProps) {
  const { service } = await searchParams;
  const slug = services.find(item => item.slug === service)?.slug;
  redirect(slug ? `/#quote-${slug}` : '/#quote-form');
}
