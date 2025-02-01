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

const index = 206;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DznBhxXr.js')).default;
const universal_id = "src/routes/(mathril)/mathril/class[classn]/chapter[chaptern]/+page.js";
const imports = ["_app/immutable/nodes/206.DA7k_ni4.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.HFrwntH8.js","_app/immutable/chunks/index.Bj97moK3.js","_app/immutable/chunks/each.CcR1ywbG.js","_app/immutable/chunks/Card.DDS7kgVn.js","_app/immutable/chunks/useActions.HCeguDvV.js","_app/immutable/chunks/ActionIcons.DHulHrNV.js","_app/immutable/chunks/classAdderBuilder.CUeXhiK0.js","_app/immutable/chunks/SmuiElement.BzYDArcA.js","_app/immutable/chunks/stores.BL2AkmJ6.js","_app/immutable/chunks/entry.CqbLy5gL.js","_app/immutable/chunks/index.ChKAqM74.js","_app/immutable/chunks/practiceStore.CYlpMh8G.js","_app/immutable/chunks/stores.Dguiw17o.js","_app/immutable/chunks/Timer.DiavBGpp.js","_app/immutable/chunks/typeset.nSDEJvlb.js","_app/immutable/chunks/Ripple.CDEVC0wK.js","_app/immutable/chunks/ponyfill.BpwGTcRg.js","_app/immutable/chunks/RichActions.C3F3IQzb.js","_app/immutable/chunks/dispatch.D38adG8O.js","_app/immutable/chunks/prefixFilter.OhiPYEKz.js","_app/immutable/chunks/animationframe.C4aTJ1o4.js","_app/immutable/chunks/util.CCLmXqMe.js","_app/immutable/chunks/keyboard.CL3LU1u3.js","_app/immutable/chunks/Canvas.DAqHCKHx.js","_app/immutable/chunks/ripple.CM997ajP.js","_app/immutable/chunks/typeset.CzCYmz-Z.js","_app/immutable/chunks/stores.C3lG_XDx.js"];
const stylesheets = ["_app/immutable/assets/206.BXujrMj4.css","_app/immutable/assets/Timer.CXCz-jfy.css","_app/immutable/assets/Canvas.D5QLklzO.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=206-CnPfSh2o.js.map
