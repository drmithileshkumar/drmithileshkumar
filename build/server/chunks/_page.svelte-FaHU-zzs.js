import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { N as NavList } from './NavList-dME8fp5s.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';
import './index2-z1g76_ny.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-4h8i2n{display:flex;flex-direction:column;gap:0.5em}li.svelte-4h8i2n{opacity:0.8}h4.svelte-4h8i2n,h5.svelte-4h8i2n{margin:0.5em 0}h5.svelte-4h8i2n{font-size:1.7em}.question.svelte-4h8i2n{cursor:pointer;padding:0.3em}",
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
  set_store_value(currentPath, $currentPath = "Practice Problems", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1idnyi_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/practice"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1idnyi_END -->`, ""} <article class="svelte-4h8i2n">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-4h8i2n" data-svelte-h="svelte-1cd8yhl">Practice Problems</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-4h8i2n" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].topics[2].name,
              url: $navList[0].topics[2].url,
              topics: $navList[0].topics[2].topics,
              expanded: false
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} <h5 class="svelte-4h8i2n" data-svelte-h="svelte-1sgnce7">Variables</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1vzq9sf">Describe the three parts of javascript.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-jddvpd">Describe two ways to include javascript inside html.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-twt89j">When should we include javascript at the end of the body tag?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-113as5g">Which of the following are not a valid identifier?
                <ol><li class="svelte-4h8i2n">sum</li> <li class="svelte-4h8i2n">1sum</li> <li class="svelte-4h8i2n">$sum</li> <li class="svelte-4h8i2n">_sum</li> <li class="svelte-4h8i2n">43</li> <li class="svelte-4h8i2n">total sum</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-6jsoci">What are three ways in which a variable can be declared in javascript?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1606nps">What are values of a boolean variable?</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-njt1ay">Show three ways to write a string in javascript.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ai9ws9">Show two ways to create an array in javascript.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1dkcl6e">Create a javascript object to represent a mobile phone which is described by keys <code>name, brand, year, os</code> and <code>price</code>. Use appropriate values for the keys.</div>`;
        }
      })}`;
    }
  })}  <h5 class="svelte-4h8i2n" data-svelte-h="svelte-1id0inj">Expressions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-4hqc4q">Write the javascript expression for the following: 
                <ol><li class="svelte-4h8i2n">sum of 12 and 13</li> <li class="svelte-4h8i2n">difference of 13 and 12</li> <li class="svelte-4h8i2n">product of 12 and 13</li> <li class="svelte-4h8i2n">divide 12 by 13</li> <li class="svelte-4h8i2n">calculate 12<sup>13</sup></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ruvf5v">Calculate the value of the following expressions:
                <ol><li class="svelte-4h8i2n">5/2 - 1</li> <li class="svelte-4h8i2n">2 - 1.49</li> <li class="svelte-4h8i2n">2 / 2 - 1</li> <li class="svelte-4h8i2n">6 * 3 / 2 + 2</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-u70rdf">What is the value of the following Boolean expressions?
                <ol><li class="svelte-4h8i2n">2 &lt; 4</li> <li class="svelte-4h8i2n">2 &gt;= 2</li> <li class="svelte-4h8i2n">(2 &lt; 2) || (2 == 2)</li> <li class="svelte-4h8i2n">(2 &lt; 2) &amp;&amp; (2 == 2)</li> <li class="svelte-4h8i2n">0 == &#39;0&#39;</li> <li class="svelte-4h8i2n">0 === &#39;0&#39;</li> <li class="svelte-4h8i2n">0 != &#39;0&#39;</li> <li class="svelte-4h8i2n">0 !== &#39;0&#39;</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1fykm3l"><ol><li class="svelte-4h8i2n">If <code>str1 = &#39;Client&#39;</code> and <code>st2 = &#39;Side&#39;</code>, what is the value of <code>str1 + str2</code> ?</li> <li class="svelte-4h8i2n">Consider a variable <code>let sum = 12</code> and a string <code>let str = &quot;The sum is 12&quot;</code>. Write the string using string literal that uses <code>str</code> as a variable inside the string literal.</li> <li class="svelte-4h8i2n">What is the length of the string <code>&quot;Hello World!&quot;</code> ?</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-imwprd"><ul>Write an array that contains first 10 prime numbers</ul> <ul>Increase the 5th number on the array by 1</ul> <ul>Remove the last element of the array</ul> <ul>Add a new prime larger than any prime (in the given array) to the above array.</ul></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-q909xl">Given arrays <code>let arr1 = [1, 2]</code> and <code>let arr2 = [4, 7]</code>. Write a javascript code outputs <code>[1, 2, 4, 7]</code>.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n">What is the output of the following code?
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `let myPhone = {
    name: 'iPhone',
    company: 'Apple',
    date: '2023',
    price: 100000,
    color: 'blue'
}
let { name, company } = myPhone;
console.log(name, company);
console.log(Object.keys(myPhone))`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-FaHU-zzs.js.map
