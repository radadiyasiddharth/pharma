import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Products - PharmaCorp';
  }, []);

  const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Injectables'];

  const products = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Tablets',
      description: 'Effective pain relief and fever reduction medication. Fast-acting formula for quick symptom relief.',
      dosage: '500mg',
      packSize: '20 tablets'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      category: 'Capsules',
      description: 'Broad-spectrum antibiotic for treating various bacterial infections. Well-tolerated and effective.',
      dosage: '250mg',
      packSize: '30 capsules'
    },
    {
      id: 3,
      name: 'Cough Relief Syrup',
      category: 'Syrups',
      description: 'Soothing syrup for dry and productive cough. Pleasant taste with effective active ingredients.',
      dosage: '5ml per dose',
      packSize: '100ml bottle'
    },
    {
      id: 4,
      name: 'Insulin Injection',
      category: 'Injectables',
      description: 'Fast-acting insulin for diabetes management. Precise dosing for optimal glucose control.',
      dosage: '100 units/ml',
      packSize: '10ml vial'
    },
    {
      id: 5,
      name: 'Aspirin 75mg',
      category: 'Tablets',
      description: 'Low-dose aspirin for cardiovascular protection. Enteric-coated for reduced gastric irritation.',
      dosage: '75mg',
      packSize: '28 tablets'
    },
    {
      id: 6,
      name: 'Vitamin D3 1000IU',
      category: 'Capsules',
      description: 'Essential vitamin D supplement for bone health and immune function support.',
      dosage: '1000 IU',
      packSize: '60 capsules'
    },
    {
      id: 7,
      name: 'Antacid Suspension',
      category: 'Syrups',
      description: 'Fast-acting antacid for heartburn and indigestion relief. Mint flavored for better palatability.',
      dosage: '10ml per dose',
      packSize: '200ml bottle'
    },
    {
      id: 8,
      name: 'Morphine Sulfate',
      category: 'Injectables',
      description: 'Controlled substance for severe pain management in clinical settings. Hospital use only.',
      dosage: '10mg/ml',
      packSize: '1ml ampoule'
    },
    {
      id: 9,
      name: 'Metformin 850mg',
      category: 'Tablets',
      description: 'First-line treatment for type 2 diabetes. Extended-release formulation for improved compliance.',
      dosage: '850mg',
      packSize: '30 tablets'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharma-blue to-pharma-darkblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality pharmaceutical products manufactured 
              with precision and care to meet global healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Product Portfolio</h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                  {selectedCategory !== 'All' && ` in ${selectedCategory} category`}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filter by:</span>
              </div>
            </div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-pharma-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product undergoes rigorous testing and quality control processes 
              to ensure safety, efficacy, and compliance with international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">GMP</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">GMP Certified</h3>
              <p className="text-gray-600">Good Manufacturing Practices compliance across all facilities.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">ISO</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600">International quality management system certification.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pharma-lightblue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-pharma-blue font-bold text-xl">FDA</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">FDA Approved</h3>
              <p className="text-gray-600">Products approved by major regulatory authorities worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;