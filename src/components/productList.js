import React, { useContext } from "react";
import ProductCard from "./productCard";
import { StoreContext } from "./storeManager";

function ProductList() {
  const { products } = useContext(StoreContext);

  const productListStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "40px 20px",
    justifyItems: "center",
  };

  return (
    <React.Fragment>
      <div style={productListStyles}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default ProductList;