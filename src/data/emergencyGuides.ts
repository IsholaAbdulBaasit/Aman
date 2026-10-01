import { EmergencyGuide } from '../types';

export const EMERGENCY_GUIDES: EmergencyGuide[] = [
  {
    id: 'emer-1',
    slug: 'clicked-suspicious-link',
    title: 'I Clicked a Suspicious Link',
    subtitle: 'Step-by-step actions if you accidentally tapped a strange link on WhatsApp, SMS, or email.',
    urgency: 'Immediate',
    targetAudience: 'Anyone who clicked an unexpected link, whether on mobile or computer.',
    steps: [
      {
        step: 1,
        title: 'Stop Interacting with the Page',
        instruction: 'Close the browser tab immediately. Do not click any further buttons, do not accept any download prompts, and do not fill in any forms.',
        note: 'Merely loading a webpage rarely compromises a modern updated phone, but typing information into it does.'
      },
      {
        step: 2,
        title: 'Did You Enter Any Passwords or PINs?',
        instruction: 'If you typed in a password, bank PIN, or email credential on the fake page, immediately open a new browser tab or the official app, log into the real service, and change your password.',
        note: 'If you reuse that password on other accounts (like your email or banking), change those immediately as well.'
      },
      {
        step: 3,
        title: 'Enable Two-Factor Authentication (2FA)',
        instruction: 'Turn on Two-Factor Authentication on the affected service right now. If an attacker managed to harvest your password, 2FA will prevent them from signing in.',
        note: 'Use an authenticator app if available, or SMS as a backup.'
      },
      {
        step: 4,
        title: 'Check for Downloaded Files',
        instruction: 'Open your phone or computer Downloads folder. If you see any newly downloaded file (especially ending in .apk, .exe, .zip, or .dmg) that you did not explicitly request, delete it immediately without opening it.',
      },
      {
        step: 5,
        title: 'Review Recent Account Activity',
        instruction: 'Go to your account settings (e.g. Google Account > Security > Manage All Devices) and review signed-in devices. If you see any unrecognized device or city, click "Sign Out".'
      },
      {
        step: 6,
        title: 'Be Alert for Follow-up Attacks',
        instruction: 'Phishers often follow up with a phone call pretending to be "fraud detection" helping you fix the link you clicked. Treat any unsolicited calls with extreme suspicion.'
      }
    ],
    whatNotToDo: [
      'DO NOT type any test credentials into the page to "see what happens."',
      'DO NOT open or install files downloaded automatically by the website.',
      'DO NOT reply to the sender or click "unsubscribe" links in spam messages.'
    ],
    officialActions: [
      'Report the phishing URL to Google Safe Browsing (safebrowsing.google.com).',
      'Forward suspicious SMS messages to your network provider (e.g. 7726 spam reporting in supported countries).'
    ],
    relatedGuides: ['what-is-phishing', 'how-password-attacks-work', 'my-account-was-compromised']
  },
  {
    id: 'emer-2',
    slug: 'my-account-was-compromised',
    title: 'My Account Was Compromised (Hacked)',
    subtitle: 'What to do right away if someone gained unauthorized access to your social media, email, or messaging account.',
    urgency: 'Immediate',
    targetAudience: 'Users locked out of or noticing unauthorized activity on their Google, Facebook, Instagram, or WhatsApp accounts.',
    steps: [
      {
        step: 1,
        title: 'Try Logging In and Changing Your Password',
        instruction: 'If you still have partial access, go directly to the official account login page, select "Forgot Password" or "Change Password," and set a completely new, long passphrase.',
        note: 'Make sure your new password has never been used on any other website.'
      },
      {
        step: 2,
        title: 'Terminate All Active Sessions',
        instruction: 'Navigate to Security settings and select "Log out of all other devices / active sessions." This will kick the unauthorized user off their computer or phone.',
      },
      {
        step: 3,
        title: 'Audit Recovery Email and Phone Number',
        instruction: 'Attackers frequently change your recovery email address or phone number so they can regain access later. Verify every email and number listed under your security profile.',
        note: 'Remove any phone number or email address that does not belong to you.'
      },
      {
        step: 4,
        title: 'Check Email Forwarding Rules (Crucial for Gmail/Outlook)',
        instruction: 'If an email account was breached, attackers often set up silent forwarding rules that send copies of all incoming emails (like bank statements and password reset codes) to their private inbox.',
        note: 'In Gmail: Settings > See All Settings > Forwarding and POP/IMAP. Ensure no unauthorized address is listed.'
      },
      {
        step: 5,
        title: 'Warn Your Friends and Family',
        instruction: 'Post or send a message via another channel (or telephone call) to alert your contacts that your account was compromised and to disregard any requests for money, emergency medical assistance, or investment links.'
      }
    ],
    whatNotToDo: [
      'DO NOT pay "Instagram Recovery Agents" or hacker accounts claiming they can recover your account for a fee on Telegram or Twitter. These are secondary recovery scams.',
      'DO NOT give up immediately—most platforms provide an identity verification procedure using video selfies or past passwords.'
    ],
    officialActions: [
      'Google Account Recovery: accounts.google.com/signin/recovery',
      'Meta / Instagram Hacked Portal: instagram.com/hacked',
      'WhatsApp Account Recovery: re-verify using your official phone number via SMS'
    ],
    relatedGuides: ['what-is-two-factor-authentication', 'how-to-secure-your-whatsapp-account', 'clicked-suspicious-link']
  },
  {
    id: 'emer-3',
    slug: 'i-lost-my-phone',
    title: 'I Lost My Phone or It Was Stolen',
    subtitle: 'Urgent steps to protect your banking apps, SIM card, WhatsApp, and private information after losing a phone.',
    urgency: 'Immediate',
    targetAudience: 'Anyone whose smartphone has been misplaced, lost, or stolen.',
    steps: [
      {
        step: 1,
        title: 'Lock or Block Your SIM Card First',
        instruction: 'Borrow a phone immediately and contact your telecom carrier (MTN, Airtel, Glo, 9mobile, etc.) or visit their nearest service center to block your SIM card.',
        note: 'Why this comes first: Thieves do not just want the phone hardware; they remove the SIM card and insert it into another phone to dial USSD banking codes (*737#, *966#, etc.) to drain your accounts.'
      },
      {
        step: 2,
        title: 'Call Your Bank Fraud Line to Block USSD and Mobile Transfers',
        instruction: 'Dial your bank\'s emergency helpline from another phone to place a temporary block on your account and debit cards.',
        note: 'Most banks have quick emergency USSD codes or toll-free hotlines dedicated to freezing compromised accounts immediately.'
      },
      {
        step: 3,
        title: 'Remotely Lock or Erase Your Device',
        instruction: 'Use a computer or another trusted device to locate and lock your phone:',
        note: 'Android: Visit google.com/android/find and select "Secure Device" or "Erase Device". iPhone: Visit icloud.com/find and turn on "Lost Mode" or "Erase This Device".'
      },
      {
        step: 4,
        title: 'Change Passwords for Primary Accounts',
        instruction: 'Log into your Google/Apple account and primary email from a secure computer and change your passwords. Click "Sign out of all devices" to revoke access from the lost phone.',
      },
      {
        step: 5,
        title: 'Retrieve Your SIM via SIM Replacement',
        instruction: 'Visit your telecom service center with your valid National Identity Number (NIN) and government ID to perform a SIM swap / replacement. Once your new SIM is active, activate WhatsApp on your replacement device to disconnect the old phone.'
      }
    ],
    whatNotToDo: [
      'DO NOT wait until the next day to report the SIM card loss.',
      'DO NOT click links in SMS messages sent to your friends claiming "Your lost iPhone has been found, click here to see location" (this is a common phishing trick to steal your iCloud credentials to bypass activation lock).'
    ],
    officialActions: [
      'Apple Find My: icloud.com/find',
      'Google Find My Device: google.com/android/find',
      'Telecom Carrier Hotlines: MTN (180 / 08031000180), Airtel (111 / 08021500111), Glo (121 / 08050020121), 9mobile (200 / 08090000200)'
    ],
    relatedGuides: ['sim-swapping-telecom-security', 'my-account-was-compromised', 'how-to-secure-your-whatsapp-account']
  },
  {
    id: 'emer-4',
    slug: 'i-was-scammed',
    title: 'I Think I Was Scammed',
    subtitle: 'Clear, calm instructions on how to mitigate financial damage, preserve evidence, and seek recovery.',
    urgency: 'High',
    targetAudience: 'Anyone who sent money, provided banking credentials, or was deceived by an online scammer.',
    steps: [
      {
        step: 1,
        title: 'Stop All Contact and Payments',
        instruction: 'Cease sending any more money immediately, even if the scammer claims that an additional "clearance fee" or "tax" will refund your entire investment.',
        note: 'Scammers frequently double-down when a victim realizes what has happened, promising restitution if you make just one more payment.'
      },
      {
        step: 2,
        title: 'Notify Your Bank Anti-Fraud Desk',
        instruction: 'If money was sent via bank transfer, card payment, or USSD, call your bank immediately. Provide the exact recipient account number, bank name, transaction reference, and timestamp.',
        note: 'While fund recovery is never guaranteed, banks can sometimes place a lien or freeze on the beneficiary account if notified before the scammer withdraws the cash.'
      },
      {
        step: 3,
        title: 'Preserve All Evidence',
        instruction: 'Take clear screenshots of everything before the scammer deletes chat histories:',
        note: 'Capture WhatsApp/Telegram chats, phone numbers, email addresses, payment receipts, website URLs, and bank account details.'
      },
      {
        step: 4,
        title: 'File an Official Law Enforcement Complaint',
        instruction: 'Lodge a formal report with your local police station or specialized cybercrime unit. An official police report or court affidavit is often required by banks to assist in tracing stolen funds.'
      },
      {
        step: 5,
        title: 'Beware of "Recovery Scammers"',
        instruction: 'Do not trust anyone on social media (especially Twitter/X, Instagram, or Telegram) claiming to be "ethical hackers" who can recover your stolen money for an upfront fee. These are secondary scammers preying on victims.'
      }
    ],
    whatNotToDo: [
      'DO NOT send more money to "unlock" or "retrieve" earlier payments.',
      'DO NOT delete chat logs or transaction records in anger or shame.',
      'DO NOT hire unverified "hackers" online promising to get your money back.'
    ],
    officialActions: [
      'Report to the Police Special Fraud Unit (PSFU).',
      'Lodge a complaint with the National Cybersecurity Coordination Centre (NCCC) or relevant consumer protection commission.'
    ],
    relatedGuides: ['fake-bank-credit-alerts', 'fake-remote-task-job-scams', 'what-is-phishing']
  },
  {
    id: 'emer-5',
    slug: 'someone-is-impersonating-me',
    title: 'Someone Is Impersonating Me Online',
    subtitle: 'How to report fake profiles using your name, photos, or business brand to deceive others.',
    urgency: 'Moderate',
    targetAudience: 'Individuals and small business owners finding duplicate social accounts using their identity.',
    steps: [
      {
        step: 1,
        title: 'Document the Impersonation',
        instruction: 'Take screenshots of the fake account profile, username, bio, and any messages or posts they have published before reporting.',
        note: 'Copy the direct URL link to the impostor profile.'
      },
      {
        step: 2,
        title: 'Report Through the Official In-App System',
        instruction: 'Use the platform\'s specific impersonation reporting flow (e.g. on Instagram: Report > Report Account > It\'s pretending to be someone else > Me).',
        note: 'Have a government-issued photo ID ready, as platforms will often ask for photo verification to confirm your identity against the photos used.'
      },
      {
        step: 3,
        title: 'Make a Public Clarification on Your Authentic Channel',
        instruction: 'Post a clear announcement on your genuine account stating that an impostor account exists, specify your only official handle, and caution friends that you will never ask for money or investment deposits via DM.'
      },
      {
        step: 4,
        title: 'Ask Close Friends to Report the Impostor',
        instruction: 'Having multiple people report the account under "Impersonation / Scam" helps trigger platform moderation review.'
      }
    ],
    whatNotToDo: [
      'DO NOT engage in aggressive arguments in public comments on their profile.',
      'DO NOT share your sensitive personal credentials while trying to prove identity on third-party forums.'
    ],
    officialActions: [
      'Instagram Impersonation Form: help.instagram.com',
      'Facebook Impersonating Profile Report: facebook.com/help',
      'LinkedIn Identity Impersonation Case: linkedin.com/help'
    ],
    relatedGuides: ['what-is-phishing', 'how-to-secure-your-whatsapp-account']
  },
  {
    id: 'emer-6',
    slug: 'my-device-may-be-infected',
    title: 'My Device May Be Infected with Malware',
    subtitle: 'How to clean, inspect, and restore a smartphone or computer acting erratically or showing suspicious popups.',
    urgency: 'High',
    targetAudience: 'Users with phones experiencing strange battery drain, unwanted full-screen advertisements, or unauthorized apps.',
    steps: [
      {
        step: 1,
        title: 'Disconnect from the Internet',
        instruction: 'Turn on Airplane Mode or disconnect from Wi-Fi and mobile data immediately. This stops malware from transmitting your data or receiving commands from attackers.',
      },
      {
        step: 2,
        title: 'Boot into Safe Mode (Android) or Inspect Running Apps',
        instruction: 'On Android, holding the Power button and then long-pressing "Power Off" allows you to restart in Safe Mode. Safe Mode disables all third-party apps, making malicious apps easy to uninstall.',
      },
      {
        step: 3,
        title: 'Review Installed Apps and Remove Strangers',
        instruction: 'Open Settings > Apps. Look through the entire list for apps with blank icons, generic names (like "System Update", "File Helper", "Flashlight"), or apps you never downloaded. Tap and select "Uninstall".',
        note: 'If the Uninstall button is grayed out, check Settings > Security > Device Admin Apps and deactivate its admin privileges first.'
      },
      {
        step: 4,
        title: 'Run Google Play Protect or Reputable Antivirus Scan',
        instruction: 'Open Google Play Store > tap your profile icon > Play Protect > Scan. On Windows, run a full scan using built-in Windows Defender.'
      },
      {
        step: 5,
        title: 'The Nuclear Option: Factory Reset',
        instruction: 'If rogue popups or unauthorized behavior persist, perform a clean Factory Reset after backing up your essential photos and contacts to cloud storage.'
      }
    ],
    whatNotToDo: [
      'DO NOT install "cleaner" or "battery booster" apps advertised in web popups; these are frequently malware delivery vehicles themselves.',
      'DO NOT connect the infected device to other clean computers via USB until it is cleaned.'
    ],
    officialActions: [
      'Google Play Protect: Play Store > Profile > Play Protect',
      'Apple Support Diagnostic: support.apple.com'
    ],
    relatedGuides: ['what-is-malware', 'clicked-suspicious-link', 'what-is-two-factor-authentication']
  }
];
