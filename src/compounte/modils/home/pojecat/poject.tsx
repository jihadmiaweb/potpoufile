import { motion } from "framer-motion";

function Poject() {
    const projects = [
        { src: "/imgas/a1.jpeg", title: "Project One" },
        { src: "/imgas/a2.jpeg", title: "Project Two" },
        { src: "/imgas/a3.jpeg", title: "Project Three" },
        { src: "/imgas/4.jpeg", title: "Project Four" },
        { src: "/imgas/s5.jpeg", title: "Project Five" },
        { src: "/imgas/a6.jpeg", title: "Project Six" },
    ];

    return (
        <div className="w-full pt-10 px-6 md:px-12">
            {/* Heading */}
            <div className="text-center">
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    QUALITY WORK
                </span>
                <h1 className="pt-2 text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    RECENTLY DONE PROJECT
                </h1>
                <p className="max-w-[600px] mx-auto text-blue-600 pt-2 text-sm md:text-base">
                    Is give may shall likeness made yielding spirit a itself together created
                    after sea is in beast beginning signs open god you're gathering ithe
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="relative w-full rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        {/* Project Image */}
                        <img
                            src={project.src}
                            alt={project.title}
                            className="w-full  sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500"
                            loading="lazy"
                        />

                        {/* Overlay with title */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-2">
                                {project.title}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Poject;
