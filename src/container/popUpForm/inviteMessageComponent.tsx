
import {
    InviteMessageContainer,
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
        
    return (
    
            <InviteMessageContainer> 

                <FormTitle className="message-area">
                    <p> {text} </p>
                </FormTitle>

                <SendInviteBtn className="button-area" onClick={handleClick} >
                    Close
                </SendInviteBtn>
            </InviteMessageContainer>
    );
};

export default InviteMessageComponent;
