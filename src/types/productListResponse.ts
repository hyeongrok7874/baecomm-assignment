import { ProductType } from "@/types";

export interface ProductListResponseType {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
