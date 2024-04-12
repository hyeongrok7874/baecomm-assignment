import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

const MoreButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...attributes
}) => <S.MoreButton {...attributes}>더보기</S.MoreButton>;

export default MoreButton;
