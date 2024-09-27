'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-dvh">
      <h2 className="text-9xl font-semibold">Oops!</h2>
      <p className="text-2xl font-medium">Page not found</p>
      <Link
        className="rounded-3xl border px-4 py-2 bg-primary text-background text-base shadow-md animate-pulse"
        href="/"
      >
        Return home
      </Link>
    </div>
  );
}
