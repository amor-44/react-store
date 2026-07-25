import { useState } from "react";
import { useTheme } from "../../../hook/useTheme";

const Navbar = () => {
    
    const navLinkClass= "transition-colors hover:text-indigo-500 duration-200";

    const navLinks = [
        {name: "Home",href: "#"},
        {name: "Products",href: "#"},
        {name: "About",href: "#"},
        {name: "Contact",href: "#"},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const {theme, toggleTheme} = useTheme();


    return (
        <nav className= "px-6 h-16 bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto h-full flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-400">React-Store</h1>
                
                <ul className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className={navLinkClass}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <input type="text" placeholder="Search..." className="hidden md:block w-36 px-3 py-1.5 rounded-2xl
                    bg-white text-gray-900 placeholder-gray-500
                    border border-indigo-400
                    dark:bg-gray-700 dark:text-white dark:placeholder-gray-300
                    hover:border-indigo-700
                    dark:hover:border-indigo-400
                    focus:outline-none
                    transition-colors"/>
                <div className="hidden md:flex items-center gap-2">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors cursor-pointer">
                    Cart
                </button>

                <button
                    onClick={toggleTheme}
                    className="cursor-pointer text-xl"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                </div>
                <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="block md:hidden text-3xl cursor-pointer">
                {isMenuOpen ? "✕" : "☰"}
                </button>

                
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white text-gray-900 dark:bg-gray-800 dark:text-white border-t border-gray-200 dark:border-gray-700">

                <div className="flex items-center justify-between p-4">
                <span>Theme</span>
                <button
                    onClick={toggleTheme}
                    className="cursor-pointer text-xl"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                </div>

                    <ul className="flex flex-col gap-4 p-4">
                        {navLinks.map((link) =>(
                            <li key={link.name}>
                                <a href={link.href} className={navLinkClass}
                                onClick={()=> setIsMenuOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
            )}
        </nav>
    )
}


export default Navbar;