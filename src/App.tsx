import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ArticleModal } from './components/ArticleModal';

import { HomeView } from './views/HomeView';
import { LearnView } from './views/LearnView';
import { StaySafeView } from './views/StaySafeView';
import { ScamAlertsView } from './views/ScamAlertsView';
import { WhatToDoView } from './views/WhatToDoView';
import { ResourcesView } from './views/ResourcesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';

import { ARTICLES } from './data/articles';
import { SCAM_ALERTS } from './data/scamAlerts';
import { EMERGENCY_GUIDES } from './data/emergencyGuides';
import { Article, ScamAlert, EmergencyGuide } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [tabParam, setTabParam] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Detail Modal State
  const [selectedDetail, setSelectedDetail] = useState<
    | { type: 'article'; data: Article }
    | { type: 'scam'; data: ScamAlert }
    | { type: 'emergency'; data: EmergencyGuide }
    | null
  >(null);

  // Navigation handler
  const handleNavigate = (tab: string, param?: string) => {
    setCurrentTab(tab);
    setTabParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open specific modals
  const handleOpenArticle = (slug: string) => {
    const found = ARTICLES.find((a) => a.slug === slug);
    if (found) {
      setSelectedDetail({ type: 'article', data: found });
    }
  };

  const handleOpenScamAlert = (slug: string) => {
    const found = SCAM_ALERTS.find((s) => s.slug === slug);
    if (found) {
      setSelectedDetail({ type: 'scam', data: found });
    }
  };

  const handleOpenEmergency = (slug: string) => {
    const found = EMERGENCY_GUIDES.find((e) => e.slug === slug);
    if (found) {
      setSelectedDetail({ type: 'emergency', data: found });
    }
  };

  // Search selection handler
  const handleSelectSearchResult = (
    type: 'article' | 'scam' | 'emergency' | 'glossary',
    idOrSlug: string
  ) => {
    if (type === 'article') {
      handleOpenArticle(idOrSlug);
    } else if (type === 'scam') {
      handleOpenScamAlert(idOrSlug);
    } else if (type === 'emergency') {
      handleOpenEmergency(idOrSlug);
    } else if (type === 'glossary') {
      handleNavigate('resources', 'glossary');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#17202A]">
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 px-4 py-2 bg-[#0B1F33] text-white text-xs font-semibold rounded shadow-md"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenArticle={handleOpenArticle}
            onOpenScamAlert={handleOpenScamAlert}
            onOpenEmergency={handleOpenEmergency}
          />
        )}

        {currentTab === 'learn' && (
          <LearnView
            initialCategory={tabParam}
            onOpenArticle={handleOpenArticle}
          />
        )}

        {currentTab === 'stay-safe' && (
          <StaySafeView
            initialTopic={tabParam}
            onOpenArticle={handleOpenArticle}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'scam-alerts' && (
          <ScamAlertsView
            onOpenAlert={handleOpenScamAlert}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'what-to-do' && (
          <WhatToDoView onOpenEmergency={handleOpenEmergency} />
        )}

        {currentTab === 'resources' && (
          <ResourcesView
            initialTab={tabParam}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'about' && <AboutView />}

        {currentTab === 'contact' && <ContactView />}

        {currentTab === 'legal' && <LegalView initialTab={tabParam} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={handleSelectSearchResult}
      />

      {/* Detail Article/Scam/Emergency Modal */}
      <ArticleModal
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onNavigateToRelated={(type, slug) => {
          if (type === 'article') handleOpenArticle(slug);
          if (type === 'scam') handleOpenScamAlert(slug);
          if (type === 'emergency') handleOpenEmergency(slug);
        }}
      />
    </div>
  );
}
