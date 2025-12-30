import Link from 'next/link';
import { notFound } from 'next/navigation';
import { developers } from '@/app/Data/developers';

interface DeveloperPageProps {
  params: Promise<{ id: string }>;
}

export default async function DeveloperPage({
  params,
}: DeveloperPageProps) {
  const { id } = await params;
  const developer = developers.find((dev) => dev.id.toString() === id.toString());

  if (!developer) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center">
            <span className="text-blue-600 font-bold text-3xl">
              {developer.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {developer.name}
            </h2>
            <p className="text-lg text-blue-600 font-medium mb-4">
              {developer.role}
            </p>
            <p className="text-gray-700 mb-6">{developer.description}</p>
            
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to all developers
              </Link>
              <Link
                href={`/developers/${id}/projects`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return developers.map((dev) => ({
    id: dev.id,
  }));
}