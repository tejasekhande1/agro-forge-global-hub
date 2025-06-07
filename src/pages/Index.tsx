
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Wrench, Globe, Users, Award, Mail, Phone, MapPin, CheckCircle, ArrowRight, Truck, Factory, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-foreground">ENJO-SAK GLOBAL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-medium">Products</a>
              <a href="#sustainability" className="text-muted-foreground hover:text-primary transition-colors font-medium">Sustainability</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Agricultural themed */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
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
              <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white px-8 py-4 text-lg shadow-xl">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg backdrop-blur-sm">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/*      <section className="py-20 bg-gradient-to-r from-primary/5 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "25+", label: "Countries Served" },
              { icon: Truck, number: "1000+", label: "Tons Exported Monthly" },
              { icon: Factory, number: "15+", label: "Years Experience" },
              { icon: Users, number: "500+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">About ENJO-SAK GLOBAL PRIVATE LIMITED</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Built on Excellence & Trust</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ENJO-SAK GLOBAL PRIVATE LIMITED is a dynamic Indian export company delivering world-class
              agricultural products and engineering solutions. With decades of industry experience and global
              market access, we serve as your reliable partner in quality, sustainability, and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src="./about.jpg"
                alt="Modern Agricultural Technology" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry veterans with deep roots in agriculture and engineering, ENJO-SAK GLOBAL is
                built on expertise, trust, and a global vision. With access to India’s rich natural resources and
                advanced manufacturing infrastructure, we ensure every shipment meets the highest global
                standards.              </p>
              <div className="space-y-4">
                {[
                  "25+ years of combined industry expertise",
                  "Global network spanning 25+ countries",
                  "ISO certified quality management systems",
                  "Sustainable and ethical business practices"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Advisory Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <p className="font-semibold text-lg text-foreground">Mr. Arun M. Kotame</p>
                    <p className="text-primary font-medium">Agro Industry Specialist</p>
                    <p className="text-sm text-muted-foreground mt-1">25+ years transforming agricultural value chains</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <p className="font-semibold text-lg text-foreground">Mr. Vijay J. Shirke</p>
                    <p className="text-primary font-medium">Engineering & Automation Expert</p>
                    <p className="text-sm text-muted-foreground mt-1">25+ years in precision engineering solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Vision & Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3 text-lg">Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To be a globally trusted export partner, delivering India's finest agricultural produce and precision engineered solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 text-lg">Mission</h4>
                    <ul className="space-y-2">
                      {[
                        "Connect Indian producers with global buyers",
                        "Offer internationally compliant products",
                        "Build ethical, long-term partnerships"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Products & Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From farm-fresh agricultural exports to precision-engineered industrial solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Agro Exports */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh Agricultural Products Export" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Premium Agro Exports</CardTitle>
                <p className="text-muted-foreground text-lg">Farm-fresh products from certified Indian growers</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Fresh Vegetables</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Ginger", "Onion", "Maize", "Moringa", "Green Chilli", "Potato", "Tomato", "Okra"].map((item) => (
                        <Card key={item} className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-primary group cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{item}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Premium Fruits</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Banana", "Mangoes", "Pomegranate", "Guava", "Grapes", "Pineapple"].map((item) => (
                        <Card key={item} className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-green-500 group cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-green-600 transition-colors">{item}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Millets & Pulses</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {["Wheat", "Jowar", "Bajra", "Ragi/Nachni"].map((item) => (
                        <Card key={item} className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-orange-500 group cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-orange-600 transition-colors">{item}</span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Solutions */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Precision Engineering Solutions" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Engineering Solutions</CardTitle>
                <p className="text-muted-foreground text-lg">Precision engineered for global standards</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Zap, text: "Special Purpose Machines (SPMs)", color: "blue" },
                    { icon: Shield, text: "Dies & Toolings", color: "purple" },
                    { icon: Wrench, text: "PLC & Robotics Automation", color: "indigo" },
                    { icon: Factory, text: "Tubular Components", color: "gray" },
                    { icon: Zap, text: "High-precision Laser Cutting Services", color: "yellow" }
                  ].map((service, index) => (
                    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-primary">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <span className="text-muted-foreground font-medium group-hover:text-primary transition-colors">{service.text}</span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-green-50 rounded-xl border border-primary/10">
                  <p className="text-muted-foreground font-medium">
                    Built for global industrial standards with complete customization options and 24/7 support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Why Choose ENJO-SAK</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted by Global Leaders</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Direct-from-Source Pricing", desc: "No middlemen, maximum value for your investment" },
              { icon: Factory, title: "Advanced Infrastructure", desc: "State-of-the-art facilities for agro & engineering" },
              { icon: Users, title: "Expert Leadership", desc: "25+ years of combined industry expertise" },
              { icon: Leaf, title: "Sustainable Sourcing", desc: "Ethical practices that benefit everyone" },
              { icon: Award, title: "Quality Certified", desc: "International standards and certifications" },
              { icon: Truck, title: "Global Network", desc: "Trusted partnerships across 25+ countries" }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">Sustainability</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Committed to a Greener Future
            </h2>
            <p className="text-xl text-green-600 font-semibold">Building tomorrow's sustainable world today 🌱</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Agricultural Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ethical farmer partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Residue-free and organic-friendly inputs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Water-efficient technologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Engineering Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Energy-efficient machines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Waste & scrap metal recycling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Global eco-compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Social Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Fair pricing & training for farmers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Rural job creation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Support for women & youth-led businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-green-100 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Green Goals for 2026</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Align with UN SDGs",
                "Cut carbon footprint by 30%", 
                "Support 1000+ farmers in sustainable practices",
                "Launch eco-efficient machines"
              ].map((goal, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-muted-foreground font-medium">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Trusted Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {["FSSAI", "APEDA", "SPICE BOARD"].map((cert) => (
                <div key={cert} className="group">
                  <Badge variant="outline" className="text-lg py-4 px-8 border-2 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110">
                    {cert}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Contact Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Build Something Great Together</h2>
            <p className="text-xl text-muted-foreground">Ready to start your journey with ENJO-SAK?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Registered Office</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Plot No 47 G.NO 140, Swami Samarth Nagar, Chh. Sambhaji Nagar, Maharashtra, India – 431136
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-muted-foreground font-medium text-lg">+91 9579291495</p>
                  <p className="text-muted-foreground font-medium text-lg">+91 8605995967</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Email & Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-muted-foreground font-medium text-lg">export@enjosakglobal.com</p>
                  <p className="text-muted-foreground font-medium text-lg">www.enjosakglobal.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="h-7 w-7 text-white" />
                </div>
                <span className="font-bold text-2xl">ENJO-SAK GLOBAL</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Bridging India's Agricultural Abundance & Engineering Excellence with the World
              </p>
              <p className="text-gray-400">
                © 2024 ENJO-SAK GLOBAL PRIVATE LIMITED. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "About ENJO-SAK", href: "#about" },
                  { label: "Products", href: "#products" },
                  { label: "Sustainability", href: "#sustainability" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Legal</h3>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
