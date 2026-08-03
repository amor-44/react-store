import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { useCart } from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const navLinkClass= "transition-colors hover:text-indigo-500 duration-200";

    const navLinks = [
        {name: "Home",href: "/"},
        {name: "Products",href: "/products"},
        {name: "About",href: "/about"},
        {name: "Contact",href: "/contact"},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const {theme, toggleTheme} = useTheme();
    const {cartItems} = useCart();

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className= "sticky top-0 z-50 h-16 border-b border-gray-200 bg-white/95 px-6 text-gray-900 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95 dark:text-white">
            <div className="container mx-auto h-full flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-400">React-Store</h1>
                
                <ul className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.href} className={navLinkClass}>
                                {link.name}
                            </Link>
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
                <Link to={"/cart"} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors cursor-pointer">
                    Cart ({cartItemCount})
                </Link>

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

    <Link
      to="/cart"
      onClick={() => setIsMenuOpen(false)}
      className="mx-4 mb-4 block rounded-md bg-indigo-600 px-4 py-2 text-center text-white transition-colors hover:bg-indigo-700"
    >
      Cart ({cartItemCount})
    </Link>

    <ul className="flex flex-col gap-4 p-4 pt-0">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}
        </nav>
    )
}


export default Navbar;