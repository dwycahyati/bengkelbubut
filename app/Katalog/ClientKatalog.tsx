'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Katalog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const produk = [
    { nama: 'Kruk As Tiger', harga: 'Rp850.000', gambar: '/images/k1.jpeg' },
    { nama: 'Piston Oversize 150cc', harga: 'Rp320.000', gambar: '/images/k2.jpeg' },
    { nama: 'Gear Custom', harga: 'Rp450.000', gambar: '/images/k3.jpeg' },
    { nama: 'Stang Seher Racing', harga: 'Rp650.000', gambar: '/images/k4.jpeg' },
    { nama: 'Blok Mesin Bored Up', harga: 'Rp1.200.000', gambar: '/images/k5.jpeg' },
    { nama: 'Noken As Custom', harga: 'Rp550.000', gambar: '/images/k6.jpeg' },
  ];

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

      <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Katalog Produk</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {produk.map((item, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="relative w-full h-48 mb-4">
                <Image src={item.gambar} alt={item.nama} fill className="object-cover rounded" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.nama}</h3>
              <p className="text-blue-800">{item.harga}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t border-blue-200 text-sm text-blue-700">
        &copy; {new Date().getFullYear()} Bubut Motor Jaya. All rights reserved.
      </footer>
    </main>
  );
}
