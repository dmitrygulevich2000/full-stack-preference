import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'

import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_CREATION } from '../constants/ModalNames';

import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import Creation from './Creation'
import TableCard from './TableCard'
import {updateTables} from '../actions/tables'

import '../App.css'
import '../styles/Tables.css'

const Tables = () => {
    const dispatch = useDispatch()

    const tableList = useSelector((state) => state.tables.tableList)
    const numTableExtraInfo = useSelector((state) => state.tables.numTableExtraInfo)

    const history = useHistory()
    return (
        <div className="tables_wrapper">
            <Model ModalType={MODAL_SIGNIN}>
                <SignIn/>
            </Model>
            <Model ModalType={MODAL_REGISTRATION}>
                <Registration/>
            </Model>
            <Model ModalType={MODAL_CREATION}>
                <Creation/>
            </Model>
            {/* TODO: button */}
            <div className='tables__left_area'>
                <button className='basic_button' onClick={() => {dispatch(updateTables())}}
                    fontSize='10vh'>refresh</button>
                <button className='basic_button' onClick={()=>history.push('/')}
                    fontSize='10vh'>На главную</button>
            </div>
            <div className='tables_list'>
            {
                tableList.map((table) => (
                    <TableCard tableInfo={table} isOpenExraInfo={numTableExtraInfo === table.id} key={table.id}/>)
                )
            }
            </div>
        </div>
    )
}

export default Tables