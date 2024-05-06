import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content3-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './index2-B3zlhmO5.js';

const css = {
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}p.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Tests of Hypothesis and Significance\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/inference\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Tests of hypothesis and significance\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <div use:typeset>\\r\\n                <p>\\r\\n                    If on the supposition that a particular hypothesis is true we find that results observed in a random sample differ\\r\\n                    markedly from those expected under the hypothesis on the basis of pure chance using sampling theory, we would\\r\\n                    say that the observed differences are significant and we would be inclined to reject the hypothesis (or at least not\\r\\n                    accept it on the basis of the evidence obtained). For example, if 20 tosses of a coin yield 16 heads, we would be\\r\\n                    inclined to reject the hypothesis that the coin is fair, although it is conceivable that we might be wrong.\\r\\n                </p>\\r\\n                <p>\\r\\n                    Procedures that enable us to decide whether to accept or reject hypotheses or to determine whether observed sam\\r\\n                    ples differ significantly from expected results are called tests of hypotheses, tests of significance, or decision rules.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAM,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB"}`
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
  set_store_value(currentPath, $currentPath = "Tests of Hypothesis and Significance", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1qokpsc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1qokpsc_END -->`, ""} <article class="svelte-1yfxw94">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-1yjx8gg">Tests of hypothesis and significance</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-11axn9i"><p class="svelte-1yfxw94">If on the supposition that a particular hypothesis is true we find that results observed in a random sample differ
                    markedly from those expected under the hypothesis on the basis of pure chance using sampling theory, we would
                    say that the observed differences are significant and we would be inclined to reject the hypothesis (or at least not
                    accept it on the basis of the evidence obtained). For example, if 20 tosses of a coin yield 16 heads, we would be
                    inclined to reject the hypothesis that the coin is fair, although it is conceivable that we might be wrong.</p> <p class="svelte-1yfxw94">Procedures that enable us to decide whether to accept or reject hypotheses or to determine whether observed sam
                    ples differ significantly from expected results are called tests of hypotheses, tests of significance, or decision rules.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-60O-FX5W.js.map
