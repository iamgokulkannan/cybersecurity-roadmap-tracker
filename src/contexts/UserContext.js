// contexts/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChange, getUserData, updateUserData, signOutUser } from '../firebase/auth';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        const result = await getUserData(firebaseUser.uid);
        if (result.success) {
          setUser(firebaseUser);
          setUserData(result.data);
        } else {
          console.error('Failed to load user data:', result.error);
          setUser(firebaseUser);
          setUserData({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            username: firebaseUser.displayName || 'User',
            joinDate: new Date().toISOString(),
            currentStreak: 0,
            longestStreak: 0,
            totalTasksCompleted: 0,
            lastActiveDate: null,
            progress: {},
            resourcePayments: {},
            selectedRegion: 'india'
          });
        }
      } else {
        // User is signed out
        setUser(null);
        setUserData(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (firebaseUser, userData) => {
    setUser(firebaseUser);
    setUserData(userData);
  };

  const logout = async () => {
    try {
      await signOutUser();
      setUser(null);
      setUserData(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error; // Re-throw to handle in component
    }
  };

  const updateUser = async (updates) => {
    if (user && userData) {
      // Only update if there are actual changes
      const hasChanges = Object.keys(updates).some(key => 
        userData[key] !== updates[key]
      );
      
      if (hasChanges) {
        const newUserData = { ...userData, ...updates };
        setUserData(newUserData);
        
        // Update in Firestore
        const result = await updateUserData(user.uid, newUserData);
        if (!result.success) {
          console.error('Failed to update user data:', result.error);
        }
      }
    }
  };

  const value = {
    user,
    userData,
    login,
    logout,
    updateUser,
    isLoading
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
