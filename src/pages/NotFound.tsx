import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content Area */}
      <section className="flex-grow flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        {/* Optional: Add simplified clouds or keep it cleaner */}
        {/* 
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div ... /> // Simplified cloud animation if desired
          ))}
        </div> 
        */}
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold tracking-tight text-primary mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl mb-6">
              Oops! Page Not Found
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-600 mb-10">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Back Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound; 