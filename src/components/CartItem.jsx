import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-200">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain rounded-lg border border-gray-200"
      />

      <div className="flex-1">
        <h2 className="text-md font-semibold text-gray-800 line-clamp-1">{item.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
        <p className="mt-1 text-blue-700 font-bold">${item.price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
          <button
            className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
          >
            −
          </button>
          <span className="px-3 text-gray-800 font-semibold">{item.quantity}</span>
          <button
            className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-200"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Remove
        </button>

        <div className="text-sm text-gray-700 font-medium">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

