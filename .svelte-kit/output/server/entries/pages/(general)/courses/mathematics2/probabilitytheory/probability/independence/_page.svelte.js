import { a as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr2.js";
import { p as page } from "../../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content5.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-1wjl3b9{display:flex;flex-direction:column;gap:0.5em}p.svelte-1wjl3b9{opacity:0.8}h4.svelte-1wjl3b9{margin:0.5em 0}h6.svelte-1wjl3b9{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1wjl3b9{color:rgb(159, 116, 7);opacity:1}.question.svelte-1wjl3b9{cursor:pointer;padding:0.3em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Independence\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .image {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/conditional\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Independent Events\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"definition\\">\\r\\n                If \\\\(P(B\\\\vert A) = P(B)\\\\), i.e. the probability of \\\\(B\\\\) occurring is not affected by the occurrence or non-occurrence of \\\\(A\\\\), then we say that \\\\(A\\\\) and \\\\(B\\\\) are <strong>independent events</strong>. \\r\\n                \\\\[P(A\\\\cap B) = P(A)P(B)\\\\]\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Definition</h6>\\r\\n            <div class=\\"definition\\">\\r\\n                We say that three events \\\\(A_1, A_2, A_3\\\\) are <strong>independent</strong> if they are pairwise independent: \\r\\n                {\`\\\\\\\\[P(A_j\\\\\\\\cap A_k) = P(A_j)P(A_k)\\\\\\\\quad j\\\\\\\\neq k\\\\\\\\]\`} where \\\\(j, k = 1, 2, 3\\\\) and \\\\[P(A_1\\\\cap A_2\\\\cap A_3) = P(A_1)P(A_2)P(A_3)\\\\]\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h4>Questions</h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                <p>Give five examples when two events are independent and when they are not independent.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAM,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb,CAIA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}`
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
  set_store_value(currentPath, $currentPath = "Independence", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-3do1wq_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/probability/conditional"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-3do1wq_END -->`, ""} <article class="svelte-1wjl3b9">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1wjl3b9" data-svelte-h="svelte-1o0mgzr">Independent Events</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="definition" data-svelte-h="svelte-1nq0ot9">If \\(P(B\\vert A) = P(B)\\), i.e. the probability of \\(B\\) occurring is not affected by the occurrence or non-occurrence of \\(A\\), then we say that \\(A\\) and \\(B\\) are <strong class="svelte-1wjl3b9">independent events</strong>. 
                \\[P(A\\cap B) = P(A)P(B)\\]</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1wjl3b9" data-svelte-h="svelte-1dqnse3">Definition</h6> <div class="definition">We say that three events \\(A_1, A_2, A_3\\) are <strong class="svelte-1wjl3b9" data-svelte-h="svelte-1oeeis">independent</strong> if they are pairwise independent: 
                ${escape(`\\[P(A_j\\cap A_k) = P(A_j)P(A_k)\\quad j\\neq k\\]`)} where \\(j, k = 1, 2, 3\\) and \\[P(A_1\\cap A_2\\cap A_3) = P(A_1)P(A_2)P(A_3)\\]</div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1wjl3b9" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1wjl3b9" data-svelte-h="svelte-1ng37hx"><p class="svelte-1wjl3b9">Give five examples when two events are independent and when they are not independent.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
