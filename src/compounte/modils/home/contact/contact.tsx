import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa"; // 1. Use react-icons for contact info
import { motion } from "framer-motion";

/** 🌈 Reusable Gradient Button (Tailwind improvements) */
function GradientButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="px-8 py-3 font-semibold rounded-lg text-white 
            bg-gradient-to-r from-blue-500 to-green-500
            hover:from-green-500 hover:to-teal-500
            transition-all duration-500 shadow-xl shadow-blue-500/50 hover:shadow-green-500/50
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Added focus ring
        >
            {children}
        </button>
    );
}

// --- Component Props and Data Types ---

/** 🌍 Form Data Type */
interface FormData {
    name: string;
    email: string;
    message: string;
}

/** 🌐 Contact Info Data */
const CONTACT_INFO = [
    { icon: FaEnvelope, text: "jihadmiaweb@gmail.com", color: "text-rose-500", label: "Email" },
    { icon: FaPhoneAlt, text: "+8801789461747", color: "text-emerald-500", label: "Phone" },
    { icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh", color: "text-rose-500", label: "Location" },
];

/** 🔗 Social Links Data */
const SOCIAL_LINKS = [
    { icon: FaGithub, href: "https://github.com/", color: "text-gray-400", hoverColor: "hover:text-fuchsia-400", label: "GitHub" },
    { icon: FaFacebook, href: "https://facebook.com/", color: "text-cyan-500", hoverColor: "hover:text-yellow-400", label: "Facebook" },
    { icon: FaLinkedin, href: "https://linkedin.com/", color: "text-blue-500", hoverColor: "hover:text-emerald-400", label: "LinkedIn" },
    { icon: FaTelegram, href: "https://t.me/", color: "text-sky-500", hoverColor: "hover:text-rose-400", label: "Telegram" },
];


function Contact() {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // State for displaying validation errors

    // --- Effects & Handlers ---

    /** 🌍 Scroll Listener (No change needed, it's efficient) */
    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 300);
        // Using requestAnimationFrame for performance (throttled)
        const throttled = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", throttled);
        return () => window.removeEventListener("scroll", throttled);
    }, []);

    /** 🧭 Scroll to Top */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /** 📨 Form Change Handler */
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(null); // Clear previous errors on change
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    /** 🚀 Form Submission Handler */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const { name, email, message } = formData;

        // Basic Validation
        if (!name || !email || !message) {
            setError("⚠️ Please fill out all fields.");
            return;
        }

        // Email Validation (Simple regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("📧 Please enter a valid email address.");
            return;
        }

        // --- Simulated API Call ---
        console.log("Submitting form data:", formData);

        try {
            // Simulate network delay and successful submission
            // await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("✅ Form Submitted Successfully!");
            setFormData({ name: "", email: "", message: "" });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 4000); // 4 seconds duration

        } catch (submitError) {
            console.error("Submission failed:", submitError);
            setError("❌ Message failed to send. Please try again later.");
        }
    };

    // --- JSX Render ---
    return (
        // 3. Use <section> for semantic structure
        <section
            id="contact"
            className="w-full px-5 md:px-12 py-20 relative text-white min-h-screen" // 4. Enforce dark background for the whole section
        >
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Title */}
                <header className="text-center pb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <GradientButton className="text-xl">CONTACT ME</GradientButton>
                    </motion.div>
                </header>

                {/* Grid Layout */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700" // Refined dark theme styling
                        initial={{ opacity: 0, x: -60 }} // Initial animation adjusted for left column
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <p className="text-gray-300 font-medium mb-6">
                            If you have any questions or concerns, feel free to reach out. I’m open to collaborations or any work opportunities that align with my skills and interests.
                        </p>

                        <div className="space-y-6">
                            {/* Name */}
                            <div className="relative">
                                <label htmlFor="name" className="block text-gray-300 text-sm mb-2 font-semibold">
                                    Your Name:
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-600 
                                    text-white bg-gray-700 placeholder-gray-500 
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                                    transition-all duration-300"
                                    required
                                    aria-invalid={error && formData.name === "" ? "true" : "false"}
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label htmlFor="email" className="block text-gray-300 text-sm mb-2 font-semibold">
                                    Your Email:
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg border border-gray-600 
                                    text-white bg-gray-700 placeholder-gray-500 
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                                    transition-all duration-300"
                                    required
                                    aria-invalid={error && formData.email === "" ? "true" : "false"}
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label htmlFor="message" className="block text-gray-300 text-sm mb-2 font-semibold">
                                    Your Message:
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32 p-3 rounded-lg border border-gray-600 
                                    text-white bg-gray-700 placeholder-gray-500 
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                                    transition-all duration-300 resize-none" // 5. Added resize-none
                                    required
                                    aria-invalid={error && formData.message === "" ? "true" : "false"}
                                />
                            </div>
                        </div>

                        {/* Submission Status */}
                        {(success || error) && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`text-center mt-6 font-semibold p-3 rounded-lg ${success ? 'bg-green-800/30 text-green-400' : 'bg-red-800/30 text-red-400'}`}
                                role="alert" // Accessibility role for dynamic feedback
                            >
                                {success ? "✅ Message sent successfully! I'll be in touch shortly." : error}
                            </motion.div>
                        )}

                        <div className="text-center pt-6">
                            <GradientButton type="submit">SEND MESSAGE</GradientButton>
                        </div>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        className="p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 60 }} // Initial animation adjusted for right column
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl font-bold mb-8 text-gray-200">Get In Touch</h2>

                        {/* Info List */}
                        <div className="space-y-8">
                            {CONTACT_INFO.map((item, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <item.icon className={`text-3xl ${item.color} flex-shrink-0 mt-1`} aria-hidden="true" />
                                    <div role="group" aria-label={item.label}>
                                        <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                                        <p className="text-lg text-white font-semibold break-words">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-10">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">Connect with Me</h3>
                            <div className="flex space-x-5 text-3xl">
                                {SOCIAL_LINKS.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                        className={`${link.color} ${link.hoverColor} hover:scale-125 transition duration-300`}
                                    >
                                        <link.icon aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* 🚀 Scroll-to-Top Button */}
            {showTopBtn && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 rounded-full 
                    bg-gradient-to-r from-blue-500 to-green-400 
                    text-white shadow-xl z-50 focus:outline-none focus:ring-4 focus:ring-green-400/50"
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, rotate: 10 }} // Reduced scale slightly for better feel
                    transition={{ duration: 0.3 }}
                >
                    <FaArrowUp className="text-2xl" />
                </motion.button>
            )}
        </section>
    );
}

export default Contact;