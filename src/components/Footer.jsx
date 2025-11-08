import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-bold text-xl">Optus Pharma</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading pharmaceutical manufacturer committed to improving global health through innovative medicines and quality manufacturing.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pharma-blue" />
                <span className="text-sm text-gray-300">25, F.F./ Rajhans Society, Opp. Ritu Ice Cream, A.V. Road, Anand-388120</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pharma-blue" />
                <span className="text-sm text-gray-300">+91 95588 06098</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pharma-blue" />
                <span className="text-sm text-gray-300">optuspharma11@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quality Standards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Optus Pharma. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <div className="w-5 h-5 bg-gray-400 hover:bg-white transition-colors"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <div className="w-5 h-5 bg-gray-400 hover:bg-white transition-colors"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;