import { useMemo, useRef, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { ShieldCheck, Search, PackageSearch, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import textileDyesImg from "@/assets/textile-dyes.jpg";
import chemicalLabImg from "@/assets/chemical-lab.jpg";
import oilColorsImg from "@/assets/oil-colors.jpg";
import pigmentDyesImg from "@/assets/PigmentDyes.jpg";
import solventDyesImg from "@/assets/solvent-dyes.jpg";
import fluorescentDyesImg from "@/assets/FluorescentDyes.jpg";
import dischargeDyesImg from "@/assets/DischargeDyes.jpg";
import textileProcessingImg from "@/assets/TextileProcessing.jpg";

const dyes = [
  { title: "Oil Colors", slug: "oilcolors", description: "High-purity oil-soluble colors formulated for deep and uniform shades.", icon: "🎨", image: oilColorsImg },
  { title: "Pigment Colors", slug: "pigmentdyes", description: "Versatile, high-stability pigments providing superior lightfastness and durability.", icon: "🌈", image: pigmentDyesImg },
  { title: "Solvent Dyes", slug: "solventdyes", description: "Premium solvent-soluble dyes with excellent transparency and fastness.", icon: "💧", image: solventDyesImg },
  { title: "Direct Dyes", slug: "directdyes", description: "Cost-effective dyes for cellulosic fibers with excellent color yield.", icon: "🎪", image: textileDyesImg },
  { title: "Fluorescent Colors", slug: "fluorescent-dyes", description: "High-visibility fluorescent colors for vibrant glowing shades.", icon: "✨", image: fluorescentDyesImg },
  { title: "Acid Dyes", slug: "aciddyes", description: "High-strength acid dyes suitable for wool, silk, nylon, and industrial uses.", icon: "⚗️", image: textileDyesImg },
  { title: "Reactive Dyes", slug: "reactivedyes", description: "Reactive dyes offering excellent fastness and strong fiber bonding.", icon: "🧪", image: textileDyesImg },
  { title: "Discharge Colors", slug: "dischargedyes", description: "High-purity dyes for clean discharge effects and sharp contrast printing.", icon: "✂️", image: dischargeDyesImg }
];

const chemicals = [
  { title: "Industrial Chemicals", slug: "industrialchemicals", description: "High-grade chemicals for textile, and manufacturing applications.", icon: "⚗️", image: chemicalLabImg },
  { title: "Textile Processing", slug: "textileprocessing", description: "High-performance chemicals for every stage of textile processing.", icon: "🏭", image: textileProcessingImg },
  { title: "Specialty Chemicals", slug: "specialtychemicals", description: "Precision-engineered specialty chemicals for high-performance applications.", icon: "🧬", image: chemicalLabImg },
  { title: "Textile Auxiliaries", slug: "textileauxiliaries", description: "Auxiliaries that enhance efficiency, compatibility, and process control.", icon: "🔬", image: chemicalLabImg }
];

const credentials = [
  "ISO 9001:2015 Certified",
  "REACH Compliant",
  "FDA-Approved Grades Available",
];

type Category = "all" | "dyes" | "chemicals";
type ProductItem = { title: string; slug: string; description: string; icon: string; image: string };

/** Big, tall, photo-led tile — replaces the old small icon-only card. */
const ProductTile = ({ item }: { item: ProductItem }) => (
  <Link to={`/${item.slug}`} className="block h-full">
    <Card className="card-shimmer group relative h-[380px] sm:h-[420px] overflow-hidden border-0 shadow-elegant hover:shadow-professional transition-all duration-500 hover:-translate-y-2">
      <OptimizedImage
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        width={400}
        height={420}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 transition-opacity duration-500 group-hover:from-black/95" />

      <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-background/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {item.icon}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
        <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
        <CardDescription className="text-white/85 leading-relaxed line-clamp-2">
          {item.description}
        </CardDescription>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-white pt-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Explore
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Card>
  </Link>
);

const CategoryGrid = ({ items }: { items: ProductItem[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item) => (
      <div key={item.slug} className="h-full animate-in fade-in zoom-in-95 duration-300">
        <ProductTile item={item} />
      </div>
    ))}
  </div>
);

/** Full-bleed horizontally scrolling row — extends to the true viewport edges
 * with a CSS mask for the fade (not a stacked overlay, which clips awkwardly). */
const CategoryRow = ({ items }: { items: ProductItem[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-[max(1rem,calc((100vw-80rem)/2+1rem))] [scrollbar-width:thin]"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        {items.map((item) => (
          <div key={item.slug} className="snap-start shrink-0 w-[280px] sm:w-[320px]">
            <ProductTile item={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button variant="outline" size="icon" onClick={() => scrollByCards(-1)} aria-label="Scroll left">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => scrollByCards(1)} aria-label="Scroll right">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const isFiltering = query.trim() !== "" || category !== "all";

  const filteredDyes = useMemo(() => {
    if (category === "chemicals") return [];
    const q = query.trim().toLowerCase();
    return q ? dyes.filter((d) => d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)) : dyes;
  }, [query, category]);

  const filteredChemicals = useMemo(() => {
    if (category === "dyes") return [];
    const q = query.trim().toLowerCase();
    return q ? chemicals.filter((c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) : chemicals;
  }, [query, category]);

  const hasResults = filteredDyes.length > 0 || filteredChemicals.length > 0;

  return (
    <>
      <PageHero
        title="Our Product Range"
        description="A complete range of dyes and chemicals manufactured to meet international quality standards."
        badges={credentials.map((label) => ({ icon: <ShieldCheck className="h-4 w-4" />, label }))}
        image={
          <div className="relative rounded-2xl overflow-hidden shadow-professional">
            <img src={textileDyesImg} alt="Vibrant textile dyes and chemicals" className="w-full h-[380px] object-cover" loading="lazy" />
          </div>
        }
      />

      <section id="products" className="py-20 lg:py-28 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search + Filter */}
          <Reveal className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-16 bg-card rounded-2xl border border-border shadow-soft p-4">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-9"
                aria-label="Search products"
              />
            </div>

            <Tabs value={category} onValueChange={(v) => setCategory(v as Category)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="dyes">Dyes</TabsTrigger>
                <TabsTrigger value="chemicals">Chemicals</TabsTrigger>
              </TabsList>
            </Tabs>
          </Reveal>

          {!hasResults && (
            <div className="text-center py-20">
              <PackageSearch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No products match "{query}". Try a different search term.
              </p>
            </div>
          )}
        </div>

        {/* Industrial Dyes Section */}
        {filteredDyes.length > 0 && (
          <div className="mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionIntro
                title="Industrial Dyes"
                description="High-performance dyes for textile and industrial applications."
              />
            </div>

            {isFiltering ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CategoryGrid items={filteredDyes} />
              </div>
            ) : (
              <CategoryRow items={filteredDyes} />
            )}
          </div>
        )}

        {/* Industrial Chemicals Section */}
        {filteredChemicals.length > 0 && (
          <div className="mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionIntro
                title="Industrial Chemicals"
                description="Reliable chemicals engineered for performance and consistency."
              />
            </div>

            {isFiltering ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CategoryGrid items={filteredChemicals} />
              </div>
            ) : (
              <CategoryRow items={filteredChemicals} />
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
