import { motion } from "framer-motion";

function RightSiteHireo() {
    return (
        <div className="w-full flex justify-center pt-10 px-5">
            <motion.img
                src="/imgas/home-right.png"
                alt="Frontend Developer Illustration"
                className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto drop-shadow-xl"
                initial={{ opacity: 0, y: -100 }} // Move from top
                whileInView={{ opacity: 1, y: 0 }} // End at normal position
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            />
        </div>
    );
}

export default RightSiteHireo;
