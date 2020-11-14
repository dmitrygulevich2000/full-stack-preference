import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../../actions/resultsForm'
import '../../styles/Form.css'

const Tricks = ()=> {
    const dispatch = useDispatch()
    const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const labels = ['Я', 'Противник слева', 'Противник напротив', 'Противник справа']
    return (
        
        <div className='form-item'>
            <div className='form-item__header'>Кто сколько взял?</div>
            <div className='row-wrapper'> 
                {labels.map((label, idx)=>{ return (
                    <div key={idx}>
                        {label}
                        <select className='form-item__select' defaultValue='blank' name='tricks'
                                onChange={(event)=>dispatch(setResultsOnIdx('tricks', idx, event.target.value))}>
                            
                            <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                            {options.map((elem, idx)=><option className='form-item__option' value={elem} key={idx}>{elem}</option>)}
                        
                        </select>
                </div>)})}

            </div>
        </div>

    )
}

export default Tricks