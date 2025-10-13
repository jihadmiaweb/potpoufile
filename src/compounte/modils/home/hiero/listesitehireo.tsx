

import { motion } from "framer-motion";

function ListHider() {
    return (
        <div className="flex items-center justify-center min-h-[400px] px-4">
            <motion.div
                className="rounded-xl flex flex-col justify-center p-6
                   bg-cover bg-center w-full max-w-[600px] h-[350px] md:h-[400px]"
                style={{
                    backgroundImage:
                        "url('/imgas/153b27d7-4cdf-4be9-b5fc-dc9410065321.jpeg')",
                }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className="flex items-center px-4 md:px-6 py-2 text-2xl md:text-4xl font-extrabold 
                       bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                       bg-clip-text text-transparent">
                    HELLO
                    <span className="border-b-2 ml-3 md:ml-5 border-blue-700 w-[120px] md:w-[250px] lg:w-[400px]"></span>
                </h1>

                <div>
                    <h2 className="pl-4 md:pl-6 pb-3 text-3xl md:text-5xl lg:text-6xl font-extrabold 
                         bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                         bg-clip-text text-transparent">
                        I AM JIHAD MIA
                    </h2>
                    <span className="pl-4 md:pl-6 text-xl md:text-3xl lg:text-4xl font-extrabold 
                           bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                           bg-clip-text text-transparent">
                        Frontend Developer
                    </span>
                </div>

                <div className="pl-4 md:pl-6 flex gap-4 md:gap-6 pt-6">
                    <button className="px-4 md:px-8 py-2 md:py-3 font-bold text-white rounded-lg 
                             bg-gradient-to-r from-pink-500 to-yellow-400 
                             transition-all duration-500 ease-in-out 
                             hover:from-indigo-500 hover:to-pink-500">
                        HIRE ME
                    </button>

                    <button className="px-4 md:px-8 py-2 md:py-3 font-semibold rounded-lg text-white 
                             bg-gradient-to-r from-blue-400 to-green-500
                             transition-all duration-500 
                             hover:from-green-500 hover:to-teal-400 shadow-lg">
                        GET CV
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default ListHider;
