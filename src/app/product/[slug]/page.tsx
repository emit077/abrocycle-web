import React from 'react';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductShowcase from '@/components/ProductShowcase';

// Product data - in a real app, this would come from a CMS or database
const products = {
    'abro-cruiser-falcon': {
        id: '1',
        slug: 'abro-cruiser-falcon',
        name: 'ABRO Cruiser Falcon',
        series: 'Falcon Series',
        tagline: 'The Perfect Blend of Comfort and Performance',
        price: '₹14,999',
        originalPrice: '₹19,999',
        heroImage: '/images/cycle.png',
        gallery: [
            { id: '1', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon - Front View', caption: 'Front View' },
            { id: '2', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon - Side View', caption: 'Side Profile' },
            { id: '3', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon - Detail View', caption: 'Premium Components' },
            { id: '4', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon - Accessories', caption: 'Complete Package' }
        ],
        features: [
            'Comfort Seating',
            '7-Speed Gear System',
            'Dual Disc Brakes',
            'Premium Steel Frame',
            'LED Lighting System',
            'Shock Absorbers'
        ],
        specifications: {
            frame: 'High-Tensile Steel',
            wheels: '26" Alloy Wheels',
            brakes: 'Dual Disc Brakes',
            gears: '7-Speed Shimano',
            weight: '15.2 kg',
            warranty: '2 Years',
            colors: '4 Color Options',
            sizes: 'S, M, L, XL'
        },
        description: 'The ABRO Cruiser Falcon represents the perfect fusion of comfort and performance. Designed specifically for the modern Indian rider, this cycle combines premium engineering with ergonomic design to deliver an unparalleled cycling experience.',
        engineering: {
            title: 'Precision Engineering',
            highlights: [
                'High-tensile steel frame for durability',
                'Ergonomic seating for long rides',
                'Advanced gear system for smooth shifting',
                'Premium braking system for safety'
            ]
        },
        design: {
            title: 'Design Philosophy',
            description: 'Every curve, every component, and every detail of the ABRO Cruiser Falcon is designed with the Indian rider in mind. From the comfortable seating to the robust frame, every element serves a purpose.',
            principles: [
                'Comfort First',
                'Durability Assured',
                'Style Meets Function',
                'Made for India'
            ]
        },
        rating: 4.8,
        reviews: 124,
        badge: 'Best Seller',
        isPopular: true,
        inStock: true,
        colors: ['#1f2937', '#dc2626', '#2563eb', '#059669'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    'abro-cruiser-falcon-pro': {
        id: '2',
        slug: 'abro-cruiser-falcon-pro',
        name: 'ABRO Cruiser Falcon Pro',
        series: 'Falcon Series',
        tagline: 'Premium Performance, Unmatched Comfort',
        price: '₹19,999',
        heroImage: '/images/cycle.png',
        gallery: [
            { id: '1', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon Pro - Front View', caption: 'Front View' },
            { id: '2', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon Pro - Side View', caption: 'Side Profile' },
            { id: '3', src: '/images/cycle.png', alt: 'ABRO Cruiser Falcon Pro - Detail View', caption: 'Premium Components' }
        ],
        features: [
            'LED Lighting System',
            'Advanced Shock Absorbers',
            'Premium Alloy Wheels',
            'Quick Release System',
            'Premium Saddle',
            'Carbon Fiber Frame'
        ],
        specifications: {
            frame: 'Carbon Fiber',
            wheels: '27.5" Premium Alloy',
            brakes: 'Hydraulic Disc Brakes',
            gears: '10-Speed Shimano XT',
            weight: '12.8 kg',
            warranty: '3 Years',
            colors: '3 Color Options',
            sizes: 'M, L, XL'
        },
        description: 'The ABRO Cruiser Falcon Pro represents the pinnacle of cycling engineering. Built for serious cyclists who demand the best in performance, comfort, and style.',
        engineering: {
            title: 'Advanced Engineering',
            highlights: [
                'Carbon fiber frame for lightweight strength',
                'Hydraulic braking system for superior control',
                'Premium gear system for smooth performance',
                'Advanced suspension for comfort'
            ]
        },
        design: {
            title: 'Premium Design',
            description: 'The Falcon Pro embodies our commitment to excellence. Every component is carefully selected and engineered to deliver the ultimate cycling experience.',
            principles: [
                'Performance Excellence',
                'Premium Materials',
                'Advanced Technology',
                'Superior Comfort'
            ]
        },
        rating: 4.6,
        reviews: 89,
        isNew: true,
        inStock: true,
        colors: ['#1f2937', '#dc2626', '#7c3aed'],
        sizes: ['M', 'L', 'XL']
    }
};

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products[params.slug as keyof typeof products];

    if (!product) {
        notFound();
    }

    return (
        <>
            <SEO
                title={`${product.name} - ABRO Cycles`}
                description={product.description}
                keywords={`${product.name}, ABRO Cycles, cruiser cycle, ${product.series}, bicycle, cycling, India`}
                canonical={`/product/${product.slug}`}
            />

            <Header />

            <main>
                <ProductShowcase product={product} />
            </main>

            <Footer />
        </>
    );
}

// Generate static params for all products
export async function generateStaticParams() {
    return Object.keys(products).map((slug) => ({
        slug,
    }));
}
