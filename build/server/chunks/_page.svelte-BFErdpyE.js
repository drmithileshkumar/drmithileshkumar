import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import { c as currentPath, d as darkMode, n as navList } from './stores-Dd7WnHpz.js';
import { c as contentNav, a as contents } from './content4-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1yfxw94,h5.svelte-1yfxw94{margin:0.5em 0}h5.svelte-1yfxw94{font-size:1.1em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Type I and Type II errors\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/inference/types\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Type I and Type II errors\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Type I error</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    If we reject a hypothesis when it happens to be true, we say that a Type I error has been made.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Type II error</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    If we accept a hypothesis when it happens to be false, we say that a Type II error has been made.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $darkMode, $$unsubscribe_darkMode;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  set_store_value(currentPath, $currentPath = "Type I and Type II errors", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-kqle6u_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference/types"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-kqle6u_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-1q1xv9">Type I and Type II errors</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-8nd99x">Type I error</h5> <div data-svelte-h="svelte-12xq3ii"><div class="definition">If we reject a hypothesis when it happens to be true, we say that a Type I error has been made.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-16315d2">Type II error</h5> <div data-svelte-h="svelte-1ya95xh"><div class="definition">If we accept a hypothesis when it happens to be false, we say that a Type II error has been made.</div></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BFErdpyE.js.map
