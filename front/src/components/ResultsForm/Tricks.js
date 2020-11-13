import React from "react";
import { useSelector, useDispatch} from "react-redux";

import {setResults, setResultsOnIdx, resetValue} from '../../actions/resultsForm'
import '../../styles/Form.css'

const Tricks = ()=> {
    const dispatch = useDispatch()
    
    return (
        
        <div className='form-item'>
            <div className='form-item__header'>Кто сколько взял?</div>
            <div className='row-wrapper'> 
                <div>
                    Я
                    <select className='form-item__select' defaultValue='blank' name='tricks' 
                            onChange={(event)=>dispatch(setResultsOnIdx('tricks', 0, event.target.value))}>
                        <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                        <option className='form-item__option' value='0'>0</option>
                        <option className='form-item__option' value='1'>1</option>
                        <option className='form-item__option' value='2'>2</option>
                        <option className='form-item__option' value='3'>3</option>
                        <option className='form-item__option' value='4'>4</option>
                        <option className='form-item__option' value='5'>5</option>
                        <option className='form-item__option' value='6'>6</option>
                        <option className='form-item__option' value='7'>7</option>
                        <option className='form-item__option' value='8'>8</option>
                        <option className='form-item__option' value='9'>9</option>
                        <option className='form-item__option' value='10'>10</option>
                    
                    </select>
                </div>

                <div>
                    Противник слева
                    <select className='form-item__select' defaultValue='blank' name='tricks' 
                            onChange={(event)=>dispatch(setResultsOnIdx('tricks', 1, event.target.value))}>
                        <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                        <option className='form-item__option' value='0'>0</option>
                        <option className='form-item__option' value='1'>1</option>
                        <option className='form-item__option' value='2'>2</option>
                        <option className='form-item__option' value='3'>3</option>
                        <option className='form-item__option' value='4'>4</option>
                        <option className='form-item__option' value='5'>5</option>
                        <option className='form-item__option' value='6'>6</option>
                        <option className='form-item__option' value='7'>7</option>
                        <option className='form-item__option' value='8'>8</option>
                        <option className='form-item__option' value='9'>9</option>
                        <option className='form-item__option' value='10'>10</option>
                    
                    </select>
                </div>

                <div>
                    Противник напротив
                    <select className='form-item__select' defaultValue='blank' name='tricks' 
                            onChange={(event)=>dispatch(setResultsOnIdx('tricks', 2, event.target.value))}>
                        <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                        <option className='form-item__option' value='0'>0</option>
                        <option className='form-item__option' value='1'>1</option>
                        <option className='form-item__option' value='2'>2</option>
                        <option className='form-item__option' value='3'>3</option>
                        <option className='form-item__option' value='4'>4</option>
                        <option className='form-item__option' value='5'>5</option>
                        <option className='form-item__option' value='6'>6</option>
                        <option className='form-item__option' value='7'>7</option>
                        <option className='form-item__option' value='8'>8</option>
                        <option className='form-item__option' value='9'>9</option>
                        <option className='form-item__option' value='10'>10</option>
                    
                    </select>
                </div>

                <div>
                    Противник справа
                    <select className='form-item__select' defaultValue='blank' name='tricks' 
                            onChange={(event)=>dispatch(setResultsOnIdx('tricks', 3, event.target.value))}>
                        <option className='form-item__option' value='blank'>{'<не выбрано>'}</option>
                        <option className='form-item__option' value='0'>0</option>
                        <option className='form-item__option' value='1'>1</option>
                        <option className='form-item__option' value='2'>2</option>
                        <option className='form-item__option' value='3'>3</option>
                        <option className='form-item__option' value='4'>4</option>
                        <option className='form-item__option' value='5'>5</option>
                        <option className='form-item__option' value='6'>6</option>
                        <option className='form-item__option' value='7'>7</option>
                        <option className='form-item__option' value='8'>8</option>
                        <option className='form-item__option' value='9'>9</option>
                        <option className='form-item__option' value='10'>10</option>
                    
                    </select>
                </div>
            </div>
        </div>

    )
}

export default Tricks