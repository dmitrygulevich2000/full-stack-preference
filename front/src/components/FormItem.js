import React from "react";

/*FormItem_props = {
    name: 'name_for_internal_usage',
    header: 'headername',
    type: 'text' / 'checkbox' / 'radio' / 'list',
    variants: [
        {
          value: 'val_for_internal_usage', <- when type == 'text' used as placeholder
          label: 'h', <- ignored when type == 'text'
          checked: bool <- used if type == 'checkbox' or 'radio' (THIS LINE NOT SUPPORTED)
        },
        ...
    ]
}*/

const FormItem = ({props}) => {
  let item = {}
  console.log(props)
  switch (props.type) {
    case 'text':
        item = (<div className='form-item'>
                        <label className='form-item__header'>{props.header}</label>
                        <input className='form-item__text'
                                type='text' 
                                name={props.name} 
                                placeholder={props.variants[0].value}/>
                    </div>)
        break
    case 'checkbox':
        item = (<div className='form-item'>
                  <div className='form-item__header'>{props.header}</div>
                  <div className='form-item__vars-list'>
                    {props.variants.map((variant, idx) => {
                      return (
                      <label className='form-item__vars-list__item'>
                            <input className='form-item__vars-list__checkbox' 
                                type='checkbox' 
                                name={props.name}
                                value={variant.value}/>
                            {variant.label}   
                      </label>
                      )
                    })}
                  </div>
              </div>)
        break
    default:
        item = (<div>NO CHOICE</div>)
  }
  
  return ( item )
}

export default FormItem