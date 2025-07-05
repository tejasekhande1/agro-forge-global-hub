
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Wrench,
  Globe,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Handshake,
  Factory,
  Zap,
  Shield,
  ShoppingBag,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Index = () => {

  const products = [
    { name: "Ginger (Hydrated & Dehydrated)", image: "/products/ginger.jpg" },
    { name: "Onion", image: "/products/onion.jpg" },
    { name: "Maize", image: "/products/maize.jpg" },
    { name: "Moringa Powder", image: "/products/moringa_powder.webp" },
    { name: "Green Chilli", image: "/products/green_chilli.jpg" },
    { name: "Potato", image: "/products/potato.jpg" },
    { name: "Tomato", image: "/products/tomato.jpg" },
    { name: "Okra", image: "/products/okra.jpg" },
    { name: "Moringa", image: "/products/moringa.webp" },
  ];

  const fruits = [
    { name: "Banana", image: "/products/banana.jpg" },
    { name: "Mangoes", image: "/products/mango.jpg" },
    { name: "Pomegranate", image: "/products/pomegranate.jpg" },
    { name: "Guava", image: "/products/gauva.jpg" },
    { name: "Grapes", image: "/products/grapes.jpg" },
    { name: "Watermelon", image: "/products/watermelon.jpg" },
    { name: "Muskmelon (Cantaloupe)", image: "/products/muskmelon.jpg" },
    { name: "Sweet Lime (Mosambi)", image: "/products/orange.jpg" },
    { name: "Lemon", image: "/products/lemon.jpg" },
    { name: "Sapota (Chikoo)", image: "/products/sapota.jpg" },
    { name: "Custard Apple (Sitaphal)", image: "/products/custard_apple.jpg" },
    { name: "Jackfruit", image: "/products/jackfruit.jpg" },
    { name: "Pineapple", image: "/products/pinapple.jpg" },
  ];

  const grains = [
    { name: "Wheat", image: "/products/wheat.jpg" },
    { name: "Jowar (Sorghum)", image: "/products/jowar.jpg" },
    { name: "Bajra (Pearl Millet)", image: "/products/bajra.jpg" },
    { name: "Ragi/Nachni", image: "/products/nachni.jpg" },
  ];

  return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div
                    className="w-10 h-10 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="h-6 w-6 text-white"/>
                </div>
                <span className="font-bold text-sm sm:text-xl text-foreground">
                  ENJO-SAK GLOBAL PRIVATE LIMITED
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#about"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
                <a href="#products"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">Products</a>
                <Link to="/spices"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">Spices</Link>
                <a href="#sustainability"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">Sustainability</a>
                <a href="#contact"
                   className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
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
                <Badge
                    className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2 mb-6 hover:cursor-pointer hover:text-white">
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
                {/* Explore Products Button */}
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white px-8 py-4 text-lg shadow-xl flex items-center"
                >
                  <a href="#products" className="flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5"/>
                    Explore Our Products
                    <ArrowRight className="ml-2 h-5 w-5"/>
                  </a>
                </Button>

                {/* Partner with Us Button */}
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
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">About ENJO-SAK GLOBAL PRIVATE
                LIMITED</Badge>
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
                    src="./about2.jpg"
                    alt="Modern Agricultural Technology"
                    className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by industry veterans with deep roots in agriculture and engineering, ENJO-SAK GLOBAL is
                  built on expertise, trust, and a global vision. With access to India's rich natural resources and
                  advanced manufacturing infrastructure, we ensure every shipment meets the highest global
                  standards. </p>
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

            <div className="grid md:grid-cols-2 gap-8">
              <Card
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-white"/>
                  </div>
                  <CardTitle className="text-2xl">Advisory Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <p className="font-semibold text-lg text-foreground">Mr. Arun M. Kotame</p>
                      <p className="text-primary font-medium">Agro Industry Specialist</p>
                      <p className="text-sm text-muted-foreground mt-1">25+ years transforming agricultural value
                        chains</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <p className="font-semibold text-lg text-foreground">Mr. Vijay J. Shirke</p>
                      <p className="text-primary font-medium">Engineering & Automation Expert</p>
                      <p className="text-sm text-muted-foreground mt-1">25+ years in automotive & SPM manufacturing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                  className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-green-50">
                <CardHeader>
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-white"/>
                  </div>
                  <CardTitle className="text-2xl">Vision & Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3 text-lg">Vision</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        To be a globally trusted export partner, delivering India's finest agricultural produce and
                        precision
                        engineered solutions with integrity, innovation, and sustainability. </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3 text-lg">Mission</h4>
                      <ul className="space-y-2">
                        {[
                          "Connect Indian producers with global buyers",
                          "Offer high-quality, internationally compliant products",
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
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Products & Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a wide range of export-quality, farm-fresh products
                sourced directly from Indian growers:
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-12">
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
                      <Leaf className="h-6 w-6 text-white"/>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Agro Exports</CardTitle>
                  <p className="text-muted-foreground text-lg">Farm-fresh products from certified Indian growers</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Fresh Vegetables</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                        {products.map((product) => (
                            <Card
                                key={product.name}
                                className="p-3 hover:shadow-lg transition-shadow border-l-4 border-l-primary group cursor-pointer"
                            >
                              <div className="flex flex-col items-center text-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-30 h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                                />
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                  {product.name}
                                </span>
                              </div>
                            </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Premium Fruits</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                        {fruits.map((fruit) => (
                            <Card
                                key={fruit.name}
                                className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-green-500 group cursor-pointer"
                            >
                              <div className="flex flex-col items-center text-center">
                                <img
                                    src={fruit.image}
                                    alt={fruit.name}
                                    className="w-30 h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                                />
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-green-600 transition-colors">
                                  {fruit.name}
                                </span>
                              </div>
                            </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Millets & Pulses</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
                        {grains.map((grain) => (
                            <Card
                                key={grain.name}
                                className="p-3 hover:shadow-md transition-shadow border-l-4 border-l-orange-500 group cursor-pointer"
                            >
                              <div className="flex flex-col items-center text-center">
                                <img
                                    src={grain.image}
                                    alt={grain.name}
                                    className="w-30 h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                                />
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-orange-600 transition-colors">
                                  {grain.name}
                                </span>
                              </div>
                            </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engineering Solutions */}
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group flex flex-col md:flex-row">
                {/* Left side: Image */}
                <div className="relative h-80 md:h-auto md:w-1/2 overflow-hidden">
                  <img
                      src="/products/engineering.webp"
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

                {/* Right side: Content */}
                <div className="md:w-1/2 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Engineering Solutions</CardTitle>
                    <p className="text-muted-foreground text-lg">Precision engineered for global standards</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Zap,
                          text: "<strong>Special Purpose Machines (SPMs)</strong> for automotive and industrial applications",
                          color: "blue",
                        },
                        {
                          icon: Shield,
                          text: "<strong>Precision Dies and Toolings</strong> (blanking, forming, piercing, progressive)",
                          color: "purple",
                        },
                        {
                          icon: Wrench,
                          text: "<strong>Automation Systems</strong> with PLCs and robotics integration",
                          color: "indigo",
                        },
                        {
                          icon: Factory,
                          text: "<strong>Automotive Parts & Tubular Components</strong>",
                          color: "gray",
                        },
                        {
                          icon: Zap,
                          text: "<strong>High-precision laser cutting services</strong>",
                          color: "yellow",
                        },
                      ].map((service, index) => (
                          <Card
                              key={index}
                              className="p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-primary"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1">
                <span
                    className="text-muted-foreground font-medium group-hover:text-primary transition-colors"
                    dangerouslySetInnerHTML={{ __html: service.text }}
                />
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                          </Card>
                      ))}
                    </div>
                    <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-green-50 rounded-xl border border-primary/10">
                      <p className="text-muted-foreground font-medium">
                        Built to meet global industrial standards, with tailored design and development.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge
                  className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Why
                Choose ENJO-SAK GLOBAL PRIVATE
                LIMITED</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted by Global Leaders</h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {icon: Factory, title: "Advanced Engineering & Agro Infrastructure"},
                {icon: Globe, title: "Direct-from-source Pricing"},
                {icon: Users, title: "Experienced Management & Advisory"},
                {icon: Handshake, title: "Strong Network across Farming and Industrial Ecosystems"}
              ].map((benefit, index) => (
                  <Card key={index}
                        className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-green-50">
                    <CardContent className="p-8 text-center">
                      <div
                          className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <benefit.icon className="h-8 w-8 text-white"/>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
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
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4 hover:cursor-pointer hover:text-white">Sustainability</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Committed to a Greener Future
              </h2>
              <p className="text-md text-green-600 font-semibold">
                At ENJO-SAK GLOBAL PRIVATE LIMITED, sustainability is not just a practice—it’s a principle that
                guides everything we do. Whether we're exporting farm-fresh produce or designing precision
                engineering systems, we strive to minimize our environmental impact and empower communities. 🌱
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600"/>
                  </div>
                  <CardTitle className="text-green-700">Sustainable Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                      <span>
                      <strong>Ethical Sourcing:</strong> We work directly with farmers and cooperatives who follow good agricultural practices (GAP).
                    </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Natural Inputs:</strong> Prioritizing the use of organic-friendly and residue-free crop protection solutions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Water Management:</strong> Supporting farmers who use drip irrigation and other water-saving technologies.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-blue-600"/>
                  </div>
                  <CardTitle className="text-blue-700">Sustainable Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Energy-Efficient Machines:</strong> Designing SPMs and automation systems that reduce energy consumption in production.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Material Optimization:</strong> Using high-quality materials that reduce waste and extend machine life.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Eco-Friendly Processes:</strong> Adopting cleaner manufacturing techniques in line with global environmental norms.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Waste Management:</strong> Recycling scrap metals and minimizing industrial waste in our production facilities.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600"/>
                  </div>
                  <CardTitle className="text-purple-700">Social Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Farmer Empowerment:</strong> Providing fair prices, consistent demand, and training to small and marginal farmers.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Skilled Employment:</strong> Generating skilled jobs in rural and semi-urban regions through our engineering and agro units.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>
                      <span><strong>Inclusive Growth:</strong> Ensuring value chains are inclusive, supporting women farmers, local vendors, and youth-led businesses.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-green-100 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Green Goals</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  "Align with UN Sustainable Development Goals (SDGs)",
                  "Reduce operational carbon footprint by 30% in the next 3 years",
                  "Support 1000+ farmers in sustainable water and soil practices",
                  "Launch a line of Eco-Efficient Machines by 2026"
                ].map((goal, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white"/>
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
              <h2 className="text-3xl font-bold text-foreground mb-12">Certifications</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "FSSAI", icon: Shield },
                  { name: "APEDA", icon: Award },
                  { name: "SPICE BOARD", icon: Leaf }
                ].map((cert) => (
                    <div key={cert.name} className="group hover:cursor-pointer">
                      <Badge variant="outline"
                             className="text-lg py-4 px-8 border-2 border-primary/20 hover:bg-primary hover:text-white hover:cursor-pointer transition-all duration-300 group-hover:scale-110 flex items-center gap-2">
                        <cert.icon className="h-5 w-5" />
                        {cert.name}
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
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Join Us on the Sustainability
                Journey</Badge>
              <h5 className="text-md md:text-lg font-bold text-muted-foreground">
                We believe growth and responsibility go hand in hand. By choosing ENJO-SAK, you’re not just
                choosing quality—you’re choosing a partner that cares for people and the planet.
              </h5>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Contact Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Build Something Great
                Together</h2>
              <p className="text-xl text-muted-foreground">Ready to start your journey with ENJO-SAK?</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                <CardHeader className="text-center">
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-8 w-8 text-white"/>
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
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="h-8 w-8 text-white"/>
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
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="h-8 w-8 text-white"/>
                  </div>
                  <CardTitle className="text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <p className="text-muted-foreground font-medium text-lg">enjosak33@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                <CardHeader className="text-center">
                  <div
                      className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Globe className="h-8 w-8 text-white"/>
                  </div>
                  <CardTitle className="text-xl">Website</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
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
                  <div
                      className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Leaf className="h-7 w-7 text-white"/>
                  </div>
                  <span className="font-bold text-2xl">ENJO-SAK GLOBAL PRIVATE LIMITED</span>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Bridging India's Agricultural Abundance & Engineering Excellence with the World
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-6">
                  <a href="https://www.facebook.com/profile.php?id=61577634555659"
                     className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <FaFacebook className="h-5 w-5 text-white"/>
                  </a>
                  <a href="https://www.instagram.com/enjosak_global?igsh=MTF4aXQ4YzN1N2Z5bQ%3D%3D&utm_source=qr"
                     className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <FaInstagram className="h-5 w-5 text-white"/>
                  </a>

                  <a
                      href="https://wa.me/8605995967"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-white"/>
                  </a>
                </div>

                <p className="text-gray-400">
                  © 2025 ENJO-SAK GLOBAL PRIVATE LIMITED. All rights reserved.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    {label: "About ENJO-SAK", href: "#about"},
                    {label: "Products", href: "#products"},
                    {label: "Spices", href: "/spices"},
                    {label: "Sustainability", href: "#sustainability"},
                    {label: "Contact", href: "#contact"}
                  ].map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith('#') ? (
                          <a href={link.href}
                             className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                            <ArrowRight
                                className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            <span>{link.label}</span>
                          </a>
                        ) : (
                          <Link to={link.href}
                                className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                            <ArrowRight
                                className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            <span>{link.label}</span>
                          </Link>
                        )}
                      </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-6 text-lg">Legal</h3>
                <ul className="space-y-3">
                  {["Privacy Policy", "Terms of Service"].map((item) => (
                      <li key={item}>
                        <a href="#"
                           className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group">
                          <ArrowRight
                              className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
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
