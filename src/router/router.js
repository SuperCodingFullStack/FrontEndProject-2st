import { createBrowserRouter } from 'react-router-dom';
import RootElement from '../pages/RootElement';

// 라우터 생성
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [],
  },
]);
