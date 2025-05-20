import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const images = [
  { src: "/ioniq-6.png", title: "IONIQ 6", category: "EV" },
  { src: "/ioniq-5.png", title: "IONIQ 5", category: "EV" },
  { src: "/kona-elektrik.png", title: "KONA", category: "SUV" },
  { src: "/santa-fe.png", title: "SANTA-FE", category: "SUV" },
  { src: "/palisade.png", title: "PALISADE", category: "SUV" },
  { src: "/stargazefix.png", title: "STARGAZER", category: "MPV" },
  { src: "/tucson.png", title: "TUCSON", category: "SUV" },
  { src: "/venue.png", title: "VENUE", category: "SUV" },
  { src: "/staria.png", title: "STARIA", category: "MPV" },
];

// Ambil kategori unik dan tambahkan "Semua"
const categories = [
  "Semua",
  ...Array.from(new Set(images.map((img) => img.category))),
];

const Galeri: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Filter gambar sesuai kategori
  const filteredImages =
    selectedCategory === "Semua"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 pt-30">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">
          Pilih Mobil Impian Anda
        </h1>

        {/* Tombol kategori */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-10 py-2 font-semibold transition text-xl 
    ${
      selectedCategory === category
        ? "border-b-2 border-blue-900 text-blue-900"
        : "border-b-2 border-transparent text-blue-900 hover:border-blue-700 hover:text-blue-900"
    }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl shadow-lg bg-white overflow-hidden transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-0 right-0 bg-white/90 py-2 text-center backdrop-blur-sm">
                  <h3 className="text-md font-semibold text-blue-900">
                    {image.title}
                  </h3>
                </div>
              </div>
              <div className="text-center py-4 bg-gray-50">
                <Link
                  to={`/produk/${slugify(image.title)}`}
                  className="inline-block text-sm text-blue-700 font-medium border border-blue-700 px-4 py-1 rounded-md hover:bg-blue-700 hover:text-white transition"
                >
                  Info Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;
