import { motion } from "framer-motion";

function LiftsiteAbout() {
    return (
        <div className="w-full flex justify-center pt-32 pl-0 md:pl-12">
            <motion.img
                src="/imgas/about-us.png"
                alt="About Illustration"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-[280px] sm:w-[380px] md:w-[360px] lg:w-[420px] h-auto drop-shadow-xl"
            />
        </div>
    );
}

export default LiftsiteAbout;
