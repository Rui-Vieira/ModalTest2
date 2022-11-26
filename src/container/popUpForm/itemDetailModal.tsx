import React, { useState } from "react";
import InviteMessageComponent from "./inviteMessageComponent";
import { ItemDetailForm } from "./itemDetailForm";
import { OpenFormBtn} from "./popUpStyles";

export const ItemDetailModal = () => {

  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  const changeModalState = () => {
    return setIsActive(!isActive)
  }


  const openForm = () => {
    changeModalState();
  }
  
 //Form(email e cenas) deve ser substituido pela mensagem de confimaçao do invite.
//O que esta a acontecer neste componente é que se tiver ativo chama a modal do form e se tiver loaded chama a modal da mensagem de confimaçao. So deve existir uma modal e substituir o conteudo la dentro.
// 2 componentes, o componete para carregar o form e um componente reutilizavel para carregar as mensagens apos o send invite(mensagem de erro ou de sucesso)


  return (
    <>
  

      {isActive && <ItemDetailForm setIsActive={setIsActive} setIsLoaded={setIsLoaded} modalIsOpen={isActive} setModalIsOpen={setIsActive} inviteSent={inviteSent} setInviteSent={setInviteSent}/>}
      <OpenFormBtn className="sendInvite-btn" onClick={openForm}>
        Send invite
      </OpenFormBtn>
    
    </>
  )
}
 


export default ItemDetailModal;
