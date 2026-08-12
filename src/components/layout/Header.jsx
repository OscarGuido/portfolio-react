import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#banner', label: 'Home' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#hobbies', label: 'Hobbies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50'
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#banner" className="text-2xl font-bold text-gray-900 dark:text-white">
          Oscar Guido
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 dark:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
