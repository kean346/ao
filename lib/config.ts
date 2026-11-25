export const siteConfig = {
  name: 'AO Enterprises',
  legalName: 'AO Enterprises (Pty) Ltd',
  location: 'Pretoria, Gauteng, South Africa',
  tagline: 'Commercial supply & procurement',
  description:
    'Reliable bulk stationery, commercial printing and long-term supply solutions for South African organisations.',
  navigation: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Why choose AO?', href: '/why-ao' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const services = [
  {
    number: '01',
    slug: 'bulk-stationery-supply',
    title: 'Bulk Stationery Supply',
    summary: 'High-volume office, school and institutional stationery procurement.',
    overview:
      'Source day-to-day stationery and paper in the quantities your organisation needs. Share a product list or a set of specifications so we can put together a quotation around your order.',
    image: '/media/drift-stationery.webp',
    imageAlt: 'Paper reams, notebooks and envelopes on a sunlit worktable',
    capabilities: [
      'Office stationery and everyday consumables',
      'School and institutional stationery orders',
      'Paper, filing supplies and writing materials',
      'Itemised sourcing against a procurement list',
    ],
    benefits: [
      'Compare costs by line item or order volume.',
      'Specify pack sizes, formats and acceptable alternatives.',
      'Coordinate a consolidated delivery for a multi-item order.',
    ],
  },
  {
    number: '02',
    slug: 'commercial-paper-printing',
    title: 'Commercial & Paper Printing',
    summary: 'Corporate printing, bulk paper supply, branded stationery and print production.',
    overview:
      'Specify the stock, format, finish and run size for your print job. We can quote on print production, branded stationery and paper supply for internal and public-facing materials.',
    image: '/media/drift-printing.webp',
    imageAlt: 'An ochre print proof passing through the rollers of an offset press',
    capabilities: [
      'Corporate documents and printed materials',
      'Branded letterheads, envelopes and stationery',
      'Bulk paper supply by stock and size',
      'Print runs specified by stock, finish and quantity',
    ],
    benefits: [
      'Compare stock and finish options before committing to a run.',
      'Use artwork and quantities to get a more specific quotation.',
      'Coordinate paper supply and print requirements together.',
    ],
  },
  {
    number: '03',
    slug: 'long-term-supply-contracts',
    title: 'Long-Term Supply Contracts',
    summary: 'Recurring supply agreements, tender-related fulfilment and dedicated procurement partnerships.',
    overview:
      'We coordinate recurring orders for public institutions and private businesses, from tender specifications through to scheduled delivery. Share a supply schedule or tender brief to start discussing scope.',
    image: '/media/drift-fulfilment.webp',
    imageAlt: 'Cartons and wrapped paper reams packed on a dispatch pallet',
    capabilities: [
      'Recurring orders and scheduled replenishment',
      'Supply scope based on a tender or procurement brief',
      'Fulfilment planning across delivery destinations',
      'Coordination for repeat purchasing and account enquiries',
    ],
    benefits: [
      'Agree on a product list and delivery schedule for repeat orders.',
      'Identify documentation and reporting needs early.',
      'Plan for changes in volume and destination as needs evolve.',
    ],
  },
];

export type Service = (typeof services)[number];

export const procurementAdvantages = [
  {
    title: 'Competitive bulk pricing',
    description: 'Get an itemised quote for your quantities and order frequency.',
  },
  {
    title: 'Coordinated delivery',
    description: 'Agree on lead times and delivery points when you place your order.',
  },
  {
    title: 'Compliance documentation',
    description: 'Specify the supplier records your tender or onboarding process requires.',
  },
  {
    title: 'Dedicated account management',
    description: 'Work with one contact for order updates and repeat purchases.',
  },
];

export const procurementStages = [
  {
    title: 'Requirements',
    description: 'Share your specifications, quantities, timeline and delivery destination.',
  },
  {
    title: 'Quotation',
    description: 'Review the proposed items, pricing and lead times against your requirements.',
  },
  {
    title: 'Fulfilment',
    description: 'Confirm the scope and coordinate sourcing or print production.',
  },
  {
    title: 'Delivery',
    description: 'Agree on dispatch timing and receiving details for the order.',
  },
];

export const directors = [
  { name: 'Alwyn van der Merwe', role: 'Chief Executive Officer' },
  { name: 'Sibusiso Junior Oratilwe Mkhatshwa', role: 'Chief Operating Officer' },
  { name: 'Kerrigan Adams', role: 'Chief Financial Officer' },
];
