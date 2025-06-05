import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";  // 🔹 Import Vercel Analytics
import Home from "./pages/Home";
import Services from "./pages/Services";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simulating a 1.5-second load
  }, []);

  return (
    <Router>
      <PromoBanner />
      <Header />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}

      <Footer />
      <Analytics /> {/* 🔹 Vercel Analytics will track user behavior */}
    </Router>
  );
}

export default App;
