import { FaEnvelope, FaPhoneSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contact } from '../../data/contact';

export default function Contact() {
  const iconMap = {
    envelope: FaEnvelope,
    phone: FaPhoneSquare,
    linkedin: FaLinkedin,
    github: FaGithub,
  };

  return (
    <footer id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-gray-200 text-4xl md:text-5xl font-bold brand-logo">
            Oscar Guido
          </h2>
        </div>

        {/* Contact section */}
        <div className="text-center mb-8">
          <h5 className="text-gray-300 text-uppercase font-semibold mb-6">Contact me</h5>
          <div className="flex justify-center gap-8 flex-wrap">
            {contact.social.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.icon !== 'envelope' && social.icon !== 'phone' ? '_blank' : undefined}
                  rel={social.icon !== 'envelope' && social.icon !== 'phone' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                  aria-label={social.name}
                  title={social.name}
                >
                  {IconComponent ? (
                    <IconComponent size={28} />
                  ) : (
                    <div className="w-7 h-7 flex items-center justify-center font-bold text-lg">
                      {social.name.charAt(0)}
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This page was made by
            <span className="text-purple-400 ml-1">Oscar Guido</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
