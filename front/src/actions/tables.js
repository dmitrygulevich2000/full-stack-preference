import {UPDATE_TABLES, UPDATE_TABLE_EXRAINFO} from '../constants/ModalNames'
import { ApiClient } from '../services/ApiClient'


export function updateTables() {
    return async dispatch => {
        try {
            const response = await ApiClient(
                "tables/",
                {method : "GET",}
            )()
            const tables = await response.json()
            const return_state = tables.map(
                (table) => {
                    return {
                        id: 0,
                        tableName: table["name"],
                        gameName: 'Преферанс',
                        status: 'Closed',
                        players: [
                            'Митя',
                            'Паша',
                            'Иван'
                        ],
                        extra: {
                            convention: 'Сочи'
                        }
                    }
                }
            )
            dispatch(updateTablesS(return_state))
                
        } catch(err) {
            console.log(err)
        }
    }
}

export function updateTablesS(tableList) {
    return {
        type: UPDATE_TABLES,
        tableList: tableList
    }
}



export function closeExtraInfo() {
    
    return {
        type: UPDATE_TABLE_EXRAINFO,
        numTableExtraInfo: null 
    }
}

export function openExtraInfo(id) {
    return {
        type: UPDATE_TABLE_EXRAINFO,
        numTableExtraInfo: id
    }
}