import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './bootstrap.min.css';
// Import your components
import Users from './components/Users';

function App() {
  // <Route path="*" element={<NotFound prop1="param1" prop2="param2" />} />
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Users />} /> {/* Corrected path to lowercase */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
