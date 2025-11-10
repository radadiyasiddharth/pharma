import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { Factory, Microscope, Shield, Users, Award, Globe, Pill, Leaf, Droplets, Package, Flower } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    document.title = 'Optus Pharma - Leading Pharmaceutical Manufacturer';
  }, []);

  const capabilities = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'State-of-the-art facilities with GMP certification and advanced automation systems.'
    },
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Cutting-edge R&D facilities developing innovative pharmaceutical solutions.'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Rigorous quality assurance protocols ensuring the highest standards of safety.'
    }
  ];

  const products = [
    {
      icon: Pill,
      title: 'Active Pharmaceutical Ingredients (APIs)',
      description: 'High-purity APIs manufactured under strict cGMP guidelines for pharmaceutical formulations.',
      features: ['High Purity Standards', 'cGMP Certified', 'Custom Synthesis', 'Quality Assured']
    },
    {
      icon: Package,
      title: 'Excipients',
      description: 'Pharmaceutical excipients including binders, fillers, and coating materials for drug formulation.',
      features: ['USP/NF Grade', 'Consistent Quality', 'Multiple Grades', 'Regulatory Support']
    },
    {
      icon: Leaf,
      title: 'Herbal Extracts',
      description: 'Standardized herbal extracts sourced from premium botanicals with verified potency.',
      features: ['Standardized Potency', 'Organic Options', 'Sustainability Certified', 'Batch Traceability']
    },
    {
      icon: Droplets,
      title: 'Essential Oils',
      description: 'Pure essential oils extracted through advanced distillation and extraction techniques.',
      features: ['100% Pure', 'GC/MS Tested', 'Therapeutic Grade', 'Sustainable Sourcing']
    },
    {
      icon: Flower,
      title: 'Waxes',
      description: 'Pharmaceutical and cosmetic grade waxes for various formulation and coating applications.',
      features: ['Pharmaceutical Grade', 'Consistent Melting Point', 'Low Impurities', 'Custom Blends']
    }
  ];

  const partners = [
    'Global Health Foundation',
    'International Medical Alliance',
    'Healthcare Innovation Network',
    'Pharmaceutical Research Institute'
  ];

  return (
    <div className="scroll-smooth">
      <HeroSection />
      
      {/* Our Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology, scientific expertise, and rigorous quality standards 
              to deliver pharmaceutical excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-lightblue rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-pharma-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in manufacturing and supplying high-quality pharmaceutical ingredients 
              and materials to support your formulation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-pharma-lightblue rounded-lg mr-4 group-hover:bg-pharma-blue transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-pharma-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pharma-blue rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-pharma-blue text-white font-semibold rounded-lg hover:bg-pharma-darkblue transition-colors duration-300"
            >
              Request Quotation
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Global Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading healthcare organizations worldwide to improve patient outcomes 
              and advance medical science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-pharma-lightblue transition-colors duration-300">
                <Globe className="h-8 w-8 text-pharma-blue mx-auto mb-3" />
                <h3 className="font-medium text-gray-900">{partner}</h3>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-pharma-blue rounded-2xl text-white p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">GMP</div>
                <div className="text-blue-100">Certified Manufacturing</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Pharmaceutical Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">ISO</div>
                <div className="text-blue-100">Quality Standards</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Quality Control</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our mission to improve global health through innovative pharmaceutical solutions 
            and world-class manufacturing.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-pharma-blue text-white font-semibold rounded-lg hover:bg-pharma-darkblue transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;