'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowRight,
    Sparkles,
    Heart,
    Zap
} from 'lucide-react';

interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    details: string[];
}

const ContactSection: React.FC = () => {
    const contactInfo: ContactInfo[] = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            details: ['+91 98765 43210', '+91 98765 43211']
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            details: ['info@abrocycles.com', 'sales@abrocycles.com']
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Address',
            details: ['123 Industrial Area, Sector 8', 'Chandigarh, Punjab 160009', 'India']
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Business Hours',
            details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
        }
    ];

    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Innovation First',
            description: 'Pioneering India\'s first cruiser cycles with cutting-edge design',
            color: 'text-amber-500'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Quality Promise',
            description: 'Every cycle crafted with passion and precision for lasting performance',
            color: 'text-red-500'
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Style & Comfort',
            description: 'Redefining cycling with unmatched comfort and elegant design',
            color: 'text-purple-500'
        }
    ];

    return (
        <section id="contact" className="section-padding bg-white">
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
                        <Heart className="w-4 h-4 text-slate-600 mr-2" />
                        <span className="text-body-sm font-medium text-slate-700">Get in Touch</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-display-xl text-slate-900 mb-8"
                    >
                        Let's Start Your
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600"> Cycling Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-body-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        Ready to experience the comfort and style of ABRO Cycles? Our expert team is here to guide you
                        through every step of your cycling journey. From product selection to after-sales support,
                        we're committed to your satisfaction.
                    </motion.p>
                </motion.div>

                {/* Contact Information */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
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
                                    <div className="text-slate-700 group-hover:text-white transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                </motion.div>
                                <h4 className="text-heading-md text-slate-900 mb-4">{info.title}</h4>
                                <div className="space-y-2">
                                    {info.details.map((detail, idx) => (
                                        <motion.p
                                            key={idx}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.1) }}
                                            viewport={{ once: true }}
                                            className="text-body-md text-slate-600"
                                        >
                                            {detail}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;