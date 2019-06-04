import { IProduct } from "../models/product";
import products from "./products.json";

interface Store {
  products: IProduct[];
}

const store: Store = {
  // tslint:disable-next-line: trailing-comma
  products
};

export { store };
