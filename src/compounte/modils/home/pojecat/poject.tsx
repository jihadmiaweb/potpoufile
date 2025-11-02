import React from "react";
import { motion, type Variants, } from "framer-motion";

interface Project {
    src: string;
    title: string;
    tag: string;
    href?: string;
}


const portfolioProjects: Project[] = [
    { src: "/imgas/a1.jpeg", title: "E-Commerce Dashboard", tag: "Full-Stack", href: "#project-ecommerce" },
    { src: "/imgas/a2.jpeg", title: "SaaS Marketing Page", tag: "Frontend", href: "#project-saas" },
    { src: "/imgas/a3.jpeg", title: "Corporate Blog Redesign", tag: "UI/UX", href: "#project-blog" },
    { src: "/imgas/4.jpeg", title: "Mobile App Prototype", tag: "UI/UX", href: "#project-mobile" },
    { src: "/imgas/s5.jpeg", title: "Data Analytics Platform", tag: "Data Visualization", href: "#project-data" },
    { src: "/imgas/a6.jpeg", title: "Full-Stack API Service", tag: "Backend", href: "#project-api" },
];


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



const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 3.81v9.69a.75.75 0 0 1-1.5 0v-9.69L4.03 11.03a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
        <path d="M5.47 16.22a.75.75 0 0 1 1.06 0l2.5 2.5v1.28l-.22.13a.75.75 0 0 1-.74 0l-2.78-1.55a.75.75 0 0 1-.39-.66v-1.76ZM20.72 17.5l-2.78 1.55a.75.75 0 0 1-.74 0l-.22-.13v-1.28l2.5-2.5a.75.75 0 0 1 1.06 0v1.76a.75.75 0 0 1-.39.66Z" />
        <path d="M12 15a.75.75 0 0 1 .75.75v3.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72v-3.19A.75.75 0 0 1 12 15Z" />
    </svg>
);

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 1 0 12 22A10 10 0 0 0 12 2Zm0 16a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" fillRule="evenodd" clipRule="evenodd" />
        <path d="M12 11.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V12a.5.5 0 0 1 .5-.5Z" />
        <path d="M12.5 9h-1V7h1V9Z" />
        <path d="M14 15.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V16a.5.5 0 0 1 .5-.5Z" />
        <path d="M10 15.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V16a.5.5 0 0 1 .5-.5Z" />
    </svg>
);



const ProjectCard: React.FC<{ project: Project; delay: number }> = React.memo(({ project, delay }) => {
    return (
        <motion.a
            href={project.href || "#"}
            target="_blank"
            rel="noopener noreferrer"

            className="relative w-full rounded-xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-black/50 hover:shadow-2xl dark:hover:shadow-indigo-500/50 transition-shadow duration-300 group block bg-white dark:bg-gray-800"
            aria-label={`View project details for ${project.title}, categorized as ${project.tag}`}


            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}

            transition={{ delay: delay, duration: 0.6 }}
        >

            <img

                src={project.src}
                alt={`Screenshot of the ${project.title} project`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 
                group-hover:scale-110 group-hover:brightness-75"
                loading="lazy"
                onError={(e) => {

                    (e.target as HTMLImageElement).src = "https://placehold.co/400x300/374151/ffffff?text=Project+View";
                }}
            />

            {/* Overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                flex flex-col items-start justify-end p-6 text-white text-left">

                {/* Project Tag/Category */}
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-2 rounded-full 
                             bg-indigo-500/80 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {/* Using inline SVG replacement */}
                    <CodeIcon className="inline mr-1 w-3 h-3 text-sm" aria-hidden="true" /> {project.tag}
                </span>

                <h3 className="text-white text-xl sm:text-2xl font-extrabold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                </h3>

                {/* Secondary Call to Action */}
                <span className="text-yellow-400 text-sm font-medium border border-yellow-400 px-3 py-1 rounded-full 
                    mt-3 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    {/* Using inline SVG replacement */}
                    <RocketIcon className="mr-2 w-4 h-4 text-base" aria-hidden="true" /> Explore Case Study
                </span>
            </div>
        </motion.a>
    );
});


//
function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-inter transition-colors duration-300">
            <section id="portfolio" className="w-full py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-900">

                {/* Heading */}
                <header className="text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-xl font-bold text-gray-500 dark:text-gray-400 block mb-2">
                        MY LATEST WORK
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                        QUALITY RECENT PROJECTS
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 pt-4 text-base">
                        Showcasing a range of **high-quality, end-to-end solutions** from full-stack development to complex UI/UX implementation.
                    </p>
                </header>


                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    role="list"

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
        </div>
    );
}

export default Portfolio;