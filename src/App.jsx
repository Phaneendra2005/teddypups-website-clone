import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';

// Pages
import Home from './pages/Home';
import Puppies from './pages/Puppies';
import PuppyDetail from './pages/PuppyDetail';
import HappyFamilies from './pages/HappyFamilies';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import GoneHome from './pages/GoneHome';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#fffdf8] text-[#2a170e]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puppies" element={<Puppies />} />
            <Route path="/puppies/:slug" element={<PuppyDetail />} />
            <Route path="/happy-families" element={<HappyFamilies />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gone-home" element={<GoneHome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
