import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 30px;
`;

export const Button = styled.button`
  z-index: 99;
  width: 50%;
  padding: 10px 20px;
  color: #fff;
  background-color: #d90429;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px 0;

  &:hover {
    background-color: #b30621;
  }
`;

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #000;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

