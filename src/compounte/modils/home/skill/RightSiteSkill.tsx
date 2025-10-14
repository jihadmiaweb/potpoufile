import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function RightSiteSkill() {
    return (
        <div className="flex pt-50 flex-col items-center text-center w-full px-5 md:px-12 py-10 space-y-12">

            {/* Experience Metric Block */}
            <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center w-[120px] sm:w-[150px] md:w-[200px] h-[120px] sm:h-[150px] md:h-[160px] flex-shrink-0">
                    <span className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        10
                    </span>
                </div>

                <div className="flex flex-col font-bold leading-tight text-lg sm:text-xl md:text-3xl bg-gradient-to-r from-pink-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-left">
                    <span>Years</span>
                    <span>Experience</span>
                    <span>Working</span>
                </div>
            </motion.div>

            {/* Contact Information Block */}
            <motion.div
                className="flex items-center justify-center space-x-3 w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-2xl sm:text-3xl text-blue-600"><FaPhoneAlt /></span>
                <div className="flex flex-col text-left">
                    <p className="text-sm sm:text-base text-blue-600 font-semibold uppercase">CALL US NOW</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">(+1)-800-555-6789</p>
                </div>
            </motion.div>

        </div>
    );
}

export default RightSiteSkill;
