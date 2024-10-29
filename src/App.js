import React from 'react';
import { Reset } from 'styled-reset';
import { createBrowserRouter } from 'react-router-dom';
import RootElement from './pages/RootElement';
import AllWrap from './components/Wrapper/AllWrap';

function App() {
  return (
    <>
      {/* CSS 리셋 기능 */}
      <Reset />
      <AllWrap />
    </>
  );
}

export default App;
