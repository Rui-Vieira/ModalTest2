import React, { useState } from "react";
import Form from "./itemDetailForm";
import { OpenFormBtn } from "./popUpStyles"; 


const PopUpForm = () => {
  console.log("PopUpForm");
  
   const [isActive,setIsActive] = useState(false);

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
   

   if (isActive){
      return(
       <Form  setModalIsOpen={setIsActive} />   
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


export default PopUpForm;
