const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} PrepMate. All rights reserved.</p>
          
          <div className="flex space-x-4">
            <a href="/contact" className="hover:text-blue-400">Contact Us</a>
            <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  