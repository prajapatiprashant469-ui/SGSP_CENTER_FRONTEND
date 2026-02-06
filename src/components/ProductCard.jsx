import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const imageUrl =
    product?.images?.length > 0
      ? `http://localhost:8081${product.images[0].url}`
      : "https://via.placeholder.com/300x200?text=No+Image";

  const openDetails = () => {
    navigate(`/products/${product.id}`, {
      state: { product },   // 👈 IMPORTANT
    });
  };

  return (
    <div style={cardStyle} onClick={openDetails}>
      <img src={imageUrl} alt={product.name} style={imageStyle} />
      <h3>{product.name}</h3>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "12px",
  cursor: "pointer",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "6px",
};

export default ProductCard;
