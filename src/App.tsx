import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePageRoutes } from './pages';
import Layout from './layout';
import ErrorPage from './pages/ErrorPage';

const queryClient = new QueryClient();

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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
