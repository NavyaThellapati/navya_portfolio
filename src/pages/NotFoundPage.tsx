import { Link } from "react-router-dom";
import { PageTransition } from "../components/animations/PageTransition";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="grid min-h-screen place-items-center px-6 pt-24 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--plum)]">404</p>
          <h1 className="mt-4 font-display text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-[var(--muted)]">This route is not part of the portfolio.</p>
          <Link className="mt-8 inline-flex rounded-full bg-[var(--plum)] px-5 py-3 text-sm font-bold text-white" to="/">Return Home</Link>
        </div>
      </section>
    </PageTransition>
  );
}
