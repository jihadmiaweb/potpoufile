
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet } from "react-router";


function Hider() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="">

            <div className="bg-teal-50 flex justify-between items-center fixed top-0 left-0 w-full shadow-md px-6 md:px-12 z-50">

                <div>
                    <span className="py-4 inline-block text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                        JIHAD MIA
                    </span>
                </div>


                <div className="hidden md:grid grid-cols-7 gap-6 font-bold">
                    <NavLink to="/" className="text-indigo-600">Home</NavLink>
                    <NavLink to="/about" className="hover:text-indigo-600">About</NavLink>
                    <NavLink to="/services" className="hover:text-indigo-600">Services</NavLink>
                    <NavLink to="/portfolio" className="hover:text-indigo-600">Portfolio</NavLink>
                    <NavLink to="/pages" className="hover:text-indigo-600">Pages</NavLink>
                    <NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink>
                    <NavLink to="/blog" className="hover:text-indigo-600">Blog</NavLink>
                </div>

                <div>

                </div>


                <button
                    className="md:hidden text-indigo-600"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {open && (
                <div className="md:hidden bg-teal-50 w-full px-6 pt-16 pb-4 fixed top-0 left-0 shadow-md z-40">
                    <div className="flex flex-col gap-4 font-bold">
                        <NavLink to="/" onClick={() => setOpen(false)} className="text-indigo-600">Home</NavLink>
                        <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-indigo-600">About</NavLink>
                        <NavLink to="/services" onClick={() => setOpen(false)} className="hover:text-indigo-600">Services</NavLink>
                        <NavLink to="/portfolio" onClick={() => setOpen(false)} className="hover:text-indigo-600">Portfolio</NavLink>
                        <NavLink to="/pages" onClick={() => setOpen(false)} className="hover:text-indigo-600">Pages</NavLink>
                        <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-indigo-600">Contact</NavLink>
                        <NavLink to="/blog" onClick={() => setOpen(false)} className="hover:text-indigo-600">Blog</NavLink>
                    </div>
                </div>
            )}


            <div className="pt-20">
                <Outlet />
            </div>
        </nav>
    );
}
export default Hider


