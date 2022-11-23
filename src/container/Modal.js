// import { useState } from 'react'
// // import { Modal, Button } from 'react-bootstrap'
// import {Form} from '/src/itemDetailForm.js'

// export const ModalComponent = () => {
//    const [isActive,setIsActive] = useState(false);

//    const changeModalState = () => {
//     return setIsActive(!isActive)
//   }

//   const sendInvite = () => {
//     changeModalState();
//   }

//   const openForm = () => {
//     changeModalState();
//   }

//   return (
//     <>
//      <Button variant="success" onClick={openForm}>
//         Send invite
//       </Button>
//       <Modal show={isActive}>
//       <Modal.Header closeButton onClick={changeModalState}>
//         <Modal.Title>Send Invite</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Send an invitation for an external user to use your internal shop</p>
//           <Form/>
//         </Modal.Body>
//         <Button className="send-invite-btn" onClick={sendInvite}> 
//             Invite
//           </Button>
//       </Modal>
//     </>
   
//   )
// }