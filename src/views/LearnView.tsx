import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, Search, Filter } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CategoryId } from '../types';

interface LearnViewProps {
  initialCategory?: string;
  onOpenArticle: (slug: string) => void;
}

export const LearnView: React.FC<LearnViewProps> = ({
  initialCategory,
  onOpenArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'technology', label: 'Technology Basics' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'account-security', label: 'Account Security' },
    { id: 'privacy', label: 'Digital Privacy' },
    { id: 'device-safety', label: 'Device Safety' },
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0E7490] uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Educational Library</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Learn How Technology Works
        </h1>
        <p className="text-base text-[#5F6B76] max-w-2xl leading-relaxed">
          Clear, jargon-free guides designed to help you understand common digital systems, recognize hidden risks, and build solid defensive habits.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
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

        {/* Inline Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
          />
        </div>
      </div>

      {/* Article Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-16 text-center text-sm text-[#5F6B76] bg-white rounded-lg border border-gray-200">
          <p className="font-semibold text-gray-900">No educational guides found</p>
          <p className="mt-1">Try clearing your search query or selecting "All Topics".</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-[#0E7490] hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article.slug)}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#0E7490] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#0E7490] uppercase tracking-wider">
                    {article.category.replace('-', ' ')}
                  </span>
                  <span className="text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readingTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#0B1F33] group-hover:text-[#0E7490] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5F6B76] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">
                  {article.difficulty}
                </span>
                <span className="font-semibold text-[#0E7490] group-hover:underline">
                  Read guide →
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
