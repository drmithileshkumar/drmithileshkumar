import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-BJ7xikju.js';
import { c as currentPath, d as darkMode, n as navList } from './stores-Bb_1fHB9.js';
import { c as contentNav, a as contents } from './content4-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-BHOBzrf2.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Correlation\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/correlation\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        BASICS OF STATISTICS \\r\\n    </h4>\\r\\n    <h5>Correlation</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n                <p>\\r\\n                    Correlation is a fundamental concept in statistics that measures the degree and direction of the relationship between two or more variables. It allows us to understand how changes in one variable are associated with changes in another, providing valuable insights into patterns and dependencies in data.\\r\\n                </p>\\r\\n                <p>\\r\\n                    Most famous example of correlation is the supply and demand in determining prices of commodities. Demand of electricity and weather conditions are correlated as well.\\r\\n                </p>\\r\\n                <p>\\r\\n                    Correlation does not imply causation; it simply quantifies the strength and direction of the association between variables.\\r\\n                </p>\\r\\n                <p>\\r\\n                    Although correlation is about studying relationship between any number of variables, we'll focus on the two variable case. Next we introduce bivariate data.\\r\\n                </p>\\r\\n           \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf"}`
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
  set_store_value(currentPath, $currentPath = "Correlation", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1eq0h1l_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1eq0h1l_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-191m8w3">BASICS OF STATISTICS</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1dfb4du">Correlation</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-1evgxc">Correlation is a fundamental concept in statistics that measures the degree and direction of the relationship between two or more variables. It allows us to understand how changes in one variable are associated with changes in another, providing valuable insights into patterns and dependencies in data.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-189v9tb">Most famous example of correlation is the supply and demand in determining prices of commodities. Demand of electricity and weather conditions are correlated as well.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-hf4yk5">Correlation does not imply causation; it simply quantifies the strength and direction of the association between variables.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-5r02jz">Although correlation is about studying relationship between any number of variables, we&#39;ll focus on the two variable case. Next we introduce bivariate data.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-p5B6wZqr.js.map
