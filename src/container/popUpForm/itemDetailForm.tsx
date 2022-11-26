import { useState, useEffect, useRef } from "react";
import {
  PopUpContainer,
  CloseFormBtn,
} from "./popUpStyles";
import FormComponent from "./FormComponent";
import InviteMessageComponent from "./inviteMessageComponent";

interface ISetModalOpen {
  setModalIsOpen: any;
  modalIsOpen: boolean;
  setIsActive: any;
}

export const ItemDetailForm = ({ modalIsOpen, setModalIsOpen}: ISetModalOpen) => {

  const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(""); add if need it
  const wrapperRef = useRef(null);
  const [inviteSent, setInviteSent] = useState(false);
  const [fetchMessage, setFetchMessage] = useState("Example") 
  // todo SetFetchMesssage vai mudar conforme o HTTP Response code 

  const handleFetch = () => {
    setIsLoading(!isLoading);
   


    async function fetchNews() {
      const response = await fetch(`https://hn.algolia.com/api/v1/items/1`); //url will be changed
      const json = await response.json();
      setFetchMessage(response.statusText)
      // TODO ver com os backs se vao feixar messagem de Status
      setIsLoading(false);
      setInviteSent(true);
      return json;
    }
    fetchNews();
  };


  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handler = (event: any) => {
        if (modalIsOpen && ref.current && !ref.current.contains(event.target)) {
          setModalIsOpen(false);
          setInviteSent(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, [ref]);
  };

  const handleClick = () => {
    setModalIsOpen(false);
    setInviteSent(false);
  }

  useOutsideAlerter(wrapperRef);
  console.log(inviteSent)

  return (
    <PopUpContainer ref={wrapperRef}>
      <CloseFormBtn onClick={handleClick}> x </CloseFormBtn>
      {/* ternario */}
      {inviteSent ? <InviteMessageComponent text={fetchMessage} setModalIsOpen={setModalIsOpen} setInviteSent={setInviteSent} /> : <FormComponent isLoading={isLoading} handleFetch={handleFetch} />}
    </PopUpContainer>
  );
};

export default ItemDetailForm;
