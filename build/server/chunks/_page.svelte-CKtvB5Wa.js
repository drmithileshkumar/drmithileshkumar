import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import { p as page } from './stores3-BrNJmxTp.js';
import { C as Card } from './Card-jWUNhZC7.js';
import { C as Content } from './ActionIcons-Co7bojT-.js';
import './Subheader-BV9F6O0P.js';
import './client-k3u4ChD_.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Dd7WnHpz.js';
import { c as contentNav, a as contents } from './content2-DsBWFJ21.js';
import { P as Pathlist } from './Pathlist-xYGsVQiJ.js';
import { C as CourseNavigation } from './CourseNavigation-pnGRCnsg.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './exports-kR70XCWV.js';
import './index2-BZnI6xu7.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internetlab/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n    import CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    // console.log($page.url)\\r\\n    let pathComponents = $page.url.pathname.split('/');\\r\\n    let pathUrls = pathComponents.map((u, index) => {\\r\\n        let path = $page.url.origin;\\r\\n        for(let i = 0; i <= index; i++) {\\r\\n            path += pathComponents[i] + '/';\\r\\n        }\\r\\n        return path;\\r\\n    })\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Resume\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies Lab</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/resume\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h2>\\r\\n        Resume\\r\\n    </h2>\\r\\n\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\"><strong>Task</strong>: Create an HTML page for your resume.</div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <p>Steps:</p>\\r\\n            <ol>\\r\\n                <li>Create an outline on paper.</li>\\r\\n                <li>Divide the page into sections</li>\\r\\n                <li>Format each section</li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAiCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACA,gBAAe,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CASA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CAIA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Resume", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1exxg1n_START -->${$$result.title = `<title>Internet Technologies Lab</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/resume"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1exxg1n_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h2 class="svelte-n59hwk" data-svelte-h="svelte-d7queb">Resume</h2> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-1oo52pl"><strong class="svelte-n59hwk">Task</strong>: Create an HTML page for your resume.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-n59hwk" data-svelte-h="svelte-1drv31l">Steps:</p> <ol data-svelte-h="svelte-hrmas7"><li class="svelte-n59hwk">Create an outline on paper.</li> <li class="svelte-n59hwk">Divide the page into sections</li> <li class="svelte-n59hwk">Format each section</li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CKtvB5Wa.js.map
