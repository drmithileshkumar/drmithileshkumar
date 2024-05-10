import { s as subscribe, b as set_store_value } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, j as each } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
/* empty css                                                       */
import { p as page } from "../../../../../chunks/stores.js";
import { T as Textfield } from "../../../../../chunks/Textfield.js";
import "../../../../../chunks/Suffix.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { C as Content } from "../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../chunks/Actions.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../chunks/CommonLabel.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../chunks/Cell.js";
import { N as NavList } from "../../../../../chunks/NavList.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../chunks/stores2.js";
import { c as contentNav, a as contents } from "../../../../../chunks/content3.js";
import { P as Pathlist } from "../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../chunks/CourseNavigation.js";
import { T as TabBar, a as Tab } from "../../../../../chunks/TabBar.js";
import "../../../../../chunks/Subheader.js";
const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}p.svelte-1a5or8o,li.svelte-1a5or8o{opacity:0.8}h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}h6.svelte-1a5or8o{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1a5or8o{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import DataTable, {Head, Row, Cell, Body} from '@smui/data-table';\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics2/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    let studentID;\\r\\n    let tabs = ['Contents', 'Assignments', 'Details'];\\r\\n    let active = \\"Contents\\";\\r\\n    const register = async () => {\\r\\n        if(!$page.data.user) {\\r\\n            alert(\\"Please login or sign up first!\\")\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/register\`, {\\r\\n            method: 'POST',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({studentID: studentID, courseID: '22CA2402', session: '2023-2024'})\\r\\n        })\\r\\n        if(!res.ok) {\\r\\n            alert('Something went wrong.')\\r\\n            return;\\r\\n        }\\r\\n        alert('Registered');\\r\\n    }\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Mathematics II\\";\\r\\n    $darkMode = false;\\r\\n    // export let data;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    const courseID = '22CA1201';\\r\\n    let assignments = [];\\r\\n    const getAssignments = async () => {\\r\\n        //fetch assignments\\r\\n        if(!$page.data.user) {\\r\\n            alert('Please log in or sign up first.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseID=\${courseID}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to load assignments')\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    /* h5 {\\r\\n        font-size: 1.1em;\\r\\n    } */\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<!-- <svelte:head>\\r\\n    <title>Mathematics II</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics2\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head> -->\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Mathematics II  \\r\\n    </h4>\\r\\n    <Card>\\r\\n        <TabBar {tabs} let:tab bind:active>\\r\\n            <Tab {tab} on:click={() => {}}>\\r\\n                <Label>{tab}</Label>\\r\\n            </Tab>\\r\\n        </TabBar>\\r\\n    </Card>\\r\\n    {#if active === 'Contents'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Objectives (22CA1201)</h6>\\r\\n                <p>Student should be comportable in using probability concepts in making statistical inferences. They should be able to handle basic problems in linear optimization.</p>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Textfield required variant=\\"outlined\\" bind:value={studentID} label=\\"Student ID\\" style=\\"width:50%;\\" input$emptyValueUndefined />\\r\\n                <Button on:click={register}>Register</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        <h5>Contents</h5>\\r\\n        <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n            <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n        </Card>\\r\\n    {:else if active === 'Assignments'}\\r\\n        <h5>Assignments</h5>\\r\\n        <Button on:click={getAssignments}><Label>Load Assignments</Label></Button>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                {#each assignments as assignment}\\r\\n                    <div>\\r\\n                        <Button on:click={() => goto(\`/assignments/\${assignment._id}\`)}><Label>{assignment.title}</Label></Button>\\r\\n                    </div>\\r\\n                {/each}\\r\\n                <!-- <List>\\r\\n                    {#each data.assignments as assignment}\\r\\n\\r\\n                        <Item on:SMUI:action={() => goto(\`/courses/mathematics2/\${assignment._id}\`)}>\\r\\n                            <Graphic class=\\"material-icons\\">local_library</Graphic>\\r\\n                            <Text>{assignment.title}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List> -->\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {:else if active === 'Details'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Outcomes</h6>\\r\\n                <p>At the end of the course student will be able to</p>\\r\\n                <ol>\\r\\n                    <li>Understand various statistical techniques that can be applied to real life situations</li>\\r\\n                    <li>study and appreciate discrete probability and it's uses</li>\\r\\n                    <li>understand and will be able to use operations research techniques to the given optimization problems</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>A brief overview of the course</h6>\\r\\n                <p>This course aims to equip students with the skills and knowledge required to use statistical methods in data centric problems. The course starts with basic measures of central tendencies, introduces correlation and regression. Then probability theory is applied to understand distributions. Once the tools are ready, they are applied for statistical inference. The course ends with using linear programming in solving optimization problems.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Textbook and references</h6>\\r\\n                <ol>\\r\\n                    <li>Spiegel, Schiller, Srinivasan: Probability and Statistics-4th edition, McGraw Hill, 2013</li>\\r\\n                    <li>Study material at https://drmithileshkumar.com/courses/mathematics2</li>\\r\\n                    <li>Taha: Operations Research: An Introduction, Mac Millan.</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Timetable</h6>\\r\\n                <strong>Room</strong>: TBD\\r\\n                <ol>\\r\\n                    <li><strong>Monday</strong>: 9:45-10:45</li>\\r\\n                    <li><strong>Tuesday</strong>: 2:45-4:45</li>\\r\\n                    <li><strong>Wednesday</strong>: 8:45-9:45</li>\\r\\n                    <li><strong>Friday</strong>: 12:00-1:00</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Assessement</h6>\\r\\n                <DataTable table$aria-label=\\"Marks breakup\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Test</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 1 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 2 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Assignment</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Seminar</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Reflection notes</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total CIA</Cell>\\r\\n                            <Cell>60M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>SEE - (100M)</Cell>\\r\\n                            <Cell>40M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total - (100M)</Cell>\\r\\n                            <Cell>CIA (60M) + SEE (40M)</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Attendence Requirements</h6>\\r\\n                <p>A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated. </p>\\r\\n                <h6>Rubrics of attendance in CIA evaluation</h6>\\r\\n                <DataTable table$aria-label=\\"Attendence Marks\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence (%)</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>95 - 100</Cell>\\r\\n                            <Cell>5</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>90 - 94</Cell>\\r\\n                            <Cell>4</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>85 - 89</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>80 - 84</Cell>\\r\\n                            <Cell>2</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>75 - 79</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <p>Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  let assignments = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` <article class="svelte-1a5or8o">${validate_component(Pathlist, "Pathlist").$$render(
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
    })} ${active === "Contents" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1bkysss">Course Objectives (22CA1201)</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-kcqwqn">Student should be comportable in using probability concepts in making statistical inferences. They should be able to handle basic problems in linear optimization.</p>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                required: true,
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
    })} <h5 class="svelte-1a5or8o" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "background-color: rgba(0, 100, 100, 0.1"
      },
      {},
      {
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
      }
    )}` : `${active === "Assignments" ? `<h5 class="svelte-1a5or8o" data-svelte-h="svelte-1c1pxi4">Assignments</h5> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
    })}` : `${active === "Details" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-aaghz7"><li class="svelte-1a5or8o">Understand various statistical techniques that can be applied to real life situations</li> <li class="svelte-1a5or8o">study and appreciate discrete probability and it&#39;s uses</li> <li class="svelte-1a5or8o">understand and will be able to use operations research techniques to the given optimization problems</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1td1z3p">This course aims to equip students with the skills and knowledge required to use statistical methods in data centric problems. The course starts with basic measures of central tendencies, introduces correlation and regression. Then probability theory is applied to understand distributions. Once the tools are ready, they are applied for statistical inference. The course ends with using linear programming in solving optimization problems.</p>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-p4ajtw"><li class="svelte-1a5or8o">Spiegel, Schiller, Srinivasan: Probability and Statistics-4th edition, McGraw Hill, 2013</li> <li class="svelte-1a5or8o">Study material at https://drmithileshkumar.com/courses/mathematics2</li> <li class="svelte-1a5or8o">Taha: Operations Research: An Introduction, Mac Millan.</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1l2n45b">Timetable</h6> <strong class="svelte-1a5or8o" data-svelte-h="svelte-laz63v">Room</strong>: TBD
                <ol data-svelte-h="svelte-14orddr"><li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Monday</strong>: 9:45-10:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Tuesday</strong>: 2:45-4:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Wednesday</strong>: 8:45-9:45</li> <li class="svelte-1a5or8o"><strong class="svelte-1a5or8o">Friday</strong>: 12:00-1:00</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1dr23oh">Assessement</h6> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Marks breakup",
                style: "max-width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Test`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Marks`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Internal Assessment 1 - (40M)`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `20M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Internal Assessment 2 - (40M)`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `20M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Assignment`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `5M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Seminar`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `5M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Reflection notes`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `5M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Attendence`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `5M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Total CIA`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `60M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `SEE - (100M)`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `40M`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Total - (100M)`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `CIA (60M) + SEE (40M)`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-19xedrt">Attendence Requirements</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-16as233">A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated.</p> <h6 class="svelte-1a5or8o" data-svelte-h="svelte-1lxutzu">Rubrics of attendance in CIA evaluation</h6> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Attendence Marks",
                style: "max-width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Attendence (%)`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Marks`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `95 - 100`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `5`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `90 - 94`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `4`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `85 - 89`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `3`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `80 - 84`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `2`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `75 - 79`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `1`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} <p class="svelte-1a5or8o" data-svelte-h="svelte-1b8ttp6">Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>`;
          }
        })}`;
      }
    })}` : ``}`}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  return $$rendered;
});
export {
  Page as default
};
