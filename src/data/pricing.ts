export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  orderLimit: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Forever',
    badge: 'Zero Risk',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for small laundry shops, iron press stalls & single counters starting their digital journey.',
    orderLimit: 'Up to 60 orders/month',
    features: [
      'Digital POS counter billing',
      'Free WhatsApp invoice generator',
      'Up to 150 customer profiles',
      'UPI QR code on digital bills',
      'Basic thermal slip receipt support',
      'Available in 8 Indian languages',
      'Offline billing support',
    ],
    ctaText: 'Start Free Forever',
  },
  {
    id: 'pro',
    name: 'Pro Growth',
    badge: 'Most Popular',
    priceMonthly: 449,
    priceYearly: 399,
    description: 'Designed for ambitious laundry and dry cleaning stores processing daily customer batches.',
    orderLimit: 'Unlimited orders & customers',
    recommended: true,
    features: [
      'Unlimited digital orders & customers',
      'Garment QR code tag printing (heat-seal & sticker)',
      'Automated WhatsApp pickup/ready status alerts',
      'Staff permissions & commission tracking',
      'Daily profit, expense & GST tax reports',
      'Customer SMS reminder broadcasts',
      'Fast thermal printer Bluetooth/USB connectivity',
      'Cloud automatic backup every hour',
    ],
    ctaText: 'Claim 30-Day Free Trial',
  },
  {
    id: 'pro-plus',
    name: 'Pro Plus',
    badge: 'Best for Dry Cleaners',
    priceMonthly: 749,
    priceYearly: 649,
    description: 'Advanced dry cleaning, premium steam press, and multi-service specialty fabric care studios.',
    orderLimit: 'Unlimited + Driver App',
    features: [
      'Everything in Pro Growth plan',
      'Pre-wash garment defect photo capture (prevent disputes)',
      'Home pickup & delivery driver dispatch app',
      'Live driver route optimization & GPS tracking',
      'Custom store branding & custom WhatsApp sender name',
      'Fabric care symbols auto-suggestion engine',
      'Advance payment collection via payment link',
      'Priority 24/7 WhatsApp & telephone support',
    ],
    ctaText: 'Start Pro Plus Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Chain',
    badge: 'Multi-Branch & Franchises',
    priceMonthly: 1399,
    priceYearly: 1199,
    description: 'Built for laundry mart chains, industrial facilities, hotel tie-ups & multi-location franchises.',
    orderLimit: 'Multi-Branch Hub & Spoke',
    features: [
      'Multi-branch central dashboard & inventory sync',
      'Central factory processing hub-and-spoke tracking',
      'Bulk laundry B2B corporate contracts & accounts',
      'White-labeled customer mobile app (Android & iOS)',
      'Dedicated account manager & on-site staff training',
      'Full REST API & webhook webhooks access',
      'Custom ERP & accounting software integration',
      '99.99% enterprise SLA guarantee',
    ],
    ctaText: 'Book Enterprise Demo',
  },
];
