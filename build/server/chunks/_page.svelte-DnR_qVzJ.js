import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { S as ScatteredPlot } from './ScatteredPlot-CU-uRbCn.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { c as contentNav, a as contents } from './content3-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import 'd3';
import './Button-nlTGW0Wq.js';
import './Ripple-Yt1ZX6hy.js';
import './index2-B3zlhmO5.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}strong.svelte-98uzi2{color:goldenrod;opacity:1}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import ScatteredPlot from \'$lib/pages/courses/mathematics2/ScatteredPlot.svelte\';\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bivariate Data\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/bivariatedata\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Correlation\\r\\n    </h4>\\r\\n    <h5>Bivariate Data</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n                <p>\\r\\n                    Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables {`\\\\\\\\( X \\\\\\\\)`} and {`\\\\\\\\( Y \\\\\\\\)`}, each data point in the dataset will be a pair {`\\\\\\\\( (x_i, y_i) \\\\\\\\)`}, where {`\\\\\\\\( x_i \\\\\\\\)`} is a value of {`\\\\\\\\( X \\\\\\\\)`} and {`\\\\\\\\( y_i \\\\\\\\)`} is the corresponding value of {`\\\\\\\\( Y \\\\\\\\)`}. \\r\\n                </p>\\r\\n                <p>\\r\\n                    The main characteristics of bivariate data include:\\r\\n                </p>\\r\\n                <ul>\\r\\n                    <li>\\r\\n                        <p>\\r\\n                            <strong>Two Variables</strong>: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                    <li>\\r\\n                        <p>\\r\\n                            <strong>Visualization</strong>: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.\\r\\n                        </p>\\r\\n                    </li>\\r\\n                </ul>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content style=\\"display:flex; flex-direction: column; justify-content:center;\\">\\r\\n            <ScatteredPlot />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAgBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CAMA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}'
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
  set_store_value(currentPath, $currentPath = "Bivariate Data", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ohcp3o_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatedata"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1ohcp3o_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-yijae5">Bivariate Data</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">Bivariate data involves pairs of related data points, each representing two different variables. These data points are used to explore the relationship between these two variables. For instance, if we consider a dataset with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, each data point in the dataset will be a pair ${escape(`\\( (x_i, y_i) \\)`)}, where ${escape(`\\( x_i \\)`)} is a value of ${escape(`\\( X \\)`)} and ${escape(`\\( y_i \\)`)} is the corresponding value of ${escape(`\\( Y \\)`)}.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-tny9ke">The main characteristics of bivariate data include:</p> <ul data-svelte-h="svelte-1kli0em"><li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Two Variables</strong>: Bivariate data consists of observations of two variables. For example, in a study of height and weight, each observation will include both a height and a weight value.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2"><strong class="svelte-98uzi2">Visualization</strong>: Bivariate data is often visualized using scatter plots, line graphs, or other graphical representations to help identify and understand relationships between the variables.</p></li></ul>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render(
        $$result,
        {
          style: "display:flex; flex-direction: column; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `${validate_component(ScatteredPlot, "ScatteredPlot").$$render($$result, {}, {}, {})}`;
          }
        }
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DnR_qVzJ.js.map
