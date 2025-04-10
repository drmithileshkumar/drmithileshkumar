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

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import MeanPlot from \'$lib/pages/courses/mathematics2/statistics/measures/mean/MeanPlot.svelte\'\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Mean\\";\\r\\n    $darkMode = false;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/mean\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Measures of Central Tendency \\r\\n    </h4>\\r\\n    <h5>Mean</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Mean (Arithmetic Mean)</h6>\\r\\n            <p>The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p>\\r\\n            <p>{`\\\\\\\\[\\\\\\\\begin{aligned} \\r\\n            \\\\\\\\text{Mean} (\\\\\\\\bar{x}) &= \\\\\\\\frac{1}{n} \\\\\\\\sum_{i=1}^{n} x_i\\\\\\\\\\\\\\\\\\r\\n                                    &= \\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n}\\r\\n             \\\\\\\\end{aligned}\\\\\\\\]`}</p>\\r\\n            <div class=\\"examples\\">\\r\\n                The arithmetic mean of 1, 3, 5, 7 is {`\\\\\\\\(\\\\\\\\frac{1 + 3 + 5 + 7}{4} = 4\\\\\\\\)`}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Geometric Mean (GM)</h6>\\r\\n            <p>The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p>\\r\\n            <p>{`\\\\\\\\[\\\\\\\\begin{aligned} \\r\\n            \\\\\\\\text{Geometric Mean (GM)} &= \\\\\\\\left( \\\\\\\\prod_{i=1}^{n} x_i \\\\\\\\right)^{\\\\\\\\frac{1}{n}}\\\\\\\\\\\\\\\\ \\r\\n                                        &= \\\\\\\\left(x_1\\\\\\\\times x_2\\\\\\\\times\\\\\\\\cdots\\\\\\\\times x_n\\\\\\\\right)^{\\\\\\\\frac{1}{n}}\\r\\n            \\\\\\\\end{aligned} \\\\\\\\]`}</p>\\r\\n            <p>\\r\\n                It is used when the information we want has volume-like property.\\r\\n            </p>\\r\\n            <div class=\\"examples\\">\\r\\n                The geometric mean of 2, 9, 12 is {`\\\\\\\\((2\\\\\\\\times 9\\\\\\\\times 12)^\\\\\\\\frac{1}{3} = (2^3\\\\\\\\times 3^3)^\\\\\\\\frac{1}{3} = 6\\\\\\\\)`}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Harmonic Mean (HM)</h6>\\r\\n            <p>The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p>\\r\\n            <p>{`\\\\\\\\[\\\\\\\\begin{aligned} \\r\\n            \\\\\\\\text{Harmonic Mean (HM)} &= \\\\\\\\frac{n}{\\\\\\\\sum_{i=1}^{n} \\\\\\\\frac{1}{x_i}}\\\\\\\\\\\\\\\\\\r\\n                                       &= \\\\\\\\frac{n}{\\\\\\\\frac{1}{x_1} + \\\\\\\\frac{1}{x_2} + \\\\\\\\cdots + \\\\\\\\frac{1}{x_n}}\\r\\n            \\\\\\\\end{aligned} \\\\\\\\]`}</p>\\r\\n            <p>\\r\\n                It is used when the information we want considers reciprocals of the given data.\\r\\n            </p>\\r\\n            <div class=\\"examples\\">\\r\\n                The harmonic mean of {`\\\\\\\\(\\\\\\\\frac{1}{2}, \\\\\\\\frac{1}{3},\\\\\\\\frac{1}{4}\\\\\\\\)`} is {`\\\\\\\\(\\\\\\\\frac{3}{2 + 3 + 4} = \\\\\\\\frac{1}{3}\\\\\\\\)`}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <!-- <Card>\\r\\n        <Content>\\r\\n            <div style=\\"max-width:100%;\\">\\r\\n                <MeanPlot />\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card> -->\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                What is the mean of \\\\(n\\\\) consecutive numbers starting with \\\\(a\\\\)?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    The numbers will be \\\\(a, a + 1, a + 2, \\\\dots, a + (n - 1)\\\\). Their sum is \\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        sum &= a + (a + 1) + (a + 2) + \\\\\\\\cdots + (a + n - 1)\\\\\\\\\\\\\\\\\\r\\n                            &= na + [1 + 2 + 3 + \\\\\\\\cdots + (n - 1)]\\\\\\\\\\\\\\\\\\r\\n                            &= na + \\\\\\\\frac{(n - 1)(n - 1 + 1)}{2}\\\\\\\\\\\\\\\\\\r\\n                            &= n\\\\\\\\frac{2a + n - 1}{2}\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n                <p>\\r\\n                    Therefore the arithmetic mean is {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        \\\\\\\\bar{x} &= \\\\\\\\frac{sum}{n}\\\\\\\\\\\\\\\\\\r\\n                                 &= \\\\\\\\frac{n(2a + n - 1)}{2n}\\\\\\\\\\\\\\\\\\r\\n                                 &= \\\\\\\\frac{2a + n - 1}{2}\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Show that arithmetic mean is always between the smallest and the largest data point.</div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    Let us rewrite the definition of the mean.\\r\\n                    {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                    \\\\\\\\bar{x} &= \\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n}\\\\\\\\\\\\\\\\\\r\\n                    n\\\\\\\\bar{x} &= x_1 + x_2 + \\\\\\\\cdots + x_n\\\\\\\\\\\\\\\\\\r\\n                    0  &= (x_1 + x_2 + \\\\\\\\cdots + x_n) - n\\\\\\\\bar{x}\\\\\\\\\\\\\\\\\\r\\n                    0 &= (x_1 - \\\\\\\\bar{x}) + (\\\\\\\\bar{x} - x_2) + \\\\\\\\cdots + (\\\\\\\\bar{x} - x_n)\\r\\n                    \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                </p>\\r\\n                <p>\\r\\n                    Suppose {`\\\\\\\\(\\\\\\\\bar{x}\\\\\\\\)`} is less than the smallest data point. Each term on the right side is a positive number. Their sum can not be zero. \\r\\n                </p>\\r\\n                <p>\\r\\n                   When we assume {`\\\\\\\\(\\\\\\\\bar{x}\\\\\\\\)`} to be larger than the largest element, the all terms become negative and their sum can not be zero.\\r\\n                </p>\\r\\n                <p>This proves that {`\\\\\\\\(\\\\\\\\bar{x}\\\\\\\\)`} lies between the smallest and the largest element in the data set.</p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Given data points \\\\(x_1, x_2,\\\\dots, x_n\\\\) with arithmetic mean \\\\(\\\\mu\\\\), what is the percentage change in \\\\(\\\\mu\\\\) if \\\\(x_1\\\\) is increased by \\\\(\\\\lambda\\\\)%?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>Let \\\\(\\\\nu\\\\) be the new mean. Let \\\\(p\\\\) be the percentae change in \\\\(\\\\mu\\\\).</p>\\r\\n                <p>\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        \\\\\\\\mu &= \\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n}\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\nu &= \\\\\\\\frac{(x_1 + dx) + x_2 + \\\\\\\\cdots + x_n}{n}\\\\\\\\\\\\\\\\\\r\\n                             &= \\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n} + \\\\\\\\frac{dx}{n}\\\\\\\\\\\\\\\\\\r\\n                             &= \\\\\\\\mu + \\\\\\\\frac{dx}{n}\\\\\\\\\\\\\\\\\\r\\n                \\\\\\\\nu - \\\\\\\\mu  &= \\\\\\\\frac{x_1\\\\\\\\lambda}{100n}\\\\\\\\\\\\\\\\\\r\\n                           p &= \\\\\\\\frac{\\\\\\\\nu - \\\\\\\\mu}{\\\\\\\\mu}\\\\\\\\\\\\\\\\\\r\\n                             &= \\\\\\\\frac{x_1\\\\\\\\lambda}{100n\\\\\\\\mu}\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                The geometric mean of 2 numbers \\\\(a,b\\\\) doubles when \\\\(a\\\\) is changed to \\\\(c\\\\). What is the value of \\\\(c\\\\)?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        2\\\\\\\\sqrt{ab} &= \\\\\\\\sqrt{cb}\\\\\\\\\\\\\\\\\\r\\n                        4ab &= cb\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\implies c &= 4a\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Show that \\\\(AM\\\\geq GM\\\\) in case of two variables.\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>Let \\\\(a\\\\) and \\\\(b\\\\) be two numbers.\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        (a - b)^2 &\\\\\\\\geq 0\\\\\\\\\\\\\\\\\\r\\n                        a^2 + b^2 - 2ab &\\\\\\\\geq 0\\\\\\\\\\\\\\\\\\r\\n                        a^2 + b^2 - 2ab + 4ab &\\\\\\\\geq 4ab\\\\\\\\\\\\\\\\\\r\\n                        (a + b)^2 &\\\\\\\\geq 4ab\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\frac{a + b}{2}&\\\\\\\\geq \\\\\\\\sqrt{ab}\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\implies AM &\\\\\\\\geq GM \\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Show that \\\\(HM\\\\leq GM\\\\) in case of two variables.\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    Let \\\\(a\\\\) and \\\\(b\\\\) be two numbers. Let us apply above theorem on numbers {`\\\\\\\\(\\\\\\\\frac{1}{a}\\\\\\\\)`} and {`\\\\\\\\(\\\\\\\\frac{1}{b}\\\\\\\\)`}.\\r\\n                    {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                    \\\\\\\\frac{\\\\\\\\frac{1}{a} + \\\\\\\\frac{1}{b}}{2} &\\\\\\\\geq \\\\\\\\sqrt{\\\\\\\\frac{1}{a}\\\\\\\\frac{1}{b}}\\\\\\\\\\\\\\\\\\r\\n                                                           &\\\\\\\\geq \\\\\\\\frac{1}{\\\\\\\\sqrt{ab}} \\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\frac{2}{\\\\\\\\frac{1}{a} + \\\\\\\\frac{1}{b}} &\\\\\\\\leq \\\\\\\\sqrt{ab}\\\\\\\\\\\\\\\\\\r\\n                    \\\\\\\\implies HM &\\\\\\\\leq GM\\r\\n                    \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                If every data point is multiplied by a number \\\\(k\\\\), then what is AM, GM and HM of the new data in terms of previous values of AM, GM and HM?\\r\\n            </div>\\r\\n            <div class=\\"solution\\">\\r\\n                <p>\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        AM_{new} &= \\\\\\\\frac{kx_1 + kx_2 +\\\\\\\\cdots + kx_n}{n}\\\\\\\\\\\\\\\\\\r\\n                                 &= k\\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n}\\\\\\\\\\\\\\\\\\r\\n                                 &= k\\\\\\\\cdot AM_{old}\\r\\n\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n                <p>\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        GM_{new} &= (kx_1\\\\\\\\cdot kx_2\\\\\\\\cdot kx_n)^{\\\\\\\\frac{1}{n}}\\\\\\\\\\\\\\\\\\r\\n                                 &= (k^n\\\\\\\\cdot x_1\\\\\\\\cdot x_2\\\\\\\\cdot x_n)^{\\\\\\\\frac{1}{n}}\\\\\\\\\\\\\\\\\\r\\n                                 &= k\\\\\\\\cdot GM_{old}\\r\\n\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n                <p>\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        HM_{new} &= \\\\\\\\frac{n}{\\\\\\\\frac{1}{kx_1} + \\\\\\\\frac{1}{kx_2} + \\\\\\\\cdots + \\\\\\\\frac{1}{kx_n}}\\\\\\\\\\\\\\\\\\r\\n                                 &= \\\\\\\\frac{k\\\\\\\\cdot n}{\\\\\\\\frac{1}{x_1} + \\\\\\\\frac{1}{x_2} + \\\\\\\\cdots + \\\\\\\\frac{1}{x_n}}\\\\\\\\\\\\\\\\\\r\\n                                 &= k\\\\\\\\cdot HM_{old}\\r\\n\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAgBI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CAQA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Mean", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1a8oqdm_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/mean"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1a8oqdm_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-dwe40b">Measures of Central Tendency</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1xrprax">Mean</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-d6g3hn">Mean (Arithmetic Mean)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-1wvanrw">The mean, also known as the arithmetic mean, of a set of <em>n</em> numerical values <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the sum of all the values divided by the number of values. The formula for the mean is:</p> <p class="svelte-98uzi2">${escape(`\\[\\begin{aligned} 
            \\text{Mean} (\\bar{x}) &= \\frac{1}{n} \\sum_{i=1}^{n} x_i\\\\
                                    &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}
             \\end{aligned}\\]`)}</p> <div class="examples">The arithmetic mean of 1, 3, 5, 7 is ${escape(`\\(\\frac{1 + 3 + 5 + 7}{4} = 4\\)`)}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1smdv11">Geometric Mean (GM)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-78yyvr">The Geometric Mean of a set of <em>n</em> positive numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em> is defined as the <em>n</em>-th root of the product of all the <em>n</em> numbers. The formula for the geometric mean is:</p> <p class="svelte-98uzi2">${escape(`\\[\\begin{aligned} 
            \\text{Geometric Mean (GM)} &= \\left( \\prod_{i=1}^{n} x_i \\right)^{\\frac{1}{n}}\\\\ 
                                        &= \\left(x_1\\times x_2\\times\\cdots\\times x_n\\right)^{\\frac{1}{n}}
            \\end{aligned} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-oub8ns">It is used when the information we want has volume-like property.</p> <div class="examples">The geometric mean of 2, 9, 12 is ${escape(`\\((2\\times 9\\times 12)^\\frac{1}{3} = (2^3\\times 3^3)^\\frac{1}{3} = 6\\)`)}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-y481x8">Harmonic Mean (HM)</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-juarun">The Harmonic Mean of a set of <em>n</em> numbers <em>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></em>, where none of the numbers are zero, is defined as <em>n</em> divided by the sum of the reciprocals of the numbers. The formula for the harmonic mean is:</p> <p class="svelte-98uzi2">${escape(`\\[\\begin{aligned} 
            \\text{Harmonic Mean (HM)} &= \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}}\\\\
                                       &= \\frac{n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\cdots + \\frac{1}{x_n}}
            \\end{aligned} \\]`)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-11vsb7j">It is used when the information we want considers reciprocals of the given data.</p> <div class="examples">The harmonic mean of ${escape(`\\(\\frac{1}{2}, \\frac{1}{3},\\frac{1}{4}\\)`)} is ${escape(`\\(\\frac{3}{2 + 3 + 4} = \\frac{1}{3}\\)`)}</div>`;
        }
      })}`;
    }
  })}  <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-nwwjfq">What is the mean of \\(n\\) consecutive numbers starting with \\(a\\)?</div> <div class="solution"><p class="svelte-98uzi2">The numbers will be \\(a, a + 1, a + 2, \\dots, a + (n - 1)\\). Their sum is 
                    ${escape(`\\[
                        \\begin{aligned}
                        sum &= a + (a + 1) + (a + 2) + \\cdots + (a + n - 1)\\\\
                            &= na + [1 + 2 + 3 + \\cdots + (n - 1)]\\\\
                            &= na + \\frac{(n - 1)(n - 1 + 1)}{2}\\\\
                            &= n\\frac{2a + n - 1}{2}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">Therefore the arithmetic mean is ${escape(`\\[
                        \\begin{aligned}
                        \\bar{x} &= \\frac{sum}{n}\\\\
                                 &= \\frac{n(2a + n - 1)}{2n}\\\\
                                 &= \\frac{2a + n - 1}{2}
                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-eohafb">Show that arithmetic mean is always between the smallest and the largest data point.</div> <div class="solution"><p class="svelte-98uzi2">Let us rewrite the definition of the mean.
                    ${escape(`\\[\\begin{aligned}
                    \\bar{x} &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                    n\\bar{x} &= x_1 + x_2 + \\cdots + x_n\\\\
                    0  &= (x_1 + x_2 + \\cdots + x_n) - n\\bar{x}\\\\
                    0 &= (x_1 - \\bar{x}) + (\\bar{x} - x_2) + \\cdots + (\\bar{x} - x_n)
                    \\end{aligned}\\]`)}</p> <p class="svelte-98uzi2">Suppose ${escape(`\\(\\bar{x}\\)`)} is less than the smallest data point. Each term on the right side is a positive number. Their sum can not be zero.</p> <p class="svelte-98uzi2">When we assume ${escape(`\\(\\bar{x}\\)`)} to be larger than the largest element, the all terms become negative and their sum can not be zero.</p> <p class="svelte-98uzi2">This proves that ${escape(`\\(\\bar{x}\\)`)} lies between the smallest and the largest element in the data set.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1bjojpc">Given data points \\(x_1, x_2,\\dots, x_n\\) with arithmetic mean \\(\\mu\\), what is the percentage change in \\(\\mu\\) if \\(x_1\\) is increased by \\(\\lambda\\)%?</div> <div class="solution"><p class="svelte-98uzi2" data-svelte-h="svelte-nu9ny3">Let \\(\\nu\\) be the new mean. Let \\(p\\) be the percentae change in \\(\\mu\\).</p> <p class="svelte-98uzi2">${escape(`\\[
                        \\begin{aligned}
                        \\mu &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                        \\nu &= \\frac{(x_1 + dx) + x_2 + \\cdots + x_n}{n}\\\\
                             &= \\frac{x_1 + x_2 + \\cdots + x_n}{n} + \\frac{dx}{n}\\\\
                             &= \\mu + \\frac{dx}{n}\\\\
                \\nu - \\mu  &= \\frac{x_1\\lambda}{100n}\\\\
                           p &= \\frac{\\nu - \\mu}{\\mu}\\\\
                             &= \\frac{x_1\\lambda}{100n\\mu}
                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-16shh12">The geometric mean of 2 numbers \\(a,b\\) doubles when \\(a\\) is changed to \\(c\\). What is the value of \\(c\\)?</div> <div class="solution"><p class="svelte-98uzi2">${escape(`\\[
                        \\begin{aligned}
                        2\\sqrt{ab} &= \\sqrt{cb}\\\\
                        4ab &= cb\\\\
                        \\implies c &= 4a
                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1nasd46">Show that \\(AM\\geq GM\\) in case of two variables.</div> <div class="solution"><p class="svelte-98uzi2">Let \\(a\\) and \\(b\\) be two numbers.
                    ${escape(`\\[
                        \\begin{aligned}
                        (a - b)^2 &\\geq 0\\\\
                        a^2 + b^2 - 2ab &\\geq 0\\\\
                        a^2 + b^2 - 2ab + 4ab &\\geq 4ab\\\\
                        (a + b)^2 &\\geq 4ab\\\\
                        \\frac{a + b}{2}&\\geq \\sqrt{ab}\\\\
                        \\implies AM &\\geq GM 
                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-1gyzsum">Show that \\(HM\\leq GM\\) in case of two variables.</div> <div class="solution"><p class="svelte-98uzi2">Let \\(a\\) and \\(b\\) be two numbers. Let us apply above theorem on numbers ${escape(`\\(\\frac{1}{a}\\)`)} and ${escape(`\\(\\frac{1}{b}\\)`)}.
                    ${escape(`\\[\\begin{aligned}
                    \\frac{\\frac{1}{a} + \\frac{1}{b}}{2} &\\geq \\sqrt{\\frac{1}{a}\\frac{1}{b}}\\\\
                                                           &\\geq \\frac{1}{\\sqrt{ab}} \\\\
                    \\frac{2}{\\frac{1}{a} + \\frac{1}{b}} &\\leq \\sqrt{ab}\\\\
                    \\implies HM &\\leq GM
                    \\end{aligned}\\]`)}</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2" data-svelte-h="svelte-rjw0ug">If every data point is multiplied by a number \\(k\\), then what is AM, GM and HM of the new data in terms of previous values of AM, GM and HM?</div> <div class="solution"><p class="svelte-98uzi2">${escape(`\\[
                        \\begin{aligned}
                        AM_{new} &= \\frac{kx_1 + kx_2 +\\cdots + kx_n}{n}\\\\
                                 &= k\\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                                 &= k\\cdot AM_{old}

                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">${escape(`\\[
                        \\begin{aligned}
                        GM_{new} &= (kx_1\\cdot kx_2\\cdot kx_n)^{\\frac{1}{n}}\\\\
                                 &= (k^n\\cdot x_1\\cdot x_2\\cdot x_n)^{\\frac{1}{n}}\\\\
                                 &= k\\cdot GM_{old}

                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">${escape(`\\[
                        \\begin{aligned}
                        HM_{new} &= \\frac{n}{\\frac{1}{kx_1} + \\frac{1}{kx_2} + \\cdots + \\frac{1}{kx_n}}\\\\
                                 &= \\frac{k\\cdot n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\cdots + \\frac{1}{x_n}}\\\\
                                 &= k\\cdot HM_{old}

                        \\end{aligned}
                        \\]`)}</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-pp4-ZmnD.js.map
