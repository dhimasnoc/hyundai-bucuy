import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Galeri from "./components/Gallery";
import WhatsAppFloating from "./components/WhatsappFloating";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Spesifikasi from "./pages/Spesifikasi";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Galeri />
            </>
          }
        />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produk/:slug" element={<Spesifikasi />} />
      </Routes>

      {/* Footer di luar Routes agar tampil di semua halaman */}
      <Footer />
      <WhatsAppFloating />
    </Router>
  );
}

export default App;
