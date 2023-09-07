import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      hello
      <Routes>
        <Route path='/' element={<></>} />
      </Routes>
    </Router>
  );
};

export default App;