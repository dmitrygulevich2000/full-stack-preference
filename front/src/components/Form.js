import React from "react";

import '../styles/Form.css'
import FormItem from './FormItem';

/*Form_props = {
    name: 'name_for_internal_usage'
    header: 'headername',
    items: [
        FormItem_props_1,
        ...
    ]
}*/

const Form = ({props}) => {
    return (
        <form name={props.name}
              className='form'
              onSubmit={()=>{}}>
            <div className='form__header'>{props.header}</div>
            <div className='form__items-list'>
                {props.items.map((item, idx)=> {
                    return (<FormItem props={item}/>)
                })}
            </div>
            <input className='form__submit' type='submit' value='Готово!'/>
        </form>
    )
}

export default Form