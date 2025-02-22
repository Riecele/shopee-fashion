import React from "react";
import Header from "./Header";
import Banner from "./banner";
import ProductList from "./productList";
import StoreProvider from "./storeManager";

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Banner />
      <ProductList />
    </StoreProvider>
  );
};

export default App;
