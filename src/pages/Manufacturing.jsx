import { useEffect } from 'react';
import { Factory, Settings, Shield, CheckCircle, Award, Zap } from 'lucide-react';

const Manufacturing = () => {
  useEffect(() => {
    document.title = 'Manufacturing - PharmaCorp';
  }, []);

  const facilities = [
    {
      name: 'Primary Manufacturing Plant',
      location: 'New York, USA',
      capacity: '50M units/year',
      certifications: ['GMP', 'FDA', 'ISO 9001']
    },
    {
      name: 'European Facility',
      location: 'Frankfurt, Germany',
      capacity: '30M units/year',
      certifications: ['GMP', 'EMA', 'ISO 14001']
    },
    {
      name: 'Asia-Pacific Center',
      location: 'Singapore',
      capacity: '40M units/year',
      certifications: ['GMP', 'TGA', 'WHO-PQ']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Raw Material Inspection',
      description: 'Rigorous testing of all incoming raw materials and active pharmaceutical ingredients.'
    },
    {
      step: '02',
      title: 'Formulation & Mixing',
      description: 'Precise formulation using automated systems for consistent quality and potency.'
    },
    {
      step: '03',
      title: 'Production & Packaging',
      description: 'State-of-the-art manufacturing lines with real-time monitoring and controls.'
    },
    {
      step: '04',
      title: 'Quality Testing',
      description: 'Comprehensive testing including stability, purity, and sterility validation.'
    },
    {
      step: '05',
      title: 'Final Approval',
      description: 'Quality assurance team approval before release to distribution network.'
    }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'Advanced Equipment',
      description: 'Latest pharmaceutical manufacturing technology and automation systems.'
    },
    {
      icon: Settings,
      title: 'Process Control',
      description: 'Real-time monitoring and control systems ensuring consistent quality.'
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'Strict safety protocols and environmental controls throughout production.'
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Manufacturing Excellence</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              World-class manufacturing facilities equipped with cutting-edge technology 
              and operated under the highest quality standards to ensure product safety and efficacy.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">Our Manufacturing Capabilities</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Combining advanced technology with rigorous quality controls 
              to deliver pharmaceutical products that meet the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center border border-gray-100">
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

      {/* Manufacturing Process */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">Manufacturing Process</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our systematic approach ensures every product meets stringent quality 
              and safety requirements from raw materials to final packaging.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {processSteps.map((process, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 bg-pharma-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">Global Manufacturing Facilities</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Strategically located manufacturing facilities worldwide ensure 
              reliable supply and efficient distribution to global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue p-4 sm:p-6 text-white">
                  <Factory className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-blue-100 text-sm sm:text-base">{facility.location}</p>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                    <span className="text-gray-600 text-sm sm:text-base">Annual Capacity</span>
                    <span className="font-semibold text-pharma-blue text-sm sm:text-base">{facility.capacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 mb-3 block text-sm sm:text-base">Certifications</span>
                    <div className="flex flex-wrap gap-2">
                      {facility.certifications.map((cert, certIndex) => (
                        <span 
                          key={certIndex}
                          className="px-2 sm:px-3 py-1 bg-pharma-lightblue text-pharma-blue rounded-full text-xs sm:text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 px-4">Quality Assurance</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Our commitment to quality is unwavering, with multiple layers of 
              testing and verification throughout the manufacturing process.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">100%</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Batch Testing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">15+</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Quality Certifications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">24/7</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Process Monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">Zero</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Quality Compromises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;