import {useSelector} from 'react-redux'


const Model = ({children, ModalType}) => {
    const modalName = useSelector((state) => state.modal.modalName)
    console.log(ModalType)
    if (ModalType !== modalName) {
        return null
    }

    return (
        <div  className="model">
            {children}
        </div>
    )
}

export default Model;