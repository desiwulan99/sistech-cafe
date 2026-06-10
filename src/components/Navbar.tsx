'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { toggleCart, itemCount } = useCart();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm py-3 px-4 md:px-12 flex justify-between items-center h-16">
      {/* Logo */}
      <Link href="/" className="font-black text-pink-500 text-lg md:text-2xl tracking-tighter">
        SISTECH CAFE
      </Link>

      {/* Wadah Utama Navigasi Desktop (Digabungkan agar sejajar) */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
        <Link href="/" className="hover:text-pink-500 transition">Home</Link>
        <Link href="/#about" className="hover:text-pink-500 transition">About Us</Link>
        <Link href="/menu" className="hover:text-pink-500 transition">Menu</Link>
        <Link href="/promo" className="hover:text-pink-500 transition">Promo</Link>
        
        {/* Keranjang Desktop */}
        {pathname === '/menu' && (
          <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-pink-500">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{itemCount}</span>
            )}
          </button>
        )}
        
        {/* Tombol Login Desktop */}
        <Link href="/login" className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition text-sm whitespace-nowrap">
          Login
        </Link>
      </div>

      {/* Tombol Hamburger HP (Hanya muncul di HP) */}
      <div className="flex md:hidden items-center gap-4">
        {pathname === '/menu' && (
          <button onClick={toggleCart} className="relative p-2 text-gray-600">
            <ShoppingCart size={20} />
            {itemCount > 0 && <span className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{itemCount}</span>}
          </button>
        )}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay Menu HP */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col items-center py-6 gap-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/promo" onClick={() => setIsOpen(false)}>Promo</Link>
          <Link href="/login" className="bg-pink-400 text-white px-8 py-2 rounded-full" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}