import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content4-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './index2-B3zlhmO5.js';

const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Types of Correlation\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/correlationtypes\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h2>\\r\\n        Correlation\\r\\n    </h2>\\r\\n    <h3>Types of Correlation</h3>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                What types of correlation are there?\\r\\n            </div>\\r\\n            <div class=\\"solution\\" use:typeset>\\r\\n                <p>Correlation between two variables can be categorized into several types based on the nature and direction of the relationship. The main types of correlation include:</p>\\r\\n                <ul>\\r\\n                    <li><p><strong>Positive Correlation:</strong> Occurs when an increase in one variable leads to an increase in the other variable. The correlation coefficient {`\\\\\\\\( r \\\\\\\\)`} is greater than 0 and up to +1. A perfect positive correlation, with {`\\\\\\\\( r = +1 \\\\\\\\)`}, means that the two variables move in the same direction with a fixed proportional rate.</p></li>\\r\\n                    <li><p><strong>Negative Correlation:</strong> Occurs when an increase in one variable leads to a decrease in the other. The correlation coefficient {`\\\\\\\\( r \\\\\\\\)`} is less than 0 and down to -1. A perfect negative correlation, with {`\\\\\\\\( r = -1 \\\\\\\\)`}, indicates that the two variables move in opposite directions with a fixed proportional rate.</p></li>\\r\\n                    <li><p><strong>No Correlation:</strong> When there is no discernible relationship between the changes in two variables, they are said to have no correlation. This is indicated by a correlation coefficient {`\\\\\\\\( r \\\\\\\\)`} around 0. It means the changes in one variable do not predict any change in the other.</p></li>\\r\\n                    <li><p><strong>Linear Correlation:</strong> This type refers to a straight-line relationship between two variables. Both positive and negative correlations can be linear if the change between the variables is consistent and can be graphically represented by a straight line.</p></li>\\r\\n                    <li><p><strong>Non-linear (Curvilinear) Correlation:</strong> In this type, the relationship between the variables is still systematic but does not follow a straight line. The correlation might change in strength or direction at different levels of the variables.</p></li>\\r\\n                </ul>\\r\\n                <p>It\'s important to note that correlation, regardless of its type, does not imply causation. Statistical analysis is required to determine if a causal relationship exists between the variables.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACA,gBAAE,CAAE,gBAAW,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CASA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CAIA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Types of Correlation", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1jfssvq_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlationtypes"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1jfssvq_END -->`, ""} <article class="svelte-n59hwk">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-vttou6">Types of Correlation</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-185yfoo">What types of correlation are there?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-811nbc">Correlation between two variables can be categorized into several types based on the nature and direction of the relationship. The main types of correlation include:</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-urkb2n">Positive Correlation:</strong> Occurs when an increase in one variable leads to an increase in the other variable. The correlation coefficient ${escape(`\\( r \\)`)} is greater than 0 and up to +1. A perfect positive correlation, with ${escape(`\\( r = +1 \\)`)}, means that the two variables move in the same direction with a fixed proportional rate.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-12whsqr">Negative Correlation:</strong> Occurs when an increase in one variable leads to a decrease in the other. The correlation coefficient ${escape(`\\( r \\)`)} is less than 0 and down to -1. A perfect negative correlation, with ${escape(`\\( r = -1 \\)`)}, indicates that the two variables move in opposite directions with a fixed proportional rate.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-10f7uaf">No Correlation:</strong> When there is no discernible relationship between the changes in two variables, they are said to have no correlation. This is indicated by a correlation coefficient ${escape(`\\( r \\)`)} around 0. It means the changes in one variable do not predict any change in the other.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-1s8hiuu"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Linear Correlation:</strong> This type refers to a straight-line relationship between two variables. Both positive and negative correlations can be linear if the change between the variables is consistent and can be graphically represented by a straight line.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-1fkva3r"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Non-linear (Curvilinear) Correlation:</strong> In this type, the relationship between the variables is still systematic but does not follow a straight line. The correlation might change in strength or direction at different levels of the variables.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-7otjth">It&#39;s important to note that correlation, regardless of its type, does not imply causation. Statistical analysis is required to determine if a causal relationship exists between the variables.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DdwAStXc.js.map
