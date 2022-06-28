import React from "react";
import s from './UserMenu.module.css';
import { useSelector, useDispatch } from "react-redux";
import { AuthOperations, AuthSelector } from 'redux/auth';

export default function UserMenu() {
    const email = useSelector(AuthSelector.getEmail);
    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <span className={s.text}>Welcome {email}</span>
            <div className={s.btn}>
                <button
                    type="button"
                    onClick={() => dispatch(AuthOperations.logOut())}
                >
                    logout
                </button>
            </div>
        </div>
    );
}