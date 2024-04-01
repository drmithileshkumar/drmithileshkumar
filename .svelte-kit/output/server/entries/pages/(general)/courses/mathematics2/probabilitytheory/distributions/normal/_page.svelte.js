import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { c as currentPath, d as darkMode, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-wk6i9k{display:flex;flex-direction:column;gap:0.7em}p.svelte-wk6i9k,li.svelte-wk6i9k{opacity:0.8}h4.svelte-wk6i9k{margin:0.7em 0}strong.svelte-wk6i9k{color:rgb(159, 116, 7);opacity:1}.image.svelte-wk6i9k{width:300px;margin:auto}",
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
  set_store_value(currentPath, $currentPath = "Normal Distribution", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ezl8sv_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/normal"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ezl8sv_END -->`, ""} <article class="svelte-wk6i9k">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wk6i9k" data-svelte-h="svelte-12z9fp5">NORMAL DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div><p class="svelte-wk6i9k" data-svelte-h="svelte-1a6rgq4">Normal distribution is also called Gaussian distribution.</p> <div class="definition" style="padding-bottom: 0.1em;">The probability density function for normal distribution is defined as ${escape(`\\[\\begin{aligned}
                    f(x) &= \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/2\\sigma^2}
                    \\end{aligned}\\]`)}
                    where <ol><li class="svelte-wk6i9k" data-svelte-h="svelte-qy3pta">\\(-\\infty \\lt x\\lt \\infty\\)</li> <li class="svelte-wk6i9k" data-svelte-h="svelte-7llnot">\\(f(x)\\geq 0\\)</li> <li class="svelte-wk6i9k">${escape(`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`)}</li></ol>
                    The corresponding distribution function is given by ${escape(`\\[\\begin{aligned}
                    F(x) &= P(X\\leq x)\\\\
                         &= \\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-(u - \\mu)^2/2\\sigma^2}du
                    \\end{aligned}\\]`)}
                    If \\(X\\) has the distribution function given as above, we say that the random variable \\(X\\) is <em data-svelte-h="svelte-17f6idn">normally distributed</em> with mean \\(\\mu\\) and variance \\(\\sigma^2\\).</div> <div class="definition">We can replace ${escape(`\\[Z = \\frac{X -\\mu}{\\sigma}\\]`)} For this variable mean is zero and variance is 1. We can write the density function as ${escape(`\\[f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\]`)} This function is called the <strong class="svelte-wk6i9k" data-svelte-h="svelte-bdnefg">standard normal density function</strong>.</div> <div class="image svelte-wk6i9k" data-svelte-h="svelte-s217sd"><img src="/courses/mathematics2/normal.jpg" alt="normal" width="100%"></div></div>`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
