'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMail, HiLockClosed } from 'react-icons/hi';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setMessage('Password must be 8+ characters.');
      setIsSuccess(false);
      return;
    }

    setMessage('Login Successful!');
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-4">
      <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-pink-50">
        <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Sign In to Your Account
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <HiMail size={22} />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-pink-400 outline-none transition"
              required
            />
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

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-[1.02] transition-all transform"
          >
            Sign In
          </button>
        </form>

        {message && (
          <div
            className={`mt-6 p-4 rounded-2xl text-center font-bold ${
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <p className="mt-8 text-center text-gray-600 text-sm">
          Do not have an account?{' '}
          <Link href="/register" className="text-pink-500 font-bold hover:underline">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}