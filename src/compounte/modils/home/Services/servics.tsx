import { FaWordpress, FaPaintBrush, FaSearch, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
    const services = [
        {
            title: "WP DEVELOPING",
            desc: "Creeping for female light years that lesser can't evening heaven isn't bearing tree",
            icon: <FaWordpress className="text-4xl text-blue-500" />,
        },
        {
            title: "WEB DESIGN",
            desc: "Deep cattle saying morning face upon shall unto stars, two sixth said female",
            icon: <FaPaintBrush className="text-4xl text-pink-500" />,
        },
        {
            title: "SEO OPTIMIZATION",
            desc: "Blessed light him fourth him creature form itself after grass said them.",
            icon: <FaSearch className="text-4xl text-green-500" />,
        },
        {
            title: "APP DEVELOPMENT",
            desc: "Which wherein moveth may, fowl seed day land face waters greater.",
            icon: <FaMobileAlt className="text-4xl text-purple-500" />,
        },
    ];

    return (
        <div className="w-full px-6 md:px-12">
            {/* Heading */}
            <div className="text-center text-black">
                <h1 className="py-4 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    SERVICE OFFERS
                </h1>
                <p className="text-center max-w-md mx-auto text-blue-600">
                    Is give may shall likeness made yielding spirit a itself together created after sea
                    is in beast beginning signs open god you're gathering ithe
                </p>
            </div>

            {/* Services Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="w-full max-w-[250px] p-6 flex flex-col items-center text-center rounded-xl shadow-lg 
                transition-transform duration-300 hover:shadow-2xl 
                hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:text-white"
                            initial={{ opacity: 0, y: 50 }} // Start slightly below
                            whileInView={{ opacity: 1, y: 0 }} // Animate to original position
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }} // stagger effect
                        >
                            <div className="mb-4 mt-4" role="img" aria-label={service.title}>{service.icon}</div>
                            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                            <p className="text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;
