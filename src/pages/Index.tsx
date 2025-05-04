import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDown, CheckCircle, SmilePlus } from "lucide-react";
import { Link } from "react-router-dom";

const companyLogos = [
  { name: "Google", url: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
  { name: "Microsoft", url: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
  { name: "JPMC", url: "https://justcapital.com/wp-content/themes/justcapital/assets/img/company-logos/JPM.png" },
  { name: "Oracle", url: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" },
  { name: "KPMG", url: "https://www.cpapracticeadvisor.com/wp-content/uploads/2020/08/kpmg_logo.5f285e905d1fe.png" },
  { name: "ION", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/ION_Group.svg" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
        {/* Animated SVG clouds */}
        <div className="absolute inset-0 z-0 opacity-40">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${15 + i * 15}%`,
                left: `${i * 20}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, i % 2 === 0 ? 10 : -10, 0],
              }}
              transition={{
                duration:10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 40C13.4315 40 0 26.5685 0 10C0 4.47715 1.46115 0 7 0C15.2711 0 80 0 90 0C106.569 0 120 13.4315 120 30C120 46.5685 106.569 60 90 60C80 60 40 60 30 60C13.4315 60 0 46.5685 0 30"
                  fill="#E0E7FF"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-medium tracking-tight text-gray-700 mb-3">
              Worried for Placement skills? Don't worry,
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              We will spoon feed you!
            </h1>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-16 text-center"
            >
              <p className="text-sm text-gray-500 mb-2">Scroll down</p>
              <ArrowDown className="mx-auto text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1:1 Personal Mentor Meetings */}
      <section id="mentorship" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">1:1 Personal Mentor Meetings</h2>
              <p className="text-lg text-gray-600">
                We'll personally understand your conditions without judging you and will give you personalized action plan to get the best placements in this limited time.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Mentor meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Leaderboard */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Leaderboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Competitive Leaderboard</h2>
              <p className="text-lg text-gray-600">
              See how you compare with your batch's average—anonymously, of course (unless you're in the top 5 😉 <SmilePlus className='inline h-5 w-5' />).              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Unique Projects</h2>
              <p className="text-lg text-gray-600">
                Recruiter wants good skills, great scores and UNIQUE PROJECTS!!, We'll help you stand out of the rat race and grab what's yours.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Unique projects" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Job openings" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Openings</h2>
              <p className="text-lg text-gray-600">
                We'll provide you with latest openings and will <b>CONNECT YOU WITH ALUMNI'S YOU CAN TAKE REFERAL FROM!</b> for each goddamn opening!!
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mock Interviews */}
      <section id="interviews" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Mock Interviews</h2>
              <p className="text-lg text-gray-600">
              Even if you manage to cheat on tests, your true skills will be evaluated during the mock interviews—ensuring your genuine growth. Because we truly care about your success!
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Mock interviews" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Logos Slider */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 text-center">
            Speakers and Mentors are from
          </h2>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex items-center space-x-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                ease: "linear", 
                duration: 10, 
                repeat: Infinity 
              }}
            >
              {[...companyLogos, ...companyLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 h-16 w-40">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Tasks */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Daily tasks for you</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To keep you on right track, ALWAYS!!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">
              A sneak peek to our User Dashboard
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gray-200 h-60  flex items-center justify-center">
                    <img 
                      src={`/Dashboard${item}.png`} 
                      alt={`Dashboard Screenshot ${item}`} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </div>
              ))}
            </div>

            
            <Link 
              to="/dashboard" 
              className="btn-primary"
            >
              Checkout the Demo Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing - 3rd Year */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 text-center">
             Industry Placement Training & Internship Program <br />
            </h2>
            <h3 style={{marginTop: "-20px", color: "red", fontSize: "x-large"}}>
              <center>*for Students going in 3rd Year</center>
            
            </h3>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <table className="w-full">
                  <tbody>
                    {[
                      "1:1 Personal Mentorship",
                      "Daily Personalised Tasks",
                      "Advanced Dashboard Access",
                      "Competitive Leaderboard",
                      "Unique Projects for Resume",
                      "Internship Opportunities",
                      "Interview Prep Kit",
                      "Alumni Network Access",
                      "Refurbishing/Building Resume",
                      "LinkedIn Profile Review"

                    ].map((feature, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-4 text-gray-700">{feature}</td>
                        <td className="py-4 text-center text-green-600">
                          <CheckCircle className="h-6 w-6 inline-block" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-8 text-center">
                  <p className="text-2xl font-bold mb-4">Price: ₹1499/- only</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing - 4th Year */}
      <section className="py-24 bg-secondary" id="4thyear">
        <div className="container" >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 text-center">
              Accelerated Placement Training Sprint <br /><br />
            </h2>
            <h4 style={{marginTop: "-60px", color: "red" , fontSize: "x-large"}} className="mb-5">
              <center>*for Students going in 4th Year</center>
            
            </h4>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                price: "₹999/-",
                title: "Basic Plan",
                features: [
                  "1:1 Personal Mentorship",
                  "Daily Personalised Tasks",
                  "Advanced Dashboard Access",
                  "Unique Projects for Resume",
                  "Competitive Leaderboard",
                  "Job Opportunities",
                  "Interview Prep Kit",
                  "Refurbishing/Building Resume",
                ]
              },
              {
                price: "₹1499/-",
                title: "Premium Plan",
                features: [
                  "1:1 Personal Mentorship",
                  "Daily Personalised Tasks",
                  "Advanced Dashboard Access",
                  "Mock Interviews",
                  "Unique Projects for Resume",
                  "Competitive Leaderboard",
                  "Job Opportunities",
                  "Referral Contacts",
                  "Interview Prep Kit",
                  "Last Minute Company Specific Guidance",
                  "Alumni Network Access",
                  "Refurbishing/Building Resume",
                  "LinkedIn Profile Review"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                 <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-center">{plan.title}</h3>
                  <table className="w-full">
                    <tbody>
                      {plan.features.map((feature, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-3 text-gray-700 text-sm">{feature}</td>
                          <td className="py-3 text-center text-green-600">
                            <CheckCircle className="h-5 w-5 inline-block" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 border-t text-center">
                    <p className="text-xl font-bold mb-4">Price: {plan.price} only</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
            ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* Limited Seats */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Only first 50 entries will be taken
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              since PERSONAL MENTORSHIP IS RARE!!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
              See you on the other side!!
            </h2>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;