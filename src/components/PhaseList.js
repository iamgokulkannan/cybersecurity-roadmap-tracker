// components/PhaseList.js
import React from 'react';
import Phase from './Phase';

const PhaseList = ({ roadmapData, progress, resourcePayments, onTaskToggle, onResourcePayment, selectedRegion }) => {
  return (
    <div className="phase-list">
      {roadmapData.map(phase => (
        <Phase 
          key={phase.id}
          phase={phase}
          progress={progress}
          resourcePayments={resourcePayments}
          onTaskToggle={onTaskToggle}
          onResourcePayment={onResourcePayment}
          selectedRegion={selectedRegion}
        />
      ))}
    </div>
  );
};

export default PhaseList;