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
    ArrowRight,
    Heart,
    Sparkles,
    Award,
    Target
} from 'lucide-react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    highlight?: boolean;
}

interface Specification {
    label: string;
    value: string;
}

const FeaturesSection: React.FC = () => {
    const mainFeatures: Feature[] = [
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Style & Comfort',
            description: 'Redefining cycling with unmatched comfort and elegant design that turns heads.',
            color: 'text-purple-500',
            highlight: true
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Smooth Performance',
            description: 'Precision-engineered drivetrain ensures effortless riding and optimal power transfer.',
            color: 'text-amber-500',
            highlight: true
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: 'Easy Maintenance',
            description: 'Designed for minimal maintenance with easily replaceable parts and comprehensive service support.',
            color: 'text-blue-500'
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Eco-Friendly',
            description: 'Sustainable manufacturing processes and materials that respect our environment.',
            color: 'text-green-500'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Built to Last',
            description: 'Durable construction and quality materials ensure your cycle serves you for years to come.',
            color: 'text-slate-500'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Innovation First',
            description: 'Pioneering India\'s first cruiser cycles with cutting-edge design and engineering excellence.',
            color: 'text-amber-500'
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
        <section id="features" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-8 shadow-sm border border-slate-200"
                    >
                        <Target className="w-4 h-4 text-slate-600 mr-2" />
                        <span className="text-body-sm font-medium text-slate-700">Features & Benefits</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-display-xl text-slate-900 mb-8"
                    >
                        Engineering
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600"> Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-body-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        Every ABRO Cycle is meticulously crafted with premium features that deliver
                        exceptional performance, comfort, and reliability for the modern rider.
                    </motion.p>
                </motion.div>

                {/* Main Features Grid */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group card p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300"
                                >
                                    <div className={`${feature.color} group-hover:text-white transition-colors duration-300`}>
                                        {feature.icon}
                                    </div>
                                </motion.div>
                                <h4 className="text-heading-md text-slate-900 mb-4">{feature.title}</h4>
                                <p className="text-body-md text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="max-w-3xl mx-auto mb-12">
                        <h3 className="text-heading-xl text-slate-900 mb-6">Why Choose ABRO?</h3>
                        <p className="text-body-lg text-slate-600">
                            Experience the perfect blend of innovation, quality, and style with our cruiser cycles.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-slate-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                </motion.div>
                                <span className="text-body-md text-slate-700 font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;