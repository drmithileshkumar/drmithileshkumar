import { a as subscribe } from './utils-DhkojCd_.js';
import { c as create_ssr_component, j as createEventDispatcher, v as validate_component, e as escape } from './ssr2-CDgUAJs6.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { C as Checkbox } from './Checkbox-6gc4AgBs.js';
import { F as FormField } from './FormField-CQ11Qxdo.js';
import './SelectionGroupIcon-CO1YlMDH.js';
import './Subheader-DEm_inUP.js';
import './client-CAo-6NMJ.js';
import { p as page } from './stores3-kDd52ji6.js';

const css = {
  code: ".options.svelte-48fbt2{display:flex;flex-direction:column;margin:1em 0}.solution.svelte-48fbt2{margin-top:1em}.marks.svelte-48fbt2{display:flex;justify-content:end;gap:0.5em;color:white;background:rgba(0, 155, 0, 0.5);margin-bottom:0.5em;padding:0.5em}",
  map: `{"version":3,"file":"ShowQuestion.svelte","sources":["ShowQuestion.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import FormField from \\"@smui/form-field\\";\\r\\n    import Select, { Option } from '@smui/select';\\r\\n    import { typeset } from '$lib/shared/typeset';\\r\\n\\timport { goto } from '$app/navigation';\\r\\n    import { page } from '$app/stores';\\r\\n    import { createEventDispatcher } from 'svelte';\\r\\n    let dispatch = new createEventDispatcher();\\r\\n    export let question;\\r\\n    export let answer = [];\\r\\n    export let assignmentID = '';\\r\\n    export let showOptions = true;\\r\\n    export let showSolution = true;\\r\\n    export let showActions = true;\\r\\n    export let marks = 0;\\r\\n    \\r\\n    const addQuestion = async () => {\\r\\n        \\r\\n        let assignmentIndex;\\r\\n        assignments.forEach((assignment, i) => {\\r\\n            if(assignment._id === assignmentID) assignmentIndex = i;\\r\\n        });\\r\\n        if(assignments[assignmentIndex].questions.indexOf(question._id) !== -1) {\\r\\n            alert('Question already added.');\\r\\n            return;\\r\\n        }\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments/\${assignmentID}/question\`, {\\r\\n            method: 'PUT',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({questionID: question._id})\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Question added to the assignment')\\r\\n        } else {\\r\\n            alert('Failed');\\r\\n        }\\r\\n    }\\r\\n    const remove = async () => {\\r\\n        let res = await fetch(\`/api/\${$page.data.user.publicID}/assignments/\${assignmentID}/question\`, {\\r\\n            method: 'DELETE',\\r\\n            'Content-Type': 'application/json',\\r\\n            body: JSON.stringify({questionID: question._id})\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Quesiton removed');\\r\\n            dispatch('deleted', {questionID: question._id});\\r\\n            return;\\r\\n        }\\r\\n        alert('Something went wrong.')\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .options {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .solution {\\r\\n        margin-top: 1em;\\r\\n    }\\r\\n    .marks {\\r\\n        display: flex;\\r\\n        justify-content: end;\\r\\n        gap: 0.5em;\\r\\n        color: white;\\r\\n        background: rgba(0, 155, 0, 0.5);\\r\\n        margin-bottom: 0.5em;\\r\\n        padding: 0.5em;\\r\\n    }\\r\\n</style>\\r\\n<Card>\\r\\n    <Content>\\r\\n        <div class=\\"marks\\"><strong>Marks:</strong> {marks}</div>\\r\\n        <div class=\\"question\\" use:typeset>{@html question.statement}</div>\\r\\n        {#if showOptions}\\r\\n        <div class=\\"options\\">\\r\\n            <FormField>\\r\\n                <Checkbox checked={answer.indexOf('A') !== -1} style=\\"background:{question.correct.indexOf('A') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}\\"/>\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionA}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={answer.indexOf('B') !== -1} style=\\"background:{question.correct.indexOf('B') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}\\"/>\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionB}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={answer.indexOf('C') !== -1} style=\\"background:{question.correct.indexOf('C') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}\\"/>\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionC}</span>\\r\\n            </FormField>\\r\\n            <FormField>\\r\\n                <Checkbox checked={answer.indexOf('D') !== -1} style=\\"background:{question.correct.indexOf('D') !== -1 ? 'rgba(0, 155, 0, 0.5)' : ''}\\"/>\\r\\n                <span slot=\\"label\\" use:typeset>{@html question.optionD}</span>\\r\\n            </FormField>\\r\\n        </div>\\r\\n        {/if}\\r\\n        {#if showSolution}\\r\\n        <div class=\\"solution\\" use:typeset>{@html question.solution}</div>\\r\\n        {/if}\\r\\n    </Content>\\r\\n    {#if showActions}\\r\\n    <Actions>\\r\\n        <Button on:click={() => showOptions = !showOptions}>\\r\\n            <Label>\\r\\n                {showOptions ?'Hide' : 'Show'} Options\\r\\n            </Label>\\r\\n        </Button>\\r\\n        <Button on:click={() => showSolution = !showSolution}>\\r\\n            <Label>{showSolution ?'Hide' : 'Show'} Solution</Label>\\r\\n        </Button>\\r\\n        <Button on:click={() => goto(\`/\${$page.data.user.publicID}/questions/\${question._id}\`)}><Label>Edit</Label></Button>\\r\\n        <Button on:click={remove}><Label>Remove</Label></Button>\\r\\n    </Actions>\\r\\n    {/if}\\r\\n</Card>"],"names":[],"mappings":"AAwDI,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,uBAAU,CACN,UAAU,CAAE,GAChB,CACA,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,GAAG,CACpB,GAAG,CAAE,KAAK,CACV,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChC,aAAa,CAAE,KAAK,CACpB,OAAO,CAAE,KACb"}`
};
const ShowQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new createEventDispatcher();
  let { question } = $$props;
  let { answer = [] } = $$props;
  let { assignmentID = "" } = $$props;
  let { showOptions = true } = $$props;
  let { showSolution = true } = $$props;
  let { showActions = true } = $$props;
  let { marks = 0 } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0) $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0) $$bindings.answer(answer);
  if ($$props.assignmentID === void 0 && $$bindings.assignmentID && assignmentID !== void 0) $$bindings.assignmentID(assignmentID);
  if ($$props.showOptions === void 0 && $$bindings.showOptions && showOptions !== void 0) $$bindings.showOptions(showOptions);
  if ($$props.showSolution === void 0 && $$bindings.showSolution && showSolution !== void 0) $$bindings.showSolution(showSolution);
  if ($$props.showActions === void 0 && $$bindings.showActions && showActions !== void 0) $$bindings.showActions(showActions);
  if ($$props.marks === void 0 && $$bindings.marks && marks !== void 0) $$bindings.marks(marks);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="marks svelte-48fbt2"><strong data-svelte-h="svelte-19ghlc4">Marks:</strong> ${escape(marks)}</div> <div class="question"><!-- HTML_TAG_START -->${question.statement}<!-- HTML_TAG_END --></div> ${showOptions ? `<div class="options svelte-48fbt2">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
            label: () => {
              return `<span slot="label"><!-- HTML_TAG_START -->${question.optionA}<!-- HTML_TAG_END --></span>`;
            },
            default: () => {
              return `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  checked: answer.indexOf("A") !== -1,
                  style: "background:" + (question.correct.indexOf("A") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("B") !== -1,
                  style: "background:" + (question.correct.indexOf("B") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("C") !== -1,
                  style: "background:" + (question.correct.indexOf("C") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
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
                  checked: answer.indexOf("D") !== -1,
                  style: "background:" + (question.correct.indexOf("D") !== -1 ? "rgba(0, 155, 0, 0.5)" : "")
                },
                {},
                {}
              )}`;
            }
          })}</div>` : ``} ${showSolution ? `<div class="solution svelte-48fbt2"><!-- HTML_TAG_START -->${question.solution}<!-- HTML_TAG_END --></div>` : ``}`;
        }
      })} ${showActions ? `${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(showOptions ? "Hide" : "Show")} Options`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(showSolution ? "Hide" : "Show")} Solution`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Edit`;
                }
              })}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Remove`;
                }
              })}`;
            }
          })}`;
        }
      })}` : ``}`;
    }
  })}`;
});

export { ShowQuestion as S };
//# sourceMappingURL=ShowQuestion-en4-n7MB.js.map
