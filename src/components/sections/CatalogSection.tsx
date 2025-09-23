'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Heart,
    ShoppingCart,
    Eye,
    ArrowRight,
    CheckCircle,
    Zap,
    Shield,
    Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CycleModel {
    id: string;
    name: string;
    series: string;
    price: string;
    originalPrice?: string;
    image: string;
    slug: string;
    features: string[];
    rating: number;
    reviews: number;
    badge?: string;
    isNew?: boolean;
    isPopular?: boolean;
}

const CatalogSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [favorites, setFavorites] = useState<string[]>([]);

    const categories = [
        { id: 'all', name: 'All Models', count: 6 },
        { id: 'cruiser', name: 'Cruiser Series', count: 3 },
        { id: 'premium', name: 'Premium Series', count: 2 },
        { id: 'sport', name: 'Sport Series', count: 1 }
    ];

    const cycleModels: CycleModel[] = [
        {
            id: '1',
            name: 'ABRO Cruiser Falcon',
            series: 'Falcon Series',
            price: '₹14,999',
            originalPrice: '₹19,999',
            image: '/images/cycle.png',
            slug: 'abro-cruiser-falcon',
            features: ['Comfort Seating', '7-Speed Gear', 'Dual Brakes', 'Premium Frame'],
            rating: 4.8,
            reviews: 124,
            badge: 'Best Seller',
            isPopular: true
        },
        {
            id: '2',
            name: 'ABRO Cruiser Falcon Pro',
            series: 'Falcon Series',
            price: '₹19,999',
            image: '/images/cycle.png',
            slug: 'abro-cruiser-falcon-pro',
            features: ['LED Lights', 'Shock Absorbers', 'Alloy Wheels', 'Quick Release'],
            rating: 4.6,
            reviews: 89,
            isNew: true
        }
    ];

    const toggleFavorite = (id: string) => {
        setFavorites(prev =>
            prev.includes(id)
                ? prev.filter(fav => fav !== id)
                : [...prev, id]
        );
    };

    const filteredModels = selectedCategory === 'all'
        ? cycleModels
        : cycleModels.filter(model =>
            model.series.toLowerCase().includes(selectedCategory.toLowerCase())
        );

    return (
        <section id="catalog" className="section-padding bg-slate-50">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-200">
                        <span className="text-body-sm font-medium text-slate-700">Our Collection</span>
                    </div>
                    <h2 className="text-display-lg text-slate-900 mb-6">
                        Cycle
                        <span className="text-slate-600"> Models</span>
                    </h2>
                    <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                        Discover our range of premium cruiser cycles, each crafted with precision engineering
                        and designed for the modern Indian rider's comfort and style.
                    </p>
                </motion.div>


                {/* Cycle Models Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredModels.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                    <Image
                                        src={model.image}
                                        alt={model.name}
                                        width={300}
                                        height={300}
                                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                    {model.badge && (
                                        <span className="bg-slate-900 text-white text-xs px-2 py-1 rounded-full font-medium">
                                            {model.badge}
                                        </span>
                                    )}
                                    {model.isNew && (
                                        <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                            New
                                        </span>
                                    )}
                                    {model.isPopular && (
                                        <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                            Popular
                                        </span>
                                    )}
                                </div>

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(model.id)}
                                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors duration-200"
                                >
                                    <Heart
                                        className={`w-5 h-5 ${favorites.includes(model.id)
                                            ? 'text-red-500 fill-current'
                                            : 'text-slate-600'
                                            }`}
                                    />
                                </button>

                                {/* Quick Actions */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/product/${model.slug}`}
                                            className="flex-1 bg-white text-slate-900 py-2 px-3 rounded-lg text-body-sm font-medium hover:bg-slate-100 transition-colors duration-200 flex items-center justify-center gap-2"
                                        >
                                            <Eye className="w-4 h-4" />
                                            Quick View
                                        </Link>
                                        {/* <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-lg text-body-sm font-medium hover:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-2">
                                            <ShoppingCart className="w-4 h-4" />
                                            Add to Cart
                                        </button> */}
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4 sm:p-6">
                                <div className="mb-3">
                                    <span className="text-body-sm text-slate-500 font-medium">{model.series}</span>
                                    <h3 className="text-heading-md text-slate-900 mb-2">{model.name}</h3>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(model.rating)
                                                    ? 'text-amber-400 fill-current'
                                                    : 'text-slate-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-body-sm text-slate-600">
                                        {model.rating} ({model.reviews} reviews)
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {model.features.slice(0, 2).map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {model.features.length > 2 && (
                                            <span className="text-xs text-slate-500">
                                                +{model.features.length - 2} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-heading-lg font-bold text-slate-900">
                                            {model.price}
                                        </span>
                                        {model.originalPrice && (
                                            <span className="text-body-sm text-slate-500 line-through ml-2">
                                                {model.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    {model.originalPrice && (
                                        <span className="text-body-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                            Save ₹{parseInt(model.originalPrice.replace(/[₹,]/g, '')) - parseInt(model.price.replace(/[₹,]/g, ''))}
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <Link
                                        href={`/product/${model.slug}`}
                                        className="flex-1 btn btn-secondary btn-sm text-center"
                                    >
                                        View Details
                                    </Link>
                                    {/* <button className="flex-1 btn btn-primary btn-sm group">
                                        Buy Now
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <div className="card-elevated p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                        <h3 className="text-heading-xl text-white mb-4">Can't Find What You're Looking For?</h3>
                        <p className="text-body-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                            Our team can help you find the perfect cycle or create a custom solution
                            tailored to your specific needs and preferences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn bg-white text-slate-900 hover:bg-slate-100 px-6 py-3">
                                Contact Our Experts
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CatalogSection;
