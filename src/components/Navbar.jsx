import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Products', href: '/products' },
    // { name: 'Manufacturing', href: '/manufacturing' },
    // { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const getDesktopLinkClasses = (href) => {
    return isActive(href)
      ? 'px-3 py-2 text-sm font-medium transition-colors duration-200 text-pharma-blue border-b-2 border-pharma-blue'
      : 'px-3 py-2 text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-pharma-blue';
  };

  const getMobileLinkClasses = (href) => {
    return isActive(href)
      ? 'block px-3 py-2 text-base font-medium transition-colors duration-200 text-pharma-blue bg-pharma-lightblue'
      : 'block px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-700 hover:text-pharma-blue hover:bg-gray-50';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Optus Pharma" className="h-14 w-auto" />
              <span className="sr-only">Optus Pharma</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={getDesktopLinkClasses(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pharma-blue focus:outline-none focus:text-pharma-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={getMobileLinkClasses(item.href)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
