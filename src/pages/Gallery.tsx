import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of products, facilities, and achievements
            </p>
          </div>

          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              Gallery content coming soon. This section will showcase our products, facilities, and company achievements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;