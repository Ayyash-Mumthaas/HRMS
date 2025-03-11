import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payroll from "./Pages/Payroll";
import Header from './navBar/Header';

function App() {
  return (


      <Router>
            <Header />
             <Routes>
                <Route path="/Payroll" element={<Payroll />} />
              </Routes>
      </Router>
    
  );
}

export default App;

