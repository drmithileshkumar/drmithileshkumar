import { a as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr2.js";
/* empty css                                                       */
import { p as page } from "../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../chunks/Card.js";
import "../../../../../chunks/ActionIcons.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
import { c as currentPath, n as navList } from "../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../chunks/content.js";
import { P as Pathlist } from "../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-1alsmo7{display:flex;flex-direction:column;gap:0.5em;max-width:750px;width:90%;margin:auto}h4.svelte-1alsmo7{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t// @ts-nocheck\\r\\n\\timport { typeset } from '$lib/shared/typeset';\\r\\n\\timport Link from '$lib/ui/Link.svelte';\\r\\n\\timport { page } from '$app/stores';\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport Button from '@smui/button';\\r\\n\\timport Ripple from '@smui/ripple';\\r\\n\\timport NavList from '$lib/components/NavList.svelte';\\r\\n\\timport { currentPath } from '$lib/stores';\\r\\n\\timport { darkMode, navList } from '$lib/stores';\\r\\n\\timport { contents, contentNav } from '$lib/pages/courses/algorithms/content';\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\t\\r\\n\\t$navList = contents;\\r\\n\\t$currentPath = 'Algorithms';\\r\\n\\t\\r\\n\\t// onMount(() => {\\r\\n\\t//     MathJax.typeset();\\r\\n\\t// });\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Algorithms</title>\\r\\n\\t<link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/algorithms\\" />\\r\\n\\t<meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4 style=\\"margin: 0.5em 0;\\">\\r\\n        Algorithms\\r\\n    </h4>\\r\\n\\t<Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n\\t\\t<NavList name={$navList[0].name} url={$navList[0].url} topics={$navList[0].topics} expanded />\\r\\n\\t</Card>\\r\\n\\t\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n\\tarticle {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t\\tmax-width: 750px;\\r\\n\\t\\twidth: 90%;\\r\\n        margin: auto;\\r\\n\\t}\\r\\n\\tp,\\r\\n\\tli {\\r\\n\\t\\topacity: 0.8;\\r\\n\\t}\\r\\n\\th2,\\r\\n\\th3,\\r\\n\\th4,\\r\\n\\th5 {\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t}\\r\\n\\th5 {\\r\\n\\t\\tfont-size: 1.1em;\\r\\n\\t}\\r\\n\\th6 {\\r\\n\\t\\tfont-size: 1em;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\tcolor: rgba(0, 150, 200, 1);\\r\\n\\t}\\r\\n\\tstrong {\\r\\n\\t\\tcolor: goldenrod;\\r\\n\\t\\topacity: 1;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\t.question {\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tpadding: 0.3em;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0CC,sBAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACJ,MAAM,CAAE,IACf,CAOA,iBACG,CACF,MAAM,CAAE,KAAK,CAAC,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Algorithms", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1e50dud_START -->${$$result.title = `<title>Algorithms</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/algorithms"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1e50dud_END -->`, ""} <article class="svelte-1alsmo7">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 style="margin: 0.5em 0;" class="svelte-1alsmo7" data-svelte-h="svelte-44jos0">Algorithms</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(NavList, "NavList").$$render(
          $$result,
          {
            name: $navList[0].name,
            url: $navList[0].url,
            topics: $navList[0].topics,
            expanded: true
          },
          {},
          {}
        )}`;
      }
    }
  )} </article>`;
});
export {
  Page as default
};
