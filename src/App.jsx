import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactFAB from './components/ContactFAB'
import ScrollToTop from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AccreditationPage = lazy(() => import('./pages/AccreditationPage'))
const TradeFairPage = lazy(() => import('./pages/TradeFairPage'))

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full min-h-screen relative z-10"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
          <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/accreditation" element={<PageWrapper><AccreditationPage /></PageWrapper>} />
          <Route path="/trade-fair" element={<PageWrapper><TradeFairPage /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-transparent relative">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-[20px]">
        <AnimatedRoutes />
      </main>
      {!isHomePage && (
        <div className="relative z-10 w-full overflow-hidden">
          <Footer />
        </div>
      )}
      <ContactFAB />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
