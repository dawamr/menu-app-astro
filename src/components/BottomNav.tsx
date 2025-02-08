import React from 'react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl">
      <div className="flex justify-around items-center h-20 px-6">
        <a href="/" className="flex flex-col items-center text-orange-500">
          <span className="material-icons">home</span>
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="/orders" className="flex flex-col items-center text-gray-400">
          <span className="material-icons">receipt_long</span>
          <span className="text-xs mt-1">Orders</span>
        </a>
        <a href="/cart" className="flex flex-col items-center text-gray-400">
          <span className="material-icons">shopping_cart</span>
          <span className="text-xs mt-1">Cart</span>
        </a>
        <a href="/profile" className="flex flex-col items-center text-gray-400">
          <span className="material-icons">person</span>
          <span className="text-xs mt-1">Profile</span>
        </a>
      </div>
    </nav>
  );
}