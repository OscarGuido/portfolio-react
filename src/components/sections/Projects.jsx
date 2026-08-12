import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of some of my recent work across mobile and web development
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
