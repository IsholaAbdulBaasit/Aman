import React, { useState } from 'react';
import { LifeBuoy, AlertCircle, ArrowRight, PhoneCall, ShieldAlert, Check } from 'lucide-react';
import { EMERGENCY_GUIDES } from '../data/emergencyGuides';

interface WhatToDoViewProps {
  onOpenEmergency: (slug: string) => void;
}

export const WhatToDoView: React.FC<WhatToDoViewProps> = ({ onOpenEmergency }) => {
  const [activeGuideSlug, setActiveGuideSlug] = useState<string>(
    EMERGENCY_GUIDES[0].slug
  );

  const activeGuide =
    EMERGENCY_GUIDES.find((g) => g.slug === activeGuideSlug) ||
    EMERGENCY_GUIDES[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
          <LifeBuoy className="w-3.5 h-3.5 text-amber-600" />
          <span>Incident Triage & First Aid</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          What To Do Right Now
        </h1>
        <p className="text-base text-[#5F6B76] max-w-2xl leading-relaxed">
          Calm, step-by-step guidance for when you suspect a compromise, clicked a link, lost a phone, or sent money to a fraudulent account.
        </p>
      </div>

      {/* Emergency Hotline Banner */}
      <div className="p-4 sm:p-5 rounded-lg border border-amber-300 bg-amber-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-bold text-amber-900">
              Dealing with Active Financial Fraud or Lost Banking Phone?
            </h2>
            <p className="text-xs text-amber-800 mt-0.5">
              Contact your bank immediately to block accounts and USSD access before taking other actions.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-xs font-mono font-semibold bg-white border border-amber-300 text-amber-900 px-3 py-1.5 rounded">
            Check Phone Back / Debit Card for Official Hotline
          </span>
        </div>
      </div>

      {/* Incident Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Select Your Situation:
          </h3>
          <div className="space-y-1.5">
            {EMERGENCY_GUIDES.map((guide) => {
              const isActive = guide.slug === activeGuideSlug;
              return (
                <button
                  key={guide.id}
                  onClick={() => setActiveGuideSlug(guide.slug)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'border-[#0B1F33] bg-[#0B1F33] text-white font-semibold'
                      : 'border-gray-200 bg-white hover:border-gray-300 text-gray-800'
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold leading-tight">{guide.title}</p>
                    <p
                      className={`text-xs mt-1 line-clamp-1 ${
                        isActive ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {guide.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ml-2 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-gray-700'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Emergency Guide Details */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-8">
          <div className="space-y-2 border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                Priority: {activeGuide.urgency}
              </span>
              <span className="text-gray-500">
                Audience: {activeGuide.targetAudience}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#0B1F33] tracking-tight">
              {activeGuide.title}
            </h2>
            <p className="text-sm text-[#5F6B76] leading-relaxed">
              {activeGuide.subtitle}
            </p>
          </div>

          {/* Ordered Steps */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Step-By-Step Instructions
            </h3>
            <div className="space-y-3">
              {activeGuide.steps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-md border border-gray-200 bg-gray-50/50 flex items-start space-x-3.5"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0B1F33] text-white text-xs font-bold shrink-0">
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#0B1F33]">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {step.instruction}
                    </p>
                    {step.note && (
                      <p className="text-xs text-amber-900 bg-amber-100/60 px-2 py-0.5 rounded mt-1.5 inline-block">
                        <strong>Tip: </strong> {step.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What NOT to do */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-2">
            <h3 className="text-xs font-bold text-[#B42318] uppercase tracking-wider">
              What You Should NOT Do
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm text-red-950">
              {activeGuide.whatNotToDo.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="font-bold mr-2 text-red-600">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contacts */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
            <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Official Verification & Recovery Links
            </h3>
            <ul className="space-y-1 text-xs text-gray-600">
              {activeGuide.officialActions.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-[#0E7490] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onOpenEmergency(activeGuide.slug)}
              className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
            >
              Open printable emergency checklist view →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
