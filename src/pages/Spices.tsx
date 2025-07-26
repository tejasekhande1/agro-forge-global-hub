
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Award,
  ArrowLeft,
  Package,
} from "lucide-react";
import {spicesList} from "@/data/products.ts";

const Spices = () => {
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
      {/* Hero Section */}
      <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              Products
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
              Authentic Indian Spices
            </h1>
            <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
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
            {spicesList.map((spice, index) => (
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
{/*   <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-red-600">
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
      </section>*/}
    </div>
  );
};

export default Spices;
