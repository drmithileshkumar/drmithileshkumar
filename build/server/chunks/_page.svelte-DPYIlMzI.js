import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr2-CDgUAJs6.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import './Suffix-CtI6fDI6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { D as DataTable, R as Row, C as Cell, B as Body } from './Cell-Y_QU_UIA.js';
import { H as Head } from './Head-B4BwnM3n.js';
import { N as NavList } from './NavList-Qhuqe1ji.js';
import { d as darkMode, c as currentPath, n as navList } from './stores-Cecnyqn_.js';
import { P as Pathlist } from './Pathlist-B9wgcfC1.js';
import { C as CourseNavigation } from './CourseNavigation-DznSxbmO.js';
import { T as TabBar, a as Tab } from './TabBar-Cyja1TX8.js';
import './Subheader-DEm_inUP.js';
import './exports-DKuYoYKl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './prefixFilter-B6cFZsw3.js';
import './ContextFragment-CedcH2TL.js';
import './index2-D2s-XE5r.js';
import './NotchedOutline-Bg9Ljk79.js';
import './Input-CXqTjpeX.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './Ripple-N--aPaMn.js';
import './Item-T2YrjSpA.js';
import './dispatch-BOSWPsEc.js';
import './Graphic-CnHJKmsY.js';
import './Svg-Dkxrus40.js';
import './IconButton-Bt4YIh4x.js';

const contents = [
  {
    name: "MATHEMATICS I",
    url: "/courses/mathematics1",
    topics: [
      {
        name: "MATHEMATICAL THINKING",
        url: "/courses/mathematics1/thinking",
        topics: [
          {
            name: "Introduction to logic",
            url: "/courses/mathematics1/thinking/logic"
          },
          {
            name: "Propositional logic",
            url: "/courses/mathematics1/thinking/propositional"
          },
          {
            name: "Predicate logic",
            url: "/courses/mathematics1/thinking/predicate"
          },
          {
            name: "Inference",
            url: "/courses/mathematics1/thinking/inference"
          },
          {
            name: "Number theory",
            url: "/courses/mathematics1/thinking/number"
          },
          {
            name: "Geometry",
            url: "/courses/mathematics1/thinking/geometry"
          }
        ]
      },
      {
        name: "SET THEORY AND FUNCTIONS",
        url: "/courses/mathematics1/functions",
        topics: [
          {
            name: "Sets",
            url: "/courses/mathematics1/functions/sets"
          },
          {
            name: "Relations",
            url: "/courses/mathematics1/functions/relations"
          },
          {
            name: "Functions",
            url: "/courses/mathematics1/functions/functions"
          }
        ]
      },
      {
        name: "GRAPH THEORY",
        url: "/courses/mathematics1/graphs",
        topics: [
          {
            name: "Basics",
            url: "/courses/mathematics1/graphs/basics"
          },
          {
            name: "Subgraphs",
            url: "/courses/mathematics1/graphs/subgraphs"
          },
          {
            name: "Special graphs",
            url: "/courses/mathematics1/graphs/special"
          },
          {
            name: "Graph coloring",
            url: "/courses/mathematics1/graphs/coloring"
          },
          {
            name: "Paths",
            url: "/courses/mathematics1/graphs/paths"
          },
          {
            name: "Isomorphism",
            url: "/courses/mathematics1/graphs/isomorphism"
          }
        ]
      },
      {
        name: "PROBABILITY AND STATISTICS",
        url: "/courses/mathematics1/probability",
        topics: [
          {
            name: "Combinatorics",
            url: "/courses/mathematics1/probability/combinatorics"
          },
          {
            name: "Basic statistics",
            url: "/courses/mathematics1/probability/statistics"
          },
          {
            name: "Probability",
            url: "/courses/mathematics1/probability/probability"
          }
        ]
      },
      {
        name: "CALCULUS",
        url: "/courses/mathematics1/calculus",
        topics: [
          {
            name: "Limits and continuity",
            url: "/courses/mathematics1/calculus/limits"
          },
          {
            name: "Differential calculus",
            url: "/courses/mathematics1/calculus/differential"
          },
          {
            name: "Integral calculus",
            url: "/courses/mathematics1/calculus/integral"
          }
        ]
      }
    ]
  }
];
let contentNav = {
  "/courses/mathematics1": {
    "name": "MATHEMATICS I",
    "url": "/courses/mathematics1",
    "previous": "/courses/mathematics1",
    "next": "/courses/mathematics1/thinking"
  },
  "/courses/mathematics1/thinking": {
    "name": "MATHEMATICAL THINKING",
    "url": "/courses/mathematics1/thinking",
    "previous": "/courses/mathematics1",
    "next": "/courses/mathematics1/thinking/logic"
  },
  "/courses/mathematics1/thinking/logic": {
    "name": "Introduction to logic",
    "url": "/courses/mathematics1/thinking/logic",
    "previous": "/courses/mathematics1/thinking",
    "next": "/courses/mathematics1/thinking/propositional"
  },
  "/courses/mathematics1/thinking/propositional": {
    "name": "Propositional logic",
    "url": "/courses/mathematics1/thinking/propositional",
    "previous": "/courses/mathematics1/thinking/logic",
    "next": "/courses/mathematics1/thinking/predicate"
  },
  "/courses/mathematics1/thinking/predicate": {
    "name": "Predicate logic",
    "url": "/courses/mathematics1/thinking/predicate",
    "previous": "/courses/mathematics1/thinking/propositional",
    "next": "/courses/mathematics1/thinking/inference"
  },
  "/courses/mathematics1/thinking/inference": {
    "name": "Inference",
    "url": "/courses/mathematics1/thinking/inference",
    "previous": "/courses/mathematics1/thinking/predicate",
    "next": "/courses/mathematics1/thinking/number"
  },
  "/courses/mathematics1/thinking/number": {
    "name": "Number theory",
    "url": "/courses/mathematics1/thinking/number",
    "previous": "/courses/mathematics1/thinking/inference",
    "next": "/courses/mathematics1/thinking/geometry"
  },
  "/courses/mathematics1/thinking/geometry": {
    "name": "Geometry",
    "url": "/courses/mathematics1/thinking/geometry",
    "previous": "/courses/mathematics1/thinking/number",
    "next": "/courses/mathematics1/functions"
  },
  "/courses/mathematics1/functions": {
    "name": "SET THEORY AND FUNCTIONS",
    "url": "/courses/mathematics1/functions",
    "previous": "/courses/mathematics1/thinking/geometry",
    "next": "/courses/mathematics1/functions/sets"
  },
  "/courses/mathematics1/functions/sets": {
    "name": "Sets",
    "url": "/courses/mathematics1/functions/sets",
    "previous": "/courses/mathematics1/functions",
    "next": "/courses/mathematics1/functions/relations"
  },
  "/courses/mathematics1/functions/relations": {
    "name": "Relations",
    "url": "/courses/mathematics1/functions/relations",
    "previous": "/courses/mathematics1/functions/sets",
    "next": "/courses/mathematics1/functions/functions"
  },
  "/courses/mathematics1/functions/functions": {
    "name": "Functions",
    "url": "/courses/mathematics1/functions/functions",
    "previous": "/courses/mathematics1/functions/relations",
    "next": "/courses/mathematics1/graphs"
  },
  "/courses/mathematics1/graphs": {
    "name": "GRAPH THEORY",
    "url": "/courses/mathematics1/graphs",
    "previous": "/courses/mathematics1/functions/functions",
    "next": "/courses/mathematics1/graphs/basics"
  },
  "/courses/mathematics1/graphs/basics": {
    "name": "Basics",
    "url": "/courses/mathematics1/graphs/basics",
    "previous": "/courses/mathematics1/graphs",
    "next": "/courses/mathematics1/graphs/subgraphs"
  },
  "/courses/mathematics1/graphs/subgraphs": {
    "name": "Subgraphs",
    "url": "/courses/mathematics1/graphs/subgraphs",
    "previous": "/courses/mathematics1/graphs/basics",
    "next": "/courses/mathematics1/graphs/special"
  },
  "/courses/mathematics1/graphs/special": {
    "name": "Special graphs",
    "url": "/courses/mathematics1/graphs/special",
    "previous": "/courses/mathematics1/graphs/subgraphs",
    "next": "/courses/mathematics1/graphs/coloring"
  },
  "/courses/mathematics1/graphs/coloring": {
    "name": "Graph coloring",
    "url": "/courses/mathematics1/graphs/coloring",
    "previous": "/courses/mathematics1/graphs/special",
    "next": "/courses/mathematics1/graphs/paths"
  },
  "/courses/mathematics1/graphs/paths": {
    "name": "Paths",
    "url": "/courses/mathematics1/graphs/paths",
    "previous": "/courses/mathematics1/graphs/coloring",
    "next": "/courses/mathematics1/graphs/isomorphism"
  },
  "/courses/mathematics1/graphs/isomorphism": {
    "name": "Isomorphism",
    "url": "/courses/mathematics1/graphs/isomorphism",
    "previous": "/courses/mathematics1/graphs/paths",
    "next": "/courses/mathematics1/probability"
  },
  "/courses/mathematics1/probability": {
    "name": "PROBABILITY AND STATISTICS",
    "url": "/courses/mathematics1/probability",
    "previous": "/courses/mathematics1/graphs/isomorphism",
    "next": "/courses/mathematics1/probability/combinatorics"
  },
  "/courses/mathematics1/probability/combinatorics": {
    "name": "Combinatorics",
    "url": "/courses/mathematics1/probability/combinatorics",
    "previous": "/courses/mathematics1/probability",
    "next": "/courses/mathematics1/probability/statistics"
  },
  "/courses/mathematics1/probability/statistics": {
    "name": "Basic statistics",
    "url": "/courses/mathematics1/probability/statistics",
    "previous": "/courses/mathematics1/probability/combinatorics",
    "next": "/courses/mathematics1/probability/probability"
  },
  "/courses/mathematics1/probability/probability": {
    "name": "Probability",
    "url": "/courses/mathematics1/probability/probability",
    "previous": "/courses/mathematics1/probability/statistics",
    "next": "/courses/mathematics1/calculus"
  },
  "/courses/mathematics1/calculus": {
    "name": "CALCULUS",
    "url": "/courses/mathematics1/calculus",
    "previous": "/courses/mathematics1/probability/probability",
    "next": "/courses/mathematics1/calculus/limits"
  },
  "/courses/mathematics1/calculus/limits": {
    "name": "Limits and continuity",
    "url": "/courses/mathematics1/calculus/limits",
    "previous": "/courses/mathematics1/calculus",
    "next": "/courses/mathematics1/calculus/differential"
  },
  "/courses/mathematics1/calculus/differential": {
    "name": "Differential calculus",
    "url": "/courses/mathematics1/calculus/differential",
    "previous": "/courses/mathematics1/calculus/limits",
    "next": "/courses/mathematics1/calculus/integral"
  },
  "/courses/mathematics1/calculus/integral": {
    "name": "Integral calculus",
    "url": "/courses/mathematics1/calculus/integral",
    "previous": "/courses/mathematics1/calculus/differential",
    "next": "/courses/mathematics1/calculus/integral"
  }
};
const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}p.svelte-1a5or8o,li.svelte-1a5or8o{opacity:0.8}h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}h6.svelte-1a5or8o{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1a5or8o{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import DataTable, {Head, Row, Cell, Body} from '@smui/data-table';\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/mathematics1/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    let studentID;\\r\\n    let tabs = ['Contents', 'Assignments', 'Details'];\\r\\n    let active = \\"Contents\\";\\r\\n    const register = async () => {\\r\\n        if(!$page.data.user) {\\r\\n            alert(\\"Please login or sign up first!\\")\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/register\`, {\\r\\n            method: 'POST',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({studentID: studentID, courseID: '22CA2402', session: '2023-2024'})\\r\\n        })\\r\\n        if(!res.ok) {\\r\\n            alert('Something went wrong.')\\r\\n            return;\\r\\n        }\\r\\n        alert('Registered');\\r\\n    }\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Mathematics I\\";\\r\\n    $darkMode = false;\\r\\n    // export let data;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    const courseID = '24CA1101';\\r\\n    let assignments = [];\\r\\n    const getAssignments = async () => {\\r\\n        //fetch assignments\\r\\n        if(!$page.data.user) {\\r\\n            alert('Please log in or sign up first.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseID=\${courseID}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to load assignments')\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    /* h5 {\\r\\n        font-size: 1.1em;\\r\\n    } */\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<!-- <svelte:head>\\r\\n    <title>Mathematics I</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/mathematics1\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head> -->\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Mathematics I  \\r\\n    </h4>\\r\\n    <Card>\\r\\n        <TabBar {tabs} let:tab bind:active>\\r\\n            <Tab {tab} on:click={() => {}}>\\r\\n                <Label>{tab}</Label>\\r\\n            </Tab>\\r\\n        </TabBar>\\r\\n    </Card>\\r\\n    {#if active === 'Contents'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Objectives (24CA1101)</h6>\\r\\n                <p>This course aims to train students to think mathematically and apply logical\\r\\n                    reasoning to problem solving.</p>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Textfield required variant=\\"outlined\\" bind:value={studentID} label=\\"Student ID\\" style=\\"width:50%;\\" input$emptyValueUndefined />\\r\\n                <Button on:click={register}>Register</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        <h5>Contents</h5>\\r\\n        <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n            <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n        </Card>\\r\\n    {:else if active === 'Assignments'}\\r\\n        <h5>Assignments</h5>\\r\\n        <Button on:click={getAssignments}><Label>Load Assignments</Label></Button>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                {#each assignments as assignment}\\r\\n                    <div>\\r\\n                        <Button on:click={() => goto(\`/assignments/\${assignment._id}\`)}><Label>{assignment.title}</Label></Button>\\r\\n                    </div>\\r\\n                {/each}\\r\\n                <!-- <List>\\r\\n                    {#each data.assignments as assignment}\\r\\n\\r\\n                        <Item on:SMUI:action={() => goto(\`/courses/mathematics1/\${assignment._id}\`)}>\\r\\n                            <Graphic class=\\"material-icons\\">local_library</Graphic>\\r\\n                            <Text>{assignment.title}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List> -->\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {:else if active === 'Details'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Outcomes</h6>\\r\\n                <p>At the end of the course student will be able to</p>\\r\\n                <ol>\\r\\n                    <li>develop mathematical thinking</li>\\r\\n                    <li>model problems in terms of sets, functions and graphs</li>\\r\\n                    <li>understand the basics of probability and statistics</li>\\r\\n                    <li>understand basic calculus</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>A brief overview of the course</h6>\\r\\n                <p>This course aims to equip students with the skills and knowledge required to use mathematics to solve algorithmic problems. This courses forms the basis of many advanced topics needed to master various fields in computer science like analysing data, designing advanced algorithms and machine learning algorithms.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Textbook and references</h6>\\r\\n                <ol>\\r\\n                    <li>Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007.</li>\\r\\n                    <li>Study material at https://drmithileshkumar.com/courses/mathematics1</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Timetable</h6>\\r\\n                <strong>Room</strong>: TBD\\r\\n                <ol>\\r\\n                    <li><strong>Monday</strong>: 9:45-10:45</li>\\r\\n                    <li><strong>Tuesday</strong>: 2:45-4:45</li>\\r\\n                    <li><strong>Wednesday</strong>: 8:45-9:45</li>\\r\\n                    <li><strong>Friday</strong>: 12:00-1:00</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Assessement</h6>\\r\\n                <DataTable table$aria-label=\\"Marks breakup\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Test</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 1 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 2 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Assignment</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Seminar</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Reflection notes</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total CIA</Cell>\\r\\n                            <Cell>60M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>SEE - (100M)</Cell>\\r\\n                            <Cell>40M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total - (100M)</Cell>\\r\\n                            <Cell>CIA (60M) + SEE (40M)</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Attendence Requirements</h6>\\r\\n                <p>A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated. </p>\\r\\n                <h6>Rubrics of attendance in CIA evaluation</h6>\\r\\n                <DataTable table$aria-label=\\"Attendence Marks\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence (%)</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>95 - 100</Cell>\\r\\n                            <Cell>5</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>90 - 94</Cell>\\r\\n                            <Cell>4</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>85 - 89</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>80 - 84</Cell>\\r\\n                            <Cell>2</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>75 - 79</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <p>Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Mathematics I", $currentPath);
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
    )} <h4 class="svelte-1a5or8o" data-svelte-h="svelte-1m2a3fb">Mathematics I</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1owvrft">Course Objectives (24CA1101)</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-308znk">This course aims to train students to think mathematically and apply logical
                    reasoning to problem solving.</p>`;
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
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-2mi04l"><li class="svelte-1a5or8o">develop mathematical thinking</li> <li class="svelte-1a5or8o">model problems in terms of sets, functions and graphs</li> <li class="svelte-1a5or8o">understand the basics of probability and statistics</li> <li class="svelte-1a5or8o">understand basic calculus</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-oed0ub">This course aims to equip students with the skills and knowledge required to use mathematics to solve algorithmic problems. This courses forms the basis of many advanced topics needed to master various fields in computer science like analysing data, designing advanced algorithms and machine learning algorithms.</p>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-15rt9ij"><li class="svelte-1a5or8o">Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007.</li> <li class="svelte-1a5or8o">Study material at https://drmithileshkumar.com/courses/mathematics1</li></ol>`;
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

export { Page as default };
//# sourceMappingURL=_page.svelte-DPYIlMzI.js.map
