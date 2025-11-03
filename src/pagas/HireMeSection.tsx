import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HireMeSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-16 px-4 md:px-12 w-full bg-gray-100 flex flex-col items-center transition-colors duration-500">

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-4 text-center">
                Interested in Working Together?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 text-center max-w-2xl">
                I’m open for freelance or full-time web development projects. Let’s build something amazing together!
            </p>

            {/* Hire Me Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="bg-indigo-600 cursor-pointer text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Hire Me
            </motion.button>

            {/* Contact Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative transition-all duration-300"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600 text-2xl sm:text-xl transition"
                            >
                                ✕
                            </button>

                            {/* Modal Header */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4 text-center">
                                Contact Me
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base text-center mb-6">
                                Fill out the form and I’ll get back to you soon.
                            </p>

                            {/* Contact Form */}
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-400 outline-none text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-400 outline-none text-sm sm:text-base"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-400 outline-none resize-none text-sm sm:text-base"
                                    required
                                ></textarea>

                                <motion.button
                                    type="submit"
                                    className="bg-indigo-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-sm sm:text-base"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HireMeSection;
