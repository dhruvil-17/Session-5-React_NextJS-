import { useQuery } from '@tanstack/react-query';
import { setFilters, setCurrentPage } from '../store/slices/productSlice';
import { productsAPI } from '../services/api';
import { type ProductFilters } from '../types';
import { useDebounce } from './useDebounce';
import { logError, logWarning } from '../utils/errorLogger';
import { useAppDispatch, useAppSelector } from './redux';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const { filters, currentPage } = useAppSelector((state) => state.products);
  const limit = 20;
  const skip = (currentPage - 1) * limit;

  // Debounce search to avoid excessive API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Get products based on filters
  const getProductsQuery = () => {
    if (debouncedSearch.trim()) {
      return productsAPI.searchProducts(debouncedSearch, skip, limit);
    }
    if (filters.category) {
      return productsAPI.getProductsByCategory(filters.category, skip, limit);
    }
    return productsAPI.getProducts(skip, limit);
  };

  const {
    data: productsData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['products', debouncedSearch, filters.category, currentPage],
    queryFn: getProductsQuery,
  });

  // Get categories with error handling
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: productsAPI.getCategories,
    staleTime: 10 * 60 * 1000, // Cache for 10 minutes
  });
  
  // Log errors if they occur
  if (error) {
    logError(error, 'Products Query');
  }

  const updateFilters = (newFilters: Partial<ProductFilters>) => {
    dispatch(setFilters(newFilters));
  };

  const updatePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  // Filter and sort products on client side for additional filtering
  const filteredProducts = (productsData?.products || []).filter((product: any) => {
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    return matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Ensure categories is always an array of strings
  const categories = Array.isArray(categoriesData) 
    ? categoriesData.map((cat: any) => {
        if (typeof cat === 'string') return cat;
        if (typeof cat === 'object') return cat.name || cat.slug || cat.category || String(cat);
        return String(cat);
      })
    : [];
  
  // Log warning if categories data is unexpected
  if (categoriesData && !Array.isArray(categoriesData)) {
    logWarning('Categories data is not an array', categoriesData);
  }

  return {
    products: sortedProducts,
    totalProducts: (productsData as any)?.total || 0,
    categories,
    categoriesLoading,
    filters,
    currentPage,
    isLoading,
    error,
    updateFilters,
    updatePage,
    refetch,
  };
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsAPI.getProduct(id),
    enabled: !!id,
  });
};