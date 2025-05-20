export interface CarSpec {
  slug: string;
  name: string;
  price: string;
  image: string[];
  specs: {
    mesin: string;
    tenaga: string;
    transmisi: string;
    kapasitasTangki: string;
    dimensi: string;
  };
  fitur: string[];
  exterior: string[]; // tambahan exterior
  interior: string[]; // tambahan interior
}

export const cars: CarSpec[] = [
  {
    slug: "ioniq-6",
    name: "IONIQ",
    price: "Rp 289.000.000",
    image: [
      "/ioniq6banner1.png",
      "/ioniq6banner (2).png",
      "/ioniq6banner (3).png",
      "/ioniq6banner (4).png",
      "/ioniq6banner (5).png",
      "/ioniq6banner (1).png",
    ],
    specs: {
      mesin: "Smartstream G1.5 MPI",
      tenaga: "115 PS / 6.300 rpm",
      transmisi: "IVT",
      kapasitasTangki: "40 Liter",
      dimensi: "4.460 x 1.780 x 1.690 mm",
    },
    fitur: [
      "Wireless Smartphone Charger",
      "Hyundai SmartSense",
      "Captain Seat",
      "8” Display Audio",
    ],
    exterior: ["Lampu LED depan", "Velg alloy 17 inci", "Grille chrome"],
    interior: [
      "Jok kulit premium",
      "Dashboard touchscreen 10 inci",
      "AC otomatis dua zona",
    ],
  },
  {
    slug: "creta-style",
    name: "Hyundai Creta Style",
    price: "Rp 350.000.000",
    image: ["/ioniq-6.png", "/ioniq-5.png", "/images/avanza3.jpg"],
    specs: {
      mesin: "Smartstream G1.5 MPI",
      tenaga: "115 PS / 6.300 rpm",
      transmisi: "IVT",
      kapasitasTangki: "50 Liter",
      dimensi: "4.300 x 1.790 x 1.635 mm",
    },
    fitur: [
      "Panoramic Sunroof",
      "Bose Premium Audio",
      "Hyundai BlueLink",
      "Ventilated Seats",
    ],
    exterior: ["Lampu LED DRL", "Velg alloy 18 inci", "Roof rail"],
    interior: [
      "Jok kulit sintetis",
      "Head unit layar sentuh 8 inci",
      "Steering wheel control",
    ],
  },
];
