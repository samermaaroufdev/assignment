import Link from 'next/link';
import { developers } from './Data/developers';

export default function Home() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Developer Profiles
        </h1>
        <p className="text-gray-600">
          Click on a developer to view their profile and projects
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <Link
            key={dev.id}
            href={`/developers/${dev.id}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-blue-600 font-bold text-lg">
                  {dev.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {dev.name}
              </h2>
              <p className="text-blue-600 font-medium">{dev.role}</p>
            </div>
            <p className="text-gray-600 line-clamp-2">{dev.description}</p>
            <div className="mt-4 text-blue-500 font-medium text-sm">
              View profile →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}