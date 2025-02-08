import React, { useState } from 'react';
import type { MenuItem, Topping } from '../interfaces/types';

interface CustomizeItemProps {
  item: MenuItem;
  toppings: Topping[];
}

export default function CustomizeItem({ item, toppings }: CustomizeItemProps) {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

  const totalPrice = item.price + selectedToppings.reduce((sum, t) => sum + t.price, 0);

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button className="mr-4">←</button>
        <h1 className="text-xl font-bold">Customize {item.name}</h1>
      </div>
      
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-2xl font-bold mb-4">More topping, more delicious!</h2>

      <div className="space-y-4">
        {toppings.map((topping) => (
          <div key={topping.id} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={topping.image}
                alt={topping.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <span>{topping.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>${topping.price}</span>
              <button
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                onClick={() => setSelectedToppings([...selectedToppings, topping])}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white shadow-lg">
        <button
          className="w-full py-3 bg-yellow-400 rounded-full flex justify-between px-6"
        >
          <span>View my Basket</span>
          <span>${totalPrice}</span>
        </button>
      </div>
    </div>
  );
}