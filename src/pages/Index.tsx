
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Wrench, Globe, Users, Award, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">ENJO-SAK GLOBAL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="#sustainability" className="text-muted-foreground hover:text-primary transition-colors">Sustainability</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/20 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bridging India's Agricultural Abundance & 
              <span className="text-primary"> Engineering Excellence</span> with the World
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Premium Agro Commodities | Precision Engineered Solutions
            </p>
            <p className="text-lg text-primary font-semibold mb-8">
              "Rooted in Quality, Driven by Innovation."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Products
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            ENJO-SAK GLOBAL PRIVATE LIMITED is a dynamic Indian export company delivering world-class agricultural products and engineering solutions. With decades of industry experience and global market access, we serve as your reliable partner in quality, sustainability, and innovation.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About ENJO-SAK</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded by industry veterans with deep roots in agriculture and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Our Story */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built on expertise, trust, and a global vision. Leveraging India's natural resources and advanced manufacturing to deliver consistent global-standard solutions.
                </p>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Advisory Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Mr. Arun M. Kotame</p>
                    <p className="text-sm text-muted-foreground">Agro Industry Specialist (25+ yrs)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Mr. Vijay J. Shirke</p>
                    <p className="text-sm text-muted-foreground">Engineering & Automation Expert (25+ yrs)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Vision & Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      To be a globally trusted export partner, delivering India's finest agricultural produce and precision engineered solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Mission</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Connect Indian producers with global buyers</li>
                      <li>• Offer internationally compliant products</li>
                      <li>• Build ethical, long-term partnerships</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Products & Services</h2>
            <p className="text-lg text-muted-foreground">
              Premium agricultural exports and precision engineering solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Agro Exports */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Agro Exports</CardTitle>
                    <p className="text-muted-foreground">Farm-fresh products from Indian growers</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Vegetables</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Ginger", "Onion", "Maize", "Moringa", "Green Chilli", "Potato", "Tomato", "Okra"].map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fruits</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Banana", "Mangoes", "Pomegranate", "Guava", "Grapes", "Pineapple"].map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Millets & Pulses</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Wheat", "Jowar", "Bajra", "Ragi/Nachni"].map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Solutions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Engineering Solutions</CardTitle>
                    <p className="text-muted-foreground">Precision engineered for global standards</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Special Purpose Machines (SPMs)",
                    "Dies & Toolings",
                    "PLC & Robotics Automation",
                    "Tubular Components",
                    "High-precision Laser Cutting Services"
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Built for global industrial standards with customization options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose ENJO-SAK</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Direct-from-Source Pricing",
              "Advanced Agro & Engineering Infrastructure",
              "Expert Leadership",
              "Sustainable, Ethical Sourcing",
              "Trusted Global Network"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sustainability at ENJO-SAK
            </h2>
            <p className="text-lg text-primary font-semibold">Committed to a Greener Future 🌱</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Agricultural Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Ethical farmer partnerships</li>
                  <li>• Residue-free and organic-friendly inputs</li>
                  <li>• Water-efficient technologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Engineering Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Energy-efficient machines</li>
                  <li>• Waste & scrap metal recycling</li>
                  <li>• Global eco-compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Social Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fair pricing & training for farmers</li>
                  <li>• Rural job creation</li>
                  <li>• Support for women & youth-led businesses</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-xl font-bold text-primary mb-4">Green Goals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Align with UN SDGs",
                "Cut carbon footprint by 30% (next 3 yrs)",
                "Support 1000+ farmers in sustainable practices",
                "Launch eco-efficient machines by 2026"
              ].map((goal, index) => (
                <div key={index} className="text-muted-foreground">
                  • {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8">Certifications</h2>
            <div className="flex justify-center space-x-8">
              {["FSSAI", "APEDA", "SPICE BOARD"].map((cert) => (
                <Badge key={cert} variant="outline" className="text-lg py-2 px-4">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground">Get in touch with our team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Registered Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plot No 47 G.NO 140, Swami Samarth Nagar, Chh. Sambhaji Nagar, Maharashtra, India – 431136
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>+91 9579291495</p>
                  <p>+91 8605995967</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email & Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p>export@enjosakglobal.com</p>
                  <p>www.enjosakglobal.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">ENJO-SAK GLOBAL</span>
              </div>
              <p className="text-muted mb-4">
                Bridging India's Agricultural Abundance & Engineering Excellence with the World
              </p>
              <p className="text-sm text-muted">
                © 2024 ENJO-SAK GLOBAL PRIVATE LIMITED. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#about" className="hover:text-primary transition-colors">About ENJO-SAK</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
                <li><a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
