import { useState } from "react";
import bannerImage1 from "../assets/hero.jpg";
import bannerImage2 from "../assets/hero2.jpg";
import bannerImage3 from "../assets/hero3.jpg";
import bannerImage4 from "../assets/hero4.jpg";
import bannerImage5 from "../assets/hero6.jpg";
import { FaWhatsapp, FaShareAlt, FaPhone } from "react-icons/fa";
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
];

const bannerContents = [
  {
    title: "The new CRETA",
    subtitle: "Be Unstoppable",
    price: "Rp. 299.700.000",
  },
  {
    title: "Smart Connectivity",
    subtitle: "Drive Smarter, Not Harder",
    price: "Rp. 310.000.000",
  },
  {
    title: "Bold Design",
    subtitle: "Modern & Futuristic",
    price: "Rp. 320.000.000",
  },
  {
    title: "Advanced Safety",
    subtitle: "Peace of Mind Driving",
    price: "Rp. 330.000.000",
  },
  {
    title: "Powerful Performance",
    subtitle: "Efficiency Meets Power",
    price: "Rp. 345.000.000",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Harga di kiri bawah */}
        <div className="absolute bottom-6 left-6 z-20 text-white max-w-xs">
          <p className="text-sm drop-shadow-sm">Mulai Dari :</p>
          <h2 className="text-4xl font-semibold mb-1 drop-shadow-md ">
            {bannerContents[current].price}
          </h2>
        </div>

        {/* Konten tengah */}
        <div className="relative z-20 flex flex-col items-center justify-start h-full pt-[200px] text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-sans">
            {bannerContents[current].title}
          </h1>
          <p className="text-lg md:text-4xl mb-6 max-w-2xl drop-shadow-md">
            {bannerContents[current].subtitle}
          </p>

          {/* Navigasi kiri kanan */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
            <button
              onClick={prevSlide}
              className="bg-transparent bg-opacity-30 hover:bg-opacity-60 text-white p-2 rounded-full transition"
            >
              <FiChevronLeft className="text-3xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
            <button
              onClick={nextSlide}
              className="bg-transparent bg-opacity-30 hover:bg-opacity-60 text-white p-2 rounded-full transition"
            >
              <FiChevronRight className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Tombol Test Drive */}
        <div className="absolute bottom-6 right-6 z-30">
          <a
            href="#test-drive"
            className="px-20 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition font-semibold text-sm"
          >
            Test Drive
          </a>
        </div>

        {/* Scroll bawah */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <a
            href="#next-section"
            className="animate-bounce text-white hover:text-blue-300 transition"
          >
            <FiChevronDown className="text-3xl" />
          </a>
        </div>
      </section>

      {/* Bar ikon bawah */}
      <div className="w-full bg-blue-900 py-5">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 text-white text-sm">
          <button
            onClick={() =>
              navigator.share &&
              navigator.share({ title: "CRETA", url: window.location.href })
            }
            className="flex flex-col items-center gap-2 hover:text-yellow-400 transition"
            title="Share"
          >
            <FaShareAlt className="text-3xl" />
            <span>Share</span>
          </button>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-3xl" />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex flex-col items-center gap-2 hover:text-red-400 transition"
          >
            <FaPhone className="text-3xl" />
            <span>Telp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
