import styled from "@emotion/styled";

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Brand = styled.p`
  font-size: 1.5rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #333;
  margin: 1rem 0;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
