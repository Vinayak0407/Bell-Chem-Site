import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Analytics from "./components/Analytics";

// Core pages (loaded eagerly — small and needed immediately)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Everything else is code-split per route
const AboutPage = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./pages/Products"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const ContactPage = lazy(() => import("./pages/Contact"));
const QuoteRequestPage = lazy(() => import("./pages/QuoteRequest"));

const TextileProcessing = lazy(() => import("./pages/TextileProcessing"));
const DischargeDyes = lazy(() => import("./pages/DischargeDyes"));
const FluorescentDyes = lazy(() => import("./pages/FluorescentDyes"));
const PigmentDyes = lazy(() => import("./pages/PigmentDyes"));
const SolventDyes = lazy(() => import("./pages/SolventDyes"));
const OilColors = lazy(() => import("./pages/OilColors"));
const ReactiveDyes = lazy(() => import("./pages/ReactiveDyes"));
const DisperseDyes = lazy(() => import("./pages/DisperseDyes"));
const AcidDyes = lazy(() => import("./pages/AcidDyes"));
const DirectDyes = lazy(() => import("./pages/DirectDyes"));
const IndustrialChemicals = lazy(() => import("./pages/IndustrialChemicals"));
const SpecialtyChemicals = lazy(() => import("./pages/SpecialtyChemicals"));
const TextileAuxiliaries = lazy(() => import("./pages/TextileAuxiliaries"));

const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const InsightsPage = lazy(() => import("./pages/Insights"));
const InsightPostPage = lazy(() => import("./pages/InsightPost"));

const queryClient = new QueryClient();

const RouteFade = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-in fade-in duration-500">
      {children}
    </div>
  );
};

const PageFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-2 border-muted border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <RouteFade>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                {/* Core pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/quote" element={<QuoteRequestPage />} />

                {/* Product categories */}
                <Route path="/textileprocessing" element={<TextileProcessing />} />
                <Route path="/dischargedyes" element={<DischargeDyes />} />

                {/* SEO redirect */}
                <Route
                  path="/fluorescentcolors"
                  element={<Navigate to="/fluorescent-dyes" replace />}
                />
                <Route path="/fluorescent-dyes" element={<FluorescentDyes />} />

                <Route path="/pigmentdyes" element={<PigmentDyes />} />
                <Route path="/solventdyes" element={<SolventDyes />} />
                <Route path="/oilcolors" element={<OilColors />} />
                <Route path="/reactivedyes" element={<ReactiveDyes />} />
                <Route path="/dispersedyes" element={<DisperseDyes />} />
                <Route path="/aciddyes" element={<AcidDyes />} />
                <Route path="/directdyes" element={<DirectDyes />} />
                <Route path="/industrialchemicals" element={<IndustrialChemicals />} />
                <Route path="/specialtychemicals" element={<SpecialtyChemicals />} />
                <Route path="/textileauxiliaries" element={<TextileAuxiliaries />} />

                {/* Content */}
                <Route path="/success-stories" element={<CaseStudiesPage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/insights/:slug" element={<InsightPostPage />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </RouteFade>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
