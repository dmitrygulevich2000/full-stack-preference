import React from "react";
import { useDispatch } from "react-redux";
import {logUser} from '../actions/userLogin'
import {closeModal} from '../actions/modal'

const SignIn = ({onSubmit}) => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch()
    
    const handleSubmit = (dispatch) => {
        if (!login || !password) {
            return;
        }

        /*
            ! Authorisation !
        */
        dispatch(logUser(login))
        dispatch(closeModal())
    }
        

    return (
        <div className="form-wrapper">
            <h2 className="form-header">Sign In</h2>
            <div className="form-item">
                <label>Login</label>
                <input 
                    placeholder="chipollino" 
                    type="text"
                    onChange={(event) => {
                        setLogin(event.target.value);
                      }}
                >

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

            <button 
                className="form-btn"
                onClick={() => handleSubmit(dispatch)}>
                    Check it out
            </button>
        </div>
    )
}

export default SignIn