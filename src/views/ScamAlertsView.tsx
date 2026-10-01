import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { SCAM_ALERTS } from '../data/scamAlerts';
import { ScamAlert } from '../types';

interface ScamAlertsViewProps {
  onOpenAlert: (slug: string) => void;
  onNavigate: (tab: string, param?: string) => void;
}

export const ScamAlertsView: React.FC<ScamAlertsViewProps> = ({
  onOpenAlert,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Alerts' },
    { id: 'Banking & Finance', label: 'Banking & Finance' },
    { id: 'Messaging & Social', label: 'Messaging & Social' },
    { id: 'Employment', label: 'Job & Task Scams' },
    { id: 'Telecom & SIM', label: 'Telecom & POS' },
  ];

  const filteredAlerts = SCAM_ALERTS.filter((alert) => {
    const matchesCategory =
      selectedCategory === 'all' || alert.category === selectedCategory;
    const matchesSearch =
      alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.whatIsHappening.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-red-700 uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Active Threat Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Verified Scam Alerts
        </h1>
        <p className="text-base text-[#5F6B76] max-w-2xl leading-relaxed">
          Detailed breakdowns of deceptive tactics targeting mobile users, bank accounts, and online job seekers. Verified against official banking and regulatory advisories.
        </p>
      </div>

      {/* Verification Standard Notice */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5F6B76]">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#0E7490] shrink-0" />
          <span>
            <strong>Our Verification Standard:</strong> We distinguish between <span className="font-semibold text-gray-800">Confirmed Information</span>, <span className="font-semibold text-gray-800">Official Warnings</span>, and <span className="font-semibold text-gray-800">Editorial Analysis</span>. We never publish unverified rumors.
          </span>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="text-[#0E7490] font-semibold hover:underline shrink-0"
        >
          Submit a suspicious pattern for review →
        </button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F33] text-white font-semibold'
                  : 'bg-white text-[#5F6B76] border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scam alerts..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
          />
        </div>
      </div>

      {/* Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAlerts.map((alert) => (
          <article
            key={alert.id}
            onClick={() => onOpenAlert(alert.slug)}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-red-800 bg-red-100 px-2 py-0.5 rounded uppercase">
                  {alert.status}
                </span>
                <span className="text-gray-500 font-medium">{alert.category}</span>
              </div>

              <h2 className="text-lg font-bold text-[#0B1F33] group-hover:text-red-900 transition-colors leading-snug">
                {alert.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#5F6B76] leading-relaxed line-clamp-3">
                {alert.summary}
              </p>

              {/* Quick warning signs teaser */}
              <div className="p-3 bg-gray-50 border border-gray-100 rounded text-xs text-gray-700 space-y-1">
                <p className="font-bold text-gray-800">Primary Warning Sign:</p>
                <p className="line-clamp-2">{alert.warningSigns[0]}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Verified: {alert.date}</span>
              <span className="font-semibold text-red-800 group-hover:underline flex items-center">
                Read full investigation <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
