import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Dashboard />
    </>
  );
}
