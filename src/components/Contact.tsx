import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-8 md:flex md:gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <img
            src="/profilececep.jpg" // ganti dengan gambar profilmu
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            CECEP MUBAROCK
          </h2>
          <p className="text-gray-600 mb-4">Salesman Hyundai Lippo</p>
          <p className="text-gray-500 max-w-xs">
            Saya suka mabok mabokan dan dunia malam dengan memelihara beberapa
            LC
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-2/3 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h3>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <a
              href="mailto:johndoe@example.com"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              cecepmubarock@example.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-xl" />
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition"
            >
              +62 812-3456-7890
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-700 text-xl" />
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              linkedin.com/in/cecepmubarock
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-gray-800 text-xl" />
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              github.com/cecepmubarock
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaTwitter className="text-blue-400 text-xl" />
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-400 transition"
            >
              @cecepmubarock
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
