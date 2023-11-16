
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Articles from './pages/articles';
import Home from './pages/home';
export const AppContext = createContext();
function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AppContext.Provider value={{ isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
