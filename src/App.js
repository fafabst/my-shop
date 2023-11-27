
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Login from './components/login/login';
import Articles from './pages/article/articles';
import CatFact from './pages/catFacts/catFact';
import MakeExcuses from './pages/makeExcuses/makeExcuses';
import Exercises from './pages/exercises/exercises';
import CreateArticle from './pages/article/createArticle';
import ShowArticle from './components/article/showArticle'

export const AppContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: '',
      imageUrl: '',
      title: '',
      readingTime: '',
      author: '',
      content: ''
    }]);
  useEffect(() => {
    axios.get('http://localhost:8000/articles').then((res) => {
      setArticles(res.data);
      console.log(articles);
    })
  }, [])

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, articles, setArticles }}>
      <BrowserRouter>
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
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;
