import React, { useContext } from "react";
import { StoreContext } from "./storeManager";

const ProductCard = ({ product }) => {
  const { cart, addToCart, increaseCartQuantity, decreaseCartQuantity } = useContext(StoreContext);

  const cartItem = cart.find((item) => item.id === product.id);

  const styles = {
    productCard: {
      background: "var(--card-bg)",
      boxShadow: "0 4px 10px var(--shadow)",
      borderRadius: "12px",
      overflow: "hidden",
      width: "280px",
      textAlign: "center",
      padding: "15px",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    },
    productImage: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    productInfo: {
      padding: "10px",
    },
    productName: {
      fontSize: "1.2rem",
      color: "var(--text-color)",
    },
    productPrice: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "gray",
      margin: "5px 0",
    },
    addToCart: {
      background: "red",
      color: "var(--button-text)",
      border: "none",
      padding: "10px 15px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px",
    },
    quantityButton: {
      background: "var(--button-bg)",
      color: "var(--button-text)",
      border: "none",
      padding: "8px 12px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out",
    },
    quantitySpan: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "var(--text-color)",
    },
  };

  return (
    <div style={styles.productCard}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <div style={styles.productInfo}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.productPrice}>KSh {product.price}</p>

        {cartItem ? (
          <div style={styles.quantityControls}>
            <button
              style={styles.quantityButton}
              onClick={() => decreaseCartQuantity(product.id)}
            >
              -
            </button>
            <span style={styles.quantitySpan}>{cartItem.quantity}</span>
            <button
              style={styles.quantityButton}
              onClick={() => increaseCartQuantity(product.id)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            style={styles.addToCart}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;