export type CategoryId = 
  | 'technology' 
  | 'cybersecurity' 
  | 'privacy' 
  | 'digital-literacy' 
  | 'online-safety' 
  | 'device-safety' 
  | 'account-security' 
  | 'social-media' 
  | 'physical-safety';

export interface ContentSection {
  title: string;
  body: string;
  points?: string[];
  note?: string;
}

export interface SourceCitation {
  name: string;
  url?: string;
  type?: 'Official Agency' | 'Technical Standard' | 'Industry Guidance' | 'Vendor Security';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: CategoryId;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: string;
  lastUpdated: string;
  contentSections: ContentSection[];
  keyTakeaways: string[];
  practicalChecklist?: string[];
  sources: SourceCitation[];
  relatedSlugs: string[];
}

export interface ScamAlert {
  id: string;
  slug: string;
  title: string;
  status: 'Confirmed Information' | 'Official Warning' | 'Editorial Analysis';
  date: string;
  summary: string;
  category: 'Banking & Finance' | 'Messaging & Social' | 'Employment' | 'Online Shopping' | 'Telecom & SIM';
  whatIsHappening: string;
  howItWorks: string[];
  warningSigns: string[];
  whatScammerWants: string;
  whatYouShouldNotDo: string[];
  whatYouShouldDo: string[];
  ifYouAlreadyResponded: string[];
  howToReport: string;
  sources: SourceCitation[];
}

export interface EmergencyStep {
  step: number;
  title: string;
  instruction: string;
  note?: string;
}

export interface EmergencyGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  urgency: 'Immediate' | 'High' | 'Moderate';
  targetAudience: string;
  steps: EmergencyStep[];
  whatNotToDo: string[];
  officialActions: string[];
  relatedGuides: string[];
}

export interface GlossaryTerm {
  term: string;
  arabicTerm?: string;
  pronunciation?: string;
  category: string;
  definition: string;
  everydayExample: string;
  commonMisconception?: string;
}

export interface ScenarioOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Scenario {
  id: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate';
  context: string;
  messagePreview?: {
    channel: 'SMS' | 'WhatsApp' | 'Email' | 'Browser Alert';
    sender: string;
    timestamp: string;
    body: string;
  };
  question: string;
  options: ScenarioOption[];
  keyTakeaway: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Quick (2 min)' | 'Moderate (5 min)' | 'Important';
  category: string;
}

export interface ChecklistGroup {
  id: string;
  title: string;
  description: string;
  items: ChecklistItem[];
}
