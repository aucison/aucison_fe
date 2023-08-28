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
import { toCSSVariables } from './theme/toCSSVariables';

function App() {
  const cssVariables = toCSSVariables(theme);
  return (
    <div className="App">
      <ThemeProvider theme={cssVariables}>
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<div>My Page</div>} />
            <Route path="/sell" element={<Sell />} />
            {/* 추후 경매, 일반에 따른 페이지 라우팅 추가 */}
            <Route path="/buy" element={<Purchase />} />
            {/* 추후 경매, 일반 /제품번호에 따른 라우팅 추가 */}
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
