import { API_URL } from "@/constants";
import { ProductListResponseType } from "@/types";

const fetchProductList = async (
  keyword: string,
  currentAmount: number,
  limit: number = 10
) => {
  const response = await fetch(
    `${API_URL}/products/search?q=${keyword}&skip=${currentAmount}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product list");
  }

  const data: ProductListResponseType = await response.json();

  return data;
};

export default fetchProductList;
