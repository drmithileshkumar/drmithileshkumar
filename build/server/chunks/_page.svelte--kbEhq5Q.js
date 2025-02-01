import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { c as currentPath, d as darkMode, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content5-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './client-k3u4ChD_.js';
import './exports-kR70XCWV.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94,h5.svelte-1yfxw94{margin:0.5em 0}h5.svelte-1yfxw94{font-size:1.1em}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}.question.svelte-1yfxw94{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Level of Significance\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/inference\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Level of Significance\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the <strong>level of significance</strong> of the test. This probability is often specified before any samples are drawn, so\\r\\n                    that results obtained will not influence our decision.\\r\\n                </div>\\r\\n                <div>\\r\\n                    In practice a level of significance of 0.05 or 0.01 is customary, although other values are used. If for example\\r\\n                    a 0.05 or 5% level of significance is chosen in designing a test of a hypothesis, then there are about 5 chances in\\r\\n                    100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true,\\r\\n                    we are about 95% confident that we would make the right decision. In such cases we say that the hypothesis has\\r\\n                    been rejected at a 0.05 level of significance, which means that we could be wrong with probability 0.05.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h5>Example</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Find the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin. \\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.\\r\\n                <ol>\\r\\n                    <li> Find the probability of rejecting the hypothesis when it is actually correct.</li>\\r\\n                    <li>Draw graph.</li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of significance of (a) 0.05, (b) 0.01 is used.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CAMA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb,CAIA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Level of Significance", $currentPath);
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-5n7dzu">Level of Significance</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-17gethh"><div class="definition">In testing a given hypothesis, the maximum probability with which we would be willing to risk a Type I error is called the <strong class="svelte-1yfxw94">level of significance</strong> of the test. This probability is often specified before any samples are drawn, so
                    that results obtained will not influence our decision.</div> <div>In practice a level of significance of 0.05 or 0.01 is customary, although other values are used. If for example
                    a 0.05 or 5% level of significance is chosen in designing a test of a hypothesis, then there are about 5 chances in
                    100 that we would reject the hypothesis when it should be accepted, i.e., whenever the null hypotheses is true,
                    we are about 95% confident that we would make the right decision. In such cases we say that the hypothesis has
                    been rejected at a 0.05 level of significance, which means that we could be wrong with probability 0.05.</div></div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-1yfxw94" data-svelte-h="svelte-vluia4">Example</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-34apox">Find the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-12o2u9o">To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                <ol><li class="svelte-1yfxw94">Find the probability of rejecting the hypothesis when it is actually correct.</li> <li class="svelte-1yfxw94">Draw graph.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1yfxw94" data-svelte-h="svelte-1cwhwcj">Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of significance of (a) 0.05, (b) 0.01 is used.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte--kbEhq5Q.js.map
