export const setGenerator = async (chaptern) => {
    let selectedGenerator;
    switch(Number(chaptern)) {
        case 1: {
            let {sets} = await import('$lib/mathril/pages/practice/class11/sets.js')
            selectedGenerator = sets; 
            break;
        }
        case 2: {
            let {relations} = await import('$lib/mathril/pages/practice/class11/relations.js')
            selectedGenerator = relations; 
            break;
        }
        case 3: {
            let {trigonometry} = await import('$lib/mathril/pages/practice/class11/trigonometry.js')
            selectedGenerator = trigonometry; 
            break;
        }
        case 4: {
            let {induction} = await import('$lib/mathril/pages/practice/class11/induction.js')
            selectedGenerator = induction; 
            break;
        }
        case 5: {
            let {complex} = await import('$lib/mathril/pages/practice/class11/complex.js')
            selectedGenerator = complex; 
            break;
        }
        case 6: {
            let {quadratic} = await import('$lib/mathril/pages/practice/class11/quadratic.js')
            selectedGenerator = quadratic; 
            break;
        }
        case 7: {
            let {inequalities} = await import('$lib/mathril/pages/practice/class11/inequalities.js')
            selectedGenerator = inequalities; 
            break;
        }
        case 8: {
            let {combinatorics} = await import('$lib/mathril/pages/practice/class11/combinatorics.js')
            selectedGenerator = combinatorics; 
            break;
        }
        case 9: {
            let {binomial} = await import('$lib/mathril/pages/practice/class11/binomial.js')
            selectedGenerator = binomial; 
            break;
        }
        case 10: {
            let {sequences} = await import('$lib/mathril/pages/practice/class11/sequences.js')
            selectedGenerator = sequences; 
            break;
        }
        case 11: {
            let {line} = await import('$lib/mathril/pages/practice/class11/line.js')
            selectedGenerator = line; 
            break;
        }
        case 12: {
            let {circle} = await import('$lib/mathril/pages/practice/class11/circle.js')
            selectedGenerator = circle; 
            break;
        }
        case 13: {
            let {parabola} = await import('$lib/mathril/pages/practice/class11/parabola.js')
            selectedGenerator = parabola; 
            break;
        }
        case 14: {
            let {ellipse} = await import('$lib/mathril/pages/practice/class11/ellipse.js')
            selectedGenerator = ellipse; 
            break;
        }
        case 15: {
            let {hyperbola} = await import('$lib/mathril/pages/practice/class11/hyperbola.js')
            selectedGenerator = hyperbola; 
            break;
        }
        case 16: {
            let {threed} = await import('$lib/mathril/pages/practice/class11/threed.js')
            selectedGenerator = threed; 
            break;
        }
        case 17: {
            let {limits} = await import('$lib/mathril/pages/practice/class11/limits.js')
            selectedGenerator = limits; 
            break;
        }
        case 18: {
            let {derivatives} = await import('$lib/mathril/pages/practice/class11/derivatives.js')
            selectedGenerator = derivatives; 
            break;
        }
        case 19: {
            let {reasoning} = await import('$lib/mathril/pages/practice/class11/reasoning.js')
            selectedGenerator = reasoning; 
            break;
        }
        case 20: {
            let {statistics} = await import('$lib/mathril/pages/practice/class11/statistics.js')
            selectedGenerator = statistics; 
            break;
        }
        case 21: {
            let {probability} = await import('$lib/mathril/pages/practice/class11/probability.js')
            selectedGenerator = probability; 
            break;
        }
    }
    return selectedGenerator;
}