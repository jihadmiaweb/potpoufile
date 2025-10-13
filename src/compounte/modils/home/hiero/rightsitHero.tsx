

import { motion } from "framer-motion";

function RightSiteHireo() {
    return (
        <div className="w-full flex justify-center pt-10 px-5">
            <motion.img
                src="/imgas/home-right.png"
                alt="Frontend Developer Illustration"
                className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto drop-shadow-xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            />
        </div>
    );
}

export default RightSiteHireo;
