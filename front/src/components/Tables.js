import {useSelector, useDispatch} from 'react-redux'
import { MODAL_REGISTRATION, MODAL_SIGNIN, MODAL_CREATION } from '../constants/ModalNames';

import Model from './Model'
import Registration from './Registration'
import SignIn from './SignIn'
import Creation from './Creation'
import TableCard from './TableCard'


const Tables = () => {
    const modalName = useSelector((state) => state.modal.modalName)
    const tableList = useSelector((state) => state.tables.tableList)
    const numTableExtraInfo = useSelector((state) => state.tables.numTableExtraInfo)
    console.log(tableList)
    return (
        <div className="tables_wrapper">
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