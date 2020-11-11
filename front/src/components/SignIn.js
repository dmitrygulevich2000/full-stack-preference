import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logUser } from '../actions/userLogin'
import { closeModal } from '../actions/modal'

const SignIn = () => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (dispatch) => {
        if (!login || !password) {
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
            <h2 className="form-header">Sign In</h2>
            <div className="form-item">
                <label className='form-item__label'>Login</label>
                <input className='form-item__input'
                    placeholder="chipollino" 
                    type="text"
                    onChange={(event) => {
                        setLogin(event.target.value);
                      }}
                >

                </input>
            </div>
            <div className="form-item">
                <label className='form-item__label'>Password</label>
                <input className='form-item__input'
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