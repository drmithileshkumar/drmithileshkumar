import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr-HSn4Y_Gl.js';
import './client-_MkdHwD5.js';
import './ActionIcons-o14w9cnK.js';
import { B as Button } from './Button-FylIdC7C.js';
import { C as CommonLabel } from './CommonLabel-QaCL5f48.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-fuCiKeC1.js';
import './Suffix-ybHP5eir.js';
import './utils-TYqgk8Fj.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Ripple-IoYaH5-z.js';
import './index2-z1g76_ny.js';
import './prefixFilter-IAYI75FL.js';

/* empty css                                                          */
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="svelte-1s9ex9t"><h2 data-svelte-h="svelte-1drpwhk">Assignments</h2> ${validate_component(DataTable, "Datatable").$$render($$result, { style: "width:100%" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `CourseID`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `Title`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `Status`;
                }
              })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                default: () => {
                  return `Action`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
        default: () => {
          return `${each(data.assignments, (assignment) => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(assignment.courseID)}`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(assignment.title)}`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(assignment.status)}`;
                  }
                })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${assignment.status === "Draft" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                          default: () => {
                            return `Go`;
                          }
                        })}`;
                      }
                    })}` : `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                          default: () => {
                            return `Solution`;
                          }
                        })}`;
                      }
                    })}`} `;
                  }
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-W52ot-UF.js.map
