import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ChoicePage from './pages/ChoicePage'; 
import CreateFamily from './pages/CreateFamily';
import FamilyCreatedPage from './pages/FamilyCreated'; 
import Mainpage from "../src/pages/MainPage";
import QuestionPage from "../src/pages/QuestionPage";
import AgePage from "../src/pages/AgePage";
import Name from "../src/pages/Name";
import CodePage from './pages/CodePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgePage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/create-family" element={<CreateFamily />} />
        <Route path="/family-created" element={<FamilyCreatedPage />} /> 
        <Route path="/join-family" element={<div>가족 참여하기 페이지</div>} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/question" element={<QuestionPage />} />
        {/* <Route path="/age" element={<AgePage />} /> */}
        <Route path="/Name" element={<Name />} />
        <Route path="/age" element={<AgePage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;