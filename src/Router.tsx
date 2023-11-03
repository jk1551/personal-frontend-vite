import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/Blog.page';
import ErrorPage from './pages/Error.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
