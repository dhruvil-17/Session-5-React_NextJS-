import axios from 'axios';
import { type ProductsResponse, type User } from '../types';

const API_BASE = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000, // 10 second timeout
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout - please check your connection');
    }
    if (error.response?.status >= 500) {
      throw new Error('Server error - please try again later');
    }
    if (error.response?.status === 404) {
      throw new Error('Resource not found');
    }
    throw error;
  }
);

// Auth API
export const authAPI = {
  login: async (username: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 400) {
        throw new Error('Invalid username or password');
      }
      throw error;
    }
  },
  
  getMe: async (token: string) => {
    const response = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};

// Products API
export const productsAPI = {
  getProducts: async (skip = 0, limit = 20): Promise<ProductsResponse> => {
    const response = await api.get(`/products?skip=${skip}&limit=${limit}`);
    return response.data;
  },
  
  getProduct: async (id: number) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  
  searchProducts: async (query: string, skip = 0, limit = 20): Promise<ProductsResponse> => {
    const response = await api.get(`/products/search?q=${query}&skip=${skip}&limit=${limit}`);
    return response.data;
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/products/categories');
    console.log('Categories API response:', response.data); // Debug log
    
    // Handle different response formats
    if (Array.isArray(response.data)) {
      // If it's an array of strings, return as is
      if (typeof response.data[0] === 'string') {
        return response.data;
      }
      // If it's an array of objects, extract the name/slug property
      if (typeof response.data[0] === 'object') {
        return response.data.map((cat: any) => cat.name || cat.slug || cat.category || String(cat));
      }
    }
    
    // Fallback: return empty array
    return [];
  },
  
  getProductsByCategory: async (category: string, skip = 0, limit = 20): Promise<ProductsResponse> => {
    const response = await api.get(`/products/category/${category}?skip=${skip}&limit=${limit}`);
    return response.data;
  }
};

// Users API
export const usersAPI = {
  updateUser: async (id: number, userData: Partial<User>, token: string) => {
    const response = await api.put(`/users/${id}`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};