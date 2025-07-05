
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Award,
  Thermometer,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Package,
  Globe,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Spices = () => {
  const spiceProducts = [
    {
      name: "Red Chili Powder",
      image: "/products/red_chili.jpg",
      variety: "Guntur Sannam",
      origin: "Andhra Pradesh",
      moisture: "≤ 10%",
      purity: "99.5%",
      scoville: "30,000-35,000 SHU",
      packaging: "25kg, 50kg PP bags",
      description: "Premium quality red chili powder with intense heat and vibrant color."
    },
    {
      name: "Turmeric Powder",
      image: "/products/turmeric.jpg",
      variety: "Salem/Erode",
      origin: "Tamil Nadu",
      moisture: "≤ 10%",
      purity: "99%",
      curcumin: "3-5%",
      packaging: "25kg, 50kg PP bags",
      description: "High curcumin content turmeric powder with natural golden color."
    },
    {
      name: "Black Pepper",
      image: "/products/black_pepper.jpg",
      variety: "Malabar",
      origin: "Kerala",
      moisture: "≤ 12%",
      purity: "98%",
      piperine: "≥ 5%",
      packaging: "25kg, 50kg jute bags",
      description: "Premium Malabar black pepper with strong aroma and pungency."
    },
    {
      name: "Cardamom",
      image: "/products/cardamom.jpg",
      variety: "Green Cardamom",
      origin: "Kerala/Karnataka",
      moisture: "≤ 10%",
      purity: "99%",
      grade: "AGEB/AGB",
      packaging: "5kg, 10kg cartons",
      description: "Premium green cardamom with intense aroma and flavor."
    },
    {
      name: "Coriander Seeds",
      image: "/products/coriander.jpg",
      variety: "Eagle Type",
      origin: "Rajasthan/Gujarat",
      moisture: "≤ 9%",
      purity: "99.5%",
      oil: "0.8-1.0%",
      packaging: "25kg, 50kg PP bags",
      description: "High-quality coriander seeds with excellent aroma and taste."
    },
    {
      name: "Cumin Seeds",
      image: "/products/cumin.jpg",
      variety: "Gujarat Type",
      origin: "Gujarat/Rajasthan",
      moisture: "≤ 9%",
      purity: "99%",
      oil: "2.5-3.0%",
      packaging: "25kg, 50kg PP bags",
      description: "Premium cumin seeds with strong distinctive flavor."
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
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Premium Indian Spices
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Authentic Indian Spices
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Export-quality spices meeting Spices Board of India standards, sourced directly from premium growing regions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground">
              Every product meets stringent quality standards set by the Spices Board of India
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground text-sm">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Spice Products</h2>
            <p className="text-xl text-muted-foreground">
              Premium quality spices with detailed specifications and certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {spiceProducts.map((spice, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={spice.image} 
                      alt={spice.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-foreground">{spice.name}</CardTitle>
                        <Badge className="bg-green-100 text-green-700">
                          <Star className="w-3 h-3 mr-1" />
                          Export Grade
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{spice.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-orange-600" />
                            <div>
                              <p className="text-sm font-medium">Origin</p>
                              <p className="text-sm text-muted-foreground">{spice.origin}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Leaf className="h-4 w-4 text-green-600" />
                            <div>
                              <p className="text-sm font-medium">Variety</p>
                              <p className="text-sm text-muted-foreground">{spice.variety}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Thermometer className="h-4 w-4 text-blue-600" />
                            <div>
                              <p className="text-sm font-medium">Moisture</p>
                              <p className="text-sm text-muted-foreground">{spice.moisture}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <div>
                              <p className="text-sm font-medium">Purity</p>
                              <p className="text-sm text-muted-foreground">{spice.purity}</p>
                            </div>
                          </div>
                        </div>

                        {spice.scoville && (
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-red-600" />
                            <div>
                              <p className="text-sm font-medium">Heat Level</p>
                              <p className="text-sm text-muted-foreground">{spice.scoville}</p>
                            </div>
                          </div>
                        )}

                        {spice.curcumin && (
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-yellow-600" />
                            <div>
                              <p className="text-sm font-medium">Curcumin Content</p>
                              <p className="text-sm text-muted-foreground">{spice.curcumin}</p>
                            </div>
                          </div>
                        )}

                        <div className="pt-4 border-t">
                          <p className="text-sm font-medium mb-1">Packaging Options</p>
                          <p className="text-sm text-muted-foreground">{spice.packaging}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Source Premium Spices?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
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
