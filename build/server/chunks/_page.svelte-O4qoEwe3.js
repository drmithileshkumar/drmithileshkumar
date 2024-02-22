import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-s51F7Pna.js';
import { p as page } from './stores-J1hWMOsb.js';
import './ActionIcons-o14w9cnK.js';
import './Subheader-nJdHlnFA.js';
import './client-_MkdHwD5.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import './Suffix-ybHP5eir.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './exports-mq_1S73-.js';
import './index2-z1g76_ny.js';
import './prefixFilter-IAYI75FL.js';

const css = {
  code: "article.svelte-1la69s{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1la69s{margin:0.5em 0}code{background-color:rgba(0, 100, 100, 0.1)}",
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "HTML vs XHTML", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-6w3bzt_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/xhtml"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-6w3bzt_END -->`, ""} <article class="svelte-1la69s">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-1la69s" data-svelte-h="svelte-nqfkab">HTML vs XHTML</h4>   ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `HTML`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `XHTML`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `tag and attributes are case insensitive`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `tag and attributes are case sensitive`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `closing tags may be omitted`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `must have closing tags or a slash.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `attribute values must be quoted only if there are embedded special characters or white-space characters. Numeric attribute values are rarely quoted`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `all attribute values must be double quoted, regardless of what characters are included in the value`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `some attribute values are implicit; that is, they need not be explicitly stated`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `an attribute must be assigned a string of the name of the attribute.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `HTML markup often uses the name attribute for elements. This attribute was deprecated for some elements in HTML 4.0, which added the id attribute to nearly all elements.`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `the use of id is encouraged and the use of name is discouraged. However, form control elements must still use the name attribute because it is employed in processing form data on the server.`;
                }
              })}`;
            }
          })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `Although HTML has rules against improper nesting of ele
                    ments, they are not enforced. Examples of nesting rules are (1) an anchor ele
                    ment cannot contain another anchor element, and a form element cannot contain 
                    another form element; (2) if an element appears inside another element, the clos
                    ing tag of the inner element must appear before the closing tag of the outer ele
                    ment; (3) block elements cannot be nested in inline elements; (4) text cannot be 
                    directly nested in body or form elements; and (5) list elements cannot be directly 
                    nested in list elements.`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                default: () => {
                  return `these nesting rules are strictly enforced.`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-O4qoEwe3.js.map
