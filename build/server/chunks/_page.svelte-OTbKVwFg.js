import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr-HSn4Y_Gl.js';
import { S as Select, O as Option } from './Option-ca41O35N.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as Card } from './Card-w5WL3--T.js';
import './ActionIcons-o14w9cnK.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
import './client-_MkdHwD5.js';
import { c as currentPath } from './stores3-yqJRp7mD.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';
import './prefixFilter-IAYI75FL.js';
import './Menu-ecQaSKb2.js';
import './SelectionGroupIcon-hfGPm6DC.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './NotchedOutline-ZS7UkzLO.js';
import './exports-mq_1S73-.js';

const css = {
  code: "article.svelte-o5h9iv{display:flex;flex-direction:column;gap:0.5em}.courses.svelte-o5h9iv{display:flex;flex-direction:row;gap:1em;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Submissions", $currentPath);
  let submissions = [];
  const courses = {
    "Mathematics II": {
      name: "Mathematics II",
      url: "mathematics2",
      courseID: "CA",
      sessions: ["2023-2024"]
    },
    "Internet Technologies": {
      name: "Internet Technologies",
      url: "internet",
      courseID: "22CA2402",
      sessions: ["2023-2024"]
    }
  };
  let selectedCourse = "Mathematics II", selectedSession = courses[selectedCourse].sessions[0];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-o5h9iv"><h4 data-svelte-h="svelte-3u0ib9">Submissions</h4> <h6 data-svelte-h="svelte-geslbe">Select Course and Session</h6> <div class="courses svelte-o5h9iv"><div class="course">${validate_component(Select, "Select").$$render(
      $$result,
      {
        variant: "outlined",
        label: "Course",
        value: selectedCourse
      },
      {
        value: ($$value) => {
          selectedCourse = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(Object.keys(courses), (courseName) => {
            return `${validate_component(Option, "Option").$$render($$result, { value: selectedCourse }, {}, {
              default: () => {
                return `${escape(courseName)}`;
              }
            })}`;
          })}`;
        }
      }
    )}</div> <div class="session">${validate_component(Select, "Select").$$render(
      $$result,
      {
        variant: "outlined",
        label: "Session",
        value: selectedSession
      },
      {
        value: ($$value) => {
          selectedSession = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(courses[selectedCourse].sessions, (session) => {
            return `${validate_component(Option, "Option").$$render($$result, { value: session }, {}, {
              default: () => {
                return `${escape(session)}`;
              }
            })}`;
          })}`;
        }
      }
    )}</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Go`;
      }
    })}</div> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(DataTable, "DataTable").$$render($$result, { style: "width: 100%" }, {}, {
          default: () => {
            return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `S. No.`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Name`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Title`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Date`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Total Marks`;
                      }
                    })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Details`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
              default: () => {
                return `${each(submissions, (assignment, index) => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(index + 1)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.name)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.title)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(new Date(assignment.submission).toDateString())}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(assignment.total)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `View`;
                            }
                          })}`;
                        }
                      })} `;
                    }
                  })}`;
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-OTbKVwFg.js.map
