import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-DPEAZJnM.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
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
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}strong.svelte-98uzi2{color:goldenrod;opacity:1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Regression Coefficient\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/regressioncoefficient\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Regression\\r\\n    </h4>\\r\\n    <h5>Regression coefficient</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <p>A regression coefficient, often denoted as {`\\\\\\\\( b \\\\\\\\)`} or {`\\\\\\\\( \\\\\\\\beta \\\\\\\\)`}, is a numerical value that represents the strength and direction of the relationship between an independent variable (predictor) and a dependent variable (outcome) in a regression model. Regression coefficients are essential in quantifying how changes in the independent variable are associated with changes in the dependent variable. The key aspects of regression coefficients include:</p>\\r\\n            <ul>\\r\\n                <li><p><strong>Definition:</strong> A regression coefficient represents the change in the dependent variable for a one-unit change in the independent variable while holding other variables constant.</p></li>\\r\\n                <li><p><strong>Interpretation:</strong> The sign of the coefficient (positive or negative) indicates the direction of the relationship. A positive coefficient suggests that as the independent variable increases, the dependent variable also increases. A negative coefficient suggests an inverse relationship.</p></li>\\r\\n                <li><p><strong>Strength:</strong> The magnitude (absolute value) of the coefficient indicates the strength of the relationship. A larger coefficient implies a stronger association between the variables.</p></li>\\r\\n                <li><p><strong>Mathematical Formula:</strong> In a linear regression model, the coefficient {`\\\\\\\\( b \\\\\\\\)`} represents the slope of the regression line and is calculated using the formula:</p>\\r\\n                    <p>{`\\\\\\\\[ b = \\\\\\\\frac{\\\\\\\\sum{(X_i - \\\\\\\\bar{X})(Y_i - \\\\\\\\bar{Y})}}{\\\\\\\\sum{(X_i - \\\\\\\\bar{X})^2}} \\\\\\\\]`}</p>\\r\\n                    <p>Here, in the equation:</p>\\r\\n                    <ul>\\r\\n                        <li><p>{`\\\\\\\\( X_i \\\\\\\\)`} represents the values of the independent variable.</p></li>\\r\\n                        <li><p>{`\\\\\\\\( Y_i \\\\\\\\)`} represents the values of the dependent variable.</p></li>\\r\\n                        <li><p>{`\\\\\\\\( \\\\\\\\bar{X} \\\\\\\\)`} and {`\\\\\\\\( \\\\\\\\bar{Y} \\\\\\\\)`} represent the means (averages) of the independent and dependent variables, respectively.</p></li>\\r\\n                    </ul>\\r\\n                    <p>The coefficient {`\\\\\\\\( b \\\\\\\\)`} quantifies the change in {`\\\\\\\\( Y \\\\\\\\)`} for a one-unit change in {`\\\\\\\\( X \\\\\\\\)`}.</p>\\r\\n                </li>\\r\\n            </ul>\\r\\n            \\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAeI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CAMA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}'
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
  set_store_value(currentPath, $currentPath = "Regression Coefficient", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-zgabzz_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressioncoefficient"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-zgabzz_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-1cqbtpt">Regression</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1f13rh4">Regression coefficient</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">A regression coefficient, often denoted as ${escape(`\\( b \\)`)} or ${escape(`\\( \\beta \\)`)}, is a numerical value that represents the strength and direction of the relationship between an independent variable (predictor) and a dependent variable (outcome) in a regression model. Regression coefficients are essential in quantifying how changes in the independent variable are associated with changes in the dependent variable. The key aspects of regression coefficients include:</p> <ul><li class="svelte-98uzi2" data-svelte-h="svelte-1n9i4op"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Definition:</strong> A regression coefficient represents the change in the dependent variable for a one-unit change in the independent variable while holding other variables constant.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-186e2ld"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Interpretation:</strong> The sign of the coefficient (positive or negative) indicates the direction of the relationship. A positive coefficient suggests that as the independent variable increases, the dependent variable also increases. A negative coefficient suggests an inverse relationship.</p></li> <li class="svelte-98uzi2" data-svelte-h="svelte-hw2ppm"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Strength:</strong> The magnitude (absolute value) of the coefficient indicates the strength of the relationship. A larger coefficient implies a stronger association between the variables.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-jk43k2">Mathematical Formula:</strong> In a linear regression model, the coefficient ${escape(`\\( b \\)`)} represents the slope of the regression line and is calculated using the formula:</p> <p class="svelte-98uzi2">${escape(`\\[ b = \\frac{\\sum{(X_i - \\bar{X})(Y_i - \\bar{Y})}}{\\sum{(X_i - \\bar{X})^2}} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1px7nsi">Here, in the equation:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( X_i \\)`)} represents the values of the independent variable.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( Y_i \\)`)} represents the values of the dependent variable.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} represent the means (averages) of the independent and dependent variables, respectively.</p></li></ul> <p class="svelte-98uzi2">The coefficient ${escape(`\\( b \\)`)} quantifies the change in ${escape(`\\( Y \\)`)} for a one-unit change in ${escape(`\\( X \\)`)}.</p></li></ul>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BmZAnM4h.js.map
