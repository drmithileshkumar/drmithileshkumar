import { c as create_ssr_component, s as subscribe, l as set_store_value, v as validate_component, e as escape } from "../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../chunks/stores3.js";
import { c as contents } from "../../../../../../chunks/content.js";
const css = {
  code: "article.svelte-n59hwk{display:flex;flex-direction:column;gap:0.5em}p.svelte-n59hwk,li.svelte-n59hwk{opacity:0.8}h2.svelte-n59hwk,h3.svelte-n59hwk{margin:0.5em 0}strong.svelte-n59hwk{color:goldenrod;opacity:1}.question.svelte-n59hwk{cursor:pointer;padding:0.3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Correlation between two variables", $currentPath);
  set_store_value(darkMode, $darkMode = true, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return `${$$result.head += `<!-- HEAD_svelte-ubwl45_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/correlation2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ubwl45_END -->`, ""} <article class="svelte-n59hwk"><h2 class="svelte-n59hwk" data-svelte-h="svelte-5c76qq">Correlation</h2> <h3 class="svelte-n59hwk" data-svelte-h="svelte-187bs03">Correlation between two variables</h3> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-n59hwk" data-svelte-h="svelte-o1nsqd">What is correlation between two variables?</div> <div class="solution"><p class="svelte-n59hwk" data-svelte-h="svelte-15i95sw">Correlation between two variables is a statistical measure that describes the extent to which two variables change together, and the strength of their relationship. A high correlation means that as one variable changes, either up or down, the other variable tends to change in a specific direction consistently. The key aspects of correlation include:</p> <ul><li class="svelte-n59hwk" data-svelte-h="svelte-3qxxkv"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Direction of Relationship:</strong> Correlation can be positive or negative. Positive correlation means that as one variable increases, the other also increases. Negative correlation means that as one variable increases, the other decreases.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-zj7qe7">Magnitude of Relationship:</strong> The strength of the correlation is indicated by the correlation coefficient, typically denoted as ${escape(`\\( r \\)`)}. The value of ${escape(`\\( r \\)`)} ranges from -1 to +1.</p></li> <li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-19wdlap">Correlation Coefficient:</strong> Mathematically, the correlation coefficient ${escape(`\\( r \\)`)} for a sample of size ${escape(`\\( n \\)`)}, with variables ${escape(`\\( X \\)`)} and ${escape(`\\( Y \\)`)} having means ${escape(`\\( \\bar{X} \\)`)} and ${escape(`\\( \\bar{Y} \\)`)} respectively, is defined as:</p></li></ul> <p class="svelte-n59hwk">${escape(`\\[ r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{X})(y_i - \\bar{Y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{X})^2 \\sum_{i=1}^{n} (y_i - \\bar{Y})^2}} \\]`)}</p> <ul><li class="svelte-n59hwk"><p class="svelte-n59hwk"><strong class="svelte-n59hwk" data-svelte-h="svelte-1s1sqm6">Interpretation:</strong> A value of ${escape(`\\( r = 1 \\)`)} indicates a perfect positive correlation, while ${escape(`\\( r = -1 \\)`)} indicates a perfect negative correlation. A value of ${escape(`\\( r = 0 \\)`)} means there is no linear correlation between the variables.</p></li> <li class="svelte-n59hwk" data-svelte-h="svelte-qug4sc"><p class="svelte-n59hwk"><strong class="svelte-n59hwk">Limitations:</strong> It&#39;s important to note that correlation does not imply causation. Two variables may be correlated without one causing the other to occur.</p></li></ul> <p class="svelte-n59hwk" data-svelte-h="svelte-1fgif5i">Correlation is widely used in various fields such as economics, psychology, and environmental science to understand relationships and make predictions.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
