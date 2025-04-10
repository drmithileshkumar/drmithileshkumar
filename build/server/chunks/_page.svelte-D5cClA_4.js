import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { c as currentPath, d as darkMode, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content5-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import './client-CAo-6NMJ.js';
import './exports-DKuYoYKl.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './index2-D2s-XE5r.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Regression\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/regression\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        BASICS OF STATISTICS \\r\\n    </h4>\\r\\n    <h5>Regression</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <p>\\r\\n                Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable. \\r\\n            </p>\\r\\n            <p>\\r\\n                There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.\\r\\n            </p>\\r\\n            <p>\\r\\n                In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.\\r\\n            </p>\\r\\n            <p>\\r\\n               In the case of linear regression, the mathematical equation takes the form {`\\\\\\\\( y = \\\\\\\\beta_0 + \\\\\\\\beta_1 x + \\\\\\\\varepsilon \\\\\\\\)`}, where {`\\\\\\\\( y \\\\\\\\)`} is the dependent variable, {`\\\\\\\\( x \\\\\\\\)`} is the independent variable, {`\\\\\\\\( \\\\\\\\beta_0 \\\\\\\\)`} is the intercept, {`\\\\\\\\( \\\\\\\\beta_1 \\\\\\\\)`} is the slope coefficient, and {`\\\\\\\\( \\\\\\\\varepsilon \\\\\\\\)`} represents the error term.\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf"}'
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
  set_store_value(currentPath, $currentPath = "Regression", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-b17b6e_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regression"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-b17b6e_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-191m8w3">BASICS OF STATISTICS</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-kg6i9h">Regression</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-1o7mjrb">Regression is a statistical technique used in data analysis to model the relationship between one or more independent variables (predictors) and a dependent variable (outcome). The primary goal of regression analysis is to establish a mathematical equation that describes how changes in the independent variables are associated with changes in the dependent variable.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1pnk0hi">There are various types of regression models, including linear regression, multiple regression, logistic regression, polynomial regression, and more. The choice of regression model depends on the nature of the data and the research question.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1iiishm">In regression analysis, parameters (coefficients) are estimated to fit the mathematical model to the data. These parameters quantify the strength and direction of the relationship between variables.</p> <p class="svelte-98uzi2">In the case of linear regression, the mathematical equation takes the form ${escape(`\\( y = \\beta_0 + \\beta_1 x + \\varepsilon \\)`)}, where ${escape(`\\( y \\)`)} is the dependent variable, ${escape(`\\( x \\)`)} is the independent variable, ${escape(`\\( \\beta_0 \\)`)} is the intercept, ${escape(`\\( \\beta_1 \\)`)} is the slope coefficient, and ${escape(`\\( \\varepsilon \\)`)} represents the error term.</p>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D5cClA_4.js.map
