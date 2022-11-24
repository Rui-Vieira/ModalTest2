import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;



export const LoadingSpinner = styled.div`
    width: 30px;
    height: 30px;
    border: 10px solid #f3f3f3; 
    border-top: 10px solid #383636; 
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
`;

export const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: transparent;
`;

export const LoadingComp= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60%;
    
`;

export const ErrorText = styled.p`
    color: red;
    text-decoration: underline;
  `;

/**
* {
    margin: 0;
    padding: 0;
  }
  
  .Loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .error {
    color: red;
  }


@keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; 
    border-top: 10px solid #383636; 
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
  
  .spinner-container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100px;
  background: transparent;
  }

  */