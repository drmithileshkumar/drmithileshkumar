import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { S as ScatteredPlot } from './ScatteredPlot-CU-uRbCn.js';
import { c as contentNav, a as contents } from './content3-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './index2-B3zlhmO5.js';
import 'd3';
import './Button-nlTGW0Wq.js';
import './Ripple-Yt1ZX6hy.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import ScatteredPlot from \'$lib/pages/courses/mathematics2/ScatteredPlot.svelte\';\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Lines of Regression\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/regressionlines\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Regression\\r\\n    </h4>\\r\\n    <h5>Lines of regression</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <p>\\r\\n                One of the most common nature of relationship between two variables that are explored is linear, i.e., we check whether the values of the variables lie on a line.\\r\\n            </p>\\r\\n            <h6>Regression Line of Y on X</h6>\\r\\n            <p>\\r\\n                This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the \\"line of best fit\\" and is represented mathematically as:\\r\\n            </p>\\r\\n            <p>{`\\\\\\\\[ Y = a + bX \\\\\\\\]`}</p>\\r\\n            <h6>Regression Line of X on Y</h6>\\r\\n            <p>\\r\\n                This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:\\r\\n            </p>\\r\\n            <p>{`\\\\\\\\[ X = c + dY \\\\\\\\]`}</p>\\r\\n            <p>Here, in the equations:</p>\\r\\n            <ul>\\r\\n                <li><p>{`\\\\\\\\( Y \\\\\\\\)`} represents the dependent variable (outcome).</p></li>\\r\\n                <li><p>{`\\\\\\\\( X \\\\\\\\)`} represents the independent variable (predictor).</p></li>\\r\\n                <li><p>{`\\\\\\\\( a \\\\\\\\)`} and {`\\\\\\\\( c \\\\\\\\)`} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li>\\r\\n                <li><p>{`\\\\\\\\( b \\\\\\\\)`} and {`\\\\\\\\( d \\\\\\\\)`} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li>\\r\\n            </ul>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content style=\\"display:flex; flex-direction: column; justify-content:center;\\">\\r\\n            <ScatteredPlot linearX dataSize={10}/>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAgBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B"}'
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
  set_store_value(currentPath, $currentPath = "Lines of Regression", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1vgw12h_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/regressionlines"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1vgw12h_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-1cqbtpt">Regression</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-aitr3p">Lines of regression</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-pvw12j">One of the most common nature of relationship between two variables that are explored is linear, i.e., we check whether the values of the variables lie on a line.</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-1uamxm4">Regression Line of Y on X</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-oazvua">This line is used to predict the values of the dependent variable (Y) based on the values of the independent variable (X). It is often referred to as the &quot;line of best fit&quot; and is represented mathematically as:</p> <p class="svelte-98uzi2">${escape(`\\[ Y = a + bX \\]`)}</p> <h6 class="svelte-98uzi2" data-svelte-h="svelte-10odd8q">Regression Line of X on Y</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-uj9ou4">This line is used to predict the values of the independent variable (X) based on the values of the dependent variable (Y). It is represented mathematically as:</p> <p class="svelte-98uzi2">${escape(`\\[ X = c + dY \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-4udse9">Here, in the equations:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( Y \\)`)} represents the dependent variable (outcome).</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( X \\)`)} represents the independent variable (predictor).</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( a \\)`)} and ${escape(`\\( c \\)`)} are the intercepts of the regression lines on the Y and X axes, respectively.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( b \\)`)} and ${escape(`\\( d \\)`)} are the slope coefficients that quantify the strength and direction of the relationship between the variables.</p></li></ul>`;
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
            return `${validate_component(ScatteredPlot, "ScatteredPlot").$$render($$result, { linearX: true, dataSize: 10 }, {}, {})}`;
          }
        }
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DEhWrADz.js.map
