import React, { useState } from 'react';
import {
  ShieldAlert,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Smartphone,
  HelpCircle,
  Clock,
  Compass,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { SCAM_ALERTS } from '../data/scamAlerts';
import { EMERGENCY_GUIDES } from '../data/emergencyGuides';
import { SCENARIOS } from '../data/scenarios';

interface HomeViewProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenArticle: (slug: string) => void;
  onOpenScamAlert: (slug: string) => void;
  onOpenEmergency: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenArticle,
  onOpenScamAlert,
  onOpenEmergency,
}) => {
  // Scenario state on homepage
  const [selectedScenarioIndex] = useState(0);
  const activeScenario = SCENARIOS[selectedScenarioIndex];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);

  // Quick checklist state on homepage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'check-1': false,
    'check-2': false,
    'check-3': false,
    'check-4': false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScenarioSelect = (optId: string) => {
    setSelectedOptionId(optId);
    setHasSubmittedAnswer(true);
  };

  const resetScenario = () => {
    setSelectedOptionId(null);
    setHasSubmittedAnswer(false);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-4 sm:pt-14 sm:pb-8 border-b border-gray-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-[#0B1F33] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
            <span>Technology • Cybersecurity • Safety</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1F33] tracking-tight leading-[1.1]">
            Understand technology. <br />
            <span className="text-[#0E7490]">Stay safer.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5F6B76] max-w-2xl mx-auto leading-relaxed font-normal">
            Practical guides that help you recognize digital risks, protect your information, and make confident decisions in everyday digital life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('learn')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#0B1F33] hover:bg-[#132c45] rounded-md transition-colors shadow-sm inline-flex items-center space-x-2"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('stay-safe')}
              className="px-6 py-3 text-sm font-semibold text-[#0B1F33] bg-white hover:bg-gray-50 border border-gray-300 rounded-md transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore Safety Guides</span>
            </button>

            <button
              onClick={() => onNavigate('what-to-do')}
              className="px-6 py-3 text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-md transition-colors inline-flex items-center space-x-2"
            >
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>I Need Help Right Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. "WHAT DO YOU NEED HELP WITH?" (PROBLEM-ORIENTED TRIAGE) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-semibold text-[#0E7490] tracking-wider uppercase">
              Immediate Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight mt-1">
              Something doesn’t feel right?
            </h2>
          </div>
          <p className="text-sm text-[#5F6B76] max-w-md">
            Direct action steps to protect yourself when dealing with strange messages, unauthorized access, or potential scams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onOpenEmergency('clicked-suspicious-link')}
            className="p-5 text-left bg-white rounded-lg border border-gray-200 hover:border-[#0E7490] hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                High Priority
              </span>
              <h3 className="font-bold text-[#0B1F33] text-base group-hover:text-[#0E7490]">
                I clicked a strange link
              </h3>
              <p className="text-xs text-[#5F6B76] leading-relaxed">
                What to inspect immediately and how to protect passwords and sessions.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0E7490] mt-4 flex items-center">
              View response steps <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </button>

          <button
            onClick={() => onOpenEmergency('my-account-was-compromised')}
            className="p-5 text-left bg-white rounded-lg border border-gray-200 hover:border-[#0E7490] hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                Account Breach
              </span>
              <h3 className="font-bold text-[#0B1F33] text-base group-hover:text-[#0E7490]">
                My account may be hacked
              </h3>
              <p className="text-xs text-[#5F6B76] leading-relaxed">
                Recover access, terminate active intruder sessions, and clear backdoor email forwarding.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0E7490] mt-4 flex items-center">
              View response steps <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </button>

          <button
            onClick={() => onOpenEmergency('i-lost-my-phone')}
            className="p-5 text-left bg-white rounded-lg border border-gray-200 hover:border-[#0E7490] hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                Physical Loss
              </span>
              <h3 className="font-bold text-[#0B1F33] text-base group-hover:text-[#0E7490]">
                I lost my phone / SIM card
              </h3>
              <p className="text-xs text-[#5F6B76] leading-relaxed">
                Block SIM immediately to prevent USSD banking theft, and trigger remote lock.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0E7490] mt-4 flex items-center">
              View response steps <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </button>

          <button
            onClick={() => onOpenEmergency('i-was-scammed')}
            className="p-5 text-left bg-white rounded-lg border border-gray-200 hover:border-[#0E7490] hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                Financial Theft
              </span>
              <h3 className="font-bold text-[#0B1F33] text-base group-hover:text-[#0E7490]">
                I think I was scammed
              </h3>
              <p className="text-xs text-[#5F6B76] leading-relaxed">
                Immediate fund lien alerts to your bank, preserving evidence, and avoiding recovery scams.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0E7490] mt-4 flex items-center">
              View response steps <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </button>
        </div>
      </section>

      {/* 3. CORE LEARNING AREAS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-semibold text-[#0E7490] tracking-wider uppercase">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight mt-1">
              Core Educational Topics
            </h2>
          </div>
          <button
            onClick={() => onNavigate('learn')}
            className="text-xs sm:text-sm font-semibold text-[#0E7490] hover:underline flex items-center"
          >
            Browse all guides <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-[#0B1F33]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">
                Technology & Internet
              </h3>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Understand how websites, cloud backups, smartphones, and mobile carriers actually function behind the scenes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('learn', 'technology')}
              className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
            >
              Explore Technology Basics →
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-[#0B1F33]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">
                Cybersecurity & Accounts
              </h3>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Learn how password cracking, phishing traps, and two-factor authentication work to drastically reduce vulnerability.
              </p>
            </div>
            <button
              onClick={() => onNavigate('learn', 'cybersecurity')}
              className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
            >
              Explore Cybersecurity →
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-[#0B1F33]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F33]">
                Online & Real-World Safety
              </h3>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Physical POS PIN privacy, WhatsApp group defense, SIM protection, and avoiding fraudulent digital job offers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('stay-safe', 'online-safety')}
              className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
            >
              Explore Safety Guides →
            </button>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCENARIO SIMULATOR ("WHAT WOULD YOU DO?") */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-[#0E7490] tracking-wider uppercase flex items-center">
              <HelpCircle className="w-3.5 h-3.5 mr-1" />
              Interactive Reasoning Practice
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] tracking-tight mt-1">
              What Would You Do?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5F6B76]">
            Practice recognizing common traps without real-world risk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: The Situation & Message Simulator */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                Scenario 1: {activeScenario.topic}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeScenario.context}
              </p>
            </div>

            {/* Simulated Phone Message Bubble */}
            {activeScenario.messagePreview && (
              <div className="bg-[#F8F9F7] border border-gray-300 rounded-lg p-4 space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-200 pb-2">
                  <span className="font-semibold text-gray-800">
                    {activeScenario.messagePreview.channel}: {activeScenario.messagePreview.sender}
                  </span>
                  <span>{activeScenario.messagePreview.timestamp}</span>
                </div>
                <p className="text-sm font-mono text-gray-800 leading-relaxed break-words">
                  {activeScenario.messagePreview.body}
                </p>
              </div>
            )}
          </div>

          {/* Right: The Question & Choices */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-[#0B1F33]">
              {activeScenario.question}
            </h3>

            <div className="space-y-2.5">
              {activeScenario.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let btnStyle = 'border-gray-200 hover:border-gray-400 bg-white text-gray-800';

                if (hasSubmittedAnswer) {
                  if (opt.isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium';
                  } else if (isSelected) {
                    btnStyle = 'border-red-500 bg-red-50/70 text-red-950';
                  } else {
                    btnStyle = 'border-gray-200 opacity-50 bg-gray-50 text-gray-600';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleScenarioSelect(opt.id)}
                    disabled={hasSubmittedAnswer}
                    className={`w-full text-left p-3.5 rounded-md border text-sm transition-all flex items-start space-x-3 ${btnStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {opt.id.slice(-1).toUpperCase()}
                    </span>
                    <span className="leading-snug">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Box */}
            {hasSubmittedAnswer && selectedOptionId && (
              <div className="p-4 rounded-md border border-gray-200 bg-gray-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
                      activeScenario.options.find((o) => o.id === selectedOptionId)?.isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {activeScenario.options.find((o) => o.id === selectedOptionId)?.isCorrect
                      ? 'Correct Decision'
                      : 'High Risk Decision'}
                  </span>

                  <button
                    onClick={resetScenario}
                    className="text-xs font-semibold text-[#0E7490] hover:underline"
                  >
                    Try again
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {
                    activeScenario.options.find((o) => o.id === selectedOptionId)
                      ?.explanation
                  }
                </p>

                <div className="pt-2 border-t border-gray-200 text-xs font-medium text-gray-600">
                  <strong>Key Rule: </strong>
                  {activeScenario.keyTakeaway}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={() => onNavigate('resources', 'scenarios')}
            className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
          >
            Practice more scenarios in Resources →
          </button>
        </div>
      </section>

      {/* 5. LATEST VERIFIED SCAM ALERTS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-semibold text-red-700 tracking-wider uppercase flex items-center">
              <AlertTriangle className="w-3.5 h-3.5 mr-1" />
              Scam Advisories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight mt-1">
              Active Scams & Warning Signs
            </h2>
          </div>
          <button
            onClick={() => onNavigate('scam-alerts')}
            className="text-xs sm:text-sm font-semibold text-[#0E7490] hover:underline flex items-center"
          >
            View all alerts <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCAM_ALERTS.slice(0, 2).map((alert) => (
            <div
              key={alert.id}
              className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-red-800 bg-red-100 px-2 py-0.5 rounded uppercase">
                    {alert.status}
                  </span>
                  <span className="text-gray-500">{alert.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] leading-snug">
                  {alert.title}
                </h3>
                <p className="text-sm text-[#5F6B76] leading-relaxed line-clamp-3">
                  {alert.summary}
                </p>
              </div>

              <button
                onClick={() => onOpenScamAlert(alert.slug)}
                className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center pt-2"
              >
                Read full warning breakdown →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QUICK DIGITAL SAFETY CHECKUP WIDGET */}
      <section className="p-6 sm:p-8 bg-white rounded-lg border border-gray-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-[#18794E] tracking-wider uppercase flex items-center">
              <FileCheck className="w-3.5 h-3.5 mr-1" />
              Self-Assessment
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33] tracking-tight mt-1">
              Quick Digital Safety Audit (4 Essential Checks)
            </h2>
          </div>
          <button
            onClick={() => onNavigate('resources', 'checklists')}
            className="text-xs sm:text-sm font-semibold text-[#0E7490] hover:underline"
          >
            Open complete checklists →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => toggleCheck('check-1')}
            className={`p-4 rounded-md border cursor-pointer transition-colors flex items-start space-x-3 ${
              checkedItems['check-1']
                ? 'bg-emerald-50/60 border-emerald-300'
                : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="checkbox"
              checked={checkedItems['check-1']}
              onChange={() => {}}
              className="mt-1 h-4 w-4 rounded text-[#18794E] focus:ring-[#18794E]"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">
                1. WhatsApp Two-Step PIN
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Have you set a 6-digit PIN in WhatsApp (Settings &gt; Account &gt; Two-Step Verification)?
              </p>
            </div>
          </div>

          <div
            onClick={() => toggleCheck('check-2')}
            className={`p-4 rounded-md border cursor-pointer transition-colors flex items-start space-x-3 ${
              checkedItems['check-2']
                ? 'bg-emerald-50/60 border-emerald-300'
                : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="checkbox"
              checked={checkedItems['check-2']}
              onChange={() => {}}
              className="mt-1 h-4 w-4 rounded text-[#18794E] focus:ring-[#18794E]"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">
                2. Custom SIM Card PIN
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Is your phone SIM locked with a custom PIN so it cannot be removed and used for USSD fraud?
              </p>
            </div>
          </div>

          <div
            onClick={() => toggleCheck('check-3')}
            className={`p-4 rounded-md border cursor-pointer transition-colors flex items-start space-x-3 ${
              checkedItems['check-3']
                ? 'bg-emerald-50/60 border-emerald-300'
                : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="checkbox"
              checked={checkedItems['check-3']}
              onChange={() => {}}
              className="mt-1 h-4 w-4 rounded text-[#18794E] focus:ring-[#18794E]"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">
                3. Unique Primary Email Password
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Is your email password distinct from every other social media and shopping website?
              </p>
            </div>
          </div>

          <div
            onClick={() => toggleCheck('check-4')}
            className={`p-4 rounded-md border cursor-pointer transition-colors flex items-start space-x-3 ${
              checkedItems['check-4']
                ? 'bg-emerald-50/60 border-emerald-300'
                : 'bg-gray-50/60 border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="checkbox"
              checked={checkedItems['check-4']}
              onChange={() => {}}
              className="mt-1 h-4 w-4 rounded text-[#18794E] focus:ring-[#18794E]"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">
                4. Bank In-App Payment Verification
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Do you strictly verify incoming payments in your official bank app balance rather than SMS texts?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT AMAN / TRUST SECTION (HONEST, EVIDENCE-BASED) */}
      <section className="border-t border-gray-200 pt-12 pb-6 space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-arabic font-bold text-2xl text-[#0B1F33]">أمان</span>
            <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
              • Our Editorial Commitment
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#0B1F33]">
            Safety built on evidence, not fear.
          </h2>
          <p className="text-sm text-[#5F6B76] leading-relaxed">
            We do not publish sensational headlines, fabricate threat statistics, or promote fear of modern technology. Our purpose is simple: provide ordinary technology users with clear explanations, practical habits, and calm instructions for when things go wrong.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-semibold text-[#0E7490] hover:underline"
            >
              Read our mission & editorial standards →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
