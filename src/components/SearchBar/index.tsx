import { forwardRef } from "react";
import * as S from "./style";

interface Props {
  searchProductList: () => void;
}

const SearchBar = forwardRef<HTMLInputElement, Props>(
  ({ searchProductList }, ref) => {
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        searchProductList();
      }
    };

    return (
      <S.SearchBarWrapper>
        <S.SearchInput ref={ref} onKeyDown={handleInputKeyDown} type="text" />
        <S.SearchButton onClick={searchProductList} type="button">
          검색
        </S.SearchButton>
      </S.SearchBarWrapper>
    );
  }
);

export default SearchBar;
