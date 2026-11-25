import Image from 'next/image';
import Link from 'next/link';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="AO Enterprises home">
      <Image className="brand-logo" src="/media/ao-logo.webp" alt="" width={520} height={468} unoptimized />
    </Link>
  );
}
