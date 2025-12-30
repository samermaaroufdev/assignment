import Link from 'next/link';
import { ReactNode } from 'react';

export default function DevelopersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Back to all developers
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">
          Developer Directory
        </h1>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}