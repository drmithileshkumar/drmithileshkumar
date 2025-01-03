import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr2-q3O0l93f.js';
import './client-k3u4ChD_.js';
import './ActionIcons-Co7bojT-.js';
import { B as Button } from './Button-DRRmGjqZ.js';
import { C as CommonLabel } from './CommonLabel-BuPx8XxF.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-BHHnS_Mj.js';
import { H as Head } from './Head-DnR4PX6i.js';
import './Suffix-CzM54Q0Q.js';
import './utils-iZWwlC2F.js';
import './exports-kR70XCWV.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './Ripple-Zq_D_mxy.js';
import './index2-BZnI6xu7.js';
import './prefixFilter-B6cFZsw3.js';

/* empty css                                                          */
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from \'$app/stores\';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button, { Label } from \'@smui/button\';\\r\\n    import Datatable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Assignment from \\"$lib/components/Assignment.svelte\\";\\r\\n    export let data;\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <h2>Assignments</h2>\\r\\n    <Datatable style=\\"width:100%\\">\\r\\n        <Head>\\r\\n            <Row>\\r\\n                <Cell>CourseID</Cell>\\r\\n                <Cell>Title</Cell>\\r\\n                <Cell>Status</Cell>\\r\\n                <Cell>Action</Cell>\\r\\n            </Row>\\r\\n        </Head>\\r\\n        <Body>\\r\\n            {#each data.assignments as assignment}\\r\\n                <Row>\\r\\n                    <Cell>{assignment.courseID}</Cell>\\r\\n                    <Cell>{assignment.title}</Cell>\\r\\n                    <Cell>{assignment.status}</Cell>\\r\\n                    <Cell>\\r\\n                        {#if assignment.status === \'Draft\'}\\r\\n                            <Button on:click={() => goto(`/assignments/${assignment.assignmentID}`)}><Label>Go</Label></Button>\\r\\n                        {:else}\\r\\n                            <Button on:click={() => goto(`/assignments/${assignment.assignmentID}/solution`)}><Label>Solution</Label></Button>\\r\\n                        {/if}\\r\\n                    </Cell>\\r\\n                </Row>\\r\\n            {/each}\\r\\n        </Body>\\r\\n    </Datatable>\\r\\n    \\r\\n</article>"],"names":[],"mappings":"AAWI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
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
//# sourceMappingURL=_page.svelte-Lq25Bq1c.js.map
