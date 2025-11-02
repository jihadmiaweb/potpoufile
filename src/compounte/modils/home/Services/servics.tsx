import React, { type JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
// FIX: Changed import path from 'react-icons/fa6' to the standard 'react-icons/fa' 
import { FaCode, FaDatabase, FaNodeJs, FaReact, FaBars, FaTimes } from "react-icons/fa";

// --- 1. Refined TypeScript Interfaces ---
interface Service {
    title: string;
    desc: string;
    // Use JSX.Element for the icon
    icon: JSX.Element;
}

interface ServiceCardProps {
    service: Service;
    // Use number type for clarity
    delay: number;
    // Add index for direct array access in colors (optional, but cleaner)
    index: number;
}

// --- Service Data ---
// 2. Add 'as const' to make the array read-only and prevent modification
const services: Service[] = [
    {
        title: "Frontend Development",
        desc: "Building fast, responsive, and user-friendly web interfaces using React, Next.js, and modern CSS frameworks.",
        icon: <FaReact aria-hidden="true" />, // 3. Accessibility: Hide decorative icons
    },
    {
        title: "Backend Development",
        desc: "Creating secure and scalable backend systems using Node.js, Express, and modern databases.",
        icon: <FaNodeJs aria-hidden="true" />,
    },
    {
        title: "Full-Stack Integration",
        desc: "Seamlessly connecting frontend and backend to deliver complete, production-ready web applications.",
        icon: <FaCode aria-hidden="true" />,
    },
    {
        title: "Database Design",
        desc: "Designing and optimizing database structures using MongoDB, MySQL, and Firebase for better performance.",
        icon: <FaDatabase aria-hidden="true" />,
    },
] as const;

// --- Card Component ---
const ServiceCard = React.memo(({ service, delay, index }: ServiceCardProps) => {
    // 5. Moved colors array outside or define inside if specific to card
    const colors = ["text-sky-500", "text-green-500", "text-yellow-500", "text-indigo-500"];
    const iconColor = colors[index % colors.length]; // Use index directly for color logic

    // Tailwind classes for the card's background gradient on hover
    const hoverGradient = "hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white";

    return (
        <motion.div
            className={`group w-full max-w-sm p-8 flex flex-col items-center text-center rounded-2xl bg-white 
                      shadow-xl ring-1 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700
                      transition-all duration-500 transform 
                      hover:shadow-2xl hover:scale-[1.03] 
                      hover:ring-0 ${hoverGradient}`} // 7. Slightly darker hover gradient
            role="article"

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // 8. Lower viewport amount for earlier animation trigger
            transition={{ duration: 0.6, delay }}
        >
            <div className="mb-4 mt-2 transition-colors duration-500">
                {React.cloneElement(service.icon, {
                    // Combine base classes with dynamic color and hover color
                    className: `text-5xl ${iconColor} group-hover:text-white transition-colors duration-500`,
                    "aria-hidden": "true"
                })}
            </div>

            <h2 className="text-xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-white">{service.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-200">{service.desc}</p>
        </motion.div>
    );
});


// --- Main Services Section (Now the App Component) ---
function Services() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to apply dark mode class to body
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter transition-colors duration-300">

            {/* Header/Navigation */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                Dev<span className="text-gray-900 dark:text-white">Studio</span>
                            </a>
                        </div>
                        <div className="hidden md:flex space-x-4 items-center">
                            {navItems.map(item => (
                                <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-150">
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 ml-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? '🌞' : '🌙'}
                            </button>
                        </div>
                        <div className="flex md:hidden items-center">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? '🌞' : '🌙'}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded={isMenuOpen}
                                aria-label="Open menu"
                            >
                                {isMenuOpen ? <FaTimes className="block h-6 w-6" aria-hidden="true" /> : <FaBars className="block h-6 w-6" aria-hidden="true" />}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section Placeholder */}
            <section id="home" className="pt-20 pb-10 px-6 md:px-12 text-center">
                <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">Full-Stack Development</h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Crafting robust, scalable, and beautifully designed digital experiences.</p>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
                <header className="text-center mb-16">
                    <h1 className="py-4 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        CORE SERVICE OFFERS
                    </h1>
                    <p className="text-center max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 mt-4">
                        Specializing in **end-to-end development**, I offer a blend of technical expertise and creative solutions to bring your digital vision to life.
                    </p>
                </header>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center" role="list">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={idx}
                            service={service}
                            delay={idx * 0.1}
                            index={idx}
                        />
                    ))}
                </div>
            </section>

            {/* Footer Placeholder */}
            <footer id="contact" className="py-8 bg-white dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} DevStudio. All rights reserved.</p>
                <p className="text-sm mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
            </footer>
        </div>
    );
}

export default Services;