import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-q3O0l93f.js';
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
  code: "article.svelte-1u2otn3{display:flex;flex-direction:column;gap:0.7em}li.svelte-1u2otn3{opacity:0.8}h4.svelte-1u2otn3{margin:0.7em 0}h6.svelte-1u2otn3{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1u2otn3{color:rgb(159, 116, 7);opacity:1}.question.svelte-1u2otn3{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Continuous Distribution\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.7em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.7em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.7em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    table {\\r\\n        border-collapse: collapse;\\r\\n        margin: auto;\\r\\n        margin-top: 1em;\\r\\n        margin-bottom: 1em;\\r\\n    }\\r\\n    td {\\r\\n        border: 1px solid;\\r\\n        text-align: center;\\r\\n        padding: 0.7em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/continuous\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        CONTINUOUS DISTRIBUTION\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Continuous sample space</h6>\\r\\n            <div>\\r\\n                <div class=\\"definition\\" style=\\"padding-bottom: 0.1em;\\">\\r\\n                    When the outcome of an experiment can take any value from an interval, we say that the sample space is continuous. Ideally, it is defined in terms of random variables, but we avoid random variables for this course. The probability of any one outcome is zero. In such cases, we define probabilities for an interval of values. A non-discrete random variable \\\\(X\\\\) is said to be <em>absolutely continuous</em> if its distribution function my be represented as {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                    F(x) &= P(X \\\\\\\\leq x)\\\\\\\\\\\\\\\\\\r\\n                         &= \\\\\\\\int_{-\\\\\\\\infty}^x f(u)du\\r\\n                    \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                    where <ol>\\r\\n                        <li>\\\\(-\\\\infty \\\\lt x\\\\lt \\\\infty\\\\)</li>\\r\\n                        <li>\\\\(f(x)\\\\geq 0\\\\)</li>\\r\\n                        <li>{`\\\\\\\\(\\\\\\\\int_{-\\\\\\\\infty}^\\\\\\\\infty f(x)dx = 1\\\\\\\\)`}</li>\\r\\n                    </ol>\\r\\n                    \\\\(f(x)\\\\) is called <strong>probability density function</strong>.\\r\\n                </div>\\r\\n                <div class=\\"definition\\">\\r\\n                    The <strong>interval probability</strong> that \\\\(X\\\\) lies between two different values, say \\\\(a\\\\) and \\\\(b\\\\), is given by {`\\\\\\\\[P(a\\\\\\\\lt x\\\\\\\\lt b) = \\\\\\\\int_a^b f(x)dx\\\\\\\\]`}\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <ol>\\r\\n                    <li>\\r\\n                        The height of a randomly chosen person can take any value between 100cm to 200cm.\\r\\n                    </li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Find the constant \\\\(c\\\\) such that the function \\r\\n                {`\\\\\\\\[f(x) = \\\\\\\\begin{cases}\\r\\n                cx^2 & 0\\\\\\\\lt x\\\\\\\\lt 3\\\\\\\\\\\\\\\\\\r\\n                0 & otherwise\\r\\n                \\\\\\\\end{cases}\\\\\\\\]`}\\r\\n                is a density function, and calculate \\\\(P(1\\\\lt X\\\\lt 2)\\\\).\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACG,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb,CAIA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Continuous Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1avdwff_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/continuous"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1avdwff_END -->`, ""} <article class="svelte-1u2otn3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1u2otn3" data-svelte-h="svelte-1hcy2uh">CONTINUOUS DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1u2otn3" data-svelte-h="svelte-1s9kze1">Continuous sample space</h6> <div><div class="definition" style="padding-bottom: 0.1em;">When the outcome of an experiment can take any value from an interval, we say that the sample space is continuous. Ideally, it is defined in terms of random variables, but we avoid random variables for this course. The probability of any one outcome is zero. In such cases, we define probabilities for an interval of values. A non-discrete random variable \\(X\\) is said to be <em data-svelte-h="svelte-1ie8ail">absolutely continuous</em> if its distribution function my be represented as ${escape(`\\[\\begin{aligned}
                    F(x) &= P(X \\leq x)\\\\
                         &= \\int_{-\\infty}^x f(u)du
                    \\end{aligned}\\]`)}
                    where <ol><li class="svelte-1u2otn3" data-svelte-h="svelte-qy3pta">\\(-\\infty \\lt x\\lt \\infty\\)</li> <li class="svelte-1u2otn3" data-svelte-h="svelte-7llnot">\\(f(x)\\geq 0\\)</li> <li class="svelte-1u2otn3">${escape(`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`)}</li></ol>
                    \\(f(x)\\) is called <strong class="svelte-1u2otn3" data-svelte-h="svelte-essz21">probability density function</strong>.</div> <div class="definition">The <strong class="svelte-1u2otn3" data-svelte-h="svelte-15jenkm">interval probability</strong> that \\(X\\) lies between two different values, say \\(a\\) and \\(b\\), is given by ${escape(`\\[P(a\\lt x\\lt b) = \\int_a^b f(x)dx\\]`)}</div></div> <div class="examples" data-svelte-h="svelte-1pqil1j"><ol><li class="svelte-1u2otn3">The height of a randomly chosen person can take any value between 100cm to 200cm.</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1u2otn3">Find the constant \\(c\\) such that the function 
                ${escape(`\\[f(x) = \\begin{cases}
                cx^2 & 0\\lt x\\lt 3\\\\
                0 & otherwise
                \\end{cases}\\]`)}
                is a density function, and calculate \\(P(1\\lt X\\lt 2)\\).</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CEsUbJsv.js.map
