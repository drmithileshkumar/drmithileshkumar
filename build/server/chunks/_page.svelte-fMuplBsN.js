import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content5-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import 'd3';
import './client-CAo-6NMJ.js';
import './exports-DKuYoYKl.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './index2-D2s-XE5r.js';

/* empty css                                                                         */
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n\\timport ScatteredPlot from \'$lib/pages/courses/mathematics2/ScatteredPlot.svelte\';\\r\\n    import { onMount } from \'svelte\';\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Bivariate Frequency Distribution\\";\\r\\n    $darkMode = false;\\r\\n    let data = [];\\r\\n    let dataSize = 30;\\r\\n    let rangeX = [1, 6];\\r\\n    let rangeY = [1, 6];\\r\\n    function generateRandomData() {\\r\\n        data = [];\\r\\n        // Generate random bivariate data\\r\\n        data = Array.from({ length: dataSize }, () => ({\\r\\n            x: rangeX[0] + Math.floor(Math.random() * (rangeX[1] - rangeX[0] + 1)),\\r\\n            y: rangeY[0] + Math.floor(Math.random() * (rangeY[1] - rangeY[0] + 1)),\\r\\n        }));\\r\\n    }\\r\\n    onMount(() => {\\r\\n        generateRandomData();\\r\\n    });\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Correlation\\r\\n    </h4>\\r\\n    <h5>Bivariate Frequency Distribution</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n                <p>\\r\\n                    A bivariate frequency distribution is a table of frequencies of occurrences of pairs of variables in a dataset. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset. \\r\\n                </p>\\r\\n                <p>\\r\\n                    Mathematically, if we have two variables {`\\\\\\\\( X \\\\\\\\)`} and {`\\\\\\\\( Y \\\\\\\\)`}, with {`\\\\\\\\( X \\\\\\\\)`} taking values {`\\\\\\\\( x_1, x_2, ..., x_m \\\\\\\\)`} and {`\\\\\\\\( Y \\\\\\\\)`} taking values {`\\\\\\\\( y_1, y_2, ..., y_n \\\\\\\\)`}, the frequency of occurrence of the pair {`\\\\\\\\( (x_i, y_j) \\\\\\\\)`} in the dataset is denoted as {`\\\\\\\\( f_{ij} \\\\\\\\)`}. The entire set of frequencies forms the bivariate frequency distribution.\\r\\n                </p>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Write the frequency distribution of the set of outcomes of two die rolls {data.map(d => \'(\' + d.x + \', \' + d.y + \')\')}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAgCI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CAaA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Bivariate Frequency Distribution", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let data = [];
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-gaw8gk_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/bivariatefrequency"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-gaw8gk_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-wirx9h">Bivariate Frequency Distribution</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2" data-svelte-h="svelte-rnj2fp">A bivariate frequency distribution is a table of frequencies of occurrences of pairs of variables in a dataset. The distribution is typically represented in a tabular format, where one variable is listed along the rows and the other along the columns. The table contains the frequency count, which is the number of times each pair of variable values occurs together in the dataset.</p> <p class="svelte-98uzi2">Mathematically, if we have two variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)}, with ${escape(`\\( X \\)`)} taking values ${escape(`\\( x_1, x_2, ..., x_m \\)`)} and ${escape(`\\( Y \\)`)} taking values ${escape(`\\( y_1, y_2, ..., y_n \\)`)}, the frequency of occurrence of the pair ${escape(`\\( (x_i, y_j) \\)`)} in the dataset is denoted as ${escape(`\\( f_{ij} \\)`)}. The entire set of frequencies forms the bivariate frequency distribution.</p>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2">Write the frequency distribution of the set of outcomes of two die rolls ${escape(data.map((d) => "(" + d.x + ", " + d.y + ")"))}</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fMuplBsN.js.map
