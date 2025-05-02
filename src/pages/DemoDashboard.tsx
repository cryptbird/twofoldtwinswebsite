import * as React from 'react';
import { useEffect } from 'react';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import HireabilityScoreTile from '@/components/dashboard/HireabilityScoreTile';
import ProjectsTile from '@/components/dashboard/ProjectsTile';
import TaskManager from '@/components/dashboard/TaskManager';
import LeetcodeProgressTile from '@/components/dashboard/LeetcodeProgressTile';
import LeaderboardTile from '@/components/dashboard/LeaderboardTile';
import OpeningsSection from '@/components/dashboard/OpeningsSection';

const DemoDashboard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <DashboardNavbar />
      <main className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <HireabilityScoreTile />
            <ProjectsTile />
          </div>
          <div className="lg:row-span-2 grid grid-rows-2 gap-6">
             <LeetcodeProgressTile />
             <LeaderboardTile />
          </div>
          
          {/* Row 2 */}
          <div className="lg:col-span-2">
            <TaskManager />
          </div>
        </div>

        {/* Row 3 */}
        <div className="mt-8">
          <OpeningsSection />
        </div>
      </main>
    </div>
  );
};

export default DemoDashboard; 