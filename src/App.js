import React from 'react';
import { Reset } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootElement from './pages/RootElement';

function App() {
  // 라우터 생성
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootElement />,
      children: [],
    },
  ]);

  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
