import { ChecklistGroup } from '../types';

export const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: 'mobile-sim',
    title: 'Essential Mobile Phone & SIM Protection',
    description: 'Keep your physical smartphone and telecom line secure from unauthorized access and theft.',
    items: [
      {
        id: 'sim-pin',
        title: 'Set a custom SIM Card PIN lock',
        description: 'Prevent someone from taking your SIM card and using it in another phone to receive your bank OTPs or make USSD transfers.',
        difficulty: 'Moderate (5 min)',
        category: 'Device Safety'
      },
      {
        id: 'screen-lock',
        title: 'Use a 6-digit PIN or biometrics for screen lock',
        description: 'Avoid simple 4-digit PINs like 1234 or 0000. Use a 6-digit numeric code or fingerprint/face recognition.',
        difficulty: 'Quick (2 min)',
        category: 'Device Safety'
      },
      {
        id: 'find-device',
        title: 'Ensure "Find My Device" (Android) or "Find My iPhone" is ON',
        description: 'Verify you can remotely locate, ring, lock, or wipe your phone if it is ever lost or stolen.',
        difficulty: 'Quick (2 min)',
        category: 'Device Safety'
      },
      {
        id: 'os-updates',
        title: 'Turn on automatic system software updates',
        description: 'Operating system updates patch known security flaws that malware and spyware exploit.',
        difficulty: 'Quick (2 min)',
        category: 'Device Safety'
      }
    ]
  },
  {
    id: 'messaging',
    title: 'WhatsApp & Social Media Fortification',
    description: 'Protect your primary messaging channels from takeover, impersonation, and eavesdropping.',
    items: [
      {
        id: 'whatsapp-2fa',
        title: 'Enable WhatsApp Two-Step Verification (6-digit PIN)',
        description: 'Go to Settings > Account > Two-Step Verification. This prevents anyone from activating your account on another phone.',
        difficulty: 'Quick (2 min)',
        category: 'Account Security'
      },
      {
        id: 'audit-linked-devices',
        title: 'Review and log out of unrecognized WhatsApp Linked Devices',
        description: 'Check Settings > Linked Devices. Disconnect any browser or desktop session you do not actively use.',
        difficulty: 'Quick (2 min)',
        category: 'Account Security'
      },
      {
        id: 'privacy-profile-view',
        title: 'Set Profile Photo and "About" to "My Contacts" only',
        description: 'Prevents scammers from scraping your profile pictures to create fake duplicate accounts.',
        difficulty: 'Quick (2 min)',
        category: 'Privacy'
      }
    ]
  },
  {
    id: 'banking',
    title: 'Banking & Financial Safeguards',
    description: 'Protect your bank accounts, debit cards, and transaction authorizations.',
    items: [
      {
        id: 'bank-balance-rule',
        title: 'Verify payments inside your banking app, never by SMS alone',
        description: 'Never release goods or transfer money based solely on an incoming text message alert.',
        difficulty: 'Important',
        category: 'Financial Safety'
      },
      {
        id: 'card-limits',
        title: 'Configure daily card spending and POS limits',
        description: 'Reduce the maximum daily online and POS transaction limits in your banking app to mitigate fraud risk.',
        difficulty: 'Moderate (5 min)',
        category: 'Financial Safety'
      },
      {
        id: 'atm-keypad-cover',
        title: 'Always shield the keypad when entering ATM or POS PINs',
        description: 'Use your hand or wallet to block cameras and bystanders from observing your 4-digit card PIN.',
        difficulty: 'Important',
        category: 'Physical Safety'
      }
    ]
  },
  {
    id: 'passwords-email',
    title: 'Master Email & Account Hygiene',
    description: 'Lock down your email address, which is the master key for resetting all other accounts.',
    items: [
      {
        id: 'email-2fa',
        title: 'Turn on 2FA on your primary email account (Google/Apple/Outlook)',
        description: 'If someone hacks your email, they can reset passwords for every other service you use.',
        difficulty: 'Moderate (5 min)',
        category: 'Account Security'
      },
      {
        id: 'unique-email-password',
        title: 'Ensure your email password is completely unique',
        description: 'Never use your email password on shopping sites, social media, or forums.',
        difficulty: 'Quick (2 min)',
        category: 'Account Security'
      },
      {
        id: 'audit-email-forwarding',
        title: 'Audit email forwarding rules and trusted devices',
        description: 'Check your webmail settings to confirm that emails are not being silently forwarded to an attacker.',
        difficulty: 'Moderate (5 min)',
        category: 'Account Security'
      }
    ]
  }
];
