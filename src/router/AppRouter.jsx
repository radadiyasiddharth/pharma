import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
// import Products from '../pages/Products';
// import Manufacturing from '../pages/Manufacturing';
// import Research from '../pages/Research';
import Contact from '../pages/Contact';

const AppRouter = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/manufacturing" element={<Manufacturing />} /> */}
            {/* <Route path="/research" element={<Research />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default AppRouter;