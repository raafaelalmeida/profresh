import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";
import Loading from "./components/Loading"; // Import the new loading animation

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
        <Loading /> /* 🔹 Show animated loading spinner */
      ) : (
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}

      <Footer />
    </Router>
  );
}

export default App;
