import React from "react";
import { LoadingComp, LoadingSpinner } from "./loadingSpinnerStyle";
import { PopUpFormContainer, FormTitle, FormContainer, LoadingReservedSpace, SendInviteBtn } from "./popUpStyles";


interface FormComponentProps {
    isLoading: boolean;
    handleFetch: any;
}

const FormComponent = ({ isLoading, handleFetch }: FormComponentProps) => {

    return (
        <>
            <PopUpFormContainer >

                <FormTitle className="title-area">
                    <h3 className="title-area-text">Send Invite</h3>
                    <p className="title-area-phrase">
                        Send an invitation for an external user to use your internal shop
                    </p>
                </FormTitle>


                <FormContainer className="form-area" >

                    <div className="form-profile-area" id="form-group">
                        <label className="form-profile-title-area" htmlFor="profileLabel"> Profile </label>

                        <select className="form-profile-selector" name="profile" id="profile">
                            <option value="frontend">Developer front-end</option>
                            <option value="backend">Developer back-end</option>
                        </select>
                    </div>


                    <div className="form-email-area"  id ="form-group">
                        <label className="form-email-title-area" htmlFor="email">Email</label>
                        <div className="form-email-input-area">
                            <input
                                type="email"
                                className="form-group-email"
                                id="email"
                                placeholder="joe.doe@minka.cloud"
                            />
                        </div>
                    </div>
                </FormContainer>

                <div className="button-invite-area">
                    <LoadingComp>
                        {isLoading ? <LoadingSpinner /> : <SendInviteBtn onClick={handleFetch} disabled={isLoading} hidden={isLoading}>
                            Invite
                        </SendInviteBtn>}

                    </LoadingComp>
                </div>
            </PopUpFormContainer>
        </>
    )
}

export default FormComponent;



/* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;

  background: yellow;

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

    */


    /*
  .form-area {
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
        width: 100%;
        color: #AEB3B7;
      }

      @media (max-width: 768px) {
       width: 10%;
    }*/