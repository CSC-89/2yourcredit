import React from 'react'
import Main from './components/main/Main';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"

import './App.css';

function App() {

  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/NO" replace />} />
        <Route exact path="/NO" element={<Main />} />
        <Route path="*" element={<h3>Error 404: Site not Found</h3>} />
      </Routes>
  </Router>
  </>
  )
}

export default App;
