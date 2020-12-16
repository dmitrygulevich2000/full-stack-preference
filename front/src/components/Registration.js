import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logUser} from '../actions/userLogin'
import {closeModal} from '../actions/modal'
import {register} from '../actions/register'
import { ENGINE_METHOD_ALL } from "constants";

const Registration = () => {
    const [login, setLogin] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleSubmit = (event, dispatch) => {
        if (!login || !password || !mail) {
            return;
        }
        console.log(login, password, mail)
        dispatch(register(login, mail, password))
        // dispatch(logUser(login))
        dispatch(closeModal())
        // history.push("/tables")
    }

    return (
        <form className="form" name='register'>
            <h2 className="form-header">Join Us</h2>
            <div className="form-item">
                <label className='form-item__label'>Your new login</label>
                <input className='form-item__input' name='username'
                    placeholder="chipollino"
                    type="text"
                    onChange={(event) => {
                        setLogin(event.target.value);
                    }}>

                </input>
            </div>
            <div className="form-item">
                <label className='form-item__label'>e-mail</label>
                <input className='form-item__input' name='email'
                    placeholder="very_cool_boy@gmaol.com"
                    type="e-mail"
                    onChange={(event) => {
                        setMail(event.target.value);
                    }}>
                </input>
            </div>
            <div className="form-item">
                <label className='form-item__label'>Password</label>
                <input className='form-item__input' name='password'
                    placeholder="very_cool_boy" 
                    type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}>
                </input>
            </div>

            <input className="form-btn" type='submit'
                onClick={(event) => {event.preventDefault(); handleSubmit(event, dispatch)}}
                value='Check it out'/>
        </form>
    )
}

export default Registration