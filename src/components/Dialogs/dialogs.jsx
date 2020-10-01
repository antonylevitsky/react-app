import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ]

    let dialogElements = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Good." },
    ]

    let messagesElements = messages.map(message => <Message message={messages.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;