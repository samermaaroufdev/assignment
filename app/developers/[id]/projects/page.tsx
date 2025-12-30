import Link from 'next/link';
import { notFound } from 'next/navigation';
import { developers } from '@/app/Data/developers';

interface ProjectsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { id } = await params;
  const developer = developers.find((dev) => dev.id.toString() === id);

  if (!developer) {
    notFound();
  }

  // Mock projects data
  const mockProjects = [
    { id: 1, name: 'E-Commerce Platform', status: 'Completed' },
    { id: 2, name: 'Task Management App', status: 'In Progress' },
    { id: 3, name: 'API Gateway Service', status: 'Planned' },
  ];

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Projects by {developer.name}
          </h2>
          <p className="text-gray-600 mb-6">
            Showing projects for developer ID: {id}
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Project ID: {project.id}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={`/developers/${id}`}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ← Back to Profile
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View all developers
          </Link>
        </div>
      </div>
    </div>
  );
}