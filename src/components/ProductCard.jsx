import { Package, Info } from 'lucide-react';

const ProductCard = ({ product }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Tablets':
        return 'bg-blue-100 text-blue-800';
      case 'Capsules':
        return 'bg-green-100 text-green-800';
      case 'Syrups':
        return 'bg-purple-100 text-purple-800';
      case 'Injectables':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md card-hover p-6 border border-gray-100">
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-pharma-lightblue to-gray-50 rounded-lg mb-4 flex items-center justify-center">
        <Package className="h-16 w-16 text-pharma-blue opacity-60" />
      </div>
      
      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">
            {product.name}
          </h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>
        
        {/* Product Details */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Dosage:</span>
            <span className="font-medium text-gray-900">{product.dosage}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Pack Size:</span>
            <span className="font-medium text-gray-900">{product.packSize}</span>
          </div>
        </div>
        
        {/* Action Button */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-pharma-blue text-white py-2 px-4 rounded-lg hover:bg-pharma-darkblue transition-colors duration-300 text-sm font-medium">
          <Info className="h-4 w-4" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
