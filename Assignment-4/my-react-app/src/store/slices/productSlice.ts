import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ProductFilters } from '../../types';

interface ProductState {
  filters: ProductFilters;
  currentPage: number;
}

const initialState: ProductState = {
  filters: {
    search: '',
    category: '',
    sortBy: '',
    minPrice: 0,
    maxPrice: 10000,
  },
  currentPage: 1,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<ProductFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1; // Reset to first page when filters change
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.currentPage = 1;
    },
  },
});

export const { setFilters, setCurrentPage, resetFilters } = productSlice.actions;
export default productSlice.reducer;