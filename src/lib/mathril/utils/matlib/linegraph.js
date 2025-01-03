//@ts-nocheck
export class Linegraph {
    constructor(
    {
        xlabel = 'x',
        ylabel = 'y',
        xunit = '',
        yunit = '',
        x = [],
        y = [],
        fill = 'rgba(0, 175, 255, 1)',
        stroke = 'currentcolor',
        strokewidth = 1,
        strokedasharray = 'none',
        opacity = 1,
        pathLength = 1,
        transform = ''
    } = {}) {
        this.xlabel = xlabel,
        this.ylabel = ylabel,
        this.xunit = xunit,
        this.yunit = yunit,
        this.x = x,
        this.y = y,
        this.fill = fill,
        this.stroke = stroke,
        this.strokewidth = strokewidth,
        this.strokedasharray = strokedasharray,
        this.opacity = opacity,
        this.pathLength = pathLength,
        this.transform = transform;
    }
    xrange() {
        let min = Math.min(...this.x);
        let max = Math.max(...this.x);
        return [min, max];
    }
    yrange() {
        let min = Math.min(...this.y);
        let max = Math.max(...this.y);
        return [min, max];
    }
    draw() {
        let xr = this.xrange();
        let yr = this.yrange();
        let dxm = Math.abs((xr[1] - xr[0])/this.x.length);
        let dym= Math.ceil(Math.abs((yr[1] - yr[0])/this.y.length));
        let dx = 100/(this.x.length + 1);
        let dy = dx;
        let xaxis = `<path d="M -10, 0 L 110,0" stroke="currentcolor" stroke-width="1" fill="none" marker-end="url(#arrow)"/>`
        let yaxis = `<path d="M 0,10 L 0,-110" stroke="currentcolor" stroke-width="1" fill="none" marker-end="url(#arrow)"/>`
        let axisMarker = [];
        for(let i = 0; i <= this.x.length; i++) {
            axisMarker.push({
                x: dx * (i + 1),
                y: -(dy * (i + 1))
            })
        }
        let grid = '';
        for(let i = 0; i <= this.x.length; i++) {
            grid += `<path d="M -10, ${axisMarker[i].y} L 110,${axisMarker[i].y}" stroke="currentcolor" opacity="0.3" stroke-width="1" fill="none"/>`
            grid += `<path d="M ${axisMarker[i].x},10 L ${axisMarker[i].x},-110" stroke="currentcolor" opacity="0.3" stroke-width="1" fill="none"/>`
        }
        let dataPoints = [];
        for(let i = 0; i < this.x.length; i++) {
            dataPoints.push({
                x: dx * (i + 1),
                y: -((this.y[i] - yr[0])/dym * dy + dy)
            })
        }
        let points = '';
        let dots = '';
        for(let i = 0; i < this.x.length; i++) {
            points += dataPoints[i].x + ',' + dataPoints[i].y + ' ';
            dots += `<circle cx='${dataPoints[i].x}' cy='${dataPoints[i].y}' r="2" fill="red" />`
        }
        let graph = `<polyline points="${points}" stroke="rgba(0, 175, 255, 1)" stroke-width="2" fill="none"/>`
        let dot = `<circle cx='0' cy='0' r="2" fill="green" />`
        let yvalues = '';
        for(let i = 0; i < this.x.length + 1; i++) {
            yvalues += `<text text-anchor="end" x="-5" y="${axisMarker[i].y}" font-size="8" fill="currentcolor">${yr[0] + i * dym}</text>`
        }
        let xvalues = '';
        for(let i = 0; i < this.x.length; i++) {
            xvalues += `<text text-anchor="middle" x="${axisMarker[i].x}" y="10" font-size="8" fill="currentcolor">${this.x[i]}</text>`
        }
        return grid + xaxis + yaxis + graph + dots + xvalues + yvalues;
    }
}