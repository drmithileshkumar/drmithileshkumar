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
  code: "article.svelte-1vxkvad.svelte-1vxkvad{display:flex;flex-direction:column;gap:0.7em}p.svelte-1vxkvad.svelte-1vxkvad,li.svelte-1vxkvad.svelte-1vxkvad{opacity:0.8}h4.svelte-1vxkvad.svelte-1vxkvad{margin:0.7em 0}h6.svelte-1vxkvad.svelte-1vxkvad{font-size:1em;margin:0.7em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1vxkvad.svelte-1vxkvad{color:rgb(159, 116, 7);opacity:1}.image.svelte-1vxkvad.svelte-1vxkvad{width:100%;margin:auto}.questions.svelte-1vxkvad li.svelte-1vxkvad::marker{color:red;font-size:1.2em;font-weight:bold}",
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
  return `${$$result.head += `<!-- HEAD_svelte-ezl8sv_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/distributions/normal"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-ezl8sv_END -->`, ""} <article class="svelte-1vxkvad">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1vxkvad" data-svelte-h="svelte-12z9fp5">NORMAL DISTRIBUTION</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div><p class="svelte-1vxkvad" data-svelte-h="svelte-1a6rgq4">Normal distribution is also called Gaussian distribution.</p> <div class="definition" style="padding-bottom: 0.1em;">The probability density function for normal distribution is defined as ${escape(`\\[\\begin{aligned}
                    f(x) &= \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x - \\mu)^2/2\\sigma^2}
                    \\end{aligned}\\]`)}
                    where <ol><li class="svelte-1vxkvad" data-svelte-h="svelte-qy3pta">\\(-\\infty \\lt x\\lt \\infty\\)</li> <li class="svelte-1vxkvad" data-svelte-h="svelte-7llnot">\\(f(x)\\geq 0\\)</li> <li class="svelte-1vxkvad">${escape(`\\(\\int_{-\\infty}^\\infty f(x)dx = 1\\)`)}</li></ol>
                    The corresponding distribution function is given by ${escape(`\\[\\begin{aligned}
                    F(x) &= P(X\\leq x)\\\\
                         &= \\frac{1}{\\sigma\\sqrt{2\\pi}}\\int_{-\\infty}^x e^{-(u - \\mu)^2/2\\sigma^2}du
                    \\end{aligned}\\]`)}
                    If \\(X\\) has the distribution function given as above, we say that the random variable \\(X\\) is <em data-svelte-h="svelte-17f6idn">normally distributed</em> with mean \\(\\mu\\) and variance \\(\\sigma^2\\).</div> <div class="definition">We can replace ${escape(`\\[Z = \\frac{X -\\mu}{\\sigma}\\]`)} For this variable mean is zero and variance is 1. We can write the density function as ${escape(`\\[f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\]`)} This function is called the <strong class="svelte-1vxkvad" data-svelte-h="svelte-bdnefg">standard normal density function</strong>. \\(Z\\) is called the <strong class="svelte-1vxkvad" data-svelte-h="svelte-1slgm9t">z-score</strong>.</div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1vxkvad" data-svelte-h="svelte-sbiv01">Features</h6> <div class="image svelte-1vxkvad" data-svelte-h="svelte-1ejuj71"><img src="/courses/mathematics2/normal.jpg" alt="normal" width="100%"></div> <p class="svelte-1vxkvad" data-svelte-h="svelte-qccxhq">Some of the basic features of normal distribution to keep in mind are</p> <ol data-svelte-h="svelte-ahtas9"><li class="svelte-1vxkvad">Normal density function forms a symmetric bell-shaped curve.</li> <li class="svelte-1vxkvad">This distribution is symmetric around the mean, meaning that the probability of observing a value to the left of the mean is equal to the probability of observing the same value to the right of the mean.</li> <li class="svelte-1vxkvad">The probability density function forms a bell-shaped curve, with the highest point at the mean. As values move away from the mean, the probability of observing those values decreases.</li> <li class="svelte-1vxkvad">In a normal distribution, the mean, median, and mode are all equal and located at the center of the distribution.</li> <li class="svelte-1vxkvad">The spread of the data in a normal distribution is characterized by the standard deviation. The empirical rule, also known as the 68-95-99.7 rule, states that in a normal distribution, approximately 68% of the data falls within one standard deviation of the mean, 95% falls within two standard deviations, and 99.7% falls within three standard deviations.</li></ol>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1vxkvad" data-svelte-h="svelte-x4n4oz">z-table</h6> <p class="svelte-1vxkvad" data-svelte-h="svelte-1qqf0sg">z-table gives the area under the normal distribution curve from left to a given value of z, i.e. the area is the probability of z having value upto the given value.</p> <div class="image svelte-1vxkvad" data-svelte-h="svelte-wo3d1y"><img width="100%" src="/courses/mathematics2/ztable1.webp" alt="ztable1"></div> <div class="image svelte-1vxkvad" data-svelte-h="svelte-pjzgqk"><img width="100%" src="/courses/mathematics2/ztable2.webp" alt="ztable2"></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-1vxkvad" data-svelte-h="svelte-1igya3x">Examples</h6> <div class="examples" data-svelte-h="svelte-1jwnijk"><ol><li class="svelte-1vxkvad">Height of adult humans</li> <li class="svelte-1vxkvad">IQ scores</li> <li class="svelte-1vxkvad">Weights of newborn babies</li> <li class="svelte-1vxkvad">Test scores</li> <li class="svelte-1vxkvad">Blood pressure</li></ol></div>`;
        }
      })}`;
    }
  })} <h4 class="svelte-1vxkvad" data-svelte-h="svelte-9or4p">Questions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="questions svelte-1vxkvad" data-svelte-h="svelte-e19gal"><ol><li class="svelte-1vxkvad">The heights of students in a class follow a normal distribution with a mean of 65 inches and a standard deviation of 3 inches. What percentage of students are taller than 70 inches?</li> <li class="svelte-1vxkvad">The scores on a standardized test follow a normal distribution with a mean of 500 and a standard deviation of 100. What percentage of students scored between 400 and 600?</li> <li class="svelte-1vxkvad">The weights of apples in a crate follow a normal distribution with a mean of 150 grams and a standard deviation of 20 grams. What percentage of apples weigh less than 140 grams?</li> <li class="svelte-1vxkvad">The IQ scores of a population follow a normal distribution with a mean of 100 and a standard deviation of 15. What percentage of the population has an IQ score between 85 and 115?</li> <li class="svelte-1vxkvad">The monthly electricity bills for a household follow a normal distribution with a mean of Rs 100 and a standard deviation of Rs 20. What percentage of households have a bill greater than Rs 120?</li> <li class="svelte-1vxkvad">The reaction times of drivers to a stimulus follow a normal distribution with a mean of 0.5 seconds and a standard deviation of 0.1 seconds. What percentage of drivers have a reaction time less than 0.4 seconds?</li> <li class="svelte-1vxkvad">The scores on a math test follow a normal distribution with a mean of 75 and a standard deviation of 10. What is the z-score for a student who scored 85 on the test?</li> <li class="svelte-1vxkvad">The heights of adult males in a population follow a normal distribution with a mean of 70 inches and a standard deviation of 3 inches. What is the probability that a randomly selected adult male is shorter than 68 inches?</li> <li class="svelte-1vxkvad">The diameters of bolts produced by a factory follow a normal distribution with a mean of 5 inches and a standard deviation of 0.1 inches. What percentage of bolts have a diameter between 4.9 and 5.1 inches?</li> <li class="svelte-1vxkvad">The blood pressure of adults follows a normal distribution with a mean of 120 mmHg and a standard deviation of 10 mmHg. What is the probability that a randomly selected adult has a blood pressure greater than 140 mmHg?</li></ol></div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
