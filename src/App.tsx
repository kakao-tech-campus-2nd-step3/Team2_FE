import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@/components/Layout";
import { Loading } from "@/components/Loading.tsx";
import { RouterPath } from "@/utils/path";

import GlobalStyles from "./globalStyle";

const lazyLoad = (componets: () => Promise<{ default: React.ComponentType<unknown> }>) => (
  <Suspense fallback={<Loading />}>{React.createElement(React.lazy(componets))}</Suspense>
);

const router = createBrowserRouter([
  {
    path: RouterPath.root.path,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home.path,
        element: lazyLoad(() => import("@/pages/Home")),
      },
      {
        path: RouterPath.productList.path,
        element: lazyLoad(() => import("@/pages/ProductList")),
      },
      {
        path: RouterPath.columnList.path,
        element: lazyLoad(() => import("@/pages/ColumnList")),
      },
      {
        path: RouterPath.columnDetail.path,
        element: lazyLoad(() => import("@/pages/ColumnDetail")),
      },
      {
        path: RouterPath.productDetail.path,
        element: lazyLoad(() => import("@/pages/ProductDetail")),
      },
      {
        path: RouterPath.myAccount.path,
        element: lazyLoad(() => import("@/pages/MyAccount")),
      },
      {
        path: RouterPath.myReviews.path,
        element: lazyLoad(() => import("@/pages/MyReviews")),
      },
      {
        path: RouterPath.myFavorites.path,
        element: lazyLoad(() => import("@/pages/MyFavorites")),
      },
      {
        path: RouterPath.login.path,
        element: lazyLoad(() => import("@/pages/Login")),
      },
      {
        path: RouterPath.loginRedirect.path,
        element: lazyLoad(() => import("@/pages/LoginRedirect")),
      },
      {
        path: RouterPath.notFound.path,
        element: lazyLoad(() => import("@/pages/NotFound")),
      },
    ],
  },
]);

const queryClient = new QueryClient();

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application component.
 */
function App(): JSX.Element {
  return (
    <div>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
