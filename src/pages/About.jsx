import { useEffect } from 'react';
import { Users, Target, Eye, Heart, Award, Calendar } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Optus Pharma';
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Patient First',
      description: 'Every decision we make is centered around improving patient outcomes and well-being.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in manufacturing, research, and quality assurance.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships and collaborative innovation.'
    }
  ];

  const timeline = [
    {
      title: 'Quality Manufacturing',
      description: 'Established state-of-the-art GMP-certified manufacturing facility with advanced quality control systems.'
    },
    {
      title: 'Product Portfolio Expansion',
      description: 'Expanded our product range to include APIs, Excipients, Herbal Extracts, Essential Oils, and Pharmaceutical Waxes.'
    },
    {
      title: 'Innovation & Research',
      description: 'Invested in cutting-edge research facilities and developed proprietary extraction and synthesis technologies.'
    },
    {
      title: 'Global Standards Compliance',
      description: 'Achieved international certifications and regulatory compliance for global pharmaceutical markets.'
    },
    {
      title: 'Sustainable Operations',
      description: 'Implemented eco-friendly manufacturing processes and sustainable sourcing practices for all raw materials.'
    }
  ];

  const leaders = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      description: 'Leading pharmaceutical innovation with 20+ years of industry experience.'
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Chief Scientific Officer',
      description: 'Pioneering research in drug development and molecular medicine.'
    },
    {
      name: 'Jennifer Williams',
      position: 'Chief Operating Officer',
      description: 'Overseeing global operations and manufacturing excellence.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Optus Pharma</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We have been dedicated to improving global health through 
              innovative pharmaceutical manufacturing, cutting-edge research, and unwavering 
              commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-pharma-blue mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To develop, manufacture, and deliver high-quality pharmaceutical products 
                  that improve patient outcomes and enhance quality of life worldwide.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-pharma-blue mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's most trusted pharmaceutical manufacturer, recognized 
                  for innovation, quality, and our commitment to global health.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pharma-lightblue rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-pharma-blue" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key milestones and achievements that have shaped 
              Optus Pharma into a trusted pharmaceutical manufacturer.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-pharma-blue"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pharma-blue rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of pharmaceutical 
              industry expertise and scientific innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-pharma-lightblue to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-pharma-blue" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-pharma-blue font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;