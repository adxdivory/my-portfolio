"use client";
import React, { useEffect, useContext, createContext, useReducer } from 'react';

// Action types
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
const TOGGLE_REDUCE_MOTION = 'TOGGLE_REDUCE_MOTION';

// Initial state
const initialState = {
  darkMode: false,
  reduceMotion: false,
};

// Reducer function
function settingsReducer(state, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case TOGGLE_REDUCE_MOTION:
      return { ...state, reduceMotion: !state.reduceMotion };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Create context
const SettingsContext = createContext();

// Context provider
export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  // Toggle functions
  const toggleDarkMode = () => dispatch({ type: TOGGLE_DARK_MODE });
  const toggleReduceMotion = () => dispatch({ type: TOGGLE_REDUCE_MOTION });


// Apply dark mode class to the document root and persist in localStorage
useEffect(() => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const savedReduceMotion = localStorage.getItem('reduceMotion') === 'true';

  dispatch({ type: TOGGLE_DARK_MODE, payload: savedDarkMode });
  dispatch({ type: TOGGLE_REDUCE_MOTION, payload: savedReduceMotion });

  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [state.darkMode]);

useEffect(() => {
  localStorage.setItem('darkMode', state.darkMode);
  localStorage.setItem('reduceMotion', state.reduceMotion);
}, [state.darkMode, state.reduceMotion]);

  // Use a simplified value structure
  const value = {
    darkMode: state.darkMode,
    reduceMotion: state.reduceMotion,
    toggleDarkMode,
    toggleReduceMotion,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}


// Export the context directly in case it is needed
export { SettingsContext };

// Custom hook to use context
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}