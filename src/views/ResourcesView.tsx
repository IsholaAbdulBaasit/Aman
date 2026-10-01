import React, { useState } from 'react';
import {
  FolderOpen,
  CheckSquare,
  BookMarked,
  HelpCircle,
  PhoneCall,
  Search,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CHECKLIST_GROUPS } from '../data/checklists';
import { GLOSSARY_TERMS } from '../data/glossary';
import { SCENARIOS } from '../data/scenarios';

interface ResourcesViewProps {
  initialTab?: string;
  onNavigate: (tab: string, param?: string) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  initialTab,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialTab || 'checklists'
  );

  // Checklists local state
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('aman_checklist_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = (id: string) => {
    const updated = { ...completedItems, [id]: !completedItems[id] };
    setCompletedItems(updated);
    try {
      localStorage.setItem('aman_checklist_progress', JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  const totalChecklistItems = CHECKLIST_GROUPS.reduce(
    (acc, g) => acc + g.items.length,
    0
  );
  const totalCompletedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalCompletedCount / totalChecklistItems) * 100);

  // Glossary state
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState('all');

  const glossaryCategories = ['all', 'Security', 'Threats', 'Privacy', 'Telecom', 'Banking'];

  const filteredGlossary = GLOSSARY_TERMS.filter((term) => {
    const matchesCategory =
      selectedGlossaryCategory === 'all' || term.category === selectedGlossaryCategory;
    const matchesQuery =
      term.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
      (term.arabicTerm && term.arabicTerm.includes(glossaryQuery)) ||
      term.definition.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
      term.everydayExample.toLowerCase().includes(glossaryQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Scenario Simulator state
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, string | null>>({});

  const handleScenarioChoice = (scenarioIndex: number, optionId: string) => {
    setScenarioAnswers((prev) => ({ ...prev, [scenarioIndex]: optionId }));
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0E7490] uppercase tracking-wider">
          <FolderOpen className="w-3.5 h-3.5" />
          <span>Practical Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Safety Resources & Tools
        </h1>
        <p className="text-base text-[#5F6B76] max-w-2xl leading-relaxed">
          Interactive audit checklists, plain-language terminology definitions, real-world scenario practice, and verified official support channels.
        </p>
      </div>

      {/* Tabs bar */}
      <div className="flex border-b border-gray-200 space-x-2 sm:space-x-8 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('checklists')}
          className={`flex items-center space-x-2 py-3 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'checklists'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-[#5F6B76] hover:text-[#0B1F33]'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Safety Checklists ({totalCompletedCount}/{totalChecklistItems})</span>
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`flex items-center space-x-2 py-3 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'glossary'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-[#5F6B76] hover:text-[#0B1F33]'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>Security Glossary</span>
        </button>

        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex items-center space-x-2 py-3 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'scenarios'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-[#5F6B76] hover:text-[#0B1F33]'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>"What Would You Do?" Simulator</span>
        </button>

        <button
          onClick={() => setActiveTab('hotlines')}
          className={`flex items-center space-x-2 py-3 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'hotlines'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-[#5F6B76] hover:text-[#0B1F33]'
          }`}
        >
          <PhoneCall className="w-4 h-4" />
          <span>Verified Hotlines & Contacts</span>
        </button>
      </div>

      {/* 1. CHECKLISTS TAB */}
      {activeTab === 'checklists' && (
        <div className="space-y-8">
          {/* Progress Tracker Bar */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-[#0B1F33]">
                  Your Digital Defense Progress
                </h2>
                <p className="text-xs text-[#5F6B76]">
                  Your checklist state is saved locally on your device for your privacy.
                </p>
              </div>
              <span className="text-sm font-bold text-[#0E7490] font-mono">
                {totalCompletedCount} of {totalChecklistItems} Completed ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#18794E] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Groups */}
          <div className="space-y-6">
            {CHECKLIST_GROUPS.map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0B1F33]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[#5F6B76]">{group.description}</p>
                </div>

                <div className="space-y-3">
                  {group.items.map((item) => {
                    const isChecked = !!completedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleChecklistItem(item.id)}
                        className={`p-4 rounded-md border cursor-pointer transition-all flex items-start space-x-3.5 ${
                          isChecked
                            ? 'bg-emerald-50/50 border-emerald-300'
                            : 'bg-gray-50/50 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 rounded text-[#18794E] focus:ring-[#18794E]"
                        />
                        <div className="space-y-0.5 flex-1">
                          <div className="flex items-center justify-between">
                            <p
                              className={`text-sm font-bold ${
                                isChecked
                                  ? 'text-emerald-950 line-through'
                                  : 'text-gray-900'
                              }`}
                            >
                              {item.title}
                            </p>
                            <span className="text-[10px] font-semibold text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded ml-2 shrink-0">
                              {item.difficulty}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. GLOSSARY TAB */}
      {activeTab === 'glossary' && (
        <div className="space-y-8">
          {/* Search and Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {glossaryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGlossaryCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    selectedGlossaryCategory === cat
                      ? 'bg-[#0B1F33] text-white font-semibold'
                      : 'bg-white text-[#5F6B76] border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat === 'all' ? 'All Terms' : cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossaryQuery}
                onChange={(e) => setGlossaryQuery(e.target.value)}
                placeholder="Search definitions..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
              />
            </div>
          </div>

          {/* Glossary Terms List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGlossary.map((g, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
                    <h2 className="text-base font-bold text-[#0B1F33]">
                      {g.term}
                    </h2>
                    {g.arabicTerm && (
                      <span className="font-arabic font-bold text-sm text-[#0E7490]">
                        {g.arabicTerm}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
                    {g.definition}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="p-3 bg-gray-50 rounded text-xs text-gray-700">
                    <strong className="text-gray-900">Everyday Analogy: </strong>
                    {g.everydayExample}
                  </div>
                  {g.commonMisconception && (
                    <div className="p-2.5 bg-amber-50/70 border border-amber-200 text-xs text-amber-900 rounded">
                      {g.commonMisconception}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SCENARIO SIMULATOR TAB */}
      {activeTab === 'scenarios' && (
        <div className="space-y-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {SCENARIOS.map((s, idx) => {
              const hasAnswered = !!scenarioAnswers[idx];
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`px-3 py-2 text-xs font-semibold rounded-md border transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
                    activeScenarioIdx === idx
                      ? 'bg-[#0B1F33] text-white border-[#0B1F33]'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span>Scenario {idx + 1}</span>
                  {hasAnswered && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          {(() => {
            const current = SCENARIOS[activeScenarioIdx];
            const currentAnswer = scenarioAnswers[activeScenarioIdx];
            const hasAnswered = !!currentAnswer;

            return (
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
                <div className="space-y-2 border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span className="font-semibold uppercase text-[#0E7490]">
                      Scenario {activeScenarioIdx + 1} of {SCENARIOS.length}
                    </span>
                    <span>• {current.difficulty}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F33]">
                    {current.topic}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {current.context}
                  </p>
                </div>

                {/* Simulated message */}
                {current.messagePreview && (
                  <div className="bg-[#F8F9F7] border border-gray-300 rounded-lg p-4 space-y-2 max-w-xl">
                    <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-200 pb-1.5">
                      <span className="font-semibold text-gray-800">
                        {current.messagePreview.channel}: {current.messagePreview.sender}
                      </span>
                      <span>{current.messagePreview.timestamp}</span>
                    </div>
                    <p className="text-sm font-mono text-gray-800 leading-relaxed break-words">
                      {current.messagePreview.body}
                    </p>
                  </div>
                )}

                {/* Question */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-[#0B1F33]">
                    {current.question}
                  </h3>

                  <div className="space-y-2">
                    {current.options.map((opt) => {
                      const isChosen = currentAnswer === opt.id;
                      let btnClasses =
                        'border-gray-200 hover:border-gray-300 bg-white text-gray-800';

                      if (hasAnswered) {
                        if (opt.isCorrect) {
                          btnClasses =
                            'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium';
                        } else if (isChosen) {
                          btnClasses = 'border-red-500 bg-red-50/70 text-red-950';
                        } else {
                          btnClasses = 'border-gray-200 opacity-50 bg-gray-50 text-gray-600';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleScenarioChoice(activeScenarioIdx, opt.id)}
                          disabled={hasAnswered}
                          className={`w-full text-left p-4 rounded-md border text-sm transition-all flex items-start space-x-3 ${btnClasses}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {opt.id.slice(-1).toUpperCase()}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation */}
                {hasAnswered && (
                  <div className="p-4 rounded-md border border-gray-200 bg-gray-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
                          current.options.find((o) => o.id === currentAnswer)?.isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {current.options.find((o) => o.id === currentAnswer)?.isCorrect
                          ? 'Safest Approach'
                          : 'High Risk Action'}
                      </span>

                      <button
                        onClick={() =>
                          setScenarioAnswers((prev) => ({
                            ...prev,
                            [activeScenarioIdx]: null,
                          }))
                        }
                        className="text-xs font-semibold text-[#0E7490] hover:underline"
                      >
                        Reset this scenario
                      </button>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {current.options.find((o) => o.id === currentAnswer)?.explanation}
                    </p>

                    <div className="pt-2 border-t border-gray-200 text-xs font-medium text-gray-600">
                      <strong>Takeaway: </strong> {current.keyTakeaway}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* 4. VERIFIED HOTLINES & CONTACTS TAB */}
      {activeTab === 'hotlines' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
            <div className="space-y-2 border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-[#0B1F33]">
                Official Reporting Channels & Hotlines
              </h2>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                When an incident occurs, always reach out through verified, authentic channels. Never use phone numbers sent in unsolicited text messages or social media comments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telecom USSD Emergency Card */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <span className="text-xs font-bold text-[#0E7490] uppercase">Telecom & SIM Lock</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Emergency Telecom Lines (Nigeria)
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li>• <strong>MTN:</strong> Call 180 or 08031000180</li>
                  <li>• <strong>Airtel:</strong> Call 111 or 08021500111</li>
                  <li>• <strong>Glo:</strong> Call 121 or 08050020121</li>
                  <li>• <strong>9mobile:</strong> Call 200 or 08090000200</li>
                  <li>• <strong>NCC Consumer Helpline:</strong> 622 (toll-free)</li>
                </ul>
              </div>

              {/* Regulatory & Police Cybercrime */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <span className="text-xs font-bold text-red-800 uppercase">Cybercrime & Enforcement</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Law Enforcement & Security Agencies
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li>• <strong>Nigeria Police Force - National Cybercrime Centre (NPF-NCCC):</strong> npf.gov.ng</li>
                  <li>• <strong>Police Special Fraud Unit (PSFU):</strong> Local State CID headquarters</li>
                  <li>• <strong>NITDA-CERC (Computer Emergency Readiness):</strong> cert.gov.ng</li>
                  <li>• <strong>Central Bank of Nigeria Consumer Protection:</strong> cpd@cbn.gov.ng</li>
                </ul>
              </div>

              {/* Major Platform Security */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <span className="text-xs font-bold text-[#0B1F33] uppercase">Account Recovery</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Official Platform Account Recovery Portals
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li>• <strong>WhatsApp Support:</strong> support@whatsapp.com</li>
                  <li>• <strong>Google Account Recovery:</strong> accounts.google.com/signin/recovery</li>
                  <li>• <strong>Apple Find My & Activation:</strong> icloud.com/find</li>
                  <li>• <strong>Instagram Hacked Assistance:</strong> instagram.com/hacked</li>
                </ul>
              </div>

              {/* Reporting Safe Browsing */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <span className="text-xs font-bold text-emerald-800 uppercase">Proactive Protection</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Report Malicious Websites & Phishing
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li>• <strong>Google Safe Browsing:</strong> safebrowsing.google.com</li>
                  <li>• <strong>Anti-Phishing Working Group:</strong> reportphishing@apwg.org</li>
                  <li>• <strong>SMS Spam:</strong> Forward to 7726 on supported mobile networks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
