import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from './services/axios';
import ProductGrid from './components/ProductGrid'; // Update to the correct path if it's in 'components' folder

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get('/api/admin/v1/products');
        const filteredProducts = response.data.filter(
          (product) => product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching category products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return <ProductGrid products={products} />;
};

export default CategoryProducts;