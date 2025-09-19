// components/Phase.js
import React from 'react';
import Task from './Task';

const Phase = ({ phase, progress, resourcePayments, onTaskToggle, onResourcePayment, selectedRegion }) => {
  const completedTasks = phase.tasks.filter(task => 
    progress[phase.id]?.[task.id]
  ).length;
  
  const totalTasks = phase.tasks.length;
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  return (
    <div className="phase">
      <div className="phase-header">
        <h3>{phase.title}</h3>
        <div className="phase-meta">
          <span className="phase-duration">{phase.duration}</span>
          <div className="phase-progress">
            <div className="phase-progress-bar">
              <div 
                className="phase-progress-fill" 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span>{percentage}%</span>
          </div>
        </div>
      </div>
      
      <p className="phase-description">{phase.description}</p>
      
      <div className="task-list">
        {phase.tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            phaseId={phase.id}
            isCompleted={progress[phase.id]?.[task.id]}
            resourcePayments={resourcePayments}
            onToggle={onTaskToggle}
            onResourcePayment={onResourcePayment}
            selectedRegion={selectedRegion}
          />
        ))}
      </div>
    </div>
  );
};

export default Phase;