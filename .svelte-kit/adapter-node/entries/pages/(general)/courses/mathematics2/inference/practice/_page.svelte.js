import { s as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-13cxe06.svelte-13cxe06{display:flex;flex-direction:column;gap:0.5em}li.svelte-13cxe06.svelte-13cxe06{opacity:0.8}h4.svelte-13cxe06.svelte-13cxe06,h5.svelte-13cxe06.svelte-13cxe06{margin:0.5em 0}h5.svelte-13cxe06.svelte-13cxe06{font-size:1.1em}ol.svelte-13cxe06 li.svelte-13cxe06::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-13cxe06 li.svelte-13cxe06{padding:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Practice\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    .image {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    ol li::marker {\\r\\n        font-size: 1.2em;\\r\\n        color: red;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n    ol li {\\r\\n        padding: 0.5em 0;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/inference/practice\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Practice problems (Inference and Time series analysis)\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Statistical Significance</h5>\\r\\n            <ol>\\r\\n                <li>What is population?</li>\\r\\n                <li>What is sample and sampling?</li>\\r\\n                <li>What is statistical inference? Explain using an example.</li>\\r\\n                <li>What is a statistical decision? Explain using an example.</li>\\r\\n                <li>What is a statistical hypothesis? Explain using an example.</li>\\r\\n                <li>What are null and alternative hypotheses? Explain using an example.</li>\\r\\n                <li>When can we reject a hypothesis?</li>\\r\\n                <li>What are type I and type II errors? Explain using an example.</li>\\r\\n                <li>What is level of significance? What do significance levels 0.01 and 0.05 mean?</li>\\r\\n                <li>Assuming normal distribution, explain region of no significance, and critical region.</li>\\r\\n                <li>Calculate mean and standard deviation of the number of heads is 100 tosses when the probability of getting heads is (1) 0.5 (2) 0.7 (3) 0.9</li>\\r\\n                <li>Calculate the z variable when the number of heads is (1) 40 (2) 50 (3) 60 assuming that the mean is 50 and standard deviation is 5.</li>\\r\\n                <li>Calculate the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin assuming (a) binomial distribution (show the expression only) (b) normal distribution approximation.</li>\\r\\n                <li>To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.\\r\\n                    <ul>\\r\\n                        <li>Find the probability of rejecting the hypothesis when it is actually correct.</li>\\r\\n                        <li>Draw the graph.</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li>Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of siginificance of (a) 0.05, (b) 0.01 is used.</li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Analysis of Variance</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Time series analysis</h5>\\r\\n            <ol>\\r\\n                \\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>"],"names":[],"mappings":"AAeI,qCAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,gCAAG,CACF,OAAO,CAAE,GACb,CACQ,gCAAE,CAAE,gCAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gCAAG,CACC,SAAS,CAAE,KACf,CAsBA,iBAAE,CAAC,iBAAE,QAAS,CACV,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,IACjB,CACA,iBAAE,CAAC,iBAAG,CACF,OAAO,CAAE,KAAK,CAAC,CACnB"}`
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
  set_store_value(currentPath, $currentPath = "Practice", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-4r945m_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/inference/practice"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-4r945m_END -->`, ""} <article class="svelte-13cxe06">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-13cxe06" data-svelte-h="svelte-1dma61i">Practice problems (Inference and Time series analysis)</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-13cxe06" data-svelte-h="svelte-rc14fs">Statistical Significance</h5> <ol class="svelte-13cxe06" data-svelte-h="svelte-3ji9qw"><li class="svelte-13cxe06">What is population?</li> <li class="svelte-13cxe06">What is sample and sampling?</li> <li class="svelte-13cxe06">What is statistical inference? Explain using an example.</li> <li class="svelte-13cxe06">What is a statistical decision? Explain using an example.</li> <li class="svelte-13cxe06">What is a statistical hypothesis? Explain using an example.</li> <li class="svelte-13cxe06">What are null and alternative hypotheses? Explain using an example.</li> <li class="svelte-13cxe06">When can we reject a hypothesis?</li> <li class="svelte-13cxe06">What are type I and type II errors? Explain using an example.</li> <li class="svelte-13cxe06">What is level of significance? What do significance levels 0.01 and 0.05 mean?</li> <li class="svelte-13cxe06">Assuming normal distribution, explain region of no significance, and critical region.</li> <li class="svelte-13cxe06">Calculate mean and standard deviation of the number of heads is 100 tosses when the probability of getting heads is (1) 0.5 (2) 0.7 (3) 0.9</li> <li class="svelte-13cxe06">Calculate the z variable when the number of heads is (1) 40 (2) 50 (3) 60 assuming that the mean is 50 and standard deviation is 5.</li> <li class="svelte-13cxe06">Calculate the probability of getting between 40 and 60 heads inclusive in 100 tosses of a fair coin assuming (a) binomial distribution (show the expression only) (b) normal distribution approximation.</li> <li class="svelte-13cxe06">To test the hypothesis that a coin is fair, the following decision rules are adopted: (1) Accept the hypothesis if the number of heads in a single sample of 100 tosses is between 40 and 60 inclusive, (2) reject the hypothesis otherwise.
                    <ul><li class="svelte-13cxe06">Find the probability of rejecting the hypothesis when it is actually correct.</li> <li class="svelte-13cxe06">Draw the graph.</li></ul></li> <li class="svelte-13cxe06">Design a decision rule to test the hypothesis that a coin is fair if a sample of 64 tosses of the coin is taken and if a level of siginificance of (a) 0.05, (b) 0.01 is used.</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-13cxe06" data-svelte-h="svelte-e3yfse">Analysis of Variance</h5> <ol class="svelte-13cxe06" data-svelte-h="svelte-1nbcti3"><li class="svelte-13cxe06"></li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-13cxe06" data-svelte-h="svelte-1ahvmfw">Time series analysis</h5> <ol data-svelte-h="svelte-juvsg"></ol>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
