// Site Configuration for Professional Services Firm
// Customize this file to match your firm's information

export const siteConfig = {
  name: "Sterling & Associates",
  tagline: "Excellence in Legal Representation",
  description: "Sterling & Associates is a premier law firm providing exceptional legal services in corporate law, litigation, real estate, and estate planning. Our experienced attorneys are committed to achieving the best outcomes for our clients.",
  founded: "1987",
  email: "contact@sterlinglaw.com",
  phone: "(212) 555-0100",
  fax: "(212) 555-0101",

  // Social media links
  social: {
    linkedin: "https://linkedin.com/company/sterling-associates",
    twitter: "https://twitter.com/sterlinglaw",
    facebook: "https://facebook.com/sterlinglaw",
  },

  // Office locations
  locations: [
    {
      id: "new-york",
      name: "New York (Headquarters)",
      address: "450 Park Avenue, 25th Floor",
      city: "New York",
      state: "NY",
      zip: "10022",
      phone: "(212) 555-0100",
      email: "newyork@sterlinglaw.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "washington-dc",
      name: "Washington D.C.",
      address: "1001 Pennsylvania Avenue NW, Suite 500",
      city: "Washington",
      state: "DC",
      zip: "20004",
      phone: "(202) 555-0200",
      email: "dc@sterlinglaw.com",
      hours: "Monday - Friday: 8:30 AM - 5:30 PM",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "boston",
      name: "Boston",
      address: "100 Federal Street, 20th Floor",
      city: "Boston",
      state: "MA",
      zip: "02110",
      phone: "(617) 555-0300",
      email: "boston@sterlinglaw.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      mapUrl: "https://maps.google.com",
    },
  ],

  // Navigation links
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],

  // Firm statistics
  stats: [
    { value: "35+", label: "Years of Experience" },
    { value: "500+", label: "Cases Won" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Attorneys" },
  ],

  // Firm values
  values: [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in every matter we handle, ensuring complete transparency and honesty with our clients.",
    },
    {
      title: "Excellence",
      description: "Our commitment to excellence drives us to deliver superior legal services, staying ahead of legal developments and industry best practices.",
    },
    {
      title: "Client Focus",
      description: "Every client receives personalized attention and strategic counsel tailored to their unique circumstances and objectives.",
    },
    {
      title: "Results",
      description: "We are relentlessly focused on achieving the best possible outcomes for our clients through thorough preparation and skilled advocacy.",
    },
  ],

  // Credentials and affiliations
  credentials: [
    { name: "American Bar Association", abbreviation: "ABA" },
    { name: "New York State Bar Association", abbreviation: "NYSBA" },
    { name: "Federal Bar Association", abbreviation: "FBA" },
    { name: "International Bar Association", abbreviation: "IBA" },
    { name: "Super Lawyers", abbreviation: "SL" },
    { name: "Best Lawyers in America", abbreviation: "BL" },
    { name: "Martindale-Hubbell AV Rated", abbreviation: "AV" },
    { name: "Chambers USA", abbreviation: "CH" },
  ],

  // Awards and recognition
  awards: [
    { year: "2024", title: "Top 100 Law Firms", organization: "Legal 500" },
    { year: "2024", title: "Law Firm of the Year - Corporate", organization: "Chambers USA" },
    { year: "2023", title: "Best Law Firm for Client Service", organization: "BTI Consulting" },
    { year: "2023", title: "Elite Trial Lawyers", organization: "National Law Journal" },
  ],
};

// Team Members
export const teamMembers = [
  {
    id: "james-sterling",
    slug: "james-sterling",
    name: "James Sterling",
    title: "Founding Partner",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    email: "jsterling@sterlinglaw.com",
    phone: "(212) 555-0110",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., Harvard Law School, magna cum laude",
      "B.A., Yale University, Economics",
    ],
    barAdmissions: ["New York", "District of Columbia", "Massachusetts"],
    practiceAreas: ["Corporate Law", "Mergers & Acquisitions", "Securities"],
    bio: "James Sterling founded Sterling & Associates in 1987 with a vision to create a law firm that combines big-firm expertise with personalized client service. With over 35 years of experience, he has guided the firm to become one of the most respected legal practices in the country. James specializes in complex corporate transactions, having led deals valued at over $50 billion throughout his career.",
    highlights: [
      "Led the $8.5 billion acquisition of TechCorp Industries",
      "Named 'Dealmaker of the Year' by M&A Advisor (2023)",
      "Former Chair of the NYC Bar Corporate Law Committee",
      "Frequent speaker at Harvard Law School M&A conferences",
    ],
    cases: [
      "TechCorp Industries Acquisition ($8.5B)",
      "GlobalBank Merger ($12B)",
      "Meridian Healthcare IPO ($2.3B)",
    ],
  },
  {
    id: "elizabeth-chen",
    slug: "elizabeth-chen",
    name: "Elizabeth Chen",
    title: "Senior Partner",
    role: "Head of Litigation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    email: "echen@sterlinglaw.com",
    phone: "(212) 555-0120",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., Columbia Law School, Order of the Coif",
      "B.A., Stanford University, Political Science",
    ],
    barAdmissions: ["New York", "California", "Second Circuit Court of Appeals"],
    practiceAreas: ["Commercial Litigation", "White Collar Defense", "Appellate Practice"],
    bio: "Elizabeth Chen is a nationally recognized litigator with an exceptional track record in complex commercial disputes and white-collar defense matters. She has successfully tried over 100 cases to verdict and has argued before numerous federal appellate courts. Elizabeth's strategic approach and commanding courtroom presence have earned her recognition as one of America's leading trial attorneys.",
    highlights: [
      "100+ jury trials with 95% success rate",
      "Successfully defended Fortune 500 CEO in SEC enforcement action",
      "Named 'Litigator of the Year' by American Lawyer (2022)",
      "Former Assistant U.S. Attorney, Southern District of New York",
    ],
    cases: [
      "Defended $500M securities fraud claim",
      "Won $120M breach of contract verdict",
      "SEC enforcement defense (complete dismissal)",
    ],
  },
  {
    id: "michael-washington",
    slug: "michael-washington",
    name: "Michael Washington",
    title: "Partner",
    role: "Real Estate Practice Leader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    email: "mwashington@sterlinglaw.com",
    phone: "(212) 555-0130",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., NYU School of Law",
      "M.B.A., Wharton School of Business",
      "B.S., MIT, Civil Engineering",
    ],
    barAdmissions: ["New York", "New Jersey", "Connecticut"],
    practiceAreas: ["Real Estate", "Land Use & Zoning", "Construction Law"],
    bio: "Michael Washington brings a unique combination of legal expertise and business acumen to complex real estate transactions. His engineering background and MBA provide clients with comprehensive counsel on development projects, commercial acquisitions, and financing arrangements. Michael has handled over $15 billion in real estate transactions throughout his career.",
    highlights: [
      "Led development of Hudson Yards mixed-use project",
      "Structured $3B real estate investment fund",
      "Board member, NYC Real Estate Board",
      "Adjunct Professor, NYU Real Estate Law",
    ],
    cases: [
      "Hudson Yards Development ($25B)",
      "Manhattan Tower Acquisition ($1.2B)",
      "Brooklyn Waterfront Rezoning",
    ],
  },
  {
    id: "sarah-martinez",
    slug: "sarah-martinez",
    name: "Sarah Martinez",
    title: "Partner",
    role: "Estate Planning Chair",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    email: "smartinez@sterlinglaw.com",
    phone: "(212) 555-0140",
    linkedin: "https://linkedin.com",
    education: [
      "LL.M., Georgetown University Law Center, Taxation",
      "J.D., University of Virginia School of Law",
      "B.A., Princeton University, Economics",
    ],
    barAdmissions: ["New York", "Florida", "U.S. Tax Court"],
    practiceAreas: ["Estate Planning", "Trust Administration", "Tax Planning"],
    bio: "Sarah Martinez is one of the nation's foremost authorities on sophisticated estate planning for high-net-worth individuals and families. Her expertise spans multi-generational wealth transfer, charitable planning, and international estate matters. Sarah works closely with clients and their families to create comprehensive plans that preserve wealth while achieving philanthropic objectives.",
    highlights: [
      "Structured $2B family dynasty trust",
      "Created innovative charitable remainder trust model",
      "Fellow, American College of Trust and Estate Counsel",
      "Author of 'Modern Estate Planning' (4th Edition)",
    ],
    cases: [
      "Multi-generational family wealth transfer ($2B+)",
      "Private foundation establishment ($500M)",
      "International estate restructuring",
    ],
  },
  {
    id: "robert-kim",
    slug: "robert-kim",
    name: "Robert Kim",
    title: "Partner",
    role: "Intellectual Property Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    email: "rkim@sterlinglaw.com",
    phone: "(212) 555-0150",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., UC Berkeley School of Law",
      "Ph.D., Stanford University, Computer Science",
      "B.S., Caltech, Electrical Engineering",
    ],
    barAdmissions: ["New York", "California", "U.S. Patent and Trademark Office"],
    practiceAreas: ["Intellectual Property", "Patent Litigation", "Technology Transactions"],
    bio: "Robert Kim combines deep technical expertise with legal excellence to protect clients' most valuable intellectual property assets. His Ph.D. in computer science enables him to understand and effectively litigate complex technology patents. Robert has successfully handled patent disputes involving AI, blockchain, semiconductors, and telecommunications technologies.",
    highlights: [
      "Won landmark AI patent case ($750M verdict)",
      "Former Senior Counsel at Google",
      "200+ patents prosecuted",
      "Named to IAM Patent 1000",
    ],
    cases: [
      "AI Patent Infringement Victory ($750M)",
      "Semiconductor Trade Secret Defense",
      "Software Licensing Agreement ($500M)",
    ],
  },
  {
    id: "amanda-brooks",
    slug: "amanda-brooks",
    name: "Amanda Brooks",
    title: "Partner",
    role: "Employment Law Chair",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop&crop=face",
    email: "abrooks@sterlinglaw.com",
    phone: "(212) 555-0160",
    linkedin: "https://linkedin.com",
    education: [
      "J.D., University of Michigan Law School",
      "B.A., Howard University, Labor Relations",
    ],
    barAdmissions: ["New York", "Illinois", "District of Columbia"],
    practiceAreas: ["Employment Law", "Labor Relations", "Executive Compensation"],
    bio: "Amanda Brooks is a trusted advisor to Fortune 500 companies on all aspects of employment law and workplace matters. She provides strategic counsel on employment litigation, labor relations, and executive compensation. Amanda's pragmatic approach helps clients navigate complex workforce challenges while minimizing legal risk.",
    highlights: [
      "Lead counsel for 50+ major corporations",
      "Successfully resolved class action affecting 10,000 employees",
      "Former EEOC Regional Attorney",
      "Named 'Top Employment Lawyer' by Chambers USA",
    ],
    cases: [
      "Class Action Defense (10,000+ class members)",
      "Executive Employment Agreement Negotiation",
      "Union Negotiation for Major Manufacturer",
    ],
  },
];

// Practice Areas / Services
export const practiceAreas = [
  {
    id: "corporate-law",
    slug: "corporate-law",
    name: "Corporate Law",
    shortDescription: "Strategic counsel for businesses of all sizes on formation, governance, and transactions.",
    description: "Our Corporate Law practice provides comprehensive legal services to businesses at every stage of their lifecycle. From startup formation to complex mergers and acquisitions, our attorneys deliver strategic counsel that helps clients achieve their business objectives while managing legal risk.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    features: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Securities Offerings",
      "Joint Ventures & Strategic Alliances",
      "Private Equity & Venture Capital",
      "Corporate Restructuring",
    ],
    teamLeads: ["james-sterling"],
  },
  {
    id: "litigation",
    slug: "litigation",
    name: "Litigation & Dispute Resolution",
    shortDescription: "Aggressive advocacy in court and strategic resolution of complex disputes.",
    description: "Our Litigation team represents clients in high-stakes commercial disputes, regulatory matters, and complex civil litigation. With extensive trial experience and a track record of landmark victories, we provide the skilled advocacy needed to protect our clients' interests.",
    icon: "Scale",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    features: [
      "Commercial Litigation",
      "White Collar Defense",
      "Securities Litigation",
      "Appellate Practice",
      "Alternative Dispute Resolution",
      "Class Action Defense",
    ],
    teamLeads: ["elizabeth-chen"],
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    shortDescription: "Full-service representation for commercial real estate transactions and development.",
    description: "Our Real Estate practice handles sophisticated transactions across all property types and markets. We represent developers, investors, lenders, and corporate occupiers in acquisitions, dispositions, financings, and development projects valued in the billions of dollars.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    features: [
      "Commercial Acquisitions & Sales",
      "Real Estate Finance",
      "Land Use & Zoning",
      "Construction Agreements",
      "Leasing",
      "REIT Formation & Compliance",
    ],
    teamLeads: ["michael-washington"],
  },
  {
    id: "estate-planning",
    slug: "estate-planning",
    name: "Estate Planning & Wealth Transfer",
    shortDescription: "Sophisticated planning strategies for high-net-worth individuals and families.",
    description: "Our Estate Planning team develops comprehensive strategies to preserve and transfer wealth across generations. We work with high-net-worth individuals, family offices, and business owners to create customized plans that minimize tax exposure while achieving family and philanthropic goals.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    features: [
      "Estate & Gift Tax Planning",
      "Trust Administration",
      "Charitable Planning",
      "Family Office Services",
      "Business Succession Planning",
      "International Estate Planning",
    ],
    teamLeads: ["sarah-martinez"],
  },
  {
    id: "intellectual-property",
    slug: "intellectual-property",
    name: "Intellectual Property",
    shortDescription: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets.",
    description: "Our Intellectual Property practice helps innovators and creators protect and monetize their most valuable assets. From patent prosecution to IP litigation, our team combines technical expertise with legal excellence to deliver results in this specialized field.",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    features: [
      "Patent Prosecution & Litigation",
      "Trademark Registration & Enforcement",
      "Copyright Protection",
      "Trade Secret Litigation",
      "IP Licensing & Transactions",
      "Technology Transfer",
    ],
    teamLeads: ["robert-kim"],
  },
  {
    id: "employment-law",
    slug: "employment-law",
    name: "Employment & Labor Law",
    shortDescription: "Comprehensive workplace solutions from compliance to complex litigation.",
    description: "Our Employment & Labor Law practice advises employers on the full spectrum of workplace issues. We help clients build compliant workplaces, defend against employment claims, and navigate sensitive workforce transitions with practical, business-focused counsel.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    features: [
      "Employment Litigation Defense",
      "Workplace Investigations",
      "Executive Compensation",
      "Labor Relations & Union Matters",
      "Employment Agreements",
      "Regulatory Compliance",
    ],
    teamLeads: ["amanda-brooks"],
  },
];

// Case Studies / Success Stories
export const caseStudies = [
  {
    id: "techcorp-acquisition",
    slug: "techcorp-acquisition",
    title: "TechCorp Industries Acquisition",
    client: "Confidential Fortune 100 Company",
    industry: "Technology",
    practiceArea: "Corporate Law",
    value: "$8.5 Billion",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
    summary: "Led the successful acquisition of TechCorp Industries, one of the largest technology deals of the year.",
    challenge: "Our client sought to acquire TechCorp Industries, a leading enterprise software company, in a highly competitive bidding process. The transaction involved complex regulatory considerations across multiple jurisdictions and required innovative deal structuring to address antitrust concerns.",
    solution: "Our team led negotiations with TechCorp's board and competing bidders, developed a creative deal structure that satisfied regulatory requirements, and managed a coordinated global antitrust clearance process in 12 jurisdictions.",
    result: "The acquisition closed successfully, creating the industry's largest enterprise software platform. Our innovative structuring approach allowed the deal to proceed without divestiture requirements, preserving the full strategic value for our client.",
    teamMembers: ["james-sterling"],
  },
  {
    id: "securities-defense",
    slug: "securities-defense",
    title: "SEC Enforcement Defense",
    client: "Fortune 500 CEO",
    industry: "Financial Services",
    practiceArea: "Litigation",
    value: "Complete Dismissal",
    year: "2023",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    summary: "Successfully defended a Fortune 500 CEO against SEC enforcement action alleging securities fraud.",
    challenge: "The SEC alleged that our client, a prominent CEO, had engaged in insider trading in connection with a major corporate transaction. The enforcement action threatened both criminal referral and significant civil penalties, as well as our client's career and reputation.",
    solution: "We conducted an intensive internal investigation, developed a comprehensive defense strategy, and engaged in strategic negotiations with the SEC enforcement staff. Our team presented exculpatory evidence demonstrating our client's legitimate trading rationale.",
    result: "The SEC closed its investigation without any charges or penalties. Our client's reputation was fully restored, and they continue to serve as CEO.",
    teamMembers: ["elizabeth-chen"],
  },
  {
    id: "hudson-yards",
    slug: "hudson-yards",
    title: "Hudson Yards Development",
    client: "Major Real Estate Developer",
    industry: "Real Estate",
    practiceArea: "Real Estate",
    value: "$25 Billion Project",
    year: "2022",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    summary: "Provided comprehensive legal counsel for the development of the largest private real estate project in U.S. history.",
    challenge: "The development of Hudson Yards, a 28-acre mixed-use development on Manhattan's West Side, required innovative legal solutions for financing, land assembly, zoning, and construction across multiple phases spanning over a decade.",
    solution: "Our team structured complex financing arrangements including EB-5 investments, tax increment financing, and construction loans. We navigated intricate zoning approvals and coordinated with city agencies on infrastructure requirements.",
    result: "The project has transformed Manhattan's West Side with over 18 million square feet of commercial, residential, and retail space. Our innovative financing structure became a model for large-scale urban development.",
    teamMembers: ["michael-washington"],
  },
  {
    id: "family-trust",
    slug: "family-trust",
    title: "Multi-Generational Wealth Transfer",
    client: "Prominent Business Family",
    industry: "Private Wealth",
    practiceArea: "Estate Planning",
    value: "$2+ Billion Estate",
    year: "2023",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    summary: "Structured comprehensive estate plan transferring a $2 billion family business to the next generation while achieving significant tax savings.",
    challenge: "Our client, the founder of a successful manufacturing conglomerate, sought to transfer the family business to the next generation while minimizing estate taxes and ensuring continued family control. The family had complex dynamics and varying levels of involvement in the business.",
    solution: "We designed a sophisticated trust structure incorporating dynasty trusts, family limited partnerships, and a private trust company. The plan included governance mechanisms to address family dynamics and business succession.",
    result: "The plan achieved estate tax savings exceeding $400 million while establishing a governance framework that has kept the family united. The business continues to thrive under second-generation leadership.",
    teamMembers: ["sarah-martinez"],
  },
  {
    id: "ai-patent",
    slug: "ai-patent",
    title: "AI Patent Infringement Victory",
    client: "Leading AI Research Company",
    industry: "Technology",
    practiceArea: "Intellectual Property",
    value: "$750 Million Verdict",
    year: "2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    summary: "Secured landmark $750 million verdict in AI patent infringement case against major technology company.",
    challenge: "Our client, a pioneering AI research company, discovered that a major technology competitor had incorporated our client's patented machine learning algorithms into their flagship products. The defendant had significant resources and mounted an aggressive invalidity defense.",
    solution: "Our team built a compelling infringement case demonstrating the defendant's copying, retained world-class technical experts, and developed persuasive claim construction arguments. We successfully defeated multiple summary judgment motions.",
    result: "After a three-week jury trial, we secured a $750 million verdict - one of the largest AI patent verdicts in history. The verdict was upheld on appeal, and the case established important precedent for AI patent protection.",
    teamMembers: ["robert-kim"],
  },
  {
    id: "class-action-defense",
    slug: "class-action-defense",
    title: "Employment Class Action Defense",
    client: "National Retail Chain",
    industry: "Retail",
    practiceArea: "Employment Law",
    value: "Avoided $200M+ Exposure",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    summary: "Successfully defended national retailer against wage and hour class action affecting over 10,000 employees.",
    challenge: "Our client faced a class action lawsuit alleging systemic wage and hour violations across its 500+ retail locations. Plaintiffs sought certification of a nationwide class and damages that could have exceeded $200 million.",
    solution: "We developed a comprehensive defense strategy focusing on individualized differences among putative class members. Our team conducted extensive discovery, retained statistical experts, and filed a detailed opposition to class certification.",
    result: "The court denied class certification, finding that individual issues predominated. We subsequently resolved the remaining individual claims through mediation for a fraction of the alleged exposure.",
    teamMembers: ["amanda-brooks"],
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Sterling & Associates has been our trusted legal partner for over fifteen years. Their corporate team's strategic guidance was instrumental in our successful IPO and subsequent acquisitions. They don't just provide legal advice - they truly understand our business.",
    author: "Richard Thompson",
    title: "CEO",
    company: "Meridian Healthcare Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "When we faced a bet-the-company litigation, Elizabeth Chen and her team delivered. Their preparation was extraordinary, their courtroom presence commanding, and the result exceeded our expectations. I cannot recommend them highly enough.",
    author: "Margaret Chen",
    title: "General Counsel",
    company: "TechVenture Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "The estate planning team at Sterling helped our family navigate a complex generational transition with sensitivity and expertise. Sarah Martinez's thoughtful approach preserved not just our wealth, but our family relationships.",
    author: "William Hartley III",
    title: "Chairman",
    company: "Hartley Family Office",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    quote: "In the fast-moving world of real estate development, you need attorneys who can close complex deals on tight timelines. Michael Washington and his team have never let us down - they're simply the best in the business.",
    author: "Diana Rodriguez",
    title: "Managing Director",
    company: "Urban Development Partners",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  },
];

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
