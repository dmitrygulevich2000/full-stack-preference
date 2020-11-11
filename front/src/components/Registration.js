import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logUser} from '../actions/userLogin'
import {closeModal} from '../actions/modal'

const Registration = () => {
    const [login, setLogin] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (dispatch) => {
        if (!login || !password || !mail) {
            return;
        }

        /*
            ! Authorisation !
        */

        dispatch(logUser(login))
        dispatch(closeModal())
        history.push("/tables")
    }



    return (
        <div className="form-wrapper">
            <h2 className="form-header">Join Us</h2>
            <div className="form-item">
                <label>Your new login</label>
                <input 
                    placeholder="chipollino"
                    type="text"
                    onChange={(event) => {
                        setLogin(event.target.value);
                    }}>

                </input>
            </div>
            <div className="form-item">
                <label>e-mail</label>
                <input 
                    placeholder="very_cool_boy@gmaol.com"
                    type="e-mail"
                    onChange={(event) => {
                        setMail(event.target.value);
                    }}>
                </input>
            </div>
            <div className="form-item">
                <label>Password</label>
                <input
                    placeholder="very_cool_boy" 
                    type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}>
                </input>
            </div>

            <button className="form-btn"
                onClick={() => handleSubmit(dispatch)}>
                Check it out
                </button>
        </div>
    )
}

export default Registration