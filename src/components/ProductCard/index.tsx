import { AnchorHTMLAttributes } from "react";
import { ProductType } from "@/types";
import * as S from "./style";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  product: ProductType;
}

const ProductCard: React.FC<Props> = ({
  product: { id, thumbnail, brand, title, price },
  ...attributes
}) => (
  <S.ProductCardWrapper to={`/product/${id}`} {...attributes}>
    <S.Thumbnail src={thumbnail} alt={`${title} thumbnail`} />
    <S.BrandAndTitle>
      <S.Brand>{brand}</S.Brand>
      <S.Title>{title}</S.Title>
    </S.BrandAndTitle>
    <S.Price>${price}</S.Price>
  </S.ProductCardWrapper>
);

export default ProductCard;
