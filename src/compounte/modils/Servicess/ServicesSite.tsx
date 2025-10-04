

import { NavLink } from "react-router-dom";

function ServicesSite() {
    return (
        <div className="pt-10 px-6 md:px-12">
            <div
                className="mx-auto max-w-2xl w-full h-[250px] md:h-[400px]
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        rounded-xl shadow-lg flex items-center justify-center text-center"
            >
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white pb-2">
                        SERVICES
                    </h1>
                    <div className="font-extrabold text-white space-x-1">
                        <NavLink to="/" className="hover:text-yellow-300 transition">
                            Home
                        </NavLink>
                        <span>- Services</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSite;
