
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Spices from "./pages/Spices";
import NotFound from "./pages/NotFound";
import Vision from "@/pages/About/Vision.tsx";
import Navbar from "@/components/common/Navbar.tsx";
import Footer from "@/components/common/Footer.tsx";
import Leadership from "@/pages/About/Leadership.tsx";
import Certifications from "@/pages/About/Certification.tsx";
import CompanyOverview from "@/pages/About/CompanyOverview.tsx";
import ProductCategoryPage from "@/pages/ProductCategoryPage.tsx";
import Gallery from "@/pages/Gallery.tsx";
import Contact from "@/pages/Contact.tsx";
import EngineeringSolutions from "@/pages/EngineeringSolutions.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/spices" element={<Spices />} />
          <Route path="/about/vision-mission" element={<Vision/>}/>
          <Route path="/about/leadership" element={<Leadership/>}/>
          <Route path="/about/awards-certifications" element={<Certifications/>}/>
          <Route path="/about/company-overview" element={<CompanyOverview/>}/>
          <Route path="/products/:category" element={<ProductCategoryPage/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/engineering-solutions' element={<EngineeringSolutions/>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
