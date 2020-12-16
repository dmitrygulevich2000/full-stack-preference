import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {logUser} from '../actions/userLogin'
import {closeModal} from '../actions/modal'
import {register} from '../actions/register'
import { ENGINE_METHOD_ALL } from "constants";
import { ApiClient } from "../services/ApiClient";

const CreateTable = async (name, game, description) => {
    return await ApiClient(
        "tables/",
        {
            method : "POST",
            headers : {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({name, game, description})
        },
        false
    )()
}

const ConnectToTable = async (name) => {
    return await ApiClient(
        "players/",
        {
            method : "POST",
            headers : {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({table : name})
        },
        false
    )()
}


const Creation = () => {
    const [description, setDescription] = React.useState("");
    const [name, setName] = React.useState("");
    // const [game, setGame] = React.useState("");
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (event, dispatch) => {
        if (!name || !description) {
            return;
        }
        const game = 'pref'
        console.log(description, name, game)
        CreateTable(name, game, description)
        ConnectToTable(name)

        dispatch(closeModal())

        history.push("/field")
    }

    return (
        <form className="form" name='register'>
            <h2 className="form-header">Join Us</h2>
            <div className="form-item">
                <label className='form-item__label'>Table name</label>
                <input className='form-item__input' name='name'
                    placeholder="chipollino"
                    type="text"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}>

                </input>
            </div>
            {/* <div className="form-item">
                <label className='form-item__label'>Game</label>
                <input className='form-item__input' name='email'
                    placeholder="very_cool_boy@gmaol.com"
                    type="e-mail"
                    onChange={(event) => {
                        setMail(event.target.value);
                    }}>
                </input>
            </div> */}
            <div className="form-item">
                <label className='form-item__label'>Description</label>
                <input className='form-item__input' name='description'
                    placeholder="very_cool_boy"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}>
                </input>
            </div>

            <input className="form-btn" type='submit'
                onClick={(event) => {event.preventDefault(); handleSubmit(event, dispatch)}}
                value='Check it out'/>
        </form>
    )
}

export default Creation