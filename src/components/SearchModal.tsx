import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, AlertTriangle, LifeBuoy, BookMarked, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { SCAM_ALERTS } from '../data/scamAlerts';
import { EMERGENCY_GUIDES } from '../data/emergencyGuides';
import { GLOSSARY_TERMS } from '../data/glossary';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (type: 'article' | 'scam' | 'emergency' | 'glossary', idOrSlug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();

  const filteredArticles = normalized
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(normalized) ||
          a.summary.toLowerCase().includes(normalized)
      )
    : [];

  const filteredAlerts = normalized
    ? SCAM_ALERTS.filter(
        (s) =>
          s.title.toLowerCase().includes(normalized) ||
          s.summary.toLowerCase().includes(normalized) ||
          s.whatIsHappening.toLowerCase().includes(normalized)
      )
    : [];

  const filteredEmergencies = normalized
    ? EMERGENCY_GUIDES.filter(
        (e) =>
          e.title.toLowerCase().includes(normalized) ||
          e.subtitle.toLowerCase().includes(normalized)
      )
    : [];

  const filteredGlossary = normalized
    ? GLOSSARY_TERMS.filter(
        (g) =>
          g.term.toLowerCase().includes(normalized) ||
          (g.arabicTerm && g.arabicTerm.includes(normalized)) ||
          g.definition.toLowerCase().includes(normalized)
      )
    : [];

  const totalResults =
    filteredArticles.length +
    filteredAlerts.length +
    filteredEmergencies.length +
    filteredGlossary.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col max-h-[80vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Search guides, scam alerts and glossary"
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, scam alerts, emergency steps, or terms (e.g. WhatsApp, Phishing, Lost phone)..."
            className="w-full text-base text-[#17202A] placeholder-gray-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 mr-1"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!normalized ? (
            <div className="py-8 text-center text-sm text-[#5F6B76] space-y-3">
              <p>Type keywords like <strong className="text-gray-800">"WhatsApp"</strong>, <strong className="text-gray-800">"Bank"</strong>, <strong className="text-gray-800">"SIM"</strong>, or <strong className="text-gray-800">"PIN"</strong> to find relevant guides.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setQuery('WhatsApp')}
                  className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
                >
                  WhatsApp Security
                </button>
                <button
                  onClick={() => setQuery('Bank')}
                  className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
                >
                  Bank SMS Alerts
                </button>
                <button
                  onClick={() => setQuery('Lost phone')}
                  className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
                >
                  Lost Phone
                </button>
                <button
                  onClick={() => setQuery('2FA')}
                  className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
                >
                  2FA & Passwords
                </button>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-sm text-[#5F6B76]">
              <p className="font-semibold text-gray-800">No results found for "{query}"</p>
              <p className="mt-1">Try using simpler keywords or check our Emergency Guides or Security Glossary.</p>
            </div>
          ) : (
            <>
              {/* Emergency guides section */}
              {filteredEmergencies.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    <LifeBuoy className="w-3.5 h-3.5" />
                    <span>Emergency "What To Do" Guides ({filteredEmergencies.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredEmergencies.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => {
                          onSelectItem('emergency', e.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-md border border-amber-200 bg-amber-50/40 hover:bg-amber-100/60 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-900">
                            {e.title}
                          </p>
                          <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">{e.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-700 opacity-60 group-hover:opacity-100 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Scam alerts section */}
              {filteredAlerts.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-red-700 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Verified Scam Alerts ({filteredAlerts.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredAlerts.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onSelectItem('scam', s.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-md border border-gray-200 hover:border-red-300 hover:bg-red-50/30 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-red-100 text-red-800 mr-2">
                            {s.category}
                          </span>
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-red-900">
                            {s.title}
                          </span>
                          <p className="text-xs text-gray-600 line-clamp-1 mt-1">{s.summary}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-700 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles section */}
              {filteredArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#0E7490] uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Educational Guides ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredArticles.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          onSelectItem('article', a.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-md border border-gray-200 hover:border-[#0E7490] hover:bg-cyan-50/20 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-[#0E7490]">
                            {a.title}
                          </p>
                          <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">{a.summary}</p>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0 ml-3">{a.readingTime}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary section */}
              {filteredGlossary.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <BookMarked className="w-3.5 h-3.5" />
                    <span>Glossary Terms ({filteredGlossary.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredGlossary.map((g, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-md border border-gray-100 bg-gray-50/50"
                      >
                        <div className="flex items-baseline justify-between">
                          <p className="text-sm font-semibold text-gray-900">{g.term}</p>
                          {g.arabicTerm && (
                            <span className="font-arabic text-xs font-bold text-gray-500">
                              {g.arabicTerm}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{g.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
