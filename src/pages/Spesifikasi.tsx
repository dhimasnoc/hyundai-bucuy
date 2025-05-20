import { useParams } from "react-router-dom";
import { cars } from "../data/mobil";
import { useState } from "react";

export default function CarDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const car = cars.find((item) => item.slug === slug);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!car) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-center text-red-600 text-2xl font-semibold">
          Mobil tidak ditemukan.
        </p>
      </div>
    );
  }

  // 🔐 Dijamin tidak undefined setelah pengecekan
  const safeCar = car;

  function prevImage() {
    setCurrentImageIndex((prev) =>
      prev === 0 ? safeCar.image.length - 1 : prev - 1
    );
  }

  function nextImage() {
    setCurrentImageIndex((prev) =>
      prev === safeCar.image.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Carousel */}
      <div className="relative w-screen h-screen overflow-hidden shadow-lg">
        <img
          src={safeCar.image[currentImageIndex]}
          alt={`${safeCar.name} gambar ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
          aria-label="Gambar sebelumnya"
        >
          &#8592;
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
          aria-label="Gambar berikutnya"
        >
          &#8594;
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {safeCar.image.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentImageIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
              aria-label={`Gambar ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className=" mx-auto px-6 py-12 flex flex-col gap-12">
        <div className="text-right">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-wide mb-2 drop-shadow-md">
            {safeCar.name}
          </h1>
          <p className="text-xl text-gray-700 font-semibold drop-shadow-sm">
            {safeCar.price}
          </p>
        </div>

        {/* Spesifikasi Teknis */}
        <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b border-blue-300 pb-2">
            Spesifikasi Teknis
          </h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>
              <strong className="text-blue-700">Mesin:</strong>{" "}
              {safeCar.specs.mesin}
            </li>
            <li>
              <strong className="text-blue-700">Tenaga:</strong>{" "}
              {safeCar.specs.tenaga}
            </li>
            <li>
              <strong className="text-blue-700">Transmisi:</strong>{" "}
              {safeCar.specs.transmisi}
            </li>
            <li>
              <strong className="text-blue-700">Kapasitas Tangki:</strong>{" "}
              {safeCar.specs.kapasitasTangki}
            </li>
            <li>
              <strong className="text-blue-700">Dimensi:</strong>{" "}
              {safeCar.specs.dimensi}
            </li>
          </ul>
        </section>

        {/* Fitur Unggulan */}
        <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b border-blue-300 pb-2">
            Fitur Unggulan
          </h2>
          <ul className="divide-y divide-gray-300 list-inside text-gray-700 text-lg">
            {safeCar.fitur.map((fitur, index) => (
              <li key={index} className="py-3">
                {fitur}
              </li>
            ))}
          </ul>
        </section>

        {/* Eksterior */}
        <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b border-blue-300 pb-2">
            Eksterior
          </h2>
          <ul className="divide-y divide-gray-300 list-inside text-gray-700 text-lg">
            {safeCar.exterior?.map((item, index) => (
              <li key={index} className="py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Interior */}
        <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b border-blue-300 pb-2">
            Interior
          </h2>
          <ul className="divide-y divide-gray-300 list-inside text-gray-700 text-lg">
            {safeCar.interior?.map((item, index) => (
              <li key={index} className="py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex justify-end gap-6">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Booking Test Drive
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
