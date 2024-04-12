import { API_URL } from "@/constants";
import { ProductType } from "@/types";

const fetchProductDetail = async (productId: string) => {
  const response = await fetch(`${API_URL}/products/${productId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product detail");
  }

  const data: ProductType = await response.json();

  return data;
};

export default fetchProductDetail;
