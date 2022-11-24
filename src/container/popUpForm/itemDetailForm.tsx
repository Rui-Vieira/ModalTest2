import { useState, useEffect, useRef } from "react";
import {
  PopUpContainer,
  PopUpFormContainer,
  FormTitle,
  SendInviteBtn,
  CloseFormBtn,
  FormContainer,
  LoadingReservedSpace
}
  from "./popUpStyles";
import { LoadingSpinner, LoadingComp, ErrorText } from "./loadingSpinnerStyle"

interface ISetModalOpen {
  setModalIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
}

export const ItemDetailForm = ({ modalIsOpen, setModalIsOpen }: ISetModalOpen) => {


  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const wrapperRef = useRef(null);

  const handleFetch = () => {
    setIsLoading(!isLoading);

    async function fetchData() {
      const response = await fetch(`http://www.girassol.com/`); //url will be changed

      return response;

    }

    fetchData()
      .then((response) => response.json())
      .then((_response) => {
        setIsLoading(!isLoading);
      })
      .catch(() => {
        setErrorMessage("Unable to send invite request");
        setIsLoading(false);
      });
  };

  //DETECT MOUSE CLICKS OUTSIDE
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event: any) => {
        if (modalIsOpen && ref.current && !ref.current.contains(event.target)) {
          setModalIsOpen(false);
        }
      };
      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <PopUpContainer ref={wrapperRef}>
      <CloseFormBtn onClick={() => setModalIsOpen(false)}>x</CloseFormBtn>

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

          <div className="form-group " >
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
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </LoadingComp>
        <SendInviteBtn onClick={handleFetch} disabled={isLoading}>
            Invite
          </SendInviteBtn>

        {/*}
        <SendInviteBtn onClick={() => setModalIsOpen(false)}>
          Invite
        </SendInviteBtn>
      */}

      </PopUpFormContainer>
    </PopUpContainer>
  );
};

export default ItemDetailForm;

