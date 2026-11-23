import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function ActionLink({
  children,
  href,
  variant = 'text',
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'text' | 'solid' | 'outline';
}) {
  const Arrow = variant === 'text' ? ArrowRight : ArrowUpRight;

  return (
    <Link className={`action-link action-${variant}`} href={href}>
      {children}
      <Arrow aria-hidden="true" size={17} strokeWidth={1.6} />
    </Link>
  );
}
