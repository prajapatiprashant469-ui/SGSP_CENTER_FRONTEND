import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Product comes directly from Home page
  const product = location.state?.product;

  if (!product) {
    return <h2 style={center}>Product not found</h2>;
  }

  const imageUrl =
    product.images?.length > 0
      ? `http://localhost:8081${product.images[0].url}`
      : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <div style={layout}>
        <img src={imageUrl} alt={product.name} style={imageStyle} />

        <div>
          <h1>{product.name}</h1>

          <p><b>Description:</b> {product.description}</p>
          <p><b>Category:</b> {product.categoryName}</p>

          <h3>Pricing</h3>
          <p>
            {product.pricing.currency} {product.pricing.price}
            {" "}({product.pricing.discountType} {product.pricing.discountValue})
          </p>

          <h3>Inventory</h3>
          <p>Stock Quantity: {product.inventory.stockQuantity}</p>

          <h3>Attributes</h3>
          <ul>
            {Object.entries(product.attributes || {}).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const layout = {
  display: "grid",
  gridTemplateColumns: "400px 1fr",
  gap: "30px",
  marginTop: "20px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
};

const center = {
  textAlign: "center",
  marginTop: "40px",
};

export default ProductDetails;
