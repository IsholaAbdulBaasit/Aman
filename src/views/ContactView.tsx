import React, { useState } from 'react';
import { Mail, ShieldCheck, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formType, setFormType] = useState<'general' | 'scam-report'>('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [scamChannel, setScamChannel] = useState('SMS / Text Message');
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please provide your name or nickname.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Please provide a brief description (at least 10 characters).');
      return;
    }
    if (!hasConsent) {
      setErrorMessage('Please confirm that you understand how your message will be handled.');
      return;
    }

    // Success state
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setHasConsent(false);
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="space-y-10 py-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0E7490] uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Feedback & Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
          Contact & Threat Reporting
        </h1>
        <p className="text-base text-[#5F6B76] leading-relaxed">
          Have a question about our educational guides, or encountered a new suspicious scam tactic you would like us to investigate for a public safety alert?
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-lg space-y-4 text-center">
          <div className="w-12 h-12 bg-[#18794E] text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-emerald-950">
            Thank you for your message
          </h2>
          <p className="text-sm text-emerald-900 max-w-md mx-auto leading-relaxed">
            Your message has been received. Our editorial team reviews reports to maintain current educational resources and publish verified public warnings.
          </p>
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-emerald-800 hover:underline pt-2 inline-block"
          >
            Submit another message
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 space-y-6">
          {/* Toggle Type */}
          <div className="flex border-b border-gray-200 pb-4 space-x-4">
            <button
              type="button"
              onClick={() => setFormType('general')}
              className={`text-sm font-semibold pb-1 border-b-2 transition-colors ${
                formType === 'general'
                  ? 'border-[#0E7490] text-[#0B1F33]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              General Inquiry / Feedback
            </button>
            <button
              type="button"
              onClick={() => setFormType('scam-report')}
              className={`text-sm font-semibold pb-1 border-b-2 transition-colors ${
                formType === 'scam-report'
                  ? 'border-[#0E7490] text-[#0B1F33]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              Report a Suspicious Scam Pattern
            </button>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-900 rounded-md flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Name / Nickname <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Amina or Anonymous"
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
                  required
                />
              </div>
            </div>

            {formType === 'scam-report' && (
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Where did you encounter this suspicious activity?
                </label>
                <select
                  value={scamChannel}
                  onChange={(e) => setScamChannel(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
                >
                  <option value="SMS / Text Message">SMS / Fake Bank Credit Alert</option>
                  <option value="WhatsApp / Group Chat">WhatsApp / Group Takeover Message</option>
                  <option value="Telegram / Remote Job Offer">Telegram / "Daily Task" Job Offer</option>
                  <option value="Social Media (Instagram/Facebook/X)">Social Media Impersonation / Giveaway</option>
                  <option value="POS / Physical Location">POS Terminal / ATM Cash Agent</option>
                  <option value="Email Phishing">Email / Counterfeit Invoice</option>
                </select>
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700 uppercase">
                {formType === 'scam-report'
                  ? 'What happened? Describe the message or tactic'
                  : 'Your Message'} <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  formType === 'scam-report'
                    ? 'Please describe what the sender claimed, what they asked you to do (e.g. click a link, send a code, deposit money), and any warning signs you noticed. (Do NOT include passwords or personal bank credentials).'
                    : 'How can we assist you or improve our cybersecurity guides?'
                }
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#0E7490]"
                required
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start space-x-2.5 cursor-pointer text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={hasConsent}
                  onChange={(e) => setHasConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded text-[#0E7490] focus:ring-[#0E7490]"
                  required
                />
                <span className="leading-relaxed">
                  I understand that أمان provides educational information and does not act as an emergency police responder. We will only use this submission to respond or research potential educational alerts. We do not sell or share contact details.
                </span>
              </label>
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Never submit active passwords, BVN, or OTP codes.
              </span>

              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-white bg-[#0B1F33] hover:bg-[#132c45] rounded-md transition-colors shadow-xs inline-flex items-center space-x-2"
              >
                <span>Send Submission</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
