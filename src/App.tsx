import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import ColumnDetail from './pages/ColumnDetail';
import ColumnList from './pages/ColumnList';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import { RouterPath } from './shared/path';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <Home />,
      },
      {
        path: RouterPath.productList,
        element: <ProductList />,
      },
      {
        path: RouterPath.columnList,
        element: <ColumnList />,
      },
      {
        path: RouterPath.columnDetail,
        element: <ColumnDetail />,
      },
      {
        path: RouterPath.productDetail,
        element: <ProductDetail />,
      },
      {
        path: RouterPath.myAccount,
        element: <MyAccount />,
      },
      {
        path: RouterPath.login,
        element: <Login />,
      },
      {
        path: RouterPath.notFound,
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
