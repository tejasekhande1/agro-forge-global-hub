
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Award,
  ArrowLeft,
  Package,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Spices = () => {
  const spiceProducts = [
    {
      name: "Red Chili Powder",
      image: "/products/red_chili.jpg",
      description: "Premium quality red chili powder with intense heat and vibrant color.",
      info: "Capsicum annuum is an annual herbaceous plant growing 20-120 cm tall with pendulous, conical fruits. Guntur Sannam chilies are prized for their deep red color, moderate pungency, and high oleoresin content. Widely used in Indian cuisine for curries, pickles, and spice blends like sambar powder and rasam powder. Rich in Vitamin C and capsaicin, which helps boost metabolism and has anti-inflammatory properties."
    },
    {
      name: "Turmeric Powder",
      image: "/products/turmeric.jpg",
      description: "High curcumin content turmeric powder with natural golden color.",
      info: "Curcuma longa is a perennial herbaceous plant of the ginger family growing 3-5 feet tall with underground rhizomes. Salem/Erode turmeric features high curcumin content and bright golden-yellow color. Essential in Indian cooking for color, flavor, and preservation, key ingredient in curry powders and traditional medicine. Contains curcumin with powerful anti-inflammatory and antioxidant properties that may support joint health and boost immune system."
    },
    {
      name: "Black Pepper",
      image: "/products/black_pepper.jpg",
      description: "Premium Malabar black pepper with strong aroma and pungency.",
      info: "Piper nigrum is a perennial woody vine growing up to 4 meters high, producing small white flowers and round drupes. Malabar pepper is known for its bold flavor, high piperine content, and strong aroma with uniform, wrinkled peppercorns. Universal spice used worldwide in both whole and ground form for seasoning, marinades, and spice blends. Rich in piperine which enhances nutrient absorption and has antioxidant properties."
    },
    {
      name: "Cardamom",
      image: "/products/cardamom.jpg",
      description: "Premium green cardamom with intense aroma and flavor.",
      info: "Elettaria cardamomum is a perennial herbaceous plant growing 5-10 feet tall in forest shade of Western Ghats. Known as 'Queen of Spices', green cardamom pods are triangular with thin, papery shells containing 8-16 aromatic black seeds. Used in sweet and savory dishes, chai beverages, garam masala, Indian sweets, and Middle Eastern cuisine. Contains compounds that may help with digestive issues and has antioxidant properties."
    },
    {
      name: "Coriander Seeds",
      image: "/products/coriander.jpg",
      description: "High-quality coriander seeds with excellent aroma and taste.",
      info: "Coriandrum sativum is an annual herb growing 20-70 cm tall with delicate, lacy leaves and small, round, ribbed seeds. Eagle variety seeds are uniform, light brown with sweet, citrusy aroma and low volatile oil content ideal for grinding. Ground into powder for curry bases, used whole in tempering and pickling, essential in garam masala and sambar powder. Rich in dietary fiber and antioxidants, may help regulate blood sugar and support digestive health."
    },
    {
      name: "Cumin Seeds",
      image: "/products/cumin.jpg",
      description: "Premium cumin seeds with strong distinctive flavor.",
      info: "Cuminum cyminum is a small annual herbaceous plant, 15-20 cm tall, with thread-like leaves and small flowers in umbels. Gujarat cumin seeds are elongated, ridged, yellowish-brown with warm, earthy flavor combining sweetness and bitterness. Used whole in tempering, ground in spice blends, essential in Indian, Middle Eastern, and Mexican cuisines including jeera rice. Good source of iron, may aid digestion and help with blood sugar control."
    }
  ];

  const qualityStandards = [
    {
      icon: Shield,
      title: "Spices Board Certification",
      description: "All products certified by Spices Board of India"
    },
    {
      icon: Award,
      title: "Export Quality Standards",
      description: "Meeting international quality parameters"
    },
    {
      icon: Leaf,
      title: "Residue-Free Testing",
      description: "Tested for pesticide residues and heavy metals"
    },
    {
      icon: Package,
      title: "Hygienic Processing",
      description: "Processed in HACCP certified facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-6 w-6 text-white"/>
              </div>
              <span className="font-bold text-sm sm:text-xl text-foreground">
                ENJO-SAK GLOBAL PRIVATE LIMITED
              </span>
            </Link>
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Premium Indian Spices
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
              Authentic Indian Spices
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Export-quality spices meeting Spices Board of India standards, sourced directly from premium growing regions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Quality Assurance</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Every product meets stringent quality standards set by the Spices Board of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground text-sm">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Products */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Spice Products</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Premium quality spices sourced from the finest growing regions in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {spiceProducts.map((spice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={spice.image}
                    alt={spice.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{spice.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-3">{spice.description}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{spice.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Source Premium Spices?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-8">
            Contact us for detailed specifications, pricing, and custom packaging options
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#contact" className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Get Quote Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Spices;
