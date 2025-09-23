'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';

interface Stat {
    icon: React.ReactNode;
    value: string;
    label: string;
}

const HeroBanner: React.FC = () => {
    const stats: Stat[] = [
        {
            icon: <Award className="w-5 h-5" />,
            value: '100%',
            label: 'Quality Assured'
        },
        {
            icon: <Users className="w-5 h-5" />,
            value: '1K+',
            label: 'Happy Customers'
        },
        {
            icon: <Clock className="w-5 h-5" />,
            value: '2024',
            label: 'Founded'
        }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
            {/* Clean background - no grid pattern */}

            <div className="container-custom relative z-10 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-20 lg:pb-16">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
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
                            className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200"
                        >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                            <span className="text-body-sm font-medium text-slate-700">India's First Cruiser Cycle Manufacturer</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h1 className="text-display-xl lg:text-display-2xl text-stone-900 animate-fade-in-up">
                                Redefining
                                <br />
                                <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">Bicycle Engineering</span>
                            </h1>
                            <p className="text-body-lg text-stone-600 max-w-xl">
                                ABRO Cycles brings you precision-crafted cruiser cycles
                                designed for the modern Indian rider. Experience the perfect blend of comfort,
                                style, and engineering excellence.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <button className="btn btn-primary btn-lg group w-full sm:w-auto">
                                Explore Our Cycles
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                            <button className="btn btn-accent btn-lg group flex items-center justify-center w-full sm:w-auto">
                                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                Watch Our Story
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="flex items-center justify-center mb-2 text-sky-600">
                                        {stat.icon}
                                    </div>
                                    <div className="text-heading-md sm:text-heading-lg font-bold text-stone-900">{stat.value}</div>
                                    <div className="text-body-sm text-stone-600 text-center">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Bicycle Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Product Card */}
                            {/* <div className="card-gradient p-8"> */}
                            {/* Bicycle Image */}
                            <div className="relative">
                                <div className="cycle-image-container bg-transparent">
                                    <Image
                                        src="/images/cycle.png"
                                        alt="ABRO Cruiser Cycle"
                                        width={500}
                                        height={400}
                                        className="object-contain w-full h-full drop-shadow-lg max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
                                        priority
                                    />

                                    {/* Floating Badge */}
                                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                                        <div className="text-body-sm font-semibold text-slate-900">Premium</div>
                                        <div className="text-xs text-slate-600">Cruiser Series</div>
                                    </div> */}
                                </div>

                                {/* Feature Pills */}
                                {/* <div className="absolute -bottom-4 left-4 right-4 flex justify-center space-x-2">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-sky-200">
                                            <span className="text-body-sm font-medium text-sky-700">Comfort First</span>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-teal-200">
                                            <span className="text-body-sm font-medium text-teal-700">Durable Design</span>
                                        </div>
                                    </div> */}
                            </div>
                            {/* </div> */}

                            {/* Floating Elements */}
                            {/* <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-sky-200"
                            >
                                <div className="text-body-sm font-semibold text-sky-700">100%</div>
                                <div className="text-xs text-sky-600">Quality Assured</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-200"
                            >
                                <div className="text-body-sm font-semibold text-teal-700">Made in India</div>
                                <div className="text-xs text-teal-600">Premium Quality</div>
                            </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;