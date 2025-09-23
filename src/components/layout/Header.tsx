'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bike, ArrowRight } from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigation: NavItem[] = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Catalog', href: '#catalog' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sky-200'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-600 to-teal-600 rounded-lg shadow-lg">
                            <Bike className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-stone-900">ABRO Cycles</h1>
                            <p className="text-xs text-stone-600 hidden sm:block">Premium Bicycle Engineering</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => handleNavClick(item.href)}
                                className="text-body-md font-medium text-stone-700 hover:text-sky-700 transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex items-center space-x-4"
                    >
                        <button className="btn btn-secondary btn-sm">
                            Learn More
                        </button>
                        <button className="btn btn-primary btn-sm group">
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-3 text-slate-700 hover:text-slate-900 transition-colors duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white border-t border-slate-200 shadow-lg"
                        >
                            <nav className="py-2 space-y-1">
                                {navigation.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        onClick={() => handleNavClick(item.href)}
                                        className="block w-full text-left px-4 py-4 text-body-md font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 min-h-[48px] flex items-center"
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                <div className="px-4 pt-4 pb-4 border-t border-slate-200 mt-2">
                                    <div className="flex flex-col space-y-3">
                                        <button className="btn btn-secondary btn-sm w-full min-h-[48px]">
                                            Learn More
                                        </button>
                                        <button className="btn btn-primary btn-sm w-full group min-h-[48px]">
                                            Get Quote
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;