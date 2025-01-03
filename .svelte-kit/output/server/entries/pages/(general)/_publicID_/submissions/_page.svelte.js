import { a as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from "../../../../../chunks/ssr2.js";
import { S as Select, O as Option } from "../../../../../chunks/Option.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/Card.js";
import "../../../../../chunks/ActionIcons.js";
import { D as DataTable, R as Row, C as Cell, B as Body } from "../../../../../chunks/Cell.js";
import { H as Head } from "../../../../../chunks/Head.js";
import "../../../../../chunks/client.js";
import { c as currentPath } from "../../../../../chunks/stores.js";
const css = {
  code: "article.svelte-1lcfw8p{display:flex;flex-direction:column;gap:0.5em}.courses.svelte-1lcfw8p{display:flex;flex-direction:row;gap:1em;align-items:center}h6.svelte-1lcfw8p{margin:1em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Select, { Option } from '@smui/select';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Card from '@smui/card';\\r\\n    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { currentPath } from '$lib/stores';\\r\\n    $currentPath = \\"Submissions\\";\\r\\n    let submissions = [];\\r\\n    const courses = {\\r\\n        'Mathematics II': {\\r\\n            name: 'Mathematics II',\\r\\n            url: 'mathematics2',\\r\\n            courseID: '22CA1201',\\r\\n            sessions: [\\"2023-2024\\"]\\r\\n        },\\r\\n        'Internet Technologies': {\\r\\n            name: 'Internet Technologies',\\r\\n            url: 'internet',\\r\\n            courseID: '22CA2402',\\r\\n            sessions: [\\"2023-2024\\"]\\r\\n        },\\r\\n        'Internet Technologies Lab': {\\r\\n            name: 'Internet Technologies Lab',\\r\\n            url: 'internetlab',\\r\\n            courseID: '22CA2405',\\r\\n            sessions: [\\"2023-2024\\"]\\r\\n        }\\r\\n    }\\r\\n    let selectedCourse = 'Mathematics II', selectedSession = courses[selectedCourse].sessions[0];\\r\\n    const getSubmissions = async () => {\\r\\n        let res = await fetch(\`/api/submissions?courseID=\${courses[selectedCourse].courseID}&session=\${selectedSession}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to load submissions...')\\r\\n            return;\\r\\n        }\\r\\n        submissions = await res.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .courses {\\r\\n        display:flex;\\r\\n        flex-direction:row;\\r\\n        gap: 1em;\\r\\n        align-items:center;\\r\\n    }\\r\\n    h6 {\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <h6>Select Course and Session</h6>\\r\\n    <div class=\\"courses\\">\\r\\n        <div class=\\"course\\">\\r\\n            <Select variant=\\"outlined\\" label=\\"Course\\" bind:value={selectedCourse}>\\r\\n                <Option value=\\"\\" />\\r\\n                {#each Object.keys(courses) as courseName}\\r\\n                    <Option value={selectedCourse}>{courseName}</Option>\\r\\n                {/each}\\r\\n            </Select>\\r\\n        </div>\\r\\n        <div class=\\"session\\">\\r\\n            <Select variant=\\"outlined\\" label=\\"Session\\" bind:value={selectedSession}>\\r\\n                <Option value=\\"\\" />\\r\\n                {#each courses[selectedCourse].sessions as session}\\r\\n                    <Option value={session}>{session}</Option>\\r\\n                {/each}\\r\\n            </Select>\\r\\n        </div>\\r\\n        <Button on:click={getSubmissions}>Go</Button>\\r\\n    </div>\\r\\n    <Card>\\r\\n        <DataTable style=\\"width: 100%\\">\\r\\n            <Head>\\r\\n                <Row>\\r\\n                    <Cell>S. No.</Cell>\\r\\n                    <Cell>Name</Cell>\\r\\n                    <Cell>Title</Cell>\\r\\n                    <Cell>Date</Cell>\\r\\n                    <Cell>Total Marks</Cell>\\r\\n                    <Cell>Details</Cell>\\r\\n                </Row>\\r\\n            </Head>\\r\\n            <Body>\\r\\n                {#each submissions as assignment, index}\\r\\n                    <Row>\\r\\n                        <Cell>{index + 1}</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">{assignment.name}</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">{assignment.title}</Cell>\\r\\n                        <Cell style=\\"white-space:normal;\\">{(new Date(assignment.submission).toDateString())}</Cell>\\r\\n                        <Cell>{assignment.total}</Cell>\\r\\n                        <Cell><Button on:click={() => goto(\`/assignments/\${assignment.assignmentID}/solution\`)}>View</Button></Cell>\\r\\n                    </Row>\\r\\n                {/each}\\r\\n            </Body>\\r\\n        </DataTable>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AAyCI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,uBAAS,CACL,QAAQ,IAAI,CACZ,eAAe,GAAG,CAClB,GAAG,CAAE,GAAG,CACR,YAAY,MAChB,CACA,iBAAG,CACC,MAAM,CAAE,GAAG,CAAC,CAChB"}`
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
      courseID: "22CA1201",
      sessions: ["2023-2024"]
    },
    "Internet Technologies": {
      name: "Internet Technologies",
      url: "internet",
      courseID: "22CA2402",
      sessions: ["2023-2024"]
    },
    "Internet Technologies Lab": {
      name: "Internet Technologies Lab",
      url: "internetlab",
      courseID: "22CA2405",
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
    $$rendered = `<article class="svelte-1lcfw8p"><h6 class="svelte-1lcfw8p" data-svelte-h="svelte-geslbe">Select Course and Session</h6> <div class="courses svelte-1lcfw8p"><div class="course">${validate_component(Select, "Select").$$render(
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
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `${escape(assignment.name)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `${escape(assignment.title)}`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
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
export {
  Page as default
};
