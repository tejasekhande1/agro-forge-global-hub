import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Users,
  CheckCircle,
  ArrowRight,
  Handshake,
  Factory,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const certifications = [
    {name: "ISO 9001:2015 CERTIFIED", image: "/certifications/iso-certification.png"},
    {name: "FSSAI", image: "/certifications/fssai-certification.png"},
    {name: "APEDA", image: "/certifications/apeda-certification.png"},
    {name: "SPICE BOARD", image: "/certifications/spice-board-certification.png"},
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2 mb-6">
                🌱 Sustainable Agriculture & Engineering Excellence
              </Badge>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Bridging India's Agricultural Abundance with
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"> Global Markets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
              Premium Agro Commodities & Precision Engineered Solutions
            </p>
            <p className="text-lg text-green-300 font-semibold mb-12 italic">
              "Rooted in Quality, Driven by Innovation."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white px-8 py-4 text-lg shadow-xl flex items-center"
              >
                <a href="/products" className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5"/>
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5"/>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg backdrop-blur-sm flex items-center"
              >
                <a href="#contact" className="flex items-center">
                  <Handshake className="mr-2 h-5 w-5"/>
                  Partner with Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Built on Excellence & Trust */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              About ENJO-SAK GLOBAL
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Built on Excellence & Trust</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ENJO-SAK GLOBAL PRIVATE LIMITED is a dynamic Indian export company delivering world-class
              agricultural products and engineering solutions. With decades of industry experience and global
              market access, we serve as your reliable partner in quality, sustainability, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="./about2.jpg"
                alt="Modern Agricultural Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry veterans with deep roots in agriculture and engineering, ENJO-SAK GLOBAL is
                built on expertise, trust, and a global vision. With access to India's rich natural resources and
                advanced manufacturing infrastructure, we ensure every shipment meets the highest global standards.
              </p>
              <div className="space-y-4">
                {[
                  "25+ years of combined industry expertise",
                  "Global network spanning 25+ countries",
                  "ISO certified quality management systems",
                  "Sustainable and ethical business practices"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0"/>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Solution */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Premium Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of export-quality, farm-fresh products and precision engineering solutions
              sourced directly from Indian growers and manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted by Global Leaders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted by Global Leaders</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {icon: Factory, title: "Advanced Engineering & Agro Infrastructure"},
              {icon: Users, title: "Experienced Management & Advisory"},
              {icon: Handshake, title: "Strong Network across Farming and Industrial Ecosystems"},
              {icon: Leaf, title: "Sustainable & Ethical Business Practices"}
            ].map((benefit, index) => (
              <Card key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white"/>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Certifications
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-12">Certifications</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="group hover:cursor-pointer">
                  <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group-hover:scale-105 flex flex-col items-center justify-between shadow-sm w-44 h-48">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center relative">
                      <img
                        src={cert.image}
                        alt={`${cert.name} certification`}
                        className="w-20 h-20 object-contain absolute"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-700 font-medium text-center mt-1 leading-tight line-clamp-2">
                      {cert.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;