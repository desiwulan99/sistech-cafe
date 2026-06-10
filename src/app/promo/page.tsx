'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PromoPage() {
  const [message, setMessage] = useState<string | null>(null);

  const handleClaim = (title: string) => {
    setMessage(`Successfully Claimed! ${title}`);
    setTimeout(() => setMessage(null), 3000);
  };

  const promos = [
    {
      title: "Buy 1 Get 1 Free!",
      description: "Order your favorite drink and enjoy a second cup on us. Available every Friday.",
      badge: "Coffee",
      image: "/buy1get1.jpg",
      color: "bg-pink-50"
    },
    {
      title: "Student Special Day",
      description: "Study, sip, and save. Show your student ID and enjoy an exclusive discount on your order.",
      badge: "Student",
      image: "/student.jpg",
      color: "bg-blue-50"
    },
    {
      title: "Sweet Duo Delight",
      description: "Pick any two desserts and enjoy a special price. Perfect for sharing or treating yourself.",
      badge: "Dessert",
      image: "/combo-dessert.jpg",
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-20 px-6 relative">
      {message && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-400 text-white px-6 py-3 rounded-full shadow-lg z-50 font-bold">
          {message}
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-center text-pink-600 mb-6">Current Promos</h1>
        <p className="text-center text-gray-500 text-xl mb-16">Discover exclusive offers crafted just for you.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <div key={index} className={`${promo.color} p-4 rounded-[2rem] border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}>
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-[1.5rem]">
                <Image src={promo.image} alt={promo.title} fill className="object-cover" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-pink-600 text-xs font-bold rounded-full shadow-sm">
                  {promo.badge}
                </span>
              </div>

              <div className="px-2 flex flex-col flex-grow">
                <h2 className="text-2xl font-black text-gray-800 mb-3">{promo.title}</h2>
                <p className="text-gray-600 flex-grow mb-6 leading-relaxed text-justify">
                  {promo.description}
                </p>
                <button
                  onClick={() => handleClaim(promo.title)}
                  className="w-full py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition"
                >
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}