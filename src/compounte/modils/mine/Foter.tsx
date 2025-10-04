import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
            {/* Main footer grid */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">About Me</h2>
                    <p className="text-sm leading-6">
                        Hi, I’m <span className="font-semibold text-white">Jihad Mia</span> — a passionate Web Developer specializing in
                        React, TypeScript, and modern UI design. I love building clean and
                        user-friendly applications.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
                        <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Follow Me</h2>
                    <div className="flex justify-center md:justify-start space-x-5 text-2xl">
                        <a href="#" className="hover:text-blue-400 transition"><FaGithub /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaLinkedin /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaInstagramSquare /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} <span className="text-white font-medium">Jihad Mia</span>. All Rights Reserved.
            </div>
        </footer>
    );
}



