import { useProducts } from '../../hooks/useProducts';

const ProductFilters = () => {
  const { filters, categories, categoriesLoading, updateFilters } = useProducts();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={filters.search}
              onChange={(e) => updateFilters({ search: e.target.value })}
              placeholder="Search products..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {filters.search && (
              <button
                onClick={() => updateFilters({ search: '' })}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilters({ category: e.target.value })}
            disabled={categoriesLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="">All Categories</option>
            {categoriesLoading ? (
              <option disabled>Loading categories...</option>
            ) : (
              categories.map((category, index) => {
                // Ensure we have a valid string for display
                const categoryStr = String(category);
                const displayName = categoryStr === '[object Object]' 
                  ? `Category ${index + 1}` 
                  : categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1);
                
                return (
                  <option key={`${category}-${index}`} value={categoryStr}>
                    {displayName}
                  </option>
                );
              })
            )}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => updateFilters({ sortBy: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              min="0"
              value={filters.minPrice}
              onChange={(e) => {
                const value = Math.max(0, Number(e.target.value));
                updateFilters({ minPrice: value });
              }}
              placeholder="Min"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              min={filters.minPrice}
              value={filters.maxPrice}
              onChange={(e) => {
                const value = Math.max(filters.minPrice, Number(e.target.value));
                updateFilters({ maxPrice: value });
              }}
              placeholder="Max"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;