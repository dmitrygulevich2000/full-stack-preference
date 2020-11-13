import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../actions/resultsForm'
import DealTypes from './ResultsForm/DealTypes';
import Whistlers from './ResultsForm/Whistlers';
import ContractInfo from './ResultsForm/ContractInfo';
import Tricks from './ResultsForm/Tricks'

import '../styles/Form.css'

// deal == раздача
// whistler == вистующий
// trick == взятка

const ResultsForm = ({props})=> {
    return (
      <form className='form' name='results'>
        <div className='form__header'> Результаты раздачи: </div>
        
        <div className='form__items-list'>
          <DealTypes/>
          <ContractInfo/>
          <Whistlers/>
          <Tricks/>
        </div>
        <input className='form__submit' type='submit' value='Готово!'/>
      </form>
    )
}

export default ResultsForm