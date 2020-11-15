export default class viewBox {
    static toString(pointsList) {
        // points - array of pairs
        return pointsList.map((pair)=>(pair[0] + ',' + pair[1])).join(' ') 
    }

    constructor(xlim, ylim) {
        this.xlim = xlim
        this.ylim = ylim
        this.proportion = xlim / ylim

        this.style = {}
    }
    setStyle(style) {
        this.style = style
    }

    center() {
        return [this.xlim / 2, this.ylim / 2]
    }
    mainDiagByX(x) {  // точка на главной диагонали с x-координатой х
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

    polygon(points, style={}) {
        return (
            <polygon points={viewBox.toString(points)} style={{...this.style, ...style}}></polygon>
        )
    }
    line(p1, p2, style={}) {
        return (
            <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} style={{...this.style, ...style}}></line>
        )
    }
    circle(c, r, style={}) {
        return (
            <circle cx={c[0]} cy={c[1]} r={r} style={{...this.style, ...style}}></circle>
        )
    }
}