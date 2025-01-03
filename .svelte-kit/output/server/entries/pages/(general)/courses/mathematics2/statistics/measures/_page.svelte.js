import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr2.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content4.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-1hrf3r5{display:flex;flex-direction:column;gap:0.5em}p.svelte-1hrf3r5{opacity:0.8}h4.svelte-1hrf3r5,h5.svelte-1hrf3r5{margin:0.5em 0}h5.svelte-1hrf3r5{font-size:1.8em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Measures of Central Tendency\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.8em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/measures\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        BASICS OF STATISTICS \\r\\n    </h4>\\r\\n    <h5>Measures of Central Tendency</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>\\r\\n                Given data, measures of central tendency give an indication of values around which the data is centered around. The common measures are average, most frequent values or middle value. These are easy to calculate and used to get a quick idea about the nature of data.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAM,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf"}`
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
  set_store_value(currentPath, $currentPath = "Measures of Central Tendency", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1j5flhm_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/measures"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1j5flhm_END -->`, ""} <article class="svelte-1hrf3r5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1hrf3r5" data-svelte-h="svelte-191m8w3">BASICS OF STATISTICS</h4> <h5 class="svelte-1hrf3r5" data-svelte-h="svelte-7htjs7">Measures of Central Tendency</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-1hrf3r5" data-svelte-h="svelte-z16c8j">Given data, measures of central tendency give an indication of values around which the data is centered around. The common measures are average, most frequent values or middle value. These are easy to calculate and used to get a quick idea about the nature of data.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
