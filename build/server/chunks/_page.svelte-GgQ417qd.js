import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-uHUqA4vB.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-1wnnjd3{display:flex;flex-direction:column;gap:0.5em}p.svelte-1wnnjd3,li.svelte-1wnnjd3{opacity:0.8}h4.svelte-1wnnjd3{margin:0.5em 0}strong.svelte-1wnnjd3{color:rgb(159, 116, 7);opacity:1}.question.svelte-1wnnjd3{cursor:pointer;padding:0.3em}table.svelte-1wnnjd3{border-collapse:collapse;margin:auto;margin-top:1em;margin-bottom:1em}td.svelte-1wnnjd3{border:1px solid;text-align:center;padding:0.5em}",
  map: null
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

export { Page as default };
//# sourceMappingURL=_page.svelte-GgQ417qd.js.map
