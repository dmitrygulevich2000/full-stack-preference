import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../../actions/resultsForm'
import '../../styles/Form.css'

const ContractInfo = ()=> {
    const dispatch = useDispatch()
    const dealType = useSelector((state)=>state.resultsForm.dealType)
    
    if (dealType === 'contract') {
      return (
      <div className='row-wrapper'>
        <div className='form-item'>
          <label className='form-item__header'>Кто разыгрывающий?</label>
          <select className='form-item__select' defaultValue='blank' name='player'
                  onChange={(event)=>dispatch(setResults('player', event.target.value))}>
                <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                <option className='form-item__option' value='me'>Я</option>
                <option className='form-item__option' value='1_opp'>Противник слева</option>
                <option className='form-item__option' value='2_opp'>Противник напротив</option>
                <option className='form-item__option' value='3_opp'>Противник справа</option>
          </select>
        </div>

        <div className='form-item'>
            <div className='form-item__header'>Какой был контракт?</div>
          
          <select className='form-item__select' defaultValue='blank' name='contract'
                  onChange={(event)=>dispatch(setResults('contract', event.target.value))}>
                <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                <option className='form-item__option' value='miser'>Мизер</option>
                <option className='form-item__option' value='6'>6 взяток</option>
                <option className='form-item__option' value='7'>7 взяток</option>
                <option className='form-item__option' value='8'>8 взяток</option>
                <option className='form-item__option' value='9'>9 взяток</option>
                <option className='form-item__option' value='10'>10 взяток</option>
          </select>
        </div>
      </div>
      )
    } else {
        return <></>
    }
}
export default ContractInfo