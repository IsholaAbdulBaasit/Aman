import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'scen-1',
    topic: 'Urgent Bank Account Suspension SMS',
    difficulty: 'Beginner',
    context: 'It is 2:30 PM on a weekday. You are running errands and your phone vibrates with an urgent text notification.',
    messagePreview: {
      channel: 'SMS',
      sender: 'BANK-ALERT',
      timestamp: 'Today, 2:28 PM',
      body: 'URGENT: Your bank account will be suspended within 4 hours due to unverified BVN record update. Tap immediately to verify your profile: http://bvn-update-portal-ng.net/login'
    },
    question: 'What is the safest and most effective response to this message?',
    options: [
      {
        id: 'opt-a',
        text: 'Click the link immediately to see if the bank website looks genuine and check if your account is really locked.',
        isCorrect: false,
        explanation: 'Phishing websites are designed to look identical to legitimate bank login screens. Merely visiting the link can also confirm to scammers that your phone number is active and attentive.'
      },
      {
        id: 'opt-b',
        text: 'Reply to the text message asking the sender to confirm their identity and provide your account number.',
        isCorrect: false,
        explanation: 'Automated spoofed SMS systems rarely accept incoming replies, or if they do, a live scammer will simply feed you reassuring lies to gain your confidence.'
      },
      {
        id: 'opt-c',
        text: 'Ignore the link entirely. Open your official bank app or call the verified phone number printed on the back of your debit card.',
        isCorrect: true,
        explanation: 'Always navigate independently to known services. If your bank truly requires an action, you will see a secure notice inside your official banking app or in-branch. Banks never use random web domains like ".net" or shortened links for BVN updates.'
      },
      {
        id: 'opt-d',
        text: 'Forward the message to your family members and WhatsApp groups to ask if their accounts are also suspended.',
        isCorrect: false,
        explanation: 'Forwarding unverified scam messages spreads unnecessary panic and causes other people to accidentally tap the malicious link.'
      }
    ],
    keyTakeaway: 'Banks will never send urgent ultimatum links threatening same-day account closure. Always verify account issues independently through known, authentic channels.'
  },
  {
    id: 'scen-2',
    topic: 'WhatsApp Verification Code Request from a Friend',
    difficulty: 'Beginner',
    context: 'You receive a WhatsApp message from a close friend who is a member of your community association.',
    messagePreview: {
      channel: 'WhatsApp',
      sender: 'Amina (Friend)',
      timestamp: 'Today, 10:14 AM',
      body: 'Good morning! I am trying to register our community group Zoom meeting on my laptop, but my network sent my 6-digit confirmation code to your phone by mistake! Can you please read the code back to me quickly?'
    },
    question: 'A minute later, you receive an official SMS from WhatsApp containing a 6-digit code. What should you do?',
    options: [
      {
        id: 'opt-a',
        text: 'Send her the 6-digit code since you know Amina personally and she is a trusted friend.',
        isCorrect: false,
        explanation: 'Amina\'s WhatsApp account was likely compromised earlier today. The attacker is trying to register YOUR phone number on their device. If you send that code, you will lose your own WhatsApp account instantly.'
      },
      {
        id: 'opt-b',
        text: 'Call Amina directly on a standard cellular voice call (not WhatsApp) to verify if she really sent the message.',
        isCorrect: true,
        explanation: 'Never trust messaging channels when unexpected verification codes are requested. Calling her regular phone number bypasses the compromised WhatsApp account and alerts her that someone is impersonating her.'
      },
      {
        id: 'opt-c',
        text: 'Forward the code to the group administrator so they can confirm if the Zoom meeting is happening.',
        isCorrect: false,
        explanation: 'That 6-digit code is the master registration key to your personal WhatsApp account. It must never be shared with anyone under any circumstances.'
      }
    ],
    keyTakeaway: 'WhatsApp codes cannot be "accidentally sent to someone else\'s number." Any request for a numerical code you received is an active takeover attempt.'
  },
  {
    id: 'scen-3',
    topic: 'Unsolicited WhatsApp "Daily Task" High Pay Offer',
    difficulty: 'Intermediate',
    context: 'A message arrives from an unfamiliar international number with an attractive business corporate avatar.',
    messagePreview: {
      channel: 'WhatsApp',
      sender: '+44 7911 123456 (Global HR Talent)',
      timestamp: 'Yesterday, 8:45 PM',
      body: 'Hello! I am Sarah from Horizon Recruitment. We reviewed your profile and want to offer you a flexible remote position: earn ₦35,000 daily by rating apps on Google Play Store for 20 minutes a day. No experience required. Can I send you the first task?'
    },
    question: 'How should you evaluate and respond to this job opportunity?',
    options: [
      {
        id: 'opt-a',
        text: 'Accept the first free task to see if they actually send payment to your bank account.',
        isCorrect: false,
        explanation: 'Scammers will often pay you a small amount (like ₦1,500) initially to establish trust, then demand that you deposit ₦30,000 or more of your own money to unlock "VIP task commissions."'
      },
      {
        id: 'opt-b',
        text: 'Recognize this as a classic task scam: block the sender and report the contact immediately.',
        isCorrect: true,
        explanation: 'Legitimate international recruitment firms do not recruit strangers on WhatsApp from arbitrary overseas numbers offering unrealistic compensation for trivial button-clicking tasks.'
      },
      {
        id: 'opt-c',
        text: 'Ask for their company registration certificate and employee ID card to verify legitimacy.',
        isCorrect: false,
        explanation: 'Scammers have pre-fabricated counterfeit business certificates, fake badges, and stolen corporate logos readily available to present to skeptical victims.'
      }
    ],
    keyTakeaway: 'Any job offer that pays exorbitant rates for simple tasks—or eventually requires you to deposit funds to "recharge tasks"—is a financial trap.'
  },
  {
    id: 'scen-4',
    topic: 'Suspicious Free Wi-Fi at a Busy Transport Terminal',
    difficulty: 'Intermediate',
    context: 'You are waiting at an airport lounge or transit station. Your phone detects an open network named "Airport_Official_Free_HighSpeed".',
    messagePreview: {
      channel: 'Browser Alert',
      sender: 'Wi-Fi Portal Gateway',
      timestamp: 'Just now',
      body: 'To access 4 hours of high-speed internet, please log in with your Google account credentials or download our Secure_Browser_Update.apk certificate.'
    },
    question: 'What is the safest decision?',
    options: [
      {
        id: 'opt-a',
        text: 'Download and install the update file so you can get free high-speed data.',
        isCorrect: false,
        explanation: 'Installing an unknown .apk file on your phone gives untrusted code access to your device, potentially installing spyware or banking trojans.'
      },
      {
        id: 'opt-b',
        text: 'Enter your Google username and password on the portal screen since you only need standard internet.',
        isCorrect: false,
        explanation: 'Rogue Wi-Fi portals use fake Google login pages to steal account credentials and passwords.'
      },
      {
        id: 'opt-c',
        text: 'Disconnect from the rogue network immediately and use your own mobile cellular data.',
        isCorrect: true,
        explanation: 'Legitimate public networks rarely require you to enter email passwords or download app files. When mobile network coverage is available, cellular data is far more secure.'
      }
    ],
    keyTakeaway: 'Never enter account passwords or install software files to gain access to public Wi-Fi.'
  }
];
