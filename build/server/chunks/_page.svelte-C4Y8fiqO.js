import { a as subscribe, e as set_store_value } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, i as each, e as escape } from './ssr-Cv_bEuJL.js';
import './client-CjdeEz1m.js';
import { p as page } from './stores-CD1QeJjc.js';
import { C as Content } from './ActionIcons-CEcRhLH3.js';
import { B as Button } from './Button-nlTGW0Wq.js';
import { C as Card } from './Card-w0EtY1mU.js';
import { A as Actions } from './Actions-k21q-Hb9.js';
import { C as Checkbox } from './Checkbox-JP0nmioc.js';
import { F as FormField } from './FormField-BbIiNutz.js';
import { S as Select, O as Option } from './Option-CiO-XFDc.js';
import { c as currentPath } from './stores2-DCuXQBIu.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './Ripple-Yt1ZX6hy.js';
import './prefixFilter-B6cFZsw3.js';
import './index2-B3zlhmO5.js';
import './Menu-Szmr--n2.js';
import './SelectionGroupIcon-obMfUwh0.js';
import './Subheader-BwOM49vC.js';
import './Graphic-CTyan_iC.js';
import './Item-X5iuBhs5.js';
import './NotchedOutline-YjUGQyoC.js';

const css$1 = {
  code: ".assignments.svelte-hxlsrk{padding-bottom:1em}.options.svelte-hxlsrk{display:flex;flex-direction:column}",
  map: `{"version":3,"file":"Question.svelte","sources":["Question.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import Select, { Option } from '@smui/select';\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n    import { page } from '$app/stores';\\r\\n    export let question;\\r\\n    export let assignments = [];\\r\\n    let assignmentID;\\r\\n    const addQuestion = async () => {\\r\\n        \\r\\n        let assignmentIndex;\\r\\n        assignments.forEach((assignment, i) => {\\r\\n            if(assignment._id === assignmentID) assignmentIndex = i;\\r\\n        });\\r\\n        if(assignments[assignmentIndex].questions.indexOf(question._id) !== -1) {\\r\\n            alert('Question already added.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments/\${assignmentID}/question\`, {\\r\\n            method: 'PUT',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({questionID: question._id})\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Question added to the assignment')\\r\\n        } else {\\r\\n            alert('Failed');\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .assignments {\\r\\n        padding-bottom: 1em;\\r\\n    }\\r\\n    .options {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n</style>\\r\\n<Card>\\r\\n    <Content>\\r\\n        <div class=\\"assignments\\">\\r\\n            <Select variant=\\"outlined\\" bind:value={assignmentID} label=\\"Assignments\\" style=\\"width:70%\\">\\r\\n                <Option value=\\"\\" />\\r\\n                {#each assignments as assignment}\\r\\n                    <Option value={assignment._id}>\\r\\n                    {assignment.courseCode} {assignment.title} {assignment.session}\\r\\n                    </Option>\\r\\n                {/each}\\r\\n            </Select>\\r\\n            <Button on:click={addQuestion}>Add</Button>\\r\\n        </div>\\r\\n        <div class=\\"question\\" use:typeset>{@html question.statement}</div>\\r\\n        <div class=\\"options\\">\\r\\n            <FormField>\\r\\n                <Checkbox checked={question.correct.indexOf('A') !== -1} />\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionA}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={question.correct.indexOf('B') !== -1} />\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionB}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={question.correct.indexOf('C') !== -1} />\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionC}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={question.correct.indexOf('D') !== -1} />\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionD}</span>\\r\\n            </FormField>\\r\\n        </div>\\r\\n        <div class=\\"solution\\" use:typeset>{@html question.solution}</div>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={() => goto(\`/\${$page.data.user.publicID}/questions/\${question._id}\`)}>Edit</Button>\\r\\n    </Actions>\\r\\n</Card>"],"names":[],"mappings":"AAoCI,0BAAa,CACT,cAAc,CAAE,GACpB,CACA,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB"}`
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { question } = $$props;
  let { assignments = [] } = $$props;
  let assignmentID;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.assignments === void 0 && $$bindings.assignments && assignments !== void 0)
    $$bindings.assignments(assignments);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="assignments svelte-hxlsrk">${validate_component(Select, "Select").$$render(
              $$result,
              {
                variant: "outlined",
                label: "Assignments",
                style: "width:70%",
                value: assignmentID
              },
              {
                value: ($$value) => {
                  assignmentID = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(assignments, (assignment) => {
                    return `${validate_component(Option, "Option").$$render($$result, { value: assignment._id }, {}, {
                      default: () => {
                        return `${escape(assignment.courseCode)} ${escape(assignment.title)} ${escape(assignment.session)} `;
                      }
                    })}`;
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Add`;
              }
            })}</div> <div class="question"><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> <div class="options svelte-hxlsrk">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("A") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionB}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("B") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionC}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("C") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionD}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  {
                    checked: question.correct.indexOf("D") !== -1
                  },
                  {},
                  {}
                )}`;
              }
            })}</div> <div class="solution"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Edit`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { page } from '$app/stores';\\r\\n    import Card, { Content, Actions } from \\"@smui/card\\";\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Datatable, {Head, Body, Row, Cell} from \\"@smui/data-table\\";\\r\\n\\timport Question from \\"$lib/components/Question.svelte\\";\\r\\n    import { currentPath } from '$lib/stores.js';\\r\\n    import Select, {Option} from \\"@smui/select\\";\\r\\n    // export let data;\\r\\n    $currentPath = 'Questions'\\r\\n    let courses = [\\r\\n        {\\r\\n            name: \\"Mathematics II\\",\\r\\n            id: '22CA1201'\\r\\n        }, \\r\\n        {\\r\\n            name: 'Internet Technologies',\\r\\n            id: '22CA2402'\\r\\n        },\\r\\n        {\\r\\n            name: 'Internet Technologies Lab',\\r\\n            id: '22CA2405'\\r\\n        }];\\r\\n    let questions = [], assignments = [];\\r\\n    let selectedCourse;\\r\\n    const getQuestions = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/questions?courseName=\${selectedCourse}\`);\\r\\n        if(!res.ok) {\\r\\n            alert('Failed to get questions');\\r\\n            return;\\r\\n        }\\r\\n        questions = await res.json();\\r\\n        let res1 = await fetch(\`/api/\${$page.data.user.publicID}/assignments?courseName=\${selectedCourse}\`)\\r\\n        if(!res1.ok) {\\r\\n            alert('Failed to get assignments');\\r\\n            return;\\r\\n        }\\r\\n        assignments = await res1.json();\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <Button on:click={() => goto(\`/\${$page.data.user.publicID}/questions/new\`)}>New Question</Button>\\r\\n    <div class=\\"courses\\">\\r\\n        <Select variant=\\"outlined\\" bind:value={selectedCourse} label=\\"Course\\">\\r\\n            <Option value=\\"\\" />\\r\\n            {#each courses as course}\\r\\n                <Option value={course.name}>{course.name}</Option>\\r\\n            {/each}\\r\\n        </Select>\\r\\n        <Button on:click={getQuestions}>Get Questions</Button>\\r\\n    </div>\\r\\n    \\r\\n    {#each questions as question}\\r\\n        <Question {question} assignments={assignments} />\\r\\n    {/each}\\r\\n</article>"],"names":[],"mappings":"AA2CI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Questions", $currentPath);
  let courses = [
    { name: "Mathematics II", id: "22CA1201" },
    {
      name: "Internet Technologies",
      id: "22CA2402"
    },
    {
      name: "Internet Technologies Lab",
      id: "22CA2405"
    }
  ];
  let questions = [], assignments = [];
  let selectedCourse;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `New Question`;
      }
    })} <div class="courses">${validate_component(Select, "Select").$$render(
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
          return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {})} ${each(courses, (course) => {
            return `${validate_component(Option, "Option").$$render($$result, { value: course.name }, {}, {
              default: () => {
                return `${escape(course.name)}`;
              }
            })}`;
          })}`;
        }
      }
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Get Questions`;
      }
    })}</div> ${each(questions, (question) => {
      return `${validate_component(Question, "Question").$$render($$result, { question, assignments }, {}, {})}`;
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4Y8fiqO.js.map
