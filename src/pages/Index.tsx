
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

const Index = () => {

  const certifications = [
    {name: "ISO 9001:2015 CERTIFIED", image: "/certifications/iso-certification.png"},
    {name: "FSSAI", image: "/certifications/fssai-certification.png"},
    {name: "APEDA", image: "/certifications/apeda-certification.png"},
    {name: "SPICE BOARD", image: "/certifications/spice-board-certification.png"},
  ];

  return (
      <div className="min-h-screen bg-background">
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
              <Badge
                  className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">About
                ENJO-SAK GLOBAL PRIVATE
                LIMITED</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Built on Excellence & Trust</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-justify">
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
                <p className="text-lg text-muted-foreground leading-relaxed text-justify">
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

            {/*<div className="grid md:grid-cols-2 gap-8">*/}
            {/*  <Card*/}
            {/*      className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">*/}
            {/*    <CardHeader>*/}
            {/*      <div*/}
            {/*          className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">*/}
            {/*        <Users className="h-8 w-8 text-white"/>*/}
            {/*      </div>*/}
            {/*      <CardTitle className="text-2xl">Advisory Leadership</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*      <div className="space-y-6">*/}
            {/*        <div className="p-4 bg-white rounded-xl shadow-sm">*/}
            {/*          <p className="font-semibold text-lg text-foreground">Mr. Arun M. Kotame</p>*/}
            {/*          <p className="text-primary font-medium">Agro Industry Specialist</p>*/}
            {/*          <p className="text-sm text-muted-foreground mt-1">25+ years transforming agricultural value*/}
            {/*            chains</p>*/}
            {/*        </div>*/}
            {/*        <div className="p-4 bg-white rounded-xl shadow-sm">*/}
            {/*          <p className="font-semibold text-lg text-foreground">Mr. Vijay J. Shirke</p>*/}
            {/*          <p className="text-primary font-medium">Engineering & Automation Expert</p>*/}
            {/*          <p className="text-sm text-muted-foreground mt-1">25+ years in automotive & SPM manufacturing</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </CardContent>*/}
            {/*  </Card>*/}

            {/*  <Card*/}
            {/*      className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-green-50">*/}
            {/*    <CardHeader>*/}
            {/*      <div*/}
            {/*          className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">*/}
            {/*        <Award className="h-8 w-8 text-white"/>*/}
            {/*      </div>*/}
            {/*      <CardTitle className="text-2xl">Vision & Mission</CardTitle>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*      <div className="space-y-6">*/}
            {/*        <div>*/}
            {/*          <h4 className="font-bold text-primary mb-3 text-lg">Vision</h4>*/}
            {/*          <p className="text-muted-foreground leading-relaxed">*/}
            {/*            To be a globally trusted export partner, delivering India's finest agricultural produce and*/}
            {/*            precision*/}
            {/*            engineered solutions with integrity, innovation, and sustainability. </p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*          <h4 className="font-bold text-primary mb-3 text-lg">Mission</h4>*/}
            {/*          <ul className="space-y-2">*/}
            {/*            {[*/}
            {/*              "Connect Indian producers with global buyers",*/}
            {/*              "Offer high-quality, internationally compliant products",*/}
            {/*              "Build ethical, long-term partnerships"*/}
            {/*            ].map((item, index) => (*/}
            {/*                <li key={index} className="flex items-center space-x-2">*/}
            {/*                  <div className="w-2 h-2 bg-primary rounded-full"></div>*/}
            {/*                  <span className="text-muted-foreground">{item}</span>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*          </ul>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </CardContent>*/}
            {/*  </Card>*/}
            {/*</div>*/}
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
        {/*<section id="sustainability" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">*/}
        {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="text-center mb-20">*/}
        {/*      <Badge*/}
        {/*          className="bg-green-100 text-green-700 border-green-200 mb-4 hover:cursor-pointer hover:text-white">Sustainability</Badge>*/}
        {/*      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">*/}
        {/*        Committed to a Greener Future*/}
        {/*      </h2>*/}
        {/*      <p className="text-md text-green-600 font-semibold">*/}
        {/*        At ENJO-SAK GLOBAL PRIVATE LIMITED, sustainability is not just a practice—it’s a principle that*/}
        {/*        guides everything we do. Whether we're exporting farm-fresh produce or designing precision*/}
        {/*        engineering systems, we strive to minimize our environmental impact and empower communities. 🌱*/}
        {/*      </p>*/}
        {/*    </div>*/}

        {/*    <div className="grid md:grid-cols-3 gap-8 mb-16">*/}
        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">*/}
        {/*        <CardHeader>*/}
        {/*          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">*/}
        {/*            <Leaf className="h-6 w-6 text-green-600"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-green-700">Sustainable Agriculture</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent>*/}
        {/*          <ul className="space-y-3 text-muted-foreground">*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span>*/}
        {/*              <strong>Ethical Sourcing:</strong> We work directly with farmers and cooperatives who follow good agricultural practices (GAP).*/}
        {/*            </span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Natural Inputs:</strong> Prioritizing the use of organic-friendly and residue-free crop protection solutions.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Water Management:</strong> Supporting farmers who use drip irrigation and other water-saving technologies.</span>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}

        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">*/}
        {/*        <CardHeader>*/}
        {/*          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">*/}
        {/*            <Wrench className="h-6 w-6 text-blue-600"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-blue-700">Sustainable Engineering</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent>*/}
        {/*          <ul className="space-y-3 text-muted-foreground">*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Energy-Efficient Machines:</strong> Designing SPMs and automation systems that reduce energy consumption in production.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Material Optimization:</strong> Using high-quality materials that reduce waste and extend machine life.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Eco-Friendly Processes:</strong> Adopting cleaner manufacturing techniques in line with global environmental norms.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Waste Management:</strong> Recycling scrap metals and minimizing industrial waste in our production facilities.</span>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}

        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white">*/}
        {/*        <CardHeader>*/}
        {/*          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">*/}
        {/*            <Users className="h-6 w-6 text-purple-600"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-purple-700">Social Sustainability</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent>*/}
        {/*          <ul className="space-y-3 text-muted-foreground">*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Farmer Empowerment:</strong> Providing fair prices, consistent demand, and training to small and marginal farmers.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Skilled Employment:</strong> Generating skilled jobs in rural and semi-urban regions through our engineering and agro units.</span>*/}
        {/*            </li>*/}
        {/*            <li className="flex items-start space-x-2">*/}
        {/*              <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"/>*/}
        {/*              <span><strong>Inclusive Growth:</strong> Ensuring value chains are inclusive, supporting women farmers, local vendors, and youth-led businesses.</span>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}
        {/*    </div>*/}

        {/*    <div className="bg-gradient-to-r from-primary/10 to-green-100 rounded-2xl p-8 border border-primary/20">*/}
        {/*      <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Green Goals</h3>*/}
        {/*      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">*/}
        {/*        {[*/}
        {/*          "Align with UN Sustainable Development Goals (SDGs)",*/}
        {/*          "Reduce operational carbon footprint by 30% in the next 3 years",*/}
        {/*          "Support 1000+ farmers in sustainable water and soil practices",*/}
        {/*          "Launch a line of Eco-Efficient Machines by 2026"*/}
        {/*        ].map((goal, index) => (*/}
        {/*            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">*/}
        {/*              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">*/}
        {/*                <CheckCircle className="h-5 w-5 text-white"/>*/}
        {/*              </div>*/}
        {/*              <span className="text-muted-foreground font-medium">{goal}</span>*/}
        {/*            </div>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-12">Certifications</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert) => (
                    <div key={cert.name} className="group hover:cursor-pointer">
                      <div
                          className="bg-white border-2 border-green-200 rounded-xl p-6 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group-hover:scale-105 flex flex-col items-center justify-between shadow-sm w-44 h-48">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center relative">
                          <img
                              src={cert.image}
                              alt={`${cert.name} certification`}
                              className="w-20 h-20 object-contain absolute"
                              onError={(e) => {
                                const img = e.currentTarget;
                                img.style.display = "none";
                                const fallbackIcon = img.nextElementSibling as HTMLElement;
                                if (fallbackIcon) fallbackIcon.style.display = "block";
                              }}
                          />
                          {/* <Shield className="h-6 w-6 text-green-600 hidden" /> */}
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

        {/* Contact */}
        {/*<section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">*/}

        {/*  /!*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*!/*/}
        {/*  /!*  <div className="text-center mb-20">*!/*/}
        {/*  /!*    <Badge*!/*/}
        {/*  /!*        className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Join*!/*/}
        {/*  /!*      Us on the Sustainability*!/*/}
        {/*  /!*      Journey</Badge>*!/*/}
        {/*  /!*    <h5 className="text-md md:text-lg font-bold text-muted-foreground">*!/*/}
        {/*  /!*      We believe growth and responsibility go hand in hand. By choosing ENJO-SAK, you’re not just*!/*/}
        {/*  /!*      choosing quality—you’re choosing a partner that cares for people and the planet.*!/*/}
        {/*  /!*    </h5>*!/*/}
        {/*  /!*  </div>*!/*/}
        {/*  /!*</div>*!/*/}

        {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="text-center mb-10">*/}
        {/*      <Badge*/}
        {/*          className="bg-primary/10 text-primary border-primary/20 mb-4 hover:cursor-pointer hover:text-white">Contact*/}
        {/*        Us</Badge>*/}
        {/*      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Build Something Great*/}
        {/*        Together</h2>*/}
        {/*      <p className="text-xl text-muted-foreground">Ready to start your journey with ENJO-SAK?</p>*/}
        {/*    </div>*/}

        {/*    <div className="grid md:grid-cols-3 gap-16">*/}
        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">*/}
        {/*        <CardHeader className="text-center">*/}
        {/*          <div*/}
        {/*              className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">*/}
        {/*            <MapPin className="h-8 w-8 text-white"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-xl">Registered Office</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent className="text-center">*/}
        {/*          <p className="text-muted-foreground leading-relaxed text-justify">*/}
        {/*            Plot No 47 G.NO 140, Swami Samarth Nagar, Chh. Sambhaji Nagar, Maharashtra, India – 431136*/}
        {/*          </p>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}

        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">*/}
        {/*        <CardHeader className="text-center">*/}
        {/*          <div*/}
        {/*              className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">*/}
        {/*            <Phone className="h-8 w-8 text-white"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-xl">Phone</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent className="text-center">*/}
        {/*          <div className="space-y-3">*/}
        {/*            <p className="text-muted-foreground font-medium text-lg">+91 9579291495</p>*/}
        {/*            <p className="text-muted-foreground font-medium text-lg">+91 8605995967</p>*/}
        {/*          </div>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}

        {/*      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">*/}
        {/*        <CardHeader className="text-center">*/}
        {/*          <div*/}
        {/*              className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">*/}
        {/*            <Mail className="h-8 w-8 text-white"/>*/}
        {/*          </div>*/}
        {/*          <CardTitle className="text-xl">Email</CardTitle>*/}
        {/*        </CardHeader>*/}
        {/*        <CardContent className="text-center">*/}
        {/*          <div className="space-y-3">*/}
        {/*            <p className="text-muted-foreground font-medium text-lg">export@enjosakglobal.com</p>*/}
        {/*            <p className="text-muted-foreground font-medium text-lg">enjosak33@gmail.com</p>*/}
        {/*          </div>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}

        {/*      /!*<Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white group">*!/*/}
        {/*      /!*  <CardHeader className="text-center">*!/*/}
        {/*      /!*    <div*!/*/}
        {/*      /!*        className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">*!/*/}
        {/*      /!*      <Globe className="h-8 w-8 text-white"/>*!/*/}
        {/*      /!*    </div>*!/*/}
        {/*      /!*    <CardTitle className="text-xl">Website</CardTitle>*!/*/}
        {/*      /!*  </CardHeader>*!/*/}
        {/*      /!*  <CardContent className="text-center">*!/*/}
        {/*      /!*    <div className="space-y-3">*!/*/}
        {/*      /!*      <p className="text-muted-foreground font-medium text-lg">www.enjosakglobal.com</p>*!/*/}
        {/*      /!*    </div>*!/*/}
        {/*      /!*  </CardContent>*!/*/}
        {/*      /!*</Card>*!/*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Footer */}

      </div>
  );
};

export default Index;
