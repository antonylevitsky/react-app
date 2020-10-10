import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messages = props.state.messages.map(message => <Message message={message.message} />)

    let newMessage = React.createRef();

    let sendMessage = () =>{
        let text = newMessage.current.value;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
                
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;