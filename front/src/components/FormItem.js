import React from "react";
import TopPanel from "./TopPanel";

// FormItem_props = {
//     label: 'labelname',
//     type: 'text' / 'checkbox' / 'radio' / 'list',
//     items: ['item_1', ..., 'item_n'], <- when type == 'text' used as placeholder
//     checked: [bool, ..., bool] <- if type == 'checkbox' or 'radio'
// }

function FormItem(props) {
    let answers = {}
    switch (props.type) {
        case 'text':
            answers = (<div>
                            <label>{props.label}</label>
                            <input type='text' placeholder={props.items[0]}></input>
                        </div>)
            break
        default:
            answers = (<div>NO CHOICE</div>)
    }
    
    return (
        <div className='form_item'>
            <p>{props.label}</p>
            <div className='form_item__answers_wrapper'>
                {{'text':   <div></div>,
                  'list': <div></div>,
                  'checkbox': <div></div>,
                  'radio': <div></div>
                }[props.type]}
            </div>
        </div>
    )
}

export default FormItem