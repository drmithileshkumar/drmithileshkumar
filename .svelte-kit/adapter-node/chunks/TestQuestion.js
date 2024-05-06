import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, i as createEventDispatcher, v as validate_component, e as escape } from "./ssr.js";
import { C as Card } from "./Card.js";
import { C as Content } from "./ActionIcons.js";
import { C as Checkbox } from "./Checkbox.js";
import { F as FormField } from "./FormField.js";
import "./SelectionGroupIcon.js";
import "./Subheader.js";
import "./client.js";
import { p as page } from "./stores.js";
const css = {
  code: ".options.svelte-1mm3e8q{display:flex;flex-direction:column}.solution.svelte-1mm3e8q{margin:1em 0}",
  map: `{"version":3,"file":"TestQuestion.svelte","sources":["TestQuestion.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import Select, { Option } from '@smui/select';\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n    import { page } from '$app/stores';\\r\\n    import { createEventDispatcher } from 'svelte';\\r\\n    let dispatch = new createEventDispatcher();\\r\\n    export let question;\\r\\n    export let assignmentID = '';\\r\\n    export let showOptions = true;\\r\\n    export let showSolution = true;\\r\\n    export let questionNumber = 0;\\r\\n    export let answer = [];\\r\\n    const addQuestion = async () => {\\r\\n        \\r\\n        let assignmentIndex;\\r\\n        assignments.forEach((assignment, i) => {\\r\\n            if(assignment._id === assignmentID) assignmentIndex = i;\\r\\n        });\\r\\n        if(assignments[assignmentIndex].questions.indexOf(question._id) !== -1) {\\r\\n            alert('Question already added.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments/\${assignmentID}/question\`, {\\r\\n            method: 'PUT',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({questionID: question._id})\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Question added to the assignment')\\r\\n        } else {\\r\\n            alert('Failed');\\r\\n        }\\r\\n    }\\r\\n    const remove = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments/\${assignmentID}/question\`, {\\r\\n            method: 'DELETE',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({questionID: question._id})\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Quesiton removed');\\r\\n            dispatch('deleted', {questionID: question._id});\\r\\n            return;\\r\\n        }\\r\\n        alert('Something went wrong.')\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .options {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .solution {\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n</style>\\r\\n<Card>\\r\\n    <Content>\\r\\n        <div class=\\"question\\" use:typeset><strong style=\\"color:tomato;\\">Q {questionNumber + 1} </strong>{@html question.statement}</div>\\r\\n        {#if showOptions}\\r\\n            <div class=\\"options\\">\\r\\n                <FormField>\\r\\n                    <Checkbox bind:group={answer} value={'A'} />\\r\\n                    <span slot=\\"label\\" use:typeset>{@html question.optionA}</span>\\r\\n                </FormField>\\r\\n                <FormField>\\r\\n                    <Checkbox bind:group={answer} value={'B'}/>\\r\\n                    <span slot=\\"label\\" use:typeset>{@html question.optionB}</span>\\r\\n                </FormField>\\r\\n                <FormField>\\r\\n                    <Checkbox bind:group={answer} value={'C'} />\\r\\n                    <span slot=\\"label\\" use:typeset>{@html question.optionC}</span>\\r\\n                </FormField>\\r\\n                <FormField>\\r\\n                    <Checkbox bind:group={answer} value={'D'} />\\r\\n                    <span slot=\\"label\\" use:typeset>{@html question.optionD}</span>\\r\\n                </FormField>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if showSolution}\\r\\n            <div class=\\"solution\\" use:typeset>{@html question.solution}</div>\\r\\n        {/if}\\r\\n    </Content>\\r\\n</Card>"],"names":[],"mappings":"AAsDI,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACpB,CACA,wBAAU,CACN,MAAM,CAAE,GAAG,CAAC,CAChB"}`
};
const TestQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new createEventDispatcher();
  let { question } = $$props;
  let { assignmentID = "" } = $$props;
  let { showOptions = true } = $$props;
  let { showSolution = true } = $$props;
  let { questionNumber = 0 } = $$props;
  let { answer = [] } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.assignmentID === void 0 && $$bindings.assignmentID && assignmentID !== void 0)
    $$bindings.assignmentID(assignmentID);
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0)
    $$bindings.showOptions(showOptions);
  if ($$props.showSolution === void 0 && $$bindings.showSolution && showSolution !== void 0)
    $$bindings.showSolution(showSolution);
  if ($$props.questionNumber === void 0 && $$bindings.questionNumber && questionNumber !== void 0)
    $$bindings.questionNumber(questionNumber);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css);
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
            return `<div class="question"><strong style="color:tomato;">Q ${escape(questionNumber + 1)} </strong><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> ${showOptions ? `<div class="options svelte-1mm3e8q">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { value: "A", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "B", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "C", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
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
                  { value: "D", group: answer },
                  {
                    group: ($$value) => {
                      answer = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}</div>` : ``} ${showSolution ? `<div class="solution svelte-1mm3e8q"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>` : ``}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  TestQuestion as T
};
