import { c as create_ssr_component, v as validate_component, k as each, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import "../../../../chunks/ActionIcons.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../chunks/CommonLabel.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../chunks/Cell.js";
import "../../../../chunks/Suffix.js";
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
export {
  Page as default
};
