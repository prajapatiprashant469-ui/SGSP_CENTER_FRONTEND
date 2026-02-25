import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../api/api";
import ProductCard from "../components/ProductCard";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const decodedName = decodeURIComponent(categoryName);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();
      const list = Array.isArray(data) ? data : [];

      const filtered = list.filter(
        (p) => p.categoryName === decodedName
      );

      setProducts(filtered);
      setLoading(false);
    };

    loadProducts();
  }, [decodedName]);

  if (loading) return <h2 style={center}>Loading…</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{decodedName}</h1>
      <p>Total products: {products.length}</p>

      <div style={gridStyle}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
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
  marginTop: "40px",
};

export default CategoryProducts;
