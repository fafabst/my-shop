import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Login from './components/login/login';
import Articles from './pages/article/articles';
import CatFact from './pages/catFacts/catFact';
import MakeExcuses from './pages/makeExcuses/makeExcuses';
import Exercises from './pages/exercises/exercises';
import CreateArticle from './pages/article/createArticle';
import ShowArticle from './components/article/showArticle';
function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catfact" element={<CatFact />} />
          <Route path="/makeExcuses" element={<MakeExcuses />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/createArticle" element={<CreateArticle />} />
          <Route path="/article/:id" element={<ShowArticle />} />
    </Routes>

  );
}

export default App;
