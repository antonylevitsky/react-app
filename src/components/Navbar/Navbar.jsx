import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.nav__item}>
                <NavLink className={s.nav__link} activeClassName={s.nav__link_active} to="/profile">Profile</NavLink>
            </div>

            <div className={s.nav__item}>
                <NavLink className={s.nav__link} activeClassName={s.nav__link_active} to="/dialogs">Messages</NavLink>
            </div>

            <div className={s.nav__item}>
                <NavLink className={s.nav__link} activeClassName={s.nav__link_active} to="/news">News</NavLink>
            </div>

            <div className={s.nav__item}>
                <NavLink className={s.nav__link} activeClassName={s.nav__link_active} to="/music">Music</NavLink>
            </div>

            <div className={s.nav__item}>
                <NavLink className={s.nav__link} activeClassName={s.nav__link_active} to="/settings">Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar;