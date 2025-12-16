import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO = ({
  title = "A. K. Jain & Co. (BellChem) – Industrial Dyes, Pigments & Chemical Supplier in India",
  description = "A. K. Jain & Co. (BellChem) is a trusted supplier and exporter of high-quality industrial dyes, pigments, and specialty chemicals. Serving textiles, food colours, manufacturers, and global buyers for over four decades.",
  keywords = "industrial dyes supplier India, buy dyes wholesale, pigments exporter India, acid dyes, reactive dyes, disperse dyes, solvent dyes, food colours, textile chemicals, A. K. Jain & Co., BellChem",
  canonical = "https://www.bellchem.in",
  ogImage = "https://www.bellchem.in/og-image.jpg",
  ogType = "website",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes("A. K. Jain & Co.")
    ? title
    : `${title} | A. K. Jain & Co. (BellChem)`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A. K. Jain & Co. (BellChem)",
    "alternateName": "BellChem",
    "description": "Supplier and exporter of industrial dyes, pigments, and specialty chemicals.",
    "url": "https://www.bellchem.in",
    "logo": "https://www.bellchem.in/logo.png",
    "foundingDate": "1984",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Godown No.198, Tilak Bazar, Khari Baoli",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110006",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "email": "vinayak@bellchem.in"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bellchem",
      "https://twitter.com/bellchem"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "BellChem Product Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Acid Dyes",
            "category": "Industrial Dyes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Reactive Dyes",
            "category": "Industrial Dyes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Disperse Dyes",
            "category": "Industrial Dyes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Pigments",
            "category": "Pigments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Food Colours",
            "category": "Food Grade Colours"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="A. K. Jain & Co. (BellChem)" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="A. K. Jain & Co. (BellChem)" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@bellchem" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
