"use client";
import React, { useEffect, useContext, createContext, useReducer, useState } from 'react';

// Action types
const SET_DARK_MODE = 'SET_DARK_MODE';
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
    case SET_DARK_MODE:
      return { ...state, darkMode: action.payload };
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
  const [hasMounted, setHasMounted] = useState(false);

  // Toggle functions
  const toggleDarkMode = () => dispatch({ type: TOGGLE_DARK_MODE });
  const toggleReduceMotion = () => dispatch({ type: TOGGLE_REDUCE_MOTION });

  // Read saved preferences on first mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedReduceMotion = localStorage.getItem('reduceMotion') === 'true';

    dispatch({ type: SET_DARK_MODE, payload: savedDarkMode });
    dispatch({ type: TOGGLE_REDUCE_MOTION, payload: savedReduceMotion }); // Or set a specific action

    setHasMounted(true);
  }, []);

  // Update document class based on dark mode
  useEffect(() => {
    if (!hasMounted) return;
    if (state.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.darkMode, hasMounted]);

  // Persist settings in localStorage
  useEffect(() => {
    if (hasMounted) {
      localStorage.setItem('darkMode', state.darkMode);
      localStorage.setItem('reduceMotion', state.reduceMotion);
    }
  }, [state.darkMode, state.reduceMotion, hasMounted]);

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