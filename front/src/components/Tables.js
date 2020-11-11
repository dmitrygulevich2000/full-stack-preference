import {useSelector, useDispatch} from 'react-redux'


import TopPanel from './TopPanel'
import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import Creation from './Creation'
import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_CREATION } from '../constants/ModalNames';

function Tables() {
    const modalName = useSelector((state) => state.modal.modalName)

    return (
        <div>
            <Model isModalOpen={modalName === MODAL_SIGNIN}>
                <SignIn> </SignIn>
            </Model>
            <Model isModalOpen={modalName === MODAL_REGISTRATION}>
                <Registration> </Registration>
            </Model>
            <Model isModalOpen={modalName === MODAL_CREATION}>
                <Creation> </Creation>
            </Model>
            <div className='tables_list'>

            </div>
        </div>
    )
}

export default Tables