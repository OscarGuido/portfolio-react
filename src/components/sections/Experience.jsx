import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/experience';

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const current = experiences[currentIndex];

  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Designing scalable backend systems that power Fintech. Expert in event-driven architecture, async processing, and 95%+ test coverage.
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          {/* Header - Full Width */}
          <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {current.title}
            </h3>
            <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
              <a
              href={current.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {current.company}
            </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {current.type} • {current.period}
            </p>
          </div>

          {/* Content - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image & Technologies */}
            <div className="flex flex-col items-center">
              <img
                src={current.image}
                alt={current.company}
                className="w-32 h-32 object-contain mb-6"
              />
              <a
                href={current.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors mb-6 font-medium text-sm"
              >
                Visit website
              </a>
              <div className="w-full">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Description & Responsibilities */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {current.description}
              </p>

              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Responsibilities:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {current.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
            aria-label="Previous experience"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
            aria-label="Next experience"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
