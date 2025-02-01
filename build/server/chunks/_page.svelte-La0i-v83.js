import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, v as validate_component, i as each } from './ssr2-CDgUAJs6.js';
import { p as page } from './stores3-DPEAZJnM.js';
import './client-k3u4ChD_.js';
import './ActionIcons-Bx2zL88O.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import './Suffix-CtI6fDI6.js';
import { c as currentPath } from './stores-Cecnyqn_.js';
import { A as Assignment } from './Assignment-T8Y9pZI8.js';
import { T as TestQuestion } from './TestQuestion-CMwY38p_.js';
import './exports-kR70XCWV.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './Ripple-N--aPaMn.js';
import './index2-D2s-XE5r.js';
import './Card-BZ_KNbGw.js';
import './Actions-DlQ11USC.js';
import './Set-DpFt5ER7.js';
import './ContextFragment-CedcH2TL.js';
import './Text-B2xpIqtX.js';
import './Textfield-B08XD1S3.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-Bg9Ljk79.js';
import './Input-CXqTjpeX.js';
import './Checkbox-6gc4AgBs.js';
import './FormField-CQ11Qxdo.js';
import './SelectionGroupIcon-CO1YlMDH.js';
import './Subheader-DEm_inUP.js';
import './Graphic-CnHJKmsY.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    // import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions} from '@smui/card';\\r\\n    import Button, { Label} from '@smui/button';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import Radio from '@smui/radio';\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import Assignment from '$lib/components/Assignment.svelte';\\r\\n    import TestQuestion from '$lib/components/TestQuestion.svelte';\\r\\n    import { onMount } from 'svelte';\\r\\n    export let data;\\r\\n    $currentPath = \\"Assignment\\";\\r\\n    let studentID;\\r\\n    let answers = {};\\r\\n    onMount(() => {\\r\\n        // for(let i = 0; i < data.assignment.numberOfQuestions; i++) {\\r\\n        //     answers.push({\\r\\n        //         questionID: data.assignment.questions[i]._id,\\r\\n        //         answer: []\\r\\n        //     });\\r\\n        // }\\r\\n        // console.log($page.data)\\r\\n        if(data.studentAssignment) {\\r\\n            studentID = data.studentAssignment.id;\\r\\n            answers = data.studentAssignment.answers;\\r\\n        }\\r\\n    })\\r\\n    let preview;\\r\\n    \\r\\n    const cancel = () => {\\r\\n\\r\\n    }\\r\\n    const typeset = () => {\\r\\n        // console.log('typesetting...')\\r\\n        renderMathInElement(preview, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n        // setTimeout(() => {\\r\\n\\t\\t// \\trenderMathInElement(preview, {\\r\\n\\t\\t// \\t\\tdelimiters: [\\r\\n\\t\\t// \\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t// \\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t// \\t\\t],\\r\\n\\t\\t// \\t\\t// \\r\\n\\t\\t// \\t\\tthrowOnError: false\\r\\n\\t\\t// \\t});\\r\\n\\t\\t// }, 0);\\r\\n    }\\r\\n    \\r\\n    const submit = async (status) => {\\r\\n        //send studentID as well\\r\\n        // console.log(answers)\\r\\n        if(!studentID) {\\r\\n            alert('Enter your USN');\\r\\n            return;\\r\\n        }\\r\\n        let marks = {};\\r\\n        let totalCorrectOptions = 0;\\r\\n        let totalMarks = 0;\\r\\n        for(let i = 0; i < data.assignment.questions.length; i++) {\\r\\n            totalCorrectOptions += data.assignment.questions[i].correct.length;\\r\\n        }\\r\\n        let unitMarks = 100 / totalCorrectOptions;\\r\\n        for(let i = 0; i < data.assignment.questions.length; i++) {\\r\\n            marks[data.assignment.questions[i]._id] = 0;\\r\\n            for(let j = 0; j < answers[data.assignment.questions[i]._id].length; j++) {\\r\\n                if(data.assignment.questions[i].correct.indexOf(answers[data.assignment.questions[i]._id][j]) !== -1) {\\r\\n                    marks[data.assignment.questions[i]._id]++;\\r\\n                } else {\\r\\n                    marks[data.assignment.questions[i]._id] += -0.5;\\r\\n                }\\r\\n            }\\r\\n            marks[data.assignment.questions[i]._id] *= unitMarks;\\r\\n            totalMarks += marks[data.assignment.questions[i]._id]\\r\\n        }\\r\\n        let studentAssignment = {\\r\\n            title: data.assignment.title,\\r\\n            courseID: data.assignment.courseID,\\r\\n            name: $page.data.user.name,\\r\\n            publicID: $page.data.user.publicID,\\r\\n            id: studentID,//usn\\r\\n            submission: Date.now(),\\r\\n            assignmentID: data.assignment._id,\\r\\n            answers,//{questionID, answer}\\r\\n            marks,//question-wise\\r\\n            total: totalMarks,\\r\\n            status\\r\\n        }\\r\\n        if(data.studentAssignment) {\\r\\n            studentAssignment = {\\r\\n                title: data.studentAssignment.title,\\r\\n                courseID: data.studentAssignment.courseID,\\r\\n                name: data.studentAssignment.name,\\r\\n                publicID: data.studentAssignment.publicID,\\r\\n                id: data.studentAssignment.id,//usn\\r\\n                submission: Date.now(),\\r\\n                assignmentID: data.assignment._id,\\r\\n                answers,//{questionID, answer}\\r\\n                marks,//question-wise\\r\\n                total: totalMarks,\\r\\n                status\\r\\n            }\\r\\n        }\\r\\n        \\r\\n        let res = await fetch(\`/api/assignments/\${data.studentAssignment._id}\`, {\\r\\n            method: 'PUT',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify(studentAssignment)\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Submission Successfull !!');\\r\\n            return;\\r\\n        } else {\\r\\n            let {message} = await res.json();\\r\\n            alert(message + ' Note down your answers for reference.')\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <Assignment \\r\\n        assignment={data.assignment} \\r\\n        viewable={false} \\r\\n        showStudent \\r\\n        showQuestionList={false} \\r\\n        studentName={$page.data.user.name} \\r\\n        bind:studentID\\r\\n    />\\r\\n    <h6 style=\\"margin:0.5em 0\\">Questions</h6>\\r\\n    {#each data.assignment.questions as question, index}\\r\\n        <TestQuestion \\r\\n            assignmentID={data.assignment._id} \\r\\n            {question} \\r\\n            questionNumber={index}\\r\\n            showSolution={false} \\r\\n            bind:answer={answers[question._id]}\\r\\n        />\\r\\n    {/each}\\r\\n    {#if data.studentAssignment && data.studentAssignment.status !== 'Submitted'}\\r\\n        <div>\\r\\n            <Button on:click={() => submit('Draft')}><Label>Save Draft</Label></Button>\\r\\n            <Button on:click={() => submit('Submitted')}><Label>Submit Final</Label></Button>\\r\\n        </div>\\r\\n    {/if}\\r\\n</article>"],"names":[],"mappings":"AAsII,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  set_store_value(currentPath, $currentPath = "Assignment", $currentPath);
  let studentID;
  let answers = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${validate_component(Assignment, "Assignment").$$render(
      $$result,
      {
        assignment: data.assignment,
        viewable: false,
        showStudent: true,
        showQuestionList: false,
        studentName: $page.data.user.name,
        studentID
      },
      {
        studentID: ($$value) => {
          studentID = $$value;
          $$settled = false;
        }
      },
      {}
    )} <h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> ${each(data.assignment.questions, (question, index) => {
      return `${validate_component(TestQuestion, "TestQuestion").$$render(
        $$result,
        {
          assignmentID: data.assignment._id,
          question,
          questionNumber: index,
          showSolution: false,
          answer: answers[question._id]
        },
        {
          answer: ($$value) => {
            answers[question._id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${data.studentAssignment && data.studentAssignment.status !== "Submitted" ? `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Save Draft`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Submit Final`;
          }
        })}`;
      }
    })}</div>` : ``}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-La0i-v83.js.map
