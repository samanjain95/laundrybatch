export interface CareSymbol {
  symbol: string;
  category: 'washing' | 'bleaching' | 'drying' | 'ironing' | 'dryclean';
  title: string;
  instruction: string;
  temperature?: string;
  warning?: string;
}

export const careSymbolsData: CareSymbol[] = [
  {
    symbol: '🧺 30°C',
    category: 'washing',
    title: 'Machine Wash Normal (30°C / 85°F)',
    instruction: 'Wash with standard cycle up to 30°C. Suitable for everyday cottons, blends, and delicate colors.',
    temperature: 'Cold/30°C',
  },
  {
    symbol: '🧺 40°C',
    category: 'washing',
    title: 'Warm Wash (40°C / 105°F)',
    instruction: 'Ideal for colored polyester, nylon, and moderately soiled cotton fabrics.',
    temperature: 'Warm/40°C',
  },
  {
    symbol: '🧺 60°C',
    category: 'washing',
    title: 'Hot Sanitizing Wash (60°C / 140°F)',
    instruction: 'Bed linens, bath towels, and heavy cottons requiring antibacterial sanitization.',
    temperature: 'Hot/60°C',
  },
  {
    symbol: '✋ 🧺',
    category: 'washing',
    title: 'Hand Wash Only',
    instruction: 'Do not machine wash. Gently wash in lukewarm water (max 40°C) with mild detergent without wringing.',
    warning: 'Delicate silks, handwoven garments, and fine wools.',
  },
  {
    symbol: '🚫 🧺',
    category: 'washing',
    title: 'Do Not Wash',
    instruction: 'Garment may shrink, lose form, or dye bleed in water. Professional dry cleaning required.',
    warning: 'Tailored blazers, structured suits, leather & raw suede.',
  },
  {
    symbol: '▲',
    category: 'bleaching',
    title: 'Bleaching Permitted',
    instruction: 'Any commercially available bleach, chlorine or oxygen, can be safely used.',
  },
  {
    symbol: '▲ Cl',
    category: 'bleaching',
    title: 'Non-Chlorine / Oxygen Bleach Only',
    instruction: 'Use only oxygen or color-safe bleach. Chlorine will cause yellowing or fabric breakdown.',
  },
  {
    symbol: '🚫 ▲',
    category: 'bleaching',
    title: 'Do Not Bleach',
    instruction: 'Do not use any bleach product. Use enzyme-based stain lifters instead.',
    warning: 'Protects delicate fiber dyes and elastane blends.',
  },
  {
    symbol: '⚪ 🌡️',
    category: 'drying',
    title: 'Tumble Dry Normal Low Heat',
    instruction: 'Tumble dry on low delicate heat setting to prevent static and excessive shrinkage.',
  },
  {
    symbol: '⚪ 🌡️🌡️',
    category: 'drying',
    title: 'Tumble Dry Medium Heat',
    instruction: 'Standard drying cycle for bedsheets, jeans, and towels.',
  },
  {
    symbol: '🚫 ⚪',
    category: 'drying',
    title: 'Do Not Tumble Dry',
    instruction: 'Hang dry or flat dry in shade. High tumble heat will distort sizing.',
  },
  {
    symbol: '━━',
    category: 'drying',
    title: 'Dry Flat (Horizontal)',
    instruction: 'Spread flat on a towel or mesh rack. Do not hang with pegs as weight will stretch fibers.',
    warning: 'Heavy wool knitwear, cashmere, and embellished garments.',
  },
  {
    symbol: '♨️ •',
    category: 'ironing',
    title: 'Iron Low Heat (110°C / 230°F)',
    instruction: 'Use cool iron without steam. Steam may cause water spot marks.',
    warning: 'Acetate, acrylic, nylon, and printed graphic vinyl.',
  },
  {
    symbol: '♨️ ••',
    category: 'ironing',
    title: 'Iron Medium Heat (150°C / 300°F)',
    instruction: 'Standard steam press or warm iron with damp press cloth for wool and polyester.',
  },
  {
    symbol: '♨️ •••',
    category: 'ironing',
    title: 'Iron High Heat (200°C / 390°F)',
    instruction: 'Heavy steam iron for pure cotton, denim, and linen garments to achieve razor-sharp pleats.',
  },
  {
    symbol: '🚫 ♨️',
    category: 'ironing',
    title: 'Do Not Iron',
    instruction: 'Fabric is heat-sensitive or pre-pleated. Contact heat will melt fibers.',
  },
  {
    symbol: '⭕ P',
    category: 'dryclean',
    title: 'Dry Clean with Perchloroethylene / Hydrocarbon',
    instruction: 'Standard professional dry cleaning solvent safe with normal cycle limits.',
  },
  {
    symbol: '⭕ F',
    category: 'dryclean',
    title: 'Gentle Hydrocarbon / Eco-Solvent Clean',
    instruction: 'Sensitive petroleum or organic solvent cleaning only. Mild mechanical action.',
  },
  {
    symbol: '🚫 ⭕',
    category: 'dryclean',
    title: 'Do Not Dry Clean',
    instruction: 'Solvents will dissolve waterproof membranes, adhesives, or coating.',
  },
];

export interface StainRecipe {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  urgency: 'Immediate' | 'Standard' | 'Delicate';
  instructions: string[];
  ecoTip: string;
  avoidTip: string;
}

export const stainGuideData: StainRecipe[] = [
  {
    id: 'coffee-tea',
    name: 'Coffee & Chai Stain',
    category: 'Tannin / Beverage',
    icon: '☕',
    color: '#8b5cf6',
    urgency: 'Immediate',
    instructions: [
      'Flush immediately from behind with cold running water.',
      'Apply white vinegar mixed 1:1 with eco liquid dish soap.',
      'Gently blot from edge towards center using a clean microfiber cloth.',
      'Soak in warm water with oxygen bleach powder for 20 minutes before wash.',
    ],
    ecoTip: 'Cold club soda water or mild lemon-baking soda paste breaks tannin quickly without harsh chlorine.',
    avoidTip: 'Never apply hot water or iron directly on chai stain — heat sets milk proteins and tannin permanently!',
  },
  {
    id: 'turmeric-curry',
    name: 'Turmeric & Curry (Haldi)',
    category: 'Pigment / Oil',
    icon: '🍛',
    color: '#f59e0b',
    urgency: 'Immediate',
    instructions: [
      'Scrape excess gravy off with a dull knife edge without rubbing.',
      'Dab liquid degreaser or eucalyptus dish soap directly on oil base.',
      'Rinse with warm water, then expose damp garment to direct natural sunlight for 2 hours.',
      'Curcumin pigments photo-degrade rapidly under natural UV sunlight rays.',
    ],
    ecoTip: 'Sunlight is the world’s most effective zero-chemical bleaching agent against turmeric stains.',
    avoidTip: 'Avoid using alkaline bar soap directly — turmeric turns dark red with strong alkali!',
  },
  {
    id: 'oil-grease',
    name: 'Cooking Oil, Grease & Butter',
    category: 'Lipid / Hydrocarbon',
    icon: '🍳',
    color: '#eab308',
    urgency: 'Standard',
    instructions: [
      'Dust cornstarch or talcum powder immediately over the spot to absorb oil; leave for 15 mins.',
      'Brush off powder, apply a drop of clear eco liquid dish wash.',
      'Gently massage circular with soft toothbrush bristles.',
      'Launder in the warmest water permitted by the fabric care tag.',
    ],
    ecoTip: 'Cornstarch absorbs 80% of grease before it binds to synthetic polyester fibers.',
    avoidTip: 'Do not tumble dry until stain is confirmed 100% gone, or heat will bake the oil polymer into fabric.',
  },
  {
    id: 'ink-ballpoint',
    name: 'Ballpoint Pen & Gel Ink',
    category: 'Chemical / Dye',
    icon: '🖋️',
    color: '#2563eb',
    urgency: 'Immediate',
    instructions: [
      'Place paper towel under stained layer to absorb bleeding ink.',
      'Apply 70%+ isopropyl alcohol or hand sanitizer over ink spot.',
      'Blot continuously with cotton swab until ink stops transferring.',
      'Pre-treat with enzyme laundry liquid and wash cold.',
    ],
    ecoTip: 'Rubbing alcohol breaks down lacquer solvent binders in ballpoint paste quickly.',
    avoidTip: 'Do not saturate with water first; water will spread ink into surrounding fibers.',
  },
  {
    id: 'blood',
    name: 'Blood & Protein Stains',
    category: 'Organic / Protein',
    icon: '🩸',
    color: '#ef4444',
    urgency: 'Immediate',
    instructions: [
      'Soak strictly in cold salted water (1 tablespoon salt per liter).',
      'For stubborn dried blood, apply 3% hydrogen peroxide directly and let bubble for 2 minutes.',
      'Rinse with cold water thoroughly.',
      'Wash with bio-enzyme cold wash cycle.',
    ],
    ecoTip: 'Hydrogen peroxide breaks hemoglobin into water and oxygen without degrading cotton threads.',
    avoidTip: 'NEVER use warm or hot water! Warmth coagulates protein proteins like an egg into the weave.',
  },
  {
    id: 'wine',
    name: 'Red Wine & Berries',
    category: 'Anthocyanin / Tannin',
    icon: '🍷',
    color: '#9f1239',
    urgency: 'Immediate',
    instructions: [
      'Blot with clean paper towel to soak liquid — do NOT scrub.',
      'Cover stain completely with table salt or baking soda to wick up pigment.',
      'Pour boiling water from a height of 1 foot through the stretched fabric (if cotton/linen).',
      'Or soak in milk/vinegar solution for delicate fabrics.',
    ],
    ecoTip: 'Baking soda paste combined with hydrogen peroxide will lift deep anthocyanin dyes safely.',
    avoidTip: 'Never scrub vigorously; this abrades fabric pills and embeds dye deeper.',
  },
  {
    id: 'sweat-deodorant',
    name: 'Sweat & Collar Yellowing',
    category: 'Salt / Aluminum Salt',
    icon: '👕',
    color: '#10b981',
    urgency: 'Standard',
    instructions: [
      'Mix 4 tablespoons baking soda with 1/4 cup warm water into paste.',
      'Scrub gently into armpit and collar zones with soft brush.',
      'Let sit for 30–60 minutes to neutralize acidic salt buildup.',
      'Add 1/2 cup distilled white vinegar to laundry rinse cycle.',
    ],
    ecoTip: 'Baking soda + white vinegar eliminates sweat odor bacteria permanently without synthetic fragrances.',
    avoidTip: 'Avoid chlorine bleach on sweat stains — it reacts with protein to create permanent dark yellow spots.',
  },
];

export interface DefaultRateItem {
  id: string;
  name: string;
  category: 'Wash & Fold' | 'Steam Iron' | 'Dry Clean' | 'Premium Special';
  priceWash: number;
  priceIron: number;
  priceDryClean: number;
  turnaroundHours: number;
}

export const defaultRateItems: DefaultRateItem[] = [
  { id: '1', name: "Men's Formal Shirt", category: 'Dry Clean', priceWash: 25, priceIron: 15, priceDryClean: 80, turnaroundHours: 24 },
  { id: '2', name: 'Cotton T-Shirt', category: 'Wash & Fold', priceWash: 20, priceIron: 10, priceDryClean: 60, turnaroundHours: 24 },
  { id: '3', name: 'Trousers / Chinos', category: 'Dry Clean', priceWash: 30, priceIron: 20, priceDryClean: 90, turnaroundHours: 24 },
  { id: '4', name: 'Denim Jeans', category: 'Wash & Fold', priceWash: 35, priceIron: 20, priceDryClean: 100, turnaroundHours: 24 },
  { id: '5', name: 'Silk Saree (Designer)', category: 'Dry Clean', priceWash: 0, priceIron: 40, priceDryClean: 220, turnaroundHours: 48 },
  { id: '6', name: 'Cotton Saree / Chiffon', category: 'Dry Clean', priceWash: 50, priceIron: 30, priceDryClean: 140, turnaroundHours: 36 },
  { id: '7', name: 'Suit (2-Piece Blazer & Trouser)', category: 'Dry Clean', priceWash: 0, priceIron: 90, priceDryClean: 280, turnaroundHours: 48 },
  { id: '8', name: 'Bed Sheet (Double Bed)', category: 'Wash & Fold', priceWash: 60, priceIron: 35, priceDryClean: 150, turnaroundHours: 24 },
  { id: '9', name: 'Heavy Blanket / Quilt (Double)', category: 'Dry Clean', priceWash: 180, priceIron: 0, priceDryClean: 350, turnaroundHours: 72 },
  { id: '10', name: 'Curtains (Per Panel)', category: 'Dry Clean', priceWash: 70, priceIron: 40, priceDryClean: 160, turnaroundHours: 48 },
  { id: '11', name: 'Sneakers / Sports Shoes', category: 'Premium Special', priceWash: 199, priceIron: 0, priceDryClean: 299, turnaroundHours: 48 },
  { id: '12', name: 'Leather Jacket', category: 'Premium Special', priceWash: 0, priceIron: 0, priceDryClean: 499, turnaroundHours: 72 },
];
