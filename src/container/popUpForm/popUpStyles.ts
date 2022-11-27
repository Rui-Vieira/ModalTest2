import styled from "styled-components";

export const PopUpContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 35%;
height: 60%;
background-color: #fff;
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


  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 0.2fr 1.8fr 0.2fr; 
  grid-template-rows: 0.3fr 1fr 2fr 1fr 0.2fr;
  grid-template-areas: 

    ".           .           ."
    ".     title-area        ."
    ".      form-area        ."
    ".   button-invite-area ."
    ".           .           ."; 




.title-area {

  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  
  grid-area: title-area; 
  grid-template-areas: 
    "title-area-text"
    "title-area-phrase"; 
  
}


.form-area {

    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 
    grid-area: form-area;
    grid-template-areas: 
      "form-profile-area"
      "form-email-area"; 

}


.form-profile-area {
    width: 100%;
    display: grid; 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "form-profile-title-area"
      "form-profile-selector-area";

    grid-row-gap: 1rem;    
    }


     
form-email-area {
    width: 100%;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 
    grid-template-areas:
      "form-email-title-area"
      "form-email-input-area";
    
    grid-row-gap: 0.5 rem;
  }
  
  .form-email-input-area {
    width: calc(100%);
  }

.button-invite-area {

  justify-content: center;
  align-items: center;
  background: white;
  grid-area: button-invite-area;
  width: 100%;
}

`;


export const InviteMessageContainer = styled.div`
  
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-auto-rows: 1fr; 
    grid-template-columns: .2fr 1.8fr 0.2fr; 
    grid-template-rows: 0.2fr 0.4fr 1fr 1fr 0.2fr; 
    
    width: 100%;
    height: 100%;

    gap: 0% 0px; 
    grid-template-areas: 
      ". . ."
      ". title-area ."
      ". message-area ."
      ". button-area ."
      ". . ."; 
    

    .title-area {
      
    justify-self: center; 
    align-self: start; 
    grid-area: title-area; 
    }

    .message-area {
    justify-self: center; 
    align-self: center; 
    grid-area:message-area; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    }

    .button-area {
    justify-self: center; 
    align-self: end; 
    grid-area: button-area; 
    }
            
`;
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  color: #304050;


  #form-group {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #42bb98;
      }
      
    select {
      width: 100%;
      height: 3.125rem;
      border: none;
      background-color: #fff;
      border: 2px solid #ddd;
      padding: 0.4rem;
      border-radius: 5px;
      color: #AEB3B7;

      &:focus {
        outline: none;
        border-color: #42bb98;
        }
    }
    
    .form-group-email{
      width: 96% ;
      height: 2.125rem;
      border-radius: 5px;
      border: 2px solid #ddd;
      padding: 0.4rem;
  
      &:focus {
        outline: none;
        border-color: #42bb98;
      }
      
      input {
        color: #AEB3B7;
      }
  } 
}
`;

export const FormTitle = styled.div`

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 1rem;
  width: 100%;
  height: auto;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
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
    }
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