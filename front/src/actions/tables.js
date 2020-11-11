import {UPDATE_TABLES, UPDATE_TABLE_EXRAINFO} from '../constants/ModalNames'


export function updateTables(tableList) {
    return {
        type: UPDATE_TABLES,
        tableList: tableList,
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