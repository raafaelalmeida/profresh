import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulating a 1-second load
  }, []);

  return (
    <Router>
      <PromoBanner /> {/* ✅ Promo banner at the top */}
      <Header />  {/* ✅ Only one header */}
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}

      <Footer /> {/* ✅ Only one footer */}
    </Router>
  );
}

export default App;
