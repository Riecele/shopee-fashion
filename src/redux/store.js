import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/ordersSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

if (module.hot) {
  module.hot.accept('./slices/productsSlice', () => {
    const newProductsReducer = require('./slices/productsSlice').default;
    store.replaceReducer(
      persistReducer(persistConfig, combineReducers({
        products: newProductsReducer,
        cart: cartReducer,
        orders: ordersReducer,
      }))
    );
  });

  module.hot.accept('./slices/cartSlice', () => {
    const newCartReducer = require('./slices/cartSlice').default;
    store.replaceReducer(
      persistReducer(persistConfig, combineReducers({
        products: productsReducer,
        cart: newCartReducer,
        orders: ordersReducer,
      }))
    );
  });

  module.hot.accept('./slices/ordersSlice', () => {
    const newOrdersReducer = require('./slices/ordersSlice').default;
    store.replaceReducer(
      persistReducer(persistConfig, combineReducers({
        products: productsReducer,
        cart: cartReducer,
        orders: newOrdersReducer,
      }))
    );
  });
}

export const persistor = persistStore(store);
export default store;
