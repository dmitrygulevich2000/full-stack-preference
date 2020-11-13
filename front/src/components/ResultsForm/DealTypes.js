import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../../actions/resultsForm'
import '../../styles/Form.css'

const DealTypes = ()=> {
    const dispatch = useDispatch()
    const dealType = useSelector((state)=>state.resultsForm.dealType)
    
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
                  onChange={(event)=>dispatch(setResults('dealType', 'pass'))}/>
          Распасы 
        </label>
  
        <label className='form-item__vars-list__item'>
          <input className='form-item__vars-list__checkbox' 
                  type='checkbox'
                  checked={'contract' === dealType}
                  name='dealType'
                  value='contract'
                  onChange={(event)=>dispatch(setResults('dealType', 'contract'))}/>
          Контракт
        </label>
      </div>
    </div>
    )
  }
  
export default DealTypes