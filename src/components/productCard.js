import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
 const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === product.id);

  const styles = {
    productCard: {
      background: "var(--card-bg)",
      boxShadow: "0 4px 10px var(--shadow)",
      borderRadius: "12px",
      overflow: "hidden",
      width: "280px",
      textAlign: "center",
      padding: "15px",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    },
    productImage: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "10px"
    },
    productInfo: {
      padding: "10px"
    },
    productName: {
      fontSize: "1.2rem",
      color: "var(--text-color)"
    },
    productPrice: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "gray",
      margin: "5px 0"
    },
    addToCart: {
      background: "black",
      color: "white",
      border: "none",
      padding: "10px 15px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out"
    },
    outOfStock: {
      color: "red",
      fontWeight: "bold",
      fontSize: "1.1rem"
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px"
    },
    quantityButton: {
      background: "var(--button-bg)",
      color: "var(--button-text)",
      border: "none",
      padding: "8px 12px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out"
    },
    quantitySpan: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "var(--text-color)"
    }
  };

  const handleAddToCart = () => {
    if (!cartItem && product.quantity > 0) {
      dispatch(addToCart(product));
    }
  };

  const handleIncreaseQuantity = () => {
    if (cartItem.quantity < product.quantity) {
      dispatch(increaseQuantity(product.id));
    }
  };

  return (
    <React.Fragment>
      <div style={styles.productCard}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
        />
        <div style={styles.productInfo}>
          <h3 style={styles.productName}>{product.name}</h3>
          <p style={styles.productPrice}>KSh {product.price}</p>

          {product.quantity > 0 ? (
            cartItem ? (
              <div style={styles.quantityControls}>
                <button
                  style={styles.quantityButton}
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </button>
                <span style={styles.quantitySpan}>{cartItem.quantity}</span>
                <button
                  style={styles.quantityButton}
                  onClick={handleIncreaseQuantity}
                  disabled={cartItem.quantity > product.quantity}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                style={styles.addToCart}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )
          ) : (
            <p style={styles.outOfStock}>Out of Stock</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
