import { useState, type JSX } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet, type NavLinkProps } from "react-router-dom";
import { Button } from "@/components/ui/button";

// ✅ Type for navigation items
interface NavItem {
    name: string;
    path: string;
}

function Hider(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Pages", path: "/pages" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
    ];

    // ✅ NavLink styling with active state
    const linkClasses: NavLinkProps["className"] = ({ isActive }) =>
        `text-center transition-colors duration-200 block ${isActive ? "text-indigo-600" : "hover:text-indigo-600"
        }`;

    return (
        <nav className="bg-teal-50 fixed top-0 left-0 w-full shadow-md z-50">
            <div className="flex justify-between items-center px-6 md:px-12 py-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center"
                >
                    JIHAD MIA
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-bold justify-center items-center text-center">
                    {navItems.map((item) => (
                        <NavLink key={item.path} to={item.path} className={linkClasses}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <button
                    aria-label="Toggle menu"
                    className="md:hidden text-indigo-600 focus:outline-none"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>


                <div className="">
                    <Button></Button>
                </div>
            </div>


            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full bg-teal-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"
                    } z-40 shadow-md`}
            >
                <div className="flex flex-col items-center px-6 pt-20 pb-6 gap-4 font-bold text-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={linkClasses}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Page Content */}
            <div className="pt-24 text-center">
                <Outlet />
            </div>
        </nav>
    );
}

export default Hider;
