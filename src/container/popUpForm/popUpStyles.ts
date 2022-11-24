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
  
  
`;

export const PopUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  
  
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 14px;
    font-size: 14px;
    font-weight: 500;
    width: 80%;

    label {
      display: block;
      font-size: 18px;
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
      color: #333;

      &:focus {
        outline: none;
        border-color: #42bb98;
        }
    }
    
    .form-group-email{
      width: 98%;
      height: 48px;
      border: none;
      border-radius: 5px;
      padding-left: 0.4rem;
      color: #333;

      &:focus {
        outline: none;
        border-color: #42bb98;
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
  width: 100%;
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