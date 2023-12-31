import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Sell from './pages/Sell';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/theme';
import Header from './pages/Main/Header';
import Purchase from './pages/Purchase';
import Market from './pages/Market';
import MyPage from './pages/Mypage';
//import ItemList from './pages/ItemList';
import LikeList from './pages/Like/LikeList';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage/:name/*" element={<MyPage />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/buy/:id" element={<Purchase />} />
            <Route path="/like" element={<LikeList />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/market" element={<Market />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
