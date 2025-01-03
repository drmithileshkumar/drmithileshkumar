import { a as subscribe, d as set_store_value } from './utils-iZWwlC2F.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr2-q3O0l93f.js';
import './client-k3u4ChD_.js';
import './ActionIcons-BJ7xikju.js';
import './Suffix-CzM54Q0Q.js';
import { c as currentPath } from './stores-Bb_1fHB9.js';
import { A as Assignment } from './Assignment-CimgyG29.js';
import { S as ShowQuestion } from './ShowQuestion-CzTuT2bk.js';
import './exports-kR70XCWV.js';
import './classAdderBuilder-B9W9nXDD.js';
import './SmuiElement-DA9PKsv2.js';
import './index2-BZnI6xu7.js';
import './Card-jWUNhZC7.js';
import './Actions-BZCsUD0f.js';
import './Button-DRRmGjqZ.js';
import './Ripple-Zq_D_mxy.js';
import './Set-sNJQHEw8.js';
import './ContextFragment-e-oupRQm.js';
import './Text-B4-H59Yc.js';
import './Textfield-7THkMs4-.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-BQdL9cop.js';
import './Input-5dxW-kZS.js';
import './stores3-BrNJmxTp.js';
import './CommonLabel-BuPx8XxF.js';
import './Checkbox-C1ypz4dy.js';
import './FormField-CZITmeEd.js';
import './SelectionGroupIcon-UHPuZTt8.js';
import './Subheader-BV9F6O0P.js';
import './Graphic-BjEt0ZHi.js';

const css = {
  code: "article.svelte-x7chvv{display:flex;flex-direction:column;gap:0.5em}.marks.svelte-x7chvv{display:flex;justify-content:end;color:white;background:green;padding:0.5em;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    // import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions} from '@smui/card';\\r\\n    import Button, { Label} from '@smui/button';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import Radio from '@smui/radio';\\r\\n    import { currentPath } from \\"$lib/stores\\";\\r\\n    import Assignment from '$lib/components/Assignment.svelte';\\r\\n    import ShowQuestion from '$lib/components/ShowQuestion.svelte';\\r\\n    import { onMount } from 'svelte';\\r\\n    export let data;\\r\\n    $currentPath = \\"Assignment\\";\\r\\n    \\r\\n    onMount(() => {\\r\\n        // for(let i = 0; i < data.assignment.numberOfQuestions; i++) {\\r\\n        //     answers.push({\\r\\n        //         questionID: data.assignment.questions[i]._id,\\r\\n        //         answer: []\\r\\n        //     });\\r\\n        // }\\r\\n        // console.log($page.data)\\r\\n    })\\r\\n    let preview;\\r\\n    \\r\\n    const cancel = () => {\\r\\n\\r\\n    }\\r\\n    const typeset = () => {\\r\\n        // console.log('typesetting...')\\r\\n        renderMathInElement(preview, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n        // setTimeout(() => {\\r\\n\\t\\t// \\trenderMathInElement(preview, {\\r\\n\\t\\t// \\t\\tdelimiters: [\\r\\n\\t\\t// \\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t// \\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t// \\t\\t],\\r\\n\\t\\t// \\t\\t// \\r\\n\\t\\t// \\t\\tthrowOnError: false\\r\\n\\t\\t// \\t});\\r\\n\\t\\t// }, 0);\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .marks {\\r\\n        display:flex;\\r\\n        justify-content: end;\\r\\n        color: white;\\r\\n        background: green;\\r\\n        padding: 0.5em;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <Assignment \\r\\n        assignment={data.assignment} \\r\\n        viewable={false} \\r\\n        showStudent \\r\\n        showQuestionList={false} \\r\\n        studentName={data.studentAssignment.name} \\r\\n        studentID={data.studentAssignment.id}\\r\\n    />\\r\\n    <h6 style=\\"margin:0.5em 0\\">Questions</h6>\\r\\n    <div class=\\"marks\\">\\r\\n        <strong>Total Marks:</strong> {data.studentAssignment.total}\\r\\n    </div>\\r\\n    {#each data.assignment.questions as question, index}\\r\\n        <ShowQuestion \\r\\n            assignmentID={data.assignment._id} \\r\\n            {question} \\r\\n            questionNumber={index}\\r\\n            showSolution={true} \\r\\n            answer={data.studentAssignment.answers[question._id]}\\r\\n            showActions={false}\\r\\n            marks={data.studentAssignment.marks[question._id]}\\r\\n        />\\r\\n    {/each}\\r\\n    <!-- <Button on:click={submit}>Submit</Button> -->\\r\\n</article>"],"names":[],"mappings":"AA6DI,qBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,oBAAO,CACH,QAAQ,IAAI,CACZ,eAAe,CAAE,GAAG,CACpB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,KAAK,CACd,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  let { data } = $$props;
  set_store_value(currentPath, $currentPath = "Assignment", $currentPath);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-x7chvv">${validate_component(Assignment, "Assignment").$$render(
    $$result,
    {
      assignment: data.assignment,
      viewable: false,
      showStudent: true,
      showQuestionList: false,
      studentName: data.studentAssignment.name,
      studentID: data.studentAssignment.id
    },
    {},
    {}
  )} <h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> <div class="marks svelte-x7chvv"><strong data-svelte-h="svelte-18ehjgy">Total Marks:</strong> ${escape(data.studentAssignment.total)}</div> ${each(data.assignment.questions, (question, index) => {
    return `${validate_component(ShowQuestion, "ShowQuestion").$$render(
      $$result,
      {
        assignmentID: data.assignment._id,
        question,
        questionNumber: index,
        showSolution: true,
        answer: data.studentAssignment.answers[question._id],
        showActions: false,
        marks: data.studentAssignment.marks[question._id]
      },
      {},
      {}
    )}`;
  })} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BsEQ0-2F.js.map
