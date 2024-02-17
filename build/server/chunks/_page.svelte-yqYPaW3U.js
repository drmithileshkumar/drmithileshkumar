import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import { p as page } from './stores-J1hWMOsb.js';
import { T as Textfield } from './Textfield-wU2X7R0w.js';
import './Suffix-ybHP5eir.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { A as Actions } from './Actions-d1scvOhV.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as CommonLabel } from './CommonLabel-QaCL5f48.js';
import { N as NavList } from './NavList-dME8fp5s.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content2-Y7l55Sr_.js';
import { P as Pathlist } from './Pathlist-ycGY6RC1.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { T as TabBar, a as Tab } from './TabBar-1-fn2XfL.js';
import './Subheader-nJdHlnFA.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './prefixFilter-IAYI75FL.js';
import './ContextFragment-h_zhkUzP.js';
import './index2-z1g76_ny.js';
import './NotchedOutline-ZS7UkzLO.js';
import './Ripple-IoYaH5-z.js';
import './Item-20QUQFRc.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';

const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}h6.svelte-1a5or8o{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  let studentID;
  let tabs = ["Contents", "Assignments", "Details"];
  let active = "Contents";
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Mathematics II", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let { data } = $$props;
  let assignments = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1am32do_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-1am32do_END -->`, ""} <article class="svelte-1a5or8o">${validate_component(Pathlist, "Pathlist").$$render(
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
    )} <h4 class="svelte-1a5or8o" data-svelte-h="svelte-17c5kzm">Mathematics II</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1bkysss">Course Objectives (22CA1201)</h6>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "outlined",
                label: "Student ID",
                style: "width:50%;",
                input$emptyValueUndefined: true,
                value: studentID
              },
              {
                value: ($$value) => {
                  studentID = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Register`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabBar, "TabBar").$$render(
          $$result,
          { tabs, active },
          {
            active: ($$value) => {
              active = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ tab }) => {
              return `${validate_component(Tab, "Tab").$$render($$result, { tab }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(tab)}`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })} ${active === "Contents" ? `<h5 class="svelte-1a5or8o" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(NavList, "NavList").$$render(
          $$result,
          {
            name: $navList[0].name,
            url: $navList[0].url,
            topics: $navList[0].topics,
            expanded: true
          },
          {},
          {}
        )}`;
      }
    })}` : `${active === "Assignments" ? `<h5 class="svelte-1a5or8o" data-svelte-h="svelte-1c1pxi4">Assignments</h5> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Load Assignments`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${each(assignments, (assignment) => {
              return `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(assignment.title)}`;
                    }
                  })}`;
                }
              })} </div>`;
            })} `;
          }
        })}`;
      }
    })}` : ``}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-yqYPaW3U.js.map
