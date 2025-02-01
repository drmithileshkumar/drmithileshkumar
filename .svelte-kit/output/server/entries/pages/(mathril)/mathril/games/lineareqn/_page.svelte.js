import { a as subscribe, b as set_store_value } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, h as add_attribute, v as validate_component, e as escape, i as each } from "../../../../../../chunks/ssr2.js";
import { A as ActionButtons, C as Content$1 } from "../../../../../../chunks/ActionIcons.js";
import { S as Slider } from "../../../../../../chunks/Slider.js";
import { F as FormField } from "../../../../../../chunks/FormField.js";
import { B as Button } from "../../../../../../chunks/Button.js";
import { C as CommonLabel } from "../../../../../../chunks/CommonLabel.js";
import "../../../../../../chunks/client.js";
import { D as Dialog } from "../../../../../../chunks/Dialog.js";
import { T as Title, C as Content, A as Actions } from "../../../../../../chunks/Actions2.js";
/* empty css                                                                    */
import { C as Card } from "../../../../../../chunks/Card.js";
import { c as currentPath } from "../../../../../../chunks/stores5.js";
const css$1 = {
  code: "figure.svelte-1mwngej{width:100%;height:100%;margin:0}.katex{color:currentcolor}",
  map: `{"version":3,"file":"LinearEquation.svelte","sources":["LinearEquation.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { ActionButtons } from '@smui/card';\\r\\n    import Slider from '@smui/slider';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import { goto } from '$app/navigation'\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import { randInt } from \\"$lib/mathril/utils/matlib/common\\";\\r\\n    import Dialog, { Title, Content, Actions } from '@smui/dialog';\\r\\n    let open = false;\\r\\n    let a = 1;\\r\\n    let x = 0;\\r\\n    let b = 0;\\r\\n    let c = 0;\\r\\n    let sol = 0;\\r\\n    const genLinear = () => {\\r\\n        x = 0;\\r\\n        a = randInt(10, 1);\\r\\n        b = randInt(10, 0);\\r\\n        sol = randInt(10, 0);\\r\\n        c = a * sol + b\\r\\n    }\\r\\n    $: angle = (c - a * x - b)/a < -10 ? -10 : (-a * x - b + c)/a > 10 ? 10 : (-a * x - b + c)/a\\r\\n    let panel;\\r\\n    $: if (browser && panel && renderMathInElement) {\\r\\n\\t\\tsetTimeout(() => {\\r\\n\\t\\t\\trenderMathInElement(panel, {\\r\\n\\t\\t\\t\\tdelimiters: [\\r\\n\\t\\t\\t\\t\\t{ left: '$$', right: '$$', display: true },\\r\\n\\t\\t\\t\\t\\t{ left: '$', right: '$', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\(', right: '\\\\\\\\)', display: false },\\r\\n\\t\\t\\t\\t\\t{ left: '\\\\\\\\[', right: '\\\\\\\\]', display: true }\\r\\n\\t\\t\\t\\t],\\r\\n\\t\\t\\t\\t// • rendering keys, e.g.:\\r\\n\\t\\t\\t\\tthrowOnError: false\\r\\n\\t\\t\\t});\\r\\n\\t\\t}, 0);\\r\\n\\t}\\r\\n\\r\\n<\/script>\\r\\n<article bind:this={panel}>\\r\\n    <ActionButtons style=\\"justify-content:space-between;\\">\\r\\n        <Button on:click={() => open = true}>Help</Button>\\r\\n        <Button on:click={() => goto('/mathril/games')}>More games</Button>\\r\\n      </ActionButtons>\\r\\n    <h1 class=\\"mdc-typography--headline5\\" style='text-align:center;margin:0'>Linear equation \\\\(ax + b = c\\\\)</h1>\\r\\n    <Button style=\\"display:flex; margin:auto;\\" on:click={genLinear}>Generate new equation</Button>\\r\\n    <figure>\\r\\n        <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 1000 510\\">\\r\\n            <!--Wedge-->\\r\\n            <path d=\\"M 450,500 L 550,500 L 500,450 Z\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n            <line x1=\\"0\\" y1=\\"450\\" x2=\\"1000\\" y2=\\"450\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-dasharray=\\"4 4\\" fill='none' />\\r\\n            <!--Lever-->\\r\\n            <g transform=\\"rotate({angle} 500 450)\\">\\r\\n                <line x1=\\"200\\" y1=\\"450\\" x2=\\"800\\" y2=\\"450\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                <!--Left Pan-->\\r\\n                <g transform=\\"rotate({-angle} 200 450)\\">\\r\\n                    <line x1=\\"200\\" y1=\\"450\\" x2=\\"200\\" y2=\\"420\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"50\\" y1=\\"420\\" x2=\\"350\\" y2=\\"420\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"50\\" y1=\\"420\\" x2=\\"50\\" y2=\\"400\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"350\\" y1=\\"420\\" x2=\\"350\\" y2=\\"400\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <g>\\r\\n                        {#if x !== 0}\\r\\n                            {#each Array(x) as box, i}\\r\\n                                <rect x=\\"{55 + 40 * (i % 3)}\\" y=\\"{380 - 40 * Math.floor(i/3)}\\" width=\\"40\\" height=\\"40\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='rgba(0, 150, 200, 1)'></rect>\\r\\n                                <text x=\\"{55 + 40 * (i % 3) + 12}\\" y=\\"{380 - 40 * Math.floor(i/3) + 25}\\" width=\\"40\\" height=\\"40\\" fill='white'>{a}</text>\\r\\n                            {/each}\\r\\n                        {/if}\\r\\n                    </g>\\r\\n                    \\r\\n                    {#if b!== 0}\\r\\n                        <rect x=\\"{245}\\" y=\\"{320}\\" width=\\"100\\" height=\\"100\\" stroke=\\"white\\" stroke-width=\\"2\\" fill='green' />\\r\\n                        <text x=\\"{282}\\" y=\\"{380}\\" font-size=\\"32\\" fill='white'>{b}</text>\\r\\n                    {/if}\\r\\n                </g>\\r\\n                <!--Right Pan-->\\r\\n                <g transform=\\"rotate({-angle} 800 450)\\">\\r\\n                    <line x1=\\"800\\" y1=\\"450\\" x2=\\"800\\" y2=\\"420\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"650\\" y1=\\"420\\" x2=\\"950\\" y2=\\"420\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"650\\" y1=\\"420\\" x2=\\"650\\" y2=\\"400\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    <line x1=\\"950\\" y1=\\"420\\" x2=\\"950\\" y2=\\"400\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='none' />\\r\\n                    {#if c!== 0}\\r\\n                        <rect x=\\"{745}\\" y=\\"{320}\\" width=\\"100\\" height=\\"100\\" stroke=\\"{a * x + b === c ? 'goldenrod' : 'currentColor'}\\" stroke-width=\\"2\\" fill='tomato' />\\r\\n                        <text x=\\"{782}\\" y=\\"{380}\\" font-size=\\"32\\" fill='white'>{c}</text>\\r\\n                    {/if}\\r\\n                </g>\\r\\n            </g>\\r\\n        </svg>\\r\\n    </figure>\\r\\n    <div class=\\"controls\\">\\r\\n            <h1 class=\\"mdc-typography--headline6\\" style='text-align:center;margin:0'>\\r\\n                {#key a}\\r\\n                    <span>{a}</span>\\r\\n                {/key}\\r\\n                <span style=\\"color:rgba(0, 150, 200, 1)\\"> \\\\(x\\\\)  </span>\\r\\n                <span>+</span>\\r\\n                {#key b}\\r\\n                    <span style=\\"color:green\\">{b}</span>\\r\\n                {/key} \\r\\n                <span>=</span> \\r\\n                {#key c}\\r\\n                    <span style=\\"color:tomato\\">{c}</span>\\r\\n                {/key}\\r\\n            </h1>\\r\\n            <h1 class=\\"mdc-typography--headline6\\" style='text-align:center;margin:0;color:{a*x + b === c ? 'goldenrod':'currentColor'}'>\\r\\n                {#key a*x + b + c}{a*x + b} = {c}{/key}\\r\\n            </h1>\\r\\n       \\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            \\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={a}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"a\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(a\\\\) = {#key a}<span>{a}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={x}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"x\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;color:{a*x + b === c ? 'goldenrod':'currentColor'}\\"\\r\\n            >\\r\\n                \\\\(x\\\\) = {#key x}<span>{x}</span>{/key}\\r\\n            </span>\\r\\n        </FormField>\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={b}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"b\\"\\r\\n            /> \\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(b\\\\) = {#key b}<span>{b}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n            <Slider\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={c}\\r\\n                min={0}\\r\\n                max={100}\\r\\n                step={1}\\r\\n                discrete\\r\\n                tickMarks\\r\\n                input$aria-label=\\"c\\"\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: 60px; display: block;\\"\\r\\n            >\\r\\n                \\\\(c\\\\) = {#key c}<span>{c}</span>{/key}\\r\\n            </span>\\r\\n        </FormField> -->\\r\\n        \\r\\n    </div>\\r\\n</article>\\r\\n<Dialog\\r\\n  bind:open\\r\\n  aria-labelledby=\\"simple-title\\"\\r\\n  aria-describedby=\\"simple-content\\"\\r\\n>\\r\\n  <Title id=\\"simple-title\\">How to play</Title>\\r\\n  <Content id=\\"simple-content\\">\\r\\n    <p>\\r\\n        Click on Generate New Equation to generate a linear equation.\\r\\n    </p>\\r\\n    <p>\\r\\n        Use the Slider to change value of x.\\r\\n    </p>\\r\\n    <p>\\r\\n        When the equation is solved, the color changes to golden.\\r\\n    </p>\\r\\n  </Content>\\r\\n  <Actions>\\r\\n    <Button on:click={() => (open = false)}>\\r\\n      <Label>Done</Label>\\r\\n    </Button>\\r\\n  </Actions>\\r\\n</Dialog>\\r\\n<style>\\r\\n    figure {\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        margin: 0;\\r\\n    }\\r\\n    :global(.katex) {\\r\\n\\t\\tcolor: currentcolor;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAiNI,qBAAO,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CACZ,CACQ,MAAQ,CAClB,KAAK,CAAE,YACR"}`
};
const LinearEquation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let angle;
  let open = false;
  let a = 1;
  let x = 0;
  let b = 0;
  let c = 0;
  let panel;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    angle = (c - a * x - b) / a < -10 ? -10 : (-a * x - b + c) / a > 10 ? 10 : (-a * x - b + c) / a;
    $$rendered = `<article${add_attribute("this", panel, 0)}>${validate_component(ActionButtons, "ActionButtons").$$render($$result, { style: "justify-content:space-between;" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Help`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `More games`;
          }
        })}`;
      }
    })} <h1 class="mdc-typography--headline5" style="text-align:center;margin:0" data-svelte-h="svelte-11f4dln">Linear equation \\(ax + b = c\\)</h1> ${validate_component(Button, "Button").$$render($$result, { style: "display:flex; margin:auto;" }, {}, {
      default: () => {
        return `Generate new equation`;
      }
    })} <figure class="svelte-1mwngej"><svg width="100%" height="100%" viewBox="0 0 1000 510"><path d="M 450,500 L 550,500 L 500,450 Z"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></path><line x1="0" y1="450" x2="1000" y2="450" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" fill="none"></line><g transform="${"rotate(" + escape(angle, true) + " 500 450)"}"><line x1="200" y1="450" x2="800" y2="450"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><g transform="${"rotate(" + escape(-angle, true) + " 200 450)"}"><line x1="200" y1="450" x2="200" y2="420"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="50" y1="420" x2="350" y2="420"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="50" y1="420" x2="50" y2="400"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="350" y1="420" x2="350" y2="400"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><g>${x !== 0 ? `${each(Array(x), (box, i) => {
      return `<rect${add_attribute("x", 55 + 40 * (i % 3), 0)}${add_attribute("y", 380 - 40 * Math.floor(i / 3), 0)} width="40" height="40"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="rgba(0, 150, 200, 1)"></rect> <text${add_attribute("x", 55 + 40 * (i % 3) + 12, 0)}${add_attribute("y", 380 - 40 * Math.floor(i / 3) + 25, 0)} width="40" height="40" fill="white">${escape(a)}</text>`;
    })}` : ``}</g>${``}</g><g transform="${"rotate(" + escape(-angle, true) + " 800 450)"}"><line x1="800" y1="450" x2="800" y2="420"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="650" y1="420" x2="950" y2="420"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="650" y1="420" x2="650" y2="400"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line><line x1="950" y1="420" x2="950" y2="400"${add_attribute("stroke", a * x + b === c ? "goldenrod" : "currentColor", 0)} stroke-width="2" fill="none"></line>${``}</g></g></svg></figure> <div class="controls"><h1 class="mdc-typography--headline6" style="text-align:center;margin:0"><span>${escape(a)}</span> <span style="color:rgba(0, 150, 200, 1)" data-svelte-h="svelte-z6khta">\\(x\\)</span> <span data-svelte-h="svelte-fxt2q1">+</span> <span style="color:green">${escape(b)}</span> <span data-svelte-h="svelte-u057kv">=</span> <span style="color:tomato">${escape(c)}</span></h1> <h1 class="mdc-typography--headline6" style="${"text-align:center;margin:0;color:" + escape(a * x + b === c ? "goldenrod" : "currentColor", true)}">${escape(a * x + b)} = ${escape(c)}</h1>  ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
      label: () => {
        return `<span slot="label" style="${"padding-right: 12px; width: 60px; display: block;color:" + escape(a * x + b === c ? "goldenrod" : "currentColor", true)}">\\(x\\) = <span>${escape(x)}</span></span>`;
      },
      default: () => {
        return `${validate_component(Slider, "Slider").$$render(
          $$result,
          {
            style: "flex-grow: 1;",
            min: 0,
            max: 100,
            step: 1,
            discrete: true,
            tickMarks: true,
            "input$aria-label": "x",
            value: x
          },
          {
            value: ($$value) => {
              x = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}  </div></article> ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "simple-title",
        "aria-describedby": "simple-content",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { id: "simple-title" }, {}, {
            default: () => {
              return `How to play`;
            }
          })} ${validate_component(Content, "Content").$$render($$result, { id: "simple-content" }, {}, {
            default: () => {
              return `<p data-svelte-h="svelte-13m2q00">Click on Generate New Equation to generate a linear equation.</p> <p data-svelte-h="svelte-1exo3qa">Use the Slider to change value of x.</p> <p data-svelte-h="svelte-1aur9yn">When the equation is solved, the color changes to golden.</p>`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Done`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "article.svelte-1ky3d6z{display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import LinearEquation from '$lib/mathril/games/LinearEquation.svelte';\\r\\n    import Card, {Content, ActionButtons} from '@smui/card';\\r\\n    import Button from '@smui/button';\\r\\n    import { goto } from '$app/navigation';\\r\\n    import { currentPath } from '$lib/mathril/stores';\\r\\n    $currentPath = \\"Games/Linear Equation\\";\\r\\n<\/script>\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <LinearEquation />\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAgBI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "Games/Linear Equation", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  return `<article class="svelte-1ky3d6z">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(LinearEquation, "LinearEquation").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })} </article>`;
});
export {
  Page as default
};
