import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image section */}
      <div className="overflow-hidden h-48 bg-gray-200 dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-semibold">
          {project.stack}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {project.summary}
        </p>

        {/* Expandable section */}
        <div className={`transition-all duration-300 ${
          isExpanded ? 'max-h-[500px] overflow-y-auto' : 'max-h-0 overflow-hidden'
        }`}>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Project Details
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                Technologies
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.details && (
              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  Responsibilities
                </h5>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {project.details.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.details && (
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {project.details.duration}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Status</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {project.details.status}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons and toggle */}
        <div className="flex gap-3 mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center text-sm"
          >
            View Project
          </a>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center"
            aria-expanded={isExpanded}
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
