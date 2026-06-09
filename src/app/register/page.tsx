'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiUser, HiMail, HiLockClosed } from 'react-icons/hi';

export default function RegisterPage() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setMessage({ text: "Password must be 8+ characters.", type: 'error' });
      return;
    }

    setMessage({ text: "Account created successfully!", type: 'success' });
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-4">
      <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-pink-50">
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Create New Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <HiUser size={22} />
            </span>
            <input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-pink-400 outline-none transition" required />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <HiMail size={22} />
            </span>
            <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-pink-400 outline-none transition" required />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <HiLockClosed size={22} />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
            />
          </div>

          <button type="submit" className="w-full bg-pink-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-600 transition-all">
            Sign Up Now
          </button>

          {message && (
            <div className={`p-4 rounded-2xl text-center font-bold animate-in fade-in zoom-in duration-300 ${message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
              {message.text}
            </div>
          )}
        </form>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-pink-500 font-bold hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}