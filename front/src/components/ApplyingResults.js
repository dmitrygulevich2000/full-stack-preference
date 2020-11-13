import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";

import Form from "./Form";
import setResults from '../actions/resultsForm'
import '../styles/Form.css'

/*deal == раздача*/

// structure component
function dealTypes(dispatch, dealType) {
  return (
  <div className='form_item'>
    <div className='form-item__header'>Что играли?</div>
    <div className='form-item__vars-list'>
      <label className='form-item__vars-list__item'>
        <input className='form-item__vars-list__checkbox' 
                type='checkbox'
                checked={'pass' === dealType} 
                name='dealType'
                value='pass'
                onClick={(event)=>dispatch(setResults('dealType', 'pass'))}/>
        Распасы 
      </label>

      <label className='form-item__vars-list__item'>
        <input className='form-item__vars-list__checkbox' 
                type='checkbox'
                checked={'contract' === dealType}
                name='dealType'
                value='contract'
                onClick={(event)=>dispatch(setResults('dealType', 'contract'))}/>
        Контракт
      </label>
    </div>
  </div>
  )
}

// structure component
function ContractInfo(dispatch, dealType) {
  if (dealType === 'contract') {
    return (
    <div className='form_item'>
      <label className='form-item__header'>Кто разыгрывающий?</label>
      <input className='form-item__text'
              type='text' 
              name='player'
              onChange={(event)=>dispatch(setResults('player', event.target.value))}/>
    </div>
    )
  }
}

//!!---------------------!!//
//!! exporting component !!//
const ApplyingResults = ({props})=> {
    const dispatch = useDispatch()
    const dealType = useSelector((state)=>state.resultsForm.dealType)
    
    return (
      <form className='form' name='results'>
        <div className='form__header'> Результаты раздачи: </div>
        
        <div className='form__items-list'>
          {dealTypes(dispatch, dealType)}
          {ContractInfo(dispatch, dealType)}
        </div>
        <input className='form__submit' type='submit' value='Готово!'/>
      </form>
    )
}

export default ApplyingResults