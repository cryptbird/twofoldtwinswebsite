import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/genup2.png" alt="genUP Logo" className="h-10 w-10" /> 
            <span className="text-2xl font-bold text-black ">GenUP</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary">Home</button>
            <button onClick={() => scrollToSection('mentorship')} className="text-gray-700 hover:text-primary">Mentorship</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary">Projects</button>
            <button onClick={() => scrollToSection('interviews')} className="text-gray-700 hover:text-primary">Interviews</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary">Pricing</button>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary">Demo Dashboard</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('pricing')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-primary py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('mentorship')} 
                className="text-gray-700 hover:text-primary py-2 text-left"
              >
                Mentorship
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-700 hover:text-primary py-2 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('interviews')} 
                className="text-gray-700 hover:text-primary py-2 text-left"
              >
                Interviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-primary py-2 text-left"
              >
                Pricing
              </button>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-primary py-2 text-left"
                onClick={() => setIsOpen(false)}
              >
                Demo Dashboard
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;