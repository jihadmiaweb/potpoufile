import { motion } from "framer-motion";
import { Link } from "react-router";

function RightSiteAbout() {
    return (
        <div className="px-5 md:px-12 py-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
                  bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                  bg-clip-text text-transparent mb-6"
            >
                <h1>LET’S</h1>
                <span>INTRODUCE ABOUT</span>
                <h2 className="pt-2">MYSELF</h2>
            </motion.div>

            {/* Paragraph */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-blue-800 leading-7 w-full md:w-[520px]"
            >
                <p className="pb-3">
                    Whose given. Were gathered. There first subdue greater. Bearing you
                    whales heaven midst their. Beast creepeth days.
                </p>
                <span>
                    Is give may shall likeness made yielding spirit a itself together created
                    after sea is in beast beginning signs open god you're gathering whose
                    gathered cattle let. Creature whales fruit unto meat the life beginning
                    all in under give two.
                </span>
            </motion.div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-8"
            >
                <button className="px-6 md:px-8 py-3 md:py-4 font-semibold rounded-lg text-white 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:from-pink-500 hover:to-yellow-500
                       transition-all duration-500 shadow-lg hover:shadow-xl">
                    <Link to="/CV">
                        DOWNLOAD CV
                    </Link>
                </button>
            </motion.div>
        </div>
    );
}

export default RightSiteAbout;
