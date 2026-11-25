import Link from 'next/link';

export function DriftQuoteBar({ className }: { className?: string }) {
  return (
    <div className={className ? `drift-quote ${className}` : 'drift-quote'}>
      <p className="drift-quote-long">One partner for stationery, print and recurring supply.</p>
      <p className="drift-quote-short">Bulk supply, made simple.</p>
      <Link href="/contact#quote-form">Request a quote</Link>
    </div>
  );
}
