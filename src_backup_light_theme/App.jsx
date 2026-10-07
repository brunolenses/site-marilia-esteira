import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DigitalProducts from './components/DigitalProducts';
import Mentorship from './components/Mentorship';
import PhysicalProducts from './components/PhysicalProducts';
import Authority from './components/Authority';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage'; // Import new page
import './App.css';

const LandingPage = () => (
  <>
    <Header />
    <Hero />
    <About />
    <DigitalProducts />
    <Mentorship />
    <PhysicalProducts />
    <Authority />
    <FAQ />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/compra-confirmada" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

