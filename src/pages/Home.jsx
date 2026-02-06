import { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        // SAFELY handle both paginated & non-paginated responses
        const data = Array.isArray(res.data)
          ? res.data
          : res.data?.content || [];

        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={center}>Loading products...</h2>;
  if (error) return <h2 style={center}>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>
      <p>Total products: {products.length}</p>

      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "20px",
};

const center = {
  textAlign: "center",
  marginTop: "50px",
};

export default Home;
