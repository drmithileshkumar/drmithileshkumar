import { a as subscribe } from './utils-DH7689cv.js';
import { c as create_ssr_component, v as validate_component, e as escape, i as each } from './ssr-Cv_bEuJL.js';
import { p as page } from './stores-CD1QeJjc.js';
import './client-CjdeEz1m.js';
import './ActionIcons-CEcRhLH3.js';
import { B as Button } from './Button-nlTGW0Wq.js';
import { C as CommonLabel } from './CommonLabel-Bjz32QAu.js';
import './Suffix-DUyW9-NK.js';
import { A as Assignment } from './Assignment-CzLpMTU4.js';
import { S as ShowQuestion } from './ShowQuestion-BoaHaQsa.js';
import './exports-DuWZopOC.js';
import './classAdderBuilder-B5RJlVtK.js';
import './Ripple-Yt1ZX6hy.js';
import './Card-w0EtY1mU.js';
import './Actions-k21q-Hb9.js';
import './Text-KULp8u1-.js';
import './index2-B3zlhmO5.js';
import './ContextFragment-Dwx7Ej1j.js';
import './Textfield-CuLN89a4.js';
import './prefixFilter-B6cFZsw3.js';
import './NotchedOutline-YjUGQyoC.js';
import './Checkbox-JP0nmioc.js';
import './FormField-BbIiNutz.js';
import './SelectionGroupIcon-obMfUwh0.js';
import './Subheader-BwOM49vC.js';
import './Graphic-CTyan_iC.js';

const css = {
  code: "article.svelte-1s9ex9t{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    // import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions} from '@smui/card';\\r\\n    import Button, { Label} from '@smui/button';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import Radio from '@smui/radio';\\r\\n    import Assignment from '$lib/components/Assignment.svelte';\\r\\n    import ShowQuestion from '$lib/components/ShowQuestion.svelte';\\r\\n    import { onMount } from 'svelte';\\r\\n\\timport EditAssignment from '$lib/components/EditAssignment.svelte';\\r\\n    export let data;\\r\\n    \\r\\n\\r\\n    \\r\\n    let showQ = true, editAssignment = false;\\r\\n    onMount(() => {\\r\\n        \\r\\n    })\\r\\n    let preview;\\r\\n    const putAssignment = async () => {\\r\\n        let res = await fetch(\\"/api/\${$page.data.user.publicID}/assignments/\${data.quention._id}\\", {\\r\\n            method: 'PUT',\\r\\n            'content-Type': 'application/json',\\r\\n            body: JSON.stringify(data.assignment)\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('assignment updated successfully');\\r\\n        } else {\\r\\n            alert('Failed');\\r\\n        }\\r\\n    }\\r\\n    const cancel = () => {\\r\\n        editAssignment = false;\\r\\n    }\\r\\n    const typeset = () => {\\r\\n        // console.log('typesetting...')\\r\\n        renderMathInElement(preview, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n        // setTimeout(() => {\\r\\n\\t\\t// \\trenderMathInElement(preview, {\\r\\n\\t\\t// \\t\\tdelimiters: [\\r\\n\\t\\t// \\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t// \\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t// \\t\\t],\\r\\n\\t\\t// \\t\\t// \\r\\n\\t\\t// \\t\\tthrowOnError: false\\r\\n\\t\\t// \\t});\\r\\n\\t\\t// }, 0);\\r\\n    }\\r\\n    const updateQuestions = (evt) => {\\r\\n        data.assignment.questions = data.assignment.questions.filter((q) => q._id !== evt.detail.questionID);\\r\\n        data.assignment = data.assignment;\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    {#if !editAssignment}\\r\\n    <Assignment assignment={data.assignment} viewable={false} />\\r\\n    {:else}\\r\\n        <EditAssignment bind:assignment={data.assignment} on:submit={putAssignment} on:cancel={cancel} />\\r\\n    {/if}\\r\\n    <div class=\\"actions\\">\\r\\n        <Button on:click={() => editAssignment = !editAssignment}><Label>{editAssignment ? \\"Done\\" : 'Edit Assignment'}</Label></Button>\\r\\n        <Button on:click={() => showQ = !showQ}><Label>{showQ ? 'Hide' : 'Show'} Questions</Label></Button>\\r\\n        <Button on:click={() => goto(\`/\${$page.data.user.publicID}/questions\`)}><Label>Add Questions</Label></Button>\\r\\n    </div>\\r\\n    \\r\\n    {#if showQ}\\r\\n    <h6 style=\\"margin:0.5em 0\\">Questions</h6>\\r\\n    {#each data.assignment.questions as question}\\r\\n        <ShowQuestion assignmentID={data.assignment._id} {question} on:deleted={updateQuestions}/>\\r\\n    {/each}\\r\\n    {/if}\\r\\n</article>"],"names":[],"mappings":"AAuEI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-1s9ex9t">${`${validate_component(Assignment, "Assignment").$$render(
      $$result,
      {
        assignment: data.assignment,
        viewable: false
      },
      {},
      {}
    )}`} <div class="actions">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `${escape("Edit Assignment")}`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `${escape("Hide")} Questions`;
          }
        })}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Add Questions`;
          }
        })}`;
      }
    })}</div> ${`<h6 style="margin:0.5em 0" data-svelte-h="svelte-x7cyf2">Questions</h6> ${each(data.assignment.questions, (question) => {
      return `${validate_component(ShowQuestion, "ShowQuestion").$$render(
        $$result,
        {
          assignmentID: data.assignment._id,
          question
        },
        {},
        {}
      )}`;
    })}`}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B0FPWGSg.js.map
