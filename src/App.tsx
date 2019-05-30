import React from 'react';
import { Routes } from './Routes';
import { Header } from './components/Header';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};
