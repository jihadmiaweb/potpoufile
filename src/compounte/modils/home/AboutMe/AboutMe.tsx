function AboutMe() {
    return (

        <div className="min-h-screen w-full px-6 md:px-12 pt-16 bg-gray-50">
            {/* Heading */}
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    CLIENT SAY ABOUT ME
                </h1>
                <p className="pt-2 max-w-xl mx-auto text-blue-600 text-sm md:text-base">
                    Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
                    beginning signs open god you're gathering ithe
                </p>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16">
                {/* Card 1 */}
                <div className="flex items-center gap-5 p-5 w-full md:w-[500px] mx-auto border border-gray-200 bg-white rounded-lg shadow transition-transform duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="flex-shrink-0">
                        <img src="/imgas/t2.jpg" alt="Client" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                            DAVIL SADEN
                        </h2>
                        <p className="text-sm text-gray-500">
                            Him, Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
                            beginning signs open god you're gathering ithe
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-5 p-5 w-full md:w-[500px] mx-auto border border-gray-200 bg-white rounded-lg shadow transition-transform duration-300 hover:shadow-2xl hover:scale-105">
                    <div className="flex-shrink-0">
                        <img src="/imgas/t1.jpg" alt="Client" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                            JIHAD MIA
                        </h2>
                        <p className="text-sm text-gray-500">
                            Him, Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
                            beginning signs open god you're gathering ithe
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AboutMe;