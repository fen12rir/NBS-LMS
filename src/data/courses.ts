export type StaffTrack = "branch_cashier" | "hq_office";

export interface LessonSection {
  id: string;
  badge?: string;
  title: string;
  titleTl: string;
  whatText?: string;
  whatTextTl?: string;
  howToProtectText?: string;
  howToProtectTextTl?: string;
  description?: string;
  descriptionTl?: string;
  simpleExplanation: string;
  simpleExplanationTl: string;
  realStoreExample?: string;
  realStoreExampleTl?: string;
  accentColor?: "red" | "ink" | "emerald";
}

export interface PracticeCheckItem {
  id: string;
  label: string;
  labelTl: string;
  sublabel?: string;
  sublabelTl?: string;
  isCorrect: boolean;
  feedback: string;
  feedbackTl: string;
}

export interface PracticeCheckpoint {
  badge: string;
  prompt: string;
  promptTl: string;
  instruction: string;
  instructionTl: string;
  items: PracticeCheckItem[];
}

export interface ChapterVideo {
  src: string;
  title: string;
  titleTl: string;
  caption?: string;
  captionTl?: string;
  durationLabel?: string;
  startSeconds?: number;
  endSeconds?: number;
}

export interface CourseChapter {
  id: string;
  number: string;
  part:
    | "Part I: Core Retail & Staff Security"
    | "Part II: Threat Intelligence & Technical Depth";
  title: string;
  titleTl: string;
  slideRange: string;
  durationMinutes: number;
  isImplemented: boolean;
  summary: string;
  summaryTl: string;
  introParagraph?: string;
  introParagraphTl?: string;
  simpleTakeaway?: string;
  simpleTakeawayTl?: string;
  video?: ChapterVideo;
  sections: LessonSection[];
  checkpoint?: PracticeCheckpoint;
}

export interface InteractiveStationSummary {
  id: string;
  stationNumber: number;
  title: string;
  mechanicTag: string;
  slideReference: string;
  description: string;
}

export interface LmsCourse {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  status: "active" | "coming_soon";
  estimatedMinutes: number;
  passingScore: number;
  totalSlides: number;
  badgeCode: string;
  targetRoles: string[];
  objectives: { title: string; detail: string }[];
  chapters: CourseChapter[];
  assessmentStations: InteractiveStationSummary[];
}

export const LMS_COURSES: LmsCourse[] = [
  {
    slug: "cybersecurity-awareness",
    code: "NBS-SEC-101",
    title: "Cybersecurity Awareness Training",
    subtitle:
      "Core Retail & Staff Security, PCI DSS Payment Rules, and Modern Threat Intelligence",
    category: "Information Security & Compliance",
    status: "active",
    estimatedMinutes: 35,
    passingScore: 80,
    totalSlides: 39,
    badgeCode: "SEC-2027",
    targetRoles: [
      "Branch Cashiers",
      "Store Supervisors",
      "HQ / General Office Staff",
    ],
    objectives: [
      {
        title: "Threat Awareness",
        detail:
          "Understand core cybersecurity risks, social engineering tactics, and retail cyberattacks.",
      },
      {
        title: "PCI DSS Compliance",
        detail:
          "Know required rules for card payment processing and POS terminal physical security.",
      },
      {
        title: "Data Protection",
        detail:
          "Apply tailored safeguards for branch cashiers and general head-office staff.",
      },
      {
        title: "Incident Action",
        detail:
          "Execute immediate escalation steps without fear of penalty for false alarms.",
      },
    ],
    chapters: [
      // =======================================================================
      // CHAPTER 01 (Slides 4-8)
      // =======================================================================
      {
        id: "ch-01-pillars-and-assets",
        number: "01",
        part: "Part I: Core Retail & Staff Security",
        title: "What is Cybersecurity & What We Protect",
        titleTl: "Ano ang Cybersecurity at Ano ang Ating Pinoprotektahan",
        slideRange: "Slides 4-8",
        durationMinutes: 5,
        isImplemented: true,
        summary:
          "The 3 Digital Pillars (People, Processes, Technology) and the 4 core NBS assets we safeguard every day.",
        summaryTl:
          "Ang 3 Digital Pillars (Tao, Proseso, Teknolohiya) at ang 4 na pangunahing gamit at datos sa NBS na dapat nating ingatan.",
        introParagraph:
          "Cybersecurity protects systems, payment networks, and customer data from digital attacks aimed at interrupting business operations, stealing records, or extorting money.",
        introParagraphTl:
          "Ang Cybersecurity ay ang pagprotekta sa ating mga computer, POS kaha, card terminals, at customer records laban sa mga scammer at hacker na gustong manggulo sa operasyon ng branch o magnakaw ng pera at impormasyon.",
        simpleTakeaway:
          "Think of Cybersecurity like locking the branch doors at night, except we are locking our POS registers, customer card details, and company accounts so scammers cannot get inside.",
        simpleTakeawayTl:
          "Parang pagla-lock lang ito ng pinto at kaha ng National Book Store, pero ang binabantayan natin ay ang POS computer, card swipe machine, at impormasyon ng mga customer at empleyado para hindi manakawan.",
        video: {
          src: "/assets/videos/ch-01.mp4",
          title: "Video Lesson: What is Cybersecurity & What We Protect",
          titleTl: "Video Lesson: Ano ang Cybersecurity at Ano ang Ating Pinoprotektahan",
          caption: "Watch this 5-minute video lesson covering Chapter 01 before completing the checkpoint below.",
          captionTl: "Panoorin ang 5-minutong video lesson na ito para sa Chapter 01 bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "05:02",
        },
        sections: [
          {
            id: "sec-1-people",
            badge: "PILLAR 01 • SLIDE 5",
            title: "People",
            titleTl: "People (Tayong mga Empleyado)",
            description:
              "Staff following secure daily habits, verifying identities, and reporting suspicious activity.",
            descriptionTl:
              "Mga empleyadong maingat sa araw-araw na trabaho, naninigurado muna kung sino ang kausap bago magbigay ng impormasyon, at agad nagrereport kapag may kahina-hinala.",
            simpleExplanation:
              "Even the most expensive computer security fails if an employee is tricked into giving away their password. You are our first line of defense at the counter or office.",
            simpleExplanationTl:
              "Kahit gaano kamahal ang computer ng NBS, balewala ito kung maloloko ang empleyado na ibigay ang password niya sa scammer. Ikaw ang unang bantay ng branch.",
            realStoreExample:
              "When someone calls the branch phone claiming to be from IT Support and asks for your POS password, refuse and verify with your Branch Manager first.",
            realStoreExampleTl:
              "Kapag may tumawag sa telepono at nagpakilalang taga-IT daw siya at hinihingi ang POS password mo, huwag itong ibigay at sabihin agad kay Branch Manager.",
            accentColor: "red",
          },
          {
            id: "sec-1-processes",
            badge: "PILLAR 02 • SLIDE 5",
            title: "Processes",
            titleTl: "Processes (Mga Patakaran sa Branch at Opisina)",
            description:
              "PCI compliance, incident escalation rules, and strict password protocols.",
            descriptionTl:
              "Pagsunod sa mga patakaran sa pagtanggap ng card (PCI DSS), tamang paraan ng pag-report ng problema, at hindi pagpapahiram ng password.",
            simpleExplanation:
              "These are our daily store routines: checking the card reader every morning, never writing passwords on paper, and reporting unusual machine behavior to the Branch Manager right away.",
            simpleExplanationTl:
              "Ito ang mga SOP natin araw-araw: pag-check sa card terminal bago magbukas ng kaha, bawal magsulat ng password sa papel, at pag-report agad kay Manager kapag may kakaiba sa POS.",
            accentColor: "ink",
          },
          {
            id: "sec-1-technology",
            badge: "PILLAR 03 • SLIDE 5",
            title: "Technology",
            titleTl: "Technology (Mga Bantay sa Loob ng Computer at POS)",
            description:
              "Encrypted POS terminals, firewalls, anti-virus software, and multi-factor authentication (MFA).",
            descriptionTl:
              "Mga ligtas na POS terminal, firewalls, anti-virus software, at Multi-Factor Authentication (MFA o OTP code bago maka-login).",
            simpleExplanation:
              "These are the digital locks installed by IT, such as anti-virus software and OTP codes (MFA), that scramble card data and block hackers from entering our computers.",
            simpleExplanationTl:
              "Ito ang mga proteksyon na nilagay ng IT gaya ng anti-virus at OTP code sa cellphone (MFA) para kahit may sumubok pumasok na hacker, naka-lock ang system natin.",
            accentColor: "ink",
          },
          {
            id: "sec-1-asset-pos",
            badge: "ASSET 01 • SLIDE 7",
            title: "1. Payment Terminals (POS)",
            titleTl: "1. Payment Terminals (POS Kaha at Card Readers)",
            whatText:
              "Point-of-Sale readers processing credit/debit card taps & swipes.",
            whatTextTl:
              "Ang mga card machine sa kaha kung saan nagta-tap o nagsu-swipe ng credit at debit card ang customer.",
            howToProtectText:
              "Point-to-Point Encryption (P2PE), physical tamper seals, and daily terminal inspection logs.",
            howToProtectTextTl:
              "Naka-encrypt ang datos ng card (P2PE), may security sticker/seal ang machine, at chine-check ang serial number sa logbook araw-araw.",
            simpleExplanation:
              "Criminals try to attach fake reader covers or swap machines to steal customer bank money. Checking the security seal and serial number daily stops them.",
            simpleExplanationTl:
              "Pwedeng patungan ng mga kawatan ng pekeng takip (skimmer) o palitan ang card machine para manakaw ang laman ng card ng customer. Kaya dapat i-check ang sticker seal at serial number araw-araw.",
            accentColor: "red",
          },
          {
            id: "sec-1-asset-data",
            badge: "ASSET 02 • SLIDE 7",
            title: "2. Customer & Staff Data",
            titleTl: "2. Impormasyon ng Customer at Empleyado",
            whatText:
              "Personal details, transaction records, passwords, and HR files.",
            whatTextTl:
              "Pangalan, contact number, loyalty details, resibo, passwords, at HR records ng mga empleyado.",
            howToProtectText:
              "Database encryption, strict Role-Based Access Control (RBAC), and masking sensitive details.",
            howToProtectTextTl:
              "Naka-lock sa database, tanging awtorisadong staff lang ang pwedeng makakita (RBAC), at nakatago ang mga sensitibong numero tulad ng card number.",
            simpleExplanation:
              "Only authorized personnel can view sensitive customer or HR files, and card digits are hidden on receipts so scammers cannot copy them.",
            simpleExplanationTl:
              "Tanging mga awtorisadong staff lang ang pwedeng magbukas ng sensitibong records, at naka-mask (`****`) ang card numbers sa resibo para hindi makopya.",
            accentColor: "ink",
          },
          {
            id: "sec-1-asset-cloud",
            badge: "ASSET 03 • SLIDE 8",
            title: "3. Inventory & Cloud Systems",
            titleTl: "3. Inventory at Cloud Systems (Stocks at ERP)",
            whatText:
              "Stock management databases, ERP tools, and supply chain records.",
            whatTextTl:
              "Ang system kung saan nakalista ang stocks ng libro at supplies, deliveries, at ERP ng buong NBS.",
            howToProtectText:
              "Multi-Factor Authentication (MFA), secure cloud gateways, and automated offsite backups.",
            howToProtectTextTl:
              "Pag-gamit ng MFA (password + OTP code), ligtas na koneksyon, at automatic na backup copy ng files.",
            simpleExplanation:
              "If hackers lock our inventory system, branches cannot check prices or stock levels. MFA (OTP verification) and daily backups keep stores running.",
            simpleExplanationTl:
              "Kapag na-hack ang inventory system, hindi makakapag-check ng presyo at stocks ang mga branch. Ang MFA (OTP code) at backup files ang panigurado na tuloy-tuloy ang operasyon.",
            accentColor: "ink",
          },
          {
            id: "sec-1-asset-apps",
            badge: "ASSET 04 • SLIDE 8",
            title: "4. Apps & Online Storefront",
            titleTl: "4. NBS Website, Online Shop at Loyalty Apps",
            whatText:
              "National Book Store e-commerce checkout and customer reward apps.",
            whatTextTl:
              "Ang online shopping website ng National Book Store at customer rewards app.",
            howToProtectText:
              "Web Application Firewalls (WAF), HTTPS TLS encryption, and vulnerability testing.",
            howToProtectTextTl:
              "Protektado ng Web Application Firewall (WAF), gumagamit ng ligtas na HTTPS:// lock, at regular na tine-test ng IT.",
            simpleExplanation:
              "Using HTTPS:// (the browser padlock) and Web Application Firewalls ensures nobody can spy on customers paying on the NBS website.",
            simpleExplanationTl:
              "Kapag bumibili online ang customer, ang HTTPS:// at Web Application Firewall ang sumisiguro na walang makakasilip sa bayad at account nila.",
            accentColor: "emerald",
          },
        ],
        checkpoint: {
          badge: "CHAPTER 01 CHECKPOINT • SLIDES 7-8",
          prompt: "Verify the Correct Asset Safeguards",
          promptTl: "Alin ang Tamang Pag-iingat sa NBS?",
          instruction:
            "Select the 3 statements below that show the right way to protect National Book Store systems:",
          instructionTl:
            "Piliin ang 3 pahayag sa ibaba na nagpapakita ng tamang pagprotekta sa mga gamit at system ng National Book Store:",
          items: [
            {
              id: "chk-1-p2pe",
              label:
                "Payment Terminals (POS): Protected by P2PE encryption, physical tamper seals, and daily inspection logs",
              labelTl:
                "POS at Card Terminals: Chine-check ang tamper seal sticker at serial number sa logbook araw-araw",
              isCorrect: true,
              feedback:
                "Correct (Slide 7). POS card readers are protected by P2PE encryption, intact security seals, and daily inspection logs.",
              feedbackTl:
                "Tama (Slide 7). Ligtas ang card reader kapag buo ang tamper seal sticker at chine-check sa logbook araw-araw.",
            },
            {
              id: "chk-1-rbac",
              label:
                "Customer & Staff Data: Protected by Database Encryption, RBAC, and masking sensitive details",
              labelTl:
                "Customer & Staff Data: Naka-lock sa database at tanging awtorisadong staff lang ang may access (RBAC)",
              isCorrect: true,
              feedback:
                "Correct (Slide 7). Personal records are kept safe using encryption, Role-Based Access Control (RBAC), and masking sensitive numbers.",
              feedbackTl:
                "Tama (Slide 7). Hindi basta-basta mabubuksan ng kung sino lang ang personal records at nakatago ang sensitibong detalye.",
            },
            {
              id: "chk-1-no-backup",
              label:
                "Inventory & Cloud Systems: Protected by sharing one easy password across the branch without MFA",
              labelTl:
                "Inventory & Cloud Systems: Iisang madaling password lang ang gamit ng buong branch at walang OTP (MFA)",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 8). Never share passwords. Inventory & Cloud systems require unique logins, Multi-Factor Authentication (MFA), and automated offsite backups.",
              feedbackTl:
                "Mali (Slide 8). Bawal maghiraman ng password. Kailangan ng sariling login, Multi-Factor Authentication (MFA/OTP), at offsite backups.",
            },
            {
              id: "chk-1-waf",
              label:
                "Apps & Online Storefront: Protected by Web Application Firewalls (WAF) and HTTPS TLS encryption",
              labelTl:
                "NBS Website & Apps: Gumagamit ng Web Application Firewall (WAF) at ligtas na HTTPS:// encryption",
              isCorrect: true,
              feedback:
                "Correct (Slide 8). Our online store and apps use WAF, HTTPS TLS encryption, and regular security testing.",
              feedbackTl:
                "Tama (Slide 8). Gumagamit ang online store natin ng WAF at HTTPS:// para ligtas ang bayad ng mga customer.",
            },
          ],
        },
      },

      // =======================================================================
      // CHAPTER 02 (Slides 9-10)
      // =======================================================================
      {
        id: "ch-02-pci-dss",
        number: "02",
        part: "Part I: Core Retail & Staff Security",
        title: "PCI DSS & Payment Card Security",
        titleTl: "PCI DSS at Tamang Pag-iingat sa Card Payments",
        slideRange: "Slides 9-10",
        durationMinutes: 4,
        isImplemented: true,
        summary:
          "Mandatory payment card rules for National Book Store registers: Zero Storage Rule, Terminal Serial Tracking, and Clean Counter Standard.",
        summaryTl:
          "Ang 3 batas sa kaha kapag tumatanggap ng debit o credit card: Bawal maglista ng card details, i-check ang serial number ng terminal, at bawal ang cellphone sa counter.",
        introParagraph:
          "As a major retailer handling card payments, National Book Store must comply with PCI DSS (Payment Card Industry Data Security Standard) to safeguard cardholder details.",
        introParagraphTl:
          "Libo-libong customer ang nagbabayad gamit ang credit at debit card sa National Book Store araw-araw. Ang PCI DSS ay ang batas sa seguridad ng card payments na dapat sundin ng bawat kahera at branch staff.",
        simpleTakeaway:
          "Whenever a customer pays by card: (1) Never write down their card numbers or CVV on paper, (2) Check that your card machine serial number matches the branch list every morning, and (3) Keep personal cellphones off the cashier counter.",
        simpleTakeawayTl:
          "Tatlong bagay ang dapat tandaan sa kaha: (1) Huwag isusulat sa papel o sticky note ang card number, PIN, o CVV ng customer, (2) I-check tuwing umaga kung tugma ang serial number ng card terminal, at (3) Bawal magpatong ng personal na cellphone sa tabi ng kaha.",
        video: {
          src: "/assets/videos/ch-02.mp4",
          title: "Video Lesson: PCI DSS & Payment Card Security",
          titleTl: "Video Lesson: PCI DSS at Tamang Pag-iingat sa Card Payments",
          caption: "Watch this 3-minute video lesson on PCI DSS rules before completing the checkpoint below.",
          captionTl: "Panoorin ang 3-minutong video lesson na ito tungkol sa PCI DSS bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "03:13",
        },
        sections: [
          {
            id: "sec-2-zero-storage",
            badge: "MANDATORY RULE 01 • SLIDE 10",
            title: "1. Zero Storage Rule",
            titleTl: "1. Zero Storage Rule (Bawal Isulat ang Card Number, PIN, o CVV)",
            description:
              "NEVER write down, print, or record CVV/CVC codes, PIN numbers, or full primary account numbers (PAN) on paper, sticky notes, or unencrypted local files.",
            descriptionTl:
              "HUWAG KAILANMAN isulat, i-print, o i-save ang 3-digit CVV/CVC code (sa likod ng card), PIN number, o ang buong 16-digit card number (PAN) sa papel, resibo, sticky note, o computer.",
            simpleExplanation:
              "Even if a system is slow or a customer orders by phone, never write their 16-digit card number or 3-digit CVV on scratch paper or Notepad. Anyone who sees that paper can steal the customer's money.",
            simpleExplanationTl:
              "Kahit mabagal ang linya, bawal na bawal isulat sa scratch paper, logbook, o sticky note ang 16-digit number sa harap ng card at ang 3-digit CVV sa likod. Kapag may nakakita ng papel na iyon, mananakaw ang pera ng customer.",
            realStoreExample:
              "Never write a customer's card details on a sticky note to process later. Always let the customer tap or insert their card and enter their own PIN directly on the terminal.",
            realStoreExampleTl:
              "Huwag isusulat sa sticky note ang card number para i-punch na lang mamaya. Hayaan palagi ang customer na mag-tap o mag-insert ng card at sila mismo ang pumindot ng PIN nila.",
            accentColor: "red",
          },
          {
            id: "sec-2-serial-tracking",
            badge: "MANDATORY RULE 02 • SLIDE 10",
            title: "2. Terminal Serial Tracking",
            titleTl: "2. Terminal Serial Tracking (Pag-check ng Serial Number)",
            description:
              "Every POS terminal has a recorded serial number. Verify that device serial numbers match store inventory records daily to prevent illegal device swaps.",
            descriptionTl:
              "Bawat POS at card terminal sa branch ay may nakalistang serial number (S/N). I-check araw-araw kung tugma ang serial number sa sticker ng machine at sa official inventory list ng branch.",
            simpleExplanation:
              "Syndicates can distract a cashier and swap our real card terminal with an identical-looking fake terminal that steals every card swipe. Checking the serial number at shift start catches this immediately.",
            simpleExplanationTl:
              "May modus kung saan nililibang ang kahera tapos mabilisang pinapalitan ang card machine ng kamukhang pekeng terminal na nangunguha ng card details. Kapag chine-check mo ang Serial Number bago magsimula ang shift, malalaman mo agad kung pinalitan ito.",
            realStoreExample:
              "During shift opening, compare the Serial Number on the card terminal against your branch checklist. If it does not match, stop and inform your Branch Manager.",
            realStoreExampleTl:
              "Bago magsimulang mag-punch sa umaga, tingnan ang Serial Number sa card machine at ikumpara sa logbook. Kapag iba ang numero o tuklap ang sticker, huwag gamitin at tawagin agad si Branch Manager.",
            accentColor: "ink",
          },
          {
            id: "sec-2-clean-counter",
            badge: "MANDATORY RULE 03 • SLIDE 10",
            title: "3. Clean Counter Standard",
            titleTl: "3. Clean Counter Standard (Walang Cellphone o Camera sa Kaha)",
            description:
              "Keep cash register areas clear of personal phones, cameras, or recording devices that could capture customer card numbers or PIN keypads.",
            descriptionTl:
              "Panatilihing malinis at walang nakapatong na personal na cellphone, camera, o anumang recording device sa counter ng kahera.",
            simpleExplanation:
              "Keep your personal smartphone inside your locker or bag, never on the cashier counter next to the card reader. A phone near the PIN pad violates PCI DSS because its camera can record card numbers and PIN entries.",
            simpleExplanationTl:
              "Ilagay ang personal na cellphone sa locker o bag, huwag ipatong sa tabi ng kaha o PIN keypad. Kahit nagcha-charge ka lang, bawal ito sa PCI DSS dahil pwedeng makunan ng camera ang card at PIN ng customer.",
            accentColor: "emerald",
          },
        ],
        checkpoint: {
          badge: "CHAPTER 02 CHECKPOINT • SLIDES 10 & 34",
          prompt: "Spot the 3 PCI DSS Violations on Cashier Counter #4",
          promptTl: "Alin ang 3 Paglabag sa Cashier Counter #4?",
          instruction:
            "Select the 3 items below that are strictly PROHIBITED at a National Book Store payment counter:",
          instructionTl:
            "Piliin ang 3 bagay sa ibaba na mahigpit na IPINAGBABAWAL sa kaha ng National Book Store:",
          items: [
            {
              id: "chk-2-sticky-cvv",
              label:
                "Yellow sticky note with a customer's 16-digit card number and 3-digit CVV code",
              labelTl:
                "Dilaw na sticky note na may nakasulat na 16-digit card number at CVV ng customer",
              isCorrect: true,
              feedback:
                "Violation Spotted (Zero Storage Rule, Slide 10). Never write down CVV/CVC, PINs, or full card numbers on paper or sticky notes.",
              feedbackTl:
                "Bawal ito (Zero Storage Rule, Slide 10). Huwag kailanman isusulat sa papel o sticky note ang card number, PIN, o CVV ng customer.",
            },
            {
              id: "chk-2-personal-phone",
              label:
                "Cashier's personal smartphone propped up next to the customer PIN keypad",
              labelTl:
                "Personal na cellphone ng kahera na nakapatong sa tabi ng card PIN keypad",
              isCorrect: true,
              feedback:
                "Violation Spotted (Clean Counter Standard, Slide 10). Keep cash registers clear of personal phones or cameras.",
              feedbackTl:
                "Bawal ito (Clean Counter Standard, Slide 10). Bawal magpatong ng personal na cellphone o camera sa cash register counter.",
            },
            {
              id: "chk-2-serial-log",
              label:
                "Daily POS Terminal Serial Number verification log sheet matching store inventory",
              labelTl:
                "Official logbook kung saan chine-check araw-araw ang Serial Number ng POS terminal",
              isCorrect: false,
              feedback:
                "This item is SAFE and REQUIRED (Terminal Serial Tracking, Slide 10). Checking serial numbers daily prevents illegal device swaps.",
              feedbackTl:
                "Ligtas at Tama ito (Terminal Serial Tracking, Slide 10). Kailangan talagang i-check araw-araw ang serial number ng terminal sa logbook.",
            },
            {
              id: "chk-2-pin-keyboard",
              label:
                "Register login PIN and password written on tape under the POS keyboard",
              labelTl:
                "Login PIN at password ng kahera na nakadikit sa ilalim ng POS keyboard",
              isCorrect: true,
              feedback:
                "Violation Spotted (No Password Sharing, Slide 34). Never write register PINs or passwords under keyboards.",
              feedbackTl:
                "Bawal ito (No Password Sharing, Slide 34). Huwag isusulat o ididikit ang POS password sa ilalim ng keyboard.",
            },
          ],
        },
      },

      // =======================================================================
      // CHAPTERS 03 TO 08
      // =======================================================================
      {
        id: "ch-03-retail-threats",
        number: "03",
        part: "Part I: Core Retail & Staff Security",
        title: "Threats Specific to Retail & Card Machines",
        titleTl: "Mga Banta sa Retail at Card Machines",
        slideRange: "Slides 11-13",
        durationMinutes: 5,
        isImplemented: false,
        summary:
          "How to detect physical card skimmers, POS memory malware, and third-party vendor/technician risks on the store floor.",
        summaryTl:
          "Paano matukoy ang physical card skimmers, POS memory malware, at mga panganib mula sa nagpapanggap na technician.",
        sections: [],
      },
      {
        id: "ch-04-cashier-scenarios-escalation",
        number: "04",
        part: "Part I: Core Retail & Staff Security",
        title: "Cashier Scenarios & Incident Response Protocol",
        titleTl: "Mga Sitwasyon sa Kahera at Tamang Pag-report ng Problema",
        slideRange: "Slides 14-18",
        durationMinutes: 5,
        isImplemented: false,
        summary:
          "Scenarios A, B, and C, the Hands Off Golden Rule, Direct Escalation Path, and Safe-To-Report Zero Blame Guarantee.",
        summaryTl:
          "Scenarios A, B, at C, ang Hands Off Golden Rule (Huwag gagalawin o ire-restart), kanino magrereport, at Zero Blame Guarantee.",
        sections: [],
      },
      {
        id: "ch-05-core-cyber-threats",
        number: "05",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "10 Core Types of Cybersecurity Threats",
        titleTl: "10 Karaniwang Uri ng Cyber Attacks at Scams",
        slideRange: "Slides 19-22",
        durationMinutes: 5,
        isImplemented: false,
        summary:
          "Identifying Malware/Spyware, Phishing, Ransomware, Social Engineering, Hackers, Spam, Trojan Horses, Public Wi-Fi risks, Smishing, and Vishing.",
        summaryTl:
          "Pagkilala sa Malware, Phishing (Email), Smishing (Text Scam), Vishing (Tawag sa Telepono), Ransomware, at Public Wi-Fi.",
        sections: [],
      },
      {
        id: "ch-06-threat-actors",
        number: "06",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Modern Threat Actors",
        titleTl: "Sino ang mga Umaatake sa Computer Systems?",
        slideRange: "Slides 23-28",
        durationMinutes: 4,
        isImplemented: false,
        summary:
          "Motivations, characteristics, and methods of Organized Cybercriminals, Nation-State Actors, Hacktivists, Insider Threats, and Script Kiddies.",
        summaryTl:
          "Kilalanin ang 5 grupo ng threat actors: Cybercrime Gangs, Nation-State Hackers, Hacktivists, Insider Threats, at Script Kiddies.",
        sections: [],
      },
      {
        id: "ch-07-attacks-countermeasures",
        number: "07",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Cybersecurity Attacks & Countermeasures",
        titleTl: "Mga Teknikal na Pag-atake at Paano Ito Pinipigilan",
        slideRange: "Slides 29-32",
        durationMinutes: 4,
        isImplemented: false,
        summary:
          "Technical breakdown of DDoS, Social Engineering, Cryptojacking, Ransomware backups, and Backdoor Code Testing (SAST/DAST/HAST).",
        summaryTl:
          "Madaling paliwanag tungkol sa DDoS, Social Engineering, Cryptojacking, Ransomware backups, at Code Testing (SAST/DAST/HAST).",
        sections: [],
      },
      {
        id: "ch-08-role-practices-malware",
        number: "08",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Role-Categorized Data Protection & Malware Signs",
        titleTl: "Gabay para sa Branch vs. HQ at 8 Senyales ng Malware",
        slideRange: "Slides 33-38",
        durationMinutes: 4,
        isImplemented: false,
        summary:
          "Tailored daily checklists for Branch/Cashier vs. HQ/Office staff, plus the 8 warning signs of malware infection on any device.",
        summaryTl:
          "Araw-araw na checklist para sa Branch Kahera at HQ Office Staff, at ang 8 senyales na may virus o malware ang computer.",
        sections: [],
      },
    ],
    assessmentStations: [
      {
        id: "st-1",
        stationNumber: 1,
        title: "POS Counter & Card Terminal Physical Audit",
        mechanicTag: "Hotspot Inspector",
        slideReference: "Slides 10, 12, 34",
        description:
          "Inspect a virtual NBS cashier counter: verify the terminal serial number, spot a bulky skimmer overlay, and remove PCI DSS Clean Counter violations.",
      },
      {
        id: "st-2",
        stationNumber: 2,
        title: "Phishing, Smishing & Vishing Triage Desk",
        mechanicTag: "Interactive Comms Inspector",
        slideReference: "Slides 15, 20-22, 31, 35",
        description:
          "Click the red flags across an HTTP credential-harvesting email, a fake courier SMS (Smishing), and an urgent Bank Technician phone call.",
      },
      {
        id: "st-3",
        stationNumber: 3,
        title: "Live Incident Escalation (Hands-Off Protocol)",
        mechanicTag: "Branching Simulation",
        slideReference: "Slides 15, 17-18",
        description:
          "Respond to an unknown USB drive and a lagging POS register without violating the Golden Rule (do not reboot or unplug cables).",
      },
    ],
  },
  {
    slug: "data-privacy-npc",
    code: "NBS-DPA-102",
    title: "Data Privacy Act & Customer Loyalty Protection",
    subtitle:
      "NPC Compliance, Laking National Cardholder Privacy, and Data Breach Notification",
    category: "Legal & Data Privacy",
    status: "coming_soon",
    estimatedMinutes: 25,
    passingScore: 80,
    totalSlides: 28,
    badgeCode: "DPA-2027",
    targetRoles: ["All Store & HQ Personnel"],
    objectives: [],
    chapters: [],
    assessmentStations: [],
  },
  {
    slug: "retail-safety-loss-prevention",
    code: "NBS-OPS-103",
    title: "Store Floor Safety & Retail Loss Prevention",
    subtitle:
      "Inventory Integrity, Shoplifting Deterrence, and Emergency Store Procedures",
    category: "Store Operations",
    status: "coming_soon",
    estimatedMinutes: 30,
    passingScore: 80,
    totalSlides: 32,
    badgeCode: "OPS-2027",
    targetRoles: ["Branch Operations", "Cashiers", "Warehouse Staff"],
    objectives: [],
    chapters: [],
    assessmentStations: [],
  },
];
