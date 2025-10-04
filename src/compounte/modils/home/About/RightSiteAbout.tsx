function RightSiteAbout() {
    return (
        <div className="px-5 md:px-12">
            {/* Heading */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold 
                  bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                  bg-clip-text text-transparent pb-3 pt-28">
                <h1 className="pb-2">LET’S</h1>
                <span>INTRODUCE ABOUT</span>
                <h2 className="pb-2 pt-2">MYSELF</h2>
            </div>

            {/* Paragraph */}
            <div className="text-blue-800 leading-7 w-full md:w-[500px]">
                <p className="pb-3">
                    Whose given. Were gathered. There first subdue greater. Bearing you
                    Whales heaven midst their. Beast creepeth. days.
                </p>
                <span>
                    Is give may shall likeness made yielding spirit a itself together created
                    after sea is in beast beginning signs open god you're gathering whose
                    gathered cattle let. Creature whales fruit unto meat the life beginning
                    all in under give two.
                </span>
            </div>

            {/* Button */}
            <div className="pt-6">
                <button className="px-5 md:px-6 py-2 md:py-3 font-semibold rounded-lg text-white 
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:from-pink-500 hover:to-yellow-500
                       transition-all duration-500 shadow-lg">
                    DOWNLOAD CV
                </button>
            </div>
        </div>

    );
}

export default RightSiteAbout;