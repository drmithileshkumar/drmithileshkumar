//@ts-nocheck
export const linearString = (x, y) => {
    if(x == 0 && y == 0) return '';
    if(x == 0) {
        return y == 1 ? 'y' : y + 'y';
    }
    if(y == 0) {
        return x == 1 ? 'x' : x + 'x';
    }
    if( y < 0) {
        return (x == 1 ? 'x' : x + 'x') + ' - ' + (Math.abs(y) == 1 ? 'y' : Math.abs(y) + 'y');
    }
    
    return (x == 1 ? 'x' : x + 'x') + ' + ' + (y == 1 ? 'y' : y + 'y');
}
export const randomLinearInt = () => {
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    return {x: x, y: y, str: linearString(x, y)}
}
export const quadraticString = (a, b, c) => {
    if ( a == 0 && b == 0 && c == 0) return '';
}
export const randomQuadraticInt = () => {
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);
}