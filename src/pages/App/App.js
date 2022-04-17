import './App.css';
import { useState } from 'react';
import MainPage from '../MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/todo/" element={<MainPage/>}/>
        <Route path="/todo/:id" element={<MainPage/>}/>
      </Routes>
    </main>
  );
}

export default App;