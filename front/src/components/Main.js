import {useSelector, useDispatch} from 'react-redux'



import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import { MODAL_REGISTRATION, MODAL_SIGNIN } from '../constants/ModalNames';



const Main = () => {

    const modalName = useSelector((state) => state.modal.modalName)
    // dispatch = useDispatch()
    return (
        <div>
            <Model isModalOpen={modalName === MODAL_SIGNIN}>
                <SignIn> </SignIn>
            </Model>
            <Model isModalOpen={modalName === MODAL_REGISTRATION}>
                <Registration> </Registration>
            </Model>
        </div>
    )
}

export default Main