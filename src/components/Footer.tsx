import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-pink-400 py-12 text-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-black text-3xl uppercase tracking-widest">
          SISTECH CAFE
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-base font-semibold">
          <p className="flex items-center gap-3">
            <FaPhone size={18} /> +62 812 3456 7890
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope size={18} /> sistechcafe@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-6 text-3xl">
            <a href="#" className="hover:text-pink-200 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-200 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-200 transition"><FaWhatsapp /></a>
          </div>
          <div className="text-sm opacity-95 text-center md:text-right">
            Made with Love by <span className="font-bold underline">DesiWulanSari</span> | © 2026 Sistech Cafe.
          </div>
        </div>
      </div>
    </footer>
  );
}