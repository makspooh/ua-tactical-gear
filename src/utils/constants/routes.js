import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";

// t-shirts
import black1 from "../../assets/images/products/BLACK.jpg";
import black2 from "../../assets/images/products/BLACK1.jpg";
import green1 from "../../assets/images/products/GREEN.jpg";
import green2 from "../../assets/images/products/GREEN1.jpg";
import grey1 from "../../assets/images/products/GREY1.jpg";

export const ROOT = "/";
export const COLLECTIONS = `${ROOT}collections${ROOT}`;
export const TSHIRTS = `${COLLECTIONS}tshirts${ROOT}`;
export const PRODUCT = `${COLLECTIONS}:collectionId${ROOT}:productId${ROOT}`;

export const PRODUCTS = {
  [TSHIRTS]: {
    image: black1,
    title: "T-shirts",
    path: TSHIRTS,
    products: [
      {
        title: "«Dead» Black",
        description: `Small print on the left chest: Ukrainian Tactical Gear logo. Back print with "With you or for you it depends on how you trained" slogan and large graphic.`,
        image: black1,
        sizes: ["M", "L", "XL", "2XL"],
        path: `${TSHIRTS}black1${ROOT}`,
      },
      {
        title: "«Welcome» Black",
        description: `Small print on the left chest: Ukrainian Tactical Gear logo. Back print with "Welcome to Ukraine, suka!" slogan and large graphic.`,
        image: black2,
        sizes: ["M", "L", "XL", "2XL"],
        path: `${TSHIRTS}black2${ROOT}`,
      },
      {
        title: "«Dead» Green",
        description: `Small print on the left chest: Ukrainian Tactical Gear logo. Back print with "With you or for you it depends on how you trained" slogan and large graphic.`,
        image: green1,
        sizes: ["M", "L", "XL", "2XL"],
        path: `${TSHIRTS}green1${ROOT}`,
      },
      {
        title: "«Welcome» Green",
        description: `Small print on the left chest: Ukrainian Tactical Gear logo. Back print with "Welcome to Ukraine, suka!" slogan and large graphic.`,
        image: green2,
        sizes: ["M", "L", "XL", "2XL"],
        path: `${TSHIRTS}green2${ROOT}`,
      },
      {
        title: "«Welcome» Grey",
        description: `Small print on the left chest: Ukrainian Tactical Gear logo. Back print with "Welcome to Ukraine, suka!" slogan and large graphic.`,
        image: grey1,
        sizes: ["M", "L", "XL", "2XL"],
        path: `${TSHIRTS}grey1${ROOT}`,
      },
    ],
  },
};

export const PUBLIC_ROUTES = {
  [ROOT]: {
    title: "All categories",
    component: CategoryPage,
    path: ROOT,
    products: Object.values(PRODUCTS).map((product) => ({
      image: product.image,
      title: product.title,
      path: product.path,
    })),
  },
  [TSHIRTS]: {
    title: "T-shirts",
    component: CategoryPage,
    path: TSHIRTS,
    products: PRODUCTS[TSHIRTS].products,
  },
  [PRODUCT]: { component: ProductPage, path: PRODUCT },
};
