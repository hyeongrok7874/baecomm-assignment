import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BackToListLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.blue};
  border: 1px solid ${({ theme }) => theme.color.blue};
  border-radius: 1rem;
  transition: background-color 0.3s;

  :hover {
    background-color: #fffab7;
  }
`;
