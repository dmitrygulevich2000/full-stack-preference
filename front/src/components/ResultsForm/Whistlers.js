import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../../actions/resultsForm'
import '../../styles/Form.css'

const Whistlers = ()=> {
    const dispatch = useDispatch()
    const dealType = useSelector((state)=>state.resultsForm.dealType)
    const whistlers = useSelector((state)=>state.resultsForm.whistlers)

    let count = whistlers.filter((w)=>(w !== 'blank')).length
  
    if (dealType === 'contract') {
      return (
        <div className='form-item'>
          <div className='form-item__header'>Выберите вистующих</div>
          
          <select className='form-item__select' defaultValue='blank' name='whistler' 
                  onChange={(event)=>dispatch(setResultsOnIdx('whistlers', 0, event.target.value))}>
            <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
            <option className='form-item__option' value="me">Я</option>
            <option className='form-item__option' value="1_opp">Противник слева</option>
            <option className='form-item__option' value="2_opp">Противник напротив</option>
            <option className='form-item__option' value="3_opp">Противник справа</option>
          </select>

          {(() => {
          if (count > 0) {
            return (
              <select className='form-item__select' defaultValue='blank' name='whistler'
                    onChange={(event)=>dispatch(setResultsOnIdx('whistlers', 1, event.target.value))}>
                <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                <option className='form-item__option' value="me">Я</option>
                <option className='form-item__option' value="1_opp">Противник слева</option>
                <option className='form-item__option' value="2_opp">Противник напротив</option>
                <option className='form-item__option' value="3_opp">Противник справа</option>
              </select>
            )
          }
          })()}
        </div>
      )
    } else {
        if (count > 0) { dispatch(resetValue('whistlers'))}
        return <></>
    }
}

export default Whistlers