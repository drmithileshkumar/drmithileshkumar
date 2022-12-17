export const setD = (edges, points) => {
    let d = '';
    for(let i = 0; i < edges.length; i++) {
        switch(edges[i].c) {
            case 'M': {
                d += 'M ' + points[edges[i].v].x + ',' + points[edges[i].v].y;
                break;
            }
            case 'L': {
                d += ' L ' + points[edges[i].v].x + ',' + points[edges[i].v].y;
                break;
            }
            case 'C': {
                d += ' C ' + points[edges[i].cp][0].x + ',' + points[edges[i].cp][0].y + ' ' + points[edges[i].cp][1].x + ',' + points[edges[i].cp][1].y + ' ' +  points[edges[i].v].x + ',' + points[edges[i].v].y;
                break;
            }
        }
    }
    return d;
}