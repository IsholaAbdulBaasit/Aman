import React, { useState } from 'react';
import {
  X,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  ExternalLink,
  LifeBuoy,
  Share2,
  Check,
  Printer
} from 'lucide-react';
import { Article, ScamAlert, EmergencyGuide } from '../types';

interface ArticleModalProps {
  item:
    | { type: 'article'; data: Article }
    | { type: 'scam'; data: ScamAlert }
    | { type: 'emergency'; data: EmergencyGuide }
    | null;
  onClose: () => void;
  onNavigateToRelated: (type: 'article' | 'scam' | 'emergency', slug: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  item,
  onClose,
  onNavigateToRelated,
}) => {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handlePrint = () => {
    try {
      window.print();
    } catch {
      // safe fallback
    }
  };

  const handleCopyLink = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
    } catch {
      // ignore
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 lg:p-10">
      <div
        className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header bar */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-[#5F6B76]">
            <span className="font-semibold uppercase text-[#0B1F33]">
              {item.type === 'article'
                ? 'Educational Guide'
                : item.type === 'scam'
                ? 'Scam Alert'
                : 'Emergency Response'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 flex items-center space-x-1"
              title={copied ? "Link Copied!" : "Share / Copy Link"}
              aria-label="Share guide"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-[11px] font-semibold text-emerald-700">Copied</span>
                </>
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100"
              title="Print Guide"
              aria-label="Print guide"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-500 hover:text-gray-900 rounded hover:bg-gray-100 ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 text-[#17202A] space-y-8">
          {/* 1. ARTICLE TYPE */}
          {item.type === 'article' && (
            <>
              {/* Meta */}
              <div className="space-y-3 border-b border-gray-200 pb-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-cyan-50 text-[#0E7490] border border-cyan-200">
                    {item.data.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {item.data.difficulty}
                  </span>
                  <span className="flex items-center text-gray-500 ml-2">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {item.data.readingTime}
                  </span>
                  <span className="flex items-center text-gray-500 ml-2">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    Updated {item.data.lastUpdated}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight leading-tight">
                  {item.data.title}
                </h1>
                <p className="text-base text-[#5F6B76] leading-relaxed">
                  {item.data.summary}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6 text-[15px] sm:text-base leading-relaxed">
                {item.data.contentSections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-lg font-bold text-[#0B1F33] tracking-tight">
                      {sec.title}
                    </h2>
                    <p className="text-gray-700">{sec.body}</p>
                    {sec.points && (
                      <ul className="space-y-2 pl-4 border-l-2 border-gray-200 text-gray-700">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} className="list-disc ml-2">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sec.note && (
                      <div className="p-3 bg-cyan-50/60 border border-cyan-200 text-xs sm:text-sm text-cyan-900 rounded">
                        <strong>Security Note: </strong>
                        {sec.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
                <h3 className="text-sm font-bold text-[#0B1F33] uppercase tracking-wider">
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {item.data.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start">
                      <span className="text-[#0E7490] font-bold mr-2">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Checklist */}
              {item.data.practicalChecklist && (
                <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-lg space-y-3">
                  <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#18794E]" />
                    Action Steps You Can Take Now
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {item.data.practicalChecklist.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#18794E] rounded-full mt-2 mr-2.5 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sources */}
              {item.data.sources && item.data.sources.length > 0 && (
                <div className="pt-4 border-t border-gray-200 text-xs text-[#5F6B76] space-y-2">
                  <h4 className="font-semibold uppercase tracking-wider text-gray-500">
                    Authoritative Sources & References
                  </h4>
                  <ul className="space-y-1">
                    {item.data.sources.map((src, sIdx) => (
                      <li key={sIdx} className="flex items-center space-x-1">
                        <span>• {src.name}</span>
                        {src.url && (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#0E7490] hover:underline ml-1"
                          >
                            <ExternalLink className="w-3 h-3 ml-0.5" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* 2. SCAM ALERT TYPE */}
          {item.type === 'scam' && (
            <>
              <div className="space-y-3 border-b border-gray-200 pb-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-200 uppercase">
                    {item.data.status}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {item.data.category}
                  </span>
                  <span className="flex items-center text-gray-500 ml-2">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    Verified {item.data.date}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight leading-tight">
                  {item.data.title}
                </h1>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  {item.data.summary}
                </p>
              </div>

              {/* What is happening */}
              <div className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1F33] uppercase tracking-wider">
                  1. What Is Happening?
                </h2>
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  {item.data.whatIsHappening}
                </p>
              </div>

              {/* How it works */}
              <div className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1F33] uppercase tracking-wider">
                  2. How the Scam Works (Step-by-Step)
                </h2>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                  {item.data.howItWorks.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Warning signs */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
                <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider">
                  Warning Signs to Look For
                </h3>
                <ul className="space-y-1.5 text-sm text-amber-900">
                  {item.data.warningSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-bold text-amber-700 mr-2">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What scammer wants */}
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800">
                <strong className="text-[#0B1F33]">What the Scammer Wants: </strong>
                {item.data.whatScammerWants}
              </div>

              {/* Do NOT do vs DO do */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-2">
                  <h3 className="text-sm font-bold text-[#B42318] uppercase tracking-wider flex items-center">
                    <XCircle className="w-4 h-4 mr-1.5 shrink-0" />
                    What You Should NOT Do
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-red-950">
                    {item.data.whatYouShouldNotDo.map((notDo, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="font-bold mr-1.5">✕</span>
                        <span>{notDo}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg space-y-2">
                  <h3 className="text-sm font-bold text-[#18794E] uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1.5 shrink-0" />
                    What You SHOULD Do
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950">
                    {item.data.whatYouShouldDo.map((shouldDo, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="font-bold mr-1.5">✓</span>
                        <span>{shouldDo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* If you already responded */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
                <h3 className="text-sm font-bold text-[#0B1F33] uppercase tracking-wider">
                  If You Already Responded or Sent Money
                </h3>
                <ol className="space-y-1.5 text-sm text-gray-700 list-decimal pl-5">
                  {item.data.ifYouAlreadyResponded.map((action, idx) => (
                    <li key={idx}>{action}</li>
                  ))}
                </ol>
              </div>

              {/* How to report */}
              <div className="text-xs sm:text-sm text-[#5F6B76] border-t border-gray-200 pt-4">
                <strong className="text-gray-900">How to Report This Scam: </strong>
                {item.data.howToReport}
              </div>
            </>
          )}

          {/* 3. EMERGENCY TYPE */}
          {item.type === 'emergency' && (
            <>
              <div className="space-y-3 border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 uppercase flex items-center">
                    <LifeBuoy className="w-3.5 h-3.5 mr-1 text-amber-800" />
                    Urgency: {item.data.urgency}
                  </span>
                  <span className="text-gray-500">
                    For: {item.data.targetAudience}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight leading-tight">
                  {item.data.title}
                </h1>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  {item.data.subtitle}
                </p>
              </div>

              {/* Ordered emergency steps */}
              <div className="space-y-4">
                <h2 className="text-base font-bold text-[#0B1F33] uppercase tracking-wider">
                  Immediate Action Steps (Follow in Order)
                </h2>
                <div className="space-y-4">
                  {item.data.steps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-lg border border-gray-200 bg-gray-50/60 flex items-start space-x-4"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1F33] text-white font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <div className="space-y-1 text-sm text-gray-800">
                        <h3 className="font-bold text-base text-[#0B1F33]">
                          {step.title}
                        </h3>
                        <p className="leading-relaxed">{step.instruction}</p>
                        {step.note && (
                          <p className="text-xs text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded mt-1.5 inline-block">
                            <strong>Note: </strong> {step.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What NOT to do */}
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-2">
                <h3 className="text-sm font-bold text-[#B42318] uppercase tracking-wider flex items-center">
                  <XCircle className="w-4 h-4 mr-1.5" />
                  What You Must NOT Do
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-red-950">
                  {item.data.whatNotToDo.map((notDo, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-bold mr-1.5">✕</span>
                      <span>{notDo}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official recovery actions */}
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
                <h3 className="text-sm font-bold text-[#0B1F33] uppercase tracking-wider">
                  Official Verification & Hotlines
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  {item.data.officialActions.map((action, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span>• {action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
