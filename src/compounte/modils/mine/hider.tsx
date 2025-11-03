import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

// Nav links array
const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Contact", to: "/contact" },
];

function Hider() {
    const [open, setOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    // Close mobile menu on window resize (optional improvement)
    useEffect(() => {
        const handleResize = () => open && window.innerWidth >= 768 && setOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    // Classes
    const baseLink = "font-medium transition duration-150 ease-in-out hover:text-indigo-600";
    const activeLink = "text-pink-600";

    // Render nav links
    const renderLinks = (isMobile = false) =>
        navLinks.map((link) => (
            <NavLink
                key={link.to}
                to={link.to}
                onClick={() => isMobile && setOpen(false)}
                className={({ isActive }) =>
                    `${baseLink} ${isMobile ? "text-xl py-2" : "text-gray-700"} ${isActive ? activeLink : ""}`
                }
            >
                {link.name}
            </NavLink>
        ));

    return (
        <nav>
            {/* Navbar */}
            <div className="bg-white flex justify-between items-center fixed top-0 left-0 w-full shadow-lg px-6 md:px-12 z-50 h-16">
                {/* Logo */}
                <div>
                    <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        JIHAD MIA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {renderLinks()}
                    <Link
                        to="/CV"
                        download
                        className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition font-medium"
                    >
                        Download CV
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-indigo-600 p-2"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full invisible"
                    }`}
            >
                <div className="flex flex-col gap-1 p-4">
                    {renderLinks(true)}
                    <Link
                        to={"/CV"}
                        download
                        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-center font-medium"
                    >
                        Download CV
                    </Link>
                </div>
            </div>

            {/* Page Content */}
            <div className="pt-16 transition-all duration-300">
                <Outlet />
            </div>
        </nav>
    );
}

export default Hider;
