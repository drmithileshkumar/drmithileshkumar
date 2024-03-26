import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-duPZN16B.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import 'd3';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: null
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
//# sourceMappingURL=_page.svelte-WYcsSeDF.js.map
