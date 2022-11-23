import { React } from "react";
import {
  PopUpContainer,
  PopUpFormContainer,
  FormTitle,
  SendInviteBtn,
  CloseFormBtn,
  FormContainer,
} from "./popUpStyles";

export const Form = ({ setModalIsOpen }) => {
  return (
    <PopUpContainer>
      <CloseFormBtn onClick={() => setModalIsOpen(false)}>x</CloseFormBtn>

      <PopUpFormContainer>
        <FormTitle className="form-title">
          <h3>Send invite</h3>
          <p>
            Send an invitation for an external user to use your internal shop
          </p>
        </FormTitle>

        <FormContainer>
          <div className="form-group">
            <label htmlFor="profileLabel"> Profile </label>
            <div className="form-control">
              <select name="profile" id="profile">
                <option value="frontend">Developer front-end</option>
                <option value="backend">Developer back-end</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="joe.doe@minka.cloud"
            />
          </div>
        </FormContainer>

        <SendInviteBtn onClick={() => setModalIsOpen(false)}>
          Invite
        </SendInviteBtn>
      </PopUpFormContainer>
    </PopUpContainer>
  );
};
export default Form;
