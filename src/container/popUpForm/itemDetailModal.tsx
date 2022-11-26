import React, { useState } from "react";
import { ItemDetailForm } from "./itemDetailForm";
import { OpenFormBtn} from "./popUpStyles";

export const ItemDetailModal = () => {

  const [isActive, setIsActive] = useState(false);

  const changeModalState = () => {
    return setIsActive(!isActive)
  }


  const openForm = () => {
    changeModalState();
  }
  
  return (
    <>
      {isActive && <ItemDetailForm setIsActive={setIsActive} modalIsOpen={isActive} setModalIsOpen={setIsActive}/>}
      <OpenFormBtn className="sendInvite-btn" onClick={openForm}>
        Send invite
      </OpenFormBtn>
    </>
  )
}
 
export default ItemDetailModal;
