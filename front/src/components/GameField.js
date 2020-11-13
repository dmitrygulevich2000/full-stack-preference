import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_APPLY } from '../constants/ModalNames';
import {openModal} from '../actions/modal'
import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import ApplyingResults from './ApplyingResults'

import '../styles/GameField.css'

const GameField = (props)=> {
    const {id} = props
    const modalName = useSelector((state) => state.modal.modalName)
    const table = useSelector( (state)=>state.tables.tableList.filter( (t)=>(t.id === id )[0]) )
    const dispatch = useDispatch()

    return (
        <div>
            <Model isModalOpen={modalName === MODAL_SIGNIN}>
                <SignIn> </SignIn>
            </Model>
            <Model isModalOpen={modalName === MODAL_REGISTRATION}>
                <Registration> </Registration>
            </Model>
            <Model isModalOpen={modalName === MODAL_APPLY}>
                <ApplyingResults> </ApplyingResults>
            </Model>

            <button onClick={() => dispatch(openModal(MODAL_APPLY))}> Задать результат </button>
        </div>
    )
}

export default GameField