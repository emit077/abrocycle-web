'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    User,
    MessageSquare
} from 'lucide-react';

interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    details: string[];
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

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
            details: ['123 Industrial Area, Sector 8', 'Chandigarh, Punjab 160009']
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Business Hours',
            details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                        <span className="text-body-sm font-medium text-slate-700">Get in Touch</span>
                    </div>
                    <h2 className="text-display-lg text-slate-900 mb-6">
                        Contact
                        <span className="text-slate-600"> Our Team</span>
                    </h2>
                    <p className="text-body-lg text-slate-600 max-w-3xl mx-auto">
                        Have questions about our cycles or need assistance? Our dedicated team is here to help you
                        find the perfect bicycle for your needs.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    {/* Left Column - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-heading-xl text-slate-900 mb-6 sm:mb-8">Get in Touch</h3>
                            <div className="space-y-4 sm:space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="card p-4 sm:p-6 hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-heading-md text-slate-900 mb-2">{info.title}</h4>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-body-md text-slate-600">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="card overflow-hidden"
                        >
                            <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                    <p className="text-body-md text-slate-600">Interactive Map</p>
                                    <p className="text-body-sm text-slate-500">Find our location</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-elevated p-4 sm:p-6 lg:p-8">
                            <h3 className="text-heading-xl text-slate-900 mb-6 sm:mb-8">Send us a Message</h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                    <h4 className="text-heading-md text-slate-900 mb-2">Thank You!</h4>
                                    <p className="text-body-md text-slate-600">
                                        Your message has been sent successfully. We'll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-body-sm font-medium text-slate-700 mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors duration-200 text-base"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-body-sm font-medium text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors duration-200 text-base"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-body-sm font-medium text-slate-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors duration-200 text-base"
                                                    placeholder="Enter your phone"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-body-sm font-medium text-slate-700 mb-2">
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors duration-200 text-base"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="product">Product Information</option>
                                                <option value="dealer">Dealer Network</option>
                                                <option value="support">Technical Support</option>
                                                <option value="warranty">Warranty Claim</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-body-sm font-medium text-slate-700 mb-2">
                                            Message *
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors duration-200 resize-none text-base"
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg w-full group"
                                    >
                                        Send Message
                                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ContactSection;