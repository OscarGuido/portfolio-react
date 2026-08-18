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
              Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              NestJS • TypeScript • PostgreSQL • Ruby • Python
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/portfolio/Oscar_Guido_Backend_Engineer_Resume.pdf"
                download="Oscar_Guido_Backend_Engineer_Resume.pdf"
                className="btn btn-primary bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex justify-center">
            <img
              src="/portfolio/img/banner/oscarguido.jpg"
              alt="Oscar"
              className="w-64 h-64 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
