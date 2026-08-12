import { useState } from 'react';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'programming', label: 'Programming' },
    { id: 'network', label: 'Networks' },
  ];

  const filtered = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section id="certifications" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I love learning new things, which is why I keep taking courses on different platforms like Udemy. Below you will see a list of courses that I have finished.
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

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(cert => (
            <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  {cert.platform}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">
                  {cert.date}
                </p>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2 px-4 rounded transition-colors block text-center"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
