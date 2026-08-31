export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  icon: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "textile-dye-house",
    industry: "Textile Dye House",
    title: "Consistent Shade Matching at Scale",
    challenge:
      "Dye houses processing large, repeat orders need shade consistency across batches — even small variation between lots can lead to rejected fabric runs.",
    approach:
      "We work with processors to supply the same dye class and grade batch after batch, with clear specifications and application guidance from our technical team.",
    outcome:
      "Reliable, repeatable shade matching that reduces rework and keeps production schedules on track.",
    icon: "🧵",
  },
  {
    slug: "garment-exporter",
    industry: "Garment Exporter",
    title: "Peak-Season Bulk Fulfillment",
    challenge:
      "Export-focused garment manufacturers face tight, non-negotiable shipping windows during peak seasons, with little room for supply delays.",
    approach:
      "Advance planning on bulk quantities, clear lead-time commitments, and export-ready documentation prepared alongside the order.",
    outcome:
      "Dependable supply that keeps production and shipping schedules aligned with buyer deadlines.",
    icon: "🚢",
  },
  {
    slug: "paints-coatings",
    industry: "Paints & Coatings Manufacturer",
    title: "Custom Pigment Formulation Support",
    challenge:
      "Coating formulators often need a specific shade or performance profile (light fastness, heat stability) that off-the-shelf pigments don't fully match.",
    approach:
      "Our technical team reviews the target specification and recommends a pigment or dye combination suited to the application, with samples for validation.",
    outcome:
      "A formulation that meets the required color and durability specification, validated before bulk commitment.",
    icon: "🎨",
  },
  {
    slug: "leather-processor",
    industry: "Leather Processor",
    title: "Reliable Tannery-Grade Chemical Supply",
    challenge:
      "Tanneries need a steady, uninterrupted supply of processing chemicals to keep multi-stage leather processing running without bottlenecks.",
    approach:
      "Consistent stock availability and responsive reordering support for the chemicals used across tanning, dyeing, and finishing stages.",
    outcome:
      "Fewer production interruptions and a supplier relationship the processing team can plan around.",
    icon: "👜",
  },
];
