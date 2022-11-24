import styled from "styled-components";

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 60%;
  background-color: #fff;
  padding: 20 px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  
  
`;

export const PopUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;

  h3{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  }

  p{
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #5C6670;
    
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    p{
      display: none;
    }
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  color: #304050;
  

  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 14px;
    font-size: 1.25rem;
    line-height: 150%;
    width: 80%;

    label {
      display: block;
      font-size: 1 rem;
      margin-bottom: 10px;
    }
    .form-control {
      width: 99%;
      height: 50px;
      border: 2px solid #ddd;
      border-radius: 5px;
      color: #333;
      &:focus {
        outline: none;
        border-color: #42bb98;
      }
    }
    select {
      width: 100%;
      height: 50px;
      border: none;
      background-color: #fff;
      padding: 0.4rem;
      border-radius: 5px;
      color: #AEB3B7;

      &:focus {
        outline: none;
        border-color: #42bb98;
        }
    }
    
    .form-group-email{
      width: 97%;
      height: 48px;
      border: none;
      border-radius: 5px;
      padding-left: 0.4rem;
      
    

      &:focus {
        outline: none;
        border-color: #42bb98;
      }

      input {
        color: #AEB3B7;
      }

      @media (max-width: 768px) {
       width: 10%;
    }
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: flex-start;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 1rem;
  width: 100%;
  height: auto;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 14px;
    color: #5c6670;
    margin-top: 0rem;
    margin-bottom: 0.4rem;
  }
`;

export const LoadingReservedSpace = styled.div`
width: 50px;
height: 50px;

`;

   


//-------------Buttons--------------------

export const CloseFormBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 26px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    &:focus {
        outline: none;
`;

export const SendInviteBtn = styled.button`
  width: 80%;
  background: #2ca07e;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px;

  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #42bb98;
  }
`;

export const OpenFormBtn = styled(SendInviteBtn)`
  width: 10%;
  font-size: 14px;
`;

/*export const BlurTest = styled("div")<{active:boolean}>`

filter: ${(props) => (props.active ? "blur(0px)" : "blur(8px)")};

<BlurTest active={true}>
`*/