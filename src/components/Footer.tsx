import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"; // Ganti sesuai path logo Anda

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <img src={logo} alt="CRETA Logo" className="w-28 mb-3" />
          <p className="text-gray-400 text-sm">
            Temukan pengalaman berkendara yang luar biasa bersama keluarga
            Hyundai. Desain modern, fitur canggih, dan performa terbaik.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontak Kami</h3>
          <p className="text-gray-300 text-sm">Lippo Plaza Kramat Jati</p>
          <p className="text-gray-300 text-sm">Lt. Ground Floor 58A</p>
          <p className="text-gray-300 text-sm">Jakarta, Indonesia</p>
          <p className="text-gray-300 text-sm mt-2">Telp: +62 812 3456 7890</p>
          <p className="text-gray-300 text-sm">Email: info@cecepmubarock.id</p>
        </div>

        {/* Sosial Media */}
        <div className="mt-8 flex justify-center gap-6 text-gray-400 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-left text-sm text-gray-500 pl-6">
        &copy; {new Date().getFullYear()} CECEP MUBAROCK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
