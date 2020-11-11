import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import {openModal} from '../actions/modal'
import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import ApplyingResults from './ApplyingResults'
import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_APPLY } from '../constants/ModalNames';

const GameField = ()=> {
    const modalName = useSelector((state) => state.modal.modalName)
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