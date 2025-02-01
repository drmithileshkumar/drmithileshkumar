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

const index = 203;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DznBhxXr.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/chapter[chaptern]/+page.js";
const imports = ["_app/immutable/nodes/203.CHwkGqbn.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.TT61c9Gi.js","_app/immutable/chunks/index.Dipn8n_a.js","_app/immutable/chunks/each.Dw7b1pvy.js","_app/immutable/chunks/Card.D-OaqPor.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DRhTvYcM.js","_app/immutable/chunks/classAdderBuilder.uY3NaTMq.js","_app/immutable/chunks/SmuiElement.Ds45l3Bo.js","_app/immutable/chunks/stores.Dn9zVH1s.js","_app/immutable/chunks/entry.aqSikbG0.js","_app/immutable/chunks/index.3B1h_P5q.js","_app/immutable/chunks/practiceStore.BcpjbKe2.js","_app/immutable/chunks/stores.CURAoadi.js","_app/immutable/chunks/Timer.C6mEGMAi.js","_app/immutable/chunks/typeset.nSDEJvlb.js","_app/immutable/chunks/Ripple.8rjYrLoK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/RichActions.Wu2n49Bx.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/util.CCLmXqMe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Canvas.CF1UpQjr.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.DurElMDI.js"];
const stylesheets = ["_app/immutable/assets/203.BXujrMj4.css","_app/immutable/assets/Timer.CXCz-jfy.css","_app/immutable/assets/Canvas.D5QLklzO.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=203-wz3k9n5w.js.map
