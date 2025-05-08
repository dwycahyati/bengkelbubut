'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Wrench, RotateCw, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const slides = [
    '/images/g1.jpeg',
    '/images/g2.jpeg',
    '/images/g3.jpeg'
  ];

  const testimonials = [
    { name: 'Rudi H.', comment: 'Pelayanannya cepat dan hasil bubutnya sangat presisi. Motor saya jadi lebih halus!' },
    { name: 'Andi S.', comment: 'Sudah langganan dari 2020, hasilnya selalu memuaskan.' },
    { name: 'Maya T.', comment: 'Mereka bisa bikin part custom sesuai permintaan saya. Keren banget!' },
  ];

  const layanan = [
    { icon: <RotateCw size={36} />, title: 'Bubut Kruk As', desc: 'Presisi tinggi untuk performa maksimal.' },
    { icon: <Wrench size={36} />, title: 'Oversize Piston', desc: 'Solusi untuk silinder aus dan baret.' },
    { icon: <Settings size={36} />, title: 'Pembuatan Komponen', desc: 'Custom part motor sesuai permintaan.' },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(slideTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

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

      {/* Hero Slider */}
      <section className="pt-24 h-[70vh] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full"
            transition={{ duration: 1 }}
          >
            <Image
              src={slides[currentSlide]}
              alt="Slider"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
              <h1 className="text-4xl md:text-5xl font-bold">Solusi Bubut Motor Profesional</h1>
              <p className="mt-4 text-lg md:text-xl">Presisi, cepat, dan terpercaya sejak 2010</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
        <p className="text-lg text-blue-800">
          Bubut Motor Jaya adalah bengkel spesialis bubut dan perbaikan komponen mesin motor. Kami melayani segala jenis bubut presisi untuk motor harian, racing, hingga motor klasik.
        </p>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-20 bg-blue-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {layanan.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="flex justify-center mb-4 text-blue-500">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-white px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Testimoni Pelanggan</h2>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.5, // Delay untuk urutan testimoni
              }}
              viewport={{ once: true }}
            >
              <p className="italic text-blue-800">"{t.comment}"</p>
              <p className="mt-2 font-semibold text-blue-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
        <p className="mb-2">Jl. Sultan H. No.12, Tj. Senang, Kec. Tj. Senang, Kota Bandar Lampung, Lampung 35136</p>
        <p className="mb-2">WA: 0812-3456-7890</p>
        <p>Email: bubutmotorjaya@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t border-blue-200 text-sm text-blue-700">
        &copy; {new Date().getFullYear()} Bubut Motor Jaya. All rights reserved.
      </footer>
    </main>
  );
}
