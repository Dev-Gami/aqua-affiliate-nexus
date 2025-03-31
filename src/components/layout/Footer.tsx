
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * Footer component containing company information and navigation links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-plum-dark-teal text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-plum-dark-teal font-bold text-lg">PC</span>
              </div>
              <span className="text-white font-heading font-bold text-xl">
                PlumbingCo
              </span>
            </div>
            <p className="text-plum-mint mb-4 max-w-xs">
              Professional plumbing solutions for residential and commercial projects.
              Quality service since 1998.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="h-8 w-8 bg-plum-teal/30 hover:bg-plum-teal/50 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"></div>
              <div className="h-8 w-8 bg-plum-teal/30 hover:bg-plum-teal/50 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"></div>
              <div className="h-8 w-8 bg-plum-teal/30 hover:bg-plum-teal/50 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"></div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-plum-mint">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-plum-mint transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-plum-mint transition-colors duration-200">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-plum-mint transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-plum-mint transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-plum-mint">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Residential Plumbing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Commercial Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Emergency Repairs</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Installation Services</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-plum-mint transition-colors duration-200">Maintenance Contracts</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-plum-mint">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-plum-mint shrink-0 mt-1" />
                <span>123 Plumbing Street, Watertown, NY 10010</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-plum-mint" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-plum-mint" />
                <span>info@plumbingco.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-plum-mint shrink-0 mt-1" />
                <span>Monday-Friday: 8am-6pm<br />Saturday: 9am-2pm<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-plum-teal/30 mt-12 pt-6 text-center">
          <p>© {currentYear} PlumbingCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
