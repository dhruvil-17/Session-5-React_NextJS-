import { useProducts } from '../hooks/useProducts';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Products/ProductCard';
import ProductFilters from '../components/Products/ProductFilters';
import Pagination from '../components/Products/Pagination';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Products = () => {
  const { 
    products, 
    totalProducts, 
    currentPage, 
    isLoading, 
    error, 
    updatePage 
  } = useProducts();

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
            Error loading products. Please try again later.
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
        
        <ProductFilters />
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {products.length} of {totalProducts} products
              </p>
            </div>
            
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalProducts}
                  itemsPerPage={20}
                  onPageChange={updatePage}
                />
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Products;