import { useHistory } from 'react-router-dom'

import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import { MODAL_REGISTRATION, MODAL_SIGNIN } from '../constants/ModalNames';
import { Fragment } from 'react';

import '../App.css'

const Main = () => {
    const history = useHistory()
    return (
        <Fragment>
            <div className='main__central_area'>
                <button className='basic_button' onClick={()=>history.push('/tables/')}>Играть!</button>
            </div>
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