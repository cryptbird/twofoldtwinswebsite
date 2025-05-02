import React from 'react';
import { Plus, Github, Settings, FolderKanban } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const ProjectsTile: React.FC = () => {
  const projectCount = 5; // Demo data

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between h-full relative">
      <h3 className="text-lg font-semibold text-gray-300 mb-2 text-center">Unique Projects</h3>
      <div className="flex-grow flex items-center justify-center">
         {/* Enhanced number display */}
         <div className="flex items-center justify-center text-red-400">
            <FolderKanban className="h-12 w-12 mr-2 opacity-80" /> 
            <span className="text-7xl font-bold">{projectCount}</span>
         </div>
      </div>

      {/* Add Project Dropdown Button - moved slightly */}
      <div className="absolute bottom-3 right-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8">
              <Plus className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
            {/* Add Input fields or form elements here for a real implementation */}
            <DropdownMenuItem className="focus:bg-gray-700 cursor-pointer">
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>Project Name</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-700 cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              <span>Project GitHub URL</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-700 cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Project Score (Auto)</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-gray-700 cursor-pointer">
              <Button variant="link" size="sm" className="text-blue-400 hover:text-blue-300 p-0 h-auto">
                Manage Projects
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProjectsTile; 