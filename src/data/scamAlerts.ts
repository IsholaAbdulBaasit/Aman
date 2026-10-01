import { ScamAlert } from '../types';

export const SCAM_ALERTS: ScamAlert[] = [
  {
    id: 'scam-1',
    slug: 'fake-bank-credit-alerts',
    title: 'Fake Bank Credit Alert SMS (Deceptive Inflow Notifications)',
    status: 'Confirmed Information',
    date: 'September 2026',
    category: 'Banking & Finance',
    summary: 'Merchants and sellers are targeted by scammers using bulk SMS spoofing services to send realistic "Credit Alert" text messages without any real money entering the bank account.',
    whatIsHappening: 'Fraudsters purchase goods, merchandise, or services in person or online, then generate a spoofed SMS notification that appears in the merchant\'s phone messaging thread under the bank\'s exact sender name. The seller releases the goods believing payment has cleared, only to discover later that the account balance never changed.',
    howItWorks: [
      'The buyer negotiates and agrees on a price for goods or electronic items.',
      'Instead of transferring real funds, they use a bulk SMS provider that allows customized Alpha-numeric Sender IDs (e.g. "GTBank", "FirstBank", "ZenithBank", "AccessBank").',
      'The fake SMS copies the exact format, reference code, date, and fee structures of legitimate bank SMS alerts.',
      'The buyer creates urgency, saying they are in a hurry or that bank network delays are preventing the in-app push notification.'
    ],
    warningSigns: [
      'The SMS alert arrives, but your mobile banking app or internet banking account does not show an increased ledger balance.',
      'The buyer rushes you, creates a scene, or insists you only check your SMS inbox because "their bank network is slow."',
      'The SMS contains minor grammatical quirks, unusual formatting, or lists your balance as an unverified total.',
      'The transaction reference number does not exist when queried through official bank channels.'
    ],
    whatScammerWants: 'They want you to release physical goods, gadgets, digital assets, or cash before you verify that the money is genuinely settled in your bank ledger.',
    whatYouShouldNotDo: [
      'DO NOT release goods or services based purely on an incoming SMS text message.',
      'DO NOT take a screenshot or payment receipt shown on the buyer\'s personal smartphone screen as proof of payment.',
      'DO NOT allow the buyer to intimidate or rush you into bypassing your standard verification routine.'
    ],
    whatYouShouldDo: [
      'Always log into your official mobile banking app or dial your bank\'s official USSD balance inquiry code directly from your phone.',
      'Confirm that the "Available Balance" has actually increased and that the transaction appears in your cleared statement history.',
      'For high-value sales, wait for settlement confirmation through your bank\'s direct merchant terminal or registered email statement.'
    ],
    ifYouAlreadyResponded: [
      'Immediately preserve all evidence: the phone number, CCTV footage if in-store, vehicle license plate, and the fake SMS message.',
      'Report the incident to the police and notify your bank\'s anti-fraud department with the transaction details.',
      'If goods were dispatched via courier, contact the delivery rider or transport operator immediately to halt delivery.'
    ],
    howToReport: 'Report to your bank\'s official fraud desk, the Nigeria Police Force Special Fraud Unit (PSFU), and file a consumer complaint report with the Central Bank of Nigeria (CBN) consumer protection department.',
    sources: [
      { name: 'Central Bank of Nigeria (CBN) Consumer Protection Alerts on Payment Fraud' },
      { name: 'Nigeria Inter-Bank Settlement System (NIBSS) Fraud Monitoring Reports' }
    ]
  },
  {
    id: 'scam-2',
    slug: 'whatsapp-six-digit-code-takeover',
    title: 'WhatsApp 6-Digit Verification Code Hijacking',
    status: 'Official Warning',
    date: 'September 2026',
    category: 'Messaging & Social',
    summary: 'A contact in your address book (whose account was previously compromised) messages you asking for a 6-digit code they claim was sent to your phone by mistake. Supplying this code hands control of your WhatsApp to the attacker.',
    whatIsHappening: 'Attackers target community, religious, alumni, and workplace WhatsApp groups. Once they compromise one member\'s account, they message everyone in the group to rapidly harvest more accounts in a chain reaction.',
    howItWorks: [
      'The attacker triggers a new WhatsApp installation on their phone using your mobile phone number.',
      'WhatsApp sends an official SMS to your phone: "Your WhatsApp code is [123-456]. Do not share this code with anyone."',
      'Simultaneously, the attacker sends a message from a trusted friend\'s compromised account: "Hey! I\'m trying to log in on my tablet / join the church Zoom meeting, but my network sent the verification code to your number by accident. Can you read it to me quickly?"',
      'If you send the code, the attacker enters it into their device and instantly takes over your account, locking you out.'
    ],
    warningSigns: [
      'Any message from a friend, family member, or group admin asking for a numerical code sent to your phone.',
      'Unsolicited SMS from WhatsApp containing a verification code when you were not setting up a device.',
      'A voice call asking you to stay on the line while a voice verification code goes to your voicemail.'
    ],
    whatScammerWants: 'To take over your WhatsApp account so they can message your contacts pretending to be you, asking for urgent emergency money transfers or borrowing funds.',
    whatYouShouldNotDo: [
      'DO NOT forward, screenshot, or read aloud any SMS code you receive to anyone.',
      'DO NOT assume a message is safe simply because it comes from a close relative or respected community elder; their account may be compromised.'
    ],
    whatYouShouldDo: [
      'Immediately call the person who messaged you on a regular cellular voice call (not WhatsApp call) to alert them that their account is compromised.',
      'Enable Two-Step Verification PIN inside WhatsApp Settings > Account > Two-Step Verification.',
      'Delete the suspicious chat and warn other group members if you share common groups.'
    ],
    ifYouAlreadyResponded: [
      'Immediately open WhatsApp on your phone, enter your phone number, and request a new SMS verification code to log back in.',
      'As soon as you enter the new SMS code, the scammer is booted off their device.',
      'If the scammer already set a Two-Step Verification PIN on your account, you will have to wait 7 days to reset the PIN without the email, but they cannot use your account in the meantime if you maintain carrier control.',
      'Notify your close contacts, family, and group admins via normal SMS or phone call that your account was compromised and to ignore requests for money.'
    ],
    howToReport: 'Report the incident to WhatsApp support (Settings > Help > Contact Us) and email support@whatsapp.com with your phone number in full international format (+234...).',
    sources: [
      { name: 'WhatsApp Official Security Advisory on Registration Hijacking' },
      { name: 'NITDA Computer Emergency Readiness and Response Team (CERC)' }
    ]
  },
  {
    id: 'scam-3',
    slug: 'fake-remote-task-job-scams',
    title: 'Fake Remote "Daily Task" Job & Freelance Scams',
    status: 'Confirmed Information',
    date: 'August 2026',
    category: 'Employment',
    summary: 'Job seekers receive unsolicited WhatsApp or Telegram offers promising high daily earnings for rating hotel apps, watching YouTube videos, or reviewing products, which later demands payment to "unlock earnings."',
    whatIsHappening: 'Fraudsters exploit the demand for flexible remote work. They recruit victims through automated messaging claiming to be recruiters for global e-commerce companies or travel agencies offering ₦15,000 to ₦50,000 daily for minimal effort.',
    howItWorks: [
      'The victim is contacted on WhatsApp or Telegram by an alleged "HR recruiter".',
      'The first 2 or 3 tasks are simple (e.g. liking 3 YouTube videos or leaving a 5-star review on an app).',
      'To build trust, the scammers actually send a small payment (e.g. ₦1,500 or ₦3,000) directly to the victim\'s bank account as "proof" the job is real.',
      'Next, the victim is invited to a "VIP Task" or "Prepaid Task": they must deposit ₦20,000 of their own money to unlock a ₦40,000 commission.',
      'Once the victim transfers money, the platform shows fake profits on a dashboard, but demands increasingly large deposits (₦100,000, ₦500,000) to "unfreeze withdrawal privileges."',
      'The scammers disappear as soon as the victim refuses to deposit more.'
    ],
    warningSigns: [
      'Unsolicited job offers via WhatsApp, Telegram, or SMS from foreign or random numbers.',
      'Unrealistically high pay for trivial tasks requiring no skills or qualifications.',
      'Any employer asking you to deposit your own money into a personal bank account or cryptocurrency address to "recharge your task balance."'
    ],
    whatScammerWants: 'Your savings. The small initial payout is a cheap psychological investment to extract tens or hundreds of thousands later.',
    whatYouShouldNotDo: [
      'DO NOT send your own money to any employer or platform to "unlock tasks" or "clear withdrawal fees."',
      'DO NOT share sensitive personal documents (NIN, BVN, international passport) with unverified Telegram recruiters.'
    ],
    whatYouShouldDo: [
      'Block and report the contact immediately on WhatsApp or Telegram.',
      'Remember the universal employment rule: Legitimate employers pay you for work; they never require you to pay them to work.'
    ],
    ifYouAlreadyResponded: [
      'Stop sending any additional funds immediately regardless of what the "customer service" agent claims.',
      'Notify your bank that you transferred money to a fraudulent account; provide the recipient\'s account number and bank name.',
      'File a complaint with the police cybercrime unit.'
    ],
    howToReport: 'Report the scammer\'s bank details to your bank and the recipient bank\'s compliance division, and submit evidence to the Nigerian Police Cybercrime Center.',
    sources: [
      { name: 'Interpol Global Financial Fraud Threat Assessment' },
      { name: 'National Cybersecurity Coordination Centre Advisory on Task-Based Scams' }
    ]
  },
  {
    id: 'scam-4',
    slug: 'pos-atm-pin-shoulder-surfing',
    title: 'POS Operator & ATM PIN Observation (Shoulder Surfing)',
    status: 'Editorial Analysis',
    date: 'August 2026',
    category: 'Telecom & SIM',
    summary: 'Fraudulent Point-of-Sale (POS) operators or bystanders in crowded markets memorize your 4-digit debit card PIN while you enter it, then swap your debit card with an identical expired card.',
    whatIsHappening: 'In community cash-withdrawal locations, dishonest agents or accomplices observe customer card inputs during legitimate transactions, leading to unauthorized withdrawals minutes after the customer walks away.',
    howItWorks: [
      'You hand your debit card to an agent for cash withdrawal.',
      'The operator positions the terminal openly so they or an accomplice behind you can watch your fingers as you type your 4-digit PIN.',
      'During a distraction (e.g. counting cash or dropping a receipt), the operator swaps your authentic card with a disabled or expired card of the same bank color and design.',
      'The thief immediately uses your real card and the memorized PIN at a nearby ATM or POS terminal to drain the account.'
    ],
    warningSigns: [
      'The POS operator holds the keypad at an unusual angle or fails to provide privacy.',
      'The operator takes your card out of your line of sight underneath the counter.',
      'The returned card has a different name, altered expiration date, or different wear marks.'
    ],
    whatScammerWants: 'Physical possession of your active ATM card alongside your verified 4-digit secret PIN.',
    whatYouShouldNotDo: [
      'DO NOT speak your ATM PIN aloud to any POS agent, no matter how busy the location is.',
      'DO NOT let your debit card leave your eyesight for a single second.',
      'DO NOT accept your card back without verifying your name on the plastic.'
    ],
    whatYouShouldDo: [
      'Always cover the keypad with your free hand or wallet when entering your 4-digit PIN.',
      'Inspect your card immediately upon receiving it to ensure it is your own name and signature.',
      'Set conservative daily transaction limits on your debit card in your mobile banking app.'
    ],
    ifYouAlreadyResponded: [
      'Immediately open your banking app and lock/freeze the card, or dial your bank\'s emergency USSD card-block code (e.g., *966*911# or your bank\'s specific emergency code).',
      'Transfer your remaining funds to another account or a sub-wallet if the card is not yet blocked.',
      'Report the incident to the physical POS agent\'s supervising payment terminal provider or local police.'
    ],
    howToReport: 'Contact your bank\'s 24/7 card services hotline immediately to cancel the card and request a replacement.',
    sources: [
      { name: 'NIBSS Point-of-Sale Terminal Guidelines & Consumer Protection' },
      { name: 'Central Bank of Nigeria Electronic Payment Regulations' }
    ]
  }
];
