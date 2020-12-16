import {useDispatch} from 'react-redux'

import {useSelector} from 'react-redux'
import {closeModal} from '../actions/modal'


const Model = ({children, ModalType}) => {
    const modalName = useSelector((state) => state.modal.modalName)
    console.log(ModalType)
    
    const dispatch = useDispatch()
    if (ModalType !== modalName) {
        return null
    }

    return (
        <div className='model-background' onClick={()=>dispatch(closeModal())}>
            <div  className="model" onClick={(event)=>event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Model;