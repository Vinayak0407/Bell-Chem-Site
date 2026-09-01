import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import textileDyes from "@/assets/textile-dyes.jpg";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { ShieldCheck, Search, PackageSearch } from "lucide-react";

const dyes = [
  { title: "Oil Colors", slug: "oilcolors", description: "High-purity oil-soluble colors formulated for deep and uniform shades.", icon: "🎨" },
  { title: "Pigment Colors", slug: "pigmentdyes", description: "Versatile, high-stability pigments providing superior lightfastness and durability.", icon: "🌈" },
  { title: "Solvent Dyes", slug: "solventdyes", description: "Premium solvent-soluble dyes with excellent transparency and fastness.", icon: "💧" },
  { title: "Direct Dyes", slug: "directdyes", description: "Cost-effective dyes for cellulosic fibers with excellent color yield.", icon: "🎪" },
  { title: "Fluorescent Colors", slug: "fluorescent-dyes", description: "High-visibility fluorescent colors for vibrant glowing shades.", icon: "✨" },
  { title: "Acid Dyes", slug: "aciddyes", description: "High-strength acid dyes suitable for wool, silk, nylon, and industrial uses.", icon: "⚗️" },
  { title: "Reactive Dyes", slug: "reactivedyes", description: "Reactive dyes offering excellent fastness and strong fiber bonding.", icon: "🧪" },
  { title: "Discharge Colors", slug: "dischargedyes", description: "High-purity dyes for clean discharge effects and sharp contrast printing.", icon: "✂️" }
];

const chemicals = [
  { title: "Industrial Chemicals", slug: "industrialchemicals", description: "High-grade chemicals for textile, and manufacturing applications.", icon: "⚗️" },
  { title: "Textile Processing", slug: "textileprocessing", description: "High-performance chemicals for every stage of textile processing.", icon: "🏭" },
  { title: "Specialty Chemicals", slug: "specialtychemicals", description: "Precision-engineered specialty chemicals for high-performance applications.", icon: "🧬" },
  { title: "Textile Auxiliaries", slug: "textileauxiliaries", description: "Auxiliaries that enhance efficiency, compatibility, and process control.", icon: "🔬" }
];

const credentials = [
  "ISO 9001:2015 Certified",
  "REACH Compliant",
  "FDA-Approved Grades Available",
];

type Category = "all" | "dyes" | "chemicals";

const CategoryGrid = ({
  items,
}: {
  items: { title: string; slug: string; description: string; icon: string }[];
}) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item) => (
      <div key={item.slug} className="h-full animate-in fade-in zoom-in-95 duration-300">
        <Link to={`/${item.slug}`}>
          <Card className="card-shimmer group h-full border-0 shadow-soft hover:shadow-professional transition-all duration-300 hover:-translate-y-2 bg-card cursor-pointer">
            <CardHeader className="text-center pb-2 pt-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    ))}
  </div>
);

const Services = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");

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
            <img src={textileDyes} alt="Vibrant textile dyes and chemicals" className="w-full h-[380px] object-cover" loading="lazy" />
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
            <div className="mb-20">
              <SectionIntro
                title="Industrial Dyes"
                description="High-performance dyes for textile and industrial applications."
              />

              <CategoryGrid items={filteredDyes} />
            </div>
          )}

          {/* Industrial Chemicals Section */}
          {filteredChemicals.length > 0 && (
            <div className="mb-12">
              <SectionIntro
                title="Industrial Chemicals"
                description="Reliable chemicals engineered for performance and consistency."
              />

              <CategoryGrid items={filteredChemicals} />
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Services;
