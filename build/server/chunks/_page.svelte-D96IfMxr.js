import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component } from './ssr2-q3O0l93f.js';
import './client-k3u4ChD_.js';
import { C as Card } from './Card-jWUNhZC7.js';
import './ActionIcons-BJ7xikju.js';
import { N as NavList } from './NavList-DhuWxd3c.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Bb_1fHB9.js';
import './exports-kR70XCWV.js';
import './SmuiElement-DA9PKsv2.js';
import './classAdderBuilder-B9W9nXDD.js';
import './Item-Cixi8uf3.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-Zq_D_mxy.js';
import './Subheader-BV9F6O0P.js';
import './Graphic-BjEt0ZHi.js';
import './Svg-BUOACmlE.js';
import './IconButton-3ebkBHL3.js';
import './index2-BZnI6xu7.js';

const contents = [
  {
    name: "Quantum Mechanics",
    url: "/courses/quantummechanics",
    topics: [
      {
        name: "State space",
        url: "/courses/quantummechanics/state",
        topics: []
      },
      {
        name: "Evolution",
        url: "/courses/quantummechanics/evolution",
        topics: []
      },
      {
        name: "Quantum measurement",
        url: "/courses/quantummechanics/measurement",
        topics: []
      },
      {
        name: "Distinguishing quantum states",
        url: "/courses/quantummechanics/distinguishing",
        topics: []
      },
      {
        name: "Projective measurement",
        url: "/courses/quantummechanics/projective",
        topics: []
      },
      {
        name: "POVM measurements",
        url: "/courses/quantummechanics/povm",
        topics: []
      },
      {
        name: "Phase",
        url: "/courses/quantummechanics/phase",
        topics: []
      },
      {
        name: "Composite systems",
        url: "/courses/quantummechanics/composite",
        topics: []
      },
      {
        name: "Superdense Coding",
        url: "/courses/quantummechanics/superdense",
        topics: []
      },
      {
        name: "The density operator",
        url: "/courses/quantummechanics/density",
        topics: [
          {
            name: "Ensembles of quantum states",
            url: "/courses/quantummechanics/density/ensembles"
          },
          {
            name: "General properties of the density operator",
            url: "/courses/quantummechanics/density/properties"
          },
          {
            name: "The reduced density operator",
            url: "/courses/quantummechanics/density/reduced"
          }
        ]
      },
      {
        name: "The Schmidt decomposition and purifications",
        url: "/courses/quantummechanics/purification",
        topics: []
      },
      {
        name: "EPR and the Bell inequality",
        url: "/courses/quantummechanics/bell",
        topics: []
      }
    ]
  }
];
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents } from \\"$lib/pages/courses/quantuminformation2/content\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Quantum Information 2\\";\\r\\n    $darkMode = true;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Quantum Information 2</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/quantuminformation2\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <h2>\\r\\n        Quantum Information 2\\r\\n    </h2>\\r\\n    <h3>Contents</h3>\\r\\n    <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n        <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <h4>Module 1</h4>\\r\\n            <h5>BASICS OF STATISTICS</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong><a href={\\"/courses/mathematics2/measures\\"}>Measures of Central Tendency</a></strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a href={\\"/courses/mathematics2/mean\\"}>Mean (AM, GM, HM)</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a href={\\"/courses/mathematics2/mode\\"}>Mode</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a href={\\"/courses/mathematics2/median\\"}>Median</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a href={\\"/courses/mathematics2/deviation\\"}>Standard deviation</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Correlation</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Bivariate data</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Bivariate frequency distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Concept of correlation between two variables</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Types of correlation</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Karl Pearson's coefficient of correlation (r)</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Spearman's rank correlation coefficient</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Curve Fitting</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Regression</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Concept of regression</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Lines of regression</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Fitting of lines of regression by the least squares method</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Regression coefficient</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4>Module 2</h4>\\r\\n            <h5>DISCRETE PROBABILITY & PROBABILITY DISTRIBUTIONS</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong>Probability</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Events</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Conditional Probability</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Independence</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Distributions</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Univariate Probability Distributionns</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Bivariate Probability Distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Mathematical Expectation</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Bivariate distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Conditional distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Marginal distributions</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Discrete distributions</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Discrete uniform distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Binomial distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Poisson distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Geometric distribution</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Continuous distributions</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Uniform distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Normal distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Exponential distribution</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Gamma distribution</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Queueing theory</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Introduction</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4>Module 3</h4>\\r\\n            <h5>STATISTICAL INFERENCE</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong>Significance</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Test of significance</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Elements of Hypothesis Testing</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Null hypothesis</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Aleternative hypothesis</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Simple hypotheses</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Composite hypotheses</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Critical region</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Type I errors</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Type II errors</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Levels of significance and size</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Analysis of Variance (ANOVA)</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Introduction</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Heterogeneity</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Analysis of Variance</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Covariance</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4>Module 4</h4>\\r\\n            <h5>STATISTICAL INFERENCE</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong>Hypotheses</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Linear Hypothesis</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Orthogonal splitting of total variation</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Selection of Valid Error</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Applications of ANOVA technique</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>One-way classified data</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Two-way classified data</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Time Series Analysis</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Introduction</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Examples of time series from various fields</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Components of a times series</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Additive models</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Multiplicative models</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Trend and seasonal components</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Estimation of trend by linear filtering (single and weighted moving averages)</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4>Module 5</h4>\\r\\n            <h5>OPERATIONS RESEARCH</h5>\\r\\n            <ol>\\r\\n                <li>\\r\\n                    <strong>Linear programming</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>Meaning and scope of operations research</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Definition of general LPP</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Formulation of LPP</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Solution of LPP by graphical method</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Simplex algorithm</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Transportation</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Assignment problems</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>Sequencing problems</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>\\r\\n                    <strong>Project management</strong>\\r\\n                    <ol>\\r\\n                        <li>\\r\\n                            <a>CPM</a>\\r\\n                        </li>\\r\\n                        <li>\\r\\n                            <a>PERT</a>\\r\\n                        </li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n            </ol>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAsBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CAIA,gBAAE,CAAE,gBAAW,CACX,MAAM,CAAE,KAAK,CAAC,CAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Quantum Information 2", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-35lbuq_START -->${$$result.title = `<title>Quantum Information 2</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/quantuminformation2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-35lbuq_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-1r85dpn">Quantum Information 2</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-1ee0su2">Contents</h3> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(NavList, "NavList").$$render(
          $$result,
          {
            name: $navList[0].name,
            url: $navList[0].url,
            topics: $navList[0].topics,
            expanded: true
          },
          {},
          {}
        )}`;
      }
    }
  )} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D96IfMxr.js.map
