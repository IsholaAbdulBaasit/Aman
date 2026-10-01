import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Two-Factor Authentication (2FA)',
    arabicTerm: 'المصادقة الثنائية',
    pronunciation: 'Al-Musadaqah Ath-Thuna\'iyyah',
    category: 'Security',
    definition: 'A security process where a user provides two distinct factors of verification before accessing an account (for example: a password plus a one-time code sent to their phone).',
    everydayExample: 'Like using both your ATM card (something you have) and your secret 4-digit PIN (something you know) to withdraw cash.',
    commonMisconception: 'Misconception: "2FA is annoying and unnecessary." Reality: 2FA stops over 99% of automated credential theft.'
  },
  {
    term: 'Phishing',
    arabicTerm: 'التصيد الاحتيالي',
    pronunciation: 'At-Tasayyud Al-Ihtiyali',
    category: 'Threats',
    definition: 'A social engineering technique where criminals send fraudulent messages designed to trick you into revealing sensitive information like passwords, PINs, or bank details.',
    everydayExample: 'Receiving an SMS that looks like it came from your bank stating "Your account is blocked, tap here to verify," leading to a counterfeit webpage that logs whatever you type.',
    commonMisconception: 'Misconception: "Only naive people fall for phishing." Reality: Attackers use refined psychological pressure and lookalike logos that can deceive anyone caught off-guard.'
  },
  {
    term: 'Social Engineering',
    arabicTerm: 'الهندسة الاجتماعية',
    pronunciation: 'Al-Handasah Al-Ijtima\'iyyah',
    category: 'Threats',
    definition: 'The psychological manipulation of people into performing actions or divulging confidential information, bypassing technical security safeguards.',
    everydayExample: 'A caller pretending to be an IT support technician or church pastor asking you to read back a verification code to "fix a technical error."',
    commonMisconception: 'Misconception: "Security is purely a software problem." Reality: Most modern breaches target human trust and urgency rather than cracking mathematical code.'
  },
  {
    term: 'Malware',
    arabicTerm: 'البرمجيات الخبيثة',
    pronunciation: 'Al-Barmajiyyat Al-Khabeethah',
    category: 'Threats',
    definition: 'Any software intentionally designed to cause damage to a computer, server, client, or computer network, or to spy on user activity without consent.',
    everydayExample: 'A modified "free premium" video player app downloaded from an unofficial website that secretly records your keystrokes and sends your contacts to a remote server.'
  },
  {
    term: 'Ransomware',
    arabicTerm: 'برامج الفدية',
    pronunciation: 'Baramij Al-Fidyah',
    category: 'Threats',
    definition: 'A type of malware that locks and encrypts a victim\'s personal files and documents, demanding payment before providing a decryption key to restore access.',
    everydayExample: 'A computer suddenly displaying a screen stating that all family photos and business spreadsheets are locked and will be erased unless payment is made within 48 hours.'
  },
  {
    term: 'Encryption',
    arabicTerm: 'التشفير',
    pronunciation: 'At-Tashfeer',
    category: 'Privacy',
    definition: 'The mathematical process of scrambling readable information into unreadable ciphertext so that only authorized parties with the correct key can decode it.',
    everydayExample: 'Writing a letter in a secret code that only you and your friend have the translation book for. Even if the mail carrier intercepts the envelope, they cannot read the text.'
  },
  {
    term: 'Password Manager',
    arabicTerm: 'مدير كلمات المرور',
    pronunciation: 'Mudeer Kalimat Al-Muroor',
    category: 'Security',
    definition: 'A software application that generates, stores, and automatically fills long, distinct, encrypted passwords for all of your online accounts, guarded by one master key.',
    everydayExample: 'A digital combination safe that keeps 50 different house keys inside, requiring you to memorize only the master safe combination.'
  },
  {
    term: 'SIM Swapping',
    arabicTerm: 'تبديل شريحة الهاتف',
    pronunciation: 'Tabdeel Shareehat Al-Hatif',
    category: 'Telecom',
    definition: 'A fraudulent scheme where a criminal tricks or bribes a telecom company into porting your existing mobile telephone number onto a SIM card in their possession.',
    everydayExample: 'Your phone suddenly loses signal permanently because the scammer has activated your phone number on their own phone, allowing them to intercept your bank OTPs.'
  },
  {
    term: 'Digital Footprint',
    arabicTerm: 'الأثر الرقمي',
    pronunciation: 'Al-Athar Ar-Raqami',
    category: 'Privacy',
    definition: 'The trail of data you create through your online activity, including social media posts, comments, browsing history, photo tags, and app permissions.',
    everydayExample: 'Search results showing your past comments, photos, job history, and hometown when someone types your full legal name into a search engine.'
  },
  {
    term: 'Data Breach',
    arabicTerm: 'تسريب البيانات',
    pronunciation: 'Tasreeb Al-Bayanat',
    category: 'Security',
    definition: 'A security incident in which confidential or protected data is copied, transmitted, viewed, or stolen by an unauthorized entity from an organization\'s database.',
    everydayExample: 'When an online shopping site has its customer database stolen, exposing millions of usernames, phone numbers, and hashed passwords on the internet.'
  },
  {
    term: 'Smishing',
    arabicTerm: 'التصيد عبر الرسائل النصية',
    pronunciation: 'At-Tasayyud \'Abr Ar-Rasa\'il',
    category: 'Threats',
    definition: 'Phishing conducted specifically through SMS text messages on mobile phones.',
    everydayExample: 'Receiving an SMS text message: "Package delivery failed due to unpaid customs fee of ₦450. Update delivery address here [link]."'
  },
  {
    term: 'USSD Fraud',
    arabicTerm: 'احتيال الرموز السريعة',
    pronunciation: 'Ihtiyal Ar-Rumooz As-Saree\'ah',
    category: 'Banking',
    definition: 'Financial theft occurring through Unstructured Supplementary Service Data (e.g. *966#, *737#) typically after a phone or SIM card is stolen, using simple or observed PINs.',
    everydayExample: 'A thief inserting your stolen SIM into their phone and dialing your bank\'s quick transfer code to move funds before you have a chance to report the line lost.'
  },
  {
    term: 'VPN (Virtual Private Network)',
    arabicTerm: 'الشبكة الافتراضية الخاصة',
    pronunciation: 'Ash-Shabakah Al-Iftiradiyyah',
    category: 'Privacy',
    definition: 'A service that routes your internet traffic through an encrypted tunnel to a remote server, masking your IP address from the websites you visit.',
    everydayExample: 'Driving through a private underground tunnel rather than a public highway so observers on the street cannot see where your journey started or ended.'
  }
];
