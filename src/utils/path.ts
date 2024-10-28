export const RouterPath = {
  root: {
    path: "/",
  },
  home: {
    path: "/",
    getPath: () => RouterPath.home.path,
  },
  productList: {
    path: "/products",
    getPath: () => RouterPath.productList.path,
  },
  columnList: {
    path: "/columns",
    getPath: () => RouterPath.columnList.path,
  },
  columnDetail: {
    path: "/columns/:columnId",
    getPath: (columnId: string) => RouterPath.columnDetail.path.replace(":columnId", columnId),
  },
  productDetail: {
    path: "/products/:productId",
    getPath: (productId: string) => RouterPath.productDetail.path.replace(":productId", productId),
  },
  myAccount: {
    path: "/my-account",
    getPath: () => RouterPath.myAccount.path,
  },
  myReviews: {
    path: "/my-account/reviews",
    getPath: () => RouterPath.myReviews.path,
  },
  myFavorites: {
    path: "/my-account/favorites",
    getPath: () => RouterPath.myFavorites.path,
  },
  login: {
    path: "/login",
    getPath: (redirect?: string) => {
      const currentRedirect = redirect ?? window.location.href;
      return `${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`;
    },
  },
  notFound: {
    path: "*",
  },
};
