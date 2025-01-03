import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, i as each } from './ssr2-q3O0l93f.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import './client-k3u4ChD_.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { s as seoInfo, a as chapters, c as classes, b as classChapters, i as icons } from './stores7-CB_WUpkJ.js';
import { s as slowest, f as fastest, w as workoutTimes, a as workoutClass, c as correctN, b as attemptedN, d as attempted } from './practiceStore-DhTLyf2T.js';
import { c as currentPath, n as navList } from './stores5-DsHYdTD6.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-19xj9nb{display:flex;flex-direction:column;gap:0.5em}.classes.svelte-19xj9nb{display:flex;flex-direction:row;flex-wrap:wrap;margin:auto;gap:1em;padding:0.5em;align-items:center;justify-content:center}.myclass.svelte-19xj9nb{width:160px;height:60px;border:1px solid rgba(0, 175, 255, 1);padding:0.5em 0.7em;display:grid;grid-template-columns:40px 100px;align-items:center;border-radius:10px;font-family:roboto;font-size:0.8em;gap:0.5em;cursor:pointer}.myclass.svelte-19xj9nb:hover{border:2px solid rgba(0, 175, 255, 1);background-image:linear-gradient(to right, magenta, teal, tomato);font-weight:600;color:white}.icon.svelte-19xj9nb{width:35px;height:35px}.title.svelte-19xj9nb{line-height:1.3}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, {Content, Actions} from '@smui/card';\\r\\n    import { ripple } from \\"$lib/ui/ripple\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { classes, chapters, icons, classChapters, seoInfo } from \\"$lib/mathril/pages/practice/stores\\";\\r\\n    import { attempted, attemptedN, correctN, workoutClass, workoutChapter, workoutTimes, fastest, slowest } from '$lib/mathril/utils/practiceproblem/practiceStore';\\r\\n\\r\\n    import { currentPath, navList } from '$lib/mathril/stores';\\r\\n    $: $currentPath = 'Class ' + $page.params.classn;\\r\\n    $: $navList = classChapters[$currentPath]\\r\\n    export let data;\\r\\n    \\r\\n    let W;\\r\\n\\r\\n    const goback = () => {\\r\\n        goto('/mathril')\\r\\n    }\\r\\n    const startpractice = (i) => {\\r\\n        // console.log('Starting...')\\r\\n        $attempted = false;\\r\\n        $attemptedN = 0;\\r\\n        $correctN = 0;\\r\\n        $workoutClass = data.classn;\\r\\n        $workoutTimes = 0;\\r\\n        $fastest = 10000;\\r\\n        $slowest = 0;\\r\\n        goto(\`/mathril/class\${data.classn}/chapter\${i}\`)\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>{seoInfo[$currentPath].title}</title>\\r\\n    <link rel=\\"canonical\\" href={\`https://drmithileshkumar.com/mathril/class\${$page.params.classn}\`} />\\r\\n    <meta name=\\"description\\" content={seoInfo[$currentPath].description} />\\r\\n    <meta name=\\"keywords\\" content={seoInfo[$currentPath].keywords} />\\r\\n</svelte:head>\\r\\n\\r\\n<article class=\\"container\\">\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h2 class=\\"mdc-typography--headline5\\" style=\\"margin:0 0 1em 0\\">Select Chapter</h2>\\r\\n            <section class=\\"classes\\">\\r\\n                {#each chapters[classes[data.classn - 1]] as chapter, i}\\r\\n                    <!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n                    <!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n                    <div class=\\"myclass\\" on:click={() => startpractice(i + 1)} use:ripple> \\r\\n                        <span class=\\"icon\\">\\r\\n                            <img width=\\"100%\\" height=\\"100%\\" src={\`/mathril/icons/\${icons[classes[data.classn - 1]][chapter]}\`} alt=\\"\\" >\\r\\n                        </span> \\r\\n                        <span class=\\"title\\">\\r\\n                            {chapter}\\r\\n                        </span> \\r\\n                    </div>\\r\\n                {/each}\\r\\n            </section>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    .classes {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        margin: auto;\\r\\n        gap: 1em;\\r\\n        padding: 0.5em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        /* background: radial-gradient(rgb(35 100 120), black); */\\r\\n    }\\r\\n    .myclass {\\r\\n        width: 160px;\\r\\n        height: 60px;\\r\\n        border: 1px solid rgba(0, 175, 255, 1);\\r\\n        padding: 0.5em 0.7em;\\r\\n        display: grid;\\r\\n        grid-template-columns: 40px 100px;\\r\\n        align-items: center;\\r\\n        border-radius: 10px;\\r\\n        font-family: roboto;\\r\\n        font-size: 0.8em;\\r\\n        gap: 0.5em;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .myclass:hover {\\r\\n        border: 2px solid rgba(0, 175, 255, 1);\\r\\n        background-image: linear-gradient(to right, magenta, teal, tomato);\\r\\n        font-weight: 600;\\r\\n        color: white;\\r\\n    }\\r\\n    .icon {\\r\\n        width: 35px;\\r\\n        height: 35px;\\r\\n    }\\r\\n    .title {\\r\\n        line-height: 1.3;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgEI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR,CACA,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAErB,CACA,uBAAS,CACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACtC,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,KAAK,CACjC,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,KAAK,CAChB,GAAG,CAAE,KAAK,CACV,MAAM,CAAE,OACZ,CACA,uBAAQ,MAAO,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACtC,gBAAgB,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAClE,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,KACX,CACA,oBAAM,CACF,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACZ,CACA,qBAAO,CACH,WAAW,CAAE,GACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slowest;
  let $$unsubscribe_fastest;
  let $$unsubscribe_workoutTimes;
  let $$unsubscribe_workoutClass;
  let $$unsubscribe_correctN;
  let $$unsubscribe_attemptedN;
  let $$unsubscribe_attempted;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_slowest = subscribe(slowest, (value) => value);
  $$unsubscribe_fastest = subscribe(fastest, (value) => value);
  $$unsubscribe_workoutTimes = subscribe(workoutTimes, (value) => value);
  $$unsubscribe_workoutClass = subscribe(workoutClass, (value) => value);
  $$unsubscribe_correctN = subscribe(correctN, (value) => value);
  $$unsubscribe_attemptedN = subscribe(attemptedN, (value) => value);
  $$unsubscribe_attempted = subscribe(attempted, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  set_store_value(currentPath, $currentPath = "Class " + $page.params.classn, $currentPath);
  set_store_value(navList, $navList = classChapters[$currentPath], $navList);
  $$unsubscribe_slowest();
  $$unsubscribe_fastest();
  $$unsubscribe_workoutTimes();
  $$unsubscribe_workoutClass();
  $$unsubscribe_correctN();
  $$unsubscribe_attemptedN();
  $$unsubscribe_attempted();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wb75z2_START -->${$$result.title = `<title>${escape(seoInfo[$currentPath].title)}</title>`, ""}<link rel="canonical"${add_attribute("href", `https://drmithileshkumar.com/mathril/class${$page.params.classn}`, 0)}><meta name="description"${add_attribute("content", seoInfo[$currentPath].description, 0)}><meta name="keywords"${add_attribute("content", seoInfo[$currentPath].keywords, 0)}><!-- HEAD_svelte-1wb75z2_END -->`, ""} <article class="container svelte-19xj9nb">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h2 class="mdc-typography--headline5" style="margin:0 0 1em 0" data-svelte-h="svelte-apm4sw">Select Chapter</h2> <section class="classes svelte-19xj9nb">${each(chapters[classes[data.classn - 1]], (chapter, i) => {
            return `  <div class="myclass svelte-19xj9nb"><span class="icon svelte-19xj9nb"><img width="100%" height="100%"${add_attribute("src", `/mathril/icons/${icons[classes[data.classn - 1]][chapter]}`, 0)} alt=""></span> <span class="title svelte-19xj9nb">${escape(chapter)}</span> </div>`;
          })}</section>`;
        }
      })}`;
    }
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CdeNeXIQ.js.map
