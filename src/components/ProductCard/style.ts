import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProductCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.blue};
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-0.5rem);

    div {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const BrandAndTitle = styled.div`
  display: flex;
  justify-content: space-between;
  transition: color 0.3s;
`;

const Text = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Brand = styled(Text)`
  max-width: 40%;
`;

export const Title = styled(Text)`
  max-width: 50%;
`;

export const Price = styled.p`
  text-align: end;
`;
