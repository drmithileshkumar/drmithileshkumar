import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
import { r as randSubset } from "../../../../../../../../chunks/common.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
const css = {
  code: "article.svelte-98uzi2{display:flex;flex-direction:column;gap:0.5em}p.svelte-98uzi2,li.svelte-98uzi2{opacity:0.8}h4.svelte-98uzi2,h5.svelte-98uzi2{margin:0.5em 0}h5.svelte-98uzi2{font-size:1.7em}h6.svelte-98uzi2{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-98uzi2{color:goldenrod;opacity:1}.question.svelte-98uzi2{cursor:pointer;padding:0.3em}",
  map: null
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
export {
  Page as default
};
