


const Footer = () => {
  return (
    <footer className="px-6 h-16 bg-white text-gray-900 dark:bg-slate-950 dark:text-white border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto h-full flex justify-center items-center">
        <p>
          &copy; {new Date().getFullYear()} React Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;