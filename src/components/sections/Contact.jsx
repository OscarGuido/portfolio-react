import { Mail, Phone } from 'lucide-react';
import { contact } from '../../data/contact';

export default function Contact() {
  const iconMap = {
    envelope: Mail,
    phone: Phone,
    linkedin: null,
    github: null,
  };

  return (
    <footer id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Oscar Guido
          </h2>
          <p className="text-gray-400 mb-8">
            Let's build something amazing together
          </p>
        </div>

        {/* Contact info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center">
          {/* Email */}
          <div>
            <p className="text-gray-400 mb-2">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors"
            >
              {contact.email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-gray-400 mb-2">Phone</p>
            <a
              href={`tel:${contact.phone}`}
              className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
          {contact.social.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.icon !== 'envelope' && social.icon !== 'phone' ? '_blank' : undefined}
                rel={social.icon !== 'envelope' && social.icon !== 'phone' ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label={social.name}
              >
                {IconComponent ? (
                  <IconComponent size={32} />
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                    {social.name.charAt(0)}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This page was made by
            <span className="text-purple-400 ml-1">Oscar Guido</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
