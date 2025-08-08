import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchProductById, fetchProducts } from "../store/slices/productsSlice";

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const handleLoadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getProductById = useCallback((id: string) => {
    return products.find(produto => produto.id === id);
  }, [products]);

  const loadProductById = useCallback((id: string) => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  const filteredProducts = useCallback((searchTerm: string) => {
    if (!searchTerm) return products;
    
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products]);
 
  const totalProducts = useMemo(() => products.length, [products]);

  
  return {
    products,
    loading,
    error,
    loadProducts: handleLoadProducts,
    loadProductById,
    getProductById,
    filteredProducts,
    totalProducts,
  }
}