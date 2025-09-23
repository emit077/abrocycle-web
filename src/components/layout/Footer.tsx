'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Bike,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    ArrowUp
} from 'lucide-react';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const Footer: React.FC = () => {
    const footerSections: FooterSection[] = [
        {
            title: 'Products',
            links: [
                { name: 'Cruiser Cycles', href: '#' },
                { name: 'City Bikes', href: '#' },
                { name: 'Mountain Bikes', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Spare Parts', href: '#' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#about' },
                { name: 'Our Story', href: '#about' },
                { name: 'Careers', href: '#' },
                { name: 'Press', href: '#' },
                { name: 'Awards', href: '#' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Customer Service', href: '#contact' },
                { name: 'Warranty', href: '#' },
                { name: 'Maintenance Guide', href: '#' },
                { name: 'Find a Dealer', href: '#' },
                { name: 'FAQ', href: '#' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' },
                { name: 'Refund Policy', href: '#' },
                { name: 'Shipping Policy', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="container-custom">
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Company Info - Takes up more space */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 space-y-6"
                        >
                            {/* Logo and Brand */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
                                    <Bike className="w-7 h-7 text-slate-900" />
                                </div>
                                <div>
                                    <h3 className="text-heading-lg font-bold text-white">ABRO Cycles</h3>
                                    <p className="text-body-sm text-slate-400">Premium Bicycle Engineering</p>
                                </div>
                            </div>

                            <p className="text-body-md text-slate-300 leading-relaxed">
                                Founded in 2024, ABRO Cycles is India's newest partner in cycling excellence.
                                We craft premium bicycles that combine modern craftsmanship with innovative design.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-slate-400" />
                                    <span className="text-body-md text-slate-300">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                    <span className="text-body-md text-slate-300">info@abrocycles.com</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                                    <span className="text-body-md text-slate-300">
                                        123 Industrial Area, Sector 8<br />
                                        Chandigarh, Punjab 160009
                                    </span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Footer Links */}
                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-4 gap-8">
                                {footerSections.map((section, sectionIndex) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <h4 className="text-heading-md font-semibold text-white">{section.title}</h4>
                                        <ul className="space-y-3">
                                            {section.links.map((link, linkIndex) => (
                                                <motion.li
                                                    key={link.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <a
                                                        href={link.href}
                                                        className="text-body-md text-slate-400 hover:text-white transition-colors duration-200"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-slate-800 py-12"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 className="text-heading-lg font-semibold text-white mb-4">
                                Stay Updated
                            </h4>
                            <p className="text-body-md text-slate-400">
                                Subscribe to our newsletter for the latest updates on new products,
                                cycling tips, and exclusive offers.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                            />
                            <button className="btn bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-body-sm text-slate-400">
                            © 2024 ABRO Cycles. All rights reserved. | Crafted with passion in India.
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-body-sm text-slate-400">
                                Quality • Innovation • Excellence
                            </div>

                            {/* Scroll to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 group"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;