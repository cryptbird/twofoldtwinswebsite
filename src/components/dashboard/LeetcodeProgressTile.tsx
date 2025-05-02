import * as React from 'react';
// import { Progress } from "@/components/ui/progress"; // Keep if you want the linear bar too
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const LeetcodeProgressTile: React.FC = () => {
  const completedQuestions = 115; // Demo data
  const totalQuestions = 250;
  const progress = Math.round((completedQuestions / totalQuestions) * 100);
  const data = [{ name: 'progress', value: progress }];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
      <h3 className="text-lg font-semibold text-gray-300 mb-2 text-center">LeetCode Progress</h3>
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Recharts Radial Bar Chart - Increased Size */}
        <div className="w-80 h-80 mb-2"> {/* Increased size and margin */}
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="60%" 
                    outerRadius="80%" 
                    data={data} 
                    startAngle={90}
                    endAngle={-270} // Full circle
                    barSize={15}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar 
                        background={{ fill: '#374151' }} // gray-700 
                        dataKey='value' 
                        cornerRadius={10}
                        angleAxisId={0}
                        fill="#f87171" // red-400
                    />
                    {/* Text inside the chart - Increased Size */}
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-3xl font-bold"> {/* Increased text size */}
                        {`${progress}%`}
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
        
        <span className="text-sm text-gray-400">
          {completedQuestions} / {totalQuestions} questions
        </span>
      </div>
       {/* Optional Shadcn Progress bar */}
       {/* <Progress value={progress} className="w-[80%] mx-auto mt-4 h-2 bg-gray-700" indicatorClassName="bg-red-400" /> */}
    </div>
  );
};

export default LeetcodeProgressTile; 