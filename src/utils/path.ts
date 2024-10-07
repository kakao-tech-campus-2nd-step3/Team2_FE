export const RouterPath = {
  root: "/",
  home: "/",
  productList: "/products",
  columnList: "/columns",
  columnDetail: "/columns/:columnId",
  productDetail: "/products/:productId",
  myAccount: "/my-account",
  login: "/login",
  notFound: "*",
};

export const getDynamicPath = {
  columnDetail: (columnId: string) => RouterPath.columnDetail.replace(":columnId", columnId),
  productDetail: (productId: string) => RouterPath.productDetail.replace(":productId", productId),
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.href;
    return `${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`;
  },
};
