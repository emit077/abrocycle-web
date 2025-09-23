'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Zap,
    Wrench,
    Leaf,
    Star,
    Clock,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
}

interface Specification {
    label: string;
    value: string;
}

const FeaturesSection: React.FC = () => {
    const mainFeatures: Feature[] = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Superior Safety',
            description: 'Advanced braking system and reinforced frame structure for maximum rider safety and confidence.',
            highlight: true
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Smooth Performance',
            description: 'Precision-engineered drivetrain ensures effortless riding and optimal power transfer.',
            highlight: true
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Easy Maintenance',
            description: 'Designed for minimal maintenance with easily replaceable parts and comprehensive service support.'
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Eco-Friendly',
            description: 'Sustainable manufacturing processes and materials that respect our environment.'
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: 'Premium Comfort',
            description: 'Ergonomically designed seats and handlebars for the most comfortable riding experience.'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Built to Last',
            description: 'Durable construction and quality materials ensure your cycle serves you for years to come.'
        }
    ];

    const specifications: Specification[] = [
        { label: 'Frame Material', value: 'High-Grade Steel Alloy' },
        { label: 'Wheel Size', value: '26" Premium Rims' },
        { label: 'Brake System', value: 'Dual V-Brake Setup' },
        { label: 'Gear System', value: '7-Speed Shimano' },
        { label: 'Weight Capacity', value: 'Up to 120kg' },
        { label: 'Warranty', value: '3 Years Comprehensive' }
    ];

    const benefits = [
        'Smooth city commuting',
        'Weekend leisure rides',
        'Exercise and fitness',
        'Eco-friendly transportation',
        'Low maintenance costs',
        'Stylish design statement'
    ];

    return (
        <section id="features" className="section-padding bg-slate-50">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                        <span className="text-body-sm font-medium text-slate-700">Features & Benefits</span>
                    </div>
                    <h2 className="text-display-lg text-slate-900 mb-6">
                        Engineering
                        <span className="text-slate-600"> Excellence</span>
                    </h2>
                    <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                        Every ABRO Cycle is meticulously crafted with premium features that deliver
                        exceptional performance, comfort, and reliability for the modern rider.
                    </p>
                </motion.div>

                {/* Main Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
                    {mainFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`card p-4 sm:p-6 lg:p-8 text-center relative overflow-hidden ${feature.highlight ? 'ring-2 ring-slate-900 ring-opacity-20' : ''
                                }`}
                        >
                            {feature.highlight && (
                                <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs px-2 py-1 rounded-full">
                                    Popular
                                </div>
                            )}

                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-100 rounded-xl mb-4 sm:mb-6 text-slate-700">
                                {feature.icon}
                            </div>

                            <h3 className="text-heading-md text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                            <p className="text-body-md text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Specifications */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left Column - Specifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-heading-xl text-slate-900 mb-4 sm:mb-6">Technical Specifications</h3>
                            <div className="card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                                {specifications.map((spec, index) => (
                                    <motion.div
                                        key={spec.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex justify-between items-center py-2 sm:py-3 border-b border-slate-100 last:border-b-0"
                                    >
                                        <span className="text-body-md font-medium text-slate-700">{spec.label}</span>
                                        <span className="text-body-md text-slate-900 font-semibold">{spec.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg group w-full sm:w-auto">
                            Download Full Specifications
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </motion.div>

                    {/* Right Column - Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-heading-xl text-slate-900 mb-4 sm:mb-6">Why Choose ABRO?</h3>
                            <div className="space-y-3 sm:space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-body-md text-slate-700">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action Card */}
                        <div className="card-elevated p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                            <h4 className="text-heading-md text-white mb-3 sm:mb-4">Ready to Experience Excellence?</h4>
                            <p className="text-body-md text-slate-300 mb-4 sm:mb-6">
                                Join thousands of satisfied customers who have made ABRO their trusted cycling partner.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button className="btn bg-white text-slate-900 hover:bg-slate-100 flex-1">
                                    Find a Dealer
                                </button>
                                <button className="btn bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 flex-1">
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;