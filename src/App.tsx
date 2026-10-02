import { useState, useEffect } from 'react';
import './index.css';
import { ChevronUp } from 'lucide-react';

import TopContactBar from './components/TopContactBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyIntro from './components/CompanyIntro';
import FeaturedComponents from './components/FeaturedComponents';
import { EXPLORER_PRODUCTS } from './components/InteractiveExplorer';
import type { ProductItem } from './components/InteractiveExplorer';
import ProductShowcaseStrip from './components/ProductShowcaseStrip';
import ManufacturingCapabilities from './components/ManufacturingCapabilities';
import ManufacturingProcess from './components/ManufacturingProcess';
import IndustriesWeServe from './components/IndustriesWeServe';
import FactoryOverview from './components/FactoryOverview';
import StandardsGrid from './components/StandardsGrid';
import TestingFacilities from './components/TestingFacilities';
import TrustCertificationSection from './components/TrustCertificationSection';
import NewsInsights from './components/NewsInsights';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

import RequestQuoteModal from './components/RequestQuoteModal';
import WatchVideoModal from './components/WatchVideoModal';
import ProductDetailPage from './components/ProductDetailPage';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Global Scroll Reveal Animation for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    // Apply animation to all sections except the Hero (index 0)
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        if (index > 0) {
          section.classList.add('reveal-section');
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  const handleOpenVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);

  const handleOpenProductDetail = (itemOrTitle: ProductItem | string) => {
    if (typeof itemOrTitle === 'string') {
      const q = itemOrTitle.toLowerCase().trim();
      const match = EXPLORER_PRODUCTS.find(p =>
        p.title.toLowerCase().includes(q) ||
        q.includes(p.title.toLowerCase()) ||
        p.series.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      ) || EXPLORER_PRODUCTS[0];
      setSelectedProductForDetail(match);
    } else {
      setSelectedProductForDetail(itemOrTitle);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', color: '#1B5E20' }}>

      {/* Top Scroll Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 01 Top Contact Bar */}
      <TopContactBar />

      {/* 02 Main Navigation & 03 Mega Menu */}
      <Header
        onRequestQuoteClick={handleOpenQuote}
      />

      <main id="main-content">
        {/* 04 Full Screen Hero Section */}
        <HeroSection
          onRequestQuoteClick={handleOpenQuote}
          onWatchVideoClick={handleOpenVideo}
        />

        {/* 05 Company Introduction */}
        <CompanyIntro />

        {/* 06 Featured Rail Components (All Products) */}
        <FeaturedComponents onOpenProductDetail={handleOpenProductDetail} />

        {/* 07 Isolated Metal Castings Showcase Strip */}
        <ProductShowcaseStrip onOpenProductDetail={handleOpenProductDetail} />

        {/* 08 Manufacturing Capabilities */}
        <ManufacturingCapabilities />

        {/* 09 Manufacturing Process Timeline */}
        <ManufacturingProcess />

        {/* 10 Railway Sectors We Serve */}
        <IndustriesWeServe />

        {/* 11 Factory Section with Stats Overlay */}
        <FactoryOverview />

        {/* 12 International Standards & Wheelsets Showcase */}
        <StandardsGrid />

        {/* 13 In-House Testing Facilities */}
        <TestingFacilities />

        {/* 15 Company Trust & Official Certifications */}
        <TrustCertificationSection />

        {/* 16 News & Insights */}
        <NewsInsights />

        {/* 17 CTA Banner */}
        <CtaBanner onRequestQuoteClick={handleOpenQuote} />
      </main>

      {/* 18 Corporate Mega Footer & Bottom Footer */}
      <Footer />

      {/* Interactive Modals & Product Detail Page */}
      <ProductDetailPage
        isOpen={!!selectedProductForDetail}
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onRequestQuoteForProduct={(_title) => {
          setSelectedProductForDetail(null);
          setIsQuoteModalOpen(true);
        }}
        onSelectProduct={setSelectedProductForDetail}
      />

      <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
      <WatchVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />

      {/* Floating Action Buttons */}
      <div className="floating-action-btn">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#1B5E20',
              color: '#FFFFFF',
              border: '2px solid #4CAF50',
              boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#4CAF50';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#1B5E20';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ChevronUp size={22} />
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
