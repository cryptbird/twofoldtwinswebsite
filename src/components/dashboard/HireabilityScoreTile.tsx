import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const HireabilityScoreTile: React.FC = () => {
  const score = 78; // Demo data
  const data = [{ name: 'score', value: score }];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
      <h3 className="text-lg font-semibold text-gray-300 mb-2 text-center">Your Hireability Score</h3>
      <div className="flex-grow flex items-center justify-center w-full h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%" 
            outerRadius="100%" 
            data={data}
            startAngle={180}
            endAngle={0}
            barSize={20}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar 
              background={{ fill: '#374151' }} // gray-700
              dataKey="value" 
              cornerRadius={10}
              angleAxisId={0} 
              fill="#22d3ee" // cyan-400
            />
            {/* Text inside the chart */}
            <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="fill-cyan-400 text-3xl font-bold">
              {`${score}%`}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HireabilityScoreTile; 