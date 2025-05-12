import React from "react";

const ProductCard = ({ product, isInCart, addToCart, removeFromCart }) => {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md text-white shadow-xl hover:shadow-2xl hover:scale-[1.025] transition-transform duration-300 overflow-hidden border border-white/10 hover:border-blue-400/30">
      <div className="h-56 flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-blue-500/10 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-40 drop-shadow-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-white truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1 h-12 overflow-hidden">
          {product.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-400 font-bold text-lg">
            ${product.price}
          </span>

          {isInCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-600/20 text-red-400 hover:bg-red-600/30 px-3 py-1 rounded-full text-xs font-medium transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600/20 text-green-400 hover:bg-green-600/30 px-3 py-1 rounded-full text-xs font-medium transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
