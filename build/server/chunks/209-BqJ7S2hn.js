import { r as redirect } from './index-DzcLzHBX.js';

async function load({ parent, fetch, params, url }) {
  if (!(url.host === "drmithileshkumar.com" || url.host === "localhost:5173" || url.host === "localhost:4173" || url.host === "localhost:3001")) {
    redirect(301, `https://drmithileshkumar.com`);
  }
  const classn = params.classn;
  const chaptern = params.chaptern;
  let workouts = [];
  const selectedGenerator = await setGenerators(classn, chaptern);
  return {
    classn,
    chaptern,
    selectedGenerator,
    workouts: workouts.reverse()
  };
}
const setGenerators = async (classn, chaptern) => {
  let questionSetGen;
  switch (Number(classn)) {
    case 1: {
      let { setGenerator } = await import('./class1-DqEx8isJ.js');
      questionSetGen = setGenerator;
      break;
    }
    case 2: {
      let { setGenerator } = await import('./class2-CZdYYlJk.js');
      questionSetGen = setGenerator;
      break;
    }
    case 3: {
      let { setGenerator } = await import('./class3-Bd6NZnVt.js');
      questionSetGen = setGenerator;
      break;
    }
    case 4: {
      let { setGenerator } = await import('./class4-DRYHp_xN.js');
      questionSetGen = setGenerator;
      break;
    }
    case 5: {
      let { setGenerator } = await import('./class5-scN-WeX8.js');
      questionSetGen = setGenerator;
      break;
    }
    case 6: {
      let { setGenerator } = await import('./class6-Ct23ytpb.js');
      questionSetGen = setGenerator;
      break;
    }
    case 7: {
      let { setGenerator } = await import('./class7-CYpNsDZ9.js');
      questionSetGen = setGenerator;
      break;
    }
    case 8: {
      let { setGenerator } = await import('./class8-BmBnixWc.js');
      questionSetGen = setGenerator;
      break;
    }
    case 9: {
      let { setGenerator } = await import('./class9-BE6TKDZl.js');
      questionSetGen = setGenerator;
      break;
    }
    case 10: {
      let { setGenerator } = await import('./class10-B8yAL50r.js');
      questionSetGen = setGenerator;
      break;
    }
    case 11: {
      let { setGenerator } = await import('./class11-BK5U7RB3.js');
      questionSetGen = setGenerator;
      break;
    }
    case 12: {
      let { setGenerator } = await import('./class12-DB05Cual.js');
      questionSetGen = setGenerator;
      break;
    }
  }
  let selectedGenerator = await questionSetGen(chaptern);
  return selectedGenerator;
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 209;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BEZF2w3o.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/chapter[chaptern]/+page.js";
const imports = ["_app/immutable/nodes/209.Bl3ZZOrq.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/B90CZVMX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BurqNfsS.js","_app/immutable/chunks/Bb2ET71N.js","_app/immutable/chunks/ClPiHlaF.js","_app/immutable/chunks/hXgwcGuw.js","_app/immutable/chunks/HCeguDvV.js","_app/immutable/chunks/CZxZ_Ggc.js","_app/immutable/chunks/5EPmrkDF.js","_app/immutable/chunks/DvkXah-i.js","_app/immutable/chunks/Di7QKdBL.js","_app/immutable/chunks/Q0sgujtD.js","_app/immutable/chunks/BfFMFjDh.js","_app/immutable/chunks/DG54mJ5c.js","_app/immutable/chunks/Dl6Zqmzg.js","_app/immutable/chunks/B0PaYjsn.js","_app/immutable/chunks/nSDEJvlb.js","_app/immutable/chunks/Cu6yBgIM.js","_app/immutable/chunks/BpwGTcRg.js","_app/immutable/chunks/ClguPZxZ.js","_app/immutable/chunks/D38adG8O.js","_app/immutable/chunks/OhiPYEKz.js","_app/immutable/chunks/C4aTJ1o4.js","_app/immutable/chunks/CCLmXqMe.js","_app/immutable/chunks/CL3LU1u3.js","_app/immutable/chunks/CMfEu96X.js","_app/immutable/chunks/CM997ajP.js","_app/immutable/chunks/CzCYmz-Z.js","_app/immutable/chunks/BrNRrKxc.js"];
const stylesheets = ["_app/immutable/assets/Timer.CXCz-jfy.css","_app/immutable/assets/Canvas.D5QLklzO.css","_app/immutable/assets/209.BXujrMj4.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=209-BqJ7S2hn.js.map
