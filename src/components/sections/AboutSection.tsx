'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Lightbulb, Heart } from 'lucide-react';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

interface ValueItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AboutSection: React.FC = () => {
    const timeline: TimelineItem[] = [
        {
            year: '2024',
            title: 'Foundation',
            description: 'Started with a vision to revolutionize Indian cycling industry'
        },
        {
            year: '2024',
            title: 'Innovation Era',
            description: 'Introduced advanced manufacturing techniques and quality standards'
        },
        {
            year: '2024',
            title: 'Market Entry',
            description: 'Entered the bicycle manufacturing market with fresh ideas'
        },
        {
            year: '2024',
            title: 'Cruiser Revolution',
            description: 'Launched India\'s first premium cruiser cycle series'
        }
    ];

    const values: ValueItem[] = [
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Precision Engineering',
            description: 'Every component is crafted with meticulous attention to detail and engineering excellence.'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Quality First',
            description: 'We maintain the highest quality standards in materials, manufacturing, and finishing.'
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: 'Innovation',
            description: 'Constantly evolving with cutting-edge technology and innovative design solutions.'
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: 'Customer Focused',
            description: 'Building lasting relationships through exceptional products and service excellence.'
        }
    ];

    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-200">
                        <span className="text-body-sm font-medium text-slate-700">About ABRO Cycles</span>
                    </div>
                    <h2 className="text-display-lg text-slate-900 mb-6">
                        Innovation &
                        <span className="text-slate-600"> Excellence</span>
                    </h2>
                    <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                        ABRO Cycles is India's newest premier bicycle manufacturer,
                        bringing fresh innovation, quality, and customer satisfaction to the cycling industry.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-heading-xl text-slate-900">Our Story</h3>
                            <div className="space-y-4 text-body-md text-slate-600">
                                <p>
                                    Founded in 2024, ABRO Cycles began with a simple yet ambitious vision:
                                    to create bicycles that would redefine transportation for the Indian family.
                                    We are a new company with fresh ideas and modern manufacturing techniques.
                                </p>
                                <p>
                                    From day one, we have focused on pushing the boundaries of bicycle
                                    engineering, introducing innovations that prioritize rider comfort, safety,
                                    and performance. Our commitment to quality is designed to earn the trust of
                                    customers across the country.
                                </p>
                                <p>
                                    Today, we proudly introduce India's first cruiser cycle series - a testament
                                    to our innovative approach and our vision for the future of cycling in India.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="card p-6 text-center">
                                <div className="text-heading-lg font-bold text-slate-900 mb-2">100+</div>
                                <div className="text-body-sm text-slate-600">Bicycles Manufactured</div>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-heading-lg font-bold text-slate-900 mb-2">50+</div>
                                <div className="text-body-sm text-slate-600">Dealer Network</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-heading-xl text-slate-900">Our Journey</h3>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative flex items-start space-x-4"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center relative z-10">
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow card p-6">
                                            <div className="text-body-sm font-semibold text-slate-900 mb-1">{item.year}</div>
                                            <div className="text-heading-md text-slate-900 mb-2">{item.title}</div>
                                            <div className="text-body-md text-slate-600">{item.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-heading-xl text-slate-900 mb-4">Our Values</h3>
                    <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
                        The principles that guide everything we do and drive our commitment to excellence.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-8 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-xl mb-6 text-slate-700">
                                {value.icon}
                            </div>
                            <h4 className="text-heading-md text-slate-900 mb-4">{value.title}</h4>
                            <p className="text-body-md text-slate-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;