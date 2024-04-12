import styled from "@emotion/styled";

export const MoreButton = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.blue};
  background-color: white;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 1rem;
  transition: background-color 0.3s;

  :hover {
    background-color: #fffab7;
  }
`;
