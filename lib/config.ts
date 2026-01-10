// Site Configuration for Morrison & Associates - Premier Law Firm
// Customize this file to match your firm's information

export const siteConfig = {
  name: "Morrison & Associates",
  tagline: "Justice. Integrity. Results.",
  description: "Morrison & Associates is a premier law firm delivering exceptional legal representation in personal injury, criminal defense, family law, and civil litigation. Our award-winning attorneys have secured over $500 million in verdicts and settlements for our clients.",
  founded: "1985",
  email: "contact@morrisonlaw.com",
  phone: "(800) 555-LAWS",
  fax: "(212) 555-0101",

  // Hero section
  hero: {
    headline: "Justice. Integrity. Results.",
    subheadline: "When everything is on the line, trust the attorneys who have secured over $500 million for our clients.",
    videoUrl: "https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=175", // Placeholder video URL
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop",
  },

  // Social media links
  social: {
    linkedin: "https://linkedin.com/company/morrison-associates",
    twitter: "https://twitter.com/morrisonlaw",
    facebook: "https://facebook.com/morrisonlaw",
    instagram: "https://instagram.com/morrisonlaw",
  },

  // Office locations
  locations: [
    {
      id: "new-york",
      name: "New York (Headquarters)",
      address: "One World Trade Center, 85th Floor",
      city: "New York",
      state: "NY",
      zip: "10007",
      phone: "(212) 555-0100",
      email: "newyork@morrisonlaw.com",
      hours: "Monday - Friday: 8:00 AM - 7:00 PM",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "los-angeles",
      name: "Los Angeles",
      address: "350 S. Grand Avenue, Suite 3600",
      city: "Los Angeles",
      state: "CA",
      zip: "90071",
      phone: "(310) 555-0200",
      email: "la@morrisonlaw.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "chicago",
      name: "Chicago",
      address: "Willis Tower, 233 S. Wacker Drive",
      city: "Chicago",
      state: "IL",
      zip: "60606",
      phone: "(312) 555-0300",
      email: "chicago@morrisonlaw.com",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      mapUrl: "https://maps.google.com",
    },
  ],

  // Navigation links
  navigation: [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/services" },
    { name: "Our Attorneys", href: "/team" },
    { name: "Case Results", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Firm statistics
  stats: [
    { value: "$500M+", label: "Recovered for Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "40+", label: "Years of Experience" },
    { value: "10,000+", label: "Cases Won" },
  ],

  // Firm values
  values: [
    {
      title: "Justice",
      description: "We fight relentlessly for the rights of our clients, holding the powerful accountable and ensuring every voice is heard in the pursuit of justice.",
    },
    {
      title: "Integrity",
      description: "Our reputation is built on unwavering ethical standards. We provide honest counsel and transparent communication throughout every case.",
    },
    {
      title: "Results",
      description: "Our track record speaks for itself. We deliver outcomes that matter, securing the compensation and resolution our clients deserve.",
    },
    {
      title: "Compassion",
      description: "We understand the challenges our clients face. Every case receives personalized attention with the empathy and dedication it deserves.",
    },
  ],

  // Case Results for Ticker
  caseResults: [
    { amount: "$12.5M", type: "Medical Malpractice Verdict" },
    { amount: "$8.7M", type: "Wrongful Death Settlement" },
    { amount: "$4.3M", type: "Personal Injury Verdict" },
    { amount: "$6.2M", type: "Product Liability Settlement" },
    { amount: "$3.8M", type: "Auto Accident Recovery" },
    { amount: "$15.2M", type: "Class Action Settlement" },
    { amount: "$2.1M", type: "Workplace Injury Award" },
    { amount: "$5.5M", type: "Premises Liability Verdict" },
  ],

  // Credentials and affiliations
  credentials: [
    { name: "American Bar Association", abbreviation: "ABA" },
    { name: "American Association for Justice", abbreviation: "AAJ" },
    { name: "National Trial Lawyers Top 100", abbreviation: "NTL" },
    { name: "Million Dollar Advocates Forum", abbreviation: "MDAF" },
    { name: "Super Lawyers", abbreviation: "SL" },
    { name: "Best Lawyers in America", abbreviation: "BL" },
    { name: "Martindale-Hubbell AV Rated", abbreviation: "AV" },
    { name: "State Bar Association", abbreviation: "SBA" },
  ],

  // Awards and recognition
  awards: [
    { year: "2025", title: "Top 100 Trial Lawyers", organization: "National Trial Lawyers" },
    { year: "2025", title: "Best Law Firm - Personal Injury", organization: "U.S. News & World Report" },
    { year: "2024", title: "Super Lawyers - Rising Star", organization: "Super Lawyers Magazine" },
    { year: "2024", title: "AV Preeminent Rating", organization: "Martindale-Hubbell" },
    { year: "2024", title: "Million Dollar Advocates", organization: "Million Dollar Advocates Forum" },
    { year: "2023", title: "Client Champion Gold", organization: "Martindale-Hubbell" },
  ],

  // Award logos for display
  awardLogos: [
    { name: "Super Lawyers", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
    { name: "Best Lawyers", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
    { name: "National Trial Lawyers", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
    { name: "AV Preeminent", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
    { name: "Million Dollar Forum", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
    { name: "U.S. News Best Lawyers", image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=200&h=100&fit=crop" },
  ],
};

// Team Members / Attorneys
export const teamMembers = [
  {
    id: "william-morrison",
    slug: "william-morrison",
    name: "William Morrison",
    title: "Founding Partner",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
    email: "wmorrison@morrisonlaw.com",
    phone: "(212) 555-0110",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., Harvard Law School, magna cum laude",
      "B.A., Yale University, Political Science",
    ],
    barAdmissions: ["New York", "California", "District of Columbia"],
    practiceAreas: ["Personal Injury", "Medical Malpractice", "Complex Litigation"],
    credentials: ["Super Lawyers", "Best Lawyers in America", "AV Preeminent"],
    bio: "William Morrison founded Morrison & Associates in 1985 with a singular vision: to provide elite legal representation to individuals and families facing life's most challenging moments. With over 40 years of trial experience, he has secured over $200 million in verdicts and settlements for his clients.",
    highlights: [
      "Secured $12.5M medical malpractice verdict",
      "Named 'Trial Lawyer of the Year' by NYSTLA (2024)",
      "Lead counsel in landmark product liability case",
      "Former President, New York State Trial Lawyers Association",
    ],
    cases: [
      "Medical Malpractice Verdict ($12.5M)",
      "Pharmaceutical Class Action ($45M settlement)",
      "Construction Accident Recovery ($8.2M)",
    ],
  },
  {
    id: "catherine-hayes",
    slug: "catherine-hayes",
    name: "Catherine Hayes",
    title: "Senior Partner",
    role: "Head of Personal Injury",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
    email: "chayes@morrisonlaw.com",
    phone: "(212) 555-0120",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., Columbia Law School, Order of the Coif",
      "B.A., Stanford University, Economics",
    ],
    barAdmissions: ["New York", "New Jersey", "Federal Courts"],
    practiceAreas: ["Personal Injury", "Wrongful Death", "Insurance Bad Faith"],
    credentials: ["Super Lawyers", "National Trial Lawyers Top 100", "Million Dollar Advocates"],
    bio: "Catherine Hayes has dedicated her career to fighting for injury victims and their families. Her aggressive litigation style and compassionate client approach have resulted in hundreds of millions in recoveries. She is known for taking on complex cases that other firms decline.",
    highlights: [
      "$8.7M wrongful death settlement",
      "100+ jury trials with 96% success rate",
      "Named 'Woman of Influence' by NYWBA",
      "Featured in The American Lawyer",
    ],
    cases: [
      "Wrongful Death Settlement ($8.7M)",
      "Trucking Accident Verdict ($6.3M)",
      "Premises Liability Recovery ($4.1M)",
    ],
  },
  {
    id: "marcus-thompson",
    slug: "marcus-thompson",
    name: "Marcus Thompson",
    title: "Partner",
    role: "Criminal Defense Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    email: "mthompson@morrisonlaw.com",
    phone: "(212) 555-0130",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., NYU School of Law",
      "B.A., Howard University, Criminal Justice",
    ],
    barAdmissions: ["New York", "Federal Courts", "Second Circuit Court of Appeals"],
    practiceAreas: ["Criminal Defense", "White Collar Crime", "Federal Defense"],
    credentials: ["Super Lawyers", "Best Lawyers", "NACDL Member"],
    bio: "Marcus Thompson is a former federal prosecutor who now brings his extensive trial experience to defending clients facing serious criminal charges. His insider knowledge of prosecution tactics and relationships within the legal community provide significant advantages for his clients.",
    highlights: [
      "Former Assistant U.S. Attorney, SDNY",
      "250+ criminal cases defended",
      "Multiple acquittals in high-profile cases",
      "Expert commentator on CNN Legal",
    ],
    cases: [
      "Federal Fraud Defense (Acquittal)",
      "High-Profile DUI Defense (Dismissal)",
      "Complex Financial Crimes Defense",
    ],
  },
  {
    id: "sophia-rodriguez",
    slug: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    title: "Partner",
    role: "Family Law Chair",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
    email: "srodriguez@morrisonlaw.com",
    phone: "(212) 555-0140",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., Georgetown University Law Center",
      "B.A., Princeton University, Psychology",
    ],
    barAdmissions: ["New York", "Connecticut", "Family Court"],
    practiceAreas: ["Family Law", "Divorce", "Child Custody", "High-Asset Division"],
    credentials: ["Super Lawyers", "Best Lawyers", "AAML Fellow"],
    bio: "Sophia Rodriguez guides clients through the most challenging transitions in their lives with skill and compassion. She specializes in high-net-worth divorces, complex custody matters, and international family law disputes. Her collaborative approach often achieves favorable outcomes without protracted litigation.",
    highlights: [
      "Handled 500+ family law matters",
      "Expert in high-net-worth asset division",
      "Trained mediator and collaborative law practitioner",
      "Board Member, NYC Family Court Advisory Committee",
    ],
    cases: [
      "High-Net-Worth Divorce ($50M+ in assets)",
      "International Child Custody Resolution",
      "Complex Business Valuation Division",
    ],
  },
  {
    id: "david-chen",
    slug: "david-chen",
    name: "David Chen",
    title: "Partner",
    role: "Civil Litigation Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    email: "dchen@morrisonlaw.com",
    phone: "(212) 555-0150",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., UC Berkeley School of Law",
      "M.B.A., Wharton School of Business",
      "B.S., MIT, Engineering",
    ],
    barAdmissions: ["New York", "California", "Patent Bar"],
    practiceAreas: ["Civil Litigation", "Business Disputes", "Class Actions"],
    credentials: ["Super Lawyers", "Chambers USA", "Leading Lawyers"],
    bio: "David Chen combines legal expertise with business acumen to deliver exceptional results in complex civil litigation. His engineering background provides unique insight into technical disputes, while his MBA informs strategic approaches to business litigation.",
    highlights: [
      "Lead counsel in $15.2M class action",
      "Former in-house counsel at Fortune 500 company",
      "Published author on litigation strategy",
      "Frequent speaker at legal conferences",
    ],
    cases: [
      "Class Action Settlement ($15.2M)",
      "Commercial Dispute Victory ($7.8M)",
      "Contract Dispute Resolution ($4.5M)",
    ],
  },
  {
    id: "alexandra-wright",
    slug: "alexandra-wright",
    name: "Alexandra Wright",
    title: "Associate Partner",
    role: "Employment Law Specialist",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&h=800&fit=crop&crop=face",
    email: "awright@morrisonlaw.com",
    phone: "(212) 555-0160",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., University of Michigan Law School",
      "B.A., Spelman College, Labor Relations",
    ],
    barAdmissions: ["New York", "Illinois", "EEOC Certified"],
    practiceAreas: ["Employment Law", "Workplace Discrimination", "Wrongful Termination"],
    credentials: ["Super Lawyers Rising Star", "Best Lawyers: Ones to Watch"],
    bio: "Alexandra Wright is a rising star in employment law, known for her tenacious advocacy for workers' rights. She has successfully represented employees in discrimination, harassment, and wrongful termination cases against some of the nation's largest employers.",
    highlights: [
      "Won $2.3M workplace discrimination verdict",
      "Successfully litigated class wage claims",
      "Former EEOC attorney",
      "Named 'Rising Star' by Super Lawyers",
    ],
    cases: [
      "Workplace Discrimination Verdict ($2.3M)",
      "Sexual Harassment Settlement ($1.8M)",
      "Wrongful Termination Recovery ($850K)",
    ],
  },
];

// Practice Areas / Services
export const practiceAreas = [
  {
    id: "personal-injury",
    slug: "personal-injury",
    name: "Personal Injury",
    shortDescription: "Aggressive representation for accident victims seeking maximum compensation.",
    description: "When you or a loved one has been injured due to someone else's negligence, you deserve attorneys who will fight relentlessly for your rights. Our personal injury team has recovered hundreds of millions of dollars for victims of car accidents, slip and falls, and other injuries.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    features: [
      "Car & Truck Accidents",
      "Motorcycle Accidents",
      "Slip & Fall Injuries",
      "Catastrophic Injuries",
      "Brain & Spinal Injuries",
      "Burn Injuries",
    ],
    teamLeads: ["catherine-hayes"],
  },
  {
    id: "medical-malpractice",
    slug: "medical-malpractice",
    name: "Medical Malpractice",
    shortDescription: "Holding healthcare providers accountable for preventable harm.",
    description: "Medical malpractice cases require specialized knowledge and extensive resources. Our attorneys work with leading medical experts to build compelling cases against negligent healthcare providers, hospitals, and pharmaceutical companies.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    features: [
      "Surgical Errors",
      "Misdiagnosis",
      "Birth Injuries",
      "Medication Errors",
      "Hospital Negligence",
      "Nursing Home Abuse",
    ],
    teamLeads: ["william-morrison"],
  },
  {
    id: "criminal-defense",
    slug: "criminal-defense",
    name: "Criminal Defense",
    shortDescription: "Protecting your rights, freedom, and future.",
    description: "Facing criminal charges can be terrifying. Our defense attorneys, including former prosecutors, bring unparalleled experience and aggressive advocacy to protect your rights and fight for the best possible outcome.",
    icon: "Scale",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&h=600&fit=crop",
    features: [
      "DUI/DWI Defense",
      "Drug Offenses",
      "White Collar Crime",
      "Federal Charges",
      "Assault & Battery",
      "Theft Crimes",
    ],
    teamLeads: ["marcus-thompson"],
  },
  {
    id: "family-law",
    slug: "family-law",
    name: "Family Law",
    shortDescription: "Compassionate guidance through life's most difficult transitions.",
    description: "Family legal matters require sensitivity and strategic thinking. Our family law attorneys guide clients through divorce, custody disputes, and other family matters with discretion and dedication to achieving the best outcomes.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    features: [
      "Divorce & Separation",
      "Child Custody",
      "Child Support",
      "Alimony/Spousal Support",
      "Property Division",
      "Prenuptial Agreements",
    ],
    teamLeads: ["sophia-rodriguez"],
  },
  {
    id: "civil-litigation",
    slug: "civil-litigation",
    name: "Civil Litigation",
    shortDescription: "Strategic advocacy in complex business and civil disputes.",
    description: "Our civil litigation team handles high-stakes disputes with sophistication and determination. From contract disputes to class actions, we provide comprehensive representation that protects your interests and achieves your objectives.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    features: [
      "Contract Disputes",
      "Business Litigation",
      "Class Actions",
      "Insurance Disputes",
      "Real Estate Litigation",
      "Professional Liability",
    ],
    teamLeads: ["david-chen"],
  },
  {
    id: "employment-law",
    slug: "employment-law",
    name: "Employment Law",
    shortDescription: "Fighting for workers' rights and fair treatment.",
    description: "Every worker deserves fair treatment and a safe workplace. Our employment attorneys represent employees who have faced discrimination, harassment, wrongful termination, and wage violations, holding employers accountable.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    features: [
      "Workplace Discrimination",
      "Sexual Harassment",
      "Wrongful Termination",
      "Wage & Hour Violations",
      "Retaliation Claims",
      "Employment Contracts",
    ],
    teamLeads: ["alexandra-wright"],
  },
];

// Case Studies / Success Stories
export const caseStudies = [
  {
    id: "medical-malpractice-verdict",
    slug: "medical-malpractice-verdict",
    title: "Medical Malpractice Verdict",
    client: "Confidential",
    industry: "Healthcare",
    practiceArea: "Medical Malpractice",
    value: "$12.5 Million",
    year: "2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    summary: "Secured landmark verdict for family of patient who suffered fatal complications due to surgical negligence.",
    challenge: "Our client's family lost a beloved husband and father due to preventable surgical complications that went unaddressed despite clear warning signs. The hospital and surgical team denied any wrongdoing.",
    solution: "Our team retained world-renowned surgical experts, conducted exhaustive discovery, and built an irrefutable case demonstrating multiple failures in the standard of care.",
    result: "After a three-week trial, the jury returned a $12.5 million verdict, one of the largest medical malpractice awards in the state that year.",
    teamMembers: ["william-morrison"],
  },
  {
    id: "wrongful-death-settlement",
    slug: "wrongful-death-settlement",
    title: "Wrongful Death Settlement",
    client: "Confidential",
    industry: "Transportation",
    practiceArea: "Personal Injury",
    value: "$8.7 Million",
    year: "2024",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    summary: "Achieved substantial settlement for family of victim killed in commercial trucking accident.",
    challenge: "A young mother was killed when a negligent commercial truck driver ran a red light. The trucking company had a history of safety violations but was represented by aggressive defense counsel.",
    solution: "We uncovered a pattern of safety violations, driver fatigue issues, and corporate negligence through strategic investigation and discovery.",
    result: "The case settled for $8.7 million, providing security for the victim's surviving children and sending a message about trucking safety.",
    teamMembers: ["catherine-hayes"],
  },
  {
    id: "class-action-settlement",
    slug: "class-action-settlement",
    title: "Class Action Settlement",
    client: "Class of 5,000+ Plaintiffs",
    industry: "Consumer Products",
    practiceArea: "Civil Litigation",
    value: "$15.2 Million",
    year: "2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    summary: "Led successful class action against manufacturer for defective consumer products.",
    challenge: "Thousands of consumers purchased products with known defects that the manufacturer concealed. Individual claims would be economically unfeasible to pursue.",
    solution: "We organized a class action, coordinated with regulatory authorities, and built an overwhelming case for corporate malfeasance.",
    result: "The $15.2 million settlement provided compensation to over 5,000 class members and required product recalls and safety improvements.",
    teamMembers: ["david-chen"],
  },
  {
    id: "federal-defense-acquittal",
    slug: "federal-defense-acquittal",
    title: "Federal Criminal Defense",
    client: "Confidential",
    industry: "Financial Services",
    practiceArea: "Criminal Defense",
    value: "Complete Acquittal",
    year: "2023",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    summary: "Secured full acquittal for executive facing federal fraud charges.",
    challenge: "Our client, a financial services executive, faced 12 federal fraud counts carrying potential sentences of 20+ years. The government's case included extensive documentation and multiple cooperating witnesses.",
    solution: "Through meticulous preparation, expert testimony, and aggressive cross-examination, we systematically dismantled the prosecution's narrative.",
    result: "After a five-week trial, the jury returned not guilty verdicts on all counts, completely vindicating our client.",
    teamMembers: ["marcus-thompson"],
  },
  {
    id: "high-asset-divorce",
    slug: "high-asset-divorce",
    title: "High-Net-Worth Divorce",
    client: "Confidential",
    industry: "Private Wealth",
    practiceArea: "Family Law",
    value: "$50M+ Asset Division",
    year: "2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    summary: "Successfully negotiated equitable division of complex marital estate including multiple businesses.",
    challenge: "Our client's spouse controlled a complex web of businesses, real estate holdings, and investments. Accurate valuation and discovery of hidden assets were essential.",
    solution: "We assembled a team of forensic accountants, business valuators, and investigators to uncover the true marital estate and build our case.",
    result: "Through strategic negotiation, we achieved a favorable settlement that protected our client's interests and provided for their children's future.",
    teamMembers: ["sophia-rodriguez"],
  },
  {
    id: "employment-discrimination",
    slug: "employment-discrimination",
    title: "Workplace Discrimination Victory",
    client: "Confidential",
    industry: "Corporate",
    practiceArea: "Employment Law",
    value: "$2.3 Million",
    year: "2024",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    summary: "Landmark verdict against Fortune 500 company for systemic discrimination.",
    challenge: "Our client faced years of discriminatory treatment, denial of promotions, and eventual termination after complaining to HR. The employer denied all allegations.",
    solution: "We gathered extensive evidence of discriminatory patterns, deposed key decision-makers, and presented a compelling narrative of systemic bias.",
    result: "The jury awarded $2.3 million in damages and sent a clear message about accountability for workplace discrimination.",
    teamMembers: ["alexandra-wright"],
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "After my accident, I was overwhelmed and didn't know where to turn. Morrison & Associates not only secured a settlement that exceeded my expectations, but they treated me like family throughout the entire process. They truly care about their clients.",
    author: "Jennifer Martinez",
    title: "Personal Injury Client",
    company: "Auto Accident Case - $1.2M Settlement",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    quote: "When I was facing federal charges that could have destroyed my life, Marcus Thompson and his team fought tirelessly for me. Their expertise, dedication, and compassion resulted in a complete acquittal. I owe them everything.",
    author: "Robert Chen",
    title: "Criminal Defense Client",
    company: "Federal Fraud Defense - Full Acquittal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote: "Going through a divorce with complex assets is incredibly stressful. Sophia Rodriguez guided me through every step with wisdom and compassion. She protected my interests while keeping the process as amicable as possible for our children.",
    author: "Patricia Williams",
    title: "Family Law Client",
    company: "High-Asset Divorce Resolution",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 4,
    quote: "After losing my husband to medical negligence, I didn't think I could fight a hospital. William Morrison and Catherine Hayes gave me hope and then delivered justice. The verdict won't bring him back, but it ensures accountability.",
    author: "Margaret Thompson",
    title: "Medical Malpractice Client",
    company: "Medical Malpractice - $12.5M Verdict",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

// About section content
export const aboutContent = {
  headline: "A Legacy of Excellence",
  subheadline: "Since 1985, Morrison & Associates has been the voice of the voiceless and the champion of the wronged.",
  story: `Founded by William Morrison in 1985, Morrison & Associates began with a simple mission: to provide exceptional legal representation to individuals and families who need it most.

What started as a two-person practice in a modest Manhattan office has grown into one of the region's most respected law firms, with offices in New York, Los Angeles, and Chicago. Our growth has been driven not by aggressive expansion, but by our unwavering commitment to our clients and the outstanding results we achieve.

Every member of our team shares a dedication to justice, integrity, and results. We take cases other firms won't touch. We fight battles others say can't be won. And time after time, we deliver outcomes that change our clients' lives.`,
  mission: "To provide world-class legal representation with unwavering dedication to justice, treating every client with the respect, compassion, and fierce advocacy they deserve.",
  vision: "To set the standard for legal excellence, client service, and ethical practice in every community we serve.",
};

// Helper functions
export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getTeamMembersByPracticeArea(practiceAreaSlug: string) {
  const area = getPracticeArea(practiceAreaSlug);
  if (!area) return [];
  return teamMembers.filter((member) => area.teamLeads.includes(member.slug));
}

export function getCaseStudiesByPracticeArea(practiceAreaSlug: string) {
  const area = getPracticeArea(practiceAreaSlug);
  if (!area) return [];
  return caseStudies.filter((study) => study.practiceArea === area.name);
}

export function getCaseStudiesByTeamMember(memberSlug: string) {
  return caseStudies.filter((study) => study.teamMembers.includes(memberSlug));
}
