import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const certifications = [
    {name: "ISO 9001:2015 CERTIFIED", image: "/certifications/iso-certification.png"},
    {name: "FSSAI", image: "/certifications/fssai-certification.png"},
    {name: "APEDA", image: "/certifications/apeda-certification.png"},
    {name: "SPICE BOARD", image: "/certifications/spice-board-certification.png"},
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              About ENJO-SAK GLOBAL PRIVATE LIMITED
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Company Overview</h1>
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
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry veterans with deep roots in agriculture and engineering, ENJO-SAK GLOBAL is
                built on expertise, trust, and a global vision. With access to India's rich natural resources and
                advanced manufacturing infrastructure, we ensure every shipment meets the highest global
                standards.
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

          <div className="grid md:grid-cols-2 gap-8" id="vision-mission">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white"/>
                </div>
                <CardTitle className="text-2xl" id="leadership">Advisory Leadership</CardTitle>
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
                    <p className="text-sm text-muted-foreground mt-1">25+ years in automotive & SPM manufacturing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-600 rounded-2xl flex items-center justify-center mb-6">
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
                      precision engineered solutions with integrity, innovation, and sustainability.
                    </p>
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

      {/* Awards and Certifications */}
      <section className="py-16 bg-gray-50" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Awards and Certifications
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Certifications</h2>
          </div>
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
      </section>

      <Footer />
    </div>
  );
};

export default About;