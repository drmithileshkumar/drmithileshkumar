import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-kDd52ji6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { c as contentNav, a as contents } from './content5-DoVr7iRd.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import './client-CAo-6NMJ.js';
import './exports-DKuYoYKl.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './index2-D2s-XE5r.js';
import './prefixFilter-B6cFZsw3.js';

const randInt = (max, min) => {
  if (min >= max) return Math.floor(max);
  let r = Math.random() * (max - min + 1);
  return Math.floor(min + r);
};
const pickWithout = (arr) => {
  let n2 = arr.length;
  let k2 = randInt(n2 - 1, 0);
  let elem = arr[k2];
  arr.splice(k2, 1);
  return { newArr: arr, elem };
};
const randSubset = (n2, k2) => {
  let set = [];
  for (let i = 0; i < n2; i++) {
    set.push(i);
  }
  let temp = [];
  let t;
  for (let i = 0; i < k2; i++) {
    t = pickWithout(set);
    set = t.newArr;
    temp.push(t.elem);
  }
  temp.sort((a, b) => a - b);
  return temp;
};
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-98uzi2{color:goldenrod;opacity:1}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import { randSubset } from \'$lib/utils/common/common\';\\r\\n    import DataTable, { Head, Body, Row, Cell } from \'@smui/data-table\'\\r\\n    import { onMount } from \'svelte\';\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Least Squares Method\\";\\r\\n    $darkMode = false;\\r\\n\\r\\n    \\r\\n    let n = 15;\\r\\n    let k= 7;\\r\\n    let numbersX = randSubset(n, k);\\r\\n    let numbersY = randSubset(n, k);\\r\\n    onMount(() => {\\r\\n        numbersX = [];\\r\\n        numbersY = [];\\r\\n        numbersX = randSubset(n, k);\\r\\n        numbersY = randSubset(n, k);\\r\\n    })\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/leastsquares\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Regression\\r\\n    </h4>\\r\\n    <h5>Least Squares Method</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>What is the least squares method?</h6>\\r\\n            <div>\\r\\n                <p>\\r\\n                    Given data points \\\\((x_i, y_i)\\\\) for variable \\\\(X\\\\) and \\\\(Y\\\\), suppose there is a model that for each input \\\\(x_i\\\\) predicts the value of \\\\(Y\\\\) to be \\\\(f(x_i, \\\\beta)\\\\) for some function \\\\(f\\\\) and parameters \\\\(\\\\beta\\\\), then the least squares method is used to determine the parameters \\\\(\\\\beta\\\\) by minimizing the sum {`\\\\\\\\[S = \\\\\\\\sum_{i=1}^n (y_i - f(x_i, \\\\\\\\beta))^2\\\\\\\\]`} Notice that \\\\(\\\\beta\\\\) can be more than one parameter.\\r\\n                </p>\\r\\n                <p>\\r\\n                    The above sum\'s minima is obtained by differentiating \\\\(S\\\\) with respect to parameters \\\\(\\\\beta\\\\) to get a set of equations that can be solved to fix the parameters. As an example, we\'ll use this method in the case of linear regression.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>The least squares method in linear regression</h6>\\r\\n            <div>\\r\\n                <p>\\r\\n                    In the case of fitting a regression line, such as {`\\\\\\\\( Y = a + bX \\\\\\\\)`}, the method aims to find the values of {`\\\\\\\\( a \\\\\\\\)`} and {`\\\\\\\\( b \\\\\\\\)`} that minimize the sum of squared residuals, denoted as {`\\\\\\\\( S \\\\\\\\)`}:\\r\\n                    {`\\\\\\\\[ S = \\\\\\\\sum_{i=1}^{n} (y_i - (a + bx_i))^2 \\\\\\\\]`}\\r\\n                    Here, in the equation:\\r\\n                </p>\\r\\n                <ul>\\r\\n                    <li><p>{`\\\\\\\\( n \\\\\\\\)`} represents the number of data points.</p></li>\\r\\n                    <li><p>{`\\\\\\\\( (x_i, y_i) \\\\\\\\)`} represents each observed data point.</p></li>\\r\\n                    <li><p>{`\\\\\\\\( a \\\\\\\\)`} and {`\\\\\\\\( b \\\\\\\\)`} are the coefficients (intercept and slope) of the regression line being fitted.</p></li>\\r\\n                    <li><p>{`\\\\\\\\( (y_i - (a + bx_i)) \\\\\\\\)`} represents the residual (the difference between the observed {`\\\\\\\\( y_i \\\\\\\\)`} and the predicted {`\\\\\\\\( a + bx_i \\\\\\\\)`} value).</p></li>\\r\\n                </ul>\\r\\n                <p>\\r\\n                    Differentiating \\\\(S\\\\) with respect to \\\\(a\\\\) and \\\\(b\\\\), we get \\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        \\\\\\\\frac{\\\\\\\\delta S}{\\\\\\\\delta a} &= -2\\\\\\\\sum (y_i - (a + bx_i)) \\\\\\\\\\\\\\\\\\r\\n                                                     &= -2n[\\\\\\\\overline{Y} -a - b\\\\\\\\overline{X}]\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\frac{\\\\\\\\delta S}{\\\\\\\\delta b} &= -2\\\\\\\\sum x_i(y_i - (a + bx_i))\\\\\\\\\\\\\\\\\\r\\n                                                     &= -2[\\\\\\\\sum x_iy_i - na\\\\\\\\overline{X} - b\\\\\\\\sum x_i^2]\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n                <p>\\r\\n                    For minima, the above derivatives are set to zero.\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        \\\\\\\\overline{Y} -a - b\\\\\\\\overline{X} &= 0\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\implies a &= \\\\\\\\overline{Y} - b\\\\\\\\overline{X}\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\sum x_iy_i -na\\\\\\\\overline{X} - b\\\\\\\\sum x_i^2 &= 0\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\sum x_i y_i -n\\\\\\\\overline{XY} + nb\\\\\\\\overline{X}^2 - b\\\\\\\\sum x_i^2 &= 0\\r\\n                        \\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]\\r\\n                    `}\\r\\n                    After simplification, we get\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        b &= \\\\\\\\frac{\\\\\\\\sum x_i y_i - n\\\\\\\\overline{XY}}{\\\\\\\\sum x_i^2 - n\\\\\\\\overline{X}^2}\\\\\\\\\\\\\\\\\\r\\n                        \\\\\\\\implies b &= \\\\\\\\frac{\\\\\\\\sum (x_i - \\\\\\\\overline{X})(y_i - \\\\\\\\overline{Y})}{\\\\\\\\sum (x_i - \\\\\\\\overline{X})^2}\\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                </p>\\r\\n                \\r\\n                <p>The Least Squares Method calculates {`\\\\\\\\( a \\\\\\\\)`} and {`\\\\\\\\( b \\\\\\\\)`} values that minimize {`\\\\\\\\( S \\\\\\\\)`}, making the fitted regression line the \\"best fit\\" to the data.</p>\\r\\n                <p>\\r\\n                    \\\\(b\\\\) is called the <strong>coefficient of regression</strong>.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Summary</h6>\\r\\n            <p>To calculate the line of regression, follow these steps:</p>\\r\\n            <div> <strong>Step 1</strong>: Make the following table:\\r\\n                <DataTable style=\\"width: 100%;margin-top: 1em;margin-bottom: 1em;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>\\\\(x_i\\\\)</Cell>\\r\\n                            <Cell>\\\\(y_i\\\\)</Cell>\\r\\n                            <Cell>\\\\(x_i^2\\\\)</Cell>\\r\\n                            <Cell>\\\\(x_iy_i\\\\)</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>\\\\(\\\\sum x_i\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\sum y_i\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\sum x_i^2\\\\)</Cell>\\r\\n                            <Cell>\\\\(\\\\sum x_iy_i\\\\)</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </div>\\r\\n            <div>\\r\\n                <strong>Step 2</strong>: Calculate {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                \\\\\\\\overline{X} &= \\\\\\\\frac{\\\\\\\\sum x_i}{n}\\\\\\\\\\\\\\\\\\r\\n                \\\\\\\\overline{Y} &= \\\\\\\\frac{\\\\\\\\sum y_i}{n}\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n            </div>\\r\\n            <div>\\r\\n                <strong>Step 3</strong>: Calculate {`\\\\\\\\(n \\\\\\\\overline{XY}\\\\\\\\)`} and {`\\\\\\\\(\\\\\\\\overline{X}^2\\\\\\\\)`}\\r\\n            </div>\\r\\n            <div>\\r\\n                <strong>Step 4</strong>: Calculate {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                b &= \\\\\\\\frac{\\\\\\\\sum x_i y_i - n\\\\\\\\overline{XY}}{\\\\\\\\sum x_i^2 - n \\\\\\\\overline{X}^2}\\\\\\\\\\\\\\\\\\r\\n                a &= \\\\\\\\overline{Y} - b\\\\\\\\overline{X}\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n            </div>\\r\\n            <div>\\r\\n                <strong>Step 5</strong>: Plot the line \\\\(Y = a + bX\\\\).\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Calculate the coefficient of regression \\\\(b\\\\) for {`\\\\\\\\(X = ${numbersX}\\\\\\\\)`} and {`\\\\\\\\(Y = ${numbersY}\\\\\\\\)`}. Plot the data and draw the line of regression.\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AA8BI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAC,CAAE,gBAAG,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CAIA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
};
let n = 15;
let k = 7;
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
  set_store_value(currentPath, $currentPath = "Least Squares Method", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let numbersX = randSubset(n, k);
  let numbersY = randSubset(n, k);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-caa0sc_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/leastsquares"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-caa0sc_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-1cqbtpt">Regression</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-1nw2eue">Least Squares Method</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1j613xs">What is the least squares method?</h6> <div><p class="svelte-98uzi2">Given data points \\((x_i, y_i)\\) for variable \\(X\\) and \\(Y\\), suppose there is a model that for each input \\(x_i\\) predicts the value of \\(Y\\) to be \\(f(x_i, \\beta)\\) for some function \\(f\\) and parameters \\(\\beta\\), then the least squares method is used to determine the parameters \\(\\beta\\) by minimizing the sum ${escape(`\\[S = \\sum_{i=1}^n (y_i - f(x_i, \\beta))^2\\]`)} Notice that \\(\\beta\\) can be more than one parameter.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-14jk5r1">The above sum&#39;s minima is obtained by differentiating \\(S\\) with respect to parameters \\(\\beta\\) to get a set of equations that can be solved to fix the parameters. As an example, we&#39;ll use this method in the case of linear regression.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-n7lu52">The least squares method in linear regression</h6> <div><p class="svelte-98uzi2">In the case of fitting a regression line, such as ${escape(`\\( Y = a + bX \\)`)}, the method aims to find the values of ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} that minimize the sum of squared residuals, denoted as ${escape(`\\( S \\)`)}:
                    ${escape(`\\[ S = \\sum_{i=1}^{n} (y_i - (a + bx_i))^2 \\]`)}
                    Here, in the equation:</p> <ul><li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( n \\)`)} represents the number of data points.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( (x_i, y_i) \\)`)} represents each observed data point.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} are the coefficients (intercept and slope) of the regression line being fitted.</p></li> <li class="svelte-98uzi2"><p class="svelte-98uzi2">${escape(`\\( (y_i - (a + bx_i)) \\)`)} represents the residual (the difference between the observed ${escape(`\\( y_i \\)`)} and the predicted ${escape(`\\( a + bx_i \\)`)} value).</p></li></ul> <p class="svelte-98uzi2">Differentiating \\(S\\) with respect to \\(a\\) and \\(b\\), we get 
                    ${escape(`\\[
                        \\begin{aligned}
                        \\frac{\\delta S}{\\delta a} &= -2\\sum (y_i - (a + bx_i)) \\\\
                                                     &= -2n[\\overline{Y} -a - b\\overline{X}]\\\\
                        \\frac{\\delta S}{\\delta b} &= -2\\sum x_i(y_i - (a + bx_i))\\\\
                                                     &= -2[\\sum x_iy_i - na\\overline{X} - b\\sum x_i^2]
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">For minima, the above derivatives are set to zero.
                    ${escape(`\\[
                        \\begin{aligned}
                        \\overline{Y} -a - b\\overline{X} &= 0\\\\
                        \\implies a &= \\overline{Y} - b\\overline{X}\\\\
                        \\sum x_iy_i -na\\overline{X} - b\\sum x_i^2 &= 0\\\\
                        \\sum x_i y_i -n\\overline{XY} + nb\\overline{X}^2 - b\\sum x_i^2 &= 0
                        
                        \\end{aligned}
                        \\]
                    `)}
                    After simplification, we get
                    ${escape(`\\[
                        \\begin{aligned}
                        b &= \\frac{\\sum x_i y_i - n\\overline{XY}}{\\sum x_i^2 - n\\overline{X}^2}\\\\
                        \\implies b &= \\frac{\\sum (x_i - \\overline{X})(y_i - \\overline{Y})}{\\sum (x_i - \\overline{X})^2}
                        \\end{aligned}
                        \\]`)}</p> <p class="svelte-98uzi2">The Least Squares Method calculates ${escape(`\\( a \\)`)} and ${escape(`\\( b \\)`)} values that minimize ${escape(`\\( S \\)`)}, making the fitted regression line the &quot;best fit&quot; to the data.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-b4l865">\\(b\\) is called the <strong class="svelte-98uzi2">coefficient of regression</strong>.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-13bl8bq">Summary</h6> <p class="svelte-98uzi2" data-svelte-h="svelte-1jchuvd">To calculate the line of regression, follow these steps:</p> <div><strong class="svelte-98uzi2" data-svelte-h="svelte-1rhfhkp">Step 1</strong>: Make the following table:
                ${validate_component(DataTable, "DataTable").$$render(
            $$result,
            {
              style: "width: 100%;margin-top: 1em;margin-bottom: 1em;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(x_i\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(y_i\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(x_i^2\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(x_iy_i\\)`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\vdots\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\vdots\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\vdots\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\vdots\\)`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\sum x_i\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\sum y_i\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\sum x_i^2\\)`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `\\(\\sum x_iy_i\\)`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}</div> <div><strong class="svelte-98uzi2" data-svelte-h="svelte-1gnuaow">Step 2</strong>: Calculate ${escape(`\\[\\begin{aligned}
                \\overline{X} &= \\frac{\\sum x_i}{n}\\\\
                \\overline{Y} &= \\frac{\\sum y_i}{n}
                \\end{aligned}\\]`)}</div> <div><strong class="svelte-98uzi2" data-svelte-h="svelte-1bvgl3f">Step 3</strong>: Calculate ${escape(`\\(n \\overline{XY}\\)`)} and ${escape(`\\(\\overline{X}^2\\)`)}</div> <div><strong class="svelte-98uzi2" data-svelte-h="svelte-15a2ivm">Step 4</strong>: Calculate ${escape(`\\[\\begin{aligned}
                b &= \\frac{\\sum x_i y_i - n\\overline{XY}}{\\sum x_i^2 - n \\overline{X}^2}\\\\
                a &= \\overline{Y} - b\\overline{X}
                \\end{aligned}\\]`)}</div> <div data-svelte-h="svelte-2qkl"><strong class="svelte-98uzi2">Step 5</strong>: Plot the line \\(Y = a + bX\\).</div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2">Calculate the coefficient of regression \\(b\\) for ${escape(`\\(X = ${numbersX}\\)`)} and ${escape(`\\(Y = ${numbersY}\\)`)}. Plot the data and draw the line of regression.</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bf89MxU3.js.map
