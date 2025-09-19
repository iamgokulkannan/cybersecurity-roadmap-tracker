// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import PhaseList from './components/PhaseList';
import Auth from './components/Auth';
import Celebration from './components/Celebration';
import MobileNav from './components/MobileNav';
import { UserProvider, useUser } from './contexts/UserContext';
import { useStreaks } from './hooks/useStreaks';
import roadmapData from './data/roadmapData';

function AppContent() {
  const { user, userData, isLoading, updateUser, logout } = useUser();
  const [progress, setProgress] = useState({});
  const [resourcePayments, setResourcePayments] = useState({});
  const [selectedRegion, setSelectedRegion] = useState('india');
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dataLoadedRef = useRef(false);

  // Handle streak milestones
  const handleStreakMilestone = (title, message) => {
    setCelebrationMessage(`${title}\n${message}`);
    setShowCelebration(true);
  };

  const { updateStreak } = useStreaks(handleStreakMilestone);
  
  // Load user data from Firebase (only once when userData changes)
  useEffect(() => {
    if (userData && !dataLoadedRef.current) {
      setProgress(userData.progress || {});
      setResourcePayments(userData.resourcePayments || {});
      setSelectedRegion(userData.selectedRegion || 'india');
      dataLoadedRef.current = true;
    }
  }, [userData]);

  // Reset data loaded flag when user changes
  useEffect(() => {
    dataLoadedRef.current = false;
  }, [user?.uid]);
  
  // Save data to Firebase (debounced)
  const saveUserData = (newProgress, newResourcePayments, newSelectedRegion) => {
    if (user && userData) {
      updateUser({
        progress: newProgress,
        resourcePayments: newResourcePayments,
        selectedRegion: newSelectedRegion
      });
    }
  };

  const handleTaskToggle = (phaseId, taskId) => {
    const wasCompleted = progress[phaseId]?.[taskId];
    const isNowCompleted = !wasCompleted;
    
    const newProgress = {
      ...progress,
      [phaseId]: {
        ...progress[phaseId],
        [taskId]: isNowCompleted
      }
    };
    
    setProgress(newProgress);

    // Update streak when task is completed
    if (isNowCompleted) {
      updateStreak(true);
      
      // Find the task name for celebration
      const phase = roadmapData.find(p => p.id === phaseId);
      const task = phase?.tasks.find(t => t.id === taskId);
      const taskName = task?.title || 'Task';
      
      // Check if this completes the entire phase
      const phaseTasks = phase?.tasks || [];
      const completedTasksInPhase = phaseTasks.filter(t => newProgress[phaseId]?.[t.id]).length;
      const isPhaseComplete = completedTasksInPhase === phaseTasks.length;
      
      if (isPhaseComplete) {
        // Phase completion celebration
        setCelebrationMessage(`🏆 PHASE COMPLETE! 🏆\n${phase?.title} - All tasks done!`);
      } else {
        // Task completion celebration
        setCelebrationMessage(`🎉 ${taskName} Completed! 🎉`);
      }
      
      setShowCelebration(true);
    }

    // Save to Firebase
    saveUserData(newProgress, resourcePayments, selectedRegion);
  };
  
  const handleResourcePayment = (resourceId, isPaid) => {
    const newResourcePayments = {
      ...resourcePayments,
      [resourceId]: isPaid
    };
    
    setResourcePayments(newResourcePayments);
    
    // Save to Firebase
    saveUserData(progress, newResourcePayments, selectedRegion);
  };
  
  const calculateProgress = () => {
    let totalTasks = 0;
    let completedTasks = 0;
    let totalPaidResources = 0;
    let acquiredPaidResources = 0;
    
    roadmapData.forEach(phase => {
      phase.tasks.forEach(task => {
        totalTasks++;
        if (progress[phase.id]?.[task.id]) {
          completedTasks++;
        }
        
        // Count paid resources
        const resources = selectedRegion === 'india' ? task.resourcesIndia : task.resourcesGlobal;
        resources.forEach(resource => {
          if (resource.paid) {
            totalPaidResources++;
            if (resourcePayments[resource.id]) {
              acquiredPaidResources++;
            }
          }
        });
      });
    });
    
    return {
      totalTasks,
      completedTasks,
      percentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      totalPaidResources,
      acquiredPaidResources,
      paymentProgress: totalPaidResources > 0 ? Math.round((acquiredPaidResources / totalPaidResources) * 100) : 0
    };
  };
  
  const calculatePhaseProgress = () => {
    return roadmapData.map(phase => {
      const completedTasks = phase.tasks.filter(task => 
        progress[phase.id]?.[task.id]
      ).length;
      
      const totalTasks = phase.tasks.length;
      const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      
      return {
        name: phase.title.split(':')[0], // Take only the phase number and name
        progress: percentage
      };
    });
  };
  
  if (isLoading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading your cybersecurity journey...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  const progressData = calculateProgress();
  const phaseProgressData = calculatePhaseProgress();
  
  const handleCelebrationComplete = () => {
    setShowCelebration(false);
    setCelebrationMessage('');
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      setError('');
      await logout();
      // Reset all local state
      setProgress({});
      setResourcePayments({});
      setSelectedRegion('india');
      setShowCelebration(false);
      setCelebrationMessage('');
      dataLoadedRef.current = false;
    } catch (error) {
      console.error('Logout error:', error);
      setError('Failed to logout. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    saveUserData(progress, resourcePayments, region);
  };
  
  return (
    <div className="app">
      {/* Celebration Component */}
      <Celebration 
        isVisible={showCelebration}
        onComplete={handleCelebrationComplete}
        message={celebrationMessage}
      />

      {/* Error Display */}
      {error && (
        <div className="error-banner">
          <div className="error-content">
            <span className="error-icon">⚠️</span>
            <span className="error-text">{error}</span>
            <button 
              className="error-close"
              onClick={() => setError('')}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav 
        user={user}
        userData={userData}
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
        onLogout={handleLogout}
        isLoggingOut={isLoggingOut}
        isAdmin={userData?.role === 'admin'}
        onOpenAdmin={() => navigate('/admin')}
      />

      <header className="app-header">
        <div className="header-left">
          <h1>Cybersecurity Roadmap Tracker</h1>
          <p className="welcome-message">Welcome back, {userData?.username || user.displayName}! 🚀</p>
        </div>
        <div className="header-right">
          <div className="region-selector">
            <label>Resources for:</label>
            <div className="region-buttons">
              <button 
                className={`region-btn ${selectedRegion === 'india' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedRegion('india');
                  saveUserData(progress, resourcePayments, 'india');
                }}
              >
                🇮🇳 India
              </button>
              <button 
                className={`region-btn ${selectedRegion === 'global' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedRegion('global');
                  saveUserData(progress, resourcePayments, 'global');
                }}
              >
                🌍 Global
              </button>
            </div>
          </div>
          {userData?.role === 'admin' && (
            <button 
              className="logout-btn" 
              onClick={() => navigate('/admin')}
              style={{ marginRight: '8px' }}
            >
              Admin
            </button>
          )}
          <button 
            className="logout-btn" 
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? '⏳ Logging out...' : 'Logout'}
          </button>
        </div>
      </header>
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={
            <>
              <Dashboard progressData={progressData} phaseProgressData={phaseProgressData} />
              <div className="roadmap-container">
                <h2>Cybersecurity Roadmap</h2>
                <PhaseList 
                  roadmapData={roadmapData} 
                  progress={progress}
                  resourcePayments={resourcePayments}
                  onTaskToggle={handleTaskToggle}
                  onResourcePayment={handleResourcePayment}
                  selectedRegion={selectedRegion}
                />
              </div>
            </>
          } />
          <Route path="/admin" element={userData?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;