import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import IndustriesPage from "./pages/Industries";
import ContactPage from "./pages/Contact";
import QuoteRequestPage from "./pages/QuoteRequest";
import NotFound from "./pages/NotFound";
// Product category pages
import TextileProcessing from "./pages/TextileProcessing";
import DischargeDyes from "./pages/DischargeDyes";
import FluorescentDyes from "./pages/FluorescentDyes";
import PigmentDyes from "./pages/PigmentDyes";
import SolventDyes from "./pages/SolventDyes";
import OilColors from"./pages/OilColors";
import ReactiveDyes from "./pages/ReactiveDyes";
import DisperseDyes from "./pages/DisperseDyes";
import AcidDyes from "./pages/AcidDyes";
import DirectDyes from "./pages/DirectDyes";
import IndustrialChemicals from "./pages/IndustrialChemicals";
import SpecialtyChemicals from "./pages/SpecialtyChemicals";
import TextileAuxiliaries from "./pages/TextileAuxiliaries";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Sonner />
        <div className="min-h-screen" style={{
          backgroundImage: 'url("/SwirlingSpectrum.png")',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          animation: 'panBackground 30s ease infinite'
        }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quote" element={<QuoteRequestPage />} />
              {/* Product category routes */}
              <Route path="/textileprocessing" element={<TextileProcessing />} />
              <Route path="/dischargedyes" element={<DischargeDyes />} />
              <Route path="/fluorescentcolors" element={<FluorescentDyes />} />
              <Route path="/solventdyes" element={<SolventDyes />} />
              <Route path="/pigmentdyes" element={<PigmentDyes />} />
              <Route path="/oilcolors" element={<OilColors />} />
              <Route path="/reactivedyes" element={<ReactiveDyes />} />
              <Route path="/dispersedyes" element={<DisperseDyes />} />
              <Route path="/aciddyes" element={<AcidDyes />} />
              <Route path="/directdyes" element={<DirectDyes />} />
              <Route path="/industrialchemicals" element={<IndustrialChemicals />} />
              <Route path="/specialtychemicals" element={<SpecialtyChemicals />} />
              <Route path="/textileauxiliaries" element={<TextileAuxiliaries />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
