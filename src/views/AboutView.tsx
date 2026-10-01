import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, BookOpen, Scale, Sparkles } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="font-arabic font-bold text-3xl text-[#0B1F33]">أمان</span>
          <span className="text-sm font-semibold tracking-wider text-[#5F6B76] border-l border-gray-300 pl-2 uppercase font-sans">
            Amān Project
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          About أمان (Amān)
        </h1>
        <p className="text-base text-[#5F6B76] leading-relaxed">
          The Arabic word <strong className="text-gray-900">أمان (Amān)</strong> represents safety, security, protection, peace, and a sense of being safe.
        </p>
      </div>

      {/* Core Purpose */}
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-4">
        <h2 className="text-xl font-bold text-[#0B1F33]">Our Mission</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Technology moves faster than public understanding. Everyday people—students, parents, small business owners, freelancers, and seniors—use smartphones, mobile banking, WhatsApp, and social media daily without ever being taught how modern digital threats operate or how to defend themselves.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          أمان was created to answer one fundamental question:
        </p>
        <blockquote className="p-4 bg-gray-50 border-l-4 border-[#0E7490] text-gray-800 font-medium text-sm sm:text-base italic">
          "How can I use technology confidently while staying safe?"
        </blockquote>
      </div>

      {/* The 5 Editorial Principles */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#0B1F33]">Our Editorial Standards</h2>
        <p className="text-sm text-[#5F6B76]">
          Every guide, alert, and checklist published on أمان adheres strictly to five core principles:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-white rounded-lg border border-gray-200 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0B1F33]">
              <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
              <h3>1. Calm & Evidence-Based</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              We never use fearmongering, sensational headlines, or apocalyptic rhetoric ("Hackers are coming for you!"). We explain the mechanism of attacks so you can make measured, rational decisions.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-gray-200 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0B1F33]">
              <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
              <h3>2. Plain Human Language</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              We eliminate unnecessary technical jargon. If a technical term is necessary, we define it clearly with an intuitive everyday analogy.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-gray-200 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0B1F33]">
              <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
              <h3>3. Actionable & Practical</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every piece of content must answer: "What should the reader actually do?" We provide concrete checklists and ordered incident steps, not theoretical abstractions.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-gray-200 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#0B1F33]">
              <span className="w-2 h-2 rounded-full bg-[#0E7490]" />
              <h3>4. Grounded in Real Context</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our safety advice addresses real-world experiences—such as fake bank credit alert SMS, WhatsApp group code hijacks, POS terminal PIN observation, and SIM swapping—alongside global standards.
            </p>
          </div>
        </div>
      </div>

      {/* Sourcing & Verification */}
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-4">
        <h2 className="text-xl font-bold text-[#0B1F33]">Content Sourcing & Verification</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Cybersecurity advice can quickly become obsolete. All materials on this platform are cross-referenced with official documentation from trusted agencies and standards bodies:
        </p>
        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
          <li>• <strong>NIST</strong> (National Institute of Standards and Technology) Digital Identity Guidelines</li>
          <li>• <strong>CISA</strong> (Cybersecurity and Infrastructure Security Agency) Consumer Advisories</li>
          <li>• <strong>NITDA</strong> (National Information Technology Development Agency) Cybersecurity Alerts</li>
          <li>• <strong>CBN</strong> (Central Bank of Nigeria) Consumer Protection & Electronic Payment Regulations</li>
          <li>• <strong>NCC</strong> (Nigerian Communications Commission) Consumer SIM Directives</li>
          <li>• Official security and platform documentation from Google, Apple, and WhatsApp</li>
        </ul>
      </div>

      {/* Formal Disclaimer */}
      <div className="p-6 bg-gray-50 border border-gray-300 rounded-lg space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <h3 className="font-bold text-[#0B1F33] uppercase tracking-wider text-xs">
          Legal & Incident Response Disclaimer
        </h3>
        <p>
          Information provided by أمان (Amān) is intended strictly for public educational and awareness purposes. It does not constitute formal legal counsel, personal financial advice, or certified emergency cybersecurity incident response. If you are experiencing active financial theft, extortion, or threats to physical safety, immediately contact your financial institution and local law enforcement authorities.
        </p>
      </div>
    </div>
  );
};
