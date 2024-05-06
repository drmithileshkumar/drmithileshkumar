import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr-Cv_bEuJL.js';
import { g as githubDark, a as github, c as contentNav, b as contents } from './content4-DqFQdaeR.js';
import './client-CjdeEz1m.js';
import { p as page } from './stores-CD1QeJjc.js';
import { T as TabBar, a as Tab } from './TabBar-BN2O1wVf.js';
import { C as CommonLabel } from './CommonLabel-Bjz32QAu.js';
import { T as Textfield } from './Textfield-CuLN89a4.js';
import './Suffix-DUyW9-NK.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { A as Actions } from './Actions-k21q-Hb9.js';
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from './Cell-C8wtb_ZZ.js';
import { B as Button } from './Button-nlTGW0Wq.js';
import { N as NavList } from './NavList-Cy1rruyL.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-DCuXQBIu.js';
import { P as Pathlist } from './Pathlist-VvNEpviv.js';
import { C as CourseNavigation } from './CourseNavigation-GbSn10Xu.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './prefixFilter-B6cFZsw3.js';
import './Ripple-Yt1ZX6hy.js';
import './ContextFragment-Dwx7Ej1j.js';
import './index2-B3zlhmO5.js';
import './NotchedOutline-YjUGQyoC.js';
import './Item-X5iuBhs5.js';
import './Subheader-BwOM49vC.js';
import './Graphic-CTyan_iC.js';
import './IconButton-CpGaokyO.js';

const css = {
  code: "article.svelte-1ml351b{display:flex;flex-direction:column;gap:0.5em}p.svelte-1ml351b,li.svelte-1ml351b{opacity:0.8}h6.svelte-1ml351b,h5.svelte-1ml351b{margin:0.5em 0}h5.svelte-1ml351b{font-size:1.1em}h6.svelte-1ml351b{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-1ml351b{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Highlight, { LineNumbers } from \\"svelte-highlight\\";\\r\\n    import javascript from \\"svelte-highlight/languages/javascript\\";\\r\\n    import xml from \\"svelte-highlight/languages/xml\\";\\r\\n    import github from \\"svelte-highlight/styles/github\\";\\r\\n    import githubDark from \\"svelte-highlight/styles/github-dark\\";\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { quintOut } from 'svelte/easing';\\r\\n\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import { goto } from '$app/navigation';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/internet/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Internet Technologies\\";\\r\\n    $darkMode = false;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    let tabs = ['Contents', 'Assignments', 'Details'];\\r\\n    let active = \\"Contents\\";\\r\\n    let studentID;\\r\\n    const register = async () => {\\r\\n        if(!$page.data.user) {\\r\\n            alert(\\"Please login or sign up first!\\")\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/register\`, {\\r\\n            method: 'POST',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({studentID: studentID, courseID: '22CA2402', session: '2023-2024'})\\r\\n        })\\r\\n        if(!res.ok) {\\r\\n            alert('Something went wrong.')\\r\\n            return;\\r\\n        }\\r\\n        alert('Registered');\\r\\n    }\\r\\n    const courseID = '22CA2402';\\r\\n    let assignments = [];\\r\\n    const getAssignments = async () => {\\r\\n        //fetch assignments\\r\\n        if(!$page.data.user) {\\r\\n            alert('Please log in or sign up first.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseID=\${courseID}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to load assignments')\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h6, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    h5 {\\r\\n        font-size: 1.1em;\\r\\n    }\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgb(74, 155, 139);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<svelte:head>\\r\\n    <title>Internet Technologies</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/internet\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n    {#if $darkMode}\\r\\n        {@html githubDark}\\r\\n    {:else}\\r\\n        {@html github}\\r\\n    {/if}\\r\\n</svelte:head>\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4 style=\\"margin: 0.5em 0;\\">\\r\\n        Internet Technologies\\r\\n    </h4>\\r\\n    \\r\\n    <!-- <Highlight language={xml} code={\`<p>Hello World!</p>\`} let:highlighted>\\r\\n        <LineNumbers {highlighted} wrapLines/>\\r\\n    </Highlight> -->\\r\\n    \\r\\n    <Card>\\r\\n        <TabBar {tabs} let:tab bind:active>\\r\\n            <Tab {tab} on:click={() => {}}>\\r\\n                <Label>{tab}</Label>\\r\\n            </Tab>\\r\\n        </TabBar>\\r\\n    </Card>\\r\\n    {#if active == 'Contents'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Objectives (22CA2402)</h6>\\r\\n                <p>This course aims at providing knowledge of web development, both front-end and back-end.</p>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Textfield required variant=\\"outlined\\" bind:value={studentID} label=\\"Student ID\\" style=\\"width:50%;\\" input$emptyValueUndefined />\\r\\n                <Button on:click={register}>Register</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n            <Content>\\r\\n                <h5>Contents</h5>\\r\\n                <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {:else if active == 'Assignments'}\\r\\n        <h5>Assignments</h5>\\r\\n        <Button on:click={getAssignments}><Label>Load Assignments</Label></Button>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                {#each assignments as assignment}\\r\\n                    <div>\\r\\n                        <Button on:click={() => goto(\`/assignments/\${assignment._id}\`)}><Label>{assignment.title}</Label></Button>\\r\\n                    </div>\\r\\n                {/each}\\r\\n                <!-- <List>\\r\\n                    {#each data.assignments as assignment}\\r\\n\\r\\n                        <Item on:SMUI:action={() => goto(\`/courses/mathematics2/\${assignment._id}\`)}>\\r\\n                            <Graphic class=\\"material-icons\\">local_library</Graphic>\\r\\n                            <Text>{assignment.title}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List> -->\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {:else if active == 'Details'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Outcomes</h6>\\r\\n                <p>At the end of the course student will be able to</p>\\r\\n                <ol>\\r\\n                    <li>Understand the foundations of web page design using HTML</li>\\r\\n                    <li>Use CSS in styling web pages</li>\\r\\n                    <li>Describe scripting language JavaScript</li>\\r\\n                    <li>Work with XML files</li>\\r\\n                    <li>Use node.js to serve requests from the client</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>A brief overview of the course</h6>\\r\\n                <p>This course aims to equip students with the skills and knowledge required to design, implement, and maintain web pages and web applications. It covers a range of technologies fundamental to the web, starting with the basics of HTML and XHTML for web page structure, CSS for styling, JavaScript for client-side interactivity, XML for data representation, and Node.js for server-side programming. </p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Textbook and references</h6>\\r\\n                <ol>\\r\\n                    <li>Robert W. Sebesta: Programming the World Wide Web-8th edition, Pearson Education, 2015.</li>\\r\\n                    <li>Study material at https://drmithileshkumar.com/courses/internet</li>\\r\\n                    <li>Learn node.js at https://nodejs.org/en/learn</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Timetable</h6>\\r\\n                <strong>Room</strong>: 304\\r\\n                <ol>\\r\\n                    <li><strong>Monday</strong>: 12:00-01:00</li>\\r\\n                    <li><strong>Thursday</strong>: 9:45-10:45</li>\\r\\n                    <li><strong>Friday</strong>: 8:45-9:45</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Assessement</h6>\\r\\n                <DataTable table$aria-label=\\"Marks breakup\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Test</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 1 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 2 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Git Repositories</Cell>\\r\\n                            <Cell>15M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total CIA</Cell>\\r\\n                            <Cell>60M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>SEE - (100M)</Cell>\\r\\n                            <Cell>40M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total - (100M)</Cell>\\r\\n                            <Cell>CIA (60M) + SEE (40M)</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Attendence Requirements</h6>\\r\\n                <p>A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated. </p>\\r\\n                <h6>Rubrics of attendance in CIA evaluation</h6>\\r\\n                <DataTable table$aria-label=\\"Attendence Marks\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence (%)</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>95 - 100</Cell>\\r\\n                            <Cell>5</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>90 - 94</Cell>\\r\\n                            <Cell>4</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>85 - 89</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>80 - 84</Cell>\\r\\n                            <Cell>2</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>75 - 79</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <p>Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAqEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CACA,iBAAG,CACC,SAAS,CAAE,KACf,CACA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IAAI,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Internet Technologies", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let tabs = ["Contents", "Assignments", "Details"];
  let active = "Contents";
  let studentID;
  let assignments = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1qjfh84_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1qjfh84_END -->`, ""} <article class="svelte-1ml351b">${validate_component(Pathlist, "Pathlist").$$render(
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
    )} <h4 style="margin: 0.5em 0;" data-svelte-h="svelte-af5rs1">Internet Technologies</h4>  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
    })} ${active == "Contents" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-dl1tmw">Course Objectives (22CA2402)</h6> <p class="svelte-1ml351b" data-svelte-h="svelte-1jubqrw">This course aims at providing knowledge of web development, both front-end and back-end.</p>`;
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
    })} ${validate_component(Card, "Card").$$render(
      $$result,
      {
        style: "background-color: rgba(0, 100, 100, 0.1"
      },
      {},
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<h5 class="svelte-1ml351b" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
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
          })}`;
        }
      }
    )}` : `${active == "Assignments" ? `<h5 class="svelte-1ml351b" data-svelte-h="svelte-1c1pxi4">Assignments</h5> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
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
    })}` : `${active == "Details" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-1ml351b" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-1fhjj9g"><li class="svelte-1ml351b">Understand the foundations of web page design using HTML</li> <li class="svelte-1ml351b">Use CSS in styling web pages</li> <li class="svelte-1ml351b">Describe scripting language JavaScript</li> <li class="svelte-1ml351b">Work with XML files</li> <li class="svelte-1ml351b">Use node.js to serve requests from the client</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-1ml351b" data-svelte-h="svelte-123wd21">This course aims to equip students with the skills and knowledge required to design, implement, and maintain web pages and web applications. It covers a range of technologies fundamental to the web, starting with the basics of HTML and XHTML for web page structure, CSS for styling, JavaScript for client-side interactivity, XML for data representation, and Node.js for server-side programming.</p>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-d0h6br"><li class="svelte-1ml351b">Robert W. Sebesta: Programming the World Wide Web-8th edition, Pearson Education, 2015.</li> <li class="svelte-1ml351b">Study material at https://drmithileshkumar.com/courses/internet</li> <li class="svelte-1ml351b">Learn node.js at https://nodejs.org/en/learn</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-1l2n45b">Timetable</h6> <strong class="svelte-1ml351b" data-svelte-h="svelte-laz63v">Room</strong>: 304
                <ol data-svelte-h="svelte-pfvo23"><li class="svelte-1ml351b"><strong class="svelte-1ml351b">Monday</strong>: 12:00-01:00</li> <li class="svelte-1ml351b"><strong class="svelte-1ml351b">Thursday</strong>: 9:45-10:45</li> <li class="svelte-1ml351b"><strong class="svelte-1ml351b">Friday</strong>: 8:45-9:45</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-1dr23oh">Assessement</h6> ${validate_component(DataTable, "DataTable").$$render(
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
                              return `Git Repositories`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `15M`;
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
            return `<h6 class="svelte-1ml351b" data-svelte-h="svelte-19xedrt">Attendence Requirements</h6> <p class="svelte-1ml351b" data-svelte-h="svelte-16as233">A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated.</p> <h6 class="svelte-1ml351b" data-svelte-h="svelte-1lxutzu">Rubrics of attendance in CIA evaluation</h6> ${validate_component(DataTable, "DataTable").$$render(
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
            )} <p class="svelte-1ml351b" data-svelte-h="svelte-1b8ttp6">Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>`;
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

export { Page as default };
//# sourceMappingURL=_page.svelte-CaGtHS1E.js.map
