import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout
import Layout from '@/layouts/Layout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  // Helper to get current page name for the Layout
  const getPageName = (pathname: string) => {
    if (pathname === '/') return 'Home';
    if (pathname.includes('about')) return 'About Us';
    if (pathname.includes('services')) return 'Services';
    if (pathname.includes('gallery')) return 'Gallery';
    if (pathname.includes('contact')) return 'Contact';
    return '';
  };

  return (
    <>
      <ScrollToTop />
      <Layout currentPageName={getPageName(location.pathname)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;