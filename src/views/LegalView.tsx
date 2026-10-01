import React, { useState } from 'react';
import { ShieldCheck, Scale, FileText, Lock } from 'lucide-react';

interface LegalViewProps {
  initialTab?: string;
}

export const LegalView: React.FC<LegalViewProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'privacy');

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>Transparency & Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Privacy & Legal Information
        </h1>
        <p className="text-base text-[#5F6B76] leading-relaxed">
          Honest, clear documentation of our data practices, cookie policy, and platform terms of use.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 space-x-6">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'privacy'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Privacy Policy
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'terms'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Terms & Conditions
        </button>

        <button
          onClick={() => setActiveTab('cookies')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'cookies'
              ? 'border-[#0E7490] text-[#0B1F33]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Cookie Statement
        </button>
      </div>

      {/* 1. Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F33]">Privacy Policy</h2>
            <p className="text-xs text-gray-500">Effective Date: September 2026</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">1. Our Privacy Philosophy</h3>
            <p>
              As an educational cybersecurity and safety platform, <strong>أمان (Amān)</strong> treats privacy as a foundational right rather than a compliance afterthought. We do not track you across the web, we do not sell your data, and we do not implement advertising pixels.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">2. Information We Collect</h3>
            <p>
              We deliberately minimize data collection:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>
                <strong>Interactive Checklist Progress:</strong> Checklists you complete are saved strictly inside your own web browser's Local Storage (localStorage). This data remains on your physical device and is never transmitted to any remote server.
              </li>
              <li>
                <strong>Contact & Report Submissions:</strong> If you use our contact form to send an inquiry or report a scam, we collect only the name, email, and message content you provide to evaluate the report or reply to you.
              </li>
              <li>
                <strong>Server Logs:</strong> Standard technical connection logs (IP address, user-agent, timestamp) may be temporarily processed by infrastructure reverse proxies to protect against Denial of Service (DoS) attacks and ensure network stability.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">3. Third Parties</h3>
            <p>
              We do not share, rent, or monetize any user information with advertisers or commercial data brokers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">4. Contact</h3>
            <p>
              For privacy-related questions or data deletion requests, contact us through our Contact page.
            </p>
          </div>
        </div>
      )}

      {/* 2. Terms & Conditions */}
      {activeTab === 'terms' && (
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F33]">Terms and Conditions</h2>
            <p className="text-xs text-gray-500">Effective Date: September 2026</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">1. Educational Purpose</h3>
            <p>
              All materials, checklists, scenarios, and scam advisories published on أمان (Amān) are provided solely for general public education and personal awareness.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">2. No Professional or Legal Substitute</h3>
            <p>
              The content does not constitute certified legal, financial, or emergency incident-response consulting. In cases of active fraud, extortion, theft, or account hijacking, users must immediately contact their financial institutions, telecom carriers, and law enforcement agencies.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">3. Accuracy of Information</h3>
            <p>
              While we make every effort to ensure information is verified and up to date against current standards, cybersecurity threats evolve rapidly. We cannot guarantee that all third-party systems or scam methods will remain static.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">4. Intellectual Property & Open Education</h3>
            <p>
              Educational content published by أمان may be shared freely for non-commercial educational purposes, classrooms, community groups, and personal learning, provided attribution to أمان is maintained.
            </p>
          </div>
        </div>
      )}

      {/* 3. Cookie Statement */}
      {activeTab === 'cookies' && (
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F33]">Cookie Statement</h2>
            <p className="text-xs text-gray-500">Last Reviewed: September 2026</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base text-[#0B1F33]">No Invasive Tracking Cookies</h3>
            <p>
              Unlike many modern websites, أمان does <strong>not</strong> use advertising cookies, commercial tracking pixels, or cross-site fingerprinting scripts.
            </p>
            <p>
              We utilize your browser's local storage (localStorage) exclusively to remember which safety checklist items you have marked as complete on your own device, ensuring you do not lose your audit progress between visits.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
