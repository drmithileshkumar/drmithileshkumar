import { a as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, i as each, f as add_attribute, e as escape } from "../../../../../../chunks/ssr2.js";
import { p as page } from "../../../../../../chunks/stores3.js";
import "../../../../../../chunks/client.js";
import { C as Card } from "../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../chunks/ActionIcons.js";
import { A as Actions } from "../../../../../../chunks/Actions.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import { T as Textfield } from "../../../../../../chunks/Textfield.js";
import "../../../../../../chunks/Suffix.js";
import { F as FormField } from "../../../../../../chunks/FormField.js";
import { C as Checkbox } from "../../../../../../chunks/Checkbox.js";
import { R as Radio } from "../../../../../../chunks/Radio.js";
const css = {
  code: ".options.svelte-oih4w4{display:flex;flex-direction:column;gap:0.5em}h5.svelte-oih4w4{margin:1em 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import { page } from '$app/stores';\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    // import { typeset } from \\"$lib/shared/typeset\\";\\r\\n    import Card, { Content, Actions} from '@smui/card';\\r\\n    import Button, { Label} from '@smui/button';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import Radio from '@smui/radio';\\r\\n    import { onMount } from 'svelte';\\r\\n    export let data;\\r\\n    \\r\\n    let type= 'Objective', courseName = '', statement = '', optionA = '', optionB = '', optionC = '', optionD = '', solution = '', correct = [], isPublic = true, publicID;\\r\\n    let options = ['A', 'B', 'C', 'D'];\\r\\n    let types = ['Objective', 'Subjective'];\\r\\n    onMount(() => {\\r\\n        type = data.question.type;\\r\\n        courseName = data.question.courseName;\\r\\n        statement = data.question.statement;\\r\\n        optionA = data.question.optionA;\\r\\n        optionB = data.question.optionB;\\r\\n        optionC = data.question.optionC;\\r\\n        optionD = data.question.optionD;\\r\\n        correct = data.question.correct;\\r\\n        solution = data.question.solution;\\r\\n        isPublic = data.question.isPublic;\\r\\n        publicID = data.question.publicID;\\r\\n        isPublic = data.question.isPublic;\\r\\n        setTimeout(() => typeset(), 0);\\r\\n    })\\r\\n    let preview;\\r\\n    const updateQuestion = async () => {\\r\\n        let question = {\\r\\n            _id: data.question._id,\\r\\n            type,\\r\\n            courseName,\\r\\n            statement,\\r\\n            optionA,\\r\\n            optionB,\\r\\n            optionC,\\r\\n            optionD,\\r\\n            correct,\\r\\n            solution,\\r\\n            publicID,\\r\\n            isPublic\\r\\n        }\\r\\n        let res = await fetch(\\"/api/\${$page.data.user.publicID}/questions/\${data.quention._id}\\", {\\r\\n            method: 'PUT',\\r\\n            'content-Type': 'application/json',\\r\\n            body: JSON.stringify(question)\\r\\n        })\\r\\n        if(res.ok) {\\r\\n            alert('Question uploaded successfully');\\r\\n        } else {\\r\\n            alert('Failed');\\r\\n        }\\r\\n    }\\r\\n    const cancel = () => {\\r\\n\\r\\n    }\\r\\n    const typeset = () => {\\r\\n        // console.log('typesetting...')\\r\\n        renderMathInElement(preview, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n        // setTimeout(() => {\\r\\n\\t\\t// \\trenderMathInElement(preview, {\\r\\n\\t\\t// \\t\\tdelimiters: [\\r\\n\\t\\t// \\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t// \\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t// \\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t// \\t\\t],\\r\\n\\t\\t// \\t\\t// \\r\\n\\t\\t// \\t\\tthrowOnError: false\\r\\n\\t\\t// \\t});\\r\\n\\t\\t// }, 0);\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    .options {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    h5 {\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n</style>\\r\\n<article>\\r\\n    <h5>New Question</h5>\\r\\n    <Card>\\r\\n        <Content style=\\"display: flex; flex-direction:column;gap:0.5em;\\">\\r\\n            <div style=\\"display:flex;gap: 1.5em;\\">\\r\\n                {#each types as option}\\r\\n                    <FormField>\\r\\n                        <Radio \\r\\n                            bind:group={type}\\r\\n                            value={option}\\r\\n                        />\\r\\n                        <span slot=\\"label\\">{option}</span>\\r\\n                    </FormField>\\r\\n                {/each}\\r\\n            </div>\\r\\n            <FormField>\\r\\n                <Checkbox bind:checked={isPublic} value={isPublic} />\\r\\n                <span slot=\\"label\\">Is Public</span>\\r\\n            </FormField>\\r\\n            <Textfield \\r\\n                variant=\\"outlined\\"\\r\\n                label=\\"Course Name\\"\\r\\n                bind:value={courseName}\\r\\n                style=\\"width:100%\\"\\r\\n            />\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Question\\"\\r\\n                bind:value={statement}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset}\\r\\n                on:change={typeset} \\r\\n            />\\r\\n            {#if type === 'Objective'}\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Option A\\"\\r\\n                bind:value={optionA}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset} \\r\\n                on:change={typeset}\\r\\n            />\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Option B\\"\\r\\n                bind:value={optionB}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset} \\r\\n                on:change={typeset}\\r\\n            />\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Option C\\"\\r\\n                bind:value={optionC}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset} \\r\\n                on:change={typeset}\\r\\n            />\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Option D\\"\\r\\n                bind:value={optionD}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset} \\r\\n                on:change={typeset}\\r\\n            />\\r\\n            <h6 style=\\"margin:1em 0 0.5em 0\\">Correct options</h6>\\r\\n            <div style=\\"display:flex;gap: 1.5em;\\">\\r\\n                {#each options as option}\\r\\n                    <FormField>\\r\\n                        <Checkbox \\r\\n                            bind:group={correct}\\r\\n                            value={option}\\r\\n                        />\\r\\n                        <span slot=\\"label\\">{option}</span>\\r\\n                    </FormField>\\r\\n                {/each}\\r\\n            </div>\\r\\n            {/if}\\r\\n            <Textfield \\r\\n                textarea\\r\\n                label=\\"Solution\\"\\r\\n                bind:value={solution}\\r\\n                style=\\"width:100%\\"\\r\\n                on:input={typeset} \\r\\n                on:change={typeset}\\r\\n            />\\r\\n            \\r\\n            \\r\\n        </Content>\\r\\n        <Actions>\\r\\n            <Button on:click={updateQuestion}><Label>Submit</Label></Button>\\r\\n            <Button on:click={cancel}><Label>Cancel</Label></Button>\\r\\n            <Button on:click={() => goto(\`/\${$page.data.user.publicID}/questions\`)} > \\r\\n                <Label>Get Back to Questions </Label>\\r\\n            </Button>\\r\\n        </Actions>\\r\\n    </Card>\\r\\n    <h5>Preview</h5>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <div bind:this={preview}>\\r\\n                {#key statement}\\r\\n                <div class=\\"question\\">\\r\\n                    {@html statement}\\r\\n                </div>\\r\\n                {/key}\\r\\n                <div class=\\"options\\">\\r\\n                    {#key optionA}\\r\\n                    <FormField>\\r\\n                        <Checkbox />\\r\\n                        <span slot=\\"label\\">{@html optionA}</span>\\r\\n                    </FormField>\\r\\n                    {/key}\\r\\n                    {#key optionB}\\r\\n                    <FormField>\\r\\n                        <Checkbox />\\r\\n                        <span slot=\\"label\\">{@html optionB}</span>\\r\\n                    </FormField>\\r\\n                    {/key}\\r\\n                    {#key optionC}\\r\\n                    <FormField>\\r\\n                        <Checkbox />\\r\\n                        <span slot=\\"label\\">{@html optionC}</span>\\r\\n                    </FormField>\\r\\n                    {/key}\\r\\n                    {#key optionD}\\r\\n                    <FormField>\\r\\n                        <Checkbox />\\r\\n                        <span slot=\\"label\\">{@html optionD}</span>\\r\\n                    </FormField>\\r\\n                    {/key}\\r\\n                </div>\\r\\n                {#key solution}\\r\\n                <div class=\\"solution\\">\\r\\n                    {@html solution}\\r\\n                </div>\\r\\n                {/key}\\r\\n            </div>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>"],"names":[],"mappings":"AA0FI,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,gBAAG,CACC,MAAM,CAAE,GAAG,CAAC,CAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let type = "Objective", courseName = "", statement = "", optionA = "", optionB = "", optionC = "", optionD = "", solution = "", correct = [], isPublic = true;
  let options = ["A", "B", "C", "D"];
  let types = ["Objective", "Subjective"];
  let preview;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article><h5 class="svelte-oih4w4" data-svelte-h="svelte-13hv5wu">New Question</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render(
          $$result,
          {
            style: "display: flex; flex-direction:column;gap:0.5em;"
          },
          {},
          {
            default: () => {
              return `<div style="display:flex;gap: 1.5em;">${each(types, (option) => {
                return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                  label: () => {
                    return `<span slot="label">${escape(option)}</span>`;
                  },
                  default: () => {
                    return `${validate_component(Radio, "Radio").$$render(
                      $$result,
                      { value: option, group: type },
                      {
                        group: ($$value) => {
                          type = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} `;
                  }
                })}`;
              })}</div> ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                label: () => {
                  return `<span slot="label" data-svelte-h="svelte-1mcx8qw">Is Public</span>`;
                },
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render(
                    $$result,
                    { value: isPublic, checked: isPublic },
                    {
                      checked: ($$value) => {
                        isPublic = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "outlined",
                  label: "Course Name",
                  style: "width:100%",
                  value: courseName
                },
                {
                  value: ($$value) => {
                    courseName = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Question",
                  style: "width:100%",
                  value: statement
                },
                {
                  value: ($$value) => {
                    statement = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${type === "Objective" ? `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option A",
                  style: "width:100%",
                  value: optionA
                },
                {
                  value: ($$value) => {
                    optionA = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option B",
                  style: "width:100%",
                  value: optionB
                },
                {
                  value: ($$value) => {
                    optionB = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option C",
                  style: "width:100%",
                  value: optionC
                },
                {
                  value: ($$value) => {
                    optionC = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Option D",
                  style: "width:100%",
                  value: optionD
                },
                {
                  value: ($$value) => {
                    optionD = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} <h6 style="margin:1em 0 0.5em 0" data-svelte-h="svelte-1r558ms">Correct options</h6> <div style="display:flex;gap: 1.5em;">${each(options, (option) => {
                return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
                  label: () => {
                    return `<span slot="label">${escape(option)}</span>`;
                  },
                  default: () => {
                    return `${validate_component(Checkbox, "Checkbox").$$render(
                      $$result,
                      { value: option, group: correct },
                      {
                        group: ($$value) => {
                          correct = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} `;
                  }
                })}`;
              })}</div>` : ``} ${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  textarea: true,
                  label: "Solution",
                  style: "width:100%",
                  value: solution
                },
                {
                  value: ($$value) => {
                    solution = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          }
        )} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Submit`;
                  }
                })}`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Cancel`;
                  }
                })}`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `Get Back to Questions`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })} <h5 class="svelte-oih4w4" data-svelte-h="svelte-xuhjly">Preview</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div${add_attribute("this", preview, 0)}><div class="question"><!-- HTML_TAG_START -->${statement}<!-- HTML_TAG_END --></div> <div class="options svelte-oih4w4">${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionA}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionB}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionC}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label"><!-- HTML_TAG_START -->${optionD}<!-- HTML_TAG_END --></span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}`;
              }
            })}</div> <div class="solution"><!-- HTML_TAG_START -->${solution}<!-- HTML_TAG_END --></div></div>`;
          }
        })}`;
      }
    })}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
