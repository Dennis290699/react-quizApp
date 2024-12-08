import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ModeSelection } from '../pages/ModeSelection';
import { Quiz } from '../pages/Quiz';
import { Layout } from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'category/:categoryId',
        element: <ModeSelection />
      },
      {
        path: 'quiz/:categoryId/:mode',
        element: <Quiz />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};