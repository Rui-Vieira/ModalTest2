import React from "react";
import { LoadingComp, LoadingSpinner } from "./loadingSpinnerStyle";
import { PopUpFormContainer, FormTitle, FormContainer, LoadingReservedSpace, SendInviteBtn } from "./popUpStyles";


interface FormComponentProps {
    isLoading: boolean;
    handleFetch: any;
}

const FormComponent = ({isLoading, handleFetch} : FormComponentProps) => {

    return (
        <>
            <PopUpFormContainer>
                <div>
                    <FormTitle className="form-title">
                        <h3>Send Invite</h3>
                        <p>
                            Send an invitation for an external user to use your internal shop
                        </p>
                    </FormTitle>
                </div>

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

                    <div className="form-group ">
                        <label htmlFor="email">Email</label>
                        <div className="form-control">
                            <input
                                type="email"
                                className="form-group-email"
                                id="email"
                                placeholder="joe.doe@minka.cloud"
                            />
                        </div>
                    </div>
                </FormContainer>

                <LoadingComp>
                    {isLoading ? <LoadingSpinner /> : <LoadingReservedSpace />}
                    {/* {errorMessage && <ErrorText>{errorMessage}</ErrorText>} */}
                </LoadingComp>
                <SendInviteBtn onClick={handleFetch} disabled={isLoading} hidden={isLoading}>
                    Invite
                </SendInviteBtn>

            </PopUpFormContainer>
        </>
    )
}

export default FormComponent;

