import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex">
          <img src="/genup.png" alt="genUP Logo" className="h-10 w-10" /> 
            <h3 className="text-4xl font-bold mb-4">GenUP</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with personalized mentorship to secure their dream placements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#mentorship" className="text-gray-400 hover:text-white">Mentorship</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#interviews" className="text-gray-400 hover:text-white">Interviews</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">For Students</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white">3rd Year Plan</a>
              </li>
              <li>
                <a href="#4thyear" className="text-gray-400 hover:text-white">4th Year Plans</a>
              </li>
              <li>
                {/* <a href="#" className="text-gray-400 hover:text-white">Success Stories</a> */}
              </li>
              <li>
                {/* <a href="#" className="text-gray-400 hover:text-white">FAQs</a> */}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: twofoldtwinsinc@gmail.com
              </li>
              <li className="text-gray-400">
                Phone: +91 6375257460 <br />
                Phone: +91 7742149577
                
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} MentorMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;