import CategoryPage from "../../pages/CategoryPage";
import ProductPage from "../../pages/ProductPage";

import carriers from "../../assets/images/products/carriers.png";
import adapt from "../../assets/images/products/adapt.png";
import pockets from "../../assets/images/products/pockets.png";
import accessories from "../../assets/images/products/accessories.png";
import armor from "../../assets/images/products/armor.png";
import chesty from "../../assets/images/products/chesty.png";
import slickster from "../../assets/images/products/slickster.png";

export const ROOT = "/";
export const COLLECTIONS = `${ROOT}collections${ROOT}`;
export const CARRIERS = `${COLLECTIONS}carriers${ROOT}`;
export const ADAPT_SYSTEM = `${COLLECTIONS}adapt-system${ROOT}`;
export const POCKETS = `${COLLECTIONS}pockets${ROOT}`;
export const ACCESSORIES = `${COLLECTIONS}accessories${ROOT}`;
export const ARMOR = `${COLLECTIONS}armor${ROOT}`;
export const PRODUCT = `${COLLECTIONS}:collectionId${ROOT}:productId${ROOT}`;

const PRODUCTS = {
  [CARRIERS]: {
    image: carriers,
    title: "Carriers",
    path: CARRIERS,
    products: [
      {
        title: "FCPC V5 Base",
        image: carriers,
        price: "$25",
        path: "/collections/carriers/fcpc",
      },
      {
        title: "The Slickster",
        image: chesty,
        price: "$25",
        path: "/collections/carriers/slickster",
      },
      {
        title: "Chesty Rig",
        image: slickster,
        price: "$25",
        path: "/collections/carriers/chesty-rigs",
      },
    ],
  },
  [ADAPT_SYSTEM]: {
    image: adapt,
    title: "ADAPT system",
    path: ADAPT_SYSTEM,
    products: [
      {
        title: "FCPC V5 Base",
        image: carriers,
        price: "$25",
        path: "/collections/adapt-system/fcpc",
      },
      {
        title: "The Slickster",
        image: chesty,
        price: "$25",
        path: "/collections/adapt-system/slickster",
      },
      {
        title: "Chesty Rig",
        image: slickster,
        price: "$25",
        path: "/collections/adapt-system/chesty-rigs",
      },
    ],
  },
  [POCKETS]: {
    image: pockets,
    title: "Pockets",
    path: POCKETS,
    products: [
      {
        title: "FCPC V5 Base",
        image: carriers,
        price: "$25",
        path: "/collections/pockets/fcpc",
      },
      {
        title: "The Slickster",
        image: chesty,
        price: "$25",
        path: "/collections/pockets/slickster",
      },
      {
        title: "Chesty Rig",
        image: slickster,
        price: "$25",
        path: "/collections/pockets/chesty-rigs",
      },
    ],
  },
  [ACCESSORIES]: {
    image: accessories,
    title: "Accessories",
    path: ACCESSORIES,
    products: [
      {
        title: "FCPC V5 Base",
        image: carriers,
        price: "$25",
        path: "/collections/accessories/fcpc",
      },
      {
        title: "The Slickster",
        image: chesty,
        price: "$25",
        path: "/collections/accessories/slickster",
      },
      {
        title: "Chesty Rig",
        image: slickster,
        price: "$25",
        path: "/collections/accessories/chesty-rigs",
      },
    ],
  },
  [ARMOR]: {
    image: armor,
    title: "Armor",
    path: ARMOR,
    products: [
      {
        title: "FCPC V5 Base",
        image: carriers,
        price: "$25",
        path: "/collections/armor/fcpc",
      },
      {
        title: "The Slickster",
        image: chesty,
        price: "$25",
        path: "/collections/armor/slickster",
      },
      {
        title: "Chesty Rig",
        image: slickster,
        price: "$25",
        path: "/collections/armor/chesty-rigs",
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
  [CARRIERS]: {
    title: "Carriers",
    component: CategoryPage,
    path: CARRIERS,
    products: PRODUCTS[CARRIERS].products,
  },
  [ADAPT_SYSTEM]: {
    title: "ADAPT system",
    component: CategoryPage,
    path: ADAPT_SYSTEM,
    products: PRODUCTS[ADAPT_SYSTEM].products,
  },
  [POCKETS]: {
    title: "Pockets",
    component: CategoryPage,
    path: POCKETS,
    products: PRODUCTS[POCKETS].products,
  },
  [ACCESSORIES]: {
    title: "Accessories",
    component: CategoryPage,
    path: ACCESSORIES,
    products: PRODUCTS[ACCESSORIES].products,
  },
  [ARMOR]: {
    title: "Armor",
    component: CategoryPage,
    path: ARMOR,
    products: PRODUCTS[ARMOR].products,
  },
  [PRODUCT]: { component: ProductPage, path: PRODUCT },
};
