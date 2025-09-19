// components/Task.js
import React, { useState } from 'react';

const Task = ({ task, phaseId, isCompleted, resourcePayments, onToggle, onResourcePayment, selectedRegion }) => {
  const [showResources, setShowResources] = useState(false);
  
  const handleToggle = () => {
    onToggle(phaseId, task.id);
  };
  
  const getResources = () => {
    return selectedRegion === 'india' ? task.resourcesIndia : task.resourcesGlobal;
  };
  
  const handleResourcePayment = (resourceId, isPaid) => {
    onResourcePayment(resourceId, isPaid);
  };
  
  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <div className="task-header">
        <div className="task-checkbox">
          <input 
            type="checkbox" 
            checked={isCompleted}
            onChange={handleToggle}
          />
        </div>
        <div className="task-title">
          <h4>{task.title}</h4>
          <span className="task-type">{task.type}</span>
        </div>
        <button 
          className="task-resources-toggle"
          onClick={() => setShowResources(!showResources)}
        >
          {showResources ? '📚 Hide Resources' : '📚 Show Resources'}
        </button>
      </div>
      
      <p className="task-description">{task.description}</p>
      
      {showResources && (
        <div className="task-resources">
          <h5>Resources ({selectedRegion === 'india' ? 'India' : 'Global'}):</h5>
          <ul>
            {getResources().map(resource => (
              <li key={resource.id} className="resource-item">
                <div className="resource-info">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.name}
                  </a>
                  <span className="resource-type">({resource.type})</span>
                  <span className={`resource-cost ${resource.paid ? 'paid' : 'free'}`}>
                    {resource.paid ? 'Paid' : 'Free'}
                  </span>
                </div>
                
                {resource.paid && (
                  <div className="resource-payment">
                    {resourcePayments[resource.id] ? (
                      <div className="payment-status paid">
                        <span className="payment-label">Paid</span>
                        <button 
                          className="cancel-payment-btn"
                          onClick={() => handleResourcePayment(resource.id, false)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="mark-paid-btn"
                        onClick={() => handleResourcePayment(resource.id, true)}
                      >
                        Mark as Paid
                      </button>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task;