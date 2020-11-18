import {openModal} from '../actions/modal'
import {MODAL_SIGNIN, MODAL_REGISTRATION} from '../constants/ModalNames'
import {useSelector, useDispatch} from 'react-redux'
import { Fragment } from 'react'


const TopPanel = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin.userLogin)
    return (
        <div id='top_panel'>
          <div className='top_panel__right'>
            <div className='top_panel__header'>Преферанс</div>
          </div>
          <div className='top_panel__left'>
            {
              !userLogin ? 
                  <Fragment>
                    <button className='top_panel__button' onClick={() => {dispatch(openModal(MODAL_REGISTRATION)); console.log('frjgisj')}}>Регистрация</button>
                    <button className='top_panel__button' onClick={() => dispatch(openModal(MODAL_SIGNIN))}>Вход</button>
                  </Fragment>
              : <p>{userLogin}</p>
                
            }
            
          </div>

      </div>   
    )
}

export default TopPanel