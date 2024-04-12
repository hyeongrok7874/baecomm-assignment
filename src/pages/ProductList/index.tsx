import { useEffect, useRef, useState } from "react";

import { fetchProductList } from "@/apis";
import { MoreButton, ProductCard, SearchBar } from "@/components";
import { ProductListResponseType, ProductType } from "@/types";

import * as S from "./style";

const ProductListPage = () => {
  const [productList, setProductList] = useState<ProductType[]>();
  const [moreButtonVisible, setMoreButtonVisible] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keyword = sessionStorage.getItem("keyword") || "";
    const productAmount = Number(sessionStorage.getItem("productAmount") || 10);
    const scrollPosition = Number(
      sessionStorage.getItem("scrollPosition") || 0
    );

    if (inputRef.current) {
      inputRef.current.value = keyword;
    }

    fetchProductList(keyword, 0, productAmount).then((data) => {
      setProductList(data.products);

      decideMoreButtonVisibility(data);

      window.scrollTo(0, scrollPosition);

      sessionStorage.clear();
    });
  }, []);

  const searchProductList = async () => {
    const keyword = inputRef.current?.value || "";

    const data = await fetchProductList(keyword, 0);

    setProductList(data.products);

    decideMoreButtonVisibility(data);
  };

  const handleMoreButtonClick = async () => {
    // 중복 클릭 방지
    setMoreButtonVisible(false);

    const keyword = inputRef.current?.value || "";

    const data = await fetchProductList(keyword, productList?.length || 0);

    setProductList((prev) => {
      if (!prev) return data.products;
      return [...prev, ...data.products];
    });

    decideMoreButtonVisibility(data);
  };

  const decideMoreButtonVisibility = (data: ProductListResponseType) => {
    // 더 불러올 데이터가 없으면 더보기 버튼을 숨깁니다.
    // limit = 가져온 데이터 개수, skip = 건너뛴 데이터 개수, total = 전체 데이터 개수
    if (data.limit + data.skip === data.total) {
      setMoreButtonVisible(false);
    } else {
      setMoreButtonVisible(true);
    }
  };

  const handleProductCardClick = () => {
    const keyword = inputRef.current?.value || "";

    sessionStorage.setItem("keyword", keyword);
    sessionStorage.setItem(
      "productAmount",
      productList?.length.toString() || "0"
    );
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <>
      <SearchBar ref={inputRef} searchProductList={searchProductList} />
      <S.ProductList>
        {productList?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleProductCardClick}
          />
        ))}
      </S.ProductList>
      {moreButtonVisible && (
        <MoreButton onClick={handleMoreButtonClick} type="button" />
      )}
    </>
  );
};

export default ProductListPage;
