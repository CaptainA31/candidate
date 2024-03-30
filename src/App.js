import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateHome from './screens/candidateHome';
import CandidateLogin from './screens/candidateLogin';
import CandidateRegistration from './screens/candidateRegistration';
import CandidateNomination from './screens/candidateNomination';
import '../src/styles/candidateRegister.css'

function App() {
  return (
    <>
      <Router>
        <Routes>  
          <Route path='/' element={<CandidateHome />} />
          <Route path='/Candidate/home' element={<CandidateHome />} />
          <Route path='/Candidate/login' element={<CandidateLogin />} />
          <Route path='/Candidate/register' element={<CandidateRegistration />} />
          <Route path='/Candidate/nominationPaper' element={<CandidateNomination />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
