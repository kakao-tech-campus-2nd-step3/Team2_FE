import { css, Global } from "@emotion/react";
import { JSX } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/Layout";
import ColumnDetail from "@/pages/ColumnDetail";
import ColumnList from "@/pages/ColumnList";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";
import { RouterPath } from "@/utils/path";

const router = createBrowserRouter([
  {
    path: RouterPath.root.path,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home.path,
        element: <Home />,
      },
      {
        path: RouterPath.productList.path,
        element: <ProductList />,
      },
      {
        path: RouterPath.columnList.path,
        element: <ColumnList />,
      },
      {
        path: RouterPath.columnDetail.path,
        element: <ColumnDetail />,
      },
      {
        path: RouterPath.productDetail.path,
        element: <ProductDetail />,
      },
      {
        path: RouterPath.myAccount.path,
        element: <MyAccount />,
      },
      {
        path: RouterPath.login.path,
        element: <Login />,
      },
      {
        path: RouterPath.notFound.path,
        element: <NotFound />,
      },
    ],
  },
]);

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application component.
 */
function App(): JSX.Element {
  return (
    <div>
      <Global
        styles={css`
          :root {
            --color-main: #89a06b;
            --color-side: rgba(0, 66, 47, 43);
            --color-background: #f7ffef;
            --color-gray: #aaa;
            --color-black: #2c2c2c;
          }
          p,
          li {
            line-height: 120%;
          }
          body {
            color: var(--color-black);
          }
        `}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
