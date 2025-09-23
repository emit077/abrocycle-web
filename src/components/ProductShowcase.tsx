'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Heart,
    Share2,
    ChevronLeft,
    ChevronRight,
    CheckCircle,
    Award,
    Shield,
    Zap,
    Truck,
    RotateCcw,
    ArrowLeft,
    Play,
    Maximize2,
    X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductImage {
    id: string;
    src: string;
    alt: string;
    caption: string;
}

interface Product {
    id: string;
    slug: string;
    name: string;
    series: string;
    tagline: string;
    price: string;
    originalPrice?: string;
    heroImage: string;
    gallery: ProductImage[];
    features: string[];
    specifications: {
        frame: string;
        wheels: string;
        brakes: string;
        gears: string;
        weight: string;
        warranty: string;
        colors: string;
        sizes: string;
    };
    description: string;
    engineering: {
        title: string;
        highlights: string[];
    };
    design: {
        title: string;
        description: string;
        principles: string[];
    };
    rating: number;
    reviews: number;
    badge?: string;
    isNew?: boolean;
    isPopular?: boolean;
    inStock: boolean;
    colors: string[];
    sizes: string[];
}

interface ProductShowcaseProps {
    product: Product;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === product.gallery.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.gallery.length - 1 : prev - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const openFullscreen = () => {
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-sky-50 via-white to-teal-50">
                <div className="container-custom relative z-10 pt-20 pb-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <Link
                            href="/#catalog"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-body-sm font-medium">Back to Catalog</span>
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Column - Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex items-center gap-4"
                            >
                                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
                                    <span className="text-body-sm font-medium text-slate-700">{product.series}</span>
                                </div>
                                {product.badge && (
                                    <span className="bg-slate-900 text-white text-xs px-3 py-1 rounded-full font-medium">
                                        {product.badge}
                                    </span>
                                )}
                                {product.isNew && (
                                    <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                        New
                                    </span>
                                )}
                                {product.isPopular && (
                                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                                        Popular
                                    </span>
                                )}
                            </motion.div>

                            {/* Product Name & Tagline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h1 className="text-display-xl lg:text-display-2xl text-stone-900">
                                    {product.name}
                                </h1>
                                <p className="text-body-lg text-stone-600 max-w-xl">
                                    {product.tagline}
                                </p>
                            </motion.div>

                            {/* Rating */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex items-center gap-2"
                            >
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? 'text-amber-400 fill-current'
                                                : 'text-slate-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-body-sm text-slate-600">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </motion.div>

                            {/* Price */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex items-center gap-3"
                            >
                                <span className="text-heading-2xl font-bold text-slate-900">
                                    {product.price}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-body-lg text-slate-500 line-through">
                                            {product.originalPrice}
                                        </span>
                                        <span className="text-body-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                            Save ₹{parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))}
                                        </span>
                                    </>
                                )}
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                            >
                                <button className="btn btn-primary btn-lg group w-full sm:w-auto">
                                    <Play className="w-5 h-5 mr-2" />
                                    Watch Product Video
                                </button>
                                <button
                                    onClick={toggleFavorite}
                                    className={`btn btn-secondary btn-lg group w-full sm:w-auto ${isFavorite ? 'bg-red-50 text-red-600 border-red-200' : ''
                                        }`}
                                >
                                    <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                                    {isFavorite ? 'Favorited' : 'Add to Favorites'}
                                </button>
                            </motion.div>

                            {/* Quick Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {product.features.slice(0, 4).map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        <span className="text-body-sm text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative">
                                {/* Main Product Image */}
                                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={product.gallery[currentImageIndex].src}
                                        alt={product.gallery[currentImageIndex].alt}
                                        width={600}
                                        height={600}
                                        className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                                        priority
                                    />
                                </div>

                                {/* Image Navigation */}
                                {product.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-slate-700" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                                        >
                                            <ChevronRight className="w-5 h-5 text-slate-700" />
                                        </button>
                                    </>
                                )}

                                {/* Fullscreen Button */}
                                <button
                                    onClick={openFullscreen}
                                    className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                                >
                                    <Maximize2 className="w-5 h-5 text-slate-700" />
                                </button>

                                {/* Image Counter */}
                                {product.gallery.length > 1 && (
                                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-body-sm">
                                        {currentImageIndex + 1} / {product.gallery.length}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {product.gallery.length > 1 && (
                                <div className="mt-6">
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {product.gallery.map((image, index) => (
                                            <button
                                                key={image.id}
                                                onClick={() => goToImage(index)}
                                                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${index === currentImageIndex
                                                    ? 'border-slate-900'
                                                    : 'border-slate-200'
                                                    }`}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Details Sections */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-heading-xl text-slate-900 mb-6">About This Product</h2>
                                <p className="text-body-lg text-slate-700 leading-relaxed">
                                    {product.description}
                                </p>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-heading-xl text-slate-900 mb-6">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            <span className="text-body-md text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Engineering Highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="card p-8"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-sky-100 rounded-lg">
                                        <Award className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <h2 className="text-heading-xl text-slate-900">{product.engineering.title}</h2>
                                </div>
                                <div className="space-y-4">
                                    {product.engineering.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-body-md text-slate-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Design Philosophy */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="card p-8"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-teal-100 rounded-lg">
                                        <Zap className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <h2 className="text-heading-xl text-slate-900">{product.design.title}</h2>
                                </div>
                                <p className="text-body-lg text-slate-700 leading-relaxed mb-6">
                                    {product.design.description}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.design.principles.map((principle, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                                            <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0" />
                                            <span className="text-body-md text-slate-700">{principle}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Specifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="card p-6"
                            >
                                <h3 className="text-heading-lg text-slate-900 mb-4">Specifications</h3>
                                <div className="space-y-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                                            <span className="text-body-sm text-slate-600 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                            <span className="text-body-sm font-medium text-slate-900">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="card p-6"
                            >
                                <h3 className="text-heading-lg text-slate-900 mb-4">Why Choose ABRO?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-slate-600" />
                                        <span className="text-body-sm text-slate-700">2-3 Year Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Truck className="w-5 h-5 text-slate-600" />
                                        <span className="text-body-sm text-slate-700">Free Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RotateCcw className="w-5 h-5 text-slate-600" />
                                        <span className="text-body-sm text-slate-700">Easy Returns</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Share */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="card p-6"
                            >
                                <h3 className="text-heading-lg text-slate-900 mb-4">Share This Product</h3>
                                <button className="btn btn-secondary w-full">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Image Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative">
                            <Image
                                src={product.gallery[currentImageIndex].src}
                                alt={product.gallery[currentImageIndex].alt}
                                width={800}
                                height={600}
                                className="object-contain w-full h-full max-h-[80vh]"
                            />

                            {product.gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-body-sm">
                            {product.gallery[currentImageIndex].caption}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductShowcase;
