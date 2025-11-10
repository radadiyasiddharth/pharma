import { useEffect } from 'react';
import { Microscope, Beaker, Users, Lightbulb, TrendingUp, Globe } from 'lucide-react';

const Research = () => {
  useEffect(() => {
    document.title = 'Research & Development - PharmaCorp';
  }, []);

  const focusAreas = [
    {
      icon: Microscope,
      title: 'Oncology Research',
      description: 'Developing innovative cancer treatments and targeted therapies for better patient outcomes.'
    },
    {
      icon: Beaker,
      title: 'Infectious Diseases',
      description: 'Advanced research in antimicrobials and vaccines to combat emerging infectious diseases.'
    },
    {
      icon: Users,
      title: 'Rare Disease Solutions',
      description: 'Specialized treatments for rare and orphan diseases affecting underserved populations.'
    }
  ];

  const pipeline = [
    {
      stage: 'Discovery',
      projects: 15,
      description: 'Early-stage research identifying potential therapeutic compounds.',
      color: 'bg-blue-500'
    },
    {
      stage: 'Preclinical',
      projects: 8,
      description: 'Laboratory and animal studies evaluating safety and efficacy.',
      color: 'bg-green-500'
    },
    {
      stage: 'Phase I',
      projects: 5,
      description: 'First human trials testing safety and dosage in small groups.',
      color: 'bg-yellow-500'
    },
    {
      stage: 'Phase II',
      projects: 3,
      description: 'Expanded trials evaluating effectiveness in target conditions.',
      color: 'bg-orange-500'
    },
    {
      stage: 'Phase III',
      projects: 2,
      description: 'Large-scale trials comparing to existing standard treatments.',
      color: 'bg-red-500'
    }
  ];

  const partners = [
    {
      name: 'Harvard Medical School',
      type: 'Academic Partnership',
      focus: 'Neurodegenerative diseases research collaboration'
    },
    {
      name: 'Stanford Research Institute',
      type: 'Joint Venture',
      focus: 'Artificial intelligence in drug discovery'
    },
    {
      name: 'European Medicines Agency',
      type: 'Regulatory Partnership',
      focus: 'Streamlined approval processes for breakthrough therapies'
    },
    {
      name: 'Global Health Initiative',
      type: 'Non-Profit Collaboration',
      focus: 'Affordable medicines for developing countries'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Research & Innovation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of medicine through groundbreaking research, 
              innovative drug development, and strategic partnerships with leading institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research teams are dedicated to addressing the most pressing 
              healthcare challenges through innovative scientific approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-lightblue rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-pharma-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Pipeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Pipeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our robust pipeline includes over 30 projects across various stages 
              of development, from early discovery to late-stage clinical trials.
            </p>
          </div>

          <div className="space-y-6">
            {pipeline.map((stage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center p-6">
                  <div className={`w-4 h-20 ${stage.color} rounded-full mr-6`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{stage.stage}</h3>
                      <span className="bg-pharma-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                        {stage.projects} Projects
                      </span>
                    </div>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-pharma-blue rounded-xl text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pipeline Investment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">$150M</div>
                <div className="text-blue-100">Annual R&D Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">33</div>
                <div className="text-blue-100">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">120+</div>
                <div className="text-blue-100">Research Scientists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with world-class institutions and organizations 
              to accelerate discovery and bring innovative treatments to patients faster.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{partner.name}</h3>
                    <span className="inline-block bg-pharma-lightblue text-pharma-blue px-3 py-1 rounded-full text-sm font-medium">
                      {partner.type}
                    </span>
                  </div>
                  <Globe className="h-8 w-8 text-pharma-blue flex-shrink-0" />
                </div>
                <p className="text-gray-600">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Innovation Lab</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our state-of-the-art research facility equipped with cutting-edge 
              technology and instrumentation for breakthrough discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Drug Discovery Platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">High-Throughput</h3>
              <p className="text-gray-300 text-sm">Screening Capabilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Advanced</h3>
              <p className="text-gray-300 text-sm">Analytical Laboratory</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pharma-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Collaborative</h3>
              <p className="text-gray-300 text-sm">Research Environment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;