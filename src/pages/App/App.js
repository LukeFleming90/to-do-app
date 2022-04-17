import './App.css';
import { useState } from 'react';
import MainPage from '../MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {
        user ? 
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage/>}/>
          <Route path="/orders" element={<OrderHistoryPage/>}/>
        </Routes>
        :
        <AuthPage/>
      }
    </main>
  );
}

export default App;
