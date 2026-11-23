import Image from 'next/image';
import Link from 'next/link';

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="AO Enterprises home">
      <Image src="/media/ao-mark.webp" alt="" width={42} height={42} priority={priority} />
      <span className="brand-type">{'AO '}<span>Enterprises</span></span>
    </Link>
  );
}
