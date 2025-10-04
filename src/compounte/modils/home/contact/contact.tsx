function Contact() {
    return (
        <div>
            <div className="container px-5 md:px-12 py-10 w-full">
                {/* Contact Title */}
                <div className="text-center pb-10">
                    <button className="px-6 py-3 font-semibold rounded-lg text-white 
                        bg-gradient-to-r from-blue-400 to-green-500
                        transition-all duration-500 
                        hover:from-green-500 hover:to-teal-400
                        shadow-lg">
                        CONTACT
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="border border-gray-600 p-6 rounded-2xl ">
                        <p className="text-gray-300 font-bold mb-6">
                            If you have any questions or concerns, please don't hesitate to contact me.
                            I am open to any work opportunities that align with my skills and interests.
                        </p>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-[15px] mb-2">
                                Your Name:
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full p-2 rounded-[5px] border border-gray-400 text-white bg-transparent outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-[15px] mb-2">
                                Your Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full p-2 rounded-[5px] border border-gray-400 text-white bg-transparent outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white text-[15px] mb-2">
                                Your Message:
                            </label>
                            <textarea
                                id="message"
                                className="w-full h-32 p-2 rounded-[5px] border border-gray-400 text-white bg-transparent outline-none"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button className="px-6 py-3 font-semibold rounded-lg text-white 
                        bg-gradient-to-r from-blue-400 to-green-500
                        transition-all duration-500 
                        hover:from-green-500 hover:to-teal-400
                        shadow-lg">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-white flex flex-col justify-between pl-20">
                        <div className="space-y-4 text-[18px] pt-40 font-bold">
                            <div className="flex items-center space-x-3">
                                <i className="fa-solid fa-envelope text-rose-400 text-2xl"></i>
                                <span className="text-gray-900">mdyacinsorkar17@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fa-solid fa-phone text-emerald-500 text-2xl"></i>
                                <span className="text-gray-900">+8801789461747</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fa-solid fa-location-dot text-rose-400 text-2xl"></i>
                                <span className="text-gray-900">Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="pb-30 flex space-x-4 pt-6 text-3xl">
                            <i className="fa-brands fa-github text-fuchsia-800 hover:text-yellow-950 hover:scale-125 transition"></i>
                            <i className="fa-brands fa-facebook text-cyan-700 hover:text-yellow-500 hover:scale-125 transition"></i>
                            <i className="fa-brands fa-linkedin text-rose-400 hover:text-emerald-800 hover:scale-125 transition"></i>
                            <i className="fa-brands fa-telegram text-gray-500 hover:text-fuchsia-700 hover:scale-125 transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
