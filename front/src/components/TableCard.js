import { useDispatch } from "react-redux"
import { openExtraInfo, closeExtraInfo } from '../actions/tables'

const TableCard = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="table_card">
            <div className="table_card__head">
                <h3>{props.tableInfo.tableName}</h3>
                <p>{props.tableInfo.gameName}</p>
                <p>{props.tableInfo.status}</p>
            </div>
            <div className="table_card__content">
                <ul>
                    {props.tableInfo.players.map( (player, i) =>
                        <li key={i}>{player}</li>
                    )}
                </ul>
            </div>
            <div className="table_card__btn">
                { !props.isOpenExraInfo
                ? <button className="table_card__btnInf" onClick={() => dispatch(openExtraInfo(props.tableInfo.id))}>Open More</button>
                : <button className="table_card__btnInf" onClick={() => dispatch(closeExtraInfo())}>Close More</button>
                }
                <button className="table_card__btnConnect">Come in</button>
            </div>
            {
                props.isOpenExraInfo 
                ? <div><p>{props.tableInfo.extra.convention}</p></div>
                : <></> // Заглушка 
            }
        </div>
    )
}

export default TableCard