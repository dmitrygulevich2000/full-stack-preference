import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import { MODAL_REGISTRATION, MODAL_SIGNIN } from '../constants/ModalNames';
import { Fragment } from 'react';



const Main = () => {

    return (
        <Fragment>
            <Model ModalType={MODAL_SIGNIN}>
                <SignIn/>
            </Model>
            <Model ModalType={MODAL_REGISTRATION}>
                <Registration/>
            </Model>
        </Fragment>
    )
}

export default Main