import styled from "@emotion/styled";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 20rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 0.5rem;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 0.5rem;
  background-color: white;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: #fffab7;
  }
`;
