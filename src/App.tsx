import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LegalModal } from './components/LegalModal';
import { ContactModal } from './components/ContactModal';
import { ConversionBar } from './components/ConversionBar';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { CRMPage } from './pages/CRMPage';
import { POSPage } from './pages/POSPage';
import { MachineryPage } from './pages/MachineryPage';
import { ChemicalsPage } from './pages/ChemicalsPage';
import { SuppliesPage } from './pages/SuppliesPage';
import { ToolsPage } from './pages/ToolsPage';
import { PricingPage } from './pages/PricingPage';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState<string | undefined>();
  const [activeToolId, setActiveToolId] = useState<string>('bill-generator');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenTool = (toolId: string) => {
    setActiveToolId(toolId);
  };

  const handleOpenDemo = () => {
    setContactModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForContact(planName);
    setContactModalOpen(true);
  };

  // The Core Application Content
  const appContent = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      transition: 'background-color 0.25s ease, color 0.25s ease',
      width: '100%',
      position: 'relative'
    }}>
      {/* Scroll to Top on every page navigation */}
      <ScrollToTop />

      {/* 1. Global Navigation Bar with Multi-Page Routing */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        theme={theme}
        onThemeToggle={toggleTheme}
        onOpenTool={handleOpenTool}
        onOpenDemo={handleOpenDemo}
        onOpenLegal={setLegalModalType}
      />

      {/* 2. Page Router Outlet */}
      <main id="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currentLang={currentLang}
                onOpenDemo={handleOpenDemo}
                onOpenTrial={() => setContactModalOpen(true)}
              />
            }
          />
          <Route
            path="/crm"
            element={<CRMPage onOpenTrial={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/pos"
            element={<POSPage onOpenTrial={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/machinery"
            element={<MachineryPage onOpenTrial={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/chemicals"
            element={<ChemicalsPage onOpenTrial={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/supplies"
            element={<SuppliesPage onOpenTrial={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/tools"
            element={
              <ToolsPage
                activeToolId={activeToolId}
                onOpenTrial={() => setContactModalOpen(true)}
              />
            }
          />
          <Route
            path="/pricing"
            element={<PricingPage onSelectPlan={handleSelectPlan} />}
          />
          <Route path="/responsive" element={<Navigate to="/" replace />} />
          <Route path="/devices" element={<Navigate to="/" replace />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 3. Global Comprehensive Footer */}
      <Footer
        onOpenTool={handleOpenTool}
        onOpenLegal={setLegalModalType}
        onOpenDemo={handleOpenDemo}
      />

      {/* 4. Universal Mobile Conversion Bar & Floating WhatsApp */}
      <ConversionBar onOpenTrial={() => setContactModalOpen(true)} />

      {/* 5. Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialPlan={selectedPlanForContact}
      />
    </div>
  );

  return appContent;
};
