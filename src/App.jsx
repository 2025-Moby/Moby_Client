import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import LoginPage from '../src/pages/LoginPage';
import AgePage from './pages/AgePage';
import Name from './pages/Name';
import CodePage from './pages/CodePage';


const App = () => {
  return (
    <AppContainer>  
      {/* <LoginPage /> */}
      {/* <AgePage /> */}
      {/* <Name   /> */}
      <CodePage />
    </AppContainer>


=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ChoicePage from './pages/ChoicePage'; 
import CreateFamily from './pages/CreateFamily';
import FamilyCreatedPage from './pages/FamilyCreated'; 
import Mainpage from "../src/pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/create-family" element={<CreateFamily />} />
        <Route path="/family-created" element={<FamilyCreatedPage />} /> 
        <Route path="/join-family" element={<div>가족 참여하기 페이지</div>} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 8273153b9e9b84902f7650df7885da4967d82557
  );
};

export default App;