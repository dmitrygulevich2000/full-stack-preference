import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import viewBox from '../dataStructures/viewBox'

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

const Score = ()=> {
    const window = useWindowSize();   
    const scoreFieldWidth = (window.height < window.width) ? 0.5*window.width : 0.8*window.width;
    const scoreFieldHeight = (window.height < window.width) ? scoreFieldWidth / 1.25 : scoreFieldWidth * 1.25;
    
    const score = useSelector((state)=>state.score)
    console.log('score: ', score)
    const dispatch = useDispatch();

    if (scoreFieldWidth) {
        const vb = (window.height < window.width) ? new viewBox(1350, 1080) : new viewBox(1080, 1350)
        vb.setStyle({strokeWidth: '5',
            strokeLinecap: 'butt',
            strokeLinejoin: 'bevel',
            stroke: 'black',
            fontSize: '56px',
            fill: 'none'})
        
        // начальные точки для некоторых элементов рисунка
        const p1 = vb.mainDiagByX(vb.xlim*0.28)
        const p2 = vb.mainDiagByX(vb.xlim*0.18)
        const ps1 = [[vb.xlim*0.18, vb.ylim/3], [vb.xlim*0.18, (vb.ylim*2)/3]] //  горизонтальные линии слева
        const ps2 = [[vb.xlim/3, vb.ylim*0.18], [vb.xlim*2/3, vb.ylim*0.18]]  // вертикальные линии сверху
        return (
            <svg className='score-svg' width={scoreFieldWidth + 'px'} height={scoreFieldHeight + 'px'}
                viewBox={'0 0 ' + vb.xlim + ' ' + vb.ylim}>
                {vb.polygon([[0, 0], [vb.xlim, 0], [vb.xlim, vb.ylim], [0, vb.ylim]], {strokeWidth: '10'})}           
                {vb.line( [0, 0], [vb.xlim, vb.ylim] )}
                {vb.line( [0, vb.ylim], [vb.xlim, 0] )}
                {vb.circle(vb.center(), 0.24*Math.min(...vb.center()))}
                
                {vb.polygon([p1, vb.flipGorizontal(p1), vb.flipCentral(p1), vb.flipVertical(p1)])}
                {vb.polygon([p2, vb.flipGorizontal(p2), vb.flipCentral(p2), vb.flipVertical(p2)])}
                
                {vb.line( ps1[0], [0, ps1[0][1]] )}
                {vb.line( ps1[1], [0, ps1[1][1]] )}
                
                {vb.line( vb.flipGorizontal(ps1[0]), [vb.xlim, ps1[0][1]])}
                {vb.line( vb.flipGorizontal(ps1[1]), [vb.xlim, ps1[1][1]])}

                {vb.line( ps2[0], [ps2[0][0], 0] )}
                {vb.line( ps2[1], [ps2[1][0], 0] )}

                {vb.line( vb.flipVertical(ps2[0]), [ps2[0][0], vb.ylim] )}
                {vb.line( vb.flipVertical(ps2[1]), [ps2[1][0], vb.ylim] )}

                {/* подгоняем координаты текстовых полей */}
                {/* слишком много параметров чтобы рендерить списком*/}
                <foreignObject className='score-svg__text' x={0.62*vb.xlim} y={0.38*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* гора правого */}
                <foreignObject className='score-svg__text' x={0.3*vb.xlim} y={0.38*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* гора левого */}
                <foreignObject className='score-svg__text' x={0.73*vb.xlim} y={0.27*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* пуля правого */}
                <foreignObject className='score-svg__text' x={0.185*vb.xlim} y={0.27*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* пуля левого */}
                
                <text className='score-svg__text__line' x={0.37*vb.xlim} y={0.35*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* гора верхнего */}
                <text className='score-svg__text__line' x={0.37*vb.xlim} y={0.68*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* гора нижнего */}
                <text className='score-svg__text__line' x={0.28*vb.xlim} y={0.245*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* пуля верхнего */}
                <text className='score-svg__text__line' x={0.28*vb.xlim} y={0.79*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* пуля нижнего */}

                <text className='score-svg__text__line' x={0.11*vb.xlim} y={0.1*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты верхнего на левого */}
                <text className='score-svg__text__line' x={0.35*vb.xlim} y={0.1*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты верхнего на нижнего */}
                <text className='score-svg__text__line' x={0.68*vb.xlim} y={0.1*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты верхнего на правого */}

                <text className='score-svg__text__line' x={0.11*vb.xlim} y={0.93*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты нижнего на левого */}
                <text className='score-svg__text__line' x={0.35*vb.xlim} y={0.93*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты нижнего на верхнего */}
                <text className='score-svg__text__line' x={0.68*vb.xlim} y={0.93*vb.ylim}>
                    <tspan style={{opacity: '0.25'}}>100</tspan>
                    <tspan>   500</tspan>
                </text> {/* висты нижнего на правого */}

                <foreignObject className='score-svg__text' x={0.05*vb.xlim} y={0.15*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты левого на верхнего */}
                <foreignObject className='score-svg__text' x={0.05*vb.xlim} y={0.4*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты левого на правого */}
                <foreignObject className='score-svg__text' x={0.05*vb.xlim} y={0.7*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты левого на нижнего */}

                <foreignObject className='score-svg__text' x={0.87*vb.xlim} y={0.15*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты правого на верхнего */}
                <foreignObject className='score-svg__text' x={0.87*vb.xlim} y={0.4*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты правого на левого */}
                <foreignObject className='score-svg__text' x={0.87*vb.xlim} y={0.7*vb.ylim} width='100' height='200' >
                    <div className='score-svg__text__line' style={{opacity: '0.25'}}>100</div>
                    <div className='score-svg__text__line'>500</div>
                </foreignObject> {/* висты правого на нижнего */}

            </svg>
        )
    } else return null
}

export default Score