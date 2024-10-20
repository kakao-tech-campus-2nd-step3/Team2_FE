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
            --color-gray: #aaa;
            --color-black: #2c2c2c;
            --font-size-large: 24px;
            --font-size-base: 15px;
            --font-size-small: 12px;
            @media (max-width: 768px) {
              --font-size-large: 21px;
              --font-size-base: 12px;
              --font-size-small: 9px;
            }
          }
          p,
          li {
            line-height: 120%;
          }
          button {
            border: none;
            background-color: transparent;
            padding: 0;
            cursor: pointer;
          }
        `}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
