import React, { useState } from 'react';
import { ShieldCheck, Lock, Smartphone, Users, CreditCard, Check, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface StaySafeViewProps {
  initialTopic?: string;
  onOpenArticle: (slug: string) => void;
  onNavigate: (tab: string, param?: string) => void;
}

export const StaySafeView: React.FC<StaySafeViewProps> = ({
  initialTopic,
  onOpenArticle,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTopic || 'accounts');

  const tabs = [
    { id: 'accounts', label: 'Account Security', icon: Lock },
    { id: 'devices', label: 'Device Safety', icon: Smartphone },
    { id: 'social', label: 'Social & Messaging', icon: Users },
    { id: 'banking', label: 'Financial & POS', icon: CreditCard },
  ];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#18794E] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Defensive Routines</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Stay Safe Online & Offline
        </h1>
        <p className="text-base text-[#5F6B76] max-w-2xl leading-relaxed">
          Actionable protection rules for your phone, WhatsApp, banking apps, and everyday public interactions.
        </p>
      </div>

      {/* Segment navigation */}
      <div className="flex border-b border-gray-200 space-x-2 sm:space-x-8 overflow-x-auto pb-px">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-3 px-1 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-[#0E7490] text-[#0B1F33]'
                  : 'border-transparent text-[#5F6B76] hover:text-[#0B1F33]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Account Security */}
      {activeTab === 'accounts' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0B1F33]">
                The Three Golden Rules of Account Protection
              </h2>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Most accounts are not compromised by sophisticated technical cracking; they are lost because passwords are repeated across multiple websites or handed over during phishing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md space-y-2">
                <span className="text-xs font-bold text-[#0E7490] uppercase">Rule 1</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">Unique Master Email Password</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Never reuse your Google, Apple, or Outlook password anywhere else. If an attacker gains your email, they can reset passwords on every other service you use.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md space-y-2">
                <span className="text-xs font-bold text-[#0E7490] uppercase">Rule 2</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">Two-Step Authentication</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Turn on 2FA on every account that supports it. Even if someone guesses your password, they cannot log in without your physical device.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md space-y-2">
                <span className="text-xs font-bold text-[#0E7490] uppercase">Rule 3</span>
                <h3 className="font-bold text-sm text-[#0B1F33]">4-Word Passphrases</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Use long passphrases (e.g., "coffee-basket-silver-window") rather than short complex passwords with forced symbols.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenArticle('what-is-two-factor-authentication')}
                className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
              >
                Read deep guide: What Is Two-Factor Authentication? <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
              <button
                onClick={() => onOpenArticle('how-password-attacks-work')}
                className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
              >
                Read deep guide: Building Crack-Resistant Passwords <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Device Safety */}
      {activeTab === 'devices' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0B1F33]">
                Securing Your Physical Phone & SIM Line
              </h2>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Your phone is your primary digital wallet, communication tool, and identity authenticator. Physical loss or theft requires immediate countermeasures.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-md border border-gray-200 bg-gray-50 flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#18794E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0B1F33]">
                    1. Lock your SIM card with a custom PIN
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    If someone steals your phone, their first action is to remove the SIM card and put it into another phone to dial USSD banking codes. A SIM PIN completely blocks this attack.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-md border border-gray-200 bg-gray-50 flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#18794E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0B1F33]">
                    2. Enable Find My Device / Find My iPhone
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Make sure you know your Google or Apple login credentials so you can log into icloud.com/find or google.com/android/find from any browser to lock or erase your device remotely.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-md border border-gray-200 bg-gray-50 flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#18794E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0B1F33]">
                    3. Do not sideload APK files from random websites
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Stick to official app stores (Google Play, Apple App Store). Modified apps like "WhatsApp Gold" or pirated video tools frequently bundle malware.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenArticle('sim-swapping-telecom-security')}
                className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
              >
                Read deep guide: SIM Swapping & Telecom Line Security <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Social & Messaging */}
      {activeTab === 'social' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0B1F33]">
                WhatsApp & Messaging Fortification
              </h2>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                WhatsApp is the target of widespread account hijacking. Protect your identity, your contact list, and community groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Never Share Verification Codes
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  No friend, family member, church elder, or group administrator ever legitimately needs a 6-digit code sent to your phone. If a friend messages asking for a code, their account has already been hijacked.
                </p>
                <button
                  onClick={() => onOpenArticle('how-to-secure-your-whatsapp-account')}
                  className="text-xs font-semibold text-[#0E7490] hover:underline block pt-1"
                >
                  Step-by-step WhatsApp setup guide →
                </button>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  Audit Linked Devices Frequently
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Anyone who holds your unlocked phone for 15 seconds can scan a QR code to mirror all your chats on their computer. Open WhatsApp Settings &gt; Linked Devices and log out of all sessions you don't recognize.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Banking & Financial */}
      {activeTab === 'banking' && (
        <div className="space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#0B1F33]">
                Financial Defense & POS Privacy
              </h2>
              <p className="text-sm text-[#5F6B76] leading-relaxed">
                Practical safeguards when paying online, withdrawing cash at street POS terminals, or checking bank balances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  The "App Balance Only" Rule
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Never accept goods, ship items, or consider a payment complete based purely on an SMS text alert. Bulk SMS spoofing tools make fake "Credit Alerts" trivial to manufacture. Open your official banking app and verify your ledger balance directly.
                </p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <h3 className="font-bold text-sm text-[#0B1F33]">
                  POS Keypad Privacy & Card Inspection
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  When withdrawing cash at a Point-of-Sale (POS) terminal, always cup your free hand over the keypad while typing your PIN. Inspect your card before walking away to ensure the operator did not swap it with an expired card.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('scam-alerts')}
                className="text-xs font-semibold text-[#0E7490] hover:underline flex items-center"
              >
                Review active financial scam alerts →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
