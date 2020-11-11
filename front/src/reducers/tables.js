import {UPDATE_TABLES, UPDATE_TABLE_EXRAINFO} from '../constants/ModalNames'


const initialState = {
    tableList: [
        {
            id: 0,
            tableName: 'cool guys',
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
        },
        {
            id: 1,
            tableName: 'very cool guys',
            gameName: 'Преферанс',
            status: 'Closed',
            players: [
                'Митя',
                'Паша',
                '-'
            ],
        },
        {
            id: 2,
            tableName: 'cool guys',
            gameName: 'Преферанс',
            status: 'Closed',
            players: [
                'Митя',
                '-',
                '-'
            ],
        },
        {
            id: 3,
            tableName: 'cool guys',
            gameName: 'Преферанс',
            status: 'Closed',
            players: [
                'Митя',
                'Паша',
                'Иван',
                'Максим'
            ]
        }
    ],
    numTableExtraInfo: null
}


export default function tables(state = initialState, action) {
    switch(action.type) {
      case UPDATE_TABLES:
        return {
            tableList: action.tableList,
          numTableExtraInfo: null
        }
      case UPDATE_TABLE_EXRAINFO:
        return {
            tableList: state.tableList,
            numTableExtraInfo: action.numTableExtraInfo
        }
    }
    return state
  }