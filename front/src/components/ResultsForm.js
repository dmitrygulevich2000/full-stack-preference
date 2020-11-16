import React from "react";
import {useDispatch} from "react-redux";

import {scoreAdd, scoreAddOnIdx, scoreAddOnIdxs} from '../actions/score'
import {historyPush} from '../actions/scoreHistory'
import {closeModal} from '../actions/modal'

import DealTypes from './ResultsForm/DealTypes';
import Whistlers from './ResultsForm/Whistlers';
import ContractInfo from './ResultsForm/ContractInfo';
import Tricks from './ResultsForm/Tricks'
import {store} from '../store'

import '../styles/Form.css'
// deal == раздача
// whistler == вистующий
// trick == взятка

function handleSubmit(event, dispatch) {
  const results = store.getState().resultsForm
  console.log('results: ', results) ////

  const tricks = results.tricks.map((el)=>parseInt(el))
  
  //!-- verification --!//
  if (tricks.reduce((acc, cv)=>acc + cv) !== 10) {
    alert('Общее число взяток не равно 10')
    return
  }
  // other checking...

  
  
  dispatch(closeModal())
}

const ResultsForm = ()=> {
  const dispatch = useDispatch()
  return (
      <div className='form' name='results'>
        <div className='form__header'> Результаты раздачи: </div>
        
        <div className='form__items-list'>
          <DealTypes/>
          <ContractInfo/>
          <Whistlers/>
          <Tricks/>
        </div>
        <input className='form__submit' type='submit' value='Готово!' onClick={(event)=>handleSubmit(event, dispatch)}/>
      </div>
    )
}

export default ResultsForm