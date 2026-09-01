import { useMemo, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { ShieldCheck, Search, PackageSearch, ArrowRight } from "lucide-react";
import textileDyesImg from "@/assets/textile-dyes.jpg";
import chemicalLabImg from "@/assets/chemical-lab.jpg";
import manufacturingImg from "@/assets/manufacturing-facility.jpg";
import oilColorsImg from "@/assets/oil-colors.jpg";
import pigmentDyesImg from "@/assets/PigmentDyes.jpg";
import solventDyesImg from "@/assets/solvent-dyes.jpg";
import fluorescentDyesImg from "@/assets/FluorescentDyes.jpg";
import dischargeDyesImg from "@/assets/DischargeDyes.jpg";
import textileProcessingImg from "@/assets/TextileProcessing.jpg";

const dyes = [
  { title: "Oil Colors", slug: "oilcolors", description: "High-purity oil-soluble colors formulated for deep and uniform shades.", icon: "🎨", image: oilColorsImg },
  { title: "Direct Dyes", slug: "directdyes", description: "Cost-effective dyes for cellulosic fibers with excellent color yield.", icon: "🎪", image: textileDyesImg },
  { title: "Pigment Colors", slug: "pigmentdyes", description: "Versatile, high-stability pigments providing superior lightfastness and durability.", icon: "🌈", image: pigmentDyesImg },
  { title: "Acid Dyes", slug: "aciddyes", description: "High-strength acid dyes suitable for wool, silk, nylon, and industrial uses.", icon: "⚗️", image: textileDyesImg },
  { title: "Solvent Dyes", slug: "solventdyes", description: "Premium solvent-soluble dyes with excellent transparency and fastness.", icon: "💧", image: solventDyesImg },
  { title: "Reactive Dyes", slug: "reactivedyes", description: "Reactive dyes offering excellent fastness and strong fiber bonding.", icon: "🧪", image: textileDyesImg },
  { title: "Fluorescent Colors", slug: "fluorescent-dyes", description: "High-visibility fluorescent colors for vibrant glowing shades.", icon: "✨", image: fluorescentDyesImg },
  { title: "Discharge Colors", slug: "dischargedyes", description: "High-purity dyes for clean discharge effects and sharp contrast printing.", icon: "✂️", image: dischargeDyesImg }
];

const chemicals = [
  { title: "Textile Processing", slug: "textileprocessing", description: "High-performance chemicals for every stage of textile processing.", icon: "🏭", image: textileProcessingImg },
  { title: "Industrial Chemicals", slug: "industrialchemicals", description: "High-grade chemicals for textile, and manufacturing applications.", icon: "⚗️", image: manufacturingImg },
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

/** Big, tall, photo-led tile with a slow continuous zoom on the image. */
const ProductTile = ({ item }: { item: ProductItem }) => (
  <Link to={`/${item.slug}`} className="block h-full">
    <Card className="card-shimmer group relative h-[440px] sm:h-[520px] overflow-hidden border-0 shadow-elegant hover:shadow-professional transition-all duration-500 hover:-translate-y-2">
      <OptimizedImage
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns transition-[filter] duration-500 group-hover:brightness-110"
        width={480}
        height={520}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 transition-opacity duration-500 group-hover:from-black/95" />

      <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-background/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {item.icon}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 space-y-2">
        <CardTitle className="text-2xl font-bold text-white">{item.title}</CardTitle>
        <CardDescription className="text-white/85 leading-relaxed">
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

/** Carousel — arrow-key / button navigable, no scrollbar, snaps a full "page"
 * of tiles at a time instead of a free-scrolling bar. */
const CategoryCarousel = ({ items }: { items: ProductItem[] }) => (
  <Carousel opts={{ align: "start", loop: items.length > 3 }} className="px-1">
    <CarouselContent className="-ml-6">
      {items.map((item) => (
        <CarouselItem key={item.slug} className="pl-6 sm:basis-1/2 lg:basis-1/3">
          <ProductTile item={item} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-left-4 sm:-left-6" />
    <CarouselNext className="-right-4 sm:-right-6" />
  </Carousel>
);

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

      <section id="products" className="py-20 lg:py-28">
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

          {/* Industrial Dyes Section */}
          {filteredDyes.length > 0 && (
            <div className="mb-24">
              <SectionIntro
                title="Industrial Dyes"
                description="High-performance dyes for textile and industrial applications."
              />

              {isFiltering ? <CategoryGrid items={filteredDyes} /> : <CategoryCarousel items={filteredDyes} />}
            </div>
          )}

          {/* Industrial Chemicals Section */}
          {filteredChemicals.length > 0 && (
            <div className="mb-12">
              <SectionIntro
                title="Industrial Chemicals"
                description="Reliable chemicals engineered for performance and consistency."
              />

              {isFiltering ? <CategoryGrid items={filteredChemicals} /> : <CategoryCarousel items={filteredChemicals} />}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Services;
