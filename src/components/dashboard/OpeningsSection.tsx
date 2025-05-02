import * as React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Send } from 'lucide-react';

interface JobOpening {
  id: number;
  companyLogo: string;
  companyName: string;
  title: string;
  location: string;
  ctc: string;
  applyLink: string;
  referralLink?: string; // Optional
}

// Demo Data
const jobOpenings: JobOpening[] = [
  {
    id: 1,
    companyLogo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
    companyName: 'Google',
    title: 'Software Engineer Intern',
    location: 'Bangalore, India',
    ctc: '₹1.5L/month stipend',
    applyLink: '#',
    referralLink: '#'
  },
  {
    id: 2,
    companyLogo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
    companyName: 'Microsoft',
    title: 'Product Manager Intern',
    location: 'Hyderabad, India',
    ctc: 'Competitive Stipend',
    applyLink: '#',
  },
  {
    id: 3,
    companyLogo: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg',
    companyName: 'Amazon',
    title: 'SDE Intern',
    location: 'Remote',
    ctc: '₹1.2L/month stipend',
    applyLink: '#',
    referralLink: '#'
  },
  {
    id: 4,
    companyLogo: 'https://justcapital.com/wp-content/themes/justcapital/assets/img/company-logos/JPM.png', // Updated JPMC
    companyName: 'JPMorgan Chase & Co.',
    title: 'Technology Analyst Intern',
    location: 'Mumbai, India',
    ctc: 'Good Stipend',
    applyLink: '#'
  },
    {
    id: 5,
    companyLogo: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg',
    companyName: 'Oracle',
    title: 'Cloud Infrastructure Intern',
    location: 'Pune, India',
    ctc: 'Industry Standard',
    applyLink: '#',
    referralLink: '#'
  },
  {
    id: 6,
    companyLogo: 'https://www.cpapracticeadvisor.com/wp-content/uploads/2020/08/kpmg_logo.5f285e905d1fe.png', // Updated KPMG
    companyName: 'KPMG',
    title: 'Data Analyst Intern',
    location: 'Gurgaon, India',
    ctc: 'Competitive Stipend',
    applyLink: '#'
  },
];

const OpeningsSection: React.FC = () => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-400 inline-block mr-3">
          OPENINGS
        </h2>
        <span className="bg-gray-200 text-black text-xs font-bold px-2 py-1 rounded-full align-middle">
          👑 Premium Feature
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOpenings.map((job) => (
          <div key={job.id} className="bg-gray-700 rounded-lg p-4 flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center mb-3">
                <img src={job.companyLogo} alt={`${job.companyName} logo`} className="h-8 w-8 mr-3 bg-white rounded-full p-1" />
                <h4 className="font-semibold text-white truncate">{job.companyName}</h4>
              </div>
              <h3 className="text-lg font-medium text-gray-100 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{job.location}</p>
              <p className="text-sm text-gray-300 font-medium mb-4">{job.ctc}</p>
            </div>
            <div className="flex flex-col space-y-2">
              {job.referralLink && (
                 <Button 
                   className="w-full border border-gray-500 text-gray-300 hover:bg-gray-600 hover:text-white bg-transparent text-sm px-3 py-1.5 h-auto"
                   onClick={() => window.open(job.referralLink, '_blank')}
                 >
                  <Send className="h-4 w-4 mr-2" /> Get Referral
                 </Button>
              )}
              <Button 
                className="w-full bg-gray-600 text-white hover:bg-gray-500 text-sm px-3 py-1.5 h-auto"
                onClick={() => window.open(job.applyLink, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" /> Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningsSection; 