import { education } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={education.image}
              alt={education.university}
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {education.institution}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                {education.university} • {education.location}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {education.years}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {education.description.map((para, idx) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
