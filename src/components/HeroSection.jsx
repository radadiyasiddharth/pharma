import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import bgImage from '../assets/bg.png';

const HeroSection = () => {
  return (
    <section className="relative text-white min-h-screen" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-4xl">
          {/* Hero Content */}
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Leading Pharmaceutical
              <span className="block text-pharma-green">Manufacturer</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Committed to improving global health through innovative medicines, 
              cutting-edge research, and world-class manufacturing standards.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pharma-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pharma-blue transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-1 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">GMP</div>
                <div className="text-gray-200 text-sm">Certified Facility</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-gray-200 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Quality</div>
                <div className="text-gray-200 text-sm">Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;