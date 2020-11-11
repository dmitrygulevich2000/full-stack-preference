import {useSelector, useDispatch} from 'react-redux'



import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import TopPanel from './TopPanel'
import { MODAL_REGISTRATION, MODAL_SIGNIN } from '../constants/ModalNames';



const Main = () => {

    const modalName = useSelector((state) => state.modal.modalName)
    const userLogin = useSelector((state) => state.userLogin.userLogin)
    // dispatch = useDispatch()
    return (
        <div>
            <TopPanel LoggedUser={''}></TopPanel>
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