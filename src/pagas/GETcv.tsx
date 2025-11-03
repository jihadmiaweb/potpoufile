import { motion } from "framer-motion";
import React from "react";

interface DownloadIconProps {
    className?: string;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className || "w-5 h-5"}
    >
        <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.53-3.53a.75.75 0 1 1 1.06 1.06l-4.88 4.88a.75.75 0 0 1-1.06 0l-4.88-4.88a.75.75 0 0 1 1.06-1.06l3.53 3.53V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-2.25a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
        />
    </svg>
);

const CVDownloadSection: React.FC = () => {
    const profileImageUrl: string =
        "https://placehold.co/256x256/4F46E5/FFFFFF?text=Jihad";

    return (
        <section className="py-16 px-4 md:px-12 w-full">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-white p-6 md:p-12 rounded-3xl shadow-2xl hover:shadow-indigo-300/50 max-w-5xl transition-all duration-500">

                {/* Profile Image */}
                <motion.div
                    className="flex-shrink-0 mx-auto md:mx-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", damping: 10, stiffness: 100 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img
                        src={profileImageUrl}
                        alt="Profile Placeholder"
                        className="w-40 h-40 sm:w-52 sm:h-52 rounded-full shadow-2xl object-cover border-6 sm:border-8 border-white ring-4 ring-indigo-400/50"
                    />
                </motion.div>

                {/* Text & Button */}
                <motion.div
                    className="text-center md:text-left max-w-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 10, stiffness: 100 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-800 mb-4 tracking-tight">
                        Ready to Connect?
                    </h2>

                    <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 border-l-4 border-indigo-400 pl-3 sm:pl-4 italic">
                        Download my professional Curriculum Vitae to explore my skills, projects, and detailed journey.
                    </p>

                    {/* Download CV Button */}
                    <motion.a
                        href="/Jihad_Mia_CV.pdf"
                        download="Jihad_Mia_CV.pdf"
                        className="
              inline-flex items-center justify-center gap-2 sm:gap-3
              bg-indigo-600 text-white font-semibold
              px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-lg
              rounded-full shadow-lg hover:bg-indigo-700
              transition-all duration-300 ease-in-out
              transform hover:scale-[1.03] active:scale-95
              ring-4 ring-transparent hover:ring-indigo-300
            "
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 12px 24px rgba(99, 102, 241, 0.5)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <DownloadIcon className="w-5 h-5 cursor-pointer sm:w-6 sm:h-6" />
                        Get My CV
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

const Getcv: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col items-center justify-center p-4">
            {/* Header */}
            <header className="py-6 mb-8 w-full max-w-5xl text-center">
                <h1 className="text-2xl sm:text-3xl font-light text-gray-500">Portfolio Section</h1>
            </header>

            {/* CV Section */}
            <CVDownloadSection />

            {/* Footer */}
            <footer className="mt-8 text-sm sm:text-base text-gray-400">
                Designed with Tailwind and Framer Motion.
            </footer>
        </div>
    );
};

export default Getcv;
