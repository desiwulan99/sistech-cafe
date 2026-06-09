'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { toggleCart, itemCount } = useCart();
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
      <Link href="/" className="font-black text-pink-500 text-xl md:text-2xl tracking-tighter">
        SISTECH CAFE
      </Link>

      <div className="flex gap-6 md:gap-8 items-center font-medium text-sm text-gray-700">
        <Link href="/" className="hover:text-pink-500 transition">Home</Link>
        <Link href="/#about" className="hover:text-pink-500 transition">About Us</Link>
        <Link href="/menu" className="hover:text-pink-500 transition">Menu</Link>
        <Link href="/promo" className="hover:text-pink-500 transition">Promo</Link>

        {pathname === '/menu' && (
          <button
            onClick={toggleCart}
            className="relative p-2 hover:bg-pink-50 rounded-full transition text-gray-600 hover:text-pink-500"
          >
            <ShoppingCart size={20} strokeWidth={2.5} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                {itemCount}
              </span>
            )}
          </button>
        )}

        <Link href="/login" className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition shadow-lg shadow-pink-200">
          Login
        </Link>
      </div>
    </nav>
  );
}