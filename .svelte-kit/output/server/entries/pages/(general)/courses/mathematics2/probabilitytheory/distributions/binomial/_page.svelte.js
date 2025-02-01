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
  code: "article.svelte-1u2otn3{display:flex;flex-direction:column;gap:0.7em}p.svelte-1u2otn3,li.svelte-1u2otn3{opacity:0.8}h4.svelte-1u2otn3{margin:0.7em 0}h6.svelte-1u2otn3{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1u2otn3{color:rgb(159, 116, 7);opacity:1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Binomial Distribution\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.7em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.7em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.7em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    table {\\r\\n        border-collapse: collapse;\\r\\n        margin: auto;\\r\\n        margin-top: 1em;\\r\\n        margin-bottom: 1em;\\r\\n    }\\r\\n    td {\\r\\n        border: 1px solid;\\r\\n        text-align: center;\\r\\n        padding: 0.7em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/binomial\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        BINOMIAL DISTRIBUTION\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Trials</h6>\\r\\n            <div>\\r\\n                <div class=\\"definition\\">\\r\\n                    Each repetition of an experiment is called a <strong>trial</strong>.\\r\\n                </div>\\r\\n                <div class=\\"definition\\">\\r\\n                    When the outcomes in each trial are independent, we say the trial as <strong>Bernoulli trials</strong>.\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <ol>\\r\\n                    <li>\\r\\n                        Suppose a coin is tossed repeatedly. A particular list of outcomes may look like \\\\[HHTHTTHHHTTHTH...\\\\]\\r\\n                        Here getting a \\\\(H\\\\) or \\\\(T\\\\) at any trial is the same. So these trials are Bernoulli.\\r\\n                    </li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Theorem</h6>\\r\\n            <div class=\\"theorem\\">\\r\\n                Let \\\\(p\\\\) be the probability that an event will happen in any single Bernoulli trial ( called the <em>probability of success</em>). The probability that the event will happen exactly \\\\(r\\\\) times in \\\\(n\\\\) trials ( i.e. \\\\(r\\\\) successes and \\\\(n - r\\\\) failures will occur ) is given by the probability function \\r\\n                {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                p(r) = {n\\\\\\\\choose r}p^r (1 - p)^{n - r}\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <p>\\r\\n                    The probability of getting exactly 2 heads in 6 tosses of a fair coin is {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                    p(2) &= {6\\\\\\\\choose 2}\\\\\\\\left (\\\\\\\\frac{1}{2}\\\\\\\\right)^2\\\\\\\\left( 1 - \\\\\\\\frac{1}{2}\\\\\\\\right )^{6 - 2}\\\\\\\\\\\\\\\\\\r\\n                         &= \\\\\\\\frac{6!}{2!4!}\\\\\\\\cdot \\\\\\\\frac{1}{4}\\\\\\\\cdot \\\\\\\\frac{1}{16}\\\\\\\\\\\\\\\\\\r\\n                         &= \\\\\\\\frac{15}{64}\\r\\n                    \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Theorem</h6>\\r\\n            <div class=\\"theorem\\">\\r\\n                The mean number of successes in \\\\(n\\\\) Bernoulli trials is given by \\\\[\\\\mu = np\\\\]\\r\\n                The standard deviation is given as {`\\\\\\\\[\\\\\\\\sigma = \\\\\\\\sqrt{np(1 - p)}\\\\\\\\]`}\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <p>In 100 tosses of a fair coin, the expected or mean number of heads is {`\\\\\\\\(\\\\\\\\mu = 100\\\\\\\\times \\\\\\\\frac{1}{2} = 50\\\\\\\\)`} while the standard deviation is {`\\\\\\\\[\\\\\\\\sigma = \\\\\\\\sqrt{100\\\\\\\\times \\\\\\\\frac{1}{2}\\\\\\\\times \\\\\\\\frac{1}{2}} = 5\\\\\\\\]`} </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb"}'
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
  set_store_value(currentPath, $currentPath = "Binomial Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-wtqoxt_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/binomial"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-wtqoxt_END -->`, ""} <article class="svelte-1u2otn3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-1cddz63">BINOMIAL DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-17h9xkb">Trials</h6> <div data-svelte-h="svelte-lasqaa"><div class="definition">Each repetition of an experiment is called a <strong class="svelte-1u2otn3">trial</strong>.</div> <div class="definition">When the outcomes in each trial are independent, we say the trial as <strong class="svelte-1u2otn3">Bernoulli trials</strong>.</div></div> <div class="examples" data-svelte-h="svelte-kyt7rp"><ol><li class="svelte-1u2otn3">Suppose a coin is tossed repeatedly. A particular list of outcomes may look like \\[HHTHTTHHHTTHTH...\\]
                        Here getting a \\(H\\) or \\(T\\) at any trial is the same. So these trials are Bernoulli.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-ikt5um">Theorem</h6> <div class="theorem">Let \\(p\\) be the probability that an event will happen in any single Bernoulli trial ( called the <em data-svelte-h="svelte-4xjje1">probability of success</em>). The probability that the event will happen exactly \\(r\\) times in \\(n\\) trials ( i.e. \\(r\\) successes and \\(n - r\\) failures will occur ) is given by the probability function 
                ${escape(`\\[\\begin{aligned}
                p(r) = {n\\choose r}p^r (1 - p)^{n - r}
                \\end{aligned}\\]`)}</div> <div class="examples"><p class="svelte-1u2otn3">The probability of getting exactly 2 heads in 6 tosses of a fair coin is ${escape(`\\[\\begin{aligned}
                    p(2) &= {6\\choose 2}\\left (\\frac{1}{2}\\right)^2\\left( 1 - \\frac{1}{2}\\right )^{6 - 2}\\\\
                         &= \\frac{6!}{2!4!}\\cdot \\frac{1}{4}\\cdot \\frac{1}{16}\\\\
                         &= \\frac{15}{64}
                    \\end{aligned}\\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-ikt5um">Theorem</h6> <div class="theorem">The mean number of successes in \\(n\\) Bernoulli trials is given by \\[\\mu = np\\]
                The standard deviation is given as ${escape(`\\[\\sigma = \\sqrt{np(1 - p)}\\]`)}</div> <div class="examples"><p class="svelte-1u2otn3">In 100 tosses of a fair coin, the expected or mean number of heads is ${escape(`\\(\\mu = 100\\times \\frac{1}{2} = 50\\)`)} while the standard deviation is ${escape(`\\[\\sigma = \\sqrt{100\\times \\frac{1}{2}\\times \\frac{1}{2}} = 5\\]`)}</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
