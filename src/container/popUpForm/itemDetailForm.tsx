import { useState, useEffect, useRef } from "react";
import {
  PopUpContainer,
  CloseFormBtn,
} from "./popUpStyles";
import { LoadingSpinner, LoadingComp, ErrorText } from "./loadingSpinnerStyle";
import FormComponent from "./FormComponent";
import InviteMessageComponent from "./inviteMessageComponent";

interface ISetModalOpen {
  setModalIsOpen: any;
  modalIsOpen: boolean;
  setIsLoaded: any;
  setIsActive: any;
  inviteSent: boolean;
  setInviteSent: any;
}

export const ItemDetailForm = ({ setIsLoaded, modalIsOpen, setModalIsOpen, inviteSent, setInviteSent }: ISetModalOpen) => {

  const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(""); add if need it
  const wrapperRef = useRef(null);
  const [fetchMessage, setFetchMessage] = useState("Example")

  /*
  const handleFetch = () => {
      setIsLoading(!isLoading);
  
       async function fetchData() {
         const response = await fetch(`https://hn.algolia.com/api/v1/items/1`); //url will be changed
  
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
     */

  const handleFetch = () => {
    setIsLoading(!isLoading);
    // isLoading pass to is Invite , postRequest, verify the response code , if 200 modal message of sucess apears 


    async function fetchNews() {
      const response = await fetch(`https://hn.algolia.com/api/v1/items/1`); //url will be changed
      const json = await response.json();
      setIsLoading(false);
      setIsLoaded(true);
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
