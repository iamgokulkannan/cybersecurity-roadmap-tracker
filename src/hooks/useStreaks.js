// hooks/useStreaks.js
import { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

export const useStreaks = (onStreakMilestone) => {
  const { userData, updateUser } = useUser();
  const [streaks, setStreaks] = useState({
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    streakHistory: []
  });

  // Load streaks from userData
  useEffect(() => {
    if (userData) {
      setStreaks({
        currentStreak: userData.currentStreak || 0,
        longestStreak: userData.longestStreak || 0,
        lastActiveDate: userData.lastActiveDate || null,
        streakHistory: userData.streakHistory || []
      });
    }
  }, [userData]);

  const updateStreak = (taskCompleted) => {
    if (!userData) return;

    const today = new Date().toDateString();
    const lastActive = streaks.lastActiveDate ? new Date(streaks.lastActiveDate).toDateString() : null;
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();

    let newStreaks = { ...streaks };

    if (taskCompleted) {
      if (lastActive === today) {
        // Already completed a task today, no change needed
        return;
      } else if (lastActive === yesterday) {
        // Continuing streak
        newStreaks.currentStreak += 1;
      } else if (lastActive === null || new Date(lastActive) < new Date(yesterday)) {
        // Starting new streak
        newStreaks.currentStreak = 1;
      }

      newStreaks.lastActiveDate = new Date().toISOString();
      newStreaks.longestStreak = Math.max(newStreaks.currentStreak, newStreaks.longestStreak);

      // Add to streak history
      newStreaks.streakHistory.push({
        date: today,
        streak: newStreaks.currentStreak
      });

      // Keep only last 30 days of history
      if (newStreaks.streakHistory.length > 30) {
        newStreaks.streakHistory = newStreaks.streakHistory.slice(-30);
      }
    } else {
      // If no task completed today and it's a new day, reset streak
      if (lastActive && lastActive !== today) {
        newStreaks.currentStreak = 0;
      }
    }

    setStreaks(newStreaks);
    
    // Check for streak milestones
    if (newStreaks.currentStreak > streaks.currentStreak) {
      const milestone = newStreaks.currentStreak;
      if (milestone === 1) {
        onStreakMilestone?.("🎉 First Day Streak! 🎉", "You're on fire! Keep it up!");
      } else if (milestone === 7) {
        onStreakMilestone?.("🔥 7 Day Streak! 🔥", "One week strong! Amazing!");
      } else if (milestone === 30) {
        onStreakMilestone?.("👑 30 Day Streak! 👑", "You're a legend! Incredible dedication!");
      } else if (milestone % 10 === 0) {
        onStreakMilestone?.(`🚀 ${milestone} Day Streak! 🚀`, "Outstanding progress!");
      }
    }
    
    // Update in Firebase (only if there are actual changes)
    if (newStreaks.currentStreak !== streaks.currentStreak || 
        newStreaks.longestStreak !== streaks.longestStreak ||
        newStreaks.lastActiveDate !== streaks.lastActiveDate) {
      updateUser({
        currentStreak: newStreaks.currentStreak,
        longestStreak: newStreaks.longestStreak,
        lastActiveDate: newStreaks.lastActiveDate,
        streakHistory: newStreaks.streakHistory
      });
    }
  };

  const getStreakMessage = () => {
    if (streaks.currentStreak === 0) {
      return "Start your learning streak today! 🔥";
    } else if (streaks.currentStreak === 1) {
      return "Great start! Keep it going! 💪";
    } else if (streaks.currentStreak < 7) {
      return `${streaks.currentStreak} day streak! You're on fire! 🔥`;
    } else if (streaks.currentStreak < 30) {
      return `${streaks.currentStreak} day streak! Incredible! 🚀`;
    } else {
      return `${streaks.currentStreak} day streak! You're a legend! 👑`;
    }
  };

  const getStreakEmoji = () => {
    if (streaks.currentStreak === 0) return "💤";
    if (streaks.currentStreak < 3) return "🔥";
    if (streaks.currentStreak < 7) return "💪";
    if (streaks.currentStreak < 30) return "🚀";
    return "👑";
  };

  return {
    streaks,
    updateStreak,
    getStreakMessage,
    getStreakEmoji
  };
};
