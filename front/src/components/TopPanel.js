import {openModal} from '../actions/modal'
import {MODAL_SIGNIN, MODAL_REGISTRATION} from '../constants/ModalNames'
import {useSelector, useDispatch} from 'react-redux'


const TopPanel = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin.userLogin)
    return (
        <div id='top_panel'>
        <div className='top_panel__right'>
          <div className='top_panel__header'>Преферанс</div>
        </div>
        { !userLogin
        ? <div className='top_panel__left'>
          <button className='top_panel__button' onClick={() => dispatch(openModal(MODAL_REGISTRATION))}>Регистрация</button>
          <button className='top_panel__button' onClick={() => dispatch(openModal(MODAL_SIGNIN))}>Вход</button>
        </div> 
        : <div className='top_panel__left'> 
          <p>{userLogin}</p> 
          </div>

        }
      </div>   
    )
}

export default TopPanel