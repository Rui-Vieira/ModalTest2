
import {
    PopUpFormContainer,
    FormTitle,
    SendInviteBtn,
} from "./popUpStyles";

interface InviteMessageComponentProps {
    setModalIsOpen: any;
    text: string;
    setInviteSent: any;
}

export const InviteMessageComponent= ({ setModalIsOpen, text, setInviteSent }: InviteMessageComponentProps) => {

    const handleClick = () => {

        setModalIsOpen(false);
        setInviteSent(false);
    }

            // TODO mudar o nome do form  e estelizar 
            
    return (
    
            <PopUpFormContainer> 
                <FormTitle className="form-title">

                    <p>
                        {text}
                    </p>
                </FormTitle>

                <SendInviteBtn onClick={handleClick} >
                    Close
                </SendInviteBtn>
                </PopUpFormContainer>
    );
};

export default InviteMessageComponent;

