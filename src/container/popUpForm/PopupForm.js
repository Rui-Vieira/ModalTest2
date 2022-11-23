import React, { useState } from "react";
import { Form } from "./itemDetailForm";
import {OpenFormBtn} from "./popUpStyles";

export const PopUpForm = () => {
   const [isActive,setIsActive] = useState(false);

   const changeModalState = () => {
          return setIsActive(!isActive)
        }
      
       /* const sendInvite = () => {
          changeModalState();
        }*/
      
        const openForm = () => {
          changeModalState();
        }
   
   if (isActive){
      return(
         <>
       <Form  setModalIsOpen={setIsActive}/>   
         </>
        )
   }
   return(
    <>
     <OpenFormBtn className="sendInvite-btn" onClick={openForm}>
        Send invite
      </OpenFormBtn>
      </>
   )
}