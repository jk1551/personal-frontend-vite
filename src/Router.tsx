import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Article from './pages/Article.page';
import Articles from './pages/Articles.page';
import ErrorPage from './pages/Error.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <Articles />,
  },
  {
    path: '/blog/:id',
    element: <Article />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
