import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-98uzi2{color:goldenrod;opacity:1}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import DataTable, {Head, Body, Row, Cell} from \'@smui/data-table\';\\r\\n    import { randSubset } from \'$lib/utils/common/common\';\\r\\n    import { onMount } from \'svelte\';\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Karl Pearson\'s coefficient of correlation (r)\\";\\r\\n    $darkMode = false;\\r\\n    let numbersX = [];\\r\\n    let numbersY = [];\\r\\n    let n = 15;\\r\\n    let k= 7;\\r\\n    onMount(() => {\\r\\n        numbersX = [];\\r\\n        numbersY = [];\\r\\n        numbersX = randSubset(n, k);\\r\\n        numbersY = randSubset(n, k);\\r\\n    })\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.7em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/pearson\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Correlation\\r\\n    </h4>\\r\\n    <h5>Karl Pearson\'s coefficient of correlation (r)</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <p>\\r\\n                Karl Pearson\'s coefficient of correlation, commonly denoted as {`\\\\\\\\( r \\\\\\\\)`}, is a measure of the strength and direction of a linear relationship between two variables. It is a widely used method in statistics for quantifying the degree of correlation. \\r\\n            </p>\\r\\n            <p>\\r\\n                Pearson\'s coefficient is defined as the covariance of the two variables divided by the product of their standard deviations. It quantifies the degree to which two variables are linearly related.\\r\\n            </p>\\r\\n            <p>\\r\\n                For a sample size of {`\\\\\\\\( n \\\\\\\\)`}, with variables {`\\\\\\\\( X \\\\\\\\)`} and {`\\\\\\\\( Y \\\\\\\\)`} having means {`\\\\\\\\( \\\\\\\\bar{X} \\\\\\\\)`} and {`\\\\\\\\( \\\\\\\\bar{Y} \\\\\\\\)`} respectively, Pearson\'s {`\\\\\\\\( r \\\\\\\\)`} is calculated as:\\r\\n            </p>\\r\\n            <p>{`\\\\\\\\[ r = \\\\\\\\frac{\\\\\\\\sum_{i=1}^{n} (x_i - \\\\\\\\bar{X})(y_i - \\\\\\\\bar{Y})}{\\\\\\\\sqrt{\\\\\\\\sum_{i=1}^{n} (x_i - \\\\\\\\bar{X})^2 \\\\\\\\sum_{i=1}^{n} (y_i - \\\\\\\\bar{Y})^2}} \\\\\\\\]`}</p>\\r\\n            <p>\\r\\n                Pearson\'s {`\\\\\\\\( r \\\\\\\\)`} ranges from -1 to +1. A value of +1 indicates a perfect positive linear correlation, -1 indicates a perfect negative linear correlation, and 0 indicates no linear correlation.\\r\\n            </p>\\r\\n            <p>\\r\\n                The magnitude of {`\\\\\\\\( r \\\\\\\\)`} indicates the strength of the correlation, while the sign indicates the direction (positive or negative).\\r\\n            </p>\\r\\n            <p>\\r\\n                Pearson\'s correlation coefficient only measures linear relationships and might not accurately represent non-linear relationships. Also, it does not imply causation.\\r\\n            </p>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Calculation</h6>\\r\\n            <p><strong>Step 1:</strong> To calculate \\\\(r\\\\), first calculate the arithmetic means {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                \\\\\\\\bar{X} &= \\\\\\\\frac{x_1 + x_2 + \\\\\\\\cdots + x_n}{n}\\\\\\\\\\\\\\\\\\r\\n                \\\\\\\\bar{Y} &= \\\\\\\\frac{y_1 + y_2 + \\\\\\\\cdots + y_n}{n}\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`} \\r\\n            <strong>Step 2:</strong> Construct the following table</p>\\r\\n            <DataTable style=\\"width:100%\\">\\r\\n                <Head>\\r\\n                    <Row>\\r\\n                        <Cell>\\\\(x_i\\\\)</Cell>\\r\\n                        <Cell>\\\\(y_i\\\\)</Cell>\\r\\n                        <Cell>\\\\(x_i^2\\\\)</Cell>\\r\\n                        <Cell>\\\\(y_i^2\\\\)</Cell>\\r\\n                        <Cell>\\\\(x_iy_i\\\\)</Cell>\\r\\n                    </Row>\\r\\n                </Head>\\r\\n                <Body>\\r\\n                    <Row>\\r\\n                        <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\vdots\\\\)</Cell>\\r\\n                    </Row>\\r\\n                    <Row>\\r\\n                        <Cell>-</Cell>\\r\\n                        <Cell>-</Cell>\\r\\n                        <Cell>\\\\(\\\\sum x_i^2\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\sum y_i^2\\\\)</Cell>\\r\\n                        <Cell>\\\\(\\\\sum x_iy_i\\\\)</Cell>\\r\\n                    </Row>\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n            <p>\\r\\n                <strong>Step 3:</strong> Calculate {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                N &= \\\\\\\\sum x_iy_i - n\\\\\\\\bar{X}\\\\\\\\bar{Y}\\\\\\\\\\\\\\\\\\r\\n                D_1 &= \\\\\\\\sum x_i^2 - n\\\\\\\\bar{X}^2\\\\\\\\\\\\\\\\\\r\\n                D_2 &= \\\\\\\\sum y_i^2 - n\\\\\\\\bar{Y}^2\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n            </p>\\r\\n            <p>\\r\\n                <strong>Step 4:</strong> Now \\\\(r\\\\) can be calculated as {`\\\\\\\\[\\r\\n                    r = \\\\\\\\frac{N}{\\\\\\\\sqrt{D_1\\\\\\\\cdot D_2}}\\r\\n                    \\\\\\\\]`}\\r\\n            </p>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h6>Cauchy-Schwarz inequality</h6>\\r\\n            <div class=\\"theorem\\" use:typeset>\\r\\n                Given two sets of \\\\(n\\\\) real numbers \\\\(a_1, a_2, \\\\dots, a_n\\\\) and \\\\(b_1, b_2, \\\\dots, b_n\\\\), the following inequality holds: \\r\\n                {`\\\\\\\\[\\\\\\\\left (\\\\\\\\sum a_ib_i\\\\\\\\right )^2 \\\\\\\\leq \\\\\\\\sum a_i^2 \\\\\\\\sum b_i^2\\\\\\\\]`}\\r\\n            </div>\\r\\n            <div class=\\"proof\\" use:typeset>\\r\\n                <p>\\r\\n                    Let us define {`\\r\\n                    \\\\\\\\[\\r\\n                    \\\\\\\\begin{aligned}\\r\\n                    A &= \\\\\\\\sum a_i^2\\\\\\\\\\\\\\\\\\r\\n                    B &= \\\\\\\\sum b_i^2\\\\\\\\\\\\\\\\\\r\\n                    C &= \\\\\\\\sum a_ib_i\\r\\n                    \\\\\\\\end{aligned}    \\r\\n                    \\\\\\\\]\\r\\n                    `}\\r\\n                </p>\\r\\n                <p>\\r\\n                    That is, we need to show \\\\(C^2-AB\\\\leq 0\\\\). In other words, the quadratic equation \\\\(Ax^2 + 2Cx + B\\\\) has either one root or no roots, i.e. \\\\(Ax^2 + 2Cx + B\\\\geq 0\\\\)\\r\\n                </p>\\r\\n                <p>\\r\\n                    After substituting \\\\(A, B\\\\) and \\\\(C\\\\) and a little rearrangement of terms we can get\\r\\n                    {`\\\\\\\\[\\r\\n                        \\\\\\\\begin{aligned}\\r\\n                        Ax^2 + 2Cx + B &= \\\\\\\\sum (a_ix + b_i)^2\\\\\\\\\\\\\\\\\\r\\n                                       &\\\\\\\\geq 0 \\r\\n                        \\\\\\\\end{aligned}\\r\\n                        \\\\\\\\]`}\\r\\n                    Equality to 0 happens for \\\\(a_ix = -b_i\\\\)\\r\\n                </p>\\r\\n                <p>\\r\\n                    Cauchy-Schwarz inequality proves that \\\\(r\\\\) will lie between -1 and 1. Notice that \\\\(a_ix = -b_i\\\\) implies linear relationship between \\\\(a_i\\\\) and \\\\(b_i\\\\). For this case, \\\\(r\\\\) is equal to -1 or 1. That is why, Pearson\'s coefficient of correlation is said to show linear correlation between data points.\\r\\n                </p>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <h5>Questions</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">\\r\\n                Show that {`\\\\\\\\[\\\\\\\\begin{aligned}\\r\\n                \\\\\\\\sum (x_i - \\\\\\\\bar{X})(y_i - \\\\\\\\bar{Y}) &= \\\\\\\\sum x_iy_i - n\\\\\\\\bar{X}\\\\\\\\bar{Y}\\\\\\\\\\\\\\\\\\r\\n                \\\\\\\\sum (x_i - \\\\\\\\bar{X})^2 &= \\\\\\\\sum x_i^2 - n\\\\\\\\bar{X}^2\\\\\\\\\\\\\\\\\\r\\n                \\\\\\\\sum (y_i - \\\\\\\\bar{Y})^2 &= \\\\\\\\sum y_i^2 - n\\\\\\\\bar{Y}^2\\r\\n                \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            \\r\\n            <div class=\\"question\\">\\r\\n                {#key numbersX}\\r\\n                <p>\\r\\n                    Calculate \\\\(r\\\\) for X = {numbersX} and Y = {numbersY}.\\r\\n                </p>\\r\\n                {/key}\\r\\n            </div>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AA4BI,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,eAAM,CACF,OAAO,CAAE,GACb,CACQ,gBAAE,CAAE,gBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,gBAAG,CACC,SAAS,CAAE,KACf,CACA,gBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,oBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb,CAIA,uBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Karl Pearson's coefficient of correlation (r)", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let numbersX = [];
  let numbersY = [];
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1hdsuh1_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/pearson"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1hdsuh1_END -->`, ""} <article class="svelte-98uzi2">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-98uzi2" data-svelte-h="svelte-19r4q2a">Correlation</h4> <h5 class="svelte-98uzi2" data-svelte-h="svelte-15z7py7">Karl Pearson&#39;s coefficient of correlation (r)</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-98uzi2">Karl Pearson&#39;s coefficient of correlation, commonly denoted as ${escape(`\\( r \\)`)}, is a measure of the strength and direction of a linear relationship between two variables. It is a widely used method in statistics for quantifying the degree of correlation.</p> <p class="svelte-98uzi2" data-svelte-h="svelte-ps9cc4">Pearson&#39;s coefficient is defined as the covariance of the two variables divided by the product of their standard deviations. It quantifies the degree to which two variables are linearly related.</p> <p class="svelte-98uzi2">For a sample size of ${escape(`\\( n \\)`)}, with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)} having means ${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} respectively, Pearson&#39;s ${escape(`\\( r \\)`)} is calculated as:</p> <p class="svelte-98uzi2">${escape(`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`)}</p> <p class="svelte-98uzi2">Pearson&#39;s ${escape(`\\( r \\)`)} ranges from -1 to +1. A value of +1 indicates a perfect positive linear correlation, -1 indicates a perfect negative linear correlation, and 0 indicates no linear correlation.</p> <p class="svelte-98uzi2">The magnitude of ${escape(`\\( r \\)`)} indicates the strength of the correlation, while the sign indicates the direction (positive or negative).</p> <p class="svelte-98uzi2" data-svelte-h="svelte-yh444c">Pearson&#39;s correlation coefficient only measures linear relationships and might not accurately represent non-linear relationships. Also, it does not imply causation.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1vuv9xt">Calculation</h6> <p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-sat26l">Step 1:</strong> To calculate \\(r\\), first calculate the arithmetic means ${escape(`\\[\\begin{aligned}
                \\bar{X} &= \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\\\
                \\bar{Y} &= \\frac{y_1 + y_2 + \\cdots + y_n}{n}
                \\end{aligned}\\]`)} <strong class="svelte-98uzi2" data-svelte-h="svelte-9uzuys">Step 2:</strong> Construct the following table</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
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
                          return `\\(y_i^2\\)`;
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
                          return `-`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `-`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `\\(\\sum x_i^2\\)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `\\(\\sum y_i^2\\)`;
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
          })} <p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-8wm71b">Step 3:</strong> Calculate ${escape(`\\[\\begin{aligned}
                N &= \\sum x_iy_i - n\\bar{X}\\bar{Y}\\\\
                D_1 &= \\sum x_i^2 - n\\bar{X}^2\\\\
                D_2 &= \\sum y_i^2 - n\\bar{Y}^2
                \\end{aligned}\\]`)}</p> <p class="svelte-98uzi2"><strong class="svelte-98uzi2" data-svelte-h="svelte-1gxb9ry">Step 4:</strong> Now \\(r\\) can be calculated as ${escape(`\\[
                    r = \\frac{N}{\\sqrt{D_1\\cdot D_2}}
                    \\]`)}</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-98uzi2" data-svelte-h="svelte-1g8p96z">Cauchy-Schwarz inequality</h6> <div class="theorem">Given two sets of \\(n\\) real numbers \\(a_1, a_2, \\dots, a_n\\) and \\(b_1, b_2, \\dots, b_n\\), the following inequality holds: 
                ${escape(`\\[\\left (\\sum a_ib_i\\right )^2 \\leq \\sum a_i^2 \\sum b_i^2\\]`)}</div> <div class="proof"><p class="svelte-98uzi2">Let us define ${escape(`
                    \\[
                    \\begin{aligned}
                    A &= \\sum a_i^2\\\\
                    B &= \\sum b_i^2\\\\
                    C &= \\sum a_ib_i
                    \\end{aligned}    
                    \\]
                    `)}</p> <p class="svelte-98uzi2" data-svelte-h="svelte-f9rkl9">That is, we need to show \\(C^2-AB\\leq 0\\). In other words, the quadratic equation \\(Ax^2 + 2Cx + B\\) has either one root or no roots, i.e. \\(Ax^2 + 2Cx + B\\geq 0\\)</p> <p class="svelte-98uzi2">After substituting \\(A, B\\) and \\(C\\) and a little rearrangement of terms we can get
                    ${escape(`\\[
                        \\begin{aligned}
                        Ax^2 + 2Cx + B &= \\sum (a_ix + b_i)^2\\\\
                                       &\\geq 0 
                        \\end{aligned}
                        \\]`)}
                    Equality to 0 happens for \\(a_ix = -b_i\\)</p> <p class="svelte-98uzi2" data-svelte-h="svelte-1g05cdi">Cauchy-Schwarz inequality proves that \\(r\\) will lie between -1 and 1. Notice that \\(a_ix = -b_i\\) implies linear relationship between \\(a_i\\) and \\(b_i\\). For this case, \\(r\\) is equal to -1 or 1. That is why, Pearson&#39;s coefficient of correlation is said to show linear correlation between data points.</p></div>`;
        }
      })}`;
    }
  })} <h5 class="svelte-98uzi2" data-svelte-h="svelte-1984kyx">Questions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2">Show that ${escape(`\\[\\begin{aligned}
                \\sum (x_i - \\bar{X})(y_i - \\bar{Y}) &= \\sum x_iy_i - n\\bar{X}\\bar{Y}\\\\
                \\sum (x_i - \\bar{X})^2 &= \\sum x_i^2 - n\\bar{X}^2\\\\
                \\sum (y_i - \\bar{Y})^2 &= \\sum y_i^2 - n\\bar{Y}^2
                \\end{aligned}\\]`)}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-98uzi2"><p class="svelte-98uzi2">Calculate \\(r\\) for X = ${escape(numbersX)} and Y = ${escape(numbersY)}.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
