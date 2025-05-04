import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut, Briefcase, MessageSquare } from 'lucide-react';

const DashboardNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 border-b border-gray-700">
      <div className="container ml-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className='flex'>
        <img src="/genup2.png" alt="genUP Logo" className="h-10 w-10" /> 

        <div className="text-4xl font-bold">
          {/* Replace with your actual horizontal logo component or text */}
          
          GenUp
          
        </div>
        
        </div>
        
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Update Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Add Project</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact Mentor</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer text-red-400 focus:text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
      </div>
    </nav>
  );
};

export default DashboardNavbar; 