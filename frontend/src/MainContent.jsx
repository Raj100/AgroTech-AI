import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Crop from './components/CropRecommendation';
import Disease from './components/Disease';
import AIEngine from './components/AIEngine';
import Submit from './components/Submit';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Fertilizer from './components/Fertilizer';
import SoilQuality from './components/SoilQuality';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import Forecast from './pages/Forecast';
import Prices from './components/Prices';
import Reports from './components/Reports';
import UseScrollToTop from './components/UseScrollToTop';
import Article from './pages/Article';
const MainContent = () => {
  UseScrollToTop();

  return (
    <div>
      <GoTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/engine" element={<AIEngine/>} />
          <Route path="/submit" element={<Submit/>} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/soil" element={<SoilQuality />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/article" element={<Article/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
