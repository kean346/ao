export function DriftQuoteBar({ className }: { className?: string }) {
  return (
    <div className={className ? `drift-quote ${className}` : 'drift-quote'}>
      <p className="drift-quote-long">One partner for stationery, print and recurring supply.</p>
      <p className="drift-quote-short">Bulk supply, made simple.</p>
      <a href="#quote-form">Request a quote</a>
    </div>
  );
}
