import React, { useState } from "react";
import { ItemDetailForm } from "./itemDetailForm";
import { OpenFormBtn} from "./popUpStyles";


export const ItemDetailModal = () => {

  const [isActive, setIsActive] = useState(false);

  const changeModalState = () => {
    return setIsActive(!isActive)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendInvite = () => {
    changeModalState();
  }

  const openForm = () => {
    changeModalState();
  }
  
 

  return (
    <>
  
      {/* 
    {isActive && <InvitationSentForm />}
      <OpenFormBtn className="sendInvite-btn" onClick={openForm}>
        Send invite
      </OpenFormBtn>   
       */}

      {isActive && <ItemDetailForm modalIsOpen={isActive} setModalIsOpen={setIsActive} />}
      <OpenFormBtn className="sendInvite-btn" onClick={openForm}>
        Send invite
      </OpenFormBtn>

    
    </>
  )
}
 


export default ItemDetailModal;
