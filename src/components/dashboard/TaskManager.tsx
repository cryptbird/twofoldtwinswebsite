import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: number;
  name: string;
  description: string;
  urgency: 'High' | 'Medium' | 'Low';
  url?: string;
  completed: boolean;
}

// Demo Data
const initialTasks: Task[] = [
  {
    id: 1,
    name: 'Setup Development Environment',
    description: 'Install Node.js, npm/yarn, VS Code, and necessary extensions.',
    urgency: 'High',
    url: 'https://example.com/setup-guide',
    completed: true,
  },
  {
    id: 2,
    name: 'Complete React Tutorial',
    description: 'Go through the official React documentation tutorial (Tic-Tac-Toe).',
    urgency: 'High',
    url: 'https://react.dev/learn',
    completed: false,
  },
  {
    id: 3,
    name: 'Learn Tailwind CSS Basics',
    description: 'Understand utility-first concepts, basic styling, and responsive design.',
    urgency: 'Medium',
    completed: false,
  },
  {
    id: 4,
    name: 'Build a Simple Todo App',
    description: 'Apply React and Tailwind knowledge to build a functional todo application.',
    urgency: 'Medium',
    completed: false,
  },
   {
    id: 5,
    name: 'Explore State Management (Context API)',
    description: 'Learn how to manage global state using React Context API.',
    urgency: 'Low',
    url: 'https://react.dev/learn/passing-data-deeply-with-context',
    completed: false,
  },
];

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

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md h-[500px] flex flex-col">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Task Manager</h3>
      
      {/* Task List - Scrollable */}
      <div className="flex-grow overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
        {tasks.map((task) => (
          <div key={task.id} className={`bg-gray-700 rounded transition-all duration-300 ${task.completed ? 'opacity-60' : ''}`}>
            <div className="flex items-center p-3 cursor-pointer" onClick={() => handleToggleExpand(task.id)}>
              <div className="flex items-center flex-grow">
                 {expandedTaskId === task.id ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
                 <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                  {task.name}
                 </span>
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <Badge 
                  className="text-xs bg-gray-700 text-gray-200 border border-gray-600 px-2 py-0.5"
                >
                  {task.urgency}
                </Badge>
                {task.url && (
                  <a 
                    href={task.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent row expansion when clicking link
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => handleToggleComplete(task.id)}
                  onClick={(e) => e.stopPropagation()} // Prevent row expansion when clicking checkbox
                  className="border-gray-500 data-[state=checked]:bg-green-600 data-[state=checked]:text-white"
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
                  <div className="p-3 pt-0 pl-9 text-sm text-gray-300 border-t border-gray-600 mt-2">
                    {task.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400 flex justify-between">
        <span>Tasks Completed: {completedCount}</span>
        <span>Tasks Pending: {pendingCount}</span>
      </div>
    </div>
  );
};

export default TaskManager; 