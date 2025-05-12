import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API error", err));
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 text-white relative">
      {/* Decorative top glow */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-blue-600 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-pink-600 rounded-full blur-3xl opacity-20 z-0"></div>

      <h1 className="text-4xl font-bold text-center mb-10 z-10 relative drop-shadow">
        ✨ Explore Our Curated Picks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInCart={cart.some((item) => item.id === product.id)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
