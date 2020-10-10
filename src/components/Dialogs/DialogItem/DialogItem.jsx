import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink className={s.dialog__link} to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;