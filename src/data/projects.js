export const projects = [
  {
    id: 1,
    title: "News App with Flutter",
    category: "mobile",
    image: "/portfolio/img/certifications/flutter.png",
    summary: "App developed in Flutter that shows the latest news using an API, BLoC Pattern and Providers",
    stack: "Flutter + NewsAPI",
    description: "A mobile application that fetches and displays latest news from an external API. Implements BLoC pattern for state management and Providers for dependency injection. Features include filtering by category, bookmarking articles, and dark mode support.",
    technologies: ["Flutter", "Dart", "BLoC", "Provider", "NewsAPI"],
    link: "https://github.com/OscarGuido/flutter-noticias",
    details: {
      responsibilities: [
        "Designed and implemented the app architecture using BLoC pattern",
        "Integrated NewsAPI for real-time news fetching",
        "Implemented state management with Providers",
        "Created responsive UI for both iOS and Android",
      ],
      duration: "3 months",
      status: "Completed"
    }
  },
  {
    id: 2,
    title: "Products App with Flutter",
    category: "mobile",
    image: "/portfolio/img/certifications/flutter.png",
    summary: "E-commerce app developed in Flutter showcasing products with filtering and cart functionality",
    stack: "Flutter + Firebase",
    description: "An e-commerce application that displays a catalog of products with advanced filtering, search functionality, shopping cart, and order management. Uses Firebase for real-time database and authentication.",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Provider"],
    link: "https://github.com/OscarGuido/flutter-products",
    details: {
      responsibilities: [
        "Built product catalog with search and filter capabilities",
        "Implemented Firebase authentication and real-time database",
        "Created shopping cart and checkout flow",
        "Optimized performance for large product lists",
      ],
      duration: "4 months",
      status: "Completed"
    }
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "web",
    image: "/portfolio/img/projects/bootstrap.png",
    summary: "Responsive portfolio developed using Owl Carousel, Magnific Popup and Isotope",
    stack: "HTML / CSS / JS + Bootstrap",
    description: "A responsive personal portfolio website showcasing education, experience, certifications, and projects. Features include image galleries, carousel for experience section, and isotope filtering for certifications and projects.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 4", "Owl Carousel", "Magnific Popup", "Isotope"],
    link: "https://github.com/OscarGuido/portfolio",
    details: {
      responsibilities: [
        "Designed responsive layout using Bootstrap grid system",
        "Implemented Owl Carousel for experience showcase",
        "Created image galleries with Magnific Popup",
        "Built isotope filtering for project categorization",
      ],
      duration: "1 month",
      status: "Completed (Being migrated to React)"
    }
  }
];
