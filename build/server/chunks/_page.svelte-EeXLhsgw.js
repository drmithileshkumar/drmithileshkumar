import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { N as NavList } from './NavList-dME8fp5s.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './index2-z1g76_ny.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './prefixFilter-IAYI75FL.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';

const css$1 = {
  code: "article.svelte-wl5xjl{display:flex;flex-direction:column;gap:0.5em}p.svelte-wl5xjl{opacity:0.8}h4.svelte-wl5xjl,h5.svelte-wl5xjl{margin:0.5em 0}h5.svelte-wl5xjl{font-size:1.1em}h6.svelte-wl5xjl{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-wl5xjl{color:goldenrod;opacity:1}",
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
  set_store_value(currentPath, $currentPath = "Object Orientation and JavaScript", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-16hacw_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/basics"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-16hacw_END -->`, ""} <article class="svelte-wl5xjl">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-wl5xjl" data-svelte-h="svelte-mmuf8p">Object Orientation and JavaScript</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="svelte-wl5xjl" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
              $$result,
              {
                name: $navList[0].topics[2].topics[0].name,
                url: $navList[0].topics[2].topics[0].url,
                topics: $navList[0].topics[2].topics[0].topics,
                expanded: false
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-wl5xjl" data-svelte-h="svelte-1u2i530">The official name of the language is ECMAScript.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-rtf8l0">Java vs JavaScript</h6> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Java`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `JavaScript`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Java is an object-oriented programming language which is class-based.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `JavaScript is also object-oriented, but not class-based. Objects and methods can be defined irrespective of any class.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Java is a strongly typed language. Types are all known at compile time and the operand types are checked for compatibility.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Variables in JavaScript need not be declared and are dynamically typed, making compile-time type checking impossible.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `Objects in Java are static in the sense that their collection of data members and methods is fixed at compile time.`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal" }, {}, {
                        default: () => {
                          return `JavaScript objects are dynamic: The number of data members and methods of an object can change during execution.`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-14stbuu">Uses of JavaScript</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-4ink07">javascript provides programming capability to both the client and server. Although all the programming load can be shifted over to the client, there are important limitations imposed on the client side. For example, file operations, database access and networking can mainly be done from the server side.</p> <p class="svelte-wl5xjl" data-svelte-h="svelte-2j26qz">Much of what JavaScript scripts typically do is event driven, meaning that the actions often are executed in response to the browser user’s actions, among them mouse clicks and form submissions. This sort of computation supports user interactions through the HTML form elements on the client display.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-wl5xjl" data-svelte-h="svelte-a5eqi9">JavaScript in HTML</h6> <p class="svelte-wl5xjl" data-svelte-h="svelte-1agz4rf">JavaScript code can be used in two ways:</p> <dl data-svelte-h="svelte-x20dds"><dt><strong class="svelte-wl5xjl">Explicit embedding</strong></dt><dd>Place the code inside <code>script</code> tag inside <code>body</code> tag.</dd><dt><strong class="svelte-wl5xjl">Implicit embedding</strong></dt><dd>Import an external file using <code>script</code> tag inside the <code>head</code> tag.</dd></dl>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-EeXLhsgw.js.map
