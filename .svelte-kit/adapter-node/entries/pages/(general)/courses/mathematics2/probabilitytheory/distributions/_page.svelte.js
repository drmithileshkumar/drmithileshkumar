import { a as subscribe, b as set_store_value } from "../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../chunks/ssr2.js";
import { p as page } from "../../../../../../../chunks/stores3.js";
import { C as Card } from "../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../chunks/stores.js";
import { c as contentNav, a as contents } from "../../../../../../../chunks/content5.js";
import { P as Pathlist } from "../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-1wnnjd3{display:flex;flex-direction:column;gap:0.5em}p.svelte-1wnnjd3,li.svelte-1wnnjd3{opacity:0.8}h4.svelte-1wnnjd3{margin:0.5em 0}strong.svelte-1wnnjd3{color:rgb(159, 116, 7);opacity:1}.question.svelte-1wnnjd3{cursor:pointer;padding:0.3em}table.svelte-1wnnjd3{border-collapse:collapse;margin:auto;margin-top:1em;margin-bottom:1em}td.svelte-1wnnjd3{border:1px solid;text-align:center;padding:0.5em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    //@ts-nocheck\\r\\n    import {page} from \'$app/stores\';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\"\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $darkMode = false;\\r\\n    $currentPath = \\"Probability Distributions\\";\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: rgb(159, 116, 7);\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n    table {\\r\\n        border-collapse: collapse;\\r\\n        margin: auto;\\r\\n        margin-top: 1em;\\r\\n        margin-bottom: 1em;\\r\\n    }\\r\\n    td {\\r\\n        border: 1px solid;\\r\\n        text-align: center;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head>\\r\\n<article use:typeset>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        PROBABILITY DISTRIBUTIONS\\r\\n    </h4>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div>\\r\\n                <div class=\\"definition\\">\\r\\n                    <strong>Probability distribution</strong> is a function that gives the probability of each outcome of an experiment.\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <ol>\\r\\n                    <li>\\r\\n                        Suppose a fair coin is tossed once. The sample space of this experiment is {`\\\\\\\\[S = \\\\\\\\{H, T\\\\\\\\}\\\\\\\\]`} Since the coin is fair, we say that {`\\\\\\\\[\\\\\\\\begin{aligned}p(H) &= \\\\\\\\frac{1}{2}\\\\\\\\\\\\\\\\\\r\\n                        p(T) &= \\\\\\\\frac{1}{2} \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                        In this case, we say that the probability distribution is the function {`\\\\\\\\[p: \\\\\\\\{H, T\\\\\\\\}\\\\\\\\to \\\\\\\\{\\\\\\\\frac{1}{2}\\\\\\\\}\\\\\\\\]`}\\r\\n                    </li>\\r\\n                    <li>\\r\\n                        Suppose the coin was not fair and it is more likely to get \\\\(H\\\\) than \\\\(T\\\\). Say, {`\\\\\\\\[\\\\\\\\begin{aligned}p(H) &= \\\\\\\\frac{3}{4}\\\\\\\\\\\\\\\\\\r\\n                        p(T) &= \\\\\\\\frac{1}{4} \\\\\\\\end{aligned}\\\\\\\\]`} In this case, \\\\(p\\\\) defines the probability distribution and we write {`\\\\\\\\[p: \\\\\\\\{H, T\\\\\\\\}\\\\\\\\to \\\\\\\\{\\\\\\\\frac{1}{4}, \\\\\\\\frac{3}{4}\\\\\\\\}\\\\\\\\]`}\\r\\n                    </li>\\r\\n                </ol>\\r\\n            </div>\\r\\n            <div class=\\"remark\\">\\r\\n                <p>Probability distribution is sometimes called probability function as well.</p>\\r\\n            </div>\\r\\n            <div class=\\"definition\\">\\r\\n                When the sample space is finite, we get discrete probability distribution and it is written in the table form.\\r\\n            </div>\\r\\n            <div class=\\"examples\\">\\r\\n                <ol>\\r\\n                    <li>\\r\\n                        Suppose two fair coins are tossed once. Then the sample space is {`\\\\\\\\[S = \\\\\\\\{HH, HT, TH, TT\\\\\\\\}\\\\\\\\]`} and we have  {`\\\\\\\\[\\\\\\\\begin{aligned}p(HH) &= \\\\\\\\frac{1}{4}\\\\\\\\\\\\\\\\\\r\\n                        p(HT) &= \\\\\\\\frac{1}{4}\\\\\\\\\\\\\\\\\\r\\n                        p(TH) &= \\\\\\\\frac{1}{4}\\\\\\\\\\\\\\\\\\r\\n                        p(TT) &= \\\\\\\\frac{1}{4} \\\\\\\\end{aligned}\\\\\\\\]`}\\r\\n                        We write it in the table as follows:\\r\\n                        <table>\\r\\n                            <tr>\\r\\n                                <td>\\\\(x\\\\)</td>\\r\\n                                <td>HH</td>\\r\\n                                <td>HT</td>\\r\\n                                <td>TH</td>\\r\\n                                <td>TT</td>\\r\\n                            </tr>\\r\\n                            <tr>\\r\\n                                <td>\\\\(p(x)\\\\)</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                            </tr>\\r\\n                        </table>\\r\\n                        We can treat this case as a bivariate data where \\\\(X\\\\) corresponds to the first coin and \\\\(Y\\\\) corresponds to the second coin. The probability distribution now is written as \\\\(p(X = H, Y = T)\\\\). It is referred as <strong>joint distribution</strong>.\\r\\n                        <table>\\r\\n                            <tr>\\r\\n                                <td>\\\\((x, y)\\\\)</td>\\r\\n                                <td>H</td>\\r\\n                                <td>T</td>\\r\\n                            </tr>\\r\\n                            <tr>\\r\\n                                <td>H</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                            </tr>\\r\\n                            <tr>\\r\\n                                <td>T</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                                <td>{`\\\\\\\\(\\\\\\\\frac{1}{4}\\\\\\\\)`}</td>\\r\\n                            </tr>\\r\\n                        </table>\\r\\n                    </li>\\r\\n                </ol>\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div class=\\"question\\">Write probability distributions for problems in the practice set. </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    \\r\\n</article>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAO,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CASA,qBAAO,CACH,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACvB,OAAO,CAAE,CACb,CAIA,wBAAU,CACN,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,KACb,CACA,oBAAM,CACF,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,GACnB,CACA,iBAAG,CACC,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,KACb"}'
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
  set_store_value(currentPath, $currentPath = "Probability Distributions", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-12fweyz_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-12fweyz_END -->`, ""} <article class="svelte-1wnnjd3">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1wnnjd3" data-svelte-h="svelte-1ly5i66">PROBABILITY DISTRIBUTIONS</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div data-svelte-h="svelte-1ysucrk"><div class="definition"><strong class="svelte-1wnnjd3">Probability distribution</strong> is a function that gives the probability of each outcome of an experiment.</div></div> <div class="examples"><ol><li class="svelte-1wnnjd3">Suppose a fair coin is tossed once. The sample space of this experiment is ${escape(`\\[S = \\{H, T\\}\\]`)} Since the coin is fair, we say that ${escape(`\\[\\begin{aligned}p(H) &= \\frac{1}{2}\\\\
                        p(T) &= \\frac{1}{2} \\end{aligned}\\]`)}
                        In this case, we say that the probability distribution is the function ${escape(`\\[p: \\{H, T\\}\\to \\{\\frac{1}{2}\\}\\]`)}</li> <li class="svelte-1wnnjd3">Suppose the coin was not fair and it is more likely to get \\(H\\) than \\(T\\). Say, ${escape(`\\[\\begin{aligned}p(H) &= \\frac{3}{4}\\\\
                        p(T) &= \\frac{1}{4} \\end{aligned}\\]`)} In this case, \\(p\\) defines the probability distribution and we write ${escape(`\\[p: \\{H, T\\}\\to \\{\\frac{1}{4}, \\frac{3}{4}\\}\\]`)}</li></ol></div> <div class="remark" data-svelte-h="svelte-1xjksa9"><p class="svelte-1wnnjd3">Probability distribution is sometimes called probability function as well.</p></div> <div class="definition" data-svelte-h="svelte-m2ec0n">When the sample space is finite, we get discrete probability distribution and it is written in the table form.</div> <div class="examples"><ol><li class="svelte-1wnnjd3">Suppose two fair coins are tossed once. Then the sample space is ${escape(`\\[S = \\{HH, HT, TH, TT\\}\\]`)} and we have  ${escape(`\\[\\begin{aligned}p(HH) &= \\frac{1}{4}\\\\
                        p(HT) &= \\frac{1}{4}\\\\
                        p(TH) &= \\frac{1}{4}\\\\
                        p(TT) &= \\frac{1}{4} \\end{aligned}\\]`)}
                        We write it in the table as follows:
                        <table class="svelte-1wnnjd3"><tr data-svelte-h="svelte-17kx8rw"><td class="svelte-1wnnjd3">\\(x\\)</td> <td class="svelte-1wnnjd3">HH</td> <td class="svelte-1wnnjd3">HT</td> <td class="svelte-1wnnjd3">TH</td> <td class="svelte-1wnnjd3">TT</td></tr> <tr><td class="svelte-1wnnjd3" data-svelte-h="svelte-9d0flq">\\(p(x)\\)</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr></table>
                        We can treat this case as a bivariate data where \\(X\\) corresponds to the first coin and \\(Y\\) corresponds to the second coin. The probability distribution now is written as \\(p(X = H, Y = T)\\). It is referred as <strong class="svelte-1wnnjd3" data-svelte-h="svelte-w72bha">joint distribution</strong>.
                        <table class="svelte-1wnnjd3"><tr data-svelte-h="svelte-1p9yo2c"><td class="svelte-1wnnjd3">\\((x, y)\\)</td> <td class="svelte-1wnnjd3">H</td> <td class="svelte-1wnnjd3">T</td></tr> <tr><td class="svelte-1wnnjd3" data-svelte-h="svelte-17mw80m">H</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr> <tr><td class="svelte-1wnnjd3" data-svelte-h="svelte-17twvwi">T</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td> <td class="svelte-1wnnjd3">${escape(`\\(\\frac{1}{4}\\)`)}</td></tr></table></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-1wnnjd3" data-svelte-h="svelte-paarto">Write probability distributions for problems in the practice set.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
