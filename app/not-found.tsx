import { ActionLink } from '@/components/ui/action-link';

export default function NotFoundPage() {
  return (
    <section className="section-space">
      <div className="frame-width missing-page">
        <h1>Page not found.</h1>
        <ActionLink href="/">Back to home</ActionLink>
      </div>
    </section>
  );
}
