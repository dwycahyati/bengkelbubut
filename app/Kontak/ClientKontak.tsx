'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Kontak() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="min-h-screen bg-white text-blue-900">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-white w-full m-0 px-0 fixed top-0 right-0 z-50 border-b border-blue-200 shadow-md">
        <div className="mr-10 ml-4">
          <Link href="/" className="block">
            <Image src="/images/logo.jpg" alt="Logo" width={60} height={10} priority />
          </Link>
        </div>
        <div className="lg:hidden pr-4" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-blue-800" /> : <Menu className="w-6 h-6 text-blue-800" />}
        </div>
        <nav className={`absolute top-full left-0 w-full bg-white lg:static lg:w-auto lg:flex space-x-0 lg:space-x-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link href="/" className="block px-4 py-2 text-lg text-blue-800 hover:text-blue-500">Beranda</Link>
          <Link href="/Katalog" className="block px-4 py-2 text-lg text-blue-800 hover:text-blue-500">Katalog</Link>
          <Link href="/Kontak" className="block px-4 py-2 text-lg text-blue-800 hover:text-blue-500">Kontak</Link>
        </nav>
      </header>

      {/* Kontak */}
      <section className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h1>

        {/* Form */}
        <div className="bg-blue-50 p-6 rounded-xl shadow mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Kirim Saran atau Pertanyaan</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Nama</label>
              <input type="text" className="w-full border border-blue-200 rounded px-3 py-2" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full border border-blue-200 rounded px-3 py-2" placeholder="Email Anda" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Pesan</label>
              <textarea className="w-full border border-blue-200 rounded px-3 py-2" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Kirim</button>
          </form>
        </div>

        {/* Alamat */}
        <div className="text-center mb-10">
          <p className="mb-1">Jl. Sultan H. No.12, Tj. Senang, Kec. Tj. Senang, Kota Bandar Lampung, Lampung 35136</p>
          <p className="mb-1">WA: 0812-3456-7890</p>
          <p>Email: bubutmotorjaya@gmail.com</p>
        </div>

        {/* Maps */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7082024128035!2d105.2812608758517!3d-5.390785653832233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dbedfe8c2d8f%3A0x78ec1f2c4c89f5bd!2sTj.%20Senang%2C%20Kota%20Bandar%20Lampung!5e0!3m2!1sen!2sid!4v1683676812345!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t border-blue-200 text-sm text-blue-700">
        &copy; {new Date().getFullYear()} Bubut Motor Jaya. All rights reserved.
      </footer>
    </main>
  );
}
