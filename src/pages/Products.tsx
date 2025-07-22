import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Wrench, ArrowRight, Factory, Zap, Shield } from "lucide-react";
import { products, fruits, grains } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Products & Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Products & Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Premium Solutions</h1>
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
                  <div id="vegetables">
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
                  
                  <div id="fruits">
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
                  
                  <div id="millets">
                    <h4 className="font-semibold mb-3 text-primary">Millets & Grains</h4>
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

                  {/* Placeholder sections for other product categories */}
                  <div id="pulses" className="text-center py-8 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Pulses</h4>
                    <p className="text-muted-foreground">Coming soon - Premium quality pulses from Indian farmers</p>
                  </div>

                  <div id="grains" className="text-center py-8 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Grains and Cereals</h4>
                    <p className="text-muted-foreground">Coming soon - High-quality grains and cereals</p>
                  </div>

                  <div id="dry-fruits" className="text-center py-8 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Dry Fruits and Nuts</h4>
                    <p className="text-muted-foreground">Coming soon - Premium dry fruits and nuts</p>
                  </div>

                  <div id="dehydrated" className="text-center py-8 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Dehydrated Products</h4>
                    <p className="text-muted-foreground">Coming soon - Dehydrated vegetables and fruits</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Solutions */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden group flex flex-col md:flex-row" id="engineering">
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
                    <Wrench className="h-6 w-6 text-white"/>
                  </div>
                </div>
              </div>

              {/* Right side: Content */}
              <div className="md:w-1/2 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Engineering Goods</CardTitle>
                  <p className="text-muted-foreground text-lg">Precision engineered for global standards</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Zap,
                        text: "<strong>Special Purpose Machines (SPMs)</strong> for automotive and industrial applications",
                      },
                      {
                        icon: Shield,
                        text: "<strong>Precision Dies and Toolings</strong> (blanking, forming, piercing, progressive)",
                      },
                      {
                        icon: Wrench,
                        text: "<strong>Automation Systems</strong> with PLCs and robotics integration",
                      },
                      {
                        icon: Factory,
                        text: "<strong>Automotive Parts & Tubular Components</strong>",
                      },
                      {
                        icon: Zap,
                        text: "<strong>High-precision laser cutting services</strong>",
                      },
                    ].map((service, index) => (
                      <Card
                        key={index}
                        className="p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 border-l-primary"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors"/>
                          </div>
                          <div className="flex-1">
                            <span
                              className="text-muted-foreground font-medium group-hover:text-primary transition-colors"
                              dangerouslySetInnerHTML={{__html: service.text}}
                            />
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"/>
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

      <Footer />
    </div>
  );
};

export default Products;