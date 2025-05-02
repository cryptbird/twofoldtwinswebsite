import React from 'react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
}

// Demo Data
const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: 'CodeNinja', score: 9850 },
  { rank: 2, username: 'AlgoMaster', score: 9500 },
  { rank: 3, username: 'ReactGuru', score: 9200 },
  { rank: 4, username: 'YourUsername', score: 8900 }, // Example for current user
  { rank: 5, username: 'ScriptKid', score: 8500 },
  { rank: 6, username: 'ByteMe', score: 8100 },
  { rank: 7, username: 'DevDude', score: 7800 },
  { rank: 8, username: 'SyntaxSorcerer', score: 7500 },
];

const LeaderboardTile: React.FC = () => {
  const currentUserRank = 4; // Example rank for highlighting

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">Leaderboard</h3>
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 pr-2">
        <ul className="space-y-2">
          {leaderboardData.map((entry) => (
            <li 
              key={entry.rank} 
              className={`flex justify-between items-center p-2 rounded ${entry.rank === currentUserRank ? 'bg-purple-600/30' : 'bg-gray-700/50'}`}
            >
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-400 w-6 mr-2 text-center">{entry.rank}</span>
                <span className="text-sm text-white">{entry.username}</span>
              </div>
              <span className="text-sm font-semibold text-purple-400">{entry.score} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderboardTile; 