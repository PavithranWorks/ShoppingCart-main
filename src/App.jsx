import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-indigo-900 text-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-indigo-500 rounded-full opacity-20 blur-3xl z-0"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-700 rounded-full opacity-20 blur-3xl z-0"></div>

        {/* Navbar */}
        <nav className="bg-white/10 backdrop-blur-sm shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-indigo-300 transition"
          >
            ChicChase
          </Link>
          <Link to="/cart" className="text-white font-medium hover:underline">
            Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </Link>
        </nav>

        {/* Content */}
        <div className="relative z-10 p-4 sm:p-6 md:p-10">
          <Routes>
            <Route
              path="/"
              element={
                <ProductsPage
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
