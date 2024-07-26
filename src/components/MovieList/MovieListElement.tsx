import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  padding: 3.5rem;
  width: 100%;

  @media (min-width: 640px) {
    padding: 2rem; /* Adjust padding for smaller screens */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(
      5,
      1fr
    ); /* Add more columns for very large screens */
  }
`;

export const Card = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(128, 128, 128, 0.5); /* Gray shadow */
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 150px; /* Adjust height for smaller screens */
  }
`;

export const CardTitle = styled.div`
  padding: 0 10px 10px 10px;
  font-size: 13px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;
