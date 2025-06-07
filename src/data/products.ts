
export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  origin: string;
  availability: string;
  rating: number;
  features: string[];
}

export const agroProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Ginger",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fresh Vegetables",
    description: "Premium quality fresh ginger with high oil content and rich aroma, carefully harvested from certified organic farms.",
    origin: "Maharashtra, India",
    availability: "Year Round",
    rating: 4.8,
    features: ["Organic Certified", "High Oil Content", "Export Quality", "Fresh Harvest"]
  },
  {
    id: "2",
    name: "Red Onions",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fresh Vegetables",
    description: "High-quality red onions with excellent shelf life and uniform size, sourced from premium growing regions.",
    origin: "Nashik, Maharashtra",
    availability: "Nov - May",
    rating: 4.6,
    features: ["Long Shelf Life", "Uniform Size", "Low Moisture", "Export Grade"]
  },
  {
    id: "3",
    name: "Sweet Corn (Maize)",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Grains & Cereals",
    description: "Golden yellow sweet corn with high sugar content and tender kernels, perfect for processing and fresh consumption.",
    origin: "Karnataka, India",
    availability: "Oct - Feb",
    rating: 4.7,
    features: ["High Sugar Content", "Tender Kernels", "Non-GMO", "Premium Grade"]
  },
  {
    id: "4",
    name: "Drumstick (Moringa)",
    image: "https://images.unsplash.com/photo-1609501676725-7186f95e5051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fresh Vegetables",
    description: "Nutritious drumstick pods rich in vitamins and minerals, harvested at optimal maturity for maximum nutrition.",
    origin: "Tamil Nadu, India",
    availability: "Year Round",
    rating: 4.9,
    features: ["High Nutrition", "Vitamin Rich", "Fresh Quality", "Organic"]
  },
  {
    id: "5",
    name: "Alphonso Mangoes",
    image: "https://images.unsplash.com/photo-1605664515150-153a5ef18915?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Fruits",
    description: "King of mangoes - Alphonso variety with exceptional sweetness, rich aroma, and smooth texture.",
    origin: "Ratnagiri, Maharashtra",
    availability: "Apr - Jun",
    rating: 5.0,
    features: ["King of Mangoes", "Rich Aroma", "Sweet Taste", "Premium Export"]
  },
  {
    id: "6",
    name: "Green Chilli",
    image: "https://images.unsplash.com/photo-1583389494307-0320f18f6afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fresh Vegetables",
    description: "Fresh green chillies with optimal heat level and vibrant color, carefully graded for export quality.",
    origin: "Andhra Pradesh, India",
    availability: "Year Round",
    rating: 4.5,
    features: ["Optimal Heat", "Vibrant Color", "Fresh Quality", "Export Grade"]
  },
  {
    id: "7",
    name: "Pomegranate",
    image: "https://images.unsplash.com/photo-1570197637297-9d4c8d127d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Premium Fruits",
    description: "Ruby red pomegranates with juicy arils and high antioxidant content, perfect for fresh consumption and processing.",
    origin: "Maharashtra, India",
    availability: "Oct - Feb",
    rating: 4.8,
    features: ["High Antioxidants", "Juicy Arils", "Ruby Red", "Premium Quality"]
  },
  {
    id: "8",
    name: "Finger Millet (Ragi)",
    image: "https://images.unsplash.com/photo-1617865093827-2b4fb5b54d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Millets & Pulses",
    description: "Nutritious finger millet with high calcium and iron content, perfect for health-conscious consumers.",
    origin: "Karnataka, India",
    availability: "Year Round",
    rating: 4.6,
    features: ["High Calcium", "Iron Rich", "Gluten Free", "Organic"]
  }
];

export const engineeringProducts: Product[] = [
  {
    id: "e1",
    name: "CNC Precision Tooling",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Precision Tools",
    description: "High-precision CNC machined tooling components with tight tolerances for automotive and aerospace applications.",
    origin: "Maharashtra, India",
    availability: "Made to Order",
    rating: 4.9,
    features: ["Tight Tolerances", "CNC Machined", "Quality Steel", "Custom Design"]
  },
  {
    id: "e2",
    name: "Industrial Automation SPM",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Automation",
    description: "Special Purpose Machines designed for industrial automation with PLC control and robotic integration.",
    origin: "India",
    availability: "Custom Build",
    rating: 4.8,
    features: ["PLC Control", "Robotic Integration", "Custom Design", "24/7 Support"]
  },
  {
    id: "e3",
    name: "Laser Cut Components",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Fabrication",
    description: "High-precision laser cut metal components with smooth edges and accurate dimensions for various industries.",
    origin: "India",
    availability: "Quick Turnaround",
    rating: 4.7,
    features: ["Precision Cutting", "Smooth Edges", "Various Metals", "Quick Delivery"]
  },
  {
    id: "e4",
    name: "Tubular Components",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Components",
    description: "Precision manufactured tubular components for automotive, hydraulic, and pneumatic applications.",
    origin: "India",
    availability: "Stock Available",
    rating: 4.6,
    features: ["Precision Bore", "Quality Materials", "Various Sizes", "Industry Standard"]
  }
];
