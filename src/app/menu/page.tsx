'use client';

import Image from 'next/image';
import { useCart } from '../../context/CartContext';

const categories = [
  {
    title: "Drinks",
    items: [
      { id: 1, name: "Pink Velvet Latte", price: "Rp 35.000", numericPrice: 35000, image: "/pink-velvet.jpeg" },
      { id: 2, name: "Rose Caffe Latte", price: "Rp 38.000", numericPrice: 38000, image: "/rose.jpeg" },
      { id: 3, name: "Strawberry Matcha", price: "Rp 36.000", numericPrice: 36000, image: "/str-matcha.jpg" },
      { id: 4, name: "Milkshake Strawberry", price: "Rp 34.000", numericPrice: 34000, image: "/milkshake.jpg" },
      { id: 5, name: "Cotton Candy Frappe", price: "Rp 40.000", numericPrice: 40000, image: "/cotton.jpeg" },
      { id: 6, name: "Raspberry Cold Brew", price: "Rp 32.000", numericPrice: 32000, image: "/rasberry.jpeg" },
    ]
  },
  {
    title: "Dessert",
    items: [
      { id: 7, name: "Berry Cheesecake", price: "Rp 42.000", numericPrice: 42000, image: "/berry-cheesecake.jpeg" },
      { id: 8, name: "Pink Macaron Tower", price: "Rp 45.000", numericPrice: 45000, image: "/tower-macaron.jpg" },
      { id: 9, name: "Strawberry Mousse", price: "Rp 39.000", numericPrice: 39000, image: "/mousse.jpg" },
      { id: 10, name: "Peach Blossom Tart", price: "Rp 38.000", numericPrice: 38000, image: "/peach.jpg" },
      { id: 11, name: "Red Velvet Lava", price: "Rp 44.000", numericPrice: 44000, image: "/redvelvet-tart.jpg" },
      { id: 12, name: "Pink Glazed Donut", price: "Rp 25.000", numericPrice: 25000, image: "/pink-donut.jpg" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { id: 13, name: "Pink Creamy Pasta", price: "Rp 48.000", numericPrice: 48000, image: "/pasta-pink.jpeg" },
      { id: 14, name: "Chicken Pink Sauce", price: "Rp 45.000", numericPrice: 45000, image: "/chicken.jpg" },
      { id: 15, name: "Pink Burger Sliders", price: "Rp 42.000", numericPrice: 42000, image: "/burger.jpeg" },
      { id: 16, name: "Pink Salmon Pasta", price: "Rp 52.000", numericPrice: 52000, image: "/salmon.jpg" },
    ]
  }
];

export default function MenuPage() {
  const { addToCart, total, cart, isOpen, toggleCart } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex">
      <div className={`flex-grow py-10 px-6 transition-all duration-300 ${isOpen ? 'mr-80' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-center text-pink-600 mb-6">
            Our Menu
          </h1>
          <p className="text-center text-gray-500 text-xl font-medium mb-12">
            Handcrafted with love for your perfect day
          </p>

          {categories.map((category) => (
            <div key={category.title} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 border-l-8 border-pink-400 pl-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 flex flex-col">
                    <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[1.5rem]">
                      <Image src={item.image} alt={item.name} fill className="object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="text-center px-2 flex-grow">
                      <h2 className="font-bold text-gray-800 text-lg leading-tight mb-1">{item.name}</h2>
                      <p className="text-pink-500 font-bold mb-4">{item.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition duration-300"
                    >
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl border-l border-pink-200 p-6 z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pink-600">Keranjang</h2>
            <button onClick={toggleCart} className="text-gray-500 font-bold">Tutup</button>
          </div>

          <div className="space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">Keranjang kosong</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="text-pink-500 font-bold">Rp {item.numericPrice.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-10 border-t pt-6">
            <h3 className="text-xl font-bold text-gray-800 flex justify-between">
              Total: <span>Rp {total.toLocaleString('id-ID')}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}