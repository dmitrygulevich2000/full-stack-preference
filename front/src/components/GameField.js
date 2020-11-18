import React from "react";
import ReactDOM from 'react-dom';
import {useSelector, useDispatch} from 'react-redux'

import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_APPLY } from '../constants/ModalNames';
import {openModal} from '../actions/modal'
import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import ResultsForm from './ResultsForm'
import Score from './Score'

import '../styles/GameField.css'


const GameField = (props)=> {
  // const modalName = useSelector((state) => state.modal.modalName)
  const dispatch = useDispatch()

  // const res = useSelector((state) => state.resultsForm) ////
  // console.log('res:', res) ////
  console.log('res:') ////
  
  return (
    <>
      <Model ModalType={MODAL_SIGNIN}>
          <SignIn/>
      </Model>
      <Model ModalType={MODAL_REGISTRATION}>
          <Registration/>
      </Model>
      <Model ModalType={MODAL_APPLY}>
          <ResultsForm/>
      </Model>
      
      <Score/>
      
      <button onClick={() => dispatch(openModal(MODAL_APPLY))}> Задать результат </button>
    </>
  )
}

export default GameField