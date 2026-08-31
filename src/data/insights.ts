export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  body: string[];
}

export const insightPosts: InsightPost[] = [
  {
    slug: "reactive-acid-disperse-dyes-guide",
    title: "Reactive vs. Acid vs. Disperse Dyes: Choosing the Right Class for Your Fiber",
    excerpt:
      "A practical overview of the three most common dye classes used in textile processing, and how fiber type determines which one to use.",
    category: "Dye Chemistry",
    readTime: "5 min read",
    publishedDate: "2026-06-15",
    body: [
      "Choosing the right dye class starts with the fiber, not the shade card. Different fiber types bond with different dye chemistries, and using the wrong class typically means poor fastness, uneven uptake, or dye that simply washes out.",
      "Reactive dyes form a covalent bond with cellulosic fibers — cotton, viscose, linen — which is what gives them their excellent wash fastness. They're the default choice for cotton textiles that need to hold up to repeated washing, and they come in a wide, bright shade range. The trade-off is that fixation requires an alkaline dye bath and careful pH control, so process consistency matters more than with some other classes.",
      "Acid dyes are water-soluble and applied in an acidic bath, and they're the standard choice for protein and polyamide fibers — wool, silk, and nylon. They offer strong shade brightness and good levelling, but they aren't suitable for cellulosic fibers like cotton, where they won't bond effectively and wash fastness will suffer.",
      "Disperse dyes are the class built for synthetic fibers, primarily polyester. Because polyester has no reactive sites for dye bonding the way cotton or wool do, disperse dyes work by diffusing into the fiber at high temperature rather than forming a chemical bond. They're the go-to for polyester and polyester blends, including sublimation printing applications.",
      "In practice, many processors work with blended fabrics — a poly-cotton blend, for example, often needs both a disperse dye for the polyester component and a reactive dye for the cotton component, applied in a combined or sequential process. Getting this right depends on knowing the fiber composition precisely, not just the fabric's feel or appearance.",
      "If you're unsure which class fits your fabric and process, our technical team can help match a dye to your fiber and application — reach out via our quote form with your fiber type and end use.",
    ],
  },
  {
    slug: "reach-compliance-textile-dye-exporters",
    title: "Understanding REACH Compliance for Textile Dye Exporters",
    excerpt:
      "What REACH compliance actually means for dye and chemical exporters, and why it matters when supplying into the European market.",
    category: "Compliance",
    readTime: "6 min read",
    publishedDate: "2026-07-02",
    body: [
      "REACH — Registration, Evaluation, Authorisation and Restriction of Chemicals — is the European Union's regulatory framework for chemical substances. For exporters supplying dyes, pigments, or industrial chemicals into the EU, REACH compliance isn't optional paperwork; it directly determines whether a shipment can legally enter the market.",
      "At its core, REACH puts the responsibility on the entity that places a substance on the EU market — often the importer, but exporters need to supply materials that support that importer's compliance. This typically means substances need to be registered (or covered by an existing registration), and certain restricted or high-concern substances need to be avoided or kept below specified thresholds entirely.",
      "For dyes specifically, this is particularly relevant around azo dyes. Certain azo dyes can break down under reductive conditions to release aromatic amines that are restricted under REACH (and under similar regulations elsewhere) due to carcinogenicity concerns. Suppliers working with azo-based dye chemistry need to be able to confirm their products don't release restricted amines above the regulatory threshold.",
      "Beyond the substance-level restrictions, buyers in the EU increasingly expect suppliers to provide Safety Data Sheets (SDS) formatted to REACH/CLP requirements, and to be transparent about substance composition where relevant to the buyer's own compliance obligations downstream.",
      "For exporters, the practical takeaway is: compliance isn't a one-time check, it's an ongoing part of how you select and document the products you supply. If REACH compliance is a requirement for your import, it's worth confirming directly with your supplier — including what documentation they can provide — before finalizing an order.",
      "We work with buyers who have specific REACH or compliance documentation requirements — get in touch with your specification and we'll confirm what we can support for your order.",
    ],
  },
  {
    slug: "bulk-dye-chemical-procurement-guide",
    title: "A Buyer's Guide to Bulk Dye & Chemical Procurement",
    excerpt:
      "What to check before placing a bulk order — MOQs, lead times, sampling, and the documentation worth asking for upfront.",
    category: "Procurement",
    readTime: "5 min read",
    publishedDate: "2026-07-20",
    body: [
      "Bulk procurement of dyes and industrial chemicals carries more risk than a small trial order — a bad batch scales into a bad production run. A few checks upfront go a long way toward avoiding that.",
      "Start with samples. Any supplier worth working with in bulk should be able to provide a sample for you to validate shade, purity, or performance in your own process before you commit to a full order. Skipping this step to save time is usually the most expensive shortcut in procurement.",
      "Clarify minimum order quantities and pricing tiers early. MOQs vary widely by product — some dyes and chemicals are available in smaller trial-friendly quantities, others are genuinely bulk-only due to production economics. Knowing this upfront avoids surprises when you're ready to scale from a trial to a production order.",
      "Ask about lead times explicitly, and get them in writing as part of your quotation — not as a verbal estimate. Lead times differ meaningfully between domestic delivery and export shipments, and factoring in customs and freight time matters if you're working against a production deadline.",
      "Request documentation relevant to your use case: this might be a Certificate of Analysis, a Safety Data Sheet, or compliance documentation (like REACH-related information for EU-bound shipments — see our related article on REACH compliance). Confirm what a supplier can provide before the order, not after.",
      "Finally, think about payment terms as part of the negotiation, not an afterthought. For export orders in particular, terms like LC (Letter of Credit) or TT (Telegraphic Transfer) each carry different risk and cash-flow implications for both sides — agree on this clearly before the order is confirmed.",
      "If you're planning a bulk order and want to work through these details, our team can walk you through samples, pricing, and documentation for your specific requirement.",
    ],
  },
];
