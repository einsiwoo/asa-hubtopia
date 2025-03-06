
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus, MoreHorizontal, Clock, MessageSquare, Paperclip } from 'lucide-react';

export interface TaskProps {
  id: number;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  comments: number;
  attachments: number;
  assignees: Array<{
    id: number;
    name: string;
    avatar?: string;
  }>;
}

interface KanbanColumnProps {
  title: string;
  tasks: TaskProps[];
  onAddTask: (columnId: string) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, tasks, onAddTask }) => {
  const columnId = title.toLowerCase().replace(/\s+/g, '-');
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': 
        return 'bg-blue-100 text-blue-700';
      case 'medium': 
        return 'bg-amber-100 text-amber-700';
      case 'high': 
        return 'bg-rose-100 text-rose-700';
      default: 
        return 'bg-neutral-100 text-neutral-700';
    }
  };
  
  return (
    <div className="flex flex-col min-w-[300px] max-w-[300px] bg-neutral-100/70 rounded-xl">
      <div className="p-3 border-b border-neutral-200 flex items-center justify-between">
        <h3 className="font-medium text-neutral-700">{title}</h3>
        <span className="text-xs font-medium bg-neutral-200 text-neutral-600 rounded-full px-2 py-0.5">
          {tasks.length}
        </span>
      </div>
      
      <div className="p-2 flex-1 overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-none space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="neo-card p-3 hover:shadow-medium transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", getPriorityColor(task.priority))}>
                {task.priority}
              </span>
              <button className="text-neutral-400 hover:text-neutral-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            
            <h4 className="text-sm font-medium text-neutral-900 mt-2">{task.title}</h4>
            {task.description && (
              <p className="text-xs text-neutral-600 mt-1 line-clamp-2">{task.description}</p>
            )}
            
            <div className="mt-3 flex items-center justify-between">
              <div className="flex -space-x-2">
                {task.assignees.map((assignee) => (
                  <div 
                    key={assignee.id} 
                    className="h-6 w-6 rounded-full bg-asa-100 flex items-center justify-center overflow-hidden border border-white"
                    title={assignee.name}
                  >
                    {assignee.avatar ? (
                      <img src={assignee.avatar} alt={assignee.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-xs font-medium text-asa-600">{assignee.name.charAt(0)}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-neutral-500">
                {task.dueDate && (
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
                
                {task.comments > 0 && (
                  <div className="flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    <span>{task.comments}</span>
                  </div>
                )}
                
                {task.attachments > 0 && (
                  <div className="flex items-center">
                    <Paperclip className="h-3 w-3 mr-1" />
                    <span>{task.attachments}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-2 border-t border-neutral-200/70">
        <button 
          onClick={() => onAddTask(columnId)}
          className="w-full py-2 flex items-center justify-center text-sm text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
};

export interface KanbanBoardProps {
  className?: string;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ className }) => {
  const [boards, setBoards] = useState({
    'to-do': {
      title: 'To Do',
      tasks: [
        {
          id: 1,
          title: 'Update employee onboarding documentation',
          description: 'Review and update the onboarding process for new employees',
          priority: 'medium' as const,
          dueDate: 'Jun 15',
          comments: 3,
          attachments: 1,
          assignees: [
            { id: 1, name: 'Jane Cooper' },
            { id: 2, name: 'Alex Johnson' }
          ]
        },
        {
          id: 2,
          title: 'Prepare quarterly report',
          priority: 'high' as const,
          dueDate: 'Jun 25',
          comments: 0,
          attachments: 2,
          assignees: [
            { id: 3, name: 'Sam Wilson' }
          ]
        }
      ]
    },
    'in-progress': {
      title: 'In Progress',
      tasks: [
        {
          id: 3,
          title: 'Server migration planning',
          description: 'Plan the migration of services to the new cloud infrastructure',
          priority: 'high' as const,
          dueDate: 'Jun 10',
          comments: 5,
          attachments: 3,
          assignees: [
            { id: 4, name: 'David Miller' },
            { id: 5, name: 'Emily Chen' }
          ]
        }
      ]
    },
    'review': {
      title: 'Review',
      tasks: [
        {
          id: 4,
          title: 'UI redesign for client dashboard',
          priority: 'medium' as const,
          dueDate: 'Jun 8',
          comments: 8,
          attachments: 4,
          assignees: [
            { id: 6, name: 'Taylor Moore' }
          ]
        }
      ]
    },
    'done': {
      title: 'Done',
      tasks: [
        {
          id: 5,
          title: 'API documentation update',
          priority: 'low' as const,
          dueDate: 'Jun 2',
          comments: 2,
          attachments: 0,
          assignees: [
            { id: 7, name: 'Chris Evans' }
          ]
        },
        {
          id: 6,
          title: 'Security audit preparation',
          description: 'Prepare systems and documentation for the upcoming security audit',
          priority: 'high' as const,
          dueDate: 'May 29',
          comments: 0,
          attachments: 1,
          assignees: [
            { id: 8, name: 'Natasha Lee' },
            { id: 9, name: 'James Barnes' }
          ]
        }
      ]
    }
  });
  
  const handleAddTask = (columnId: string) => {
    console.log(`Add task to ${columnId}`);
    // In a real application, open a modal to add a new task
  };
  
  return (
    <div className={cn("flex space-x-4 pb-6 overflow-x-auto scrollbar-none", className)}>
      {Object.entries(boards).map(([id, board]) => (
        <KanbanColumn 
          key={id}
          title={board.title}
          tasks={board.tasks}
          onAddTask={handleAddTask}
        />
      ))}
    </div>
  );
};
