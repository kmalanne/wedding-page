import React from 'react';
import { Routes } from './Routes';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes />
    </div>
  );
};
