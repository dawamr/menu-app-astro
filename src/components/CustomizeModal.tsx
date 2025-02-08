import React, { useState } from 'react';
import type { MenuItem, Topping } from '../interfaces/types';

interface CustomizeModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, selectedToppings: Topping[]) => void;
}

export default function CustomizeModal({ item, isOpen, onClose, onAddToCart }: CustomizeModalProps) {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  
  const toppings: Topping[] = [
    { id: '1', name: 'Green Onion', price: 1, image: 'https://placehold.co/400' },
    { id: '2', name: '+200gr Beef', price: 5, image: 'https://placehold.co/400' },
    { id: '3', name: 'Cruller', price: 2, image: 'https://placehold.co/400' },
    { id: '4', name: 'Poached Egg', price: 3, image: 'https://placehold.co/400' },
  ];

  const totalPrice = item.price + selectedToppings.reduce((sum, t) => sum + t.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-4 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="relative h-64">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="material-icons">close</span>
          </button>
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">More topping, more delicious!</h2>
          
          <div className="space-y-4">
            {toppings.map((topping) => (
              <div key={topping.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={topping.image} 
                    alt={topping.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <span className="font-medium">{topping.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">${topping.price}</span>
                  <button
                    onClick={() => setSelectedToppings([...selectedToppings, topping])}
                    className="w-8 h-8 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500"
                  >
                    <span className="material-icons">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-4 border-t">
          <button
            onClick={() => {
              onAddToCart(item, selectedToppings);
              onClose();
            }}
            className="w-full py-4 bg-yellow-400 rounded-full flex items-center justify-between px-6 font-semibold"
          >
            <span>View my Basket</span>
            <span>${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}