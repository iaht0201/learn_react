import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  selectedCategory: null,
  loading: true
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setCategories, setProducts, setSelectedCategory, setLoading } =
  productSlice.actions;

export default productSlice.reducer;
