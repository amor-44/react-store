import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";



const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;