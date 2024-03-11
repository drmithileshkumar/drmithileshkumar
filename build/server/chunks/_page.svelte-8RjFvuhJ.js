import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-XqFGBeRf.js';
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

const css = {
  code: "article.svelte-4h8i2n{display:flex;flex-direction:column;gap:0.5em}p.svelte-4h8i2n,li.svelte-4h8i2n{opacity:0.8}h4.svelte-4h8i2n,h5.svelte-4h8i2n{margin:0.5em 0}h5.svelte-4h8i2n{font-size:1.7em}.question.svelte-4h8i2n{cursor:pointer;padding:0.3em}",
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
  let code1 = `<h1>Quantum Computation</H1>
<p>There are various disciplines in quantum computation.<p>`;
  let code2 = `<!DOCTYPE html>
<head>
    <body>
    </body>
</head>
<article>
    <html>
    </html>
<article>
<title>My Page</title>`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-775k1p_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-775k1p_END -->`, ""} <article class="svelte-4h8i2n">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-4h8i2n" data-svelte-h="svelte-1cd8yhl">Practice Problems</h4> <h5 class="svelte-4h8i2n" data-svelte-h="svelte-17d92cp">Fundamentals of WWW, HTML and XHTML</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-4h8i2n" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].topics[0].name,
              url: $navList[0].topics[0].url,
              topics: $navList[0].topics[0].topics,
              expanded: false
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-10fyu1s"><p class="svelte-4h8i2n">Which of the following is not a valid IP address:</p> <ol><li class="svelte-4h8i2n">172.168.0.1</li> <li class="svelte-4h8i2n">172.168.0.0.1</li> <li class="svelte-4h8i2n">255.255.255.255</li> <li class="svelte-4h8i2n">256.255.0.1</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-xyii0q"><p class="svelte-4h8i2n">If it were allowed to use 36 bit IP addresses, how many unique IP address would be there?</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-tq5ciu"><p class="svelte-4h8i2n">If you want to edit an existing document, which is the right HTTP method to use:</p> <ol><li class="svelte-4h8i2n">GET</li> <li class="svelte-4h8i2n">POST</li> <li class="svelte-4h8i2n">PUT</li> <li class="svelte-4h8i2n">DELETE</li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-fktuqt">Find errors in the following HTML code:</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: xml$1, code: code1 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-2hhpg5">Correct the document structure.</p> ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: xml$1, code: code2 }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-fx8zfz"><p class="svelte-4h8i2n">Which of the tags has <code>href</code> as attribute</p> <ol><li class="svelte-4h8i2n"><code>a</code></li> <li class="svelte-4h8i2n"><code>link</code></li> <li class="svelte-4h8i2n"><code>img</code></li> <li class="svelte-4h8i2n"><code>input</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-998zwc"><p class="svelte-4h8i2n">Which of the tags has <code>src</code> as attribute</p> <ol><li class="svelte-4h8i2n"><code>a</code></li> <li class="svelte-4h8i2n"><code>link</code></li> <li class="svelte-4h8i2n"><code>img</code></li> <li class="svelte-4h8i2n"><code>input</code></li> <li class="svelte-4h8i2n"><code>source</code></li> <li class="svelte-4h8i2n"><code>audio</code></li> <li class="svelte-4h8i2n"><code>video</code></li> <li class="svelte-4h8i2n"><code>table</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1bzd1yg"><p class="svelte-4h8i2n">List any five organization elements.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n"><p class="svelte-4h8i2n" data-svelte-h="svelte-1bx3gkz">Create a table that shows possible outcomes of rolling two die. Fill the cells with random outcomes. Either use html entities or images for the die face.</p> <ol><li class="svelte-4h8i2n">⚀ <code>${escape("&#9856;")}</code></li> <li class="svelte-4h8i2n">⚁ <code>${escape("&#9857;")}</code></li> <li class="svelte-4h8i2n">⚂ <code>${escape("&#9858;")}</code></li> <li class="svelte-4h8i2n">⚃ <code>${escape("&#9859;")}</code></li> <li class="svelte-4h8i2n">⚄ <code>${escape("&#9860;")}</code></li> <li class="svelte-4h8i2n">⚅ <code>${escape("&#9861;")}</code></li></ol></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ltvxmz"><p class="svelte-4h8i2n">Create a definition list showing state names (as dt) and at least two cities (as dd) in each state.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-kbe2yo"><p class="svelte-4h8i2n">Solve the above problem using nested lists: one list for state names and inside each item another list for cities.</p></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-4h8i2n" data-svelte-h="svelte-1ciqlpg"><p class="svelte-4h8i2n">Create a form for setting up profile of a costumer. It should take inputs for name, age, gender, photo, house number, street, locality, city, zip code, state. It should contain a submit button.</p></div>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8RjFvuhJ.js.map
