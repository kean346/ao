import { ActionLink } from '@/components/ui/action-link';

export function QuoteCta({ title = 'Let’s talk supply.', service }: { title?: string; service?: string }) {
  const href = service ? `/contact?service=${service}#quote-form` : '/contact#quote-form';

  return (
    <section className="quote-band dark-surface">
      <div className="frame-width quote-band-inner">
        <div>
          <h2>{title}</h2>
          <p>Share your requirements to start a quotation.</p>
        </div>
        <ActionLink href={href} variant="solid">Request a quote</ActionLink>
      </div>
    </section>
  );
}
