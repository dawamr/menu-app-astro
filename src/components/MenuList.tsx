import React, { useState } from 'react';
import type { MenuItem, Topping } from '../interfaces/types';
import CustomizeModal from './CustomizeModal';

interface MenuListProps {
  items: MenuItem[];
  categories: string[];
  specialOffer: {
    name: string;
    discount: string;
    image: string;
  };
}

export default function MenuList({ items, categories, specialOffer }: MenuListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem, toppings: Topping[]) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', { item, toppings });
  };

  return (
    <div className="px-4">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="material-icons">location_on</span>
            <span>Mimosa Rd, Singapore</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600">
            <span className="material-icons">search</span>
          </button>
          <button className="text-gray-600">
            <span className="material-icons">notifications</span>
          </button>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-green-600 h-40 mb-6">
        <div className="absolute top-4 left-4 z-10">
          <div className="text-white font-bold">
            <span className="bg-red-500 px-2 py-1 rounded-lg text-sm mb-2 inline-block">
              {specialOffer.discount}
            </span>
            <h3 className="text-2xl mt-2">Special Offer</h3>
            <p className="text-xl">{specialOffer.name}</p>
          </div>
        </div>
        <img 
          src={specialOffer.image} 
          alt={specialOffer.name}
          className="absolute right-0 top-0 h-full w-1/2 object-cover"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative h-32">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-orange-500">${item.price}</span>
                <button 
                  className="text-orange-500"
                  onClick={() => {
                    setSelectedItem(item);
                    setIsModalOpen(true);
                  }}
                >
                  <span className="material-icons">add_circle</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customize Modal */}
      {selectedItem && (
        <CustomizeModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}