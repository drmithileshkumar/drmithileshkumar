//@ts-nocheck
import { redirect } from '@sveltejs/kit';

export async function load({ parent, fetch, params, url }) {
    if (!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:4173' || url.host === 'localhost:3001')) {
        redirect(301, `https://drmithileshkumar.com`);
    }
    const classn = params.classn
    const chaptern = params.chaptern;
    
    let workouts = [];
    
    // console.log(classn, chaptern);
    const selectedGenerator = await setGenerators(classn, chaptern)
    return {
        classn, chaptern, selectedGenerator, workouts: workouts.reverse()
    }
}

const setGenerators = async (classn, chaptern) => {
    // console.log(classn, chaptern)
    let questionSetGen;
    switch(Number(classn)) {
        case 1: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class1.js');
            questionSetGen = setGenerator;
            break;
        }
        case 2: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class2.js');
            questionSetGen = setGenerator;
            break;
        }
        case 3: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class3.js');
            questionSetGen = setGenerator;
            break;
        }
        case 4: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class4.js');
            questionSetGen = setGenerator;
            break;
        }
        case 5: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class5.js');
            questionSetGen = setGenerator;
            break;
        }
        case 6: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class6.js');
            questionSetGen = setGenerator;
            break;
        }
        case 7: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class7.js');
            questionSetGen = setGenerator;
            break;
        }
        case 8: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class8.js');
            questionSetGen = setGenerator;
            break;
        }
        case 9: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class9.js');
            questionSetGen = setGenerator;
            break;
        }
        case 10: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class10.js');
            questionSetGen = setGenerator;
            break;
        }
        case 11: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class11.js');
            questionSetGen = setGenerator;
            break;
        }
        case 12: {
            let {setGenerator} = await import('$lib/mathril/pages/imports/class12.js');
            questionSetGen = setGenerator;
            break;
        }
    }
    let selectedGenerator = await questionSetGen(chaptern);
    return selectedGenerator;
}
