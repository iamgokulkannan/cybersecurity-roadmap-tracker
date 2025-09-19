// firebase/auth.js
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from './config';
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './config';

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Create user account
export const createUser = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update user profile with username
    await updateProfile(user, {
      displayName: username
    });

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      username: username,
      joinDate: new Date().toISOString(),
      currentStreak: 0,
      longestStreak: 0,
      totalTasksCompleted: 0,
      lastActiveDate: null,
      progress: {},
      resourcePayments: {},
      selectedRegion: 'india'
    });

    return { success: true, user };
  } catch (error) {
    console.error('Create user error:', error);
    let errorMessage = 'Sign up failed. Please try again.';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'An account with this email already exists.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/password accounts are not enabled.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your connection.';
        break;
      default:
        errorMessage = error.message || errorMessage;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Sign in user
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Sign in error:', error);
    let errorMessage = 'Sign in failed. Please try again.';
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email address.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password. Please try again.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address.';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your connection.';
        break;
      default:
        errorMessage = error.message || errorMessage;
    }
    
    return { success: false, error: errorMessage };
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user document exists, if not create one
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      // Create user document for new Google user
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        username: user.displayName || user.email.split('@')[0],
        joinDate: new Date().toISOString(),
        currentStreak: 0,
        longestStreak: 0,
        totalTasksCompleted: 0,
        lastActiveDate: null,
        progress: {},
        resourcePayments: {},
        selectedRegion: 'india',
        provider: 'google'
      });
    }
    
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Sign out user
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user data from Firestore
export const getUserData = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return { success: true, data: userDoc.data() };
    } else {
      return { success: false, error: 'User data not found' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all users data (admin use)
export const getAllUsersData = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'users'));
    const users = snapshot.docs.map(d => d.data());
    return { success: true, data: users };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update user data in Firestore
export const updateUserData = async (uid, data) => {
  try {
    await setDoc(doc(db, 'users', uid), data, { merge: true });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Auth state observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
