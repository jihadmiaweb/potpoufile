import React from "react";
import { motion, type Variants, } from "framer-motion";
import { FaCode, FaRocket } from "react-icons/fa"; // Importing icons for visual flair

// --- 1. TypeScript Interface (Added a 'tag' for categorization) ---
interface Project {
    src: string;
    title: string;
    tag: string; // e.g., "Full-Stack", "UI/UX", "Frontend"
    href?: string;
}

// --- 2. Project Data (Added 'tag' field) ---
const portfolioProjects: Project[] = [
    { src: "/imgas/a1.jpeg", title: "E-Commerce Dashboard", tag: "Full-Stack", href: "#project-ecommerce" },
    { src: "/imgas/a2.jpeg", title: "SaaS Marketing Page", tag: "Frontend", href: "#project-saas" },
    { src: "/imgas/a3.jpeg", title: "Corporate Blog Redesign", tag: "UI/UX", href: "#project-blog" },
    { src: "/imgas/4.jpeg", title: "Mobile App Prototype", tag: "UI/UX", href: "#project-mobile" },
    { src: "/imgas/s5.jpeg", title: "Data Analytics Platform", tag: "Data Visualization", href: "#project-data" },
    { src: "/imgas/a6.jpeg", title: "Full-Stack API Service", tag: "Backend", href: "#project-api" },
];

// --- 3. Custom Framer Motion Variants for Staggered Animation ---
// Define a single variant object to keep JSX cleaner
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    }
};

// --- 4. Reusable Project Card Component (Wrapped in React.memo) ---
const ProjectCard: React.FC<{ project: Project; delay: number }> = React.memo(({ project, delay }) => {
    return (
        <motion.a
            href={project.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group block bg-white" // Added bg-white for better visual lift
            aria-label={`View project details for ${project.title}, categorized as ${project.tag}`}

            // Use custom variants
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            // Apply delay using the custom transition property override
            custom={{ delay }}
            transition={{ delay }} // Apply stagger delay here
        >
            {/* Project Image - Enforced Aspect Ratio for stability */}
            <img
                src={project.src}
                alt={`Screenshot of the ${project.title} project`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 
                group-hover:scale-110 group-hover:brightness-75" // Changed blur to brightness for a cleaner look
                loading="lazy"
            />

            {/* Overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                flex flex-col items-start justify-end p-6 text-white text-left"> {/* Adjusted alignment */}

                {/* Project Tag/Category */}
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-2 rounded-full 
                                bg-indigo-500/80 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <FaCode className="inline mr-1 text-sm" aria-hidden="true" /> {project.tag}
                </span>

                <h3 className="text-white text-xl sm:text-2xl font-extrabold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                </h3>

                {/* Secondary Call to Action */}
                <span className="text-yellow-400 text-sm font-medium border border-yellow-400 px-3 py-1 rounded-full 
                    mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <FaRocket className="mr-2 text-base" aria-hidden="true" /> Explore Case Study
                </span>
            </div>
        </motion.a>
    );
});


// --- Main Component (Renamed for semantics) ---
function Portfolio() {
    return (
        <section id="portfolio" className="w-full py-20 px-6 md:px-12 bg-gray-100"> {/* Slightly lighter background */}

            {/* Heading */}
            <header className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-xl font-bold text-gray-500 block mb-2">
                    MY LATEST WORK
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                    QUALITY RECENT PROJECTS
                </h2>
                <p className="max-w-xl mx-auto text-gray-600 pt-4 text-base">
                    Showcasing a range of **high-quality, end-to-end solutions** from full-stack development to complex UI/UX implementation.
                </p>
            </header>

            {/* Projects Grid Container (Simplified and ready for staggered animation) */}
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                // Using a container variant to manage the staggered children animation
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {portfolioProjects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} delay={idx * 0.1} />
                ))}
            </motion.div>
        </section>
    );
}

export default Portfolio;