import styled from "styled-components";

interface BackgroundProps {
  backgroundImage: string;
}

export const ImageBanner = styled.div<BackgroundProps>`
  position: relative;
  overflow: hidden;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; /* Ensures the background image covers the element */
  height: 75vh;
  box-shadow: 15px 0px 20px rgba(0, 0, 0, 0.5), 
              -15px 0px 20px rgba(0, 0, 0, 0.3);

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(1, 1, 3, 1) 3%,
      rgba(255, 255, 255, 0) 25%
    );
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(8, 7, 30, 1) 0%,
      rgba(0, 0, 0, 0.754) 70%,
      rgba(8, 7, 30, 0) 100%
    );
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: left;
    
    h1 {
      font-size: 2.5rem; /* Responsive font size */
    }
  }

  @media (max-width: 768px) {
    .title-wrapper {
      width: 80%; 
      padding: 0 15px;

      h1 {
        font-size: 2rem; 
      }
    }
  }

  @media (max-width: 480px) {
    .title-wrapper {
      padding: 0 10px;

      h1 {
        font-size: 1.5rem; /* Smaller font size for mobile */
      }
    }
  }
`;
