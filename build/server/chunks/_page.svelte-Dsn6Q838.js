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
  code: "article.svelte-1yfxw94{display:flex;flex-direction:column;gap:0.5em}li.svelte-1yfxw94{opacity:0.8}h4.svelte-1yfxw94,h5.svelte-1yfxw94{margin:0.5em 0}h5.svelte-1yfxw94{font-size:1.1em}strong.svelte-1yfxw94{color:rgb(159, 116, 7);opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from '$app/stores';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Hypotheses\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/inference\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Hypotheses\\r\\n    </h4>\\r\\n    \\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Statistical Decisions</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    <strong>Statistical decision</strong> is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Statistical Hypotheses</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    <strong>Statistical hypothesses</strong> are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5. \\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Null Hypotheses</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    <strong>Null hypothesis</strong> is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of \\"no effect\\" or \\"no difference\\" and serves as the default assumption to be tested in hypothesis testing.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Alternative Hypotheses</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"definition\\">\\r\\n                    Any hypothesis that differs from a given null hypothesis is called an <strong>alternative hypothesis</strong>.\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5>Examples</h5>\\r\\n            <div use:typeset>\\r\\n                <div class=\\"examples\\">\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> Coin is fair.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> Coin is not fair.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> The new drug has no effect on reducing cholesterol levels.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> The new drug reduces cholesterol levels.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in test scores between students who use a traditional teaching method and those who use a new teaching method.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> Students who use the new teaching method perform better on tests than those who use the traditional method.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in anxiety levels between two therapy groups.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> One therapy group shows lower anxiety levels than the other.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in average income between two demographic groups.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> One demographic group has a higher average income than the other.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no correlation between air pollution levels and asthma rates.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> Higher air pollution levels are associated with higher asthma rates.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in political affiliation between two age groups.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> Political affiliation differs between the two age groups.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> The mean velocity of a particle is equal to a certain constant.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> The mean velocity of the particle is different from the constant.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in brand preference between two advertising campaigns.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> One advertising campaign leads to higher brand preference than the other.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <ul>\\r\\n                                <li><strong>Null Hypothesis:</strong> There is no difference in performance between athletes who use a certain training regimen and those who do not.</li>\\r\\n                                <li><strong>Alternative Hypothesis:</strong> Athletes who use the training regimen perform better than those who do not.</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        \\r\\n                    </ol>\\r\\n                </div>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CAMA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Hypotheses", $currentPath);
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
  )} <h4 class="svelte-1yfxw94" data-svelte-h="svelte-1t3dolc">Hypotheses</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1kdx4kq">Statistical Decisions</h5> <div data-svelte-h="svelte-1hg2kp3"><div class="definition"><strong class="svelte-1yfxw94">Statistical decision</strong> is decision made about a population based on a sample drawn from the population. For example, deciding whether a coin is fair based on tossing it a few times. Ideally it would require infinitely many tosses.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-rmovvn">Statistical Hypotheses</h5> <div data-svelte-h="svelte-1ooud6v"><div class="definition"><strong class="svelte-1yfxw94">Statistical hypothesses</strong> are hypotheses ( statements ) about the population that can be tested using tools from statistics and probability theory. For example, checking whether a given coin is biased or not, we can make a hypothesis that the coin is fair, i.e. the probability of getting a head is 0.5.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1fwbpbd">Null Hypotheses</h5> <div data-svelte-h="svelte-kczt9k"><div class="definition"><strong class="svelte-1yfxw94">Null hypothesis</strong> is a statement that there is no significant difference, effect, or relationship between variables in a population. It is often formulated as a statement of &quot;no effect&quot; or &quot;no difference&quot; and serves as the default assumption to be tested in hypothesis testing.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-ro7dbr">Alternative Hypotheses</h5> <div data-svelte-h="svelte-y99r95"><div class="definition">Any hypothesis that differs from a given null hypothesis is called an <strong class="svelte-1yfxw94">alternative hypothesis</strong>.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-1yfxw94" data-svelte-h="svelte-1n2163b">Examples</h5> <div data-svelte-h="svelte-1dppuwy"><div class="examples"><ol><li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> Coin is fair.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Coin is not fair.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> The new drug has no effect on reducing cholesterol levels.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> The new drug reduces cholesterol levels.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in test scores between students who use a traditional teaching method and those who use a new teaching method.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Students who use the new teaching method perform better on tests than those who use the traditional method.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in anxiety levels between two therapy groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One therapy group shows lower anxiety levels than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in average income between two demographic groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One demographic group has a higher average income than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no correlation between air pollution levels and asthma rates.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Higher air pollution levels are associated with higher asthma rates.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in political affiliation between two age groups.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Political affiliation differs between the two age groups.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> The mean velocity of a particle is equal to a certain constant.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> The mean velocity of the particle is different from the constant.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in brand preference between two advertising campaigns.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> One advertising campaign leads to higher brand preference than the other.</li></ul></li> <li class="svelte-1yfxw94"><ul><li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Null Hypothesis:</strong> There is no difference in performance between athletes who use a certain training regimen and those who do not.</li> <li class="svelte-1yfxw94"><strong class="svelte-1yfxw94">Alternative Hypothesis:</strong> Athletes who use the training regimen perform better than those who do not.</li></ul></li></ol></div></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dsn6Q838.js.map
