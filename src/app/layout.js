/* eslint-disable @next/next/no-img-element */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = "GTM-5BGNDBC8";

export const metadata = {
  metadataBase: new URL(
    "https://iflimmersion.com/ifli-portuguese-language-immersion"
  ),

  title: {
    default:
      "IFLI Portuguese Immersion 2026 - Learn European Portuguese in 10 Weeks",
    template: "%s | IFLI Portuguese Immersion",
  },

  description:
    "Learn European Portuguese in just 10 weeks with IFLI's intensive immersion program. Live online classes with native teachers, small groups (max 12), and proven results. Enrollment now open for Autumn 2026 cohort.",

  keywords: [
    "learn Portuguese",
    "European Portuguese",
    "Portuguese immersion",
    "Portuguese online course",
    "learn Portuguese online",
    "Portuguese language course",
    "Portuguese classes",
    "speak Portuguese fluently",
    "Portuguese for beginners",
    "Portuguese intensive course",
    "IFLI Portuguese",
    "Portuguese 2026",
    "Portuguese Lisbon",
    "Portuguese Portugal",
    "learn Portuguese fast",
  ],

  authors: [{ name: "IFLI - Instituto de Formação em Língua Portuguesa" }],
  creator: "IFLI",
  publisher: "IFLI",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_PT", "es_ES"],
    url: "https://iflimmersion.com/ifli-portuguese-language-immersion",
    siteName: "IFLI Portuguese Immersion",
    title:
      "IFLI Portuguese Immersion 2026 - Learn European Portuguese in 10 Weeks",
    description:
      "Transform into a confident Portuguese speaker in 10 weeks. Live classes, native teachers, small groups. Enrollment open for Autumn 2026.",
    images: [
      {
        url: "https://iflimmersion.com/ifli-portuguese-language-immersion/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IFLI Portuguese Immersion Program",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IFLI Portuguese Immersion 2026 - Learn European Portuguese Fast",
    description:
      "Speak Portuguese confidently in 10 weeks. Live online classes with native teachers. Enroll now for Autumn 2026!",
    images: [
      "https://iflimmersion.com/ifli-portuguese-language-immersion/twitter-image.jpg",
    ],
    creator: "@IFLI",
  },

  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  alternates: {
    canonical: "https://iflimmersion.com/ifli-portuguese-language-immersion",
    languages: {
      en: "https://iflimmersion.com/en/ifli-portuguese-language-immersion",
      pt: "https://iflimmersion.com/pt/ifli-portuguese-language-immersion",
      es: "https://iflimmersion.com/es/ifli-portuguese-language-immersion",
    },
  },

  category: "Education",
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://iflimmersion.com/#organization",
      name: "IFLI - Instituto de Formação em Língua Portuguesa",
      url: "https://iflimmersion.com",
      logo: {
        "@type": "ImageObject",
        url: "https://iflimmersion.com/wp-content/uploads/logo.png",
        width: 400,
        height: 218,
      },
      description:
        "Leading Portuguese language immersion institute with 30+ years of experience",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lisbon",
        addressCountry: "PT",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+351-933-292-112",
        contactType: "Customer Service",
        email: "info@iflimmersion.com",
        availableLanguage: ["English", "Portuguese", "Spanish"],
      },
      sameAs: [
        "https://facebook.com/IFLI",
        "https://instagram.com/IFLI",
        "https://youtube.com/IFLI",
        "https://linkedin.com/company/IFLI",
      ],
    },
    // WebPage Schema (for subdirectory)
    {
      "@type": "WebPage",
      "@id":
        "https://iflimmersion.com/ifli-portuguese-language-immersion#webpage",
      url: "https://iflimmersion.com/ifli-portuguese-language-immersion",
      name: "IFLI Portuguese Immersion 2026",
      description:
        "Intensive 10-week European Portuguese immersion program starting October 2026",
      isPartOf: {
        "@id": "https://iflimmersion.com/",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://iflimmersion.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portuguese Language Immersion",
            item: "https://iflimmersion.com/ifli-portuguese-language-immersion",
          },
        ],
      },
    },
    // Course Schema
    {
      "@type": "Course",
      "@id":
        "https://iflimmersion.com/ifli-portuguese-language-immersion#course",
      name: "IFLI Portuguese Immersion 2026",
      description:
        "Intensive 10-week European Portuguese immersion program with live online classes, native teachers, and proven results",
      provider: {
        "@id": "https://iflimmersion.com/#organization",
      },
      courseCode: "IFLI-A1-2026",
      educationalLevel: "Beginner to Intermediate",
      inLanguage: "pt-PT",
      teaches: "European Portuguese Language",
      timeRequired: "P10W",
      numberOfCredits: 50,
      coursePrerequisites: "None - suitable for complete beginners",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        startDate: "2026-10-12",
        endDate: "2026-12-18",
        courseWorkload: "PT1H",
        instructor: {
          "@type": "Person",
          name: "Native Portuguese Teachers",
          description:
            "Experienced and qualified native Portuguese facilitators",
        },
      },
      offers: [
        {
          "@type": "Offer",
          category: "Offline Plan",
          price: "195",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://iflimmersion.com/ifli-portuguese-language-immersion#pricing",
          validFrom: "2024-11-01",
        },
        {
          "@type": "Offer",
          category: "Online Plan",
          price: "345",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://iflimmersion.com/ifli-portuguese-language-immersion#pricing",
          validFrom: "2024-11-01",
        },
        {
          "@type": "Offer",
          category: "Premium Plan",
          price: "395",
          priceCurrency: "EUR",
          availability: "https://schema.org/LimitedAvailability",
          url: "https://iflimmersion.com/ifli-portuguese-language-immersion#pricing",
          validFrom: "2024-11-01",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // WebSite Schema (main site)
    {
      "@type": "WebSite",
      "@id": "https://iflimmersion.com/#website",
      url: "https://iflimmersion.com",
      name: "IFLI",
      description: "Portuguese Language Learning Institute",
      publisher: {
        "@id": "https://iflimmersion.com/#organization",
      },
    },
    // FAQPage Schema
    {
      "@type": "FAQPage",
      "@id": "https://iflimmersion.com/ifli-portuguese-language-immersion#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What if I can't attend all the live sessions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every live session is recorded and available for at least 1 year. You can watch them anytime at your own pace.",
          },
        },
        {
          "@type": "Question",
          name: "Will I really be conversational in 10 weeks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our proven system helps you become confident at communicating with the language you know within 10 weeks, provided you practice every day.",
          },
        },
        {
          "@type": "Question",
          name: "Is this course right for complete beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! These programs are designed for all levels and are extremely beneficial for beginners.",
          },
        },
        {
          "@type": "Question",
          name: "How much time do I need to commit each week?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need to commit about an hour a day in Portuguese. This could be joining live sessions, watching recordings, or practicing Portuguese.",
          },
        },
        {
          "@type": "Question",
          name: "What's your refund policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a 5-day money-back guarantee for all our programs.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://airtable.com" />
        <link
          rel="preconnect"
          href="https://airtable.com"
          crossOrigin="anonymous"
        />
        {/* Canonical URL for subdirectory */}
        <link
          rel="canonical"
          href="https://iflimmersion.com/ifli-portuguese-language-immersion"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#3BA9A3" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}

        {/* Note: Analytics should be handled by WordPress for consistency across the site */}
        {/* If you want separate tracking for this page, uncomment below */}

        {/* Google Analytics - Optional if not already in WordPress */}

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4RQ4QEQB8Z"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4RQ4QEQB8Z', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6584834,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
          }}
        />

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1393416825490964');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1393416825490964&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
