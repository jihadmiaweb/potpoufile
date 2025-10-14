import { motion } from "framer-motion";

const skills = [
    "/imgas/1.jpg",
    "/imgas/2.jpg",
    "/imgas/3.jpg",
    "/imgas/4.jpg",
    "/imgas/5.jpg",
    "/imgas/6.jpg",
    "/imgas/7.jpg",
    "/imgas/8.jpg",
    "/imgas/9.jpg",
];

function AboutSection() {
    return (
        <section className="px-5 pb-20 md:px-12 py-20">
            {/* Top: Image + Text */}

            {/* Left Image */}


            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 pt-16 place-items-center">
                {skills.map((src, index) => (
                    <motion.div
                        key={index}
                        className="text-center border border-gray-200 bg-white h-[150px] w-[180px] flex items-center justify-center rounded-lg shadow transition-transform duration-300 hover:shadow-2xl hover:scale-105 p-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img src={src} alt={`Skill ${index + 1}`} className="w-[100px] object-contain" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default AboutSection;