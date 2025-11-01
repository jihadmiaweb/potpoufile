import React, { type JSX } from "react";
import { motion } from "framer-motion";
// Using the 'IconType' for better type safety with react-icons
import { FaCode, FaDatabase, FaNodeJs, FaReact, } from "react-icons/fa6";

// --- 1. Refined TypeScript Interfaces ---
interface Service {
    title: string;
    desc: string;
    // Use IconType from 'react-icons' for better type safety instead of JSX.Element
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
        desc: "Building fast, responsive, and user-friendly web interfaces using React, Next.js, and Tailwind CSS.",
        icon: <FaReact aria-hidden="true" />, // 3. Accessibility: Hide decorative icons
    },
    {
        title: "Backend Development",
        desc: "Creating secure and scalable backend systems using Node.js, Express, and MongoDB for modern web apps.",
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


// --- Service Card Component ---
// 4. Use ServiceCardProps for destructuring with defined types
function ServiceCard({ service, delay, index }: ServiceCardProps) {
    // 5. Moved colors array outside or define inside if specific to card
    const colors = ["text-sky-500", "text-green-500", "text-yellow-500", "text-indigo-500"];
    const iconColor = colors[index % colors.length]; // Use index directly for color logic

    return (
        <motion.div
            className="group w-full max-w-xs p-8 flex flex-col items-center text-center rounded-2xl bg-white 
            shadow-xl ring-gray-100 // 6. Add subtle  for better definition on light background
            transition-all duration-500 transform 
            hover:shadow-2xl hover:scale-[1.03] 
            hover:ring-0 // Remove ring on hover
            hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white" // 7. Slightly darker hover gradient

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // 8. Lower viewport amount for earlier animation trigger
            transition={{ duration: 0.6, delay }}
        // 9. Add role="article" or role="region" if the card represents a distinct, navigable content section
        >
            <div className="mb-4 mt-2 transition-colors duration-500">
                {React.cloneElement(service.icon, {
                    // Combine base classes with dynamic color and hover color
                    className: `text-5xl ${iconColor} group-hover:text-white transition-colors duration-500`,
                    // 3. Ensure aria-hidden is preserved if it wasn't added in the data 
                    "aria-hidden": "true"
                })}
            </div>

            <h2 className="text-xl font-extrabold mb-3 group-hover:text-white">{service.title}</h2>
            <p className="text-sm text-gray-600 group-hover:text-gray-200">{service.desc}</p> {/* 10. Added default text color */}
        </motion.div>
    );
}

// --- Main Services Section ---
function Services() {
    return (
        <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
            <header className="text-center mb-16">
                <h1 className="py-4 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    CORE SERVICE OFFERS
                </h1>
                <p className="text-center max-w-xl mx-auto text-lg text-gray-600 mt-4">
                    Specializing in **end-to-end development**, I offer a blend of technical expertise and creative solutions to bring your digital vision to life.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                {services.map((service, idx) => (
                    // Pass the index as a prop for cleaner color logic
                    <ServiceCard
                        key={idx}
                        service={service}
                        delay={idx * 0.1}
                        index={idx} // Passed the index explicitly
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;