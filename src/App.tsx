import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { usePageRoutes } from './pages';
import Layout from './layout';
import ErrorPage from './pages/ErrorPage';

export function App(): JSX.Element {
  const { pageRoutes } = usePageRoutes();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: pageRoutes,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
