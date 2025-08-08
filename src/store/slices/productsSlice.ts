import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduto, productService } from "../../services/productService";

interface ProductsState {
  products: IProduto[];
  loading: boolean,
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async() => {
    const response = await productService.getProducts();
    return response;
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async(id: string) => {
    const response = await productService.getProductById(id);
    return response;
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao carregar produtos';
      })
  },
})

export default productsSlice.reducer;
