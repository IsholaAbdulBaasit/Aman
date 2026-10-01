import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'what-is-two-factor-authentication',
    title: 'What Is Two-Factor Authentication (2FA) and Why It Matters',
    summary: 'A simple explanation of why passwords alone are no longer enough, and how a second step protects your accounts even if someone guesses your password.',
    category: 'account-security',
    difficulty: 'Beginner',
    readingTime: '4 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'The Single-Key Problem',
        body: 'Imagine your house has only one lock, and someone makes a copy of your key without your knowledge. They can walk right in at any time. A password works the same way: if someone tricks you into giving it away, finds it in a data breach, or guesses it, they have full access.',
        points: [
          'Over 80% of account takeovers happen due to leaked, reused, or guessed passwords.',
          'Passwords alone do not prove who is typing them.'
        ]
      },
      {
        title: 'How 2FA Adds a Second Gate',
        body: 'Two-factor authentication requires you to provide two distinct types of evidence before granting access to your account. Security experts group these into three categories:',
        points: [
          'Something you know (your password or PIN)',
          'Something you have (your physical phone, an authenticator app, or a hardware security key)',
          'Something you are (your fingerprint or face recognition)'
        ],
        note: 'Even if an attacker halfway around the world discovers your password, they cannot log in because they do not have your physical phone or authentication app.'
      },
      {
        title: 'Which Type of 2FA Should You Use?',
        body: 'Not all 2FA methods are equal, but any 2FA is significantly better than none at all:',
        points: [
          'Authenticator Apps (Google Authenticator, Microsoft Authenticator, Aegis): Best balance of security and ease. Codes are generated locally on your phone even without cellular signal.',
          'Passkeys or Hardware Keys (YubiKey, device biometrics): Highest security, completely resistant to fake login websites.',
          'SMS / Text Codes: Better than nothing, but vulnerable to SIM-swap attacks and SMS interception. Use authenticator apps whenever a service offers the option.'
        ]
      }
    ],
    keyTakeaways: [
      '2FA stops the vast majority of automated account hijacking attempts.',
      'Always save the backup or recovery codes generated when setting up 2FA in a safe, offline place.',
      'Prioritize turning on 2FA on your email, WhatsApp, and banking applications first.'
    ],
    practicalChecklist: [
      'Turn on 2FA for your primary Google / Apple account.',
      'Turn on Two-Step Verification inside WhatsApp Settings > Account.',
      'Download a reputable authenticator app instead of relying solely on SMS where supported.'
    ],
    sources: [
      { name: 'National Institute of Standards and Technology (NIST) SP 800-63B Authentication Guidelines' },
      { name: 'Cybersecurity and Infrastructure Security Agency (CISA) Multi-Factor Authentication Guidance' }
    ],
    relatedSlugs: ['how-to-secure-your-whatsapp-account', 'how-password-attacks-work', 'sim-swapping-telecom-security']
  },
  {
    id: 'art-2',
    slug: 'what-is-phishing',
    title: 'What Is Phishing and How Can You Recognize It?',
    summary: 'Phishing is the most common way people lose access to accounts and money. Learn how deceptive messages manipulate human emotions to steal information.',
    category: 'cybersecurity',
    difficulty: 'Beginner',
    readingTime: '5 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'Understanding the Bait',
        body: 'Phishing is not a computer virus or a technical hack into your device. It is a psychological trick where an attacker pretends to be a trustworthy organization—such as your bank, an employer, WhatsApp, or a government agency—to convince you to voluntarily hand over sensitive information.',
        points: [
          'Attackers use emails, SMS text messages (smishing), phone calls (vishing), or social media direct messages.',
          'The goal is usually to steal passwords, credit card numbers, OTP verification codes, or bank PINs.'
        ]
      },
      {
        title: 'The Emotional Triggers Phishers Rely On',
        body: 'Attackers rarely use neutral messages. They craft messages designed to bypass your logical thinking by triggering urgent emotions:',
        points: [
          'Panic or Fear: "Your account will be blocked within 24 hours unless you verify immediately."',
          'Excitement or Greed: "Congratulations! You have been selected for a grant / lottery / gift card."',
          'Curiosity: "Someone posted a photo of you here [shortened link]."',
          'Helpfulness: "Urgent: please confirm this invoice or assist your supervisor right away."'
        ],
        note: 'Legitimate banks and organizations rarely give you a 15-minute countdown to prevent your account from being cancelled.'
      },
      {
        title: 'Inspection Habits: What to Check Before Clicking',
        body: 'You do not need to be a technical expert to spot most phishing attempts. Form these three physical inspection habits:',
        points: [
          'Examine the Sender Address, Not Just the Display Name: On a phone, tap the sender name to see the actual email address or phone number behind it.',
          'Look Closely at Domain Names: Phishers use lookalike domains (e.g., "bank-secure-login.com" or "paypa1.com" instead of the official domain).',
          'Never Provide Verification Codes: No legitimate company representative will ever ask you for an SMS OTP or WhatsApp 6-digit code.'
        ]
      }
    ],
    keyTakeaways: [
      'When in doubt, navigate to the service independently by typing its official address into your browser or opening the official app.',
      'Never use the links or phone numbers provided inside a message that claims your account is in trouble.',
      'OTP codes are for your eyes only; anyone asking for them is attempting to take over your account.'
    ],
    practicalChecklist: [
      'Stop and pause before reacting to any urgent message involving money or account access.',
      'Verify unexpected requests through an independent, known channel.',
      'Report phishing messages to your email provider or messaging app.'
    ],
    sources: [
      { name: 'Anti-Phishing Working Group (APWG) Global Phishing Reports' },
      { name: 'Federal Trade Commission (FTC) Consumer Phishing Advisory' }
    ],
    relatedSlugs: ['how-fake-bank-messages-work', 'what-is-two-factor-authentication', 'i-clicked-a-suspicious-link']
  },
  {
    id: 'art-3',
    slug: 'how-to-secure-your-whatsapp-account',
    title: 'How to Secure Your WhatsApp Account from Takeover',
    summary: 'WhatsApp account hijacking is prevalent across mobile communities. Understand the exact mechanism hijackers use and the two-minute setting that prevents it.',
    category: 'online-safety',
    difficulty: 'Beginner',
    readingTime: '4 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'How WhatsApp Hijacking Actually Happens',
        body: 'WhatsApp binds your account to your phone number. When installing WhatsApp on a new phone, WhatsApp sends a 6-digit verification code via SMS to that number. Hijackers do not break WhatsApp encryption; they manipulate you into giving them that 6-digit registration code.',
        points: [
          'A hijacked friend sends a message: "Hey, I accidentally sent my WhatsApp code to your phone by mistake, can you send it to me?"',
          'A call comes from someone pretending to be from a church, community group, or conference: "We need you to read back the code to join the meeting room."',
          'A fake customer support agent claims they are upgrading your security and need the code you just received.'
        ]
      },
      {
        title: 'The Solution: Two-Step Verification Inside WhatsApp',
        body: 'WhatsApp has a built-in defense that prevents anyone from activating your number on a new device, even if they somehow obtain the SMS verification code: a custom 6-digit security PIN.',
        points: [
          'Open WhatsApp > Settings > Account > Two-Step Verification.',
          'Tap "Turn On" and choose a memorable 6-digit PIN that is not your birthday or consecutive numbers (like 123456).',
          'Add a verified recovery email address in case you forget your PIN.',
          'Once enabled, WhatsApp will periodically prompt you for this PIN to ensure you remember it.'
        ]
      },
      {
        title: 'Checking Connected Linked Devices',
        body: 'Another avenue of unauthorized access is WhatsApp Web. If someone borrows your phone unlocked for even 30 seconds, they could scan a QR code to mirror your conversations on their computer.',
        points: [
          'Go to WhatsApp Settings > Linked Devices.',
          'Review the list of active browsers and computers.',
          'If you see any device you do not recognize, tap it immediately and select "Log Out".'
        ]
      }
    ],
    keyTakeaways: [
      'Never share a WhatsApp SMS registration code with ANYONE—not family, not friends, not group admins.',
      'Turn on Two-Step Verification in WhatsApp today with a secret 6-digit PIN.',
      'Regularly audit your Linked Devices list.'
    ],
    practicalChecklist: [
      'Enable WhatsApp Two-Step Verification PIN right now.',
      'Check Settings > Linked Devices and disconnect unfamiliar sessions.',
      'Set your WhatsApp profile photo and "About" info to "My Contacts" only to limit public profiling.'
    ],
    sources: [
      { name: 'WhatsApp Security Whitepaper & Official Privacy Guidelines' },
      { name: 'NITDA (National Information Technology Development Agency) Cybersecurity Alerts' }
    ],
    relatedSlugs: ['what-is-two-factor-authentication', 'sim-swapping-telecom-security', 'my-account-was-compromised']
  },
  {
    id: 'art-4',
    slug: 'how-password-attacks-work',
    title: 'How Password Attacks Work and How to Build Strong Passwords',
    summary: 'Discover how automated computers crack short passwords in seconds, why password reuse is dangerous, and how passphrases give you effortless strength.',
    category: 'account-security',
    difficulty: 'Beginner',
    readingTime: '5 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'How Attackers Break Passwords',
        body: 'Human attackers do not manually sit at keyboards guessing your password one by one. They use automated software and leaked password databases:',
        points: [
          'Credential Stuffing: When a small website gets hacked, attackers take the leaked email/password list and automatically test those exact combinations on banks, Google, Apple, and social media.',
          'Dictionary & Rule Attacks: Software tests millions of common words, name substitutions (like "@" for "a"), and sequential digits in fractions of a second.',
          'Brute Force: Testing every possible combination of letters, numbers, and symbols until one succeeds.'
        ]
      },
      {
        title: 'Why Length Beats Complexity: The Passphrase Method',
        body: 'For years, users were told to create cryptic passwords like "P@$$w0rd!99", which are hard to remember and easily cracked by modern graphics cards. The modern cryptographic standard recommends long passphrases made of 4 or more random words.',
        points: [
          'A password like "Tr0ub4dor&3" (10 characters) can be cracked in hours.',
          'A passphrase like "river-coffee-blanket-giraffe" (28 characters) would take centuries to crack, yet is easy for a human mind to visualize and remember.',
          'Never reuse the same passphrase across multiple services.'
        ]
      },
      {
        title: 'Using a Password Manager',
        body: 'The human brain cannot securely store 50 unique, complex passwords. A reputable password manager stores your passwords in an encrypted digital vault protected by one strong master passphrase.',
        points: [
          'Generates strong, unique passwords for every site automatically.',
          'Fills credentials only on the authentic website, preventing phishing pages from stealing your info.',
          'Built-in browser managers (Apple Keychain, Google Password Manager) or dedicated tools (Bitwarden, 1Password) offer free, trustworthy protection.'
        ]
      }
    ],
    keyTakeaways: [
      'Never reuse the same password for email, banking, or social media.',
      'Aim for passphrases with at least 16 characters or 4 random words.',
      'Adopt a password manager to handle unique passwords for every service.'
    ],
    sources: [
      { name: 'NIST Special Publication 800-63B Password Complexity Recommendations' },
      { name: 'Electronic Frontier Foundation (EFF) Password and Passphrase Guidance' }
    ],
    relatedSlugs: ['what-is-two-factor-authentication', 'what-is-phishing', 'what-is-cloud-storage']
  },
  {
    id: 'art-5',
    slug: 'sim-swapping-telecom-security',
    title: 'SIM Swapping and Mobile Line Security: Protecting Your Digital Anchor',
    summary: 'Your phone number is often the master key to your bank accounts, OTP codes, and email resets. Learn how SIM swaps work and how to lock down your SIM card.',
    category: 'device-safety',
    difficulty: 'Intermediate',
    readingTime: '6 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'Why Your Phone Number Is a High-Value Target',
        body: 'In modern mobile ecosystems—especially across Nigeria and emerging markets—your phone number is tied directly to your Bank Verification Number (BVN), USSD banking codes (*966#, *737#, etc.), and SMS OTP delivery. If an attacker controls your SIM card, they can reset your passwords and authorize fund transfers.',
        points: [
          'SIM Swap: The fraudster convinces or colludes with a telecom customer service agent to transfer your mobile number onto a new physical SIM card they hold.',
          'Physical SIM Theft: If someone steals your phone and your SIM card is not protected by a SIM PIN, they can remove the SIM, put it into another phone, and immediately dial banking USSD codes.'
        ]
      },
      {
        title: 'Step 1: Set a SIM Card PIN Lock',
        body: 'Most people put a screen lock on their phone, but leave the SIM card completely unprotected. Without a SIM PIN, anyone who removes your SIM can receive your incoming SMS messages and make calls.',
        points: [
          'On iPhone: Settings > Cellular > SIM PIN > Enable SIM PIN.',
          'On Android: Settings > Security > More Security Settings > SIM Card Lock > Lock SIM card.',
          'Important: Telecom networks have a default SIM PIN (often 0000 or 1234). Change it to your own custom 4-digit code.',
          'Warning: If you enter the wrong SIM PIN 3 times, the SIM will lock and require a PUK code from your network operator. Keep your PUK code stored safely at home.'
        ]
      },
      {
        title: 'Recognizing a SIM Swap in Progress',
        body: 'If your phone suddenly shows "No Service" or "Emergency Calls Only" in an area where you normally have strong coverage, and restarting your phone does not restore signal, treat this as an immediate emergency.',
        points: [
          'Immediately contact your mobile carrier using another phone or visiting an official service center.',
          'Contact your bank immediately to place a temporary freeze on USSD and mobile banking transactions.'
        ]
      }
    ],
    keyTakeaways: [
      'Enable a SIM PIN on your phone today to prevent stolen SIMs from being used on other devices.',
      'Never publish your primary banking phone number on public social media bios.',
      'If you lose network service unexpectedly, verify with your carrier without delay.'
    ],
    practicalChecklist: [
      'Enable a custom SIM PIN in phone settings.',
      'Locate and write down your SIM PUK code in a safe physical place.',
      'Request your bank to require multi-factor authorization for USSD transfers.'
    ],
    sources: [
      { name: 'Nigerian Communications Commission (NCC) Consumer SIM Security Advisories' },
      { name: 'GSMA Mobile Security Research: Defending Against SIM Hijacking' }
    ],
    relatedSlugs: ['how-to-secure-your-whatsapp-account', 'i-lost-my-phone', 'how-fake-bank-messages-work']
  },
  {
    id: 'art-6',
    slug: 'public-wifi-risks-and-reality',
    title: 'Public Wi-Fi: Separating Real Risks from Exaggerations',
    summary: 'What can people actually see when you use free Wi-Fi at cafes, airports, or hotels? Learn what modern encryption protects and where real hazards remain.',
    category: 'cybersecurity',
    difficulty: 'Intermediate',
    readingTime: '5 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'The Myth vs. The Modern Reality',
        body: 'Years ago, public Wi-Fi was extremely dangerous because web traffic was unencrypted. Anyone on the same network could view passwords in plain text. Today, over 95% of the web uses HTTPS encryption (indicated by the lock icon or modern browser security standards).',
        points: [
          'What HTTPS Protects: When you connect to an HTTPS website or banking app, your passwords, credit card numbers, and messages are encrypted. The Wi-Fi owner or attacker cannot read the content.',
          'What Remains Visible: The Wi-Fi operator can still see which domain names you visit (e.g., they know you visited yourbank.com, but cannot see your account balance or login credentials).'
        ]
      },
      {
        title: 'The Real Danger: "Evil Twin" Hotspots & Fake Portals',
        body: 'The genuine hazard on public Wi-Fi is connecting to a fraudulent hotspot created by an attacker (e.g. naming their rogue hotspot "Airport_Free_WiFi"):',
        points: [
          'Captive Portal Traps: Fake Wi-Fi networks that ask you to "Sign in with your Google account or phone number" to get free internet access.',
          'Software Update Prompts: Malicious networks that pop up fake browser or app update notifications asking you to install a file.'
        ]
      },
      {
        title: 'Safe Public Wi-Fi Habits',
        body: 'Follow these simple practices whenever using public or hotel Wi-Fi:',
        points: [
          'Turn off "Auto-Join Known Networks" on your phone so it does not connect automatically.',
          'Never install unexpected software, profile certificates, or app updates prompted while connecting.',
          'If you need to perform sensitive financial transfers, switch off Wi-Fi and use your cellular mobile data instead.'
        ]
      }
    ],
    keyTakeaways: [
      'HTTPS keeps your passwords and messages private on public networks, but metadata remains visible.',
      'For sensitive banking or confidential work, mobile cellular data is significantly safer than open public Wi-Fi.',
      'Never accept security warnings or install certificates to access public internet.'
    ],
    sources: [
      { name: 'Electronic Frontier Foundation (EFF) HTTPS Everywhere Research' },
      { name: 'CISA Guidelines on Securing Public Wi-Fi' }
    ],
    relatedSlugs: ['what-is-phishing', 'what-is-cloud-storage', 'what-is-malware']
  },
  {
    id: 'art-7',
    slug: 'what-is-malware',
    title: 'What Is Malware and How Does It Get Onto Devices?',
    summary: 'A clear guide to viruses, spyware, trojans, and malicious apps. Learn the common entry paths and how modern operating systems keep you safe.',
    category: 'device-safety',
    difficulty: 'Beginner',
    readingTime: '5 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'Malware Explained Without Jargon',
        body: 'Malware is short for "malicious software." It is any program or code designed to harm a computer, steal data, track your activity, or use your device without your permission.',
        points: [
          'Spyware: Quietly tracks your keystrokes, steals photos, or records audio to blackmail you or steal financial accounts.',
          'Ransomware: Encrypts your files and photos, demanding money to unlock them.',
          'Trojans: Programs disguised as something useful (like a free photo editor or video downloader) that carry hidden malicious capabilities.'
        ]
      },
      {
        title: 'The Most Common Infection Paths Today',
        body: 'Modern smartphones (Android and iOS) have strong security sandboxes. Malware rarely "magically" infects your device just from browsing. In almost all cases, users are tricked into allowing it in:',
        points: [
          'Sideloading APKs: Downloading modified apps (such as "WhatsApp Gold", cracked games, or free video streaming apps) from third-party websites or Telegram channels.',
          'Deceptive Email Attachments: Opening zip archives or executable files claiming to be receipts or resumes.',
          'Excessive App Permissions: Legitimate-looking utility apps (like a flashlight or calculator) asking for permission to read your contacts, SMS, and camera.'
        ]
      },
      {
        title: 'How to Keep Your Devices Clean',
        body: 'Follow these core principles to eliminate over 99% of malware risk:',
        points: [
          'Install apps only from official stores (Google Play Store, Apple App Store). Avoid external APK download sites.',
          'Keep your phone and computer operating system updated. Security updates patch the holes attackers use.',
          'Audit app permissions: a calculator app never needs access to your contacts or microphone.'
        ]
      }
    ],
    keyTakeaways: [
      'Official app stores provide security scanning; third-party APK downloads are the number one source of mobile malware.',
      'System updates contain crucial security patches—do not delay installing them.',
      'Review app permissions and remove apps you no longer use.'
    ],
    sources: [
      { name: 'Google Play Protect Security Guidelines' },
      { name: 'Apple Platform Security Architecture Documentation' }
    ],
    relatedSlugs: ['my-device-may-be-infected', 'what-is-phishing', 'how-to-secure-your-whatsapp-account']
  },
  {
    id: 'art-8',
    slug: 'what-is-cloud-storage',
    title: 'What Is Cloud Storage and How Do You Keep Your Backups Safe?',
    summary: 'Understand what the "cloud" actually is, why it protects you against lost or broken phones, and how to make sure unauthorized people cannot access your files.',
    category: 'privacy',
    difficulty: 'Beginner',
    readingTime: '4 min read',
    lastUpdated: 'September 2026',
    contentSections: [
      {
        title: 'Demystifying the Cloud',
        body: 'The "cloud" is simply computers (servers) owned by reputable companies like Google (Google Drive/Photos), Apple (iCloud), or Microsoft (OneDrive) connected to the internet.',
        points: [
          'Instead of keeping your photos and documents only on the physical memory of your phone, an encrypted copy is kept on their secure data servers.',
          'If your phone is stolen, dropped in water, or lost, your memories and documents remain safe and can be restored to a new device in minutes.'
        ]
      },
      {
        title: 'Securing Your Cloud Account',
        body: 'Because your cloud account holds backups of your private photos, WhatsApp chats, and sensitive documents, it is one of your most valuable digital assets.',
        points: [
          'Use a long, unique passphrase for your Google or Apple ID.',
          'Turn on multi-factor authentication (2FA).',
          'Review who you share folders with; ensure sensitive documents are not left accessible via public links.'
        ]
      }
    ],
    keyTakeaways: [
      'Cloud backups protect you from catastrophic physical device loss or theft.',
      'Your cloud account is only as safe as the password and 2FA guarding its login.',
      'Regularly review shared folders and links to prevent unintended public exposure.'
    ],
    sources: [
      { name: 'Cloud Security Alliance (CSA) Consumer Cloud Best Practices' }
    ],
    relatedSlugs: ['what-is-two-factor-authentication', 'i-lost-my-phone', 'how-password-attacks-work']
  }
];
