import { useState, useEffect, type ChangeEvent, type FormEvent, } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

/** 🌈 Reusable Gradient Button */
function GradientButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="px-6 py-3 font-semibold rounded-lg text-white 
            bg-gradient-to-r from-blue-400 to-green-500
            hover:from-green-500 hover:to-teal-400
            transition-all duration-500 shadow-lg"
        >
            {children}
        </button>
    );
}


/** 🌍 Form Data Type */
interface FormData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState<boolean>(false);

    /** 🌍 Scroll Listener */
    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 300);
        const throttled = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", throttled);
        return () => window.removeEventListener("scroll", throttled);
    }, []);

    /** 🧭 Scroll to Top */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /** 📨 Form Handlers */
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert("⚠️ Please fill out all fields.");
            return;
        }

        console.log("✅ Form Submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <motion.div
            className="min-h-screen w-full px-5 md:px-12 py-16 relative
            "
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Title */}
            <div className="text-center pb-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <GradientButton>CONTACT</GradientButton>
                </motion.div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="border border-gray-600 p-6 rounded-2xl  backdrop-blur-sm"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <p className="text-gray-400 font-bold mb-6">
                        If you have any questions or concerns, feel free to reach out. I’m
                        open to collaborations or any work opportunities that align with my
                        skills and interests.
                    </p>

                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm mb-2">
                            Your Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-400 
                            text-white bg-transparent outline-none 
                            focus:border-blue-400 hover:border-blue-300 
                            transition-all duration-200"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm mb-2">
                            Your Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-gray-400 
                            text-white bg-transparent outline-none 
                            focus:border-blue-400 hover:border-blue-300 
                            transition-all duration-200"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white text-sm mb-2">
                            Your Message:
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full h-32 p-2 rounded-md border border-gray-400 
                            text-white bg-transparent outline-none 
                            focus:border-blue-400 hover:border-blue-300 
                            transition-all duration-200"
                        />
                    </div>

                    <div className="text-center">
                        <GradientButton type="submit">SEND MESSAGE</GradientButton>
                    </div>

                    {success && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-green-400 text-center mt-4 font-semibold"
                        >
                            ✅ Message sent successfully!
                        </motion.div>
                    )}
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    className="text-white flex flex-col justify-center pl-0 md:pl-20"
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="space-y-4 text-[18px] font-bold">
                        <div className="flex items-center space-x-3">
                            <i className="fa-solid fa-envelope text-rose-400 text-2xl" aria-label="email"></i>
                            <span className="text-gray-400">mdyacinsorkar17@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <i className="fa-solid fa-phone text-emerald-500 text-2xl" aria-label="phone"></i>
                            <span className="text-gray-400">+8801789461747</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <i className="fa-solid fa-location-dot text-rose-400 text-2xl" aria-label="location"></i>
                            <span className="text-gray-400">Dhaka, Bangladesh</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 pt-6 text-3xl">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github text-fuchsia-800 hover:text-yellow-500 hover:scale-125 transition"></i>
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook text-cyan-700 hover:text-yellow-500 hover:scale-125 transition"></i>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin text-rose-400 hover:text-emerald-500 hover:scale-125 transition"></i>
                        </a>
                        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <i className="fa-brands fa-telegram text-gray-500 hover:text-fuchsia-700 hover:scale-125 transition"></i>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* 🚀 Scroll-to-Top Button */}
            {showTopBtn && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 rounded-full 
                    bg-gradient-to-r from-blue-500 to-green-400 
                    text-white shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaArrowUp className="text-2xl" />
                </motion.button>
            )}
        </motion.div>
    );
}

export default Contact;
