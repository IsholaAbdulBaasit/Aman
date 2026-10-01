import React from 'react';

interface FooterProps {
  onNavigate: (tab: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: string, param?: string) => {
    onNavigate(tab, param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F33] text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="font-arabic font-bold text-3xl text-white tracking-tight">
                أمان
              </span>
              <span className="text-sm font-semibold tracking-wider text-gray-400 border-l border-gray-600 pl-2 uppercase font-sans">
                Amān
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Technology, cybersecurity, and safety awareness platform built to help everyday people understand modern tools, recognize digital risks, and make safer choices.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded">
                Verified Educational Initiative • Nigeria & Global
              </span>
            </div>
          </div>

          {/* Learn Col */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-white tracking-wider uppercase">Learn</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('learn', 'technology')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Technology Basics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learn', 'cybersecurity')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Cybersecurity
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learn', 'privacy')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Digital Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('learn', 'digital-literacy')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Digital Literacy
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Safe & Emergency Col */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-white tracking-wider uppercase">Stay Safe</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('stay-safe', 'account-security')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Account Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('stay-safe', 'device-safety')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Device Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('scam-alerts')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Scam Alerts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('what-to-do')}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors text-left"
                >
                  Emergency: What To Do
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Organization Col */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-white tracking-wider uppercase">Resources & About</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('resources', 'glossary')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Security Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources', 'checklists')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Interactive Checklists
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources', 'scenarios')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Scenario Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Amān
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact & Advice
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Legal Notice */}
        <div className="py-6 border-b border-gray-800 text-xs text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-300">Important Disclaimer:</strong> Information provided by أمان (Amān) is strictly for educational, awareness, and self-help informational purposes. It does not constitute formal legal, financial, or certified emergency cybersecurity incident response. In cases of active financial theft or emergency threats, promptly contact your financial institution and accredited law enforcement agencies.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 أمان (Amān). All rights reserved.</p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p className="flex items-center gap-1.5 text-gray-400">
              <span>Made by</span>
              <a
                href="https://abdulbaasit-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-300 transition-colors"
                title="Creator's website"
              >
                Abdul Baasit
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('legal', 'privacy')} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('legal', 'terms')} className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleNav('legal', 'cookies')} className="hover:text-gray-300 transition-colors">
              Cookie Statement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};