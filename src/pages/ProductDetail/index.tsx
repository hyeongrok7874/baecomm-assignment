import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchProductDetail } from "@/apis";
import { ProductType } from "@/types";
import { BackToListLink } from "@/components";

import * as S from "./style";

const ProductDetailPage = () => {
  const [productDetail, setProductDetail] = useState<ProductType>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    fetchProductDetail(id)
      .then((product) => {
        setProductDetail(product);
      })
      .catch(() => {
        navigate("/");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <BackToListLink />
      <S.Detail>
        <S.Thumbnail
          src={productDetail?.thumbnail}
          alt={`${productDetail?.title} thumbnail`}
        />
        <S.Brand>{productDetail?.brand}</S.Brand>
        <S.Title>{productDetail?.title}</S.Title>
        <S.Price>${productDetail?.price}</S.Price>
        <S.Description>{productDetail?.description}</S.Description>
      </S.Detail>
      <S.Divider />
      <S.ImageWrapper>
        {productDetail?.images.map((imageUrl, index) => (
          <S.Image
            key={imageUrl}
            src={imageUrl}
            alt={`${productDetail.title} image ${index + 1}`}
          />
        ))}
      </S.ImageWrapper>
    </>
  );
};

export default ProductDetailPage;
