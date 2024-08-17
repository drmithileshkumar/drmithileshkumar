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
import { P as Pathlist } from "../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../chunks/CourseNavigation.js";
import { T as TabBar, a as Tab } from "../../../../../chunks/TabBar.js";
import "../../../../../chunks/Subheader.js";
const contents = [
  {
    name: "Discrete Mathematical Structures",
    url: "/courses/discrete",
    topics: [
      {
        name: "LOGIC",
        url: "/courses/discrete/logic",
        topics: [
          {
            name: "Basic Connectives and Truth Tables",
            url: "/courses/discrete/logic/table"
          },
          {
            name: "The Laws of Logic",
            url: "/courses/discrete/logic/laws"
          },
          {
            name: "Rules of Inference",
            url: "/courses/discrete/logic/inference"
          },
          {
            name: "Quantifiers",
            url: "/courses/discrete/logic/quantifiers"
          },
          {
            name: "Proofs",
            url: "/courses/discrete/logic/proofs"
          },
          {
            name: "Mathematical Induction",
            url: "/courses/discrete/logic/induction"
          }
        ]
      },
      {
        name: "COMBINATORICS",
        url: "/courses/discrete/combinatorics",
        topics: [
          {
            name: "The Rules of Sum and Product",
            url: "/courses/discrete/combinatorics/rules"
          },
          {
            name: "Permutations",
            url: "/courses/discrete/combinatorics/permutations"
          },
          {
            name: "Combinations",
            url: "/courses/discrete/combinatorics/combinations"
          },
          {
            name: "Combination with Repetition",
            url: "/courses/discrete/combinatorics/repetition"
          }
        ]
      },
      {
        name: "RELATIONS",
        url: "/courses/discrete/relations",
        topics: [
          {
            name: "Cartesian Products",
            url: "/courses/discrete/relations/cartesian"
          },
          {
            name: "Functions",
            url: "/courses/discrete/relations/functions"
          },
          {
            name: "The Pigeonhole Principle",
            url: "/courses/discrete/relations/pigeonhole"
          },
          {
            name: "Function Composition and inverse",
            url: "/courses/discrete/relations/composition"
          },
          {
            name: "Properties of Relations",
            url: "/courses/discrete/relations/properties"
          },
          {
            name: "Computer recognition",
            url: "/courses/discrete/relations/recognition"
          },
          {
            name: "Partial orders",
            url: "/courses/discrete/relations/partial"
          },
          {
            name: "Partitions",
            url: "/courses/discrete/relations/partitions"
          }
        ]
      },
      {
        name: "RECURRENCE RELATIONS",
        url: "/courses/discrete/recurrence",
        topics: [
          {
            name: "The Principle of Inclusion and Exclusion",
            url: "/courses/discrete/recurrence/inclusion"
          },
          {
            name: "Derangements",
            url: "/courses/discrete/recurrence/derangements"
          },
          {
            name: "The First-Order Linear Recurrence Relation",
            url: "/courses/discrete/recurrence/firstorder"
          },
          {
            name: "The Second-Order Linear Recurrence Relation",
            url: "/courses/discrete/recurrence/secondorder"
          }
        ]
      },
      {
        name: "GRAPH THEORY",
        url: "/courses/discrete/graph",
        topics: [
          {
            name: "Definition",
            url: "/courses/discrete/graph/definition"
          },
          {
            name: "Subgraphs",
            url: "/courses/discrete/graph/subgraphs"
          },
          {
            name: "Trees",
            url: "/courses/discrete/graph/trees"
          },
          {
            name: "Sorting",
            url: "/courses/discrete/graph/sorting"
          },
          {
            name: "Prefix codes",
            url: "/courses/discrete/graph/prefix"
          }
        ]
      }
    ]
  }
];
let contentNav = {
  "/courses/discrete": {
    "name": "Discrete Mathematical Structures",
    "url": "/courses/discrete",
    "previous": "/courses/discrete",
    "next": "/courses/discrete/logic"
  },
  "/courses/discrete/logic": {
    "name": "LOGIC",
    "url": "/courses/discrete/logic",
    "previous": "/courses/discrete",
    "next": "/courses/discrete/logic/table"
  },
  "/courses/discrete/logic/table": {
    "name": "Basic Connectives and Truth Tables",
    "url": "/courses/discrete/logic/table",
    "previous": "/courses/discrete/logic",
    "next": "/courses/discrete/logic/laws"
  },
  "/courses/discrete/logic/laws": {
    "name": "The Laws of Logic",
    "url": "/courses/discrete/logic/laws",
    "previous": "/courses/discrete/logic/table",
    "next": "/courses/discrete/logic/inference"
  },
  "/courses/discrete/logic/inference": {
    "name": "Rules of Inference",
    "url": "/courses/discrete/logic/inference",
    "previous": "/courses/discrete/logic/laws",
    "next": "/courses/discrete/logic/quantifiers"
  },
  "/courses/discrete/logic/quantifiers": {
    "name": "Quantifiers",
    "url": "/courses/discrete/logic/quantifiers",
    "previous": "/courses/discrete/logic/inference",
    "next": "/courses/discrete/logic/proofs"
  },
  "/courses/discrete/logic/proofs": {
    "name": "Proofs",
    "url": "/courses/discrete/logic/proofs",
    "previous": "/courses/discrete/logic/quantifiers",
    "next": "/courses/discrete/logic/induction"
  },
  "/courses/discrete/logic/induction": {
    "name": "Mathematical Induction",
    "url": "/courses/discrete/logic/induction",
    "previous": "/courses/discrete/logic/proofs",
    "next": "/courses/discrete/combinatorics"
  },
  "/courses/discrete/combinatorics": {
    "name": "COMBINATORICS",
    "url": "/courses/discrete/combinatorics",
    "previous": "/courses/discrete/logic/induction",
    "next": "/courses/discrete/combinatorics/rules"
  },
  "/courses/discrete/combinatorics/rules": {
    "name": "The Rules of Sum and Product",
    "url": "/courses/discrete/combinatorics/rules",
    "previous": "/courses/discrete/combinatorics",
    "next": "/courses/discrete/combinatorics/permutations"
  },
  "/courses/discrete/combinatorics/permutations": {
    "name": "Permutations",
    "url": "/courses/discrete/combinatorics/permutations",
    "previous": "/courses/discrete/combinatorics/rules",
    "next": "/courses/discrete/combinatorics/combinations"
  },
  "/courses/discrete/combinatorics/combinations": {
    "name": "Combinations",
    "url": "/courses/discrete/combinatorics/combinations",
    "previous": "/courses/discrete/combinatorics/permutations",
    "next": "/courses/discrete/combinatorics/repetition"
  },
  "/courses/discrete/combinatorics/repetition": {
    "name": "Combination with Repetition",
    "url": "/courses/discrete/combinatorics/repetition",
    "previous": "/courses/discrete/combinatorics/combinations",
    "next": "/courses/discrete/relations"
  },
  "/courses/discrete/relations": {
    "name": "RELATIONS",
    "url": "/courses/discrete/relations",
    "previous": "/courses/discrete/combinatorics/repetition",
    "next": "/courses/discrete/relations/cartesian"
  },
  "/courses/discrete/relations/cartesian": {
    "name": "Cartesian Products",
    "url": "/courses/discrete/relations/cartesian",
    "previous": "/courses/discrete/relations",
    "next": "/courses/discrete/relations/functions"
  },
  "/courses/discrete/relations/functions": {
    "name": "Functions",
    "url": "/courses/discrete/relations/functions",
    "previous": "/courses/discrete/relations/cartesian",
    "next": "/courses/discrete/relations/pigeonhole"
  },
  "/courses/discrete/relations/pigeonhole": {
    "name": "The Pigeonhole Principle",
    "url": "/courses/discrete/relations/pigeonhole",
    "previous": "/courses/discrete/relations/functions",
    "next": "/courses/discrete/relations/composition"
  },
  "/courses/discrete/relations/composition": {
    "name": "Function Composition and inverse",
    "url": "/courses/discrete/relations/composition",
    "previous": "/courses/discrete/relations/pigeonhole",
    "next": "/courses/discrete/relations/properties"
  },
  "/courses/discrete/relations/properties": {
    "name": "Properties of Relations",
    "url": "/courses/discrete/relations/properties",
    "previous": "/courses/discrete/relations/composition",
    "next": "/courses/discrete/relations/recognition"
  },
  "/courses/discrete/relations/recognition": {
    "name": "Computer recognition",
    "url": "/courses/discrete/relations/recognition",
    "previous": "/courses/discrete/relations/properties",
    "next": "/courses/discrete/relations/partial"
  },
  "/courses/discrete/relations/partial": {
    "name": "Partial orders",
    "url": "/courses/discrete/relations/partial",
    "previous": "/courses/discrete/relations/recognition",
    "next": "/courses/discrete/relations/partitions"
  },
  "/courses/discrete/relations/partitions": {
    "name": "Partitions",
    "url": "/courses/discrete/relations/partitions",
    "previous": "/courses/discrete/relations/partial",
    "next": "/courses/discrete/recurrence"
  },
  "/courses/discrete/recurrence": {
    "name": "RECURRENCE RELATIONS",
    "url": "/courses/discrete/recurrence",
    "previous": "/courses/discrete/relations/partitions",
    "next": "/courses/discrete/recurrence/inclusion"
  },
  "/courses/discrete/recurrence/inclusion": {
    "name": "The Principle of Inclusion and Exclusion",
    "url": "/courses/discrete/recurrence/inclusion",
    "previous": "/courses/discrete/recurrence",
    "next": "/courses/discrete/recurrence/derangements"
  },
  "/courses/discrete/recurrence/derangements": {
    "name": "Derangements",
    "url": "/courses/discrete/recurrence/derangements",
    "previous": "/courses/discrete/recurrence/inclusion",
    "next": "/courses/discrete/recurrence/firstorder"
  },
  "/courses/discrete/recurrence/firstorder": {
    "name": "The First-Order Linear Recurrence Relation",
    "url": "/courses/discrete/recurrence/firstorder",
    "previous": "/courses/discrete/recurrence/derangements",
    "next": "/courses/discrete/recurrence/secondorder"
  },
  "/courses/discrete/recurrence/secondorder": {
    "name": "The Second-Order Linear Recurrence Relation",
    "url": "/courses/discrete/recurrence/secondorder",
    "previous": "/courses/discrete/recurrence/firstorder",
    "next": "/courses/discrete/graph"
  },
  "/courses/discrete/graph": {
    "name": "GRAPH THEORY",
    "url": "/courses/discrete/graph",
    "previous": "/courses/discrete/recurrence/secondorder",
    "next": "/courses/discrete/graph/definition"
  },
  "/courses/discrete/graph/definition": {
    "name": "Definition",
    "url": "/courses/discrete/graph/definition",
    "previous": "/courses/discrete/graph",
    "next": "/courses/discrete/graph/subgraphs"
  },
  "/courses/discrete/graph/subgraphs": {
    "name": "Subgraphs",
    "url": "/courses/discrete/graph/subgraphs",
    "previous": "/courses/discrete/graph/definition",
    "next": "/courses/discrete/graph/trees"
  },
  "/courses/discrete/graph/trees": {
    "name": "Trees",
    "url": "/courses/discrete/graph/trees",
    "previous": "/courses/discrete/graph/subgraphs",
    "next": "/courses/discrete/graph/sorting"
  },
  "/courses/discrete/graph/sorting": {
    "name": "Sorting",
    "url": "/courses/discrete/graph/sorting",
    "previous": "/courses/discrete/graph/trees",
    "next": "/courses/discrete/graph/prefix"
  },
  "/courses/discrete/graph/prefix": {
    "name": "Prefix codes",
    "url": "/courses/discrete/graph/prefix",
    "previous": "/courses/discrete/graph/sorting",
    "next": "/courses/discrete/graph/prefix"
  }
};
const css = {
  code: "article.svelte-1a5or8o{display:flex;flex-direction:column;gap:0.5em}p.svelte-1a5or8o,li.svelte-1a5or8o{opacity:0.8}h4.svelte-1a5or8o,h5.svelte-1a5or8o{margin:0.5em 0}h6.svelte-1a5or8o{font-size:1em;margin:0.5em 0;color:rgba(0, 150, 200, 1)}strong.svelte-1a5or8o{color:goldenrod;opacity:1}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Link from '$lib/ui/Link.svelte';\\r\\n    import {page} from '$app/stores';\\r\\n    import {onMount} from 'svelte';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import Ripple from \\"@smui/ripple\\";\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import DataTable, {Head, Row, Cell, Body} from '@smui/data-table';\\r\\n    import NavList from '$lib/components/NavList.svelte'\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import { darkMode, navList } from \\"$lib/stores\\";\\r\\n    import { contents, contentNav } from \\"$lib/pages/courses/discrete/content\\";\\r\\n    import Pathlist from \\"$lib/components/Pathlist.svelte\\";\\r\\n\\timport CourseNavigation from \\"$lib/components/CourseNavigation.svelte\\";\\r\\n    import Tab, { Label } from \\"@smui/tab\\";\\r\\n    import TabBar from \\"@smui/tab-bar\\";\\r\\n    import List, {\\r\\n        Item,\\r\\n        Graphic,\\r\\n        Separator,\\r\\n        Meta,\\r\\n        Text,\\r\\n        PrimaryText,\\r\\n        SecondaryText,\\r\\n    } from \\"@smui/list\\";\\r\\n    let studentID;\\r\\n    let tabs = ['Contents', 'Assignments', 'Details'];\\r\\n    let active = \\"Contents\\";\\r\\n    const register = async () => {\\r\\n        if(!$page.data.user) {\\r\\n            alert(\\"Please login or sign up first!\\")\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/register\`, {\\r\\n            method: 'POST',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({studentID: studentID, courseID: '23CA2303', session: '2024-2025'})\\r\\n        })\\r\\n        if(!res.ok) {\\r\\n            alert('Something went wrong.')\\r\\n            return;\\r\\n        }\\r\\n        alert('Registered');\\r\\n    }\\r\\n    $navList = contents;\\r\\n    $currentPath = \\"Discrete Mathematical Structures\\";\\r\\n    $darkMode = false;\\r\\n    // export let data;\\r\\n    // onMount(() => {\\r\\n    //     MathJax.typeset();\\r\\n    // });\\r\\n    const courseID = '23CA2303';\\r\\n    let assignments = [];\\r\\n    const getAssignments = async () => {\\r\\n        //fetch assignments\\r\\n        if(!$page.data.user) {\\r\\n            alert('Please log in or sign up first.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseID=\${courseID}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to load assignments')\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    p, li {\\r\\n        opacity: 0.8;\\r\\n    }\\r\\n    h2, h3, h4, h5 {\\r\\n        margin: 0.5em 0;\\r\\n    }\\r\\n    /* h5 {\\r\\n        font-size: 1.1em;\\r\\n    } */\\r\\n    h6 {\\r\\n        font-size: 1em;\\r\\n        margin: 0.5em 0;\\r\\n        color: rgba(0, 150, 200, 1);\\r\\n    }\\r\\n    strong {\\r\\n        color: goldenrod;\\r\\n        opacity: 1;\\r\\n    }\\r\\n    a {\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .question {\\r\\n        cursor: pointer;\\r\\n        padding: 0.3em;\\r\\n    }\\r\\n</style>\\r\\n<!-- <svelte:head>\\r\\n    <title>Discrete Mathematical Structures</title>\\r\\n    <link rel=\\"canonical\\" href=\\"https://drmithileshkumar.com/courses/discrete\\" />\\r\\n    <meta name=\\"description\\" content=\\"Courses Taught by Dr Mithilesh Kumar\\" />\\r\\n</svelte:head> -->\\r\\n<article>\\r\\n    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />\\r\\n    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />\\r\\n    <h4>\\r\\n        Discrete Mathematical Structures  \\r\\n    </h4>\\r\\n    <Card>\\r\\n        <TabBar {tabs} let:tab bind:active>\\r\\n            <Tab {tab} on:click={() => {}}>\\r\\n                <Label>{tab}</Label>\\r\\n            </Tab>\\r\\n        </TabBar>\\r\\n    </Card>\\r\\n    {#if active === 'Contents'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Objectives (23CA2303)</h6>\\r\\n                <p>Student should gain maturity in formal mathematics, should be able to apply logical reasoning to assertain proofs, ability to analyse running time of algorithms and be able to translate a problem in terms of graphs and apply graph-theoretic concepts.</p>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Textfield required variant=\\"outlined\\" bind:value={studentID} label=\\"Student ID\\" style=\\"width:50%;\\" input$emptyValueUndefined />\\r\\n                <Button on:click={register}>Register</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        <h5>Contents</h5>\\r\\n        <Card style=\\"background-color: rgba(0, 100, 100, 0.1\\">\\r\\n            <NavList name=\\"{$navList[0].name}\\" url=\\"{$navList[0].url}\\" topics={$navList[0].topics} expanded />\\r\\n        </Card>\\r\\n    {:else if active === 'Assignments'}\\r\\n        <h5>Assignments</h5>\\r\\n        <Button on:click={getAssignments}><Label>Load Assignments</Label></Button>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                {#each assignments as assignment}\\r\\n                    <div>\\r\\n                        <Button on:click={() => goto(\`/assignments/\${assignment._id}\`)}><Label>{assignment.title}</Label></Button>\\r\\n                    </div>\\r\\n                {/each}\\r\\n                <!-- <List>\\r\\n                    {#each data.assignments as assignment}\\r\\n\\r\\n                        <Item on:SMUI:action={() => goto(\`/courses/discrete/\${assignment._id}\`)}>\\r\\n                            <Graphic class=\\"material-icons\\">local_library</Graphic>\\r\\n                            <Text>{assignment.title}</Text>\\r\\n                        </Item>\\r\\n                    {/each}\\r\\n                </List> -->\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {:else if active === 'Details'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Course Outcomes</h6>\\r\\n                <p>At the end of the course student will be able to</p>\\r\\n                <ol>\\r\\n                    <li>use formal logic in proofs</li>\\r\\n                    <li>apply combinatorics in probability</li>\\r\\n                    <li>understand various types of relations and functions</li>\\r\\n                    <li>use recurrence relations to analyze running time of algorithms</li>\\r\\n                    <li>understand graph-theoretic concepts to apply in algorithm design</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>A brief overview of the course</h6>\\r\\n                <p>Computer science is based on discrete objects. This course is designed to equiv students with mathematical tools needed in advanced algorithm design. The course covers fundamentals of logic, combinatorics, types of relations and functions, recurrence relations and graph theory.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Textbook and references</h6>\\r\\n                <ol>\\r\\n                    <li>Ralph P. Grimaldi: Discrete and Combinatorial Mathematics, 5th Edition,\\r\\n                        Pearson Education. 2004.</li>\\r\\n                    <li>Study material at https://drmithileshkumar.com/courses/discrete</li>\\r\\n                    <li>Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007.</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Timetable</h6>\\r\\n                <p><strong>Room</strong>: A S227, B S226</p>\\r\\n                \\r\\n                <DataTable table$aria-label=\\"Time table\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell>8:45-9:45</Cell>\\r\\n                            <Cell>11:00-12:00</Cell>\\r\\n                            <Cell>12:00-1:00</Cell>\\r\\n                            <Cell>1:45-2:45</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>Mon</Cell>\\r\\n                            <Cell>A</Cell>\\r\\n                            <Cell>B</Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell></Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Tue</Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell>A</Cell>\\r\\n                            <Cell></Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Wed</Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell>B</Cell>\\r\\n                            <Cell></Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Thu</Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell>A</Cell>\\r\\n                            <Cell>B</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Fri</Cell>\\r\\n                            <Cell>B</Cell>\\r\\n                            <Cell></Cell>\\r\\n                            <Cell>A</Cell>\\r\\n                            <Cell></Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Assessement</h6>\\r\\n                <DataTable table$aria-label=\\"Marks breakup\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Test</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 1 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Internal Assessment 2 - (40M)</Cell>\\r\\n                            <Cell>20M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Assignment</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Seminar</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Reflection notes</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence</Cell>\\r\\n                            <Cell>5M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total CIA</Cell>\\r\\n                            <Cell>60M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>SEE - (100M)</Cell>\\r\\n                            <Cell>40M</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>Total - (100M)</Cell>\\r\\n                            <Cell>CIA (60M) + SEE (40M)</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h6>Attendence Requirements</h6>\\r\\n                <p>A student should have 75% or above to appear for the SEE exam failing which the admit card for the SEE will not be generated. </p>\\r\\n                <h6>Rubrics of attendance in CIA evaluation</h6>\\r\\n                <DataTable table$aria-label=\\"Attendence Marks\\" style=\\"max-width: 100%;\\">\\r\\n                    <Head>\\r\\n                        <Row>\\r\\n                            <Cell>Attendence (%)</Cell>\\r\\n                            <Cell>Marks</Cell>\\r\\n                        </Row>\\r\\n                    </Head>\\r\\n                    <Body>\\r\\n                        <Row>\\r\\n                            <Cell>95 - 100</Cell>\\r\\n                            <Cell>5</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>90 - 94</Cell>\\r\\n                            <Cell>4</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>85 - 89</Cell>\\r\\n                            <Cell>3</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>80 - 84</Cell>\\r\\n                            <Cell>2</Cell>\\r\\n                        </Row>\\r\\n                        <Row>\\r\\n                            <Cell>75 - 79</Cell>\\r\\n                            <Cell>1</Cell>\\r\\n                        </Row>\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <p>Under extreme circumstances like medical emergencies etc. the student may apply permission with proper proofs attached and letter duly signed by the Chairperson of the department for obtaining 10% increment if he/she is having less than 75% attendance.</p>\\r\\n            </Content>\\r\\n        </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n"],"names":[],"mappings":"AAyEI,sBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAC,CAAE,iBAAG,CACF,OAAO,CAAE,GACb,CACQ,iBAAE,CAAE,iBAAG,CACX,MAAM,CAAE,KAAK,CAAC,CAClB,CAIA,iBAAG,CACC,SAAS,CAAE,GAAG,CACd,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAC9B,CACA,qBAAO,CACH,KAAK,CAAE,SAAS,CAChB,OAAO,CAAE,CACb"}`
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
  set_store_value(currentPath, $currentPath = "Discrete Mathematical Structures", $currentPath);
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
    )} <h4 class="svelte-1a5or8o" data-svelte-h="svelte-3mf21">Discrete Mathematical Structures</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-10qej5z">Course Objectives (23CA2303)</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-zt3v6c">Student should gain maturity in formal mathematics, should be able to apply logical reasoning to assertain proofs, ability to analyse running time of algorithms and be able to translate a problem in terms of graphs and apply graph-theoretic concepts.</p>`;
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
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-fe1r8k">Course Outcomes</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1yih345">At the end of the course student will be able to</p> <ol data-svelte-h="svelte-1yoaz8s"><li class="svelte-1a5or8o">use formal logic in proofs</li> <li class="svelte-1a5or8o">apply combinatorics in probability</li> <li class="svelte-1a5or8o">understand various types of relations and functions</li> <li class="svelte-1a5or8o">use recurrence relations to analyze running time of algorithms</li> <li class="svelte-1a5or8o">understand graph-theoretic concepts to apply in algorithm design</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-cra9n3">A brief overview of the course</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-e6tl2d">Computer science is based on discrete objects. This course is designed to equiv students with mathematical tools needed in advanced algorithm design. The course covers fundamentals of logic, combinatorics, types of relations and functions, recurrence relations and graph theory.</p>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-kgi1xz">Textbook and references</h6> <ol data-svelte-h="svelte-onaovf"><li class="svelte-1a5or8o">Ralph P. Grimaldi: Discrete and Combinatorial Mathematics, 5th Edition,
                        Pearson Education. 2004.</li> <li class="svelte-1a5or8o">Study material at https://drmithileshkumar.com/courses/discrete</li> <li class="svelte-1a5or8o">Kenneth H. Rosen: Discrete Mathematics and its Applications, 6th Edition, McGraw Hill, 2007.</li></ol>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-1a5or8o" data-svelte-h="svelte-1l2n45b">Timetable</h6> <p class="svelte-1a5or8o" data-svelte-h="svelte-1ybpyd2"><strong class="svelte-1a5or8o">Room</strong>: A S227, B S226</p> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Time table",
                style: "max-width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `8:45-9:45`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `11:00-12:00`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `12:00-1:00`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `1:45-2:45`;
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
                              return `Mon`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `A`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `B`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Tue`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `A`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Wed`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `B`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Thu`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `A`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `B`;
                            }
                          })}`;
                        }
                      })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `Fri`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `B`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                            default: () => {
                              return `A`;
                            }
                          })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {})}`;
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
