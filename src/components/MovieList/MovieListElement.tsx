import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 30px;

  h1 {
    position: relative;
    ::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: red;
    }
  }
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
    grid-template-columns: repeat(5, 1fr); /* Add more columns for very large screens */
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  aspect-ratio: 2 / 3; /* Aspect ratio for portrait layout */

  /* Pseudo-element for darkening effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1; /* Ensure the overlay is above the background */
  }

  &:hover {

    /* Apply darkening effect */
    &::before {
      opacity: 1;
    }
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden; /* Ensure the image does not overflow the container */
`;

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover; /* Ensures the image covers the container */
  transition: transform 0.5s ease;
  z-index: 0; /* Ensure the image is below the overlay and title */

  ${Card}:hover & {
    transform: scale(1.1); /* Adjust scale value as needed */
  }
`;

export const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 2; /* Ensure the title is above the overlay and image */

  ${Card}:hover & {
    transform: translateY(0);
  }
`;
