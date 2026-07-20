import { useState } from "react";
const Navbar = () => {
    
    const navLinkClass= "transition-colors hover:text-indigo-500 duration-200";

    const navLinks = [
        {name: "Home",href: "#"},
        {name: "Products",href: "#"},
        {name: "About",href: "#"},
        {name: "Contact",href: "#"},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    

    return (
        <nav className= " px-6 h-16 bg-gray-800 text-white">
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
                <input type="text" placeholder="Search..." className="hidden md:block w-36 px-2 border border-indigo-400 rounded-2xl hover:border-indigo-700 duration-200 transition-colors focus:outline-none"/>
                <button className= "hidden md:block bg-indigo-600 text-white px-4 p-2 rounded-md hover:bg-indigo-800 transition-colors cursor-pointer">Cart</button>
                <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                 className="block md:hidden text-3xl cursor-pointer">
                {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700">

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