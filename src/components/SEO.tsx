import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
    title = 'ABRO Cycles - India\'s First Cruiser Cycle Manufacturer',
    description = 'ABRO Cycles is the pioneering Indian manufacturer of cruiser cycles—crafted with precision engineering, state-of-the-art design, and a mission to introduce the world\'s most comfortable and stylish ride to Indian cycling enthusiasts.',
    keywords = 'ABRO Cycles, cruiser cycle, India, bicycle manufacturer, engineering, cycling, bicycle, cruiser bike, Indian cycling, bicycle company',
    canonical,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
}) => {
    const fullTitle = title.includes('ABRO Cycles') ? title : `${title} | ABRO Cycles`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abro-cycles.com';
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    const defaultStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ABRO Cycles',
        description: 'India\'s first cruiser cycle manufacturer',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        foundingDate: '1947',
        industry: 'Bicycle Manufacturing',
        location: {
            '@type': 'Place',
            name: 'India',
            addressCountry: 'IN'
        },
        sameAs: [
            'https://facebook.com/abro-cycles',
            'https://twitter.com/abro_cycles',
            'https://instagram.com/abro_cycles'
        ]
    };

    const finalStructuredData = structuredData || defaultStructuredData;

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="ABRO Cycles" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="ABRO Cycles" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:site" content="@abro_cycles" />
            <meta name="twitter:creator" content="@abro_cycles" />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#1f2937" />
            <meta name="msapplication-TileColor" content="#1f2937" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="ABRO Cycles" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(finalStructuredData)
                }}
            />
        </Head>
    );
};

export default SEO;
