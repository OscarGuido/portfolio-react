import { hobbies } from '../../data/hobbies';

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hobbies
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Some things I love to do in my free times
          </p>
        </div>

        {/* Hobbies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map(hobby => (
            <div key={hobby.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={hobby.image}
                    alt={hobby.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {hobby.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
