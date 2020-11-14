import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import '../styles/GameField.css'

function useWindowSize() {
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize({width: document.documentElement.clientWidth || window.innerWidth, 
                 height: document.documentElement.clientHeight || window.innerHeight});
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

class viewBox {
    static toString(pointsList) {
        // points - array of pairs
        return pointsList.map((pair)=>(pair[0] + ',' + pair[1])).join(' ') 
    }

    constructor(xlim, ylim) {
        this.xlim = xlim
        this.ylim = ylim
        this.proportion = xlim / ylim
    }

    center() {
        return [this.xlim / 2, this.ylim / 2]
    }
    mainDiagByX(x) {
        return [x, x / this.proportion]
    }
    flipVertical(p) {
        const x = p[0]
        const y = p[1]
        return [x, this.ylim - y] 
    }
    flipGorizontal(p) {
        const x = p[0]
        const y = p[1]
        return [this.xlim - x, y]
    }
    flipCentral(p) {
        const x = p[0]
        const y = p[1]
        return [this.xlim - x, this.ylim - y] 
    }

}

const Score = ()=> {
    const window = useWindowSize();   
    const scoreFieldWidth = (window.height < window.width) ? 0.5*window.width : 0.8*window.width;
    const scoreFieldHeight = (window.height < window.width) ? scoreFieldWidth / 1.25 : scoreFieldWidth * 1.25;
    
    if (scoreFieldWidth) {
        const vb = (window.height < window.width) ? new viewBox(1350, 1080) : new viewBox(1080, 1350)
        
        // начальные точки для некоторых элементов рисунка
        const p1 = vb.mainDiagByX(vb.xlim*0.3)
        const p2 = vb.mainDiagByX(vb.xlim*0.22)
        const ps1 = [[vb.xlim*0.22, vb.ylim/3], [vb.xlim*0.22, (vb.ylim*2)/3]] //  горизонтальные линии слева
        const ps2 = [[vb.xlim/3, vb.ylim*0.22], [vb.xlim*2/3, vb.ylim*0.22]]  // вертикальные линии сверху
        return (
            <svg className='score-svg' width={scoreFieldWidth + 'px'} height={scoreFieldHeight + 'px'}
                viewBox={'0 0 ' + vb.xlim + ' ' + vb.ylim}>
                <polygon points={viewBox.toString([[0, 0], [vb.xlim, 0], [vb.xlim, vb.ylim], [0, vb.ylim]])} strokeWidth='10' ></polygon>
                
                <line x1='0' y1='0' x2={vb.xlim} y2={vb.ylim}></line>
                <line x1='0' y1={vb.ylim} x2={vb.xlim} y2='0'></line>
                <circle cx={vb.center()[0]} cy={vb.center()[1]} r={0.24*Math.min(...vb.center())}></circle>
                <polygon points={viewBox.toString([p1, vb.flipGorizontal(p1), vb.flipCentral(p1), vb.flipVertical(p1)])}></polygon>
                <polygon points={viewBox.toString([p2, vb.flipGorizontal(p2), vb.flipCentral(p2), vb.flipVertical(p2)])}></polygon>
                
                <line x1={ps1[0][0]} y1={ps1[0][1]} x2='0' y2={ps1[0][1]}></line>
                <line x1={ps1[1][0]} y1={ps1[1][1]} x2='0' y2={ps1[1][1]}></line>
                
                <line x1={vb.flipGorizontal(ps1[0])[0]} y1={ps1[0][1]} x2={vb.xlim} y2={ps1[0][1]}></line>
                <line x1={vb.flipGorizontal(ps1[1])[0]} y1={ps1[1][1]} x2={vb.xlim} y2={ps1[1][1]}></line>

                <line x1={ps2[0][0]} y1={ps2[0][1]} x2={ps2[0][0]} y2='0'></line>
                <line x1={ps2[1][0]} y1={ps2[1][1]} x2={ps2[1][0]} y2='0'></line>

                <line x1={ps2[0][0]} y1={vb.flipVertical(ps2[0])[1]} x2={ps2[0][0]} y2={vb.ylim}></line>
                <line x1={ps2[1][0]} y1={vb.flipVertical(ps2[1])[1]} x2={ps2[1][0]} y2={vb.ylim}></line>

                {/* подгоняем координаты текстовых полей */}
                {/* <text className='score-text' x={p1[0] + vb.xlim*0.07} y={p1[1] + vb.ylim*0.05}>100</text>
                <text className='score-text' x={vb.flipGorizontal(p1)[0] - vb.xlim*0.07} y={vb.flipGorizontal(p1)[1] + vb.ylim*0.2}>100000</text> */}
            </svg>
        )
    } else return null
}

export default Score