export default function Banner() {
  return (
    <section id="banner" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Hi!
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              I am Oscar
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
              Backend Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              NestJS • TypeScript • PostgreSQL • Event-Driven Architecture
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Resume
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-center">
                <p className="text-lg font-semibold">Your Photo Here</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
