//@ts-nocheck
export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {relations12} = await import('$lib/mathril/pages/practice/class12/relations12.js')
            selectedGenerator = relations12; 
            break;
        }
        case 2: {
            let {inverse} = await import('$lib/mathril/pages/practice/class12/inverse.js')
            selectedGenerator = inverse; 
            break;
        }
        case 3: {
            let {matrices} = await import('$lib/mathril/pages/practice/class12/matrices.js')
            selectedGenerator = matrices; 
            break;
        }
        case 4: {
            let {determinants} = await import('$lib/mathril/pages/practice/class12/determinants.js')
            selectedGenerator = determinants; 
            break;
        }
        case 5: {
            let {continuity} = await import('$lib/mathril/pages/practice/class12/continuity.js')
            selectedGenerator = continuity; 
            break;
        }
        case 6: {
            let {differentiability} = await import('$lib/mathril/pages/practice/class12/differentiability.js')
            selectedGenerator = differentiability; 
            break;
        }
        case 7: {
            let {appDerivatives} = await import('$lib/mathril/pages/practice/class12/appDerivatives.js')
            selectedGenerator = appDerivatives; 
            break;
        }
        case 8: {
            let {indefinite} = await import('$lib/mathril/pages/practice/class12/indefinite.js')
            selectedGenerator = indefinite; 
            break;
        }
        case 9: {
            let {definite} = await import('$lib/mathril/pages/practice/class12/definite.js')
            selectedGenerator = definite; 
            break;
        }
        case 10: {
            let {appIntegrals} = await import('$lib/mathril/pages/practice/class12/appIntegrals.js')
            selectedGenerator = appIntegrals; 
            break;
        }
        case 11: {
            let {differential} = await import('$lib/mathril/pages/practice/class12/differential.js')
            selectedGenerator = differential; 
            break;
        }
        case 12: {
            let {vectors} = await import('$lib/mathril/pages/practice/class12/vectors.js')
            selectedGenerator = vectors; 
            break;
        }
        case 13: {
            let {geometry3d} = await import('$lib/mathril/pages/practice/class12/geometry3d.js')
            selectedGenerator = geometry3d; 
            break;
        }
        case 14: {
            let {linear} = await import('$lib/mathril/pages/practice/class12/linear.js')
            selectedGenerator = linear; 
            break;
        }
    }
    return selectedGenerator;
}