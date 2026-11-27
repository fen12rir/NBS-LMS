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
      // Chapter 01
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

      // Chapter 02
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

      // Chapters 03-08
      {
        id: "ch-03-retail-threats",
        number: "03",
        part: "Part I: Core Retail & Staff Security",
        title: "Threats Specific to Retail & Card Machines",
        titleTl: "Mga Banta sa Retail at Card Machines",
        slideRange: "Slides 11-13",
        durationMinutes: 5,
        isImplemented: true,
        summary:
          "How to detect physical card skimmers, POS memory malware, and third-party vendor/technician risks on the store floor.",
        summaryTl:
          "Paano matukoy ang physical card skimmers, POS memory malware, at mga panganib mula sa nagpapanggap na technician.",
        video: {
          src: "/assets/videos/ch-03.mp4",
          title: "Video Lesson: Threats Specific to Retail & Card Machines",
          titleTl: "Video Lesson: Mga Banta sa Retail at Card Machines",
          caption: "Watch this 2-minute video lesson on retail and card machine threats before completing the checkpoint below.",
          captionTl: "Panoorin ang 2-minutong video lesson na ito tungkol sa mga banta sa retail at card machines bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "02:06",
        },
        checkpoint: {
          badge: "CHAPTER 03 CHECKPOINT • SLIDES 11-13",
          prompt: "Respond to a Suspected POS or Technician Threat",
          promptTl: "Ano ang Dapat Gawin Kapag May Kahina-hinalang POS o Technician?",
          instruction:
            "Select the 2 safest actions for protecting the payment terminal:",
          instructionTl:
            "Piliin ang 2 pinakaligtas na hakbang para maprotektahan ang payment terminal:",
          items: [
            {
              id: "chk-3-stop-report-reader",
              label:
                "If a card reader is loose, bulky, or has a damaged seal, stop using it and report it to the Branch Manager.",
              labelTl:
                "Kung maluwag o umbok ang card reader, o sira ang security seal, huwag itong gamitin at i-report sa Branch Manager.",
              isCorrect: true,
              feedback:
                "Correct (Slide 12). Stop transactions on a suspicious reader and report it immediately; it may have a skimmer attached.",
              feedbackTl:
                "Tama (Slide 12). Itigil ang paggamit ng kahina-hinalang reader at i-report agad dahil maaaring may nakakabit na skimmer.",
            },
            {
              id: "chk-3-remove-overlay",
              label:
                "Peel off a suspicious attachment yourself and keep using the card reader.",
              labelTl:
                "Ikaw mismo ang magtanggal ng kahina-hinalang nakakabit at ipagpatuloy ang paggamit ng card reader.",
              isCorrect: false,
              feedback:
                "Incorrect. Do not handle or continue using a suspicious terminal. Stop transactions and notify the Branch Manager.",
              feedbackTl:
                "Mali. Huwag galawin o ipagpatuloy ang paggamit ng kahina-hinalang terminal. Itigil ang transaksyon at ipaalam ito sa Branch Manager.",
            },
            {
              id: "chk-3-verify-technician",
              label:
                "Verify an unexpected technician's identity and visit with the Branch Manager before granting access.",
              labelTl:
                "Kumpirmahin muna sa Branch Manager ang pagkakakilanlan at pagbisita ng hindi inaasahang technician bago siya bigyan ng access.",
              isCorrect: true,
              feedback:
                "Correct (Slide 13). Verify technicians and supplier visits through approved store procedures before granting access.",
              feedbackTl:
                "Tama (Slide 13). Kumpirmahin ang pagkakakilanlan at pagbisita ng technician ayon sa proseso ng store bago magbigay ng access.",
            },
            {
              id: "chk-3-unknown-usb",
              label:
                "Plug an unknown USB drive into the POS to check whether it contains malware.",
              labelTl:
                "Isaksak sa POS ang hindi kilalang USB drive para tingnan kung may malware ito.",
              isCorrect: false,
              feedback:
                "Incorrect. An unknown USB may infect the POS. Do not plug it in; report it to the Branch Manager.",
              feedbackTl:
                "Mali. Maaaring makahawa sa POS ang hindi kilalang USB. Huwag itong isaksak at i-report sa Branch Manager.",
            },
          ],
        },
        sections: [
           {
            id: "sec-3-physical-skimmers",
            badge: "Retail Threat 01 • SLIDE 12",
            title: "1. Physical Skimmers",
            titleTl: "1. Physical Skimmers",
            whatText:
              "Fake overlays attached to card readers to secretly record magnetic stripedata and PIN entries when customers swipe.",
            whatTextTl:
              "Mga pekeng takip na ikinakabit sa card reader upang palihim na makuha ang data sa magnetic stripe at PIN kapag nag-i-swipe ang customer.",
            howToProtectText:
              "Detection: Bulky plastic alignment, loose card slot, damaged security stickers",
            howToProtectTextTl:
              "Mga palatandaan: Makapal o hindi pantay na plastik, maluwag na card slot, o sirang security sticker.",
            simpleExplanation:
              "Detection: Customer info can be stolen by a fake card reader cover (skimmer) that looks like the real thing. Check for loose or bulky plastic, misaligned card slots, and damaged security stickers.",
            simpleExplanationTl:
              "Maaaring manakaw ang impormasyon ng customer gamit ang pekeng takip sa card reader na mukhang bahagi ng totoong device. Tingnan kung maluwag o makapal ang plastik, hindi pantay ang card slot, o sira ang security sticker.",
            realStoreExample:
              "Inspect the card reader every morning. If the plastic cover is loose, bulky, or misaligned, or if the security sticker is damaged, do not use the terminal and report it to your Branch Manager.",
            realStoreExampleTl:
              "Suriin ang card reader tuwing umaga. Kung maluwag, makapal, o hindi pantay ang takip nito, o sira ang security sticker, huwag gamitin ang terminal at i-report ito sa Branch Manager.",
            accentColor: "red",
          },


          {
            id: "sec-3-pos-memory-malware",
            badge: "Retail Threat 02 • SLIDE 12",
            title: "2. POS Memory Malware",
            titleTl: "2. POS Memory Malware",
            whatText:
              "Malicious software that infects the POS terminal's memory to capture card data and PINs during transactions.",
            whatTextTl:
              "Mapaminsalang software na pumapasok sa memory ng POS terminal upang makuha ang card data at mga PIN habang may transaksyon.",
            howToProtectText:
              "Detection: POS terminal sluggishness, unknown USB connections,unauthorized reboot",
            howToProtectTextTl:
              "Mga palatandaan: Mabagal na POS terminal, hindi kilalang USB na nakakabit, o hindi awtorisadong pag-restart.",
            simpleExplanation:
              "Customer info can be stolen by malicious software that infects the POS terminal's memory.",
            simpleExplanationTl:
              "Maaaring manakaw ang impormasyon ng customer kapag napasok ng mapaminsalang software ang memory ng POS terminal.",
            realStoreExample:
              "If you notice the POS terminal is unusually slow, or if you see an unknown USB device connected, Report it to your Branch Manager immediately.",
            realStoreExampleTl:
              "Kung mapansin mong di-pangkaraniwang mabagal ang POS terminal o may nakakabit na hindi kilalang USB device, i-report agad ito sa Branch Manager.",
            accentColor: "red",
          },

          

          {
            id: "sec-3-vendor-supplier-risks",
            badge: "Retail Threat 03 • SLIDE 13",
            title: "3. Vendor & Supplier Risks",
            titleTl: "3. Risk na nanggaling sa Mga Vendor at Supplier",
            whatText:
              "Attacker breaches through third-party maintenance contractors, external technicians, or inventory software suppliers.",
            whatTextTl:
              "Maaaring makapasok ang attacker sa pamamagitan ng third-party maintenance contractor, external technician, o supplier ng inventory software.",
            howToProtectText:
              "Detection: POS terminal sluggishness, unknown USB connections,unauthorized reboot",
            howToProtectTextTl:
              "Mga palatandaan: Mabagal na POS terminal, hindi kilalang USB na nakakabit, o hindi awtorisadong pag-restart.",
            simpleExplanation:
              "Detection:Unscheduled technician visits, unverified badge requests, remote access popups",
            simpleExplanationTl:
              "Mga palatandaan: Hindi naka-iskedyul na pagbisita ng technician, kahilingan gamit ang badge na hindi pa nabeberipika, o biglang pop-up para sa remote access.",
            realStoreExample:
              "If you notice an unscheduled technician visit, a request for an unverified badge, or a popup for remote access, report it immediately.",
            realStoreExampleTl:
              "Kung may hindi naka-iskedyul na pagbisita ng technician, kahilingan gamit ang badge na hindi pa nabeberipika, o pop-up para sa remote access, i-report ito agad.",
            accentColor: "red",
          },




        ],
      },
      {
        id: "ch-04-cashier-scenarios-escalation",
        number: "04",
        part: "Part I: Core Retail & Staff Security",
        title: "Cashier Scenarios & Incident Response Protocol",
        titleTl: "Mga Sitwasyon sa Kahera at Tamang Pag-report ng Problema",
        slideRange: "Slides 14-18",
        durationMinutes: 5,
        isImplemented: true,
        summary:
          "Scenarios A, B, and C, the Hands Off Golden Rule, Direct Escalation Path, and Safe-To-Report Zero Blame Guarantee.",
        summaryTl:
          "Scenarios A, B, at C, ang Hands Off Golden Rule (Huwag gagalawin o ire-restart), kanino magrereport, at Zero Blame Guarantee.",
        video: {
          src: "/assets/videos/ch-04.mp4",
          title: "Video Lesson: Cashier Scenarios & Incident Response Protocol",
          titleTl: "Video Lesson: Mga Sitwasyon sa Kahera at Tamang Pag-report ng Problema",
          caption: "Watch this 3-minute video lesson on cashier scenarios and incident response before completing the checkpoint below.",
          captionTl: "Panoorin ang 3-minutong video lesson na ito tungkol sa mga sitwasyon sa kahera at tamang pag-report bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "02:59",
        },
        checkpoint: {
          badge: "CHAPTER 04 CHECKPOINT • SLIDES 14-18",
          prompt: "Choose the Safe Incident Response",
          promptTl: "Piliin ang Ligtas na Pagtugon sa Insidente",
          instruction:
            "Select the 2 correct actions when you notice a possible security incident:",
          instructionTl:
            "Piliin ang 2 tamang hakbang kapag may napansin kang posibleng insidente sa seguridad:",
          items: [
            {
              id: "chk-4-stop-report",
              label:
                "Stop using a suspicious card reader and report it immediately to the Branch Manager.",
              labelTl:
                "Itigil ang paggamit ng kahina-hinalang card reader at i-report agad ito sa Branch Manager.",
              isCorrect: true,
              feedback:
                "Correct (Scenario A). Stop transactions on a potentially tampered reader and escalate the concern promptly.",
              feedbackTl:
                "Tama (Scenario A). Itigil ang transaksyon sa posibleng pinakialamang reader at i-report agad ang problema.",
            },
            {
              id: "chk-4-hands-off",
              label:
                "Follow the Hands Off rule: do not restart, repair, or unplug the affected equipment.",
              labelTl:
                "Sundin ang Hands Off rule: huwag i-restart, kumpunihin, o tanggalan ng kable ang apektadong kagamitan.",
              isCorrect: true,
              feedback:
                "Correct (Slide 17). Avoid changing the device or damaging evidence; follow the escalation procedure.",
              feedbackTl:
                "Tama (Slide 17). Huwag galawin ang device o sirain ang posibleng ebidensya; sundin ang proseso ng pag-report.",
            },
            {
              id: "chk-4-restart-register",
              label:
                "Restart the register and unplug the payment cables to try to fix the issue yourself.",
              labelTl:
                "I-restart ang register at tanggalin ang mga kable ng payment terminal para subukang ayusin ito.",
              isCorrect: false,
              feedback:
                "Incorrect. The Hands Off rule says not to restart, repair, or disconnect affected equipment. Report it instead.",
              feedbackTl:
                "Mali. Ayon sa Hands Off rule, huwag i-restart, kumpunihin, o tanggalan ng kable ang kagamitan. I-report ito.",
            },
            {
              id: "chk-4-share-credentials",
              label:
                "Give your password to an urgent caller who says they are from IT so they can investigate.",
              labelTl:
                "Ibigay ang password sa tumawag na nagmamadali at nagsabing taga-IT siya para maimbestigahan ang problema.",
              isCorrect: false,
              feedback:
                "Incorrect (Scenario B). Never share credentials with an unsolicited caller. Hang up and contact the official IT Helpdesk to verify.",
              feedbackTl:
                "Mali (Scenario B). Huwag magbigay ng password sa hindi inaasahang tumawag. Ibaba ang tawag at kontakin ang opisyal na IT Helpdesk.",
            },
          ],
        },
        sections: [
          {
            id: "sec-4-card-terminal-tamper",
            badge: "Scenario A • SLIDE 15",
            title: "Scenario A: Card Terminal Looks Slightly Tampered or Loose",
            titleTl: "Scenario A: May Pagkaka-tamper sa Card Terminal",
            whatText:
              "If the card reader looks loose, misaligned, or has a damaged security sticker, or tampered in another way.",
            whatTextTl:
              "Kung mukhang maluwag o hindi pantay ang card reader, sira ang security sticker, o may iba pang palatandaan na pinakialaman ito.",
            howToProtectText:
              "Stop transactions on that reader. Notify Branch Manager immediately.",
            howToProtectTextTl:
              "Itigil ang mga transaksyon gamit ang reader na iyon. Ipaalam agad ito sa Branch Manager.",
            simpleExplanation:
              "A tampered card reader can steal customer card data. Stop using it and report to your Branch Manager.",
            simpleExplanationTl:
              "Maaaring magnakaw ng card data ng customer ang pinakialamang card reader. Itigil ang paggamit nito at i-report sa Branch Manager.",
            accentColor: "red",
          },

          {
            id: "sec-4-urgent-phone-call",
            badge: "Scenario B • SLIDE 15",
            title: "Scenario B: Urgent Phone Call Claiming to be 'IT Support' or 'Bank' Technician",
            titleTl: "Scenario B: Urgent na Phone Call na napapanggap na isang 'IT Support' o 'Bank' Technician",
            whatText:
            "A random caller claims to be from IT Support or a Bank Technician.",
            whatTextTl:
              "May tumawag nang hindi inaasahan at nag-aangking taga-IT Support o technician ng bangko.",
            howToProtectText:
              " Don’t give any credentials or information. Hang up & call official IT Helpdesk to verify.",
            howToProtectTextTl:
              "Huwag magbigay ng login details o anumang impormasyon. Ibaba ang tawag at tawagan ang opisyal na IT Helpdesk para mag-verify.",
            simpleExplanation:
              "A malicious caller claiming to be IT Support or a Bank Technician may be trying to steal your login credentials. Hang up and call the official IT Helpdesk to verify.",
            simpleExplanationTl:
              "Maaaring sinusubukan ng masamang-loob na nagkukunwaring taga-IT Support o technician ng bangko na nakawin ang iyong login details. Ibaba ang tawag at kontakin ang opisyal na IT Helpdesk para mag-verify.",
            accentColor: "red",
          },


          {
            id: "sec-4-random-usb-drive",
            badge: "Scenario C • SLIDE 15",
            title: "Scenario C: Random USB Drive Found Near Register or Plugged into Terminal",
            titleTl: "Scenario C: Random na USB Drive na nakita malapit sa Register o Naka-plug in sa Terminal",
            whatText:
            "A random usb drive is found near the register or plugged into the POS terminal.",
            whatTextTl:
              "May nakitang hindi kilalang USB drive malapit sa register o nakasaksak ito sa POS terminal.",
            howToProtectText:
              "Remove and don't plug into any device. Hand drive directly to Manager. Have it checked by IT",
            howToProtectTextTl:
              "Huwag itong isaksak sa anumang device. Ibigay mismo ang drive sa Manager at ipasuri ito sa IT.",
            simpleExplanation:
              "A random usb drive found near the register or plugged into the POS terminal may contain malicious software. Do not insert it into any system.",
            simpleExplanationTl:
              "Maaaring may mapaminsalang software ang hindi kilalang USB drive na makita malapit sa register o nakasaksak sa POS terminal. Huwag itong isaksak sa anumang system.",
            accentColor: "red",
          },

          {
            id: "sec-4-Golden-Rule",
            badge: "rule 1 • SLIDE 17",
            title: "Golden Rule: Hands Off",
            titleTl: "Golden Rule: Hands Off",
            description:
            "Do not try to fix the issue yourself. Do not restart or power-cycle the register. Do not un;lug network or payment cables.",
            descriptionTl:
            "Huwag subukang ayusin ang problema. Huwag i-restart o patayin at buksan muli ang register. Huwag tanggalin ang mga network o payment cable.",
            simpleExplanation:
              "Any attempt to fix the issue yourself may worsen the situation or destroy evidence. Follow the Hands Off Golden Rule and report to your Branch Manager immediately.",
            simpleExplanationTl:
              "Maaaring lumala ang sitwasyon o mawala ang ebidensya kapag sinubukan mong ayusin ito. Sundin ang Hands Off Golden Rule at i-report agad sa Branch Manager.",
            accentColor: "red",
          },

          {
            id: "sec-4-Direct-Escalation-Path",
            badge: "rule 2 • SLIDE 17",
            title: "Direct Escalation Path",
            titleTl: "Direct Escalation Path",
            description:
            "Branch & Store Staff: Report immediately to your Branch Manager on duty. HQ / Technical Staff: Contact IT Helpdesk directly via viber or email.",
            descriptionTl:
            "Mga empleyado sa branch at store: I-report agad sa Branch Manager na naka-duty. Mga empleyado sa HQ o technical team: Direktang kontakin ang IT Helpdesk sa Viber o email.",
            simpleExplanation:
              "Following the Direct Escalation Path ensures that the right people are informed quickly to handle the incident properly.",
            simpleExplanationTl:
              "Sa pagsunod sa Direct Escalation Path, mabilis na maipapaalam ang insidente sa mga tamang taong kikilos para maayos itong matugunan.",
            accentColor: "red",
          },

          {
            id: "sec-4-Safe-Report",
            badge: "rule 3• SLIDE 18",
            title: "Safe to Report (Zero Blame Guarantee)",
            titleTl: "Safe to Report (Zero Blame Guarantee)",
            description:
            "It is always fine to report something even if it turns out to benothing! We welcome false alarms. You will never be penalized or reprimanded for raising a security concern in good faith.",
            descriptionTl:
            "Ayos lang mag-report kahit mapatunayang walang problema. Tinatanggap namin ang mga false alarm. Hindi ka parurusahan o papagalitan kung nag-ulat ka ng alalahanin sa seguridad nang may mabuting hangarin.",
            simpleExplanation:
              "Reporting a potential security issue is always encouraged, even if it turns out to be a false alarm. Employees will not face penalties for reporting in good faith.",
            simpleExplanationTl:
              "Laging hinihikayat ang pag-report ng posibleng isyu sa seguridad, kahit false alarm pala ito. Hindi paparusahan ang mga empleyadong nag-report nang may mabuting hangarin.",
            accentColor: "red",
          },                                                           

          


        ],
      },
      {
        id: "ch-05-core-cyber-threats",
        number: "05",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "10 Core Types of Cybersecurity Threats",
        titleTl: "10 Karaniwang Uri ng Cyber Attacks at Scams",
        slideRange: "Slides 19-22",
        durationMinutes: 5,
        isImplemented: true,
        summary:
          "Identifying Malware/Spyware, Phishing, Ransomware, Social Engineering, Hackers, Spam, Trojan Horses, Public Wi-Fi risks, Smishing, and Vishing.",
        summaryTl:
          "Pagkilala sa Malware, Phishing (Email), Smishing (Text Scam), Vishing (Tawag sa Telepono), Ransomware, at Public Wi-Fi.",
        video: {
          src: "/assets/videos/ch-05.mp4",
          title: "Video Lesson: 10 Core Types of Cybersecurity Threats",
          titleTl: "Video Lesson: 10 Karaniwang Uri ng Cyber Attacks at Scams",
          caption: "Watch this 20-minute video lesson covering core cybersecurity threats before completing the checkpoint below.",
          captionTl: "Panoorin ang 20-minutong video lesson na ito tungkol sa mga karaniwang banta sa cybersecurity bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "20:25",
        },
        checkpoint: {
          badge: "CHAPTER 05 CHECKPOINT • SLIDES 19-22",
          prompt: "Identify the Threat",
          promptTl: "Kilalanin ang Uri ng Banta",
          instruction:
            "Select the 2 accurate descriptions of cybersecurity threats:",
          instructionTl:
            "Piliin ang 2 tamang paglalarawan ng mga banta sa cybersecurity:",
          items: [
            {
              id: "chk-5-phishing",
              label:
                "Phishing uses deceptive messages, often made to look trustworthy, to steal sensitive information.",
              labelTl:
                "Gumagamit ang phishing ng mapanlinlang na mensahe na kunwaring mapagkakatiwalaan upang magnakaw ng sensitibong impormasyon.",
              isCorrect: true,
              feedback:
                "Correct (Slide 20). Phishing messages impersonate trusted sources to trick people into sharing sensitive information.",
              feedbackTl:
                "Tama (Slide 20). Nagpapanggap na mapagkakatiwalaang source ang mga phishing message para malinlang ang mga tao na ibigay ang sensitibong impormasyon.",
            },
            {
              id: "chk-5-vishing",
              label:
                "Vishing uses phone calls or voice messages to trick people into revealing private information.",
              labelTl:
                "Gumagamit ang vishing ng tawag sa telepono o voice message para malinlang ang mga tao na ibigay ang pribadong impormasyon.",
              isCorrect: true,
              feedback:
                "Correct (Slide 22). Vishing is phishing carried out through voice calls or messages.",
              feedbackTl:
                "Tama (Slide 22). Isinasagawa ang vishing sa pamamagitan ng tawag o voice message.",
            },
            {
              id: "chk-5-smishing",
              label:
                "Smishing is a scam carried out through phone calls, while vishing uses text messages.",
              labelTl:
                "Isinasagawa ang smishing sa tawag sa telepono, samantalang text message naman ang ginagamit sa vishing.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 22). Smishing uses text messages; vishing uses voice calls or messages.",
              feedbackTl:
                "Mali (Slide 22). Gumagamit ng text message ang smishing; gumagamit naman ng tawag o voice message ang vishing.",
            },
            {
              id: "chk-5-trojan",
              label:
                "A Trojan horse is safe to install as long as the application looks legitimate.",
              labelTl:
                "Ligtas i-install ang Trojan horse basta mukhang lehitimo ang application.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 21). A Trojan horse may look legitimate but can contain hidden malicious code.",
              feedbackTl:
                "Mali (Slide 21). Maaaring magmukhang lehitimo ang Trojan horse ngunit may nakatagong mapaminsalang code ito.",
            },
          ],
        },
        sections: [
          {
            id: "sec-5-Malware-Spyware",
            badge: "Type 1 • SLIDE 20",
            title: "Malware and Spyware",
            titleTl: "Malware at Spyware",
            description:
            "A Type of software to gain unauthorized access or tocause damage to a computer or any of your electronic devices.",
            descriptionTl:
            "Uri ito ng software na nagkakaroon ng hindi awtorisadong access o nagdudulot ng pinsala sa computer o iba pang electronic device.",
            simpleExplanation:
              "Malware is malicious software that can infect computers or devices to steal information or cause damage. Spyware secretly monitors your activities and sends data to attackers.",
            simpleExplanationTl:
              "Ang malware ay mapaminsalang software na maaaring makahawa sa computer o device upang magnakaw ng impormasyon o manira. Palihim namang sinusubaybayan ng spyware ang iyong mga ginagawa at ipinapadala ang data sa mga umaatake.",
            accentColor: "red",
          }, 
          
          {
            id: "sec-5-Phishing",
            badge: "Type 2 • SLIDE 20",
            title: "Phishing",
            titleTl: "Phishing",
            description:
            " practice of sending fraudulent emails that resembles emailsfrom reputable sources. The aim is to steal sensitive data and is the most common type of cyberattack",
            descriptionTl:
            "Paraan ng pagpapadala ng mapanlinlang na email na ginagaya ang mensahe mula sa mapagkakatiwalaang source. Layunin nitong magnakaw ng sensitibong data at isa ito sa pinakakaraniwang uri ng cyberattack.",
            simpleExplanation:
              "Phishing is a scam where attackers send fake emails that look like they come from trusted sources to trick people into giving away sensitive information like passwords or credit card numbers.",
            simpleExplanationTl:
              "Isang panloloko ang phishing kung saan nagpapadala ang mga umaatake ng pekeng email na kunwari ay mula sa mapagkakatiwalaang source upang malinlang ang mga tao na ibigay ang sensitibong impormasyon gaya ng password o numero ng credit card.",
            accentColor: "red",
          },

          {
            id: "sec-5-Ransomware",
            badge: "Type 3 • SLIDE 20",
            title: "Ransomware",
            titleTl: "Ransomware",
            description:
            "A type of malicious software that is design to extort money by blocking the access to files or the computer system until the ransom is paid. Paying the ransom does not guarantee that the files will be recovered or the system will be restored.",
            descriptionTl:
            "Uri ito ng mapaminsalang software na nanghihingi ng bayad sa pamamagitan ng pagharang sa access sa mga file o computer system. Hindi ginagarantiya ng pagbabayad ng ransom na maibabalik ang mga file o system.",
            simpleExplanation:
              "Ransomware is a type of malware that locks your files or computer system and demands payment to unlock them. Paying the ransom does not guarantee that you will get your files back.",
            simpleExplanationTl:
              "Uri ng malware ang ransomware na nagla-lock ng mga file o computer system at humihingi ng bayad para ma-unlock ang mga ito. Hindi tiyak na maibabalik ang iyong mga file kahit magbayad ka.",
            accentColor: "red",
          },

          {
            id: "sec-5-Social-Engineering",
            badge: "Type 4 • SLIDE 20",
            title: "Social Engineering",
            titleTl: "Social Engineering",
            description:
            "a tactic that hackers use to trick you into revealing sensitive information.",
            descriptionTl:
            "Taktikang ginagamit ng mga hacker upang malinlang ka na ibunyag ang sensitibong impormasyon.",
            simpleExplanation:
              "A social engineering attack is when a hacker manipulates or deceives you into giving away confidential information, such as passwords or personal data.",
            simpleExplanationTl:
              "Ang social engineering attack ay nangyayari kapag minamanipula o nililinlang ka ng hacker upang ibigay ang kumpidensyal na impormasyon gaya ng password o personal na data.",
            accentColor: "red",
          },

           {
            id: "sec-5-Hackers",
            badge: "Type 5 • SLIDE 21",
            title: "Hackers",
            titleTl: "Hackers",
            description:
            "People who “trespass” into your computer, usually from a remote location",
            descriptionTl:
            "Mga taong pumapasok sa computer mo nang walang pahintulot, karaniwan mula sa malayong lokasyon.",
            simpleExplanation:
              "Hackers are individuals who gain unauthorized access to computer systems, often from remote locations.",
            simpleExplanationTl:
              "Ang mga hacker ay mga taong nagkakaroon ng hindi awtorisadong access sa mga computer system, kadalasan mula sa malayong lokasyon.",
            accentColor: "red",
          },

          {
            id: "sec-5-Spam",
            badge: "Type 6 • SLIDE 21",
            title: "Spam",
            titleTl: "Spam",
            description:
            "Use of electronic messaging systems to send unsolicited messages, especially advertising, as well as sending messages repeatedly on the same side.",
            descriptionTl:
            "Paggamit ng electronic messaging system upang magpadala ng mga mensaheng hindi hiningi, kadalasan ay patalastas, o paulit-ulit na ipadala ang parehong mensahe.",
            simpleExplanation:
              "Spam is unwanted email or messages sent in bulk, often for advertising purposes.",
            simpleExplanationTl:
              "Ang spam ay mga email o mensaheng hindi ninanais na ipinapadala nang maramihan, kadalasan para sa patalastas.",
            accentColor: "red",
          },

           {
            id: "sec-5-Trojan-Horses",
            badge: "Type 7 • SLIDE 21",
            title: "Trojan Horses",
            titleTl: "Trojan Horses",
            description:
            " Devices that are infected with trojan horse software bydownloading an application that seems legitimate but is in fact malicious.",
            descriptionTl:
            "Maaaring mahawahan ang device ng Trojan horse kapag nag-download ng application na mukhang lehitimo ngunit mapaminsala pala.",
            simpleExplanation:
              "A trojan horse is a type of malware that appears to be legitimate software but contains hidden malicious code.",
            simpleExplanationTl:
              "Uri ng malware ang Trojan horse na mukhang lehitimong software ngunit may nakatagong mapaminsalang code.",
            accentColor: "red",
          },

          
          {
            id: "sec-5-Public-Wi-fi",
            badge: "Type 8 • SLIDE 21",
            title: "Public Wi-fi",
            titleTl: "Public Wi-fi",
            description:
            "If you connect to a wi-fi network in public spaces and you send information through websites or apps, it might be intercepted by someone else.",
            descriptionTl:
            "Kapag kumonekta ka sa Wi-Fi sa pampublikong lugar at nagpadala ng impormasyon sa website o app, maaaring masagap ito ng ibang tao.",
            simpleExplanation:
              "Public Wi-Fi networks can be insecure and may allow others to intercept your data.",
            simpleExplanationTl:
              "Maaaring hindi ligtas ang mga pampublikong Wi-Fi network at posibleng masagap ng iba ang iyong data.",
            accentColor: "red",
          },

          {
            id: "sec-5-Smishing",
            badge: "Type 9 • SLIDE 22",
            title: "Smishing",
            titleTl: "Smishing",
            description:
            "A cyberattack that uses text messages (SMS) to trick you into sharing personal information, clicking dangerous links, or downloading malware.",
            descriptionTl:
            "Cyberattack ito na gumagamit ng text message (SMS) upang malinlang kang magbahagi ng personal na impormasyon, mag-click ng mapanganib na link, o mag-download ng malware.",
            simpleExplanation:
              "Smishing is a type of phishing attack that uses text messages to deceive individuals into revealing sensitive information or downloading malicious software.",
            simpleExplanationTl:
              "Uri ng phishing attack ang smishing na gumagamit ng text message upang linlangin ang isang tao na ibunyag ang sensitibong impormasyon o mag-download ng mapaminsalang software.",
            accentColor: "red",
          },

          {
            id: "sec-5-Vishing",
            badge: "Type 10 • SLIDE 22",
            title: "Vishing",
            titleTl: "Vishing",
            description:
            "a cybercrime where scammers use phone calls or voice messages to trick you into sharing private information.",
            descriptionTl:
            "Cybercrime ito kung saan gumagamit ang mga scammer ng tawag sa telepono o voice message upang malinlang kang magbahagi ng pribadong impormasyon.",
            simpleExplanation:
              "Vishing is a type of phishing attack that uses phone calls or voice messages to deceive individuals into revealing sensitive information or downloading malicious software.",
            simpleExplanationTl:
              "Uri ng phishing attack ang vishing na gumagamit ng tawag sa telepono o voice message upang linlangin ang mga tao na ibunyag ang sensitibong impormasyon o mag-download ng mapaminsalang software.",
            accentColor: "red",
          },

          






        ],
      },
      {
        id: "ch-06-threat-actors",
        number: "06",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Modern Threat Actors",
        titleTl: "Sino ang mga Umaatake sa Computer Systems?",
        slideRange: "Slides 23-28",
        durationMinutes: 4,
        isImplemented: true,
        summary:
          "Motivations, characteristics, and methods of Organized Cybercriminals, Nation-State Actors, Hacktivists, Insider Threats, and Script Kiddies.",
        summaryTl:
          "Kilalanin ang 5 grupo ng threat actors: Cybercrime Gangs, Nation-State Hackers, Hacktivists, Insider Threats, at Script Kiddies.",
        video: {
          src: "/assets/videos/ch-06.mp4",
          title: "Video Lesson: Modern Threat Actors",
          titleTl: "Video Lesson: Sino ang mga Umaatake sa Computer Systems?",
          caption: "Watch this 9-minute video lesson on modern threat actors before completing the checkpoint below.",
          captionTl: "Panoorin ang 9-minutong video lesson na ito tungkol sa mga umaatake sa computer systems bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "09:20",
        },
        checkpoint: {
          badge: "CHAPTER 06 CHECKPOINT • SLIDES 23-28",
          prompt: "Match the Threat Actor to Their Characteristics",
          promptTl: "Itugma ang Threat Actor sa Kaniyang Katangian",
          instruction:
            "Select the 2 accurate descriptions of threat actors:",
          instructionTl:
            "Piliin ang 2 tamang paglalarawan sa mga threat actor:",
          items: [
            {
              id: "chk-6-cybercrime",
              label:
                "Organized cybercriminal groups are often motivated by profit and may use ransomware or phishing to steal money and data.",
              labelTl:
                "Madalas na pera ang motibo ng mga organisadong cybercriminal group, at maaari silang gumamit ng ransomware o phishing para magnakaw ng pera at data.",
              isCorrect: true,
              feedback:
                "Correct (Slide 24). Organized cybercriminals operate for financial gain and use methods such as ransomware and phishing.",
              feedbackTl:
                "Tama (Slide 24). Kumilos ang mga organisadong cybercriminal para kumita at gumagamit sila ng mga paraang gaya ng ransomware at phishing.",
            },
            {
              id: "chk-6-insider",
              label:
                "Insider threats can involve current or former employees, contractors, or business partners misusing access, intentionally or by mistake.",
              labelTl:
                "Maaaring kabilang sa insider threat ang kasalukuyan o dating empleyado, contractor, o business partner na sinasadya o hindi sinasadyang umaabuso sa access.",
              isCorrect: true,
              feedback:
                "Correct (Slide 27). Insiders already have some level of legitimate access, which may be misused or mishandled.",
              feedbackTl:
                "Tama (Slide 27). May lehitimong access na ang mga insider, ngunit maaari nila itong abusuhin o hindi maingat na magamit.",
            },
            {
              id: "chk-6-script-kiddies",
              label:
                "Script kiddies are highly trained government teams with unlimited budgets and years-long operations.",
              labelTl:
                "Mga highly trained na team ng gobyerno na may walang limitasyong budget at operasyong tumatagal nang maraming taon ang script kiddies.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 28). Script kiddies are typically beginners who use pre-made tools; government-sponsored actors are a different group.",
              feedbackTl:
                "Mali (Slide 28). Karaniwang baguhan ang script kiddies na gumagamit ng mga nakahandang tool; ibang grupo ang mga actor na suportado ng gobyerno.",
            },
            {
              id: "chk-6-nation-state",
              label:
                "Nation-state actors are ordinary cybercriminal businesses whose only goal is immediate financial profit.",
              labelTl:
                "Mga ordinaryong cybercriminal business na pera lang agad ang layunin ang nation-state actors.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 25). Nation-state actors are linked to national governments and may pursue espionage, disruption, or political goals.",
              feedbackTl:
                "Mali (Slide 25). May kaugnayan sa mga gobyerno ang nation-state actors at maaaring maghangad sila ng espionage, panggugulo, o layuning pampolitika.",
            },
          ],
        },
        sections: [


           {
            id: "sec-6-Cybercrime-Gangs",
            badge: "Threat Actor 1 • SLIDE 24",
            title: "Organized Cybercriminals (Cybercrime Gangs)",
            titleTl: "Organized Cybercriminals (Cybercrime Gangs)",
            description:
            "Motivation: Financial profit, extortion.\n\n Characteristics: Organized criminal groups that operate just like real businesses, complete with technical support, marketing, and revenue goals.\n\n Methods: They use ransomware to lock up a company's files, demand millions to unlock them, and trick employees with convincing fake emails to steal login details",
            descriptionTl:
              "Motibo: Pinansyal na pakinabang at pangingikil.\n\n Mga katangian: Mga organisadong grupong kriminal na nagpapatakbo na parang lehitimong negosyo, kumpleto sa technical support, marketing, at mga target na kita.\n\n Mga pamamaraan: Gumagamit sila ng ransomware para ikandado ang mga file ng kumpanya, humihingi ng milyon-milyong bayad para ma-unlock ang mga ito, at gumagamit ng kapani-paniwalang pekeng email para nakawin ang login details ng mga empleyado.",
            simpleExplanation:
              "Organized cybercriminals are groups that operate like businesses, using ransomware and phishing to steal money and data.",
            simpleExplanationTl:
              "Mga grupong kriminal ang organized cybercriminals na nagpapatakbo na parang negosyo at gumagamit ng ransomware at phishing upang magnakaw ng pera at data.",
            accentColor: "red",
          },


          {
            id: "sec-6-Cybercrime-Gangs",
            badge: "Threat Actor 1 • SLIDE 24",
            title: "Organized Cybercriminals (Cybercrime Gangs)",
            titleTl: "Organized Cybercriminals (Cybercrime Gangs)",
            description:
            "Motivation: Financial profit, extortion.\n\n Characteristics: Organized criminal groups that operate just like real businesses, complete with technical support, marketing, and revenue goals.\n\n Methods: They use ransomware to lock up a company's files, demand millions to unlock them, and trick employees with convincing fake emails to steal login details",
            descriptionTl:
              "Motibo: Pinansyal na pakinabang at pangingikil.\n\n Mga katangian: Mga organisadong grupong kriminal na nagpapatakbo na parang lehitimong negosyo, kumpleto sa technical support, marketing, at mga target na kita.\n\n Mga pamamaraan: Gumagamit sila ng ransomware para ikandado ang mga file ng kumpanya, humihingi ng milyon-milyong bayad para ma-unlock ang mga ito, at gumagamit ng kapani-paniwalang pekeng email para nakawin ang login details ng mga empleyado.",
            simpleExplanation:
              "Organized cybercriminals are groups that operate like businesses, using ransomware and phishing to steal money and data.",
            simpleExplanationTl:
              "Mga grupong kriminal ang organized cybercriminals na nagpapatakbo na parang negosyo at gumagamit ng ransomware at phishing upang magnakaw ng pera at data.",
            accentColor: "red",
          },

          {
            id: "sec-6-Nationstate-Actors",
            badge: "Threat Actor 2 • SLIDE 25",
            title: "Nation-State Actors (State-Sponsored Hackers)",
            titleTl: "Mga Nation-State Actors (State-Sponsored Hackers)",
            description:
            "Motivation: To steal secrets from other countries, disrupt keyservices (like power grids), or gain political advantages\n\n Characteristics: Highly trained groups working directly for a national government. \n\n Methods: They have massive budgets and endless time. They break into networks quietly, stay hidden for months or years, anduse secret flaws in software that no one else knows about yet.",
            descriptionTl:
              "Motibo: Magnakaw ng mga lihim mula sa ibang bansa, guluhin ang mahahalagang serbisyo gaya ng power grid, o magkaroon ng kalamangan sa politika.\n\n Mga katangian: Mga grupong lubos na sinanay at direktang nagtatrabaho para sa isang pambansang pamahalaan.\n\n Mga pamamaraan: Malalaki ang kanilang budget at marami silang panahong magplano. Palihim silang pumapasok sa mga network, nagtatago nang ilang buwan o taon, at gumagamit ng mga kahinaan sa software na hindi pa alam ng iba.",
            simpleExplanation:
              "Nation-State actors are highly trained groups working directly for a national government.",
            simpleExplanationTl:
              "Mga grupong lubos na sinanay at direktang nagtatrabaho para sa isang pambansang pamahalaan ang nation-state actors.",
            accentColor: "red",
          },

          
          {
            id: "sec-6-Hacktivists",
            badge: "Threat Actor 3 • SLIDE 26",
            title: "Hacktivists (Online Protesters)",
            titleTl: "Mga Hacktivist ( Online Protesters)",
            description:
            "Motivation: To steal secrets from other countries, disrupt keyservices (like power grids), or gain political advantages\n\n Characteristics: Highly trained groups working directly for a national government. \n\n Methods: They have massive budgets and endless time. They break into networks quietly, stay hidden for months or years, anduse secret flaws in software that no one else knows about yet.",
            descriptionTl:
              "Motibo: Magnakaw ng mga lihim mula sa ibang bansa, guluhin ang mahahalagang serbisyo gaya ng power grid, o magkaroon ng kalamangan sa politika.\n\n Mga katangian: Mga grupong lubos na sinanay at direktang nagtatrabaho para sa isang pambansang pamahalaan.\n\n Mga pamamaraan: Malalaki ang kanilang budget at marami silang panahong magplano. Palihim silang pumapasok sa mga network, nagtatago nang ilang buwan o taon, at gumagamit ng mga kahinaan sa software na hindi pa alam ng iba.",
            simpleExplanation:
              "Nation-State actors are highly trained groups working directly for a national government.",
            simpleExplanationTl:
              "Mga grupong lubos na sinanay at direktang nagtatrabaho para sa isang pambansang pamahalaan ang nation-state actors.",
            accentColor: "red",
          },

          {
            id: "sec-6-Insider-Threats",
            badge: "Threat Actor 4 • SLIDE 27",
            title: "Insider Threats",
            titleTl: "Insider Threats",
            description:
            "Motivation: Revenge, a payout from an outsider, or simply by making an honest mistake\n\n Characteristics: Current or former employees, contractors, or business partners. \n\n Methods: Methods: Because they already have keys to the front door, they don't need to break in—they can simply download confidential files onto a flash drive or accidentally leave a database exposed to the public.",
            descriptionTl:
              "Motibo: Paghihiganti, bayad mula sa isang tagalabas, o simpleng pagkakamali.\n\n Mga katangian: Kasalukuyan o dating empleyado, contractor, o business partner.\n\n Mga pamamaraan: Dahil may lehitimo na silang access, hindi na nila kailangang pasukin ang system. Maaari nilang kopyahin ang mga kumpidensyal na file sa USB drive o hindi sinasadyang ilantad sa publiko ang database.",
            simpleExplanation:
              "Insider threats are current or former employees, contractors, or business partners who misuse their access to steal or expose confidential information.",
            simpleExplanationTl:
              "Ang insider threat ay kasalukuyan o dating empleyado, contractor, o business partner na umaabuso sa access upang magnakaw o maglantad ng kumpidensyal na impormasyon.",
            accentColor: "red",
          },

          {
            id: "sec-6-Script-Kiddies",
            badge: "Threat Actor 5 • SLIDE 28",
            title: "Script Kiddies and Amateurs (Curious Hackers)",
            titleTl: "Script Kiddies at Amateurs (Curious Hackers)",
            description:
            "Motivation: Boredom, showing off to friends, or testing their technical skills\n\n Characteristics: Beginners using pre-made hacking tools they downloaded from the internet \n\n Methods: Methods: Because they already have keys to the front door, they don't need to break in—they can simply download confidential files onto a flash drive or accidentally leave a database exposed to the public.",
            descriptionTl:
              "Motibo: Pagkabagot, pagpapakitang-gilas sa mga kaibigan, o pagsubok sa kanilang teknikal na kakayahan.\n\n Mga katangian: Mga baguhang gumagamit ng mga nakahandang hacking tool na dina-download nila mula sa internet.\n\n Mga pamamaraan: Dahil may lehitimo na silang access, hindi na nila kailangang pasukin ang system. Maaari nilang kopyahin ang mga kumpidensyal na file sa USB drive o hindi sinasadyang ilantad sa publiko ang database.",
            simpleExplanation:
              "Insider threats are current or former employees, contractors, or business partners who misuse their access to steal or expose confidential information.",
            simpleExplanationTl:
              "Ang insider threat ay kasalukuyan o dating empleyado, contractor, o business partner na umaabuso sa access upang magnakaw o maglantad ng kumpidensyal na impormasyon.",
            accentColor: "red",
          },


        ],
      },
      {
        id: "ch-07-attacks-countermeasures",
        number: "07",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Cybersecurity Attacks & Countermeasures",
        titleTl: "Mga Teknikal na Pag-atake at Paano Ito Pinipigilan",
        slideRange: "Slides 29-32",
        durationMinutes: 4,
        isImplemented: true,
        summary:
          "Technical breakdown of DDoS, Social Engineering, Cryptojacking, Ransomware backups, and Backdoor Code Testing (SAST/DAST/HAST).",
        summaryTl:
          "Madaling paliwanag tungkol sa DDoS, Social Engineering, Cryptojacking, Ransomware backups, at Code Testing (SAST/DAST/HAST).",
        video: {
          src: "/assets/videos/ch-07.mp4",
          title: "Video Lesson: Cybersecurity Attacks & Countermeasures",
          titleTl: "Video Lesson: Mga Teknikal na Pag-atake at Paano Ito Pinipigilan",
          caption: "Watch this 6-minute video lesson on cybersecurity attacks and countermeasures before completing the checkpoint below.",
          captionTl: "Panoorin ang 6-minutong video lesson na ito tungkol sa mga pag-atake sa cybersecurity at mga paraan para pigilan ang mga ito bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "06:33",
        },
        checkpoint: {
          badge: "CHAPTER 07 CHECKPOINT • SLIDES 29-32",
          prompt: "Choose the Accurate Attack and Defense Pairings",
          promptTl: "Piliin ang Tamang Paglalarawan ng mga Atake at Depensa",
          instruction:
            "Select the 2 accurate statements about cyberattacks and their countermeasures:",
          instructionTl:
            "Piliin ang 2 tamang pahayag tungkol sa cyberattack at mga panlaban dito:",
          items: [
            {
              id: "chk-7-ddos",
              label:
                "A DDoS attack overwhelms a service with traffic; filtering and load balancing can help mitigate it.",
              labelTl:
                "Pinupuno ng DDoS attack ng sobrang traffic ang isang serbisyo; makakatulong ang traffic filtering at load balancing para mabawasan ito.",
              isCorrect: true,
              feedback:
                "Correct (Slide 30). DDoS attacks target availability, and traffic filtering and load balancers can help manage the traffic.",
              feedbackTl:
                "Tama (Slide 30). Inaatake ng DDoS ang availability ng serbisyo; makakatulong ang traffic filtering at load balancer sa pamamahala ng traffic.",
            },
            {
              id: "chk-7-ransomware",
              label:
                "Ransomware encrypts files and demands payment; regular offsite backups and system patching are important defenses.",
              labelTl:
                "Ini-encrypt ng ransomware ang mga file at humihingi ng bayad; mahalagang depensa ang regular na offsite backup at pag-update ng system.",
              isCorrect: true,
              feedback:
                "Correct (Slide 32). Offsite backups and patching help reduce ransomware impact and risk.",
              feedbackTl:
                "Tama (Slide 32). Nakakatulong ang offsite backup at pag-update ng system para mabawasan ang epekto at panganib ng ransomware.",
            },
            {
              id: "chk-7-cryptojacking",
              label:
                "Cryptojacking encrypts files and asks the user to pay for a decryption key.",
              labelTl:
                "Ini-encrypt ng cryptojacking ang mga file at pinagbabayad ang user para makuha ang decryption key.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 31). Cryptojacking secretly uses a device's computing resources to mine cryptocurrency; file encryption and ransom demands describe ransomware.",
              feedbackTl:
                "Mali (Slide 31). Palihim na ginagamit ng cryptojacking ang computing resources ng device para magmina ng cryptocurrency; ransomware ang nag-e-encrypt ng files at humihingi ng bayad.",
            },
            {
              id: "chk-7-social-engineering",
              label:
                "Social engineering is only a network traffic attack and does not rely on deceiving people.",
              labelTl:
                "Network traffic attack lamang ang social engineering at hindi ito gumagamit ng panlilinlang sa mga tao.",
              isCorrect: false,
              feedback:
                "Incorrect (Slide 31). Social engineering relies on deceiving people through messages, calls, or texts.",
              feedbackTl:
                "Mali (Slide 31). Umaasa ang social engineering sa panlilinlang gamit ang mga mensahe, tawag, o text.",
            },
          ],
        },
        sections: [

          {
            id: "sec-7-DDoS",
            badge: "Attack 1 • SLIDE 30",
            title: "DDoS Attacks (Distributed Denial of Service)",
            titleTl: "Mga Atake ng DDoS (Distributed Denial of Service)",
            description:
            "Flooding networks or systems with traffic to make them unavailable. Types include volumetric attacks (saturating bandwidth), protocol attacks (exhausting device resources, like Smurf attacks using ICMP), and application layer attacks (slowly consuming web server connections, like Slowloris). Defenders use traffic filtering, machine learning tools, and load balancers.",
            descriptionTl:
              "Pagbaha sa network o system ng traffic upang hindi ito magamit. Kabilang dito ang volumetric attack (pagpuno sa bandwidth), protocol attack (pag-ubos sa resources ng device, gaya ng Smurf attack na gumagamit ng ICMP), at application-layer attack (unti-unting pag-ubos sa mga koneksyon ng web server, gaya ng Slowloris). Gumagamit ang mga tagapagtanggol ng traffic filtering, machine-learning tool, at load balancer.",
            simpleExplanation:
              "DDoS attacks overwhelm a network or system with traffic, making it unavailable to users. Defenders use traffic filtering, machine learning tools, and load balancers to mitigate these attacks.",
            simpleExplanationTl:
              "Binabaha ng DDoS attack ng traffic ang network o system hanggang hindi na ito magamit ng mga user. Gumagamit ang mga tagapagtanggol ng traffic filtering, machine-learning tool, at load balancer para mabawasan ang epekto ng mga atakeng ito.",
            accentColor: "red",
          },

          {
            id: "sec-7-Social-Engineering",
            badge: "Attack 2 • SLIDE 31",
            title: "Social Engineering Attacks (Phishing, Vishing, Smishing)",
            titleTl: "Mga Atake ng Social Engineering (Phishing, Vishing, Smishing)",
            description:
            "Tricking people into revealing sensitive info using deceptive communications. Phishing uses email, vishing uses phone calls, and smishing uses text messages. Defense relies heavily on user training and multifactor authentication (MFA).",
            descriptionTl:
              "Panlilinlang sa mga tao upang ibunyag ang sensitibong impormasyon gamit ang mapanlinlang na komunikasyon. Email ang ginagamit sa phishing, tawag sa telepono sa vishing, at text message sa smishing. Mahalaga sa depensa ang pagsasanay sa mga user at paggamit ng multi-factor authentication (MFA).",
            simpleExplanation:
              "Social engineering attacks deceive people into revealing sensitive information. Defense relies on user training and multifactor authentication.",
            simpleExplanationTl:
              "Nililinlang ng social engineering attack ang mga tao upang ibunyag ang sensitibong impormasyon. Mahalaga sa pag-iwas dito ang pagsasanay sa mga user at paggamit ng multi-factor authentication.",
            accentColor: "red",
          },

          {
            id: "sec-7-Cryptojacking",
            badge: "Attack 3 • SLIDE 31",
            title: "Cryptojacking",
            titleTl: "Cryptojacking",
            description:
            "Secretly installing malware on a target system or cloud server to minecryptocurrency, consuming high levels of computing power andincurring massive costs.",
            descriptionTl:
              "Palihim na paglalagay ng malware sa system o cloud server upang magmina ng cryptocurrency. Kumokonsumo ito ng malaking computing power at maaaring magdulot ng mataas na gastos.",
            simpleExplanation:
              "Cryptojacking involves secretly installing malware to mine cryptocurrency, consuming significant computing resources and incurring high costs.",
            simpleExplanationTl:
              "Ang cryptojacking ay palihim na paglalagay ng malware upang magmina ng cryptocurrency, na umuubos ng maraming computing resource at maaaring magdulot ng malaking gastos.",
            accentColor: "red",
          },

          {
            id: "sec-7-Ransomware",
            badge: "Attack 4 • SLIDE 32",
            title: "Ransomware",
            titleTl: "Ransomware",
            description:
            "Malware that encrypts a victim's files and demands payment for the decryption key. Regular offsite backups and system patching are essential defenses",
            descriptionTl:
              "Malware na nag-e-encrypt ng mga file ng biktima at humihingi ng bayad kapalit ng decryption key. Mahahalagang depensa ang regular na offsite backup at paglalagay ng mga update sa system.",
            simpleExplanation:
              "Ransomware is malware that encrypts files and demands payment for the decryption key. Regular offsite backups and system patching are essential defenses.",
            simpleExplanationTl:
              "Ang ransomware ay malware na nag-e-encrypt ng mga file at humihingi ng bayad para sa decryption key. Mahahalagang depensa ang regular na offsite backup at paglalagay ng mga update sa system.",
            accentColor: "red",
          },

          {
            id: "sec-7-Backdoor-Code-Testing",
            badge: "Attack 5 • SLIDE 32",
            title: "Backdoor Exploits and Code Testing",
            titleTl: "Backdoor Exploits at Code Testing",
            description:
            "Hidden entry points in software. Organizations find them usingtesting techniques: Static (SAST - reviewing source code), Dynamic(DAST - testing running software), and Hybrid (HAST - combiningboth)",
            descriptionTl:
              "Mga nakatagong pasukan sa software. Natutukoy ito ng mga organisasyon gamit ang iba't ibang paraan ng pagsusuri: Static (SAST - pagsusuri ng source code), Dynamic (DAST - pagsubok sa tumatakbong software), at Hybrid (HAST - pagsasama ng dalawang paraan).",
            simpleExplanation:
              "Backdoor exploits are hidden entry points in software. Organizations find them using testing techniques: Static (SAST - reviewing source code), Dynamic (DAST - testing running software), and Hybrid (HAST - combining both)",
            simpleExplanationTl:
              "Ang backdoor exploit ay nakatagong pasukan sa software. Natutukoy ito ng mga organisasyon gamit ang mga paraan ng pagsusuri: Static (SAST - pagsusuri ng source code), Dynamic (DAST - pagsubok sa tumatakbong software), at Hybrid (HAST - pagsasama ng dalawang paraan).",
            accentColor: "red",
          },



        ],
      },
      {
        id: "ch-08-role-practices-malware",
        number: "08",
        part: "Part II: Threat Intelligence & Technical Depth",
        title: "Role-Categorized Data Protection & Malware Signs",
        titleTl: "Gabay para sa Branch vs. HQ at 8 Senyales ng Malware",
        slideRange: "Slides 33-38",
        durationMinutes: 4,
        isImplemented: true,
        summary:
          "Tailored daily checklists for Branch/Cashier vs. HQ/Office staff, plus the 8 warning signs of malware infection on any device.",
        summaryTl:
          "Araw-araw na checklist para sa Branch Kahera at HQ Office Staff, at ang 8 senyales na may virus o malware ang computer.",
        video: {
          src: "/assets/videos/ch-08.mp4",
          title: "Video Lesson: Role-Categorized Data Protection & Malware Signs",
          titleTl: "Video Lesson: Gabay para sa Branch vs. HQ at 8 Senyales ng Malware",
          caption: "Watch this 12-minute video lesson on data protection practices and malware signs before completing the checkpoint below.",
          captionTl: "Panoorin ang 12-minutong video lesson na ito tungkol sa mga paraan ng pagprotekta ng data at mga senyales ng malware bago sagutan ang checkpoint sa ibaba.",
          durationLabel: "12:10",
        },
        checkpoint: {
          badge: "CHAPTER 08 CHECKPOINT • SLIDES 33-38",
          prompt: "Choose the Safe Practices and Malware Warning Signs",
          promptTl: "Piliin ang Ligtas na Gawi at mga Babala ng Malware",
          instruction:
            "Select the 3 statements that correctly describe safe practices or malware warning signs:",
          instructionTl:
            "Piliin ang 3 pahayag na tamang naglalarawan ng ligtas na gawi o mga babala ng malware:",
          items: [
            {
              id: "chk-8-branch-security",
              label:
                "At a branch, keep phones and cameras away from payment counters and inspect card readers for tampering.",
              labelTl:
                "Sa branch, ilayo ang mga cellphone at camera sa payment counter at suriin kung pinakialaman ang card reader.",
              isCorrect: true,
              feedback:
                "Correct (Slide 34). A clean counter and regular card-reader inspections help protect payment data.",
              feedbackTl:
                "Tama (Slide 34). Nakakatulong ang malinis na counter at regular na pagsusuri sa card reader para maprotektahan ang payment data.",
            },
            {
              id: "chk-8-office-security",
              label:
                "For office accounts, use unique passwords and MFA, keep software updated, and verify links and website URLs.",
              labelTl:
                "Para sa mga office account, gumamit ng magkakaibang password at MFA, mag-update ng software, at suriin ang links at URL ng website.",
              isCorrect: true,
              feedback:
                "Correct (Slide 35). Unique passwords, MFA, updates, phishing awareness, and URL checks are important office safeguards.",
              feedbackTl:
                "Tama (Slide 35). Mahahalagang proteksyon sa opisina ang magkakaibang password, MFA, updates, pag-iwas sa phishing, at pagsuri ng URL.",
            },
            {
              id: "chk-8-malware-signs",
              label:
                "Sluggish performance, frequent crashes, unusual pop-ups, or high network activity while idle can be malware warning signs.",
              labelTl:
                "Maaaring babala ng malware ang mabagal na performance, madalas na pag-crash, kakaibang pop-up, o mataas na network activity habang walang gumagamit.",
              isCorrect: true,
              feedback:
                "Correct (Slides 37-38). These unusual changes can indicate malware; report them and follow the proper response process.",
              feedbackTl:
                "Tama (Slides 37-38). Maaaring senyales ng malware ang mga hindi pangkaraniwang pagbabagong ito; i-report ang mga ito at sundin ang tamang proseso.",
            },
            {
              id: "chk-8-ignore-alerts",
              label:
                "If security software is disabled or the browser redirects unexpectedly, ignore it and continue entering work credentials.",
              labelTl:
                "Kung naka-disable ang security software o biglang nagre-redirect ang browser, huwag itong pansinin at ipagpatuloy ang paglalagay ng work credentials.",
              isCorrect: false,
              feedback:
                "Incorrect (Slides 37-38). Disabled security tools and unexpected browser redirects are warning signs; do not enter credentials and report the issue.",
              feedbackTl:
                "Mali (Slides 37-38). Babala ang naka-disable na security tool at biglaang browser redirect; huwag maglagay ng credentials at i-report ang problema.",
            },
          ],
        },
        sections: [

        {
            id: "sec-8-Branch-Cashier-Focus",
            badge: "Practice 1 • SLIDE 34",
            title: "Branch and Cashier Focus",
            titleTl: "Branch at Cashier Focus",
            description:
            "Clean Terminal Area: Keep smartphones and loose cameras away from payment counters.\n\n Physical Inspection: Check card readers daily for skimmer overlays or broken seals \n\n Public Terminals: If using shared computers, always use private /incognito browsing mode. \n\n No Password Sharing: Never write register PINs or passwords under keyboards",
            descriptionTl:
              "Malinis na counter: Ilayo ang mga smartphone at hiwalay na camera sa mga payment counter.\n\n Pisikal na pagsusuri: Suriin araw-araw kung may nakakabit na skimmer o sirang security seal ang mga card reader.\n\n Pampublikong computer: Kung gumagamit ng shared computer, laging gumamit ng private/incognito browsing mode.\n\n Huwag magbahagi ng password: Huwag isulat ang PIN o password ng register sa ilalim ng keyboard.",
            simpleExplanation:
              "Remembering to keep the terminal area clean, inspecting card readers, using private browsing on public terminals, and not sharing passwords are key practices for branch and cashier staff.",
            simpleExplanationTl:
              "Mahahalagang gawi para sa mga empleyado sa branch at kahera ang pagpapanatiling malinis ng paligid ng terminal, regular na pagsusuri sa card reader, paggamit ng private browsing sa pampublikong computer, at hindi pagbabahagi ng password.",
            accentColor: "red",
          },

          {
            id: "sec-8-HQ-Office-Focus",
            badge: "Practice 2 • SLIDE 35",
            title: "HQ and General Office Focus HQ/Office",
            titleTl: "HQ at General Office Focus",
            description:
            "Unique Passwords & MFA: Use separate complex passwords & multi-factor authentication for every system/site\n\nPhishing Guard: Don't open links or download attachments from unknown senders\n\n Software Updates: Keep browser, OS, and anti-virus software updated promptly \n\n URL Verification: Ensure websites use HTTPS:// instead of HTTP before typing credentials",
            descriptionTl:
              "Natatanging password at MFA: Gumamit ng magkakaiba at matitibay na password at multi-factor authentication para sa bawat system o site.\n\n Pag-iwas sa phishing: Huwag magbukas ng link o mag-download ng attachment mula sa hindi kilalang sender.\n\n Mga update ng software: Agad na i-update ang browser, operating system, at antivirus software.\n\n Pagsuri ng URL: Tiyaking HTTPS:// ang ginagamit ng website sa halip na HTTP bago maglagay ng login details.",
            simpleExplanation:
              "Remembering to use unique passwords and multi-factor authentication, avoiding phishing attempts, keeping software updated, and verifying URLs are key practices for HQ and general office staff.",
            simpleExplanationTl:
              "Mahahalagang gawi para sa mga empleyado ng HQ at opisina ang paggamit ng magkakaibang password at multi-factor authentication, pag-iwas sa phishing, pagpapanatiling updated ng software, at pagsuri ng URL.",
            accentColor: "red",
          },

          {
            id: "sec-8-Identify-Malware",
            badge: "Practice 3 • SLIDE 37-38",
            title: "How to Identify Malware",
            titleTl: "Paano ma-identify ang Malware",
            description:
            "1. Sluggish System Performance: There's a noticeable lag when launching apps or doing routine tasks.\n\n2. Frequent Crashes: Unexpected system crashes or blue screen errors.\n\n3. Unusual Pop-Ups or Ads: Misleading offers or suspicious links may direct users to harmful websites.\n\n4. Installation of Unknown Programs: Malicious programs may download automatically without consent, such as cryptocurrency miners or spyware.\n\n5. Browser Redirects or New Toolbars: Search engines, toolbars, or extensions appear without approval.\n\n6. Disabled Security Software.\n\n7. High Network Activity When the Device Is Idle: Unexpected spikes in network traffic when you're not using the device.\n\n8. Unauthorized Access or Account Changes: Unfamiliar login notifications or sudden password changes.",       
            descriptionTl: 
            "1. Mabagal na system: Kapansin-pansin ang pagbagal sa pagbukas ng app o pagsasagawa ng karaniwang gawain.\n\n2. Madalas na pag-crash: Biglaang pag-crash ng system o paglitaw ng blue screen error.\n\n3. Kakaibang pop-up o ad: Maaaring magdala sa mapaminsalang website ang mapanlinlang na alok o kahina-hinalang link.\n\n4. Pag-install ng hindi kilalang programa: Maaaring awtomatikong ma-download nang walang pahintulot ang mapaminsalang programa, gaya ng cryptocurrency miner o spyware.\n\n5. Pag-redirect ng browser o bagong toolbar: May search engine, toolbar, o extension na lumilitaw nang walang pahintulot.\n\n6. Naka-disable ang security software.\n\n7. Mataas na network activity habang walang gumagamit: Biglang tumataas ang network traffic kahit hindi ginagamit ang device.\n\n8. Hindi awtorisadong access o pagbabago sa account: May hindi kilalang login notification o biglaang pagbabago ng password.",
            simpleExplanation:
              "Remembering to use unique passwords and multi-factor authentication, avoiding phishing attempts, keeping software updated, and verifying URLs are key practices for HQ and general office staff.",
            simpleExplanationTl:
              "Ang mga hindi pangkaraniwang sintomas gaya ng pagbagal ng system, madalas na pag-crash, kakaibang pop-up, naka-disable na security software, at hindi kilalang pagbabago sa account ay maaaring senyales ng malware. I-report agad ang mga ito at sundin ang tamang proseso.",
            accentColor: "red",
          },


        ],
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
