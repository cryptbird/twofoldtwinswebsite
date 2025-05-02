import * as React from 'react';
import { useState, useMemo } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, parseISO, startOfDay, isSameDay, getDay, formatISO } from 'date-fns';

interface Task {
  id: number;
  name: string;
  description: string;
  urgency: 'High' | 'Medium' | 'Low';
  url?: string;
  completed: boolean;
  date: string; // ISO date string (e.g., '2024-08-03')
  startTime?: string; // Optional time (e.g., '11:00')
  endTime?: string;   // Optional time (e.g., '12:00')
}

// Demo Data with Dates and Times - Extended Range
const initialTasks: Task[] = [
  // --- April 2024 ---
  {
    id: 8,
    name: 'Plan Week Goals',
    description: 'Outline key objectives and tasks for the upcoming week.',
    urgency: 'Medium',
    completed: false,
    date: '2024-04-29',
    startTime: '09:00',
    endTime: '09:30'
  },
  {
    id: 9,
    name: 'Research API Integration',
    description: 'Investigate options for integrating a third-party weather API.',
    urgency: 'Low',
    completed: false,
    date: '2024-04-29',
    startTime: '14:00',
    endTime: '15:00'
  },
  {
    id: 10,
    name: 'LeetCode Easy Problem',
    description: 'Solve one easy-level LeetCode problem.',
    urgency: 'Medium',
    completed: true,
    date: '2024-04-30',
    startTime: '10:00',
    endTime: '10:30'
  },
  {
    id: 11,
    name: 'Start API Integration Coding',
    description: 'Begin implementing the chosen weather API.',
    urgency: 'High',
    completed: false,
    date: '2024-04-30',
    startTime: '11:00',
    endTime: '13:00'
  },
  // --- May 2024 ---
  {
    id: 12,
    name: 'Debug API Issues',
    description: 'Troubleshoot connection errors with the weather API.',
    urgency: 'High',
    completed: false,
    date: '2024-05-01',
    startTime: '09:30',
    endTime: '11:00'
  },
  {
    id: 13,
    name: 'Team Sync Meeting',
    description: 'Discuss progress and blockers with the team/mentor.',
    urgency: 'Medium',
    completed: true,
    date: '2024-05-01',
    startTime: '15:00',
    endTime: '15:45'
  },
  {
    id: 14,
    name: 'Refactor Todo App Code',
    description: 'Improve code structure and readability of the Todo app project.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-02',
    startTime: '10:00',
    endTime: '11:30'
  },
  {
    id: 15,
    name: 'Prepare Presentation Draft',
    description: 'Create initial slides for the project presentation.',
    urgency: 'Low',
    completed: false,
    date: '2024-05-02',
    startTime: '16:00',
    endTime: '17:00'
  },
  {
    id: 16,
    name: 'LeetCode Medium Problem',
    description: 'Solve one medium-level LeetCode problem.',
    urgency: 'High',
    completed: false,
    date: '2024-05-03',
    startTime: '09:00',
    endTime: '10:00'
  },
  {
    id: 17,
    name: 'Present Draft to Mentor',
    description: 'Get feedback on the presentation draft.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-03',
    startTime: '11:00',
    endTime: '11:30'
  },
  {
    id: 18,
    name: 'Project Deployment Prep',
    description: 'Configure server and database for Todo app deployment.',
    urgency: 'Low',
    completed: false,
    date: '2024-05-03',
    startTime: '14:00',
    endTime: '15:30'
  },
  // --- Existing August Data (Keeping for context, will be sorted correctly) ---
  {
    id: 1,
    name: 'Setup Development Environment',
    description: 'Install Node.js, npm/yarn, VS Code, and necessary extensions.',
    urgency: 'High',
    url: 'https://example.com/setup-guide',
    completed: true,
    date: '2024-08-03', 
    startTime: '11:00', 
    endTime: '11:30'
  },
  {
    id: 6,
    name: 'Review Mentor Feedback',
    description: 'Check mentor notes on the previous project submission.',
    urgency: 'Medium',
    completed: false,
    date: '2024-08-03', 
    startTime: '14:00', 
    endTime: '14:15'
  },
  {
    id: 2,
    name: 'Complete React Tutorial',
    description: 'Go through the official React documentation tutorial (Tic-Tac-Toe).',
    urgency: 'High',
    url: 'https://react.dev/learn',
    completed: false,
    date: '2024-08-04',
    startTime: '09:00',
    endTime: '10:30'
  },
  {
    id: 7,
    name: 'LeetCode Daily Challenge',
    description: 'Solve the daily LeetCode problem.',
    urgency: 'Medium',
    completed: false,
    date: '2024-08-04',
    startTime: '10:30',
    endTime: '11:00'
  },
  {
    id: 3,
    name: 'Learn Tailwind CSS Basics',
    description: 'Understand utility-first concepts, basic styling, and responsive design.',
    urgency: 'Medium',
    completed: false,
    date: '2024-08-04',
    startTime: '14:00',
    endTime: '15:00'
  },
  {
    id: 4,
    name: 'Build a Simple Todo App',
    description: 'Apply React and Tailwind knowledge to build a functional todo application.',
    urgency: 'Medium',
    completed: false,
    date: '2024-08-05',
    startTime: '10:00',
    endTime: '12:00'
  },
   {
    id: 5,
    name: 'Explore State Management (Context API)',
    description: 'Learn how to manage global state using React Context API.',
    urgency: 'Low',
    url: 'https://react.dev/learn/passing-data-deeply-with-context',
    completed: false,
    date: '2024-08-05',
    startTime: '16:00',
    endTime: '16:30'
  },
  // --- May 2024 Continued ---
  {
    id: 19,
    name: 'Finalize Presentation',
    description: 'Incorporate feedback and finalize presentation slides.',
    urgency: 'High',
    completed: false,
    date: '2024-05-06',
    startTime: '10:00',
    endTime: '11:30'
  },
  {
    id: 20,
    name: 'Deploy Todo App V1',
    description: 'Push the first version of the Todo app to the staging server.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-06',
    startTime: '14:00',
    endTime: '15:00'
  },
  {
    id: 21,
    name: 'Presentation Dry Run',
    description: 'Practice the project presentation.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-07',
    startTime: '11:00',
    endTime: '11:45'
  },
  {
    id: 22,
    name: 'Fix Deployment Bugs',
    description: 'Address any issues found after the V1 deployment.',
    urgency: 'High',
    completed: false,
    date: '2024-05-07',
    startTime: '15:00',
    endTime: '16:30'
  },
  {
    id: 23,
    name: 'Give Project Presentation',
    description: 'Present the project to stakeholders/mentor.',
    urgency: 'High',
    completed: true,
    date: '2024-05-08',
    startTime: '10:00',
    endTime: '10:45'
  },
  {
    id: 24,
    name: 'Document Todo App Features',
    description: 'Write documentation for the main features of the Todo app.',
    urgency: 'Low',
    completed: false,
    date: '2024-05-08',
    startTime: '14:00',
    endTime: '15:30'
  },
  {
    id: 25,
    name: 'LeetCode Hard Problem',
    description: 'Attempt one hard-level LeetCode problem.',
    urgency: 'High',
    completed: false,
    date: '2024-05-09',
    startTime: '09:30',
    endTime: '11:00'
  },
  {
    id: 26,
    name: 'Plan Next Project Phase',
    description: 'Outline goals and features for the next iteration of the project.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-09',
    startTime: '16:00',
    endTime: '16:45'
  },
  {
    id: 27,
    name: 'Code Review Session',
    description: 'Participate in a peer code review session.',
    urgency: 'Medium',
    completed: false,
    date: '2024-05-10',
    startTime: '11:00',
    endTime: '12:00'
  },
  {
    id: 28,
    name: 'Submit Weekly Report',
    description: 'Compile and submit the weekly progress report.',
    urgency: 'Low',
    completed: true,
    date: '2024-05-10',
    startTime: '16:30',
    endTime: '17:00'
  },
];

// Helper function to group tasks by date
const groupTasksByDate = (tasks: Task[]): { [key: string]: Task[] } => {
  return tasks.reduce((acc, task) => {
    const dateKey = formatISO(startOfDay(parseISO(task.date)), { representation: 'date' });
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(task);
    // Sort tasks within the same day by start time if available
    acc[dateKey].sort((a, b) => {
        if (a.startTime && b.startTime) {
            return a.startTime.localeCompare(b.startTime);
        }
        return 0; // Keep original order if times are missing
    });
    return acc;
  }, {} as { [key: string]: Task[] });
};

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const handleToggleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleToggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  // Group tasks by date using useMemo for performance
  const groupedTasks = useMemo(() => groupTasksByDate(tasks), [tasks]);
  const sortedDates = useMemo(() => Object.keys(groupedTasks).sort(), [groupedTasks]);

  // Function to format time range
  const formatTimeRange = (start?: string, end?: string): string => {
    if (!start) return '';
    const startTime = start; // Assuming format HH:mm
    const endTime = end ? ` - ${end}` : '';
    // Basic AM/PM conversion (can be enhanced with date-fns format if needed)
    const startHour = parseInt(startTime.split(':')[0], 10);
    const startSuffix = startHour >= 12 ? 'pm' : 'am';
    const formattedStartHour = startHour % 12 === 0 ? 12 : startHour % 12;
    const formattedStartTime = `${formattedStartHour}:${startTime.split(':')[1]}${startSuffix}`;
    // Similar logic for end time if needed, or keep it simple
    return `${formattedStartTime}${endTime ? endTime.replace(/^ - (\d{2}):(\d{2})$/, (match, h, m) => {
        const endHour = parseInt(h, 10);
        const endSuffix = endHour >= 12 ? 'pm' : 'am';
        const formattedEndHour = endHour % 12 === 0 ? 12 : endHour % 12;
        return ` - ${formattedEndHour}:${m}${endSuffix}`;
    }) : ''}`; 
  };

  return (
    <div className="bg-gray-900 p-0 rounded-lg shadow-md h-[600px] flex flex-col border border-gray-700 overflow-hidden">
      {/* Header (Optional) */}
      {/* <h3 className="text-xl font-semibold text-gray-200 p-4 border-b border-gray-700">Task Agenda</h3> */}
      
      {/* Task List - Scrollable Agenda View */}
      <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {sortedDates.map((dateKey) => {
          const date = parseISO(dateKey);
          const dayTasks = groupedTasks[dateKey];
          const dayOfWeek = format(date, 'EEE'); // e.g., Sat
          const dayOfMonth = format(date, 'd');  // e.g., 3
          const isToday = isSameDay(date, new Date());
          
          return (
            <div key={dateKey} className="flex mb-4 p-3 pr-1">
              {/* Date Column - Adjusted Today style */}
              <div className={`w-12 flex-shrink-0 text-center mr-3 text-gray-400`}>
                <div className="text-xs uppercase font-medium">{dayOfWeek}</div>
                <div className={`text-2xl font-semibold ${isToday ? 'text-gray-100 font-bold' : ''}`}>{dayOfMonth}</div>
              </div>
              
              {/* Tasks for the day Column */}
              <div className="flex-grow space-y-2">
                {dayTasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`bg-[#2b3544] rounded-lg transition-all duration-300 text-gray-100 shadow-md ${task.completed ? 'opacity-60' : ''}`}
                  >
                    <div 
                        className="flex items-center p-3 cursor-pointer min-h-[50px]" 
                        onClick={() => handleToggleExpand(task.id)}
                    >
                      {/* Expand Icon & Task Details */}
                      <div className="flex-grow flex items-start">
                        {expandedTaskId === task.id 
                            ? <ChevronDown className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-gray-400" /> 
                            : <ChevronRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-gray-400" />}
                        <div>
                            <span className={`block text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-100'}`}>
                                {task.name}
                            </span>
                            { (task.startTime || task.endTime) && (
                                <span className="block text-xs text-gray-400 mt-0.5">
                                    {formatTimeRange(task.startTime, task.endTime)}
                                </span>
                            )}
                        </div>
                      </div>

                      {/* Controls on the right */}
                      <div className="flex items-center space-x-2 ml-3 flex-shrink-0">
                        <Badge 
                           className={`text-xs border px-1.5 py-0.5 rounded-full ${ 
                            task.urgency === 'High' ? 'bg-red-500/80 border-red-400 text-white' : 
                            task.urgency === 'Medium' ? 'bg-yellow-500/80 border-yellow-400 text-black' : 
                            'bg-gray-500/80 border-gray-400 text-white' 
                          }`}
                        >
                          {task.urgency}
                        </Badge>
                        {task.url && (
                          <a 
                            href={task.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-gray-100"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => handleToggleComplete(task.id)}
                          onClick={(e) => e.stopPropagation()} 
                          className="border-gray-400 data-[state=checked]:bg-gray-100 data-[state=checked]:text-[#2b3544] w-5 h-5"
                        />
                      </div>
                    </div>
                    
                    {/* Expanded Description */}
                    <AnimatePresence>
                      {expandedTaskId === task.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 pb-3 pl-10 text-xs text-gray-300 border-t border-gray-700 mt-2 pt-2">
                            {task.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-auto p-3 border-t border-gray-700 text-sm text-gray-400 flex justify-between bg-gray-800">
        <span>Tasks Completed: {completedCount}</span>
        <span>Tasks Pending: {pendingCount}</span>
      </div>
    </div>
  );
};

export default TaskManager; 