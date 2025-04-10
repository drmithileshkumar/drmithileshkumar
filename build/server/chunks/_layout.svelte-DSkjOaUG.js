import { a as subscribe, d as set_store_value, e as compute_rest_props, c as null_to_empty } from './utils-DhkojCd_.js';
import { c as create_ssr_component, j as createEventDispatcher, o as onDestroy, e as escape, v as validate_component, i as each, a as add_attribute, d as spread, h as escape_object, b as get_current_component, f as escape_attribute_value } from './ssr2-CDgUAJs6.js';
import { create, all } from 'mathjs';
import { S as Svg, C as CommonIcon } from './Svg-Dkxrus40.js';
import './Suffix-CtI6fDI6.js';
import './Actions2-D_E0WmBW.js';
import { W as Wrapper, T as Tooltip, C as Content } from './RichActions-DI0nxjyr.js';
import { I as IconButton } from './IconButton-Bt4YIh4x.js';
import { I as Input } from './Input-CXqTjpeX.js';
import { B as BBOX, e as elements, s as selectedId, D as DRAWING, a as selectedElements, b as selectedVertices, c as showControls, d as svg, f as selectionMode, g as showBBoxControls, o as objectCount, h as currentLayer, i as boundingBox, j as isLasso, k as appHistory, l as currentState, m as defs, n as clientWidth, p as clientHeight, q as showGuides, r as addingNodes, t as hasArrow, u as canvasBackground, v as lassoElements, w as activeElement, x as selectedControl1, y as selectedControl0, z as selectedVertex, A as elementsNode, C as onSVG } from './stores6-tAd4Vci7.js';
import { P as PathOperations, C as ColorsInUse, S as SVGGroup, a as Slider, b as Snackbar, A as Actions } from './ColorsInUse-CwpWyEbG.js';
import './Subtitle-BTe0DNL-.js';
import './client-CAo-6NMJ.js';
import { p as pageLoadState, d as darkMode } from './stores2-f06Es8-t.js';
import { L as LinearProgress } from './LinearProgress-C70B_DWC.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { C as Content$1 } from './ActionIcons-Bx2zL88O.js';
import { D as DataTable, B as Body, R as Row, C as Cell } from './Cell-Y_QU_UIA.js';
import { S as SegmentedButton, a as Segment } from './Segment-CO7DIWEy.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import { S as Set_1, C as Chip } from './Set-DpFt5ER7.js';
import { T as Text } from './Text-B2xpIqtX.js';
import { A as Actions$1 } from './Actions-DlQ11USC.js';
import './Subheader-DEm_inUP.js';
import { P as Paper } from './Paper-BUN93U0U.js';
import { f as forwardEventsBuilder, c as classMap } from './forwardEventsBuilder-DOj2b3iN.js';
import { e as exclude, p as prefixFilter } from './prefixFilter-B6cFZsw3.js';
import { P as PreviewLine, a as PreviewRect, b as PreviewCircle, c as PreviewEllipse, d as PreviewRegular, e as PreviewPath, f as PreviewText, g as PreviewLatex, h as PreviewGrid, i as PreviewImage } from './PreviewGrid-B5EdeRRp.js';
import './SmuiElement-CKXCSgE1.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './index2-D2s-XE5r.js';
import './dispatch-BOSWPsEc.js';
import './Ripple-N--aPaMn.js';
import './exports-DKuYoYKl.js';
import './ContextFragment-CedcH2TL.js';
import './NotchedOutline-Bg9Ljk79.js';

const css$b = {
  code: ".actions.svelte-12y75l2{display:flex;flex-direction:row;gap:0.5em;align-items:center;justify-content:space-between;flex:1;min-width:100%}.left.svelte-12y75l2,.right.svelte-12y75l2{display:flex;align-items:center}.svelte-12y75l2 .solo-input{padding-left:0.5em;flex-grow:1;color:var(--mdc-theme-on-surface)}.svelte-12y75l2 .solo-input::placeholder{color:var(--mdc-theme-on-surface);opacity:0.6}.textInput.svelte-12y75l2{display:flex;align-items:center}",
  map: `{"version":3,"file":"ActionBar.svelte","sources":["ActionBar.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Tooltip, {\\r\\n        Wrapper,\\r\\n        Title,\\r\\n        Content,\\r\\n        Link,\\r\\n        RichActions,\\r\\n    } from '@smui/tooltip';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import IconButton, { Icon } from '@smui/icon-button';\\r\\n    import { Svg } from '@smui/common';\\r\\n    import { Input } from '@smui/textfield';\\r\\n    import { createEventDispatcher } from 'svelte';\\r\\n    import {addingNodes, boundingBox} from '$lib/vectorial/pages/vectorial/stores';\\r\\n    import {PAN, panX, panY} from '$lib/vectorial/pages/vectorial/stores';\\r\\n    import PathOperations from \\"$lib/vectorial/pages/vectorial/PathOperations.svelte\\";\\r\\n    import CanvasOperations from \\"$lib/vectorial/pages/vectorial/CanvasOperations.svelte\\";\\r\\n    import ElementOperations from \\"$lib/vectorial/pages/vectorial/ElementOperations.svelte\\";\\r\\n    import GroupOperations from '$lib/vectorial/pages/vectorial/GroupOperations.svelte';\\r\\n    import HistoryOperations from \\"$lib/vectorial/pages/vectorial/HistoryOperations.svelte\\";\\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let selectedTool = '';\\r\\n    let inputValue = '', ctm, isGettingn = false;\\r\\n    let takingControls = false,\\r\\n        inputElementId, elementAvailable = true, showMoreOperations = false;\\r\\n    const doAction = (selectedAction) => {\\r\\n        if(selectedAction === 'AddNode') $addingNodes = true;\\r\\n        dispatch('doAction', {selectedAction, inputValue})\\r\\n    }\\r\\n    const resetBoundingbox = (evt) => {\\r\\n        ctm = $boundingBox.getScreenCTM().inverse();\\r\\n    }\\r\\n<\/script>\\r\\n<div class=\\"actions\\">\\r\\n    <div class=\\"left\\">\\r\\n        {#if selectedTool === 'Shapes'}\\r\\n        <!-- <Wrapper rich>\\r\\n            <IconButton on:click={() => doAction('Line')}>\\r\\n                <Icon component={Svg} viewBox=\\"-45 -25 50 50\\">\\r\\n                    <line\\r\\n                        x1=\\"-35\\"\\r\\n                        y1=\\"-20\\"\\r\\n                        x2=\\"0\\"\\r\\n                        y2=\\"20\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        fill=\\"none\\"\\r\\n                        stroke-width=\\"5\\"\\r\\n                    />\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Draw line</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper> -->\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => doAction('Circle')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    circle\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Draw circle</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => doAction('Ellipse')}>\\r\\n                <Icon component={Svg} viewBox=\\"0 0 24 24\\">\\r\\n                    <ellipse cx=\\"12\\" cy=\\"12\\" rx=\\"12\\" ry=\\"8\\" fill=\\"currentColor\\" stroke-width=\\"0\\" />\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Draw ellipse</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => doAction('Rectangle')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    square\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Draw rectangle</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich style=\\"display:flex;flex-direction:row;\\">\\r\\n            <IconButton on:click={() => isGettingn = !isGettingn}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    hexagon\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            {#if isGettingn}\\r\\n                <div class=\\"textInput\\">\\r\\n                    <Input\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={inputValue}\\r\\n                        placeholder=\\"Number of sides\\"\\r\\n                        class=\\"solo-input\\"\\r\\n                    />\\r\\n                    <IconButton on:click={() => doAction('Regular')}>\\r\\n                        <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                    </IconButton>\\r\\n                </div>\\r\\n            {/if}\\r\\n            <Tooltip>\\r\\n                <Content>Draw regular polygon</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => doAction('Grid')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    grid_on\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Create grid</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <!-- <Wrapper rich>\\r\\n            <Tooltip>\\r\\n                <Content></Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper> -->\\r\\n            \\r\\n        {/if}\\r\\n        {#if selectedTool === 'Text'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"Text\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton on:click={() => doAction('Text')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'LaTeX'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"LaTeX\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton on:click={() => doAction('LaTeX')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'Plot'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"Plot function\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton on:click={() => doAction('Plot')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'Path' || selectedTool === 'Lasso'}\\r\\n            <PathOperations\\r\\n                bind:inputElementId\\r\\n                bind:takingControls\\r\\n            />\\r\\n        {/if}\\r\\n    </div>\\r\\n    \\r\\n    <div class=\\"right\\">\\r\\n        {#if showMoreOperations}\\r\\n            <HistoryOperations />\\r\\n            <CanvasOperations on:onZoom={resetBoundingbox} on:reset={resetBoundingbox}/>\\r\\n            <ElementOperations bind:elementAvailable />\\r\\n            <GroupOperations />\\r\\n        {/if}\\r\\n        <IconButton on:click={() => showMoreOperations = !showMoreOperations}>\\r\\n            <Icon class=\\"material-icons\\">more_vert</Icon>\\r\\n        </IconButton>\\r\\n    </div>\\r\\n    \\r\\n    \\r\\n    \\r\\n</div>\\r\\n<style>\\r\\n    .actions {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        justify-content: space-between;\\r\\n        flex: 1;\\r\\n        min-width:100%;\\r\\n    }\\r\\n    .left, .right {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n    * :global(.solo-input) {\\r\\n        padding-left: 0.5em;\\r\\n        flex-grow: 1;\\r\\n        color: var(--mdc-theme-on-surface);\\r\\n    }\\r\\n    * :global(.solo-input::placeholder) {\\r\\n        color: var(--mdc-theme-on-surface);\\r\\n        opacity: 0.6;\\r\\n    }\\r\\n    .textInput {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAyLI,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,IAAI,CAAE,CAAC,CACP,UAAU,IACd,CACA,oBAAK,CAAE,qBAAO,CACV,QAAQ,IAAI,CACZ,WAAW,CAAE,MACjB,CACA,eAAC,CAAS,WAAa,CACnB,YAAY,CAAE,KAAK,CACnB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,IAAI,sBAAsB,CACrC,CACA,eAAC,CAAS,wBAA0B,CAChC,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,OAAO,CAAE,GACb,CACA,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB"}`
};
const ActionBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_boundingBox;
  let $$unsubscribe_addingNodes;
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => value);
  $$unsubscribe_addingNodes = subscribe(addingNodes, (value) => value);
  createEventDispatcher();
  let { selectedTool = "" } = $$props;
  let inputValue = "";
  let takingControls = false, inputElementId;
  if ($$props.selectedTool === void 0 && $$bindings.selectedTool && selectedTool !== void 0) $$bindings.selectedTool(selectedTool);
  $$result.css.add(css$b);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="actions svelte-12y75l2"><div class="left svelte-12y75l2">${selectedTool === "Shapes" ? ` ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `circle`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Draw circle`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { component: Svg, viewBox: "0 0 24 24" }, {}, {
              default: () => {
                return `<ellipse cx="12" cy="12" rx="12" ry="8" fill="currentColor" stroke-width="0" class="svelte-12y75l2"></ellipse>`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Draw ellipse`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `square`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Draw rectangle`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render(
      $$result,
      {
        rich: true,
        style: "display:flex;flex-direction:row;"
      },
      {},
      {
        default: () => {
          return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `hexagon`;
                }
              })}`;
            }
          })} ${``} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
                default: () => {
                  return `Draw regular polygon`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `grid_on`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Create grid`;
              }
            })}`;
          }
        })}`;
      }
    })} ` : ``} ${selectedTool === "Text" ? `<div class="textInput svelte-12y75l2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Text",
        class: "solo-input",
        value: inputValue
      },
      {
        value: ($$value) => {
          inputValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${selectedTool === "LaTeX" ? `<div class="textInput svelte-12y75l2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "LaTeX",
        class: "solo-input",
        value: inputValue
      },
      {
        value: ($$value) => {
          inputValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${selectedTool === "Plot" ? `<div class="textInput svelte-12y75l2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Plot function",
        class: "solo-input",
        value: inputValue
      },
      {
        value: ($$value) => {
          inputValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${selectedTool === "Path" || selectedTool === "Lasso" ? `${validate_component(PathOperations, "PathOperations").$$render(
      $$result,
      { inputElementId, takingControls },
      {
        inputElementId: ($$value) => {
          inputElementId = $$value;
          $$settled = false;
        },
        takingControls: ($$value) => {
          takingControls = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> <div class="right svelte-12y75l2">${``} ${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `more_vert`;
          }
        })}`;
      }
    })}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_boundingBox();
  $$unsubscribe_addingNodes();
  return $$rendered;
});
const css$a = {
  code: ".formfield.svelte-1gs1rr9{display:flex;align-items:center;width:100%;height:2.5em}",
  map: `{"version":3,"file":"FormField.svelte","sources":["FormField.svelte"],"sourcesContent":["<script>\\r\\n    export let align=\\"center\\";\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    .formfield {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        /* justify-content: center; */\\r\\n        width: 100%;\\r\\n        height: 2.5em;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"formfield\\" {...$$restProps}>\\r\\n    {#if align==='end'}\\r\\n        <slot name=\\"label\\" />\\r\\n        <slot />\\r\\n    {:else}\\r\\n    <slot />\\r\\n    <slot name=\\"label\\" />\\r\\n    {/if}\\r\\n</div>"],"names":[],"mappings":"AAKI,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CAEnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KACZ"}`
};
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align"]);
  let { align = "center" } = $$props;
  if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
  $$result.css.add(css$a);
  return `<div${spread([{ class: "formfield" }, escape_object($$restProps)], { classes: "svelte-1gs1rr9" })}>${align === "end" ? `${slots.label ? slots.label({}) : ``} ${slots.default ? slots.default({}) : ``}` : `${slots.default ? slots.default({}) : ``} ${slots.label ? slots.label({}) : ``}`}</div>`;
});
const css$9 = {
  code: ".colorpicker.svelte-oey3t7{display:flex;flex-direction:column;gap:1em;justify-content:center;align-items:center;padding:1em 0}.result.svelte-oey3t7,.color.svelte-oey3t7,.alpha.svelte-oey3t7{width:100%;display:flex;justify-content:end}.result.svelte-oey3t7{height:2em}.confirm.svelte-oey3t7{display:flex;flex-direction:row;gap:1em;justify-content:flex-end;margin-bottom:1em;margin-top:0.6em;width:100%}",
  map: '{"version":3,"file":"Color.svelte","sources":["Color.svelte"],"sourcesContent":["<script lang=\'ts\'>\\r\\n    // @ts-nocheck\\r\\n\\r\\n    import Slider from \\"$lib/vectorial/ui/Slider.svelte\\";\\r\\n    import FormField from \\"$lib/vectorial/ui/FormField.svelte\\";\\r\\n    import Button, {Label} from \\"@smui/button\\";\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    export let background = \\"rgba(0, 0, 0, 1)\\";\\r\\n    export let noConfirm = false;\\r\\n    let parts = background.includes(\'rgba\') ? background\\r\\n        .split(\\"(\\")[1]\\r\\n        .split(\\")\\")[0]\\r\\n        .split(\\",\\")\\r\\n        .map((item) => Number(item)) : [0, 0, 0, 1];\\r\\n    let dispatch = createEventDispatcher();\\r\\n    let red = parts[0];\\r\\n    let green = parts[1];\\r\\n    let blue = parts[2];\\r\\n    let alpha = parts[3];\\r\\n    // $: {\\r\\n    //     console.log(red, blue, green, background);\\r\\n    //     background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;\\r\\n    //     dispatch(\\"colorChosen\\", { color: background });\\r\\n    // }\\r\\n    const setColor = () => {\\r\\n        background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;\\r\\n        dispatch(\\"colorChosen\\", { color: background });\\r\\n    }\\r\\n    const done = () => {\\r\\n        dispatch(\\"colorChosen\\", { color: background });\\r\\n    };\\r\\n    const cancel = () => {\\r\\n        dispatch(\'cancel\')\\r\\n    };\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"colorpicker\\">\\r\\n    <div class=\\"result\\" style=\\"background: {background}\\" />\\r\\n    <div class=\\"color\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n            <Slider\\r\\n                withInput\\r\\n                bind:value={red}\\r\\n                min={0}\\r\\n                max={255}\\r\\n                step={1}\\r\\n                discrete\\r\\n                input$aria-label=\\"Red\\"\\r\\n                on:change={setColor}\\r\\n                on:input={setColor}\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                Red\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <div class=\\"color\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n            <Slider\\r\\n                withInput\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={green}\\r\\n                min={0}\\r\\n                max={255}\\r\\n                step={1}\\r\\n                discrete\\r\\n                input$aria-label=\\"Green\\"\\r\\n                on:change={setColor}\\r\\n                on:input={setColor}\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                Green\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <div class=\\"color\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n            <Slider\\r\\n                withInput\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={blue}\\r\\n                min={0}\\r\\n                max={255}\\r\\n                step={1}\\r\\n                discrete\\r\\n                input$aria-label=\\"Blue\\"\\r\\n                on:change={setColor}\\r\\n                on:input={setColor}\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                Blue\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    <div class=\\"alpha\\">\\r\\n        <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n            <Slider\\r\\n                withInput\\r\\n                style=\\"flex-grow: 1;\\"\\r\\n                bind:value={alpha}\\r\\n                min={0}\\r\\n                max={1}\\r\\n                step={0.001}\\r\\n                input$aria-label=\\"Alpha\\"\\r\\n                on:change={setColor}\\r\\n                on:input={setColor}\\r\\n            />\\r\\n            <span\\r\\n                slot=\\"label\\"\\r\\n                style=\\"padding-right: 12px; width: max-content; display: block;\\"\\r\\n            >\\r\\n                Alpha\\r\\n            </span>\\r\\n        </FormField>\\r\\n    </div>\\r\\n    {#if !noConfirm}\\r\\n        <div class=\\"confirm\\">\\r\\n            <Button on:click={done}><Label>Use Color</Label></Button>\\r\\n            <Button on:click={cancel}><Label>Cancel</Label></Button>\\r\\n        </div>\\r\\n    {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    .colorpicker {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 1em;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        padding: 1em 0;\\r\\n    }\\r\\n    .result,\\r\\n    .color,\\r\\n    .alpha {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        justify-content: end;\\r\\n    }\\r\\n    .result {\\r\\n        height: 2em;\\r\\n    }\\r\\n    .confirm {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 1em;\\r\\n        justify-content: flex-end;\\r\\n        margin-bottom: 1em;\\r\\n        margin-top: 0.6em;\\r\\n        width: 100%;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAqII,0BAAa,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,CACjB,CACA,qBAAO,CACP,oBAAM,CACN,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,GACrB,CACA,qBAAQ,CACJ,MAAM,CAAE,GACZ,CACA,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,eAAe,CAAE,QAAQ,CACzB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IACX"}'
};
const Color = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background = "rgba(0, 0, 0, 1)" } = $$props;
  let { noConfirm = false } = $$props;
  let parts = background.includes("rgba") ? background.split("(")[1].split(")")[0].split(",").map((item) => Number(item)) : [0, 0, 0, 1];
  createEventDispatcher();
  let red = parts[0];
  let green = parts[1];
  let blue = parts[2];
  let alpha = parts[3];
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.noConfirm === void 0 && $$bindings.noConfirm && noConfirm !== void 0) $$bindings.noConfirm(noConfirm);
  $$result.css.add(css$9);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="colorpicker svelte-oey3t7"><div class="result svelte-oey3t7" style="${"background: " + escape(background, true)}"></div> <div class="color svelte-oey3t7">${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "display: flex;justify-content:end;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" style="padding-right: 12px; width: max-content; display: block;" data-svelte-h="svelte-wllvl9">Red</span>`;
        },
        default: () => {
          return `${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              withInput: true,
              min: 0,
              max: 255,
              step: 1,
              discrete: true,
              "input$aria-label": "Red",
              value: red
            },
            {
              value: ($$value) => {
                red = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="color svelte-oey3t7">${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "display: flex;justify-content:end;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" style="padding-right: 12px; width: max-content; display: block;" data-svelte-h="svelte-1obniad">Green</span>`;
        },
        default: () => {
          return `${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              withInput: true,
              style: "flex-grow: 1;",
              min: 0,
              max: 255,
              step: 1,
              discrete: true,
              "input$aria-label": "Green",
              value: green
            },
            {
              value: ($$value) => {
                green = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="color svelte-oey3t7">${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "display: flex;justify-content:end;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" style="padding-right: 12px; width: max-content; display: block;" data-svelte-h="svelte-1vnqyi0">Blue</span>`;
        },
        default: () => {
          return `${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              withInput: true,
              style: "flex-grow: 1;",
              min: 0,
              max: 255,
              step: 1,
              discrete: true,
              "input$aria-label": "Blue",
              value: blue
            },
            {
              value: ($$value) => {
                blue = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="alpha svelte-oey3t7">${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "display: flex;justify-content:end;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" style="padding-right: 12px; width: max-content; display: block;" data-svelte-h="svelte-1ham150">Alpha</span>`;
        },
        default: () => {
          return `${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              withInput: true,
              style: "flex-grow: 1;",
              min: 0,
              max: 1,
              step: 1e-3,
              "input$aria-label": "Alpha",
              value: alpha
            },
            {
              value: ($$value) => {
                alpha = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> ${!noConfirm ? `<div class="confirm svelte-oey3t7">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Use Color`;
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
    })}</div>` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const TrailingAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "touch",
    "nonNavigable",
    "icon$use",
    "icon$class",
    "isNavigable",
    "focus",
    "removeFocus",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  let { nonNavigable = false } = $$props;
  let { icon$use = [] } = $$props;
  let { icon$class = "" } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  function isNavigable() {
    return instance.isNavigable();
  }
  function focus() {
    instance.focus();
  }
  function removeFocus() {
    instance.removeFocus();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
  if ($$props.nonNavigable === void 0 && $$bindings.nonNavigable && nonNavigable !== void 0) $$bindings.nonNavigable(nonNavigable);
  if ($$props.icon$use === void 0 && $$bindings.icon$use && icon$use !== void 0) $$bindings.icon$use(icon$use);
  if ($$props.icon$class === void 0 && $$bindings.icon$class && icon$class !== void 0) $$bindings.icon$class(icon$class);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0) $$bindings.isNavigable(isNavigable);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  if ($$props.removeFocus === void 0 && $$bindings.removeFocus && removeFocus !== void 0) $$bindings.removeFocus(removeFocus);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return `<button${spread(
    [
      { type: "button" },
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-deprecated-chip-trailing-action": true,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        "aria-hidden": escape_attribute_value(nonNavigable ? "true" : void 0)
      },
      { tabindex: "-1" },
      escape_object(internalAttrs),
      escape_object(exclude($$restProps, ["icon$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><span class="mdc-deprecated-chip-trailing-action__ripple"></span> ${touch ? `<span class="mdc-deprecated-chip-trailing-action__touch"></span>` : ``} <span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [icon$class]: true,
          "mdc-deprecated-chip-trailing-action__icon": true
        }))
      },
      escape_object(prefixFilter($$restProps, "icon$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</span> </button>`;
});
const css$8 = {
  code: "article.svelte-1n12g2o.svelte-1n12g2o{width:300px;margin-bottom:1em;height:100%;display:flex;flex-direction:column;gap:0.5em}.filltype.svelte-1n12g2o.svelte-1n12g2o{display:flex;flex-direction:row;gap:1em;align-items:center;margin-bottom:0.5em}.circle.svelte-1n12g2o.svelte-1n12g2o{width:2em;height:2em;border-radius:50%;border:0.5px solid;cursor:pointer}.rect.svelte-1n12g2o.svelte-1n12g2o{display:flex;width:50px;height:2em;border:0.5px solid}.position.svelte-1n12g2o.svelte-1n12g2o{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:start}.attributeGroup.svelte-1n12g2o.svelte-1n12g2o{background:rgb(184, 183, 183);border-radius:10px;color:rgb(3, 3, 3);padding:1em;margin:1em 0}.action.svelte-1n12g2o.svelte-1n12g2o{padding:0.5em;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.icon.svelte-1n12g2o input.svelte-1n12g2o{height:2em;border-radius:5px;width:70px;outline:none;border:none}.box.svelte-1n12g2o.svelte-1n12g2o{display:grid;grid-template-columns:1fr 1fr;gap:1em;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"Appearance.svelte","sources":["Appearance.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Snackbar, { Actions, Label } from '@smui/snackbar';\\r\\n    import Card, {Content} from '@smui/card';\\r\\n    import IconButton, {Icon} from '@smui/icon-button';\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import Slider from '$lib/vectorial/ui/Slider.svelte';\\r\\n    import FormField from '$lib/vectorial/ui/FormField.svelte';\\r\\n    import {svg, selectedId, elements, defs, objectCount, DRAWING, hasArrow, canvasBackground} from './stores';\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import Button from '@smui/button';\\r\\n    import Color from '$lib/vectorial/components/Color.svelte';\\r\\n    import SVGGroup from '$lib/vectorial/pages/vectorial/SVGGroup.svelte';\\r\\n    import Textfield from '@smui/textfield';\\r\\n    import ColorsInUse from './ColorsInUse.svelte';\\r\\n    import {LinearGradient} from '$lib/vectorial/utils/common/linearGradient';\\r\\n    import {RadialGradient} from '$lib/vectorial/utils/common/radialGradient';\\r\\n    import {Pattern} from '$lib/vectorial/utils/common/pattern';\\r\\n    import {Marker} from '$lib/vectorial/utils/common/marker';\\r\\n    \\r\\n\\r\\n            //strokelinecap='butt',//butt, round, square\\r\\n            //strokelinejoin='miter',//arcs, bevel, miter, miter-clip, round\\r\\n            //strokemiterlimit='4',//>=1\\r\\n    import Chip, { Set, Text } from '@smui/chips';\\r\\n \\r\\n    let arrowChoices = ['start', 'mid', 'end'];\\r\\n    let selectedArrows = [];\\r\\n    const linecaps = ['butt', 'round', 'square'];\\r\\n    const linejoins = ['arcs', 'bevel', 'miter', 'miter-clip', 'round'];\\r\\n    \\r\\n    const fillparts = ['fill', 'stroke'];\\r\\n    const filltypes = ['solid', 'linear', 'radial', 'pattern'];\\r\\n\\r\\n    let filltype = $selectedId ? $elements[$selectedId][\\"filltype\\"]: '';\\r\\n    let isNewLG = false, isNewRG = false, isNewPTRN = false;\\r\\n    let selected = 'fill';\\r\\n    let position = 'start';\\r\\n    let currentLGId, currentRGId, currentPTRNId, takePatternGroupBar;\\r\\n    const setStroke = (evt) => {\\r\\n        $elements[$selectedId]['stroke'] = evt.detail.color;\\r\\n        if($elements[$selectedId].tag === 'path') {\\r\\n            if($elements[$selectedId].markerStart || $elements[$selectedId].markerMid || $elements[$selectedId].markerEnd) {\\r\\n                setMarkerColor(evt.detail.color)\\r\\n            }\\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setFill = (evt) => {\\r\\n        // console.log('set color: ', evt.detail.color)\\r\\n        $elements[$selectedId]['fill'] = evt.detail.color;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const createLinearGradient = () => {\\r\\n        isNewLG = true;\\r\\n        let lg = new LinearGradient({id: 'LinearGradient-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[lg.id] = lg;\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg.id})\`;\\r\\n        $elements[$selectedId]['filltype'] = 'linear';\\r\\n        currentLGId = lg.id;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveLinearGradient = () => {\\r\\n        $defs = $defs\\r\\n        isNewLG = false;\\r\\n    }\\r\\n    const removeLinearGradient = (lgrad) => {\\r\\n        delete $defs[lgrad]\\r\\n    }\\r\\n    const editLinearGradient = (lgrad) => {\\r\\n        currentLGId = lgrad;\\r\\n        isNewLG = true;\\r\\n    }\\r\\n    const createRadialGradient = () => {\\r\\n        isNewRG = true;\\r\\n        let lg = new RadialGradient({id: 'RadialGradient-' +$DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[lg.id] = lg;\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg.id})\`;\\r\\n        $elements[$selectedId]['filltype'] = 'radial';\\r\\n        currentRGId = lg.id;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveRadialGradient = () => {\\r\\n        $defs = $defs\\r\\n        isNewRG = false;\\r\\n    }\\r\\n    const removeRadialGradient = (rgrad) => {\\r\\n        delete $defs[rgrad]\\r\\n    }\\r\\n    const editRadialGradient = (lgrad) => {\\r\\n        currentRGId = lgrad;\\r\\n        isNewRG = true;\\r\\n    }\\r\\n    const setLinearGradient = (lg) => {\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg})\`; \\r\\n        $elements[$selectedId]['filltype'] = 'linear';\\r\\n        $elements = $elements;\\r\\n        // x1 = lg.x1;\\r\\n        // x2 = lg.x2;\\r\\n        // y1 = lg.y1;\\r\\n        // y2 = lg.y2;\\r\\n        // colors = lg.colors;\\r\\n    }\\r\\n    const setRadialGradient = (lg) => {\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg})\`; \\r\\n        $elements[$selectedId]['filltype'] = 'radial';\\r\\n        $elements = $elements;\\r\\n        // cx = lg.cx;\\r\\n        // cy = lg.cy;\\r\\n        // r = lg.r;\\r\\n        // fx = lg.fx;\\r\\n        // fy = lg.fy;\\r\\n        // colors = lg.colors;\\r\\n    }\\r\\n    const createMarker = () => {\\r\\n        $hasArrow = true;\\r\\n        let arrow = new Marker({id: 'Arrow'});\\r\\n        $defs[arrow.id] = arrow;\\r\\n    }\\r\\n\\r\\n    const setMarker = () => {\\r\\n        if($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path') {\\r\\n            $elements[$selectedId].markerStart = selectedArrows.indexOf('start') === -1 ? 'none' : 'url(#Arrow)';\\r\\n            $elements[$selectedId].markerMid = selectedArrows.indexOf('mid') === -1 ? 'none' : 'url(#Arrow)';\\r\\n            $elements[$selectedId].markerEnd = selectedArrows.indexOf('end') === -1 ? 'none' : 'url(#Arrow)';\\r\\n            // for(let i = 0; i < selectedArrows.length; i++) {\\r\\n            //     let position = selectedArrows[i];\\r\\n            //     switch(position) {\\r\\n            //         case 'start': {\\r\\n            //             $elements[$selectedId].markerStart = $elements[$selectedId]['markerStart'].includes('Arrow') ? 'none' : 'url(#Arrow)';\\r\\n            //             break;\\r\\n            //         }\\r\\n            //         case 'mid': {\\r\\n            //             $elements[$selectedId].markerMid = $elements[$selectedId]['markerMid'].includes('Arrow') ? 'none' : 'url(#Arrow)';\\r\\n            //             break;\\r\\n            //         }\\r\\n            //         case 'end': {\\r\\n            //             $elements[$selectedId].markerEnd = $elements[$selectedId]['markerEnd'].includes('Arrow') ? 'none' : 'url(#Arrow)';\\r\\n            //             break;\\r\\n            //         }\\r\\n            //     }\\r\\n            // }\\r\\n            \\r\\n            $elements = $elements;\\r\\n        }\\r\\n    }\\r\\n    const setMarkerColor = (color) => {\\r\\n        let markerId = $elements[$selectedId]['markerEnd'];\\r\\n        if(markerId === 'none') {\\r\\n            markerId = $elements[$selectedId]['markerStart'];\\r\\n        }\\r\\n        if(markerId === 'none') {\\r\\n            markerId = $elements[$selectedId]['markerMid'];\\r\\n        }\\r\\n        if(markerId && markerId !== 'none') {\\r\\n            $defs[markerId.split('#')[1].split(')')[0]].path.fill = color;\\r\\n            $defs[markerId.split('#')[1].split(')')[0]].path.stroke = color;\\r\\n            $defs = $defs;\\r\\n        }\\r\\n    }\\r\\n    const markerColor = (evt) => {\\r\\n        setMarkerColor(evt.detail.fill)\\r\\n    }\\r\\n    const createPattern = () => {\\r\\n        isNewPTRN = true;\\r\\n        let ptrn = new Pattern({id: 'Pattern-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[ptrn.id] = ptrn;\\r\\n        // $elements[$selectedId]['fill'] = \`url(#\${ptrn.id})\`;\\r\\n        // $elements[$selectedId]['filltype'] = 'linear';\\r\\n        currentPTRNId = ptrn.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n        takePatternGroupBar.open();\\r\\n        $svg.addEventListener('click', takePatternGroup);\\r\\n        $svg.addEventListener('touchstart', takePatternGroup);\\r\\n    }\\r\\n    const takePatternGroup = (evt) => {\\r\\n        evt.preventDefault();\\r\\n        if($selectedId && $elements[$selectedId].tag === 'g') {\\r\\n            $defs[currentPTRNId].child = $selectedId;\\r\\n            $elements[$selectedId].patternId = currentPTRNId;\\r\\n            $defs[currentPTRNId].viewBox = $elements[$selectedId].sbox.tl.x + ' ' + $elements[$selectedId].sbox.tl.y + ' ' + ($elements[$selectedId].bbox.width) + ' ' + ($elements[$selectedId].bbox.height);\\r\\n            $defs = $defs;\\r\\n            $svg.removeEventListener('click', takePatternGroup);\\r\\n        }\\r\\n    }\\r\\n    const togglePattern = (ptrnId) => {\\r\\n        let parent = $elements[$defs[ptrnId].child].parent;\\r\\n        if($elements[parent].children.indexOf($defs[ptrnId].child) === -1) {\\r\\n            $elements[parent].children = [...$elements[parent].children, $defs[ptrnId].child];\\r\\n        } else {\\r\\n            $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[ptrnId].child)\\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const savePattern = () => {\\r\\n        $defs = $defs\\r\\n        isNewPTRN = false;\\r\\n    }\\r\\n    const removePattern = (ptrnId) => {\\r\\n        delete $defs[ptrnId]\\r\\n    }\\r\\n    const editPattern = (ptrnId) => {\\r\\n        currentPTRNId = ptrnId;\\r\\n        isNewPTRN = true;\\r\\n    }\\r\\n    const setPattern = (ptrnId) => {\\r\\n        $elements[$selectedId][selected] = \`url(#\${ptrnId})\`; \\r\\n        $elements[$selectedId]['filltype'] = 'pattern';\\r\\n        $elements = $elements;\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n        /* padding-top: 1em; */\\r\\n        margin-bottom: 1em;\\r\\n        height: 100%;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    .filltype {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n    .circle {\\r\\n        width: 2em;\\r\\n        height: 2em;\\r\\n        border-radius: 50%;\\r\\n        border: 0.5px solid;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .rect {\\r\\n        display: flex;\\r\\n        width: 50px;\\r\\n        height: 2em;\\r\\n        border: 0.5px solid;\\r\\n    }\\r\\n    .position {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        align-items: center;\\r\\n        justify-content: start;\\r\\n        /* gap: 1em; */\\r\\n        /* margin: 0.5em; */\\r\\n    }\\r\\n    .attributeGroup {\\r\\n        background: rgb(184, 183, 183);\\r\\n        border-radius: 10px;\\r\\n        color: rgb(3, 3, 3);\\r\\n        padding: 1em;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .action {\\r\\n        padding: 0.5em;\\r\\n        cursor: pointer;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    .icon input {\\r\\n        height: 2em;\\r\\n        border-radius: 5px;\\r\\n        width: 70px;\\r\\n        outline: none;\\r\\n        border: none;\\r\\n    }\\r\\n    .box {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n{#if $selectedId}\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h1 class=\\"mdc-typography--headline5\\" style=\\"margin:0 0 0.5em 0;\\">Color</h1>\\r\\n            <SegmentedButton singleSelect segments={fillparts} let:segment bind:selected>\\r\\n                <Segment {segment}>\\r\\n                    <Label>{segment}</Label>\\r\\n                </Segment>\\r\\n            </SegmentedButton>\\r\\n                {#if selected === 'fill'}\\r\\n                    <ColorsInUse fillStroke={selected} on:colorChosen={setFill}/>\\r\\n                {:else if filltype === 'solid' && selected === 'stroke'}\\r\\n                    <ColorsInUse fillStroke={selected} on:colorChosen={setStroke}/>\\r\\n                {/if}\\r\\n            <SegmentedButton singleSelect segments={filltypes} let:segment bind:selected={filltype}>\\r\\n                <Segment {segment}>\\r\\n                    <Label>{segment}</Label>\\r\\n                </Segment>\\r\\n            </SegmentedButton>\\r\\n            <br>\\r\\n            {#if (filltype === 'linear')}\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">Linear Gradients</h4>\\r\\n                <DataTable table$aria-label=\\"Linear gradients\\" style=\\"width: 100%;\\">\\r\\n                    <Body>\\r\\n                        {#each Object.keys($defs) as lg}\\r\\n                        {#if $defs[lg].tag === 'linearGradient'}\\r\\n                        <Row>\\r\\n                            <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                                <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setLinearGradient(lg)}>\\r\\n                                    <defs>\\r\\n                                        <linearGradient id={lg} x1=\\"{$defs[lg].start.x}%\\" y1=\\"{$defs[lg].start.y}%\\" x2=\\"{$defs[lg].end.x}%\\" y2=\\"{$defs[lg].end.y}%\\" >\\r\\n                                            {#each $defs[lg]?.colors as color}\\r\\n                                                <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                                            {/each}\\r\\n                                        </linearGradient>\\r\\n                                    </defs>\\r\\n                                    <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill='url(#{lg})'/>\\r\\n                                </svg>\\r\\n                            </span></Cell>\\r\\n                            <Cell>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => editLinearGradient(lg)}>edit</IconButton>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => removeLinearGradient(lg)}>delete</IconButton>\\r\\n                            </Cell>\\r\\n                        </Row>\\r\\n                        {/if}\\r\\n                        {/each}\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <Button on:click={createLinearGradient}>New Linear Gradiant</Button>\\r\\n                {#if isNewLG}\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">New linear gradient</h4>\\r\\n                    <div class=\\"filltype\\">\\r\\n                        <span class=\\"circle\\" style=\\"background:{$defs[currentLGId].colors[0].stopColor}\\" on:click={() => position='start'}></span>\\r\\n                        <span class=\\"rect\\">\\r\\n                            <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                                <defs>\\r\\n                                    <linearGradient id={currentLGId} x1=\\"{$defs[currentLGId].start.x}%\\" y1=\\"{$defs[currentLGId].start.y}%\\" x2=\\"{$defs[currentLGId].end.x}%\\" y2=\\"{$defs[currentLGId].end.y}%\\" >\\r\\n                                        {#each $defs[currentLGId]?.colors as color}\\r\\n                                            <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                                        {/each}\\r\\n                                    </linearGradient>\\r\\n                                </defs>\\r\\n                                <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill={\`url(#\${currentLGId})\`}/>\\r\\n                            </svg>\\r\\n                        </span>\\r\\n                        <!-- svelte-ignore a11y-click-events-have-key-events -->\\r\\n                        <span class=\\"circle\\" style=\\"background:{$defs[currentLGId].colors[1].stopColor}\\" on:click={() => position='end'}></span>\\r\\n                        \\r\\n                        <Button on:click={saveLinearGradient}><Label>Save</Label></Button>\\r\\n                    </div> \\r\\n                    <div class=\\"position\\">\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentLGId].start.x} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                x1\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentLGId].start.y} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                y1\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentLGId].end.x} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                x2\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentLGId].end.y} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                y2\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentLGId].colors[0].offset} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                Start offset\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentLGId].colors[1].offset} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px;\\"\\r\\n                            >\\r\\n                                End offset\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                    </div>\\r\\n                    {#if position === 'start'} \\r\\n                    <Color noConfirm bind:background={$defs[currentLGId].colors[0].stopColor} />\\r\\n                    {:else}\\r\\n                    <Color noConfirm bind:background={$defs[currentLGId].colors[1].stopColor} />\\r\\n                    {/if}\\r\\n                {/if}\\r\\n            {/if}\\r\\n            {#if (filltype === 'radial')}\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">Radial Gradients</h4>\\r\\n                <DataTable table$aria-label=\\"Radial gradients\\" style=\\"width: 100%;\\">\\r\\n                    <Body>\\r\\n                        {#each Object.keys($defs) as lg}\\r\\n                        {#if $defs[lg].tag === 'radialGradient'}\\r\\n                        <Row>\\r\\n                            <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                                <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setRadialGradient(lg)}>\\r\\n                                    <defs>\\r\\n                                        <radialGradient id={lg} cx=\\"{$defs[lg].center.x}%\\" cy=\\"{$defs[lg].center.y}%\\" fx=\\"{$defs[lg].focus.x}%\\" fy=\\"{$defs[lg].focus.y}%\\" r=\\"{$defs[lg].r}%\\" fr=\\"{$defs[lg].fr}%\\">\\r\\n                                            {#each $defs[lg]?.colors as color}\\r\\n                                                <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                                            {/each}\\r\\n                                        </radialGradient>\\r\\n                                    </defs>\\r\\n                                    <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill='url(#{lg})'/>\\r\\n                                </svg>\\r\\n                            </span></Cell>\\r\\n                            <Cell>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => editRadialGradient(lg)}>edit</IconButton>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => removeRadialGradient(lg)}>delete</IconButton>\\r\\n                            </Cell>\\r\\n                        </Row>\\r\\n                        {/if}\\r\\n                        {/each}\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <Button on:click={createRadialGradient}>New Radial Gradiant</Button>\\r\\n                {#if isNewRG}\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">New radial gradient</h4>\\r\\n                    <div class=\\"filltype\\">\\r\\n                        <span class=\\"circle\\" style=\\"background:{$defs[currentRGId].colors[0].stopColor}\\" on:click={() => position='start'}></span>\\r\\n                        <span class=\\"rect\\">\\r\\n                            <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                                <!-- svelte-ignore component-name-lowercase -->\\r\\n                                <defs>\\r\\n                                    <radialGradient id={currentRGId} cx=\\"{$defs[currentRGId].center.x}\\" cy=\\"{$defs[currentRGId].center.y}\\" r=\\"{$defs[currentRGId].r}\\" fx=\\"{$defs[currentRGId].focus.x}\\" fy=\\"{$defs[currentRGId].focus.y}\\" fr=\\"{$defs[currentRGId].fr}\\" >\\r\\n                                        {#each $defs[currentRGId]?.colors as color}\\r\\n                                            <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                                        {/each}\\r\\n                                    </radialGradient>\\r\\n                                </defs>\\r\\n                                <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill={\`url(#\${currentRGId})\`}/>\\r\\n                            </svg>\\r\\n                        </span>\\r\\n                        <span class=\\"circle\\" style=\\"background:{$defs[currentRGId].colors[1].stopColor}\\" on:click={() => position='end'}></span>\\r\\n                        \\r\\n                        <Button on:click={saveRadialGradient}><Label>Save</Label></Button>\\r\\n                    </div> \\r\\n                    <div class=\\"position\\">\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentRGId].center.x} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                cx\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentRGId].center.y} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                cy\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentRGId].r} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                r\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentRGId].focus.x} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                fx\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField>\\r\\n                            <Slider bind:value={$defs[currentRGId].focus.y} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                fy\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                        <FormField >\\r\\n                            <Slider bind:value={$defs[currentRGId].fr} min={0} max={100} step={0.001} />\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                            >\\r\\n                                fr\\r\\n                            </span>\\r\\n                        </FormField>\\r\\n                    </div>\\r\\n                    {#if position === 'start'} \\r\\n                    <Color noConfirm bind:background={$defs[currentRGId].colors[0].stopColor} />\\r\\n                    {:else}\\r\\n                    <Color noConfirm bind:background={$defs[currentRGId].colors[1].stopColor} />\\r\\n                    {/if}\\r\\n                {/if}\\r\\n            {/if}\\r\\n            {#if filltype === 'solid'}\\r\\n                {#if selected === 'fill'}\\r\\n                    <Color noConfirm background={$elements[$selectedId]['fill']} on:colorChosen={setFill} />\\r\\n                {:else if selected === 'stroke'}\\r\\n                    <Color noConfirm bind:background={$elements[$selectedId]['stroke']} on:colorChosen={markerColor}/>\\r\\n                {/if}\\r\\n            {/if}\\r\\n            {#if filltype === 'pattern'}\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">Patterns</h4>\\r\\n                <DataTable table$aria-label=\\"Patterns\\" style=\\"width: 100%;\\">\\r\\n                    <Body>\\r\\n                        {#each Object.keys($defs) as ptrnId}\\r\\n                        {#if $defs[ptrnId].tag === 'pattern'}\\r\\n                        <Row>\\r\\n                            <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                                <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setPattern(ptrnId)}>\\r\\n                                    <defs>\\r\\n                                        <pattern x='{$defs[ptrnId].x}' y='{$defs[ptrnId].y}' width='{$defs[ptrnId].width}' height='{$defs[ptrnId].height}' viewBox='{$defs[ptrnId].viewBox}'>\\r\\n                                            {#if $defs[ptrnId].child.length > 0}\\r\\n                                                <SVGGroup id={$defs[ptrnId].child} />\\r\\n                                            {/if}\\r\\n                                        </pattern>\\r\\n                                    </defs>\\r\\n                                    <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill='url(#{ptrnId})' style=\\"background: \${$canvasBackground}\\"/>\\r\\n                                </svg>\\r\\n                            </span></Cell>\\r\\n                            <Cell>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => editPattern(ptrnId)}>edit</IconButton>\\r\\n                                <IconButton class=\\"material-icons\\" on:click={() => removePattern(ptrnId)}>delete</IconButton>\\r\\n                                <IconButton  toggle on:click={() => togglePattern(ptrnId)}>\\r\\n                                    <Icon class=\\"material-icons\\" on>visibility</Icon>\\r\\n                                    <Icon class=\\"material-icons\\">visibility_off</Icon>\\r\\n                                </IconButton>\\r\\n                            </Cell>\\r\\n                        </Row>\\r\\n                        {/if}\\r\\n                        {/each}\\r\\n                    </Body>\\r\\n                </DataTable>\\r\\n                <Button on:click={createPattern}>New Pattern</Button>\\r\\n                {#if isNewPTRN}\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:1em 0 0em 0;\\">New Pattern</h4>\\r\\n                    <div class=\\"box\\">\\r\\n                        <div class=\\"attributeGroup\\">\\r\\n                            <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                                <span class=\\"text\\">W</span>\\r\\n                                <span class=\\"icon\\">\\r\\n                                    <label>\\r\\n                                        <input\\r\\n                                            type=\\"number\\"\\r\\n                                            bind:value={$defs[currentPTRNId].width}\\r\\n                                            step={1}\\r\\n                                        />\\r\\n                                    </label>\\r\\n                                </span>\\r\\n                            </div>\\r\\n                            <br />\\r\\n                            <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                                <span class=\\"text\\">H</span>\\r\\n                                <span class=\\"icon\\">\\r\\n                                    <label>\\r\\n                                        <input\\r\\n                                            type=\\"number\\"\\r\\n                                            bind:value={$defs[currentPTRNId].height}\\r\\n                                            step={1}\\r\\n                                        />\\r\\n                                    </label>\\r\\n                                </span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\"attributeGroup\\">\\r\\n                            <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                                <span class=\\"text\\">X</span>\\r\\n                                <span class=\\"icon\\">\\r\\n                                    <label>\\r\\n                                        <input\\r\\n                                            type=\\"number\\"\\r\\n                                            bind:value={$defs[currentPTRNId].x}\\r\\n                                            step={1}\\r\\n                                        />\\r\\n                                    </label>\\r\\n                                </span>\\r\\n                            </div>\\r\\n                            <br />\\r\\n                            <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                                <span class=\\"text\\">Y</span>\\r\\n                                <span class=\\"icon\\">\\r\\n                                    <label>\\r\\n                                        <input\\r\\n                                            type=\\"number\\"\\r\\n                                            bind:value={$defs[currentPTRNId].y}\\r\\n                                            step={1}\\r\\n                                        />\\r\\n                                    </label>\\r\\n                                </span>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <Textfield label=\\"viewBox\\" bind:value={$defs[currentPTRNId].viewBox} />\\r\\n                    <!-- <FormField style=\\"width:100%\\">\\r\\n                        <Checkbox bind:checked={$defs[currentPTRNId].preserveAspectRatio} />\\r\\n                        <span slot=\\"label\\">Preserve Aspect</span>\\r\\n                    </FormField> -->\\r\\n                    <Button on:click={savePattern}><Label>Save</Label></Button>\\r\\n                {/if}\\r\\n            {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <FormField align=\\"end\\" style=\\"display: flex; width:100%;margin-bottom: 1em;\\">\\r\\n                <Slider withInput style=\\"flex-grow: 1;width:100%;\\" bind:value={$elements[$selectedId].opacity} min={0} max={1} step={0.001} input$aria-label=\\"Alpha\\" />\\r\\n                <span\\r\\n                    slot=\\"label\\"\\r\\n                    style=\\"padding-right: 12px; width:100px; display: block;\\"\\r\\n                >\\r\\n                    Opacity\\r\\n                </span>\\r\\n            </FormField>\\r\\n            \\r\\n            <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                <Slider withInput style=\\"flex-grow: 1;\\" bind:value={$elements[$selectedId].strokewidth} min={0} max={100} step={0.001} input$aria-label=\\"Stroke width\\" />\\r\\n                <span\\r\\n                    slot=\\"label\\"\\r\\n                    style=\\"display: block; line-height:1; padding-right: 1em; width: max-content;\\"\\r\\n                >\\r\\n                    Stroke width\\r\\n                </span>\\r\\n            </FormField>\\r\\n    \\r\\n            <Textfield variant=\\"filled\\" label=\\"stroke dasharray\\" bind:value={$elements[$selectedId].strokedasharray} style=\\"width:100%;margin: 1em 0;\\" input$emptyValueUndefined/>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n        <h5 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0em 0;\\">Marker</h5>\\r\\n        <Button on:click={createMarker}>Create arrow</Button>\\r\\n        {#if $hasArrow}\\r\\n        \\r\\n            <Set chips={arrowChoices} let:chip filter bind:selected={selectedArrows} on:SMUIChip:selection={setMarker}>\\r\\n                <Chip {chip} touch>\\r\\n                    <Text>{chip}</Text>\\r\\n                </Chip>\\r\\n            </Set>\\r\\n        {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0 0;\\">Line Cap</h5>\\r\\n            <SegmentedButton singleSelect segments={linecaps} let:segment bind:selected={$elements[$selectedId].strokelinecap}>\\r\\n                <Segment {segment}>\\r\\n                    {segment}\\r\\n                </Segment>\\r\\n            </SegmentedButton>\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h5 class=\\"mdc-typography--headline6\\" style=\\"margin:0.5em 0 0.5em 0;\\">Line Join</h5>\\r\\n            <SegmentedButton singleSelect segments={linejoins} let:segment bind:selected={$elements[$selectedId].strokelinejoin}>\\r\\n                <Segment {segment}>\\r\\n                    {segment}\\r\\n                </Segment>\\r\\n            </SegmentedButton>\\r\\n            \\r\\n            <FormField align=\\"end\\" style=\\"display: flex; margin-top:1em;\\">\\r\\n                <Slider withInput style=\\"flex-grow: 1;\\" bind:value={$elements[$selectedId].strokemiterlimit} min={1} max={100} step={0.001} input$aria-label=\\"Alpha\\" />\\r\\n                <span\\r\\n                    slot=\\"label\\"\\r\\n                    style=\\"padding-right: 12px; width: 120px; display: block;\\"\\r\\n                >\\r\\n                    Miter limit\\r\\n                </span>\\r\\n            </FormField>\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n<Snackbar bind:this={takePatternGroupBar}>\\r\\n    <Label>Select a group element for the pattern.</Label>\\r\\n    <Actions>\\r\\n      <IconButton class=\\"material-icons\\" title=\\"Dismiss\\">close</IconButton>\\r\\n    </Actions>\\r\\n</Snackbar>\\r\\n{/if}\\r\\n"],"names":[],"mappings":"AA2NI,qCAAQ,CACJ,KAAK,CAAE,KAAK,CAEZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACT,CACA,uCAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,KACnB,CACA,qCAAQ,CACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,KAAK,CAAC,KAAK,CACnB,MAAM,CAAE,OACZ,CACA,mCAAM,CACF,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAClB,CACA,uCAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAGrB,CACA,6CAAgB,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,qCAAQ,CACJ,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aACrB,CACA,oBAAK,CAAC,oBAAM,CACR,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IACZ,CACA,kCAAK,CACD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const Appearance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $defs, $$unsubscribe_defs;
  let $$unsubscribe_svg;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  let $hasArrow, $$unsubscribe_hasArrow;
  let $canvasBackground, $$unsubscribe_canvasBackground;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_hasArrow = subscribe(hasArrow, (value) => $hasArrow = value);
  $$unsubscribe_canvasBackground = subscribe(canvasBackground, (value) => $canvasBackground = value);
  let arrowChoices = ["start", "mid", "end"];
  let selectedArrows = [];
  const linecaps = ["butt", "round", "square"];
  const linejoins = ["arcs", "bevel", "miter", "miter-clip", "round"];
  const fillparts = ["fill", "stroke"];
  const filltypes = ["solid", "linear", "radial", "pattern"];
  let filltype = $selectedId ? $elements[$selectedId]["filltype"] : "";
  let selected = "fill";
  let takePatternGroupBar;
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$selectedId ? `<article class="svelte-1n12g2o">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h1 class="mdc-typography--headline5" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-w76v7x">Color</h1> ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: fillparts,
                selected
              },
              {
                selected: ($$value) => {
                  selected = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(segment)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${selected === "fill" ? `${validate_component(ColorsInUse, "ColorsInUse").$$render($$result, { fillStroke: selected }, {}, {})}` : `${filltype === "solid" && selected === "stroke" ? `${validate_component(ColorsInUse, "ColorsInUse").$$render($$result, { fillStroke: selected }, {}, {})}` : ``}`} ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: filltypes,
                selected: filltype
              },
              {
                selected: ($$value) => {
                  filltype = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(segment)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} <br> ${filltype === "linear" ? `<h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;" data-svelte-h="svelte-1c239dd">Linear Gradients</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Linear gradients",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (lg) => {
                        return `${$defs[lg].tag === "linearGradient" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-1n12g2o"><svg width="100%" height="100%"><defs><linearGradient${add_attribute("id", lg, 0)} x1="${escape($defs[lg].start.x, true) + "%"}" y1="${escape($defs[lg].start.y, true) + "%"}" x2="${escape($defs[lg].end.x, true) + "%"}" y2="${escape($defs[lg].end.y, true) + "%"}">${each($defs[lg]?.colors, (color) => {
                                  return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
                                })}</linearGradient></defs><rect x="0" y="0" width="50px" height="2em" fill="${"url(#" + escape(lg, true) + ")"}"></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Linear Gradiant`;
              }
            })} ${``}` : ``} ${filltype === "radial" ? `<h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;" data-svelte-h="svelte-v071tn">Radial Gradients</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Radial gradients",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (lg) => {
                        return `${$defs[lg].tag === "radialGradient" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-1n12g2o"><svg width="100%" height="100%"><defs><radialGradient${add_attribute("id", lg, 0)} cx="${escape($defs[lg].center.x, true) + "%"}" cy="${escape($defs[lg].center.y, true) + "%"}" fx="${escape($defs[lg].focus.x, true) + "%"}" fy="${escape($defs[lg].focus.y, true) + "%"}" r="${escape($defs[lg].r, true) + "%"}" fr="${escape($defs[lg].fr, true) + "%"}">${each($defs[lg]?.colors, (color) => {
                                  return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
                                })}</radialGradient></defs><rect x="0" y="0" width="50px" height="2em" fill="${"url(#" + escape(lg, true) + ")"}"></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Radial Gradiant`;
              }
            })} ${``}` : ``} ${filltype === "solid" ? `${selected === "fill" ? `${validate_component(Color, "Color").$$render(
              $$result,
              {
                noConfirm: true,
                background: $elements[$selectedId]["fill"]
              },
              {},
              {}
            )}` : `${selected === "stroke" ? `${validate_component(Color, "Color").$$render(
              $$result,
              {
                noConfirm: true,
                background: $elements[$selectedId]["stroke"]
              },
              {
                background: ($$value) => {
                  $elements[$selectedId]["stroke"] = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``}`}` : ``} ${filltype === "pattern" ? `<h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;" data-svelte-h="svelte-1jrjs8i">Patterns</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Patterns",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (ptrnId) => {
                        return `${$defs[ptrnId].tag === "pattern" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-1n12g2o"><svg width="100%" height="100%"><defs><pattern${add_attribute("x", $defs[ptrnId].x, 0)}${add_attribute("y", $defs[ptrnId].y, 0)}${add_attribute("width", $defs[ptrnId].width, 0)}${add_attribute("height", $defs[ptrnId].height, 0)}${add_attribute("viewBox", $defs[ptrnId].viewBox, 0)}>${$defs[ptrnId].child.length > 0 ? `${validate_component(SVGGroup, "SVGGroup").$$render($$result, { id: $defs[ptrnId].child }, {}, {})}` : ``}</pattern></defs><rect x="0" y="0" width="50px" height="2em" fill="${"url(#" + escape(ptrnId, true) + ")"}" style="${"background: $" + escape($canvasBackground, true)}"></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { toggle: true }, {}, {
                                  default: () => {
                                    return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                                      default: () => {
                                        return `visibility`;
                                      }
                                    })} ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                                      default: () => {
                                        return `visibility_off`;
                                      }
                                    })} `;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Pattern`;
              }
            })} ${``}` : ``}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FormField, "FormField").$$render(
              $$result,
              {
                align: "end",
                style: "display: flex; width:100%;margin-bottom: 1em;"
              },
              {},
              {
                label: () => {
                  return `<span slot="label" style="padding-right: 12px; width:100px; display: block;" data-svelte-h="svelte-1c3requ">Opacity</span>`;
                },
                default: () => {
                  return `${validate_component(Slider, "Slider").$$render(
                    $$result,
                    {
                      withInput: true,
                      style: "flex-grow: 1;width:100%;",
                      min: 0,
                      max: 1,
                      step: 1e-3,
                      "input$aria-label": "Alpha",
                      value: $elements[$selectedId].opacity
                    },
                    {
                      value: ($$value) => {
                        $elements[$selectedId].opacity = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              }
            )} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="display: block; line-height:1; padding-right: 1em; width: max-content;" data-svelte-h="svelte-1w5dm92">Stroke width</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    style: "flex-grow: 1;",
                    min: 0,
                    max: 100,
                    step: 1e-3,
                    "input$aria-label": "Stroke width",
                    value: $elements[$selectedId].strokewidth
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].strokewidth = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "stroke dasharray",
                style: "width:100%;margin: 1em 0;",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].strokedasharray
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].strokedasharray = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="mdc-typography--headline6" style="margin:0 0 0em 0;" data-svelte-h="svelte-1xlmaxq">Marker</h5> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Create arrow`;
              }
            })} ${$hasArrow ? `${validate_component(Set_1, "Set").$$render(
              $$result,
              {
                chips: arrowChoices,
                filter: true,
                selected: selectedArrows
              },
              {
                selected: ($$value) => {
                  selectedArrows = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ chip }) => {
                  return `${validate_component(Chip, "Chip").$$render($$result, { chip, touch: true }, {}, {
                    default: () => {
                      return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(chip)}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}` : ``}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="mdc-typography--headline6" style="margin:0 0 0 0;" data-svelte-h="svelte-16qxljs">Line Cap</h5> ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: linecaps,
                selected: $elements[$selectedId].strokelinecap
              },
              {
                selected: ($$value) => {
                  $elements[$selectedId].strokelinecap = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${escape(segment)}`;
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
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h5 class="mdc-typography--headline6" style="margin:0.5em 0 0.5em 0;" data-svelte-h="svelte-79ewru">Line Join</h5> ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: linejoins,
                selected: $elements[$selectedId].strokelinejoin
              },
              {
                selected: ($$value) => {
                  $elements[$selectedId].strokelinejoin = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${escape(segment)}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(FormField, "FormField").$$render(
              $$result,
              {
                align: "end",
                style: "display: flex; margin-top:1em;"
              },
              {},
              {
                label: () => {
                  return `<span slot="label" style="padding-right: 12px; width: 120px; display: block;" data-svelte-h="svelte-a560en">Miter limit</span>`;
                },
                default: () => {
                  return `${validate_component(Slider, "Slider").$$render(
                    $$result,
                    {
                      withInput: true,
                      style: "flex-grow: 1;",
                      min: 1,
                      max: 100,
                      step: 1e-3,
                      "input$aria-label": "Alpha",
                      value: $elements[$selectedId].strokemiterlimit
                    },
                    {
                      value: ($$value) => {
                        $elements[$selectedId].strokemiterlimit = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              }
            )}`;
          }
        })}`;
      }
    })}</article> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { this: takePatternGroupBar },
      {
        this: ($$value) => {
          takePatternGroupBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Select a group element for the pattern.`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  $$unsubscribe_svg();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  $$unsubscribe_hasArrow();
  $$unsubscribe_canvasBackground();
  return $$rendered;
});
const css$7 = {
  code: "article.svelte-129kmub{width:100%;display:flex;flex-direction:column;gap:0.5em}",
  map: `{"version":3,"file":"Dimensions.svelte","sources":["Dimensions.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import {\\r\\n        svg,\\r\\n        selectedId,\\r\\n        elements,\\r\\n        elementsNode,\\r\\n        selectedVertex,\\r\\n        selectedControl0,\\r\\n        selectedControl1,\\r\\n        activeElement,\\r\\n        lassoElements,\\r\\n        selectedElements,\\r\\n        boundingBox,\\r\\n        isLasso,\\r\\n    } from \\"./stores\\";\\r\\n    import Slider from \\"$lib/vectorial/ui/Slider.svelte\\";\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import { ripple } from \\"$lib/vectorial/ui/ripple\\";\\r\\n\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    \\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    \\r\\n    let x, y, width, height, angle = 0, textId;\\r\\n    let xPrev, yPrev, widthPrev, heightPrev, fixedPoint, anglePrev;\\r\\n    let subpath = 0,\\r\\n        index = 0,\\r\\n        verticesx = {},\\r\\n        tinx = {},\\r\\n        toutx = {},\\r\\n        verticesy = {},\\r\\n        tiny = {},\\r\\n        touty = {},\\r\\n        nodeType;\\r\\n    let isGettingGrid = false,\\r\\n        gridRow = 0,\\r\\n        gridColumn = 0,\\r\\n        rowGap = 10,\\r\\n        columnGap = 10,\\r\\n        gridx = 0,\\r\\n        gridy = 0;\\r\\n    onMount(() => {\\r\\n    });\\r\\n    const changen = () => {\\r\\n        $elements[$selectedId].setPoints();\\r\\n        $elementsNode[$selectedId].setAttribute(\\r\\n            \\"points\\",\\r\\n            $elements[$selectedId].points\\r\\n        );\\r\\n        $elements[$selectedId].bbox = $elementsNode[$selectedId].getBBox();\\r\\n        $elements[$selectedId].updateSelectionBox();\\r\\n        $elements = $elements;\\r\\n        // saveHistory();\\r\\n    };\\r\\n    const updateSbox = (id = $selectedId) => {\\r\\n        $elementsNode[id] = $elementsNode[id];\\r\\n        $elements[id].bbox = $elementsNode[id]?.getBBox();\\r\\n        $elements[id].ctm = $boundingBox\\r\\n            .getScreenCTM()\\r\\n            .inverse()\\r\\n            .multiply($elementsNode[id].getScreenCTM());\\r\\n        $elements[id].updateSelectionBox();\\r\\n        $elementsNode = $elementsNode;\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const changex = () => {\\r\\n        let dx = x - xPrev;\\r\\n        $elements[$selectedId].translate(dx, 0);\\r\\n        $elements = $elements;\\r\\n        xPrev = x;\\r\\n    };\\r\\n    const changey = () => {\\r\\n        let dy = y - yPrev;\\r\\n        $elements[$selectedId].translate(0, dy);\\r\\n        $elements = $elements;\\r\\n        yPrev = y;\\r\\n    };\\r\\n\\r\\n    const changeWidth = () => {\\r\\n        let scalex = width / widthPrev;\\r\\n        let scaley = $elements[$selectedId].preserveAspect ? scalex : 1;\\r\\n        $elements[$selectedId].scale(scalex, scaley, fixedPoint);\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n        widthPrev = width;\\r\\n    };\\r\\n    const changeHeight = () => {\\r\\n        let scaley = height / heightPrev;\\r\\n        let scalex = $elements[$selectedId].preserveAspect ? scaley : 1;\\r\\n        $elements[$selectedId].scale(scalex, scaley, fixedPoint);\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n        heightPrev = height;\\r\\n    };\\r\\n    const changeRadius = () => {\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    \\r\\n    const changeNodex = () => {\\r\\n        let dragOffset = {};\\r\\n        let coord;\\r\\n        if ($selectedVertex) {\\r\\n            dragOffset = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].v.x,\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedVertex,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"v\\"\\r\\n            );\\r\\n            verticesx[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.x;\\r\\n        }\\r\\n        if ($selectedControl0) {\\r\\n            dragOffset = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].tout.x,\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl0,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tout\\"\\r\\n            );\\r\\n            toutx[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.x;\\r\\n        }\\r\\n        if ($selectedControl1) {\\r\\n            dragOffset = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].tin.x,\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl1,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tin\\"\\r\\n            );\\r\\n            tinx[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.x;\\r\\n        }\\r\\n        $elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n    };\\r\\n    const changeNodey = () => {\\r\\n        let dragOffset = {};\\r\\n        let coord;\\r\\n        if ($selectedVertex) {\\r\\n            dragOffset = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            coord = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].v.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedVertex,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"v\\"\\r\\n            );\\r\\n            verticesy[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.y;\\r\\n        }\\r\\n        if ($selectedControl0) {\\r\\n            dragOffset = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n            coord = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].tout.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl0,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tout\\"\\r\\n            );\\r\\n            touty[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.y;\\r\\n        }\\r\\n        if ($selectedControl1) {\\r\\n            dragOffset = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n            coord = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].tin.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl1,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tin\\"\\r\\n            );\\r\\n            tiny[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.y;\\r\\n        }\\r\\n        $elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n    };\\r\\n    const changeAngle = () => {\\r\\n        let dtheta = (Math.PI * (angle - anglePrev)) / 180;\\r\\n        $elements[$selectedId].rotate(dtheta, $elements[$selectedId].axis);\\r\\n        $elements = $elements;\\r\\n        anglePrev = angle;\\r\\n    };\\r\\n    const setPath = (id) => {\\r\\n        textId = id;\\r\\n        $svg.addEventListener(\\"click\\", setTextPath);\\r\\n    };\\r\\n    const setTextPath = (evt) => {\\r\\n        if ($elements[$selectedId].tag === \\"path\\") {\\r\\n            $elements[textId].href = $selectedId;\\r\\n            $elements[textId].tm = new DOMMatrix();\\r\\n            $elements[textId].showPath = true;\\r\\n            // updateSbox(textId)\\r\\n            $elements = $elements;\\r\\n\\r\\n            $svg.removeEventListener(\\"click\\", setTextPath);\\r\\n        }\\r\\n    };\\r\\n    const textPathVisibility = () => {\\r\\n        if ($elements[$selectedId].showPath) {\\r\\n            $elements[$elements[$selectedId].href].opacity = 1;\\r\\n            $elements = $elements;\\r\\n        } else {\\r\\n            $elements[$elements[$selectedId].href].opacity = 0;\\r\\n            $elements = $elements;\\r\\n        }\\r\\n    };\\r\\n    const reflect = (about) => {\\r\\n        $elements[$selectedId].reflect(about);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const unlasso = () => {\\r\\n        $isLasso = false;\\r\\n        $elements[$elements[\\"lasso\\"].parent].children.splice(-1, 1);\\r\\n        $elements[\\"lasso\\"] = null;\\r\\n    };\\r\\n    const distributeOnPath = () => {\\r\\n        // console.log('Considering path...');\\r\\n        if($selectedElements?.length > 0) $lassoElements = null;\\r\\n        if (\\r\\n            ($lassoElements || ($selectedElements && $selectedElements.length > 0)) &&\\r\\n            $selectedId &&\\r\\n            $selectedId !== \\"lasso\\" &&\\r\\n            $elements[$selectedId].tag === \\"path\\"\\r\\n        ) {\\r\\n            // console.log('distributing on path...')\\r\\n            let angle = 0;\\r\\n            let n = $selectedElements?.length || $lassoElements?.length;\\r\\n            let points = [];\\r\\n            let selectedPathTransform;\\r\\n\\r\\n            for (let i = 0; i < n; i++) {\\r\\n                if ($elements[$selectedId].isClosed[0]) {\\r\\n                    points.push($elements[$selectedId].pointAtLength(i / n));\\r\\n                } else {\\r\\n                    points.push(\\r\\n                        $elements[$selectedId].pointAtLength(i / (n - 1))\\r\\n                    );\\r\\n                }\\r\\n                if($selectedElements) {\\r\\n                    $elements[$selectedElements[i]].translate(\\r\\n                        points[i].P.x - $elements[$selectedElements[i]].axis.x,\\r\\n                        points[i].P.y - $elements[$selectedElements[i]].axis.y\\r\\n                    );\\r\\n                }\\r\\n                if($lassoElements) {\\r\\n                    $elements[$lassoElements[i]].translate(\\r\\n                        points[i].P.x - $elements[$lassoElements[i]].axis.x,\\r\\n                        points[i].P.y - $elements[$lassoElements[i]].axis.y\\r\\n                    );\\r\\n                }\\r\\n            \\r\\n                //orientation\\r\\n                angle = points[i].tan.angle(points[i].P);\\r\\n                if($selectedElements) {\\r\\n                    $elements[$selectedElements[i]].rotate(\\r\\n                        angle,\\r\\n                        $elements[$selectedElements[i]].axis\\r\\n                    );\\r\\n                }\\r\\n                if($lassoElements) {\\r\\n                        $elements[$lassoElements[i]].rotate(\\r\\n                        angle,\\r\\n                        $elements[$lassoElements[i]].axis\\r\\n                    );\\r\\n                }\\r\\n                \\r\\n                //if path has matrix transform on it\\r\\n                selectedPathTransform = new DOMMatrix().multiplySelf(\\r\\n                    $elements[$selectedId].tm\\r\\n                );\\r\\n                if($selectedElements) {\\r\\n                    $elements[$selectedElements[i]].tm =\\r\\n                    selectedPathTransform.multiplySelf(\\r\\n                        $elements[$selectedElements[i]].tm\\r\\n                    );\\r\\n                }\\r\\n                if($lassoElements) {\\r\\n                    $elements[$lassoElements[i]].tm =\\r\\n                    selectedPathTransform.multiplySelf(\\r\\n                        $elements[$lassoElements[i]].tm\\r\\n                    );\\r\\n                }\\r\\n                \\r\\n            }\\r\\n            if($lassoElements) unlasso();\\r\\n            $elements = $elements;\\r\\n            // $svg.removeEventListener('click', distributeOnPath);\\r\\n            // console.log('points...', points);\\r\\n        }\\r\\n    };\\r\\n    const distributeOnGrid = () => {\\r\\n        if($selectedElements?.length > 0) $lassoElements = null;\\r\\n        if (isGettingGrid) {\\r\\n            let gridPoint;\\r\\n            for (let j = 0; j < gridColumn; j++) {\\r\\n                for (let i = 0; i < gridRow; i++) {\\r\\n                    gridPoint = new Point(\\r\\n                        gridx + j * columnGap,\\r\\n                        gridy + i * rowGap\\r\\n                    );\\r\\n                    //place $lassoelement\\r\\n                    let n = $selectedElements?.length || $lassoElements?.length;\\r\\n                    if (i + j * gridRow < n) {\\r\\n                        if($lassoElements) {\\r\\n                            $elements[$lassoElements[i + j * gridRow]].translate(\\r\\n                                gridPoint.x -\\r\\n                                    $elements[$lassoElements[i + j * gridRow]].axis\\r\\n                                        .x,\\r\\n                                gridPoint.y -\\r\\n                                    $elements[$lassoElements[i + j * gridRow]].axis\\r\\n                                        .y\\r\\n                            );\\r\\n                        }\\r\\n                        if($selectedElements) {\\r\\n                            $elements[$selectedElements[i + j * gridRow]].translate(\\r\\n                                gridPoint.x -\\r\\n                                    $elements[$selectedElements[i + j * gridRow]].axis\\r\\n                                        .x,\\r\\n                                gridPoint.y -\\r\\n                                    $elements[$selectedElements[i + j * gridRow]].axis\\r\\n                                        .y\\r\\n                            );\\r\\n                        }\\r\\n                        \\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n            if($lassoElements) unlasso();\\r\\n            $elements = $elements;\\r\\n            isGettingGrid = false;\\r\\n        }\\r\\n    };\\r\\n    const compareHCorners = (a, b) => {\\r\\n        return a.tl.x - b.tl.x;\\r\\n    };\\r\\n    const compareVCorners = (a, b) => {\\r\\n        return a.tl.y - b.tl.y;\\r\\n    };\\r\\n    const distributeElements = (dir) => {\\r\\n        let corners = [];\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n            corners = [\\r\\n                ...corners,\\r\\n                {\\r\\n                    id: $selectedElements[i],\\r\\n                    tl: $elements[$selectedElements[i]].sbox.tl,\\r\\n                },\\r\\n            ];\\r\\n        }\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                corners.sort(compareHCorners);\\r\\n                let D = corners[corners.length - 1].tl.x - corners[0].tl.x;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(sum + i * gap, corners[0].tl.y));\\r\\n\\r\\n                    dx = sum + i * gap + corners[0].tl.x - corners[i].tl.x;\\r\\n                    dy = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                corners.sort(compareVCorners);\\r\\n\\r\\n                let D = corners[corners.length - 1].tl.y - corners[0].tl.y;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(corners[0].tl.y, sum + i * gap));\\r\\n\\r\\n                    dy = sum + i * gap + corners[0].tl.y - corners[i].tl.y;\\r\\n                    dx = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    const alignElements = (dir, ancor) => {\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        let dx = 0,\\r\\n            dy = 0;\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"L\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].axis.x -\\r\\n                                $elements[$selectedElements[i]].axis.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"R\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tr.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tr.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"T\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.y -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].axis.y -\\r\\n                                $elements[$selectedElements[i]].axis.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"B\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.br.y -\\r\\n                                $elements[$selectedElements[i]].sbox.br.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n{#if $elements && $selectedId && $elements[$selectedId] || $selectedElements.length > 0}\\r\\n    <article>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Distribute on path</h4>\\r\\n                <ol style=\\"margin:0\\">\\r\\n                    <li>Select Elements or Lasso elements</li> \\r\\n                    <li>Select target path.</li> \\r\\n                    <li>Click on this button</li>\\r\\n                </ol>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Button on:click={distributeOnPath}>Distribute on path</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Distribute on grid</h4>\\r\\n                <ol style=\\"margin:0\\">\\r\\n                    <li>Select Elements or Lasso elements</li> \\r\\n                    <li>Click on this button and enter grid details.</li> \\r\\n                </ol>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Button on:click={() => (isGettingGrid = true)}>Distribute on grid</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        \\r\\n        {#if isGettingGrid}\\r\\n        <Card>\\r\\n        <!-- <Title>Enter number of rows and columns</Title> -->\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Enter number of rows and columns</h4>\\r\\n                <Textfield type=\\"number\\" label={\\"Start x\\"} bind:value={gridx} input$emptyValueUndefined/>\\r\\n                <Textfield type=\\"number\\" label={\\"Start y\\"} bind:value={gridy} input$emptyValueUndefined/>\\r\\n                <Textfield type=\\"number\\" label={\\"Number of rows\\"} bind:value={gridRow} input$emptyValueUndefined/>\\r\\n                <Textfield type=\\"number\\" label={\\"Number of columns\\"} bind:value={gridColumn} input$emptyValueUndefined/>\\r\\n                <Textfield type=\\"number\\" label={\\"Row Gap\\"} bind:value={rowGap} input$emptyValueUndefined/>\\r\\n                <Textfield type=\\"number\\" label={\\"Column Gap\\"} bind:value={columnGap} input$emptyValueUndefined/>\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Button on:click={distributeOnGrid}>Done</Button>\\r\\n                <Button on:click={() => isGettingGrid = false}>Cancel</Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        {/if}\\r\\n    </article>\\r\\n{/if}\\r\\n\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 100%;\\r\\n        display: flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    /* .attributeGroup {\\r\\n        background: rgb(184, 183, 183);\\r\\n        border-radius: 10px;\\r\\n        color: rgb(3, 3, 3);\\r\\n        padding: 1em;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .action {\\r\\n        padding: 0.5em;\\r\\n        cursor: pointer;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    .icon input {\\r\\n        height: 2em;\\r\\n        border-radius: 5px;\\r\\n        width: 70px;\\r\\n        outline: none;\\r\\n        border: none;\\r\\n    }\\r\\n    .box {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .iconButton {\\r\\n        font-size: 1.5em;\\r\\n        background: rgba(0, 0, 0, 0.1);\\r\\n        cursor: pointer;\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4lBI,sBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,MAAM,CACrB,IAAI,KACR"}`
};
const Dimensions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $selectedElements, $$unsubscribe_selectedElements;
  let $$unsubscribe_lassoElements;
  let $selectedId, $$unsubscribe_selectedId;
  let $$unsubscribe_isLasso;
  let $$unsubscribe_svg;
  let $$unsubscribe_activeElement;
  let $$unsubscribe_selectedControl1;
  let $$unsubscribe_selectedControl0;
  let $$unsubscribe_selectedVertex;
  let $$unsubscribe_elementsNode;
  let $$unsubscribe_boundingBox;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_lassoElements = subscribe(lassoElements, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_isLasso = subscribe(isLasso, (value) => value);
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_activeElement = subscribe(activeElement, (value) => value);
  $$unsubscribe_selectedControl1 = subscribe(selectedControl1, (value) => value);
  $$unsubscribe_selectedControl0 = subscribe(selectedControl0, (value) => value);
  $$unsubscribe_selectedVertex = subscribe(selectedVertex, (value) => value);
  $$unsubscribe_elementsNode = subscribe(elementsNode, (value) => value);
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => value);
  $$result.css.add(css$7);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$elements && $selectedId && $elements[$selectedId] || $selectedElements.length > 0 ? `<article class="svelte-129kmub">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-1n9i2by">Distribute on path</h4> <ol style="margin:0" data-svelte-h="svelte-8xihsf"><li>Select Elements or Lasso elements</li> <li>Select target path.</li> <li>Click on this button</li></ol>`;
          }
        })} ${validate_component(Actions$1, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Distribute on path`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-108i06h">Distribute on grid</h4> <ol style="margin:0" data-svelte-h="svelte-klzor5"><li>Select Elements or Lasso elements</li> <li>Click on this button and enter grid details.</li></ol>`;
          }
        })} ${validate_component(Actions$1, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Distribute on grid`;
              }
            })}`;
          }
        })}`;
      }
    })} ${``}</article>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedElements();
  $$unsubscribe_lassoElements();
  $$unsubscribe_selectedId();
  $$unsubscribe_isLasso();
  $$unsubscribe_svg();
  $$unsubscribe_activeElement();
  $$unsubscribe_selectedControl1();
  $$unsubscribe_selectedControl0();
  $$unsubscribe_selectedVertex();
  $$unsubscribe_elementsNode();
  $$unsubscribe_boundingBox();
  return $$rendered;
});
const AttributeOperations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showAppearance = false } = $$props;
  let { showDimensions = false } = $$props;
  let { showLayers = false } = $$props;
  let { showFilters = false } = $$props;
  let { showMasks = false } = $$props;
  let { showMarkers = false } = $$props;
  if ($$props.showAppearance === void 0 && $$bindings.showAppearance && showAppearance !== void 0) $$bindings.showAppearance(showAppearance);
  if ($$props.showDimensions === void 0 && $$bindings.showDimensions && showDimensions !== void 0) $$bindings.showDimensions(showDimensions);
  if ($$props.showLayers === void 0 && $$bindings.showLayers && showLayers !== void 0) $$bindings.showLayers(showLayers);
  if ($$props.showFilters === void 0 && $$bindings.showFilters && showFilters !== void 0) $$bindings.showFilters(showFilters);
  if ($$props.showMasks === void 0 && $$bindings.showMasks && showMasks !== void 0) $$bindings.showMasks(showMasks);
  if ($$props.showMarkers === void 0 && $$bindings.showMarkers && showMarkers !== void 0) $$bindings.showMarkers(showMarkers);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showAppearance ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `tune`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          yPos: "above",
          style: "min-width:fit-content;"
        },
        {},
        {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Styles`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showDimensions ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `picture_in_picture`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { style: "min-width:fit-content;" }, {}, {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Transforms`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showFilters ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `blur_on`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { style: "min-width:fit-content;" }, {}, {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Filters`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showMarkers ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `arrow_right_alt`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { style: "min-width:fit-content;" }, {}, {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Markers`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showMasks ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `masks`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { style: "min-width:fit-content;" }, {}, {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Masks`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          style: "background:" + (showLayers ? "rgba(255, 255, 255, 0.5)" : "none")
        },
        {},
        {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `layers`;
              }
            })}`;
          }
        }
      )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { style: "min-width:fit-content;" }, {}, {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Layers`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
const LayerDrawing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $BBOX, $$unsubscribe_BBOX;
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => $BBOX = value);
  $$unsubscribe_BBOX();
  return `<svg width="100%" height="100%" viewBox="${escape(parseFloat($BBOX.x), true) + " " + escape(parseFloat($BBOX.y), true) + " " + escape(parseFloat($BBOX.width), true) + " " + escape(parseFloat($BBOX.height), true)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${slots.default ? slots.default({}) : ``}</svg>`;
});
const LayerText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `${text.isTextOnPath ? `<text${add_attribute("fill", text.fill, 0)} font-size="${escape(text.fontSize, true) + "px"}"${add_attribute("font-weight", text.fontWeight, 0)}${add_attribute("font-family", text.fontFamily || "Roboto, sans-serif", 0)}${add_attribute("filter", text.filter, 0)}${add_attribute("opacity", text.opacity, 0)}${add_attribute("vector-effect", text.vectorEffect, 0)} transform="${"matrix(" + escape(text.tm.a, true) + " " + escape(text.tm.b, true) + " " + escape(text.tm.c, true) + " " + escape(text.tm.d, true) + " " + escape(text.tm.e, true) + " " + escape(text.tm.f, true) + ")"}"><textPath href="${"#" + escape(text.href, true)}" startOffset="${escape(text.startOffset, true) + "%"}">${escape(text.content)}</textPath></text>` : `<text${add_attribute("x", text.x, 0)}${add_attribute("y", text.y, 0)}${add_attribute("fill", text.fill, 0)} font-size="${escape(text.fontSize, true) + "px"}"${add_attribute("font-weight", text.fontWeight, 0)}${add_attribute("font-family", text.fontFamily || "Roboto, sans-serif", 0)}${add_attribute("filter", text.filter, 0)}${add_attribute("opacity", text.opacity, 0)} transform="${"matrix(" + escape(text.tm.a, true) + " " + escape(text.tm.b, true) + " " + escape(text.tm.c, true) + " " + escape(text.tm.d, true) + " " + escape(text.tm.e, true) + " " + escape(text.tm.f, true) + ")"}">${escape(text.content)}</text>`}`;
});
const LayerElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_elements();
  return `${$elements && id && $elements[id] ? `${$elements[id].tag === "line" ? `${validate_component(PreviewLine, "PreviewLine").$$render($$result, { line: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "rect" ? `${validate_component(PreviewRect, "PreviewRect").$$render($$result, { rect: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "circle" ? `${validate_component(PreviewCircle, "PreviewCircle").$$render($$result, { circle: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "ellipse" ? `${validate_component(PreviewEllipse, "PreviewEllipse").$$render($$result, { ellipse: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "regular" ? `${validate_component(PreviewRegular, "PreviewRegular").$$render($$result, { regular: $elements[id] }, {}, {})}` : ``}  ${$elements[id].tag === "path" ? `${validate_component(PreviewPath, "PreviewPath").$$render($$result, { path: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "text" ? `${validate_component(PreviewText, "PreviewText").$$render($$result, { text: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "latex" ? `${validate_component(PreviewLatex, "PreviewLatex").$$render($$result, { latex: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "grid" ? `${validate_component(PreviewGrid, "PreviewGrid").$$render($$result, { grd: $elements[id] }, {}, {})}` : ``} ${$elements[id].tag === "image" ? `${validate_component(PreviewImage, "PreviewImage").$$render($$result, { image: $elements[id] }, {}, {})}` : ``}` : ``}`;
});
const css$6 = {
  code: ".element.svelte-kni3a2{align-items:center;justify-content:space-between;display:flex;align-items:center}.strong.svelte-kni3a2{font-weight:bold;color:red}span.svelte-kni3a2{padding:0 0 0 0.5em;cursor:pointer}.rect.svelte-kni3a2{display:inline-flex;width:50px;align-items:center}.actions.svelte-kni3a2{display:flex;align-items:center;gap:0.5em}.action.svelte-kni3a2{font-size:1.5em;padding:0}",
  map: `{"version":3,"file":"Element.svelte","sources":["Element.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n\\t//@ts-nocheck\\r\\n\\timport LayerDrawing from \\"$lib/vectorial/pages/layer/LayerDrawing.svelte\\";\\r\\n\\timport LayerText from \\"$lib/vectorial/pages/layer/LayerText.svelte\\";\\r\\n\\timport LayerPath from \\"$lib/vectorial/pages/layer/LayerPath.svelte\\";\\r\\n\\timport {selectedId, onSVG} from './stores';\\r\\n\\timport {selectedElements, elements, canvasBackground} from './stores';\\r\\n    import LayerElement from \\"$lib/vectorial/pages/layer/LayerElement.svelte\\";\\r\\n\\texport let id;\\r\\n\\tconst getIndex = (id) => {\\r\\n\\t\\tif(!$selectedElements) $selectedElements = [];\\r\\n\\t\\tlet index = -1;\\r\\n\\t\\tfor(let i = 0; i < $selectedElements.length; i++) {\\r\\n\\t\\t\\tif($selectedElements[i] === id) {\\r\\n\\t\\t\\t\\tindex = i;\\r\\n\\t\\t\\t\\treturn index;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\treturn index;\\r\\n\\t}\\r\\n\\tconst getInd = (a, arr) => {\\r\\n        if (!arr || arr.length === 0) return -1;\\r\\n        let index = -1;\\r\\n        for (let i = 0; i < arr.length; i++) {\\r\\n            if (a === arr[i]) index = i;\\r\\n        }\\r\\n        return index;\\r\\n    };\\r\\n\\tconst toggleSelection = () => {\\r\\n\\t\\t$onSVG = false;\\r\\n\\t\\t$selectedId = id;\\r\\n\\t\\tlet index = getIndex(id);\\r\\n\\r\\n\\t\\tif(index !== -1) {\\r\\n\\t\\t\\t$selectedElements.splice(index, 1);\\r\\n\\t\\t\\t$selectedId = null;\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t$selectedElements = [...$selectedElements, id];\\r\\n\\t\\t}\\r\\n\\t\\t$selectedElements = $selectedElements;\\r\\n\\t}\\r\\n\\tconst toggleLock = () => {\\r\\n\\t\\t$elements[id].isLocked = !$elements[id].isLocked;\\r\\n\\t}\\r\\n\\tconst movePosition = (dir) => {\\r\\n\\t\\t$selectedId = id;\\r\\n        if($elements[$selectedId].parent.includes('SVG')) {\\r\\n            //rearrange the Layers\\r\\n            let layerIndex = $elements.Layers.indexOf($selectedId);\\r\\n            switch(dir) {\\r\\n                case 'up': {\\r\\n                    if(layerIndex === $elements.Layers.length - 1) return;\\r\\n                    let temp = $elements.Layers[layerIndex + 1];\\r\\n                    $elements.Layers[layerIndex + 1] = $elements.Layers[layerIndex];\\r\\n                    $elements.Layers[layerIndex] = temp;\\r\\n                    $elements = $elements;\\r\\n                    break;\\r\\n                }\\r\\n                case 'down': {\\r\\n                    if(layerIndex === 0) return;\\r\\n                    let temp = $elements.Layers[layerIndex - 1];\\r\\n                    $elements.Layers[layerIndex - 1] = $elements.Layers[layerIndex];\\r\\n                    $elements.Layers[layerIndex] = temp;\\r\\n                    $elements = $elements;\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n            return;\\r\\n        }\\r\\n\\t\\t\\r\\n        let parent = $elements[$selectedId].parent;\\r\\n        let children = $elements[parent].children;\\r\\n        let index = getInd($selectedId, children);\\r\\n        switch (dir) {\\r\\n            case \\"up\\": {\\r\\n                if (index === children.length - 1) return;\\r\\n                let temp = children[index + 1];\\r\\n                children[index + 1] = children[index];\\r\\n                children[index] = temp;\\r\\n                $elements[parent].children = children;\\r\\n                $elements = $elements;\\r\\n                break;\\r\\n            }\\r\\n            case \\"down\\": {\\r\\n                if (index === 0) return;\\r\\n                let temp = children[index - 1];\\r\\n                children[index - 1] = children[index];\\r\\n                children[index] = temp;\\r\\n                $elements[parent].children = children;\\r\\n                $elements = $elements;\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n<\/script>\\r\\n<div class=\\"element\\">\\r\\n\\t\\r\\n\\t<span class=\\"rect\\" on:click={toggleSelection} style=\\"background: {$canvasBackground};\\">\\r\\n\\t\\t<LayerDrawing>\\r\\n\\t\\t\\t<LayerElement {id} />\\r\\n\\t\\t</LayerDrawing>\\r\\n\\t</span>\\r\\n\\t\\r\\n\\t\\t<!-- <span on:click={toggleSelection}>{id.split(\\"-\\")[0] + id.split(\\"-\\")[2]}</span> -->\\r\\n\\t\\r\\n\\t<span class=\\"{$selectedElements?.indexOf(id) > -1 || $selectedId === id ? 'strong':''}\\" contenteditable=\\"true\\" bind:textContent={$elements[id].name}></span>\\r\\n\\t<span class=\\"actions\\">\\r\\n\\t\\t<span class=\\"material-icons action\\" on:click={() => movePosition(\\"down\\")}>arrow_downward</span>\\r\\n\\t\\t<span class=\\"material-icons action\\" on:click={() => movePosition(\\"up\\")}>arrow_upward</span>\\r\\n\\t\\t<span on:click={toggleLock} class=\\"material-icons action\\">{$elements[id].isLocked ? 'lock' : 'lock_open'}</span>\\r\\n\\t\\t<!-- <span on:click={toggleLock} class=\\"material-icons action\\">{$elements[id].isLocked ? 'visibility' : 'visibility_off'}</span> -->\\r\\n\\t</span>\\r\\n\\t\\r\\n</div>\\r\\n\\r\\n<!-- <span style=\\"background-image: url(/tutorial/icons/{type}.svg)\\">{id}</span> -->\\r\\n\\r\\n<style>\\r\\n\\t.element {\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\t/* grid-template-columns: 50px 1fr 32px; */\\r\\n\\t\\t/* display: flex;\\r\\n\\t\\tflex-direction: row; */\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\t.strong {\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tcolor: red;\\r\\n\\t}\\r\\n\\tspan {\\r\\n\\t\\tpadding: 0 0 0 0.5em;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\t.rect {\\r\\n\\t\\tdisplay: inline-flex;\\r\\n\\t\\twidth: 50px;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n\\t.actions {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tgap: 0.5em;\\r\\n\\t}\\r\\n\\t.action {\\r\\n\\t\\tfont-size: 1.5em;\\r\\n\\t\\tpadding:0;\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAsHC,sBAAS,CACR,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CAIb,WAAW,CAAE,MACd,CACA,qBAAQ,CACP,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,GACR,CACA,kBAAK,CACJ,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CACpB,MAAM,CAAE,OACT,CACA,mBAAM,CACL,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MACd,CACA,sBAAS,CACR,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACN,CACA,qBAAQ,CACP,SAAS,CAAE,KAAK,CAChB,QAAQ,CACT"}`
};
const Element = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $selectedElements, $$unsubscribe_selectedElements;
  let $$unsubscribe_onSVG;
  let $canvasBackground, $$unsubscribe_canvasBackground;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_onSVG = subscribe(onSVG, (value) => value);
  $$unsubscribe_canvasBackground = subscribe(canvasBackground, (value) => $canvasBackground = value);
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$result.css.add(css$6);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_selectedElements();
  $$unsubscribe_onSVG();
  $$unsubscribe_canvasBackground();
  return `<div class="element svelte-kni3a2"><span class="rect svelte-kni3a2" style="${"background: " + escape($canvasBackground, true) + ";"}">${validate_component(LayerDrawing, "LayerDrawing").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LayerElement, "LayerElement").$$render($$result, { id }, {}, {})}`;
    }
  })}</span>  <span class="${escape(
    null_to_empty($selectedElements?.indexOf(id) > -1 || $selectedId === id ? "strong" : ""),
    true
  ) + " svelte-kni3a2"}" contenteditable="true">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)($elements[id].name)}</span> <span class="actions svelte-kni3a2"><span class="material-icons action svelte-kni3a2" data-svelte-h="svelte-1c8iefk">arrow_downward</span> <span class="material-icons action svelte-kni3a2" data-svelte-h="svelte-s3as50">arrow_upward</span> <span class="material-icons action svelte-kni3a2">${escape($elements[id].isLocked ? "lock" : "lock_open")}</span> </span></div> `;
});
const css$5 = {
  code: ".element.svelte-pv5shr.svelte-pv5shr{display:grid;grid-template-columns:1fr 1fr 40px;align-items:center;background:rgba(255, 0, 0, 0.1);padding:0.5em 0;margin:0.5em 0}.element.svelte-pv5shr span.svelte-pv5shr{padding:0 0 0 1em;cursor:pointer}ul.svelte-pv5shr.svelte-pv5shr{padding:0 0 0 0.1em;margin:0 0 0 0.5em;list-style:none;border-left:5px solid #b0b0b0;display:flex;flex-direction:column;gap:0.1em}li.svelte-pv5shr.svelte-pv5shr{background:rgba(0, 0, 0, 0.1);padding:0.2em 0}.rect.svelte-pv5shr.svelte-pv5shr{display:inline-flex;width:50px;align-items:center}",
  map: `{"version":3,"file":"LayerGroup.svelte","sources":["LayerGroup.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n\\t//@ts-nocheck\\r\\n\\timport List, {\\r\\n\\t\\tItem,\\r\\n\\t\\tGraphic,\\r\\n\\t\\tMeta,\\r\\n\\t\\tText,\\r\\n\\t\\tPrimaryText,\\r\\n\\t\\tSecondaryText,\\r\\n\\t} from \\"@smui/list\\";\\r\\n\\timport Button, { Label } from \\"@smui/button\\";\\r\\n\\timport Element from \\"./Element.svelte\\";\\r\\n\\timport LayerDrawing from \\"$lib/vectorial/pages/layer/LayerDrawing.svelte\\";\\r\\n\\timport LayerText from \\"$lib/vectorial/pages/layer/LayerText.svelte\\";\\r\\n\\timport { elements, selectedId, canvasBackground } from \\"./stores\\";\\r\\n\\texport let expanded = false;\\r\\n\\texport let id;\\r\\n\\r\\n\\tfunction toggle() {\\r\\n\\t\\t$selectedId = id;\\r\\n\\t\\texpanded = !expanded;\\r\\n\\t}\\r\\n\\tconst toggleLock = () => {\\r\\n\\t\\t$elements[id].isLocked = !$elements[id].isLocked;\\r\\n\\t};\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"element\\">\\r\\n\\t{#if $elements[id].tag === 'text'}\\r\\n\\t\\t<span class=\\"rect\\" on:click={toggle} style=\\"background: {$canvasBackground};\\">\\r\\n\\t\\t\\t<LayerDrawing>\\r\\n\\t\\t\\t\\t\\r\\n\\t\\t\\t\\t\\t<LayerText text={$elements[id]} />\\r\\n\\t\\t\\t\\t\\r\\n\\t\\t\\t</LayerDrawing>\\r\\n\\t\\t</span>\\r\\n\\t{:else}\\r\\n\\t\\t<span on:click={toggle}>{id.split(\\"-\\")[0] + id.split(\\"-\\")[2]}</span>\\r\\n\\t{/if}\\r\\n\\t<span contenteditable=\\"true\\" bind:textContent={$elements[id].name} />\\r\\n\\t<span on:click={toggleLock} class=\\"material-icons\\" style=\\"font-size: 1.5em\\"\\r\\n\\t\\t>{$elements[id].isLocked ? \\"lock\\" : \\"lock_open\\"}</span\\r\\n\\t>\\r\\n</div>\\r\\n\\r\\n{#if expanded}\\r\\n\\t<ul>\\r\\n\\t\\t{#each $elements[id]?.children as element}\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t{#if $elements[element].children}\\r\\n\\t\\t\\t\\t\\t<svelte:self id={element} />\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<Element id={element} />\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t{/each}\\r\\n\\t</ul>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\t.element {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 1fr 1fr 40px;\\r\\n\\t\\t/* display: flex;\\r\\n\\t\\tflex-direction: row; */\\r\\n\\t\\talign-items: center;\\r\\n\\t\\t/* justify-content: space-between; */\\r\\n\\t\\tbackground: rgba(255, 0, 0, 0.1);\\r\\n\\t\\tpadding: 0.5em 0;\\r\\n\\t\\tmargin: 0.5em 0;\\r\\n\\t\\t\\r\\n\\t}\\r\\n\\t.element span {\\r\\n\\t\\tpadding: 0 0 0 1em;\\r\\n\\t\\t/* background: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat; */\\r\\n\\t\\t/* background-size: 1em 1em; */\\r\\n\\t\\t/* font-weight: bold; */\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\r\\n\\t/* .expanded {\\r\\n\\t\\tbackground-image: url(/tutorial/icons/folder-open.svg);\\r\\n\\t} */\\r\\n\\r\\n\\tul {\\r\\n\\t\\tpadding: 0 0 0 0.1em;\\r\\n\\t\\tmargin: 0 0 0 0.5em;\\r\\n\\t\\tlist-style: none;\\r\\n\\t\\tborder-left: 5px solid #b0b0b0;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\tgap: 0.1em;\\r\\n\\t}\\r\\n\\r\\n\\tli {\\r\\n\\t\\tbackground: rgba(0, 0, 0, 0.1);\\r\\n\\t\\tpadding: 0.2em 0;\\r\\n\\t}\\r\\n\\t.rect {\\r\\n\\t\\tdisplay: inline-flex;\\r\\n\\t\\twidth: 50px;\\r\\n\\t\\talign-items: center;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4DC,oCAAS,CACR,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAGnC,WAAW,CAAE,MAAM,CAEnB,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAChC,OAAO,CAAE,KAAK,CAAC,CAAC,CAChB,MAAM,CAAE,KAAK,CAAC,CAEf,CACA,sBAAQ,CAAC,kBAAK,CACb,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAIlB,MAAM,CAAE,OACT,CAMA,8BAAG,CACF,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CACpB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CACnB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KACN,CAEA,8BAAG,CACF,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,OAAO,CAAE,KAAK,CAAC,CAChB,CACA,iCAAM,CACL,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MACd"}`
};
const LayerGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $$unsubscribe_selectedId;
  let $canvasBackground, $$unsubscribe_canvasBackground;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_canvasBackground = subscribe(canvasBackground, (value) => $canvasBackground = value);
  let { expanded = false } = $$props;
  let { id } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$result.css.add(css$5);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_canvasBackground();
  return `<div class="element svelte-pv5shr">${$elements[id].tag === "text" ? `<span class="rect svelte-pv5shr" style="${"background: " + escape($canvasBackground, true) + ";"}">${validate_component(LayerDrawing, "LayerDrawing").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LayerText, "LayerText").$$render($$result, { text: $elements[id] }, {}, {})}`;
    }
  })}</span>` : `<span class="svelte-pv5shr">${escape(id.split("-")[0] + id.split("-")[2])}</span>`} <span contenteditable="true" class="svelte-pv5shr">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)($elements[id].name)}</span> <span class="material-icons svelte-pv5shr" style="font-size: 1.5em">${escape($elements[id].isLocked ? "lock" : "lock_open")}</span></div> ${expanded ? `<ul class="svelte-pv5shr">${each($elements[id]?.children, (element) => {
    return `<li class="svelte-pv5shr">${$elements[element].children ? `${validate_component(LayerGroup, "svelte:self").$$render($$result, { id: element }, {}, {})}` : `${validate_component(Element, "Element").$$render($$result, { id: element }, {}, {})}`} </li>`;
  })}</ul>` : ``}`;
});
const css$4 = {
  code: "article.svelte-wuz9vt{width:300px}.attributeGroup.svelte-wuz9vt{background:rgb(184, 183, 183);border-radius:10px;color:rgb(3, 3, 3);padding:1em;margin:1em 0}.iconButton.svelte-wuz9vt{font-size:1.5em;background:rgba(0, 0, 0, 0.1);cursor:pointer}",
  map: `{"version":3,"file":"Layers.svelte","sources":["Layers.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    //@ts-nocheck\\r\\n    import MenuSurface from \\"@smui/menu-surface\\";\\r\\n    import Paper, { Subtitle } from '@smui/paper';\\r\\n    import Chip, { Set, TrailingAction, Text } from \\"@smui/chips\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import {\\r\\n        elements,\\r\\n        selectedId,\\r\\n        selectedElements,\\r\\n        currentLayer,\\r\\n        objectCount,\\r\\n        DRAWING,\\r\\n    } from \\"./stores\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import LayerGroup from \\"./LayerGroup.svelte\\";\\r\\n    import { Group } from \\"$lib/vectorial/utils/common/g\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { ripple } from \\"$lib/vectorial/ui/ripple\\";\\r\\n    const getIndex = (a, arr) => {\\r\\n        if (!arr || arr.length === 0) return -1;\\r\\n        let index = -1;\\r\\n        for (let i = 0; i < arr.length; i++) {\\r\\n            if (a === arr[i]) index = i;\\r\\n        }\\r\\n        return index;\\r\\n    };\\r\\n    const compareFn = (a, b) => {\\r\\n        //a={id, name, parent,tag,layer,children?}\\r\\n\\r\\n        if ($elements[a].parent === $elements[b].parent) {\\r\\n            let ia = getIndex(a, $elements[$elements[a].parent].children);\\r\\n            let ib = getIndex(b, $elements[$elements[b].parent].children);\\r\\n            return ia - ib;\\r\\n        } else {\\r\\n            // let la = $elements[groupIda].treeNode.elements.length;\\r\\n            // let lb = $elements[groupIdb].treeNode.elements.length;\\r\\n            // if(la !== lb) return la - lb;\\r\\n            return compareFn($elements[a].parent, $elements[b].parent);\\r\\n        }\\r\\n    };\\r\\n    const sortSelection = () => {\\r\\n        $selectedElements.sort(compareFn);\\r\\n        $selectedElements = $selectedElements;\\r\\n    };\\r\\n    const deleteElementsFromLayer = (elementList) => {\\r\\n        elementList.forEach((item) => {\\r\\n            let index = getIndex(\\r\\n                item,\\r\\n                $elements[$elements[item].parent].children\\r\\n            );\\r\\n            $elements[$elements[item].parent].children.splice(index, 1);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const createGroup = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        // if($elements.Layers.length > 0) {\\r\\n        //     if($elements.Layers[0] === 'Layer-'+$DRAWING.drawingID + '-0') {\\r\\n        //         layer = 'Layer-' + $currentLayer;\\r\\n        //     }\\r\\n        // }\\r\\n        let group = new Group({\\r\\n            id: \\"Group-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            parent: layer,\\r\\n            layer: layer,\\r\\n        });\\r\\n        $elements[group.id] = group;\\r\\n\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        sortSelection();\\r\\n\\r\\n        deleteElementsFromLayer($selectedElements); //remove references from parents\\r\\n        $elements[group.parent].children.push(group.id);\\r\\n        //update elements in $selectedElements\\r\\n        $selectedElements.forEach((elem) => {\\r\\n            $elements[elem].layer = group.layer;\\r\\n            $elements[elem].parent = group.id;\\r\\n            $elements[elem].isLocked = true;\\r\\n            group.children.push(elem);\\r\\n            //tm of the element\\r\\n            // $elements[elem.id].tm = new DOMMatrix([\\r\\n            //     $elements[elem.id].CTM.a, $elements[elem.id].CTM.b, $elements[elem.id].CTM.c, $elements[elem.id].CTM.d, $elements[elem.id].CTM.e, $elements[elem.id].CTM.f\\r\\n            // ]);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedElements = [];\\r\\n    };\\r\\n    const compareHCorners = (a, b) => {\\r\\n        return a.tl.x - b.tl.x;\\r\\n    };\\r\\n    const compareVCorners = (a, b) => {\\r\\n        return a.tl.y - b.tl.y;\\r\\n    };\\r\\n    const distributeElements = (dir) => {\\r\\n        let corners = [];\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n            corners = [\\r\\n                ...corners,\\r\\n                {\\r\\n                    id: $selectedElements[i],\\r\\n                    tl: $elements[$selectedElements[i]].sbox.tl,\\r\\n                },\\r\\n            ];\\r\\n        }\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                corners.sort(compareHCorners);\\r\\n                let D = corners[corners.length - 1].tl.x - corners[0].tl.x;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(sum + i * gap, corners[0].tl.y));\\r\\n\\r\\n                    dx = sum + i * gap + corners[0].tl.x - corners[i].tl.x;\\r\\n                    dy = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                corners.sort(compareVCorners);\\r\\n\\r\\n                let D = corners[corners.length - 1].tl.y - corners[0].tl.y;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(corners[0].tl.y, sum + i * gap));\\r\\n\\r\\n                    dy = sum + i * gap + corners[0].tl.y - corners[i].tl.y;\\r\\n                    dx = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    const alignElements = (dir, ancor) => {\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        let dx = 0,\\r\\n            dy = 0;\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"L\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].axis.x -\\r\\n                                $elements[$selectedElements[i]].axis.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"R\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tr.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tr.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"T\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.y -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].axis.y -\\r\\n                                $elements[$selectedElements[i]].axis.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"B\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.br.y -\\r\\n                                $elements[$selectedElements[i]].sbox.br.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    // function addInputChip() {\\r\\n    //     if (input.length) {\\r\\n    //         input.push(input[input.length - 1] + 1);\\r\\n    //         input = input;\\r\\n    //     } else {\\r\\n    //         input.push(1);\\r\\n    //         input = input;\\r\\n    //     }\\r\\n    // }\\r\\n    const selectedIndex = (id) => {\\r\\n\\t\\tlet index = -1;\\r\\n\\t\\tfor(let i = 0; i < $selectedElements.length; i++) {\\r\\n\\t\\t\\tif($selectedElements[i] === id) {\\r\\n\\t\\t\\t\\tindex = i;\\r\\n\\t\\t\\t\\treturn index;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\treturn index;\\r\\n\\t}\\r\\n    const updateSelection = (id) => {\\r\\n        let index = selectedIndex(id);\\r\\n\\r\\n\\t\\tif(index !== -1) {\\r\\n\\t\\t\\t$selectedElements.splice(index, 1);\\r\\n\\t\\t\\t$selectedId = null;\\r\\n\\t\\t}\\r\\n        $selectedElements = $selectedElements;\\r\\n        // console.log($selectedElements)\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<article>\\r\\n<!-- <MenuSurface static style=\\"width: 100%;padding-top: 1em; overflow:auto;max-height:100vh;\\"> -->\\r\\n    <Paper>\\r\\n        {#each $elements?.Layers as layer}\\r\\n            <LayerGroup id={layer} expanded />\\r\\n        {/each}\\r\\n        {#if $selectedElements?.length > 0}\\r\\n            <h3 class=\\"mdc-typography--headline6\\">Selected elements</h3>\\r\\n            <Set bind:chips={$selectedElements} let:chip input>\\r\\n                <Chip {chip}>\\r\\n                    <Text>{chip.split('-')[0]+chip.split('-')[2]}</Text>\\r\\n                    <TrailingAction icon$class=\\"material-icons\\" \\r\\n                        >cancel</TrailingAction\\r\\n                    >\\r\\n                </Chip>\\r\\n            </Set>\\r\\n\\r\\n            <!-- {#each $selectedElements as elem}\\r\\n                <span\\r\\n                    >{elem.split(\\"-\\")[0] + elem.split(\\"-\\")[2]}\\r\\n                    {$elements[elem].name}\\r\\n                </span>\\r\\n            {/each} -->\\r\\n            <br />\\r\\n            <Button on:click={createGroup}>\\r\\n                <Label>Make Group</Label>\\r\\n            </Button>\\r\\n            <div\\r\\n                class=\\"attributeGroup\\"\\r\\n                style=\\"display:flex; justify-content: space-between;gap:0.5em;\\"\\r\\n            >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => distributeElements(\\"H\\")}\\r\\n                    title=\\"Distribute horizontally\\">horizontal_distribute</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => distributeElements(\\"V\\")}\\r\\n                    title=\\"Distribute vertically\\">vertical_distribute</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"H\\", \\"L\\")}\\r\\n                    title=\\"Align horizontal left\\">align_horizontal_left</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"H\\", \\"C\\")}\\r\\n                    title=\\"Align horizontal center\\">align_horizontal_center</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"H\\", \\"R\\")}\\r\\n                    title=\\"Align horizontal right\\">align_horizontal_right</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"V\\", \\"T\\")}\\r\\n                    title=\\"Align vertical top\\">align_vertical_top</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"V\\", \\"C\\")}\\r\\n                    title=\\"Align vertical center\\">align_vertical_center</span\\r\\n                >\\r\\n                <span\\r\\n                    class=\\"iconButton material-icons\\"\\r\\n                    use:ripple\\r\\n                    on:click={() => alignElements(\\"V\\", \\"B\\")}\\r\\n                    title=\\"Align vertical bottom\\">align_vertical_bottom</span\\r\\n                >\\r\\n            </div>\\r\\n        {/if}\\r\\n    </Paper>\\r\\n<!-- </MenuSurface> -->\\r\\n</article>\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n    }\\r\\n    .attributeGroup {\\r\\n        background: rgb(184, 183, 183);\\r\\n        border-radius: 10px;\\r\\n        color: rgb(3, 3, 3);\\r\\n        padding: 1em;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .iconButton {\\r\\n        font-size: 1.5em;\\r\\n        background: rgba(0, 0, 0, 0.1);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0XI,qBAAQ,CACJ,KAAK,CAAE,KACX,CACA,6BAAgB,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,yBAAY,CACR,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,OACZ"}`
};
const Layers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedElements, $$unsubscribe_selectedElements;
  let $$unsubscribe_selectedId;
  let $elements, $$unsubscribe_elements;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_currentLayer;
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_currentLayer = subscribe(currentLayer, (value) => value);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<article class="svelte-wuz9vt"> ${validate_component(Paper, "Paper").$$render($$result, {}, {}, {
      default: () => {
        return `${each($elements?.Layers, (layer) => {
          return `${validate_component(LayerGroup, "LayerGroup").$$render($$result, { id: layer, expanded: true }, {}, {})}`;
        })} ${$selectedElements?.length > 0 ? `<h3 class="mdc-typography--headline6" data-svelte-h="svelte-15j10tz">Selected elements</h3> ${validate_component(Set_1, "Set").$$render(
          $$result,
          { input: true, chips: $selectedElements },
          {
            chips: ($$value) => {
              $selectedElements = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ chip }) => {
              return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(chip.split("-")[0] + chip.split("-")[2])}`;
                    }
                  })} ${validate_component(TrailingAction, "TrailingAction").$$render($$result, { icon$class: "material-icons" }, {}, {
                    default: () => {
                      return `cancel`;
                    }
                  })}`;
                }
              })}`;
            }
          }
        )}  <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Make Group`;
              }
            })}`;
          }
        })} <div class="attributeGroup svelte-wuz9vt" style="display:flex; justify-content: space-between;gap:0.5em;"><span class="iconButton material-icons svelte-wuz9vt" title="Distribute horizontally" data-svelte-h="svelte-p8l53n">horizontal_distribute</span> <span class="iconButton material-icons svelte-wuz9vt" title="Distribute vertically" data-svelte-h="svelte-4ecbq1">vertical_distribute</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align horizontal left" data-svelte-h="svelte-nsbbvr">align_horizontal_left</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align horizontal center" data-svelte-h="svelte-7e1u2u">align_horizontal_center</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align horizontal right" data-svelte-h="svelte-16trt5d">align_horizontal_right</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align vertical top" data-svelte-h="svelte-9u2r1d">align_vertical_top</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align vertical center" data-svelte-h="svelte-ebuna8">align_vertical_center</span> <span class="iconButton material-icons svelte-wuz9vt" title="Align vertical bottom" data-svelte-h="svelte-16ur64j">align_vertical_bottom</span></div>` : ``}`;
      }
    })}  </article>`;
  } while (!$$settled);
  $$unsubscribe_selectedElements();
  $$unsubscribe_selectedId();
  $$unsubscribe_elements();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  $$unsubscribe_currentLayer();
  return $$rendered;
});
const css$3 = {
  code: "article.svelte-183zqnz{width:300px;display:flex;flex-direction:column;gap:0.5em}.filtertype.svelte-183zqnz{display:flex;flex-direction:row;gap:1em;align-items:center;margin-bottom:0.5em}.rect.svelte-183zqnz{display:flex;width:50px;height:2em;border:0.5px solid}.position.svelte-183zqnz{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:start}",
  map: `{"version":3,"file":"Filters.svelte","sources":["Filters.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import IconButton from '@smui/icon-button';\\r\\n    import Card, { Content } from '@smui/card'\\r\\n    import Slider from '$lib/vectorial/ui/Slider.svelte';\\r\\n    import FormField from '$lib/vectorial/ui/FormField.svelte';\\r\\n    import {selectedId, elements, defs, objectCount, DRAWING} from './stores';\\r\\n    \\r\\n    import Color from '$lib/vectorial/components/Color.svelte';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    \\r\\n    import {TextMask} from '$lib/vectorial/utils/common/textMask';\\r\\n    import {Shadow} from '$lib/vectorial/utils/common/shadow';\\r\\n    import {Blur} from '$lib/vectorial/utils/common/blur';\\r\\n    import {SpecularLighting} from '$lib/vectorial/utils/common/specularLighting';\\r\\n    import {DiffuseLighting} from '$lib/vectorial/utils/common/diffuseLighting';\\r\\n\\r\\n\\r\\n    //filter x, y, width, height\\r\\n    //shadow dx, dy, stdDeviation, floodcolor, floodopacity\\r\\n\\r\\n    let isNewShadow = false;\\r\\n    let isNewBlur = false;\\r\\n    let isNewSpecular = false;\\r\\n    let isNewDiffuse = false;\\r\\n    let isNewTextMask = false;\\r\\n    \\r\\n    let currentShadowId, currentBlurId, currentSpecularId, currentDiffuseId, currentTextMaskId;\\r\\n    \\r\\n    const createShadow = () => {\\r\\n        isNewShadow = true;\\r\\n        let sdo = new Shadow({id: 'Shadow-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[sdo.id] = sdo;\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo.id})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo.id})\` : \`url(#\${sdo.id})\`;\\r\\n        \\r\\n        currentShadowId = sdo.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveShadow = () => {\\r\\n        $defs = $defs\\r\\n        isNewShadow = false;\\r\\n    }\\r\\n    const removeShadow = (lgrad) => {\\r\\n        isNewShadow = false;\\r\\n        // delete $defs[lgrad]\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        filters = filters.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n        $elements[$selectedId]['filter'] = filters.join(' ');\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editShadow = (lgrad) => {\\r\\n        currentShadowId = lgrad;\\r\\n        isNewShadow = true;\\r\\n    }\\r\\n    \\r\\n    const setShadow = (sdo) => {\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo})\` : $elements[$selectedId]['filter'];\\r\\n        $elements = $elements;\\r\\n        // x1 = sdo.x1;\\r\\n        // x2 = sdo.x2;\\r\\n        // y1 = sdo.y1;\\r\\n        // y2 = sdo.y2;\\r\\n        // colors = sdo.colors;\\r\\n    }\\r\\n    const createBlur = () => {\\r\\n        isNewBlur = true;\\r\\n        let sdo = new Blur({id: 'Blur-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[sdo.id] = sdo;\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo.id})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo.id})\` : \`url(#\${sdo.id})\`;\\r\\n        \\r\\n        currentBlurId = sdo.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveBlur = () => {\\r\\n        $defs = $defs\\r\\n        isNewBlur = false;\\r\\n    }\\r\\n    const removeBlur = (lgrad) => {\\r\\n        isNewBlur = false;\\r\\n        // delete $defs[lgrad]\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        filters = filters.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n        $elements[$selectedId]['filter'] = filters.join(' ');\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editBlur = (lgrad) => {\\r\\n        currentBlurId = lgrad;\\r\\n        isNewBlur = true;\\r\\n    }\\r\\n    \\r\\n    const setBlur = (sdo) => {\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo})\` : $elements[$selectedId]['filter'];\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const createSpecular = () => {\\r\\n        isNewSpecular = true;\\r\\n        let sdo = new SpecularLighting({id: 'SpecularLighting-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[sdo.id] = sdo;\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo.id})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo.id})\` : \`url(#\${sdo.id})\`;\\r\\n        \\r\\n        currentSpecularId = sdo.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveSpecular = () => {\\r\\n        $defs = $defs\\r\\n        isNewSpecular = false;\\r\\n    }\\r\\n    const removeSpecular = (lgrad) => {\\r\\n        isNewSpecular = false;\\r\\n        // delete $defs[lgrad]\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        filters = filters.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n        $elements[$selectedId]['filter'] = filters.join(' ');\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editSpecular = (lgrad) => {\\r\\n        currentSpecularId = lgrad;\\r\\n        isNewSpecular = true;\\r\\n    }\\r\\n    \\r\\n    const setSpecular = (sdo) => {\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo})\` : $elements[$selectedId]['filter'];\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const createDiffuse = () => {\\r\\n        isNewDiffuse = true;\\r\\n        let sdo = new DiffuseLighting({id: 'DiffuseLighting-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n    \\r\\n        $defs[sdo.id] = sdo;\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo.id})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo.id})\` : \`url(#\${sdo.id})\`;\\r\\n        \\r\\n        currentDiffuseId = sdo.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n        $objectCount++;\\r\\n    }\\r\\n    const saveDiffuse = () => {\\r\\n        $defs = $defs\\r\\n        isNewDiffuse = false;\\r\\n    }\\r\\n    const removeDiffuse = (lgrad) => {\\r\\n        isNewDiffuse = false;\\r\\n        // delete $defs[lgrad]\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        filters = filters.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n        $elements[$selectedId]['filter'] = filters.join(' ');\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editDiffuse = (lgrad) => {\\r\\n        currentDiffuseId = lgrad;\\r\\n        isNewDiffuse = true;\\r\\n    }\\r\\n    \\r\\n    const setDiffuse = (sdo) => {\\r\\n        let filters = $elements[$selectedId]['filter'].split(' ');\\r\\n        let included = filters.indexOf(\`url(#\${sdo})\`);\\r\\n        if($elements[$selectedId]['filter'] === 'none') {\\r\\n            $elements[$selectedId]['filter'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + \`url(#\${sdo})\` : $elements[$selectedId]['filter'];\\r\\n        $elements = $elements;\\r\\n    }\\r\\n\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    .filtertype {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n    .rect {\\r\\n        display: flex;\\r\\n        width: 50px;\\r\\n        height: 2em;\\r\\n        border: 0.5px solid;\\r\\n    }\\r\\n    .position {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        flex-wrap: wrap;\\r\\n        align-items: center;\\r\\n        justify-content: start;\\r\\n        /* gap: 1em; */\\r\\n        /* margin: 0.5em; */\\r\\n    }\\r\\n</style>\\r\\n{#if $selectedId}\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n        <!-- <h4>Shadow</h4> -->\\r\\n        \\r\\n        <!-- <ColorsInUse fillStroke={selected}/> -->\\r\\n        \\r\\n        <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Shadows</h4>\\r\\n        <DataTable table$aria-label=\\"Shadows\\" style=\\"width: 100%;\\">\\r\\n            <Body>\\r\\n                {#each Object.keys($defs) as sdo}\\r\\n                {#if $defs[sdo].tag === 'shadow'}\\r\\n                <Row>\\r\\n                    <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setShadow(sdo)}>\\r\\n                            <!-- svelte-ignore component-name-lowercase -->\\r\\n                            <defs>\\r\\n                                <filter id={sdo} x=\\"{$defs[sdo].x}%\\" y=\\"{$defs[sdo].y}%\\" width=\\"{$defs[sdo].width}%\\" height=\\"{$defs[sdo].height}%\\" >\\r\\n                                    <feDropShadow \\r\\n                                        dx={$defs[sdo].dx}\\r\\n                                        dy={$defs[sdo].dy}\\r\\n                                        stdDeviation={$defs[sdo].stdDeviation}\\r\\n                                        flood-color={$defs[sdo].floodcolor}\\r\\n                                        flood-opacity={$defs[sdo].floodopacity}\\r\\n                                    />\\r\\n                                </filter>\\r\\n                            </defs>\\r\\n                            <rect x=\\"0\\" y=\\"0\\" width=\\"25px\\" height=\\"1em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${sdo})\`}/>\\r\\n                        </svg>\\r\\n                    </span></Cell>\\r\\n                    <Cell>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => editShadow(sdo)}>edit</IconButton>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => removeShadow(sdo)}>delete</IconButton>\\r\\n                    </Cell>\\r\\n                </Row>\\r\\n                {/if}\\r\\n                {/each}\\r\\n            </Body>\\r\\n        </DataTable>\\r\\n        <br>\\r\\n        <Button on:click={createShadow}>New Shadow</Button>\\r\\n        {#if isNewShadow}\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">New Shadow</h4>\\r\\n            <div class=\\"filtertype\\">\\r\\n                <span class=\\"rect\\">\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                        <!-- svelte-ignore component-name-lowercase -->\\r\\n                        <defs>\\r\\n                            <filter id={currentShadowId} x=\\"{$defs[currentShadowId].x}%\\" y=\\"{$defs[currentShadowId].y}%\\" width=\\"{$defs[currentShadowId].width}%\\" height=\\"{$defs[currentShadowId].height}%\\" >\\r\\n                                <feDropShadow \\r\\n                                    dx={$defs[currentShadowId].dx}\\r\\n                                    dy={$defs[currentShadowId].dy}\\r\\n                                    stdDeviation={$defs[currentShadowId].stdDeviation}\\r\\n                                    flood-color={$defs[currentShadowId].floodcolor}\\r\\n                                    flood-opacity={$defs[currentShadowId].floodopacity}\\r\\n                                />\\r\\n                            </filter>\\r\\n                        </defs>\\r\\n                        <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${currentShadowId})\`}/>\\r\\n                    </svg>\\r\\n                </span>\\r\\n                <Button on:click={saveShadow}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            <div class=\\"position\\">\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].width} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        width\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].height} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        height\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].dx} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        dx\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].dy} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        dy\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].stdDeviation} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        Standard Deviation\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentShadowId].floodopacity} min={0} max={1} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        Opacity\\r\\n                    </span>\\r\\n                </FormField>\\r\\n            </div>\\r\\n            <Color noConfirm bind:background={$defs[currentShadowId].floodcolor} />\\r\\n        {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n        <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Blur</h4>\\r\\n        <DataTable table$aria-label=\\"Blur\\" style=\\"width: 100%;\\">\\r\\n            <Body>\\r\\n                {#each Object.keys($defs) as sdo}\\r\\n                {#if $defs[sdo].tag === 'blur'}\\r\\n                <Row>\\r\\n                    <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setBlur(sdo)}>\\r\\n                            <defs>\\r\\n                                <filter id={sdo} x=\\"{$defs[sdo].x}%\\" y=\\"{$defs[sdo].y}%\\" width=\\"{$defs[sdo].width}%\\" height=\\"{$defs[sdo].height}%\\">\\r\\n                                    <feGaussianBlur \\r\\n                                        in={$defs[sdo].input}\\r\\n                                        stdDeviation={$defs[sdo].stdDeviation}\\r\\n                                        edgeMode={$defs[sdo].edgeMode}\\r\\n                                    />\\r\\n                                </filter>\\r\\n                            </defs>\\r\\n                            <rect x=\\"0\\" y=\\"0\\" width=\\"25px\\" height=\\"1em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${sdo})\`}/>\\r\\n                        </svg>\\r\\n                    </span></Cell>\\r\\n                    <Cell>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => editBlur(sdo)}>edit</IconButton>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => removeBlur(sdo)}>delete</IconButton>\\r\\n                    </Cell>\\r\\n                </Row>\\r\\n                {/if}\\r\\n                {/each}\\r\\n            </Body>\\r\\n        </DataTable>\\r\\n        <br>\\r\\n        <Button on:click={createBlur}>New Blur</Button>\\r\\n        {#if isNewBlur}\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">New Blur</h4>\\r\\n            <div class=\\"filtertype\\">\\r\\n                <span class=\\"rect\\">\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                        <!-- svelte-ignore component-name-lowercase -->\\r\\n                        <defs>\\r\\n                            <filter id={currentBlurId} >\\r\\n                                <feGaussianBlur\\r\\n                                    in={$defs[currentBlurId].input}\\r\\n                                    stdDeviation={$defs[currentBlurId].stdDeviation}\\r\\n                                    edgeMode={$defs[currentBlurId].edgeMode}\\r\\n                                />\\r\\n                            </filter>\\r\\n                        </defs>\\r\\n                        <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${currentBlurId})\`}/>\\r\\n                    </svg>\\r\\n                </span>\\r\\n                <Button on:click={saveBlur}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            <div class=\\"position\\">\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentBlurId].x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentBlurId].y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentBlurId].width} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        width\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentBlurId].height} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        height\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentBlurId].stdDeviation} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        Standard Deviation\\r\\n                    </span>\\r\\n                </FormField>\\r\\n            </div>\\r\\n        {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n        <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Specular Lighting</h4>\\r\\n        <DataTable table$aria-label=\\"Specular Lighting\\" style=\\"width: 100%;\\">\\r\\n            <Body>\\r\\n                {#each Object.keys($defs) as sdo}\\r\\n                {#if $defs[sdo].tag === 'specularLighting'}\\r\\n                <Row>\\r\\n                    <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setSpecular(sdo)}>\\r\\n                            <!-- svelte-ignore component-name-lowercase -->\\r\\n                            <defs>\\r\\n                                <filter \\r\\n                                    id={sdo}\\r\\n                                    x='{$defs[sdo].x}%'\\r\\n                                    y='{$defs[sdo].y}%'\\r\\n                                    width='{$defs[sdo].width}%'\\r\\n                                    height='{$defs[sdo].height}%'\\r\\n                                >\\r\\n                                    <feSpecularLighting\\r\\n                                        result={$defs[sdo].result}\\r\\n                                        specularExponent={$defs[sdo].specularExponent}\\r\\n                                        specularConstant={$defs[sdo].specularConstant}\\r\\n                                        lighting-color={$defs[sdo].lightingColor}\\r\\n                                        surfaceScale={$defs[sdo].surfaceScale}\\r\\n                                    >\\r\\n                                        <fePointLight x={$defs[sdo].point.x} y={$defs[sdo].point.y} z={$defs[sdo].point.z}/>\\r\\n                                    </feSpecularLighting> \\r\\n                                    <feComposite\\r\\n                                    in={$defs[sdo].input}\\r\\n                                    in2={$defs[sdo].input2}\\r\\n                                    operator={$defs[sdo].operator}\\r\\n                                    k1={$defs[sdo].k1}\\r\\n                                    k2={$defs[sdo].k2}\\r\\n                                    k3={$defs[sdo].k3}\\r\\n                                    k4={$defs[sdo].k4} />\\r\\n                                </filter>\\r\\n                            </defs>\\r\\n                            <rect x=\\"0\\" y=\\"0\\" width=\\"25px\\" height=\\"1em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${sdo})\`}/>\\r\\n                        </svg>\\r\\n                    </span></Cell>\\r\\n                    <Cell>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => editSpecular(sdo)}>edit</IconButton>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => removeSpecular(sdo)}>delete</IconButton>\\r\\n                    </Cell>\\r\\n                </Row>\\r\\n                {/if}\\r\\n                {/each}\\r\\n            </Body>\\r\\n        </DataTable>\\r\\n        <br>\\r\\n        <Button on:click={createSpecular}>New Specular Lighting</Button>\\r\\n        {#if isNewSpecular}\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">New Specular Lighting</h4>\\r\\n            <div class=\\"filtertype\\">\\r\\n                <span class=\\"rect\\">\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                        <!-- svelte-ignore component-name-lowercase -->\\r\\n                        <defs>\\r\\n                            <filter \\r\\n                                id={currentSpecularId}\\r\\n                                x='{$defs[currentSpecularId].x}%'\\r\\n                                y='{$defs[currentSpecularId].y}%'\\r\\n                                width='{$defs[currentSpecularId].width}%'\\r\\n                                height='{$defs[currentSpecularId].height}%'\\r\\n                            >\\r\\n                                <feSpecularLighting\\r\\n                                    result={$defs[currentSpecularId].result}\\r\\n                                    specularExponent={$defs[currentSpecularId].specularExponent}\\r\\n                                    specularConstant={$defs[currentSpecularId].specularConstant}\\r\\n                                    lighting-color={$defs[currentSpecularId].lightingColor}\\r\\n                                    surfaceScale={$defs[currentSpecularId].surfaceScale}\\r\\n                                >\\r\\n                                    <fePointLight x={$defs[currentSpecularId].point.x} y={$defs[currentSpecularId].point.y} z={$defs[currentSpecularId].point.z}/>\\r\\n                                </feSpecularLighting> \\r\\n                                <feComposite\\r\\n                                in={$defs[currentSpecularId].input}\\r\\n                                in2={$defs[currentSpecularId].input2}\\r\\n                                operator={$defs[currentSpecularId].operator}\\r\\n                                k1={$defs[currentSpecularId].k1}\\r\\n                                k2={$defs[currentSpecularId].k2}\\r\\n                                k3={$defs[currentSpecularId].k3}\\r\\n                                k4={$defs[currentSpecularId].k4} />\\r\\n                            </filter>\\r\\n                        </defs>\\r\\n                        <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${currentSpecularId})\`}/>\\r\\n                    </svg>\\r\\n                </span>\\r\\n                <Button on:click={saveSpecular}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            <div class=\\"position\\">\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].width} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        width\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].height} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        height\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].point.x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].point.y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].point.z} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point z\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].surfaceScale} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Surface Scale\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].specularExponent} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Specular Exponent\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].specularConstant} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Specular Constant\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].k1} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        k1\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].k2} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        k2\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].k3} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        k3\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentSpecularId].k4} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        k4\\r\\n                    </span>\\r\\n                </FormField>\\r\\n            </div>\\r\\n            <Color noConfirm bind:background={$defs[currentSpecularId].lightingColor} />\\r\\n        {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n    <Card>\\r\\n        <Content>\\r\\n        <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Diffuse Lighting</h4>\\r\\n        <DataTable table$aria-label=\\"Diffuse Lighting\\" style=\\"width: 100%;\\">\\r\\n            <Body>\\r\\n                {#each Object.keys($defs) as sdo}\\r\\n                {#if $defs[sdo].tag === 'diffuseLighting'}\\r\\n                <Row>\\r\\n                    <Cell style=\\"width: 100%;\\"><span class=\\"rect\\">\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" on:click={() => setDiffuse(sdo)}>\\r\\n                            <!-- svelte-ignore component-name-lowercase -->\\r\\n                            <defs>\\r\\n                                <filter \\r\\n                                    id={sdo}\\r\\n                                    x='{$defs[sdo].x}%'\\r\\n                                    y='{$defs[sdo].y}%'\\r\\n                                    width='{$defs[sdo].width}%'\\r\\n                                    height='{$defs[sdo].height}%'\\r\\n                                >\\r\\n                                    <feDiffuseLighting\\r\\n                                        result={$defs[sdo].result}\\r\\n                                        specularExponent={$defs[sdo].specularExponent}\\r\\n                                        specularConstant={$defs[sdo].specularConstant}\\r\\n                                        lighting-color={$defs[sdo].lightingColor}\\r\\n                                        surfaceScale={$defs[sdo].surfaceScale}\\r\\n                                    >\\r\\n                                        <fePointLight x={$defs[sdo].point.x} y={$defs[sdo].point.y} z={$defs[sdo].point.z}/>\\r\\n                                    </feDiffuseLighting> \\r\\n                                    <feComposite\\r\\n                                    in={$defs[sdo].input}\\r\\n                                    in2={$defs[sdo].input2}\\r\\n                                    operator={$defs[sdo].operator}\\r\\n                                    k1={$defs[sdo].k1}\\r\\n                                    k2={$defs[sdo].k2}\\r\\n                                    k3={$defs[sdo].k3}\\r\\n                                    k4={$defs[sdo].k4} />\\r\\n                                </filter>\\r\\n                            </defs>\\r\\n                            <rect x=\\"0\\" y=\\"0\\" width=\\"25px\\" height=\\"1em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${sdo})\`}/>\\r\\n                        </svg>\\r\\n                    </span></Cell>\\r\\n                    <Cell>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => editDiffuse(sdo)}>edit</IconButton>\\r\\n                        <IconButton class=\\"material-icons\\" on:click={() => removeDiffuse(sdo)}>delete</IconButton>\\r\\n                    </Cell>\\r\\n                </Row>\\r\\n                {/if}\\r\\n                {/each}\\r\\n            </Body>\\r\\n        </DataTable>\\r\\n        <br>\\r\\n        <Button on:click={createDiffuse}>New Diffuse Lighting</Button>\\r\\n        {#if isNewDiffuse}\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">New Diffuse Lighting</h4>\\r\\n            <div class=\\"filtertype\\">\\r\\n                <span class=\\"rect\\">\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                        <!-- svelte-ignore component-name-lowercase -->\\r\\n                        <defs>\\r\\n                            <filter \\r\\n                                id={currentDiffuseId}\\r\\n                                x='{$defs[currentDiffuseId].x}%'\\r\\n                                y='{$defs[currentDiffuseId].y}%'\\r\\n                                width='{$defs[currentDiffuseId].width}%'\\r\\n                                height='{$defs[currentDiffuseId].height}%'\\r\\n                            >\\r\\n                                <feDiffuseLighting\\r\\n                                    result={$defs[currentDiffuseId].result}\\r\\n                                    specularExponent={$defs[currentDiffuseId].specularExponent}\\r\\n                                    specularConstant={$defs[currentDiffuseId].specularConstant}\\r\\n                                    lighting-color={$defs[currentDiffuseId].lightingColor}\\r\\n                                    surfaceScale={$defs[currentDiffuseId].surfaceScale}\\r\\n                                >\\r\\n                                    <fePointLight x={$defs[currentDiffuseId].point.x} y={$defs[currentDiffuseId].point.y} z={$defs[currentDiffuseId].point.z}/>\\r\\n                                </feDiffuseLighting> \\r\\n                                <feComposite\\r\\n                                in={$defs[currentDiffuseId].input}\\r\\n                                in2={$defs[currentDiffuseId].input2}\\r\\n                                operator={$defs[currentDiffuseId].operator}\\r\\n                                k1={$defs[currentDiffuseId].k1}\\r\\n                                k2={$defs[currentDiffuseId].k2}\\r\\n                                k3={$defs[currentDiffuseId].k3}\\r\\n                                k4={$defs[currentDiffuseId].k4} />\\r\\n                            </filter>\\r\\n                        </defs>\\r\\n                        <rect x=\\"0\\" y=\\"0\\" width=\\"50px\\" height=\\"2em\\" fill=\\"rgba(0, 0, 0, 0.5)\\" filter={\`url(#\${currentDiffuseId})\`}/>\\r\\n                    </svg>\\r\\n                </span>\\r\\n                <Button on:click={saveDiffuse}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            <div class=\\"position\\">\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].width} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        width\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].height} min={0} max={500} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        height\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].point.x} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point x\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].point.y} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point y\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].point.z} min={-100} max={100} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Point z\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].surfaceScale} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Surface Scale\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].diffuseExponent} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1;\\"\\r\\n                    >\\r\\n                        Diffuse Exponent\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].diffuseConstant} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        Diffuse Constant\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].k1} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        k1\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].k2} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        k2\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].k3} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        k3\\r\\n                    </span>\\r\\n                </FormField>\\r\\n                <FormField align=\\"end\\" style=\\"display: flex;justify-content:end;\\">\\r\\n                    <Slider withInput bind:value={$defs[currentDiffuseId].k4} min={0} max={10} step={0.001} />\\r\\n                    <span\\r\\n                        slot=\\"label\\"\\r\\n                        style=\\"padding-right: 12px; line-height:1; line-height:1;\\"\\r\\n                    >\\r\\n                        k4\\r\\n                    </span>\\r\\n                </FormField>\\r\\n            </div>\\r\\n            <Color noConfirm bind:background={$defs[currentDiffuseId].lightingColor} />\\r\\n        {/if}\\r\\n        </Content>\\r\\n    </Card>\\r\\n</article>\\r\\n\\r\\n{/if}"],"names":[],"mappings":"AAuNI,sBAAQ,CACJ,KAAK,CAAE,KAAK,CACZ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR,CACA,0BAAY,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,KACnB,CACA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAClB,CACA,wBAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAGrB"}`
};
const Filters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $defs, $$unsubscribe_defs;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  $$unsubscribe_elements = subscribe(elements, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$selectedId ? `<article class="svelte-183zqnz">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `  <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-1sr6yge">Shadows</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Shadows",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (sdo) => {
                        return `${$defs[sdo].tag === "shadow" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-183zqnz"><svg width="100%" height="100%"><defs><filter${add_attribute("id", sdo, 0)} x="${escape($defs[sdo].x, true) + "%"}" y="${escape($defs[sdo].y, true) + "%"}" width="${escape($defs[sdo].width, true) + "%"}" height="${escape($defs[sdo].height, true) + "%"}"><feDropShadow${add_attribute("dx", $defs[sdo].dx, 0)}${add_attribute("dy", $defs[sdo].dy, 0)}${add_attribute("stdDeviation", $defs[sdo].stdDeviation, 0)}${add_attribute("flood-color", $defs[sdo].floodcolor, 0)}${add_attribute("flood-opacity", $defs[sdo].floodopacity, 0)}></feDropShadow></filter></defs><rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)"${add_attribute("filter", `url(#${sdo})`, 0)}></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Shadow`;
              }
            })} ${``}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-1060bn4">Blur</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Blur",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (sdo) => {
                        return `${$defs[sdo].tag === "blur" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-183zqnz"><svg width="100%" height="100%"><defs><filter${add_attribute("id", sdo, 0)} x="${escape($defs[sdo].x, true) + "%"}" y="${escape($defs[sdo].y, true) + "%"}" width="${escape($defs[sdo].width, true) + "%"}" height="${escape($defs[sdo].height, true) + "%"}"><feGaussianBlur${add_attribute("in", $defs[sdo].input, 0)}${add_attribute("stdDeviation", $defs[sdo].stdDeviation, 0)}${add_attribute("edgeMode", $defs[sdo].edgeMode, 0)}></feGaussianBlur></filter></defs><rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)"${add_attribute("filter", `url(#${sdo})`, 0)}></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Blur`;
              }
            })} ${``}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-xo4th8">Specular Lighting</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Specular Lighting",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (sdo) => {
                        return `${$defs[sdo].tag === "specularLighting" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-183zqnz"><svg width="100%" height="100%"><defs><filter${add_attribute("id", sdo, 0)} x="${escape($defs[sdo].x, true) + "%"}" y="${escape($defs[sdo].y, true) + "%"}" width="${escape($defs[sdo].width, true) + "%"}" height="${escape($defs[sdo].height, true) + "%"}"><feSpecularLighting${add_attribute("result", $defs[sdo].result, 0)}${add_attribute("specularExponent", $defs[sdo].specularExponent, 0)}${add_attribute("specularConstant", $defs[sdo].specularConstant, 0)}${add_attribute("lighting-color", $defs[sdo].lightingColor, 0)}${add_attribute("surfaceScale", $defs[sdo].surfaceScale, 0)}><fePointLight${add_attribute("x", $defs[sdo].point.x, 0)}${add_attribute("y", $defs[sdo].point.y, 0)}${add_attribute("z", $defs[sdo].point.z, 0)}></fePointLight></feSpecularLighting><feComposite${add_attribute("in", $defs[sdo].input, 0)}${add_attribute("in2", $defs[sdo].input2, 0)}${add_attribute("operator", $defs[sdo].operator, 0)}${add_attribute("k1", $defs[sdo].k1, 0)}${add_attribute("k2", $defs[sdo].k2, 0)}${add_attribute("k3", $defs[sdo].k3, 0)}${add_attribute("k4", $defs[sdo].k4, 0)}></feComposite></filter></defs><rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)"${add_attribute("filter", `url(#${sdo})`, 0)}></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Specular Lighting`;
              }
            })} ${``}`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-eka47r">Diffuse Lighting</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Diffuse Lighting",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (sdo) => {
                        return `${$defs[sdo].tag === "diffuseLighting" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "width: 100%;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-183zqnz"><svg width="100%" height="100%"><defs><filter${add_attribute("id", sdo, 0)} x="${escape($defs[sdo].x, true) + "%"}" y="${escape($defs[sdo].y, true) + "%"}" width="${escape($defs[sdo].width, true) + "%"}" height="${escape($defs[sdo].height, true) + "%"}"><feDiffuseLighting${add_attribute("result", $defs[sdo].result, 0)}${add_attribute("specularExponent", $defs[sdo].specularExponent, 0)}${add_attribute("specularConstant", $defs[sdo].specularConstant, 0)}${add_attribute("lighting-color", $defs[sdo].lightingColor, 0)}${add_attribute("surfaceScale", $defs[sdo].surfaceScale, 0)}><fePointLight${add_attribute("x", $defs[sdo].point.x, 0)}${add_attribute("y", $defs[sdo].point.y, 0)}${add_attribute("z", $defs[sdo].point.z, 0)}></fePointLight></feDiffuseLighting><feComposite${add_attribute("in", $defs[sdo].input, 0)}${add_attribute("in2", $defs[sdo].input2, 0)}${add_attribute("operator", $defs[sdo].operator, 0)}${add_attribute("k1", $defs[sdo].k1, 0)}${add_attribute("k2", $defs[sdo].k2, 0)}${add_attribute("k3", $defs[sdo].k3, 0)}${add_attribute("k4", $defs[sdo].k4, 0)}></feComposite></filter></defs><rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)"${add_attribute("filter", `url(#${sdo})`, 0)}></rect></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )} <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New Diffuse Lighting`;
              }
            })} ${``}`;
          }
        })}`;
      }
    })}</article>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  return $$rendered;
});
const css$2 = {
  code: "article.svelte-cocylq.svelte-cocylq{width:300px;display:flex;flex-direction:column;gap:0.5em}.markertype.svelte-cocylq.svelte-cocylq{display:flex;flex-direction:row;gap:1em;align-items:center;margin-bottom:0.5em}.rect.svelte-cocylq.svelte-cocylq{display:flex;width:30px;height:2em;border:0.5px solid}.attributeGroup.svelte-cocylq.svelte-cocylq{background:rgb(184, 183, 183);border-radius:10px;color:rgb(3, 3, 3);padding:1em;margin:1em 0}.action.svelte-cocylq.svelte-cocylq{padding:0.5em;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.icon.svelte-cocylq input.svelte-cocylq{height:2em;border-radius:5px;width:70px;outline:none;border:none}.box.svelte-cocylq.svelte-cocylq{display:grid;grid-template-columns:1fr 1fr;gap:1em;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"Markers.svelte","sources":["Markers.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Chip, { Set, Text } from '@smui/chips';\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import IconButton from '@smui/icon-button';\\r\\n    import Card, { Content, Actions } from '@smui/card'\\r\\n    import {selectedId, elements, defs, objectCount, DRAWING, currentLayer} from './stores';\\r\\n    import SegmentedButton, {Segment} from '@smui/segmented-button';\\r\\n    import Color from '$lib/vectorial/components/Color.svelte';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n\\r\\n    import {Marker} from '$lib/vectorial/utils/common/marker';\\r\\n    import {Group} from '$lib/vectorial/utils/common/g';\\r\\n\\r\\n\\r\\n    //filter x, y, width, height\\r\\n    //shadow dx, dy, stdDeviation, floodcolor, floodopacity\\r\\n\\r\\n    \\r\\n    let isNewMarker = false;\\r\\n    let orientTypes = ['auto', 'auto-start-reverse']\\r\\n    let currentMarkerId;\\r\\n    \\r\\n    const createArrow = () => {\\r\\n        let mrk = new Marker({id: 'Arrow-' +$DRAWING.drawingID + '-' + $objectCount});\\r\\n        $defs[mrk.id] = mrk;\\r\\n        $objectCount++;\\r\\n        $defs = $defs;\\r\\n    }\\r\\n    const createBar = () => {\\r\\n        let mrk = new Marker({id: 'Bar-' + $DRAWING.drawingID + '-' + $objectCount});\\r\\n        mrk.path.d = \\"M 0 0 L 0 10\\";\\r\\n        mrk.path.strokewidth = 2;\\r\\n        $defs[mrk.id] = mrk;\\r\\n        $objectCount++;\\r\\n        $defs = $defs;\\r\\n    }\\r\\n    const createMarker = () => {\\r\\n        isNewMarker = true;\\r\\n        let mrk = new Marker({id: 'Marker-' + $DRAWING.drawingID + '-' + $objectCount})\\r\\n        \\r\\n        $defs[mrk.id] = mrk;\\r\\n        currentMarkerId = mrk.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const updateMarker = () => {\\r\\n        let parent;\\r\\n        for(let i = 0; i < $defs[currentMarkerId].text.length; i++) {\\r\\n            if($elements[$selectedId].children.indexOf($defs[currentMarkerId].text[i]) === -1) {\\r\\n                $elements[$selectedId].children.push($defs[currentMarkerId].text[i]);\\r\\n                $elements[$defs[currentMarkerId].text[i]].isLocked = true;\\r\\n                parent = $elements[$defs[currentMarkerId].text[i]].parent;\\r\\n                if(parent !== $selectedId) {\\r\\n                    $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[currentMarkerId].text[i])\\r\\n                }\\r\\n            }\\r\\n            \\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const saveMarker = () => {\\r\\n        $defs = $defs\\r\\n        isNewMarker = false;\\r\\n    }\\r\\n    const removeMarker = (lgrad) => {\\r\\n        delete $defs[lgrad]\\r\\n        // console.log($elements[$selectedId])\\r\\n        if($elements[$selectedId]['marker']) {\\r\\n            let markers = $elements[$selectedId]['marker'].split(' ');\\r\\n            markers = markers.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n            $elements[$selectedId]['marker'] = markers.join(' ');\\r\\n        }\\r\\n        \\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editMarker = (lgrad) => {\\r\\n        currentMarkerId = lgrad;\\r\\n        isNewMarker = true;\\r\\n    }\\r\\n    \\r\\n    const setMarker = (mrk, position) => {\\r\\n        switch(position) {\\r\\n            case 'start': {\\r\\n                $elements[$selectedId]['markerStart'] = $elements[$selectedId]['markerStart'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n            case 'mid': {\\r\\n                $elements[$selectedId]['markerMid'] = $elements[$selectedId]['markerMid'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n            case 'end': {\\r\\n                $elements[$selectedId]['markerEnd'] = $elements[$selectedId]['markerEnd'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    .markertype {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n    .rect {\\r\\n        display: flex;\\r\\n        width: 30px;\\r\\n        height: 2em;\\r\\n        border: 0.5px solid;\\r\\n    }\\r\\n\\r\\n    .attributeGroup {\\r\\n        background: rgb(184, 183, 183);\\r\\n        border-radius: 10px;\\r\\n        color: rgb(3, 3, 3);\\r\\n        padding: 1em;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .action {\\r\\n        padding: 0.5em;\\r\\n        cursor: pointer;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    .icon input {\\r\\n        height: 2em;\\r\\n        border-radius: 5px;\\r\\n        width: 70px;\\r\\n        outline: none;\\r\\n        border: none;\\r\\n    }\\r\\n    .box {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    /* .iconButton {\\r\\n        font-size: 1.5em;\\r\\n        background: rgba(0, 0, 0, 0.1);\\r\\n        cursor: pointer;\\r\\n    } */\\r\\n    /* .active {\\r\\n        font-weight: 600;\\r\\n    } */\\r\\n</style>\\r\\n{#if $selectedId}\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Markers</h4>\\r\\n            <DataTable table$aria-label=\\"Markers\\" style=\\"width: 100%;\\">\\r\\n                <Body>\\r\\n                    {#each Object.keys($defs) as mrk}\\r\\n                    {#if $defs[mrk].tag === 'marker'}\\r\\n                    <Row>\\r\\n                        <Cell style=\\"padding: 0 0 0 16px;\\"><span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerStart']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                            <svg viewBox=\\"-7 0 35 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'start')}>\\r\\n                                \\r\\n                                <!-- svelte-ignore component-name-lowercase -->\\r\\n                                <defs>\\r\\n                                    <marker \\r\\n                                        id={mrk}\\r\\n                                        refX='{$defs[mrk].refX}'\\r\\n                                        refY='{$defs[mrk].refY}'\\r\\n                                        markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                        markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                        markerUnits={$defs[mrk].markerUnits}\\r\\n                                        orient={$defs[mrk].orient}\\r\\n                                        viewBox={$defs[mrk].viewBox}\\r\\n                                        preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                    >\\r\\n                                        <path \\r\\n                                            d=\\"{$defs[mrk].path.d}\\"\\r\\n                                            fill={$defs[mrk].path.fill}\\r\\n                                            stroke={$defs[mrk].path.stroke}\\r\\n                                            stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                            stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                            opacity={$defs[mrk].path.opacity}\\r\\n                                            filter={$defs[mrk].path.filter}\\r\\n                                        />\\r\\n                                    </marker>\\r\\n\\r\\n                                </defs>\\r\\n                                <path d=\\"M 5,10 H 25\\" marker-start={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"2\\" />\\r\\n                            </svg>\\r\\n                        </span></Cell>\\r\\n                        <Cell style=\\"padding: 0 0 0 16px;\\">\\r\\n                            <span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerMid']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                                <svg viewBox=\\"0 0 30 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'mid')}>\\r\\n                                    <defs>\\r\\n                                        <marker \\r\\n                                            id={mrk}\\r\\n                                            refX='{$defs[mrk].refX}'\\r\\n                                            refY='{$defs[mrk].refY}'\\r\\n                                            markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                            markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                            markerUnits={$defs[mrk].markerUnits}\\r\\n                                            orient={$defs[mrk].orient}\\r\\n                                            viewBox={$defs[mrk].viewBox}\\r\\n                                            preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                        >\\r\\n                                            <path \\r\\n                                                d=\\"{$defs[mrk].path.d}\\"\\r\\n                                                fill={$defs[mrk].path.fill}\\r\\n                                                stroke={$defs[mrk].path.stroke}\\r\\n                                                stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                                stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                                opacity={$defs[mrk].path.opacity}\\r\\n                                                filter={$defs[mrk].path.filter}\\r\\n                                            />\\r\\n                                        </marker>\\r\\n\\r\\n                                    </defs>\\r\\n                                    <path d=\\"M 3,10 H 15 H 25\\" marker-mid={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"1\\" />\\r\\n                                </svg>\\r\\n                            </span>\\r\\n                        </Cell>\\r\\n                        <Cell style=\\"padding: 0 0 0 16px;\\">\\r\\n                            <span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerEnd']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                                <svg viewBox=\\"0 0 37 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'end')}>\\r\\n                                    <defs>\\r\\n                                        <marker \\r\\n                                            id={mrk}\\r\\n                                            refX='{$defs[mrk].refX}'\\r\\n                                            refY='{$defs[mrk].refY}'\\r\\n                                            markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                            markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                            markerUnits={$defs[mrk].markerUnits}\\r\\n                                            orient={$defs[mrk].orient}\\r\\n                                            viewBox={$defs[mrk].viewBox}\\r\\n                                            preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                        >\\r\\n                                            <path \\r\\n                                                d=\\"{$defs[mrk].path.d}\\"\\r\\n                                                fill={$defs[mrk].path.fill}\\r\\n                                                stroke={$defs[mrk].path.stroke}\\r\\n                                                stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                                stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                                opacity={$defs[mrk].path.opacity}\\r\\n                                            />\\r\\n                                        </marker>\\r\\n\\r\\n                                    </defs>\\r\\n                                    <path d=\\"M 3,10 H 25\\" marker-end={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"2\\" />\\r\\n                                </svg>\\r\\n                            </span>\\r\\n                        </Cell>\\r\\n                        <Cell style=\\"padding: 0;\\">\\r\\n                            <IconButton class=\\"material-icons\\" on:click={() => editMarker(mrk)}>edit</IconButton>\\r\\n                            <IconButton class=\\"material-icons\\" on:click={() => removeMarker(mrk)}>delete</IconButton>\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    {/if}\\r\\n                    {/each}\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n        <Actions>\\r\\n            <Button on:click={createArrow}>Arrow +</Button>\\r\\n            <Button on:click={createBar}>Bar +</Button>\\r\\n            <Button on:click={createMarker}>Marker +</Button>\\r\\n        </Actions>\\r\\n    </Card>\\r\\n{#if isNewMarker}\\r\\n<Card>\\r\\n    <Content>\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Design Marker</h4>\\r\\n            <div class=\\"markertype\\">\\r\\n                <span class=\\"rect\\" style=\\"background: rgba(255, 255, 255, 0.5)\\">\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\">\\r\\n                        <defs>\\r\\n                            <marker \\r\\n                                id={currentMarkerId}\\r\\n                                refX='{$defs[currentMarkerId].refX}'\\r\\n                                refY='{$defs[currentMarkerId].refY}'\\r\\n                                markerWidth='{$defs[currentMarkerId].markerWidth}'\\r\\n                                markerHeight='{$defs[currentMarkerId].markerHeight}'\\r\\n                                markerUnits={$defs[currentMarkerId].markerUnits}\\r\\n                                orient={$defs[currentMarkerId].orient}\\r\\n                                viewBox={$defs[currentMarkerId].viewBox}\\r\\n                                preserveAspectRatio={$defs[currentMarkerId].preserveAspectRatio}\\r\\n                            >\\r\\n                                <path \\r\\n                                    d=\\"{$defs[currentMarkerId].path.d}\\"\\r\\n                                    fill={$defs[currentMarkerId].path.fill}\\r\\n                                    stroke={$defs[currentMarkerId].path.stroke}\\r\\n                                    stroke-width={$defs[currentMarkerId].path.strokewidth}\\r\\n                                    stroke-dasharray={$defs[currentMarkerId].path.strokedasharray}\\r\\n                                    opacity={$defs[currentMarkerId].path.opacity}\\r\\n                                />\\r\\n                            </marker>\\r\\n\\r\\n                        </defs>\\r\\n                        <path d=\\"M 3,10 H 25\\" marker-end={\`url(#\${currentMarkerId})\`} stroke={$defs[currentMarkerId].path.stroke} />\\r\\n                    </svg>\\r\\n                </span>\\r\\n                <Button on:click={saveMarker}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            <!--  markerUnits, fill stroke, stroke-width, stroke-dasharray opacity -->\\r\\n            <div class=\\"inputAttribute\\">\\r\\n                <div class=\\"box\\">\\r\\n                    <div class=\\"attributeGroup\\">\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">W</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input type=\\"number\\" bind:value={$defs[currentMarkerId].markerWidth} step={1}> \\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                        <br>\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">H</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input type=\\"number\\" bind:value={$defs[currentMarkerId].markerHeight} step={1}> \\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\"attributeGroup\\">\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">X</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input type=\\"number\\" bind:value={$defs[currentMarkerId].refX} step={1}> \\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                        <br>\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">Y</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input type=\\"number\\" bind:value={$defs[currentMarkerId].refY} step={1}> \\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <label style=\\"display:flex; align-items:center; gap: 1em;\\">\\r\\n                        Preserve Aspect\\r\\n                        <input type=\\"checkbox\\" bind:checked={$defs[currentMarkerId].preserveAspectRatio} />\\r\\n                    </label>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\" style=\\"display:flex; flex-direction: column; flex-wrap: no-wrap;\\">\\r\\n                    <Set chips={orientTypes} let:chip choice bind:selected={$defs[currentMarkerId].orient}>\\r\\n                        <Chip {chip}>\\r\\n                          <Text>{chip}</Text>\\r\\n                        </Chip>\\r\\n                    </Set>\\r\\n                    \\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">Angle</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input style=\\"width: 30px;\\" type=\\"number\\" bind:value={$defs[currentMarkerId].orient} step={1}> \\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">viewBox</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input type=\\"text\\" bind:value={$defs[currentMarkerId].viewBox}>\\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <h5 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Marker path</h5>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">d</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input style=\\"width: 100%;\\" type=\\"text\\" bind:value={$defs[currentMarkerId].path.d}>\\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">Stroke width</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input style=\\"width: 100%;\\" type=\\"number\\" bind:value={$defs[currentMarkerId].path.strokewidth}>\\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">Stroke</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input style=\\"width: 100%;\\" bind:value={$defs[currentMarkerId].path.stroke}>\\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\"attributeGroup\\">\\r\\n                    <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                        <span class=\\"text\\">Fill</span>\\r\\n                        <span class=\\"icon\\">\\r\\n                            <label>\\r\\n                                <input style=\\"width: 100%;\\" bind:value={$defs[currentMarkerId].path.fill}>\\r\\n                            </label>\\r\\n                        </span>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        \\r\\n        </Content>\\r\\n    </Card>\\r\\n{/if}\\r\\n</article>\\r\\n\\r\\n{/if}"],"names":[],"mappings":"AAsGI,mCAAQ,CACJ,KAAK,CAAE,KAAK,CACZ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR,CACA,uCAAY,CACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,KACnB,CACA,iCAAM,CACF,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAClB,CAEA,2CAAgB,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,mCAAQ,CACJ,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aACrB,CACA,mBAAK,CAAC,mBAAM,CACR,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IACZ,CACA,gCAAK,CACD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const Markers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $defs, $$unsubscribe_defs;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$selectedId ? `<article class="svelte-cocylq">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-192mcxg">Markers</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Markers",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (mrk) => {
                        return `${$defs[mrk].tag === "marker" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0 0 0 16px;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-cocylq" style="${"background: " + escape(
                                  $elements[$selectedId]["markerStart"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="-7 0 35 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}${add_attribute("filter", $defs[mrk].path.filter, 0)}></path></marker></defs><path d="M 5,10 H 25"${add_attribute("marker-start", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="2"></path></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0 0 0 16px;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-cocylq" style="${"background: " + escape(
                                  $elements[$selectedId]["markerMid"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="0 0 30 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}${add_attribute("filter", $defs[mrk].path.filter, 0)}></path></marker></defs><path d="M 3,10 H 15 H 25"${add_attribute("marker-mid", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="1"></path></svg></span> `;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0 0 0 16px;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-cocylq" style="${"background: " + escape(
                                  $elements[$selectedId]["markerEnd"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="0 0 37 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}></path></marker></defs><path d="M 3,10 H 25"${add_attribute("marker-end", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="2"></path></svg></span> `;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0;" }, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Actions$1, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Arrow +`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Bar +`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Marker +`;
              }
            })}`;
          }
        })}`;
      }
    })} ${``}</article>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  return $$rendered;
});
const css$1 = {
  code: "article.svelte-1lobpw4{width:300px;display:flex;flex-direction:column;gap:0.5em}.masktype.svelte-1lobpw4{display:flex;flex-direction:row;gap:1em;align-items:center;margin-bottom:0.5em}.active.svelte-1lobpw4{font-weight:600}",
  map: `{"version":3,"file":"Masks.svelte","sources":["Masks.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Chip, { Set, Text } from '@smui/chips';\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    import IconButton from '@smui/icon-button';\\r\\n    import Card, { Content, Actions } from '@smui/card'\\r\\n    import {selectedId, elements, defs, objectCount, DRAWING, currentLayer} from './stores';\\r\\n    \\r\\n    import Color from '$lib/vectorial/components/Color.svelte';\\r\\n    import Button, {Label} from '@smui/button';\\r\\n    import {TextMask} from '$lib/vectorial/utils/common/textMask';\\r\\n    import {Group} from '$lib/vectorial/utils/common/g';\\r\\n    \\r\\n\\r\\n\\r\\n    //filter x, y, width, height\\r\\n    //shadow dx, dy, stdDeviation, floodcolor, floodopacity\\r\\n\\r\\n    \\r\\n    let isNewTextMask = false;\\r\\n    \\r\\n    let currentTextMaskId;\\r\\n    \\r\\n    const createGroup = () => {\\r\\n        let layer = 'Layer-'+$DRAWING.drawingID + '-' +$currentLayer;\\r\\n        if($elements.Layers.length > 0) {\\r\\n            if($elements.Layers[0] === 'Layer-0') {\\r\\n                layer = 'Layer-' + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let group = new Group({id: 'Group-' + $DRAWING.drawingID + '-' + $objectCount, parent: layer, layer:layer});\\r\\n        $elements[group.id] = group;\\r\\n        // $selectedId = group.id;\\r\\n        $objectCount = $objectCount + 1;\\r\\n        $elements[group.parent].children.push(group.id);\\r\\n        $elements = $elements;\\r\\n        return group.id;\\r\\n        \\r\\n        // sortSelection();\\r\\n        \\r\\n        \\r\\n        // deleteElementsFromLayer($lassoElements);\\r\\n        // $elements[group.parent].children.push(group.id);\\r\\n        // $lassoElements.forEach(id => {\\r\\n        //     $elements[id].layer = group.layer;\\r\\n        //     $elements[id].parent = group.id;\\r\\n        //     $elements[id].isLocked = true;\\r\\n        //     group.children.push(id);\\r\\n        // })\\r\\n        \\r\\n        // $elements = $elements;   \\r\\n        // computeInitialSBox(group.id);     \\r\\n        // $lassoElements = [];\\r\\n    }\\r\\n    const createTextMask = () => {\\r\\n        isNewTextMask = true;\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        let msk = new TextMask({id: 'TextMask-' + $DRAWING.drawingID + '-' + $objectCount, parent: layer, layer: layer})\\r\\n        msk.shape = $selectedId;\\r\\n        $defs[msk.id] = msk;\\r\\n        let groupId = createGroup();\\r\\n        msk.group = groupId;\\r\\n        $elements[groupId]['mask'] = \`url(#\${msk.id})\`;\\r\\n        $elements[$selectedId].isLocked = true;\\r\\n        $elements[$elements[$selectedId].parent].children = $elements[$elements[$selectedId].parent].children.filter(id => id !== $selectedId)\\r\\n        $elements[$selectedId].parent = groupId;\\r\\n        $elements[groupId].children.push($selectedId);\\r\\n        // let masks = $elements[$selectedId]['mask'].split(' ');\\r\\n        // let included = masks.indexOf(\`url(#\${msk.id})\`);\\r\\n        // if($elements[$selectedId]['mask'] === 'none') {\\r\\n        //     $elements[$selectedId]['mask'] = '';\\r\\n        // }\\r\\n        // $elements[$selectedId]['mask'] = included === -1 ? $elements[$selectedId]['mask'] + ' ' + \`url(#\${msk.id})\` : \`url(#\${msk.id})\`;\\r\\n        $selectedId = groupId;\\r\\n        currentTextMaskId = msk.id;\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const updateTextMask = () => {\\r\\n        console.log($defs[currentTextMaskId].text)\\r\\n        let parent;\\r\\n        for(let i = 0; i < $defs[currentTextMaskId].text.length; i++) {\\r\\n            if($elements[$selectedId].children && $elements[$selectedId].children.indexOf($defs[currentTextMaskId].text[i]) === -1) {\\r\\n                $elements[$selectedId].children.push($defs[currentTextMaskId].text[i]);\\r\\n                $elements[$defs[currentTextMaskId].text[i]].isLocked = true;\\r\\n                parent = $elements[$defs[currentTextMaskId].text[i]].parent;\\r\\n                if(parent !== $selectedId) {\\r\\n                    $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[currentTextMaskId].text[i])\\r\\n                }\\r\\n            }\\r\\n            \\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const saveTextMask = () => {\\r\\n        $defs = $defs\\r\\n        isNewTextMask = false;\\r\\n    }\\r\\n    const removeTextMask = (lgrad) => {\\r\\n        delete $defs[lgrad]\\r\\n        let masks = $elements[$selectedId]['mask'].split(' ');\\r\\n        masks = masks.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n        $elements[$selectedId]['mask'] = masks.join(' ');\\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const editTextMask = (lgrad) => {\\r\\n        currentTextMaskId = lgrad;\\r\\n        isNewTextMask = true;\\r\\n    }\\r\\n    \\r\\n    const setTextMask = (msk) => {\\r\\n        let masks = $elements[$selectedId]['mask'].split(' ');\\r\\n        let included = masks.indexOf(\`url(#\${msk})\`);\\r\\n        if($elements[$selectedId]['mask'] === 'none') {\\r\\n            $elements[$selectedId]['mask'] = '';\\r\\n        }\\r\\n        $elements[$selectedId]['mask'] = included === -1 ? $elements[$selectedId]['mask'] + ' ' + \`url(#\${msk})\` : $elements[$selectedId]['mask'];\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const addText = () => {\\r\\n\\r\\n    }\\r\\n    const removeText = () => {\\r\\n\\r\\n    }\\r\\n<\/script>\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n        display:flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    .masktype {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        margin-bottom: 0.5em;\\r\\n    }\\r\\n    .active {\\r\\n        font-weight: 600;\\r\\n    }\\r\\n</style>\\r\\n{#if $selectedId}\\r\\n<article>\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Text Masks</h4>\\r\\n            <DataTable table$aria-label=\\"Masks\\" style=\\"width: 100%;\\">\\r\\n                <Body>\\r\\n                    {#each Object.keys($defs) as msk}\\r\\n                    {#if $defs[msk].tag === 'textMask'}\\r\\n                    <Row>\\r\\n                        <Cell><span class:active={$elements[$selectedId]['mask']?.includes(msk)}>{msk.split('-')[0] + msk.split('-')[2]}</span></Cell>\\r\\n                        <Cell style=\\"padding: 0;\\">\\r\\n                            <IconButton class=\\"material-icons\\" on:click={() => editTextMask(msk)}>edit</IconButton>\\r\\n                            <IconButton class=\\"material-icons\\" on:click={() => removeTextMask(msk)}>delete</IconButton>\\r\\n                        </Cell>\\r\\n                    </Row>\\r\\n                    {/if}\\r\\n                    {/each}\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n        </Content>\\r\\n        <Actions>\\r\\n            <Button on:click={createTextMask}>New TextMask</Button>\\r\\n        </Actions>\\r\\n    </Card>\\r\\n    {#if isNewTextMask}\\r\\n    <Card>\\r\\n        <Content>\\r\\n            <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">New TextMask</h4>\\r\\n            <div class=\\"masktype\\">\\r\\n                <span>\\r\\n                    {currentTextMaskId.split('-')[0] + currentTextMaskId.split('-')[2]}\\r\\n                </span>\\r\\n                <Button on:click={saveTextMask}><Label>Save</Label></Button>\\r\\n            </div> \\r\\n            \\r\\n            <DataTable style=\\"width: 100%\\">\\r\\n                <Body>\\r\\n                    {#each Object.keys($elements) as elemId}\\r\\n                        {#if $elements[elemId].tag === 'text'}\\r\\n                            <Row>\\r\\n                                <Cell checkbox>\\r\\n                                    <Checkbox\\r\\n                                        bind:group={$defs[currentTextMaskId].text}\\r\\n                                        value={elemId}\\r\\n                                        on:change={updateTextMask}\\r\\n                                    />\\r\\n                                </Cell>\\r\\n                                <Cell>\\r\\n                                    {$elements[elemId].content}\\r\\n                                </Cell>\\r\\n                                <Cell>\\r\\n                                    {elemId.split('-')[0] + elemId.split('-')[2]}\\r\\n                                </Cell>\\r\\n                            </Row>\\r\\n                        {/if}\\r\\n                    {/each}\\r\\n                </Body>\\r\\n            </DataTable>\\r\\n            \\r\\n        </Content>\\r\\n    </Card>\\r\\n    {/if}\\r\\n</article>\\r\\n\\r\\n{/if}"],"names":[],"mappings":"AAiII,sBAAQ,CACJ,KAAK,CAAE,KAAK,CACZ,QAAQ,IAAI,CACZ,eAAe,MAAM,CACrB,IAAI,KACR,CACA,wBAAU,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,KACnB,CACA,sBAAQ,CACJ,WAAW,CAAE,GACjB"}`
};
const Masks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $defs, $$unsubscribe_defs;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_currentLayer;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_currentLayer = subscribe(currentLayer, (value) => value);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$selectedId ? `<article class="svelte-1lobpw4">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-fhpsoj">Text Masks</h4> ${validate_component(DataTable, "DataTable").$$render(
              $$result,
              {
                "table$aria-label": "Masks",
                style: "width: 100%;"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Body, "Body").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(Object.keys($defs), (msk) => {
                        return `${$defs[msk].tag === "textMask" ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                              default: () => {
                                return `<span class="${[
                                  "svelte-1lobpw4",
                                  $elements[$selectedId]["mask"]?.includes(msk) ? "active" : ""
                                ].join(" ").trim()}">${escape(msk.split("-")[0] + msk.split("-")[2])}</span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0;" }, {}, {
                              default: () => {
                                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `edit`;
                                  }
                                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                                  default: () => {
                                    return `delete`;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })}` : ``}`;
                      })}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Actions$1, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `New TextMask`;
              }
            })}`;
          }
        })}`;
      }
    })} ${``}</article>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  $$unsubscribe_currentLayer();
  return $$rendered;
});
const css = {
  code: '.background.svelte-k315bx{position:fixed;background:rgba(0, 0, 0, 0.05);overflow:hidden;height:100%;width:100%;display:grid;grid-template-columns:3em 1fr 3em;grid-template-rows:3em 1fr;grid-template-areas:"top top top"\r\n            "left canvasContainer right";background-image:url("/vectorial/background.svg");background-repeat:no-repeat;background-position:center}.top.svelte-k315bx{grid-area:top;display:grid;grid-template-columns:1fr 110px;z-index:10;flex-wrap:wrap;height:2.5em}.left.svelte-k315bx{grid-area:left;display:flex;margin-top:10%;align-items:center;z-index:2;position:absolute;flex-direction:column}.right.svelte-k315bx{grid-area:right;display:flex;align-items:center;z-index:2;position:absolute;flex-direction:column}.canvasContainer.svelte-k315bx{grid-area:canvasContainer;overflow:hidden;width:85vw;height:85vh;display:flex;margin:auto;align-items:center;justify-content:center;background-color:rgb(232, 232, 232);background-image:url("/vectorial/background.svg");background-repeat:no-repeat;background-position:center}.leftside.svelte-k315bx,.rightside.svelte-k315bx{display:flex;flex-direction:row;align-items:center;gap:0.5em}.rightDropDown.svelte-k315bx{position:fixed;z-index:10;top:4.5em;right:4.5em;display:flex;gap:0.9em;justify-content:start;font-size:0.7em;width:300px;overflow-y:auto;height:600px}',
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import { create, all } from 'mathjs'\\r\\n\\r\\n    const config = { }\\r\\n    const math = create(all, config)\\r\\n    import { Input } from '@smui/textfield';\\r\\n    import Dialog, {Actions} from '@smui/dialog';\\r\\n    import Tooltip, {\\r\\n        Wrapper,\\r\\n        Title,\\r\\n        Content,\\r\\n        Link,\\r\\n        RichActions,\\r\\n    } from '@smui/tooltip';\\r\\n    import Button, { Label } from '@smui/button';\\r\\n    import ActionBar from '$lib/vectorial/pages/vectorial/ActionBar.svelte';\\r\\n    import { showLeft, darkMode } from \\"$lib/vectorial/stores.js\\";\\r\\n    \\r\\n    import {clientWidth, clientHeight, PAN, boundingBox, panX, panY} from '$lib/vectorial/pages/vectorial/stores';\\r\\n    import IconButton, { Icon } from '@smui/icon-button';\\r\\n    import MenuSurface from '@smui/menu-surface';\\r\\n    \\r\\n    import { Svg } from '@smui/common';\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    \\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    \\r\\n    import Ripple from '@smui/ripple';\\r\\n    import {\\r\\n        onSVG,\\r\\n        pathMode,\\r\\n        lassoElements,\\r\\n        isLassoGroup,\\r\\n        showBBoxControls,\\r\\n        addingNodes,\\r\\n        Z,\\r\\n        isLasso,\\r\\n        svg,\\r\\n        canvasBackground,\\r\\n        DRAWING,\\r\\n        objectCount,\\r\\n        selectionMode,\\r\\n        selectedElement,\\r\\n        selectedElements,\\r\\n        selectedId,\\r\\n        selectedVertices,\\r\\n        selectedVertex,\\r\\n        selectedControl0,\\r\\n        selectedControl1,\\r\\n        currentLayer,\\r\\n        appHistory,\\r\\n        currentState,\\r\\n        activeElement,\\r\\n        BBOX,\\r\\n        symbols,\\r\\n        showControls,\\r\\n        showGuides\\r\\n    } from \\"$lib/vectorial/pages/vectorial/stores\\";\\r\\n    import {\\r\\n        defs,\\r\\n        elements,\\r\\n        symbol,\\r\\n        mirrorVertex,\\r\\n        mirrorMode,\\r\\n        circleMode,\\r\\n        circledVertices,\\r\\n        circleCenter,\\r\\n    } from \\"$lib/vectorial/pages/vectorial/stores\\";\\r\\n\\r\\n    //import stores\\r\\n    import { onMount, onDestroy } from \\"svelte\\";\\r\\n    import LinearProgress from '@smui/linear-progress';\\r\\n    import { pageLoadState } from '$lib/vectorial/stores';\\r\\n    import Appearance from \\"$lib/vectorial/pages/vectorial/Appearance.svelte\\";\\r\\n    import Dimensions from \\"$lib/vectorial/pages/vectorial/Dimensions.svelte\\";\\r\\n    import Help from \\"$lib/vectorial/pages/vectorial/Help.svelte\\";\\r\\n    import UpdateDrawing from \\"$lib/vectorial/pages/vectorial/UpdateDrawing.svelte\\";\\r\\n    import UploadSymbol from \\"$lib/vectorial/pages/vectorial/UploadSymbol.svelte\\";\\r\\n    import SymbolList from \\"$lib/vectorial/pages/vectorial/SymbolList.svelte\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { Path } from \\"$lib/vectorial/utils/common/path\\";\\r\\n    import { Line } from \\"$lib/vectorial/utils/common/line\\";\\r\\n    import { Circle } from \\"$lib/vectorial/utils/common/circle\\";\\r\\n    import { Ellipse } from \\"$lib/vectorial/utils/common/ellipse\\";\\r\\n    import { Rectangle } from \\"$lib/vectorial/utils/common/rectangle\\";\\r\\n    import { Regular } from \\"$lib/vectorial/utils/common/regular\\";\\r\\n    import { Text } from \\"$lib/vectorial/utils/common/text\\";\\r\\n    import { Latex } from \\"$lib/vectorial/utils/common/latex\\";\\r\\n    import { Plot } from \\"$lib/vectorial/utils/common/plot\\";\\r\\n    import { Group } from \\"$lib/vectorial/utils/common/g\\";\\r\\n    import {Image} from '$lib/vectorial/utils/common/image';\\r\\n    import { Grid } from '$lib/vectorial/utils/common/grid';\\r\\n\\r\\n    import FileOperations from \\"$lib/vectorial/pages/vectorial/FileOperations.svelte\\";\\r\\n    \\r\\n    import AttributeOperations from \\"$lib/vectorial/pages/vectorial/AttributeOperations.svelte\\";\\r\\n\\r\\n\\r\\n    import Layers from \\"$lib/vectorial/pages/vectorial/Layers.svelte\\";\\r\\n    \\r\\n    import Filters from \\"$lib/vectorial/pages/vectorial/Filters.svelte\\";\\r\\n    import Markers from \\"$lib/vectorial/pages/vectorial/Markers.svelte\\";\\r\\n    import Masks from \\"$lib/vectorial/pages/vectorial/Masks.svelte\\";\\r\\n    \\r\\n    \\r\\n    // import { selectedElements } from \\"./stores\\";\\r\\n\\r\\n    export let sourceApp = \\"Vectorial\\";\\r\\n    export let dispatchUrl =  \`/vectorial/drawings\`; // \`/vectorial/\${$page.data.user.publicID}/drawings\`;\\r\\n    let dispatch = createEventDispatcher();\\r\\n    \\r\\n    \\r\\n    if (!$BBOX) {\\r\\n        $BBOX = {\\r\\n            x: -$clientWidth / 2,\\r\\n            y: -$clientHeight / 2,\\r\\n            height: $clientHeight,\\r\\n            width: $clientWidth,\\r\\n        };\\r\\n    }\\r\\n    const computeObjectCount = () => {\\r\\n        let objcount = 0;\\r\\n        let ids = Object.keys($elements);\\r\\n        let defIds = Object.keys($defs);\\r\\n        ids = [...ids, ...defIds];\\r\\n        // console.log(ids)\\r\\n        let counters = [];\\r\\n        for(let i = 0; i < ids.length; i++) {\\r\\n            let parts = ids[i].split('-');\\r\\n            \\r\\n            if(parts.length === 3) {\\r\\n                counters.push(Number(parts[2]));\\r\\n            }\\r\\n        }\\r\\n        // console.log(counters)\\r\\n        if(counters.length > 0) {\\r\\n            objcount = Math.max(...counters) + 1;\\r\\n        } else {\\r\\n            objcount = 0;\\r\\n        }\\r\\n        return objcount;\\r\\n    }\\r\\n    onMount(() => {\\r\\n        // MathJax.typeset();\\r\\n        \\r\\n        if ($elements) {\\r\\n            $objectCount = computeObjectCount();\\r\\n            // console.log('Ojbect count... layout', $objectCount)\\r\\n        }\\r\\n        $pageLoadState = true;\\r\\n        // hydrateElements();\\r\\n        // hydrateElementData();\\r\\n    });\\r\\n    let progress = 0;\\r\\n    let closed = false;\\r\\n    let timer;\\r\\n    \\r\\n    $: if(!$pageLoadState) {\\r\\n        reset();\\r\\n    } \\r\\n \\r\\n    onDestroy(() => {\\r\\n        clearInterval(timer);\\r\\n    });\\r\\n \\r\\n    function reset() {\\r\\n        progress = 0;\\r\\n        closed = false;\\r\\n        clearInterval(timer);\\r\\n        timer = setInterval(() => {\\r\\n            progress += 0.1;\\r\\n            if(!$pageLoadState && progress >= 0.7) progress = 0.7;\\r\\n            if ($pageLoadState || progress >= 1) {\\r\\n                progress = 1;\\r\\n                closed = true;\\r\\n                clearInterval(timer);\\r\\n            }\\r\\n        }, 100);\\r\\n    }\\r\\n    let selectedTool = '';\\r\\n    let showFilters = false,\\r\\n        showMarkers = false,\\r\\n        showMasks = false,\\r\\n        showElements = false,\\r\\n        showAppearance = false,\\r\\n        showDimensions = false,\\r\\n        showHelp = false,\\r\\n        isGettingn = false,\\r\\n        n = 3,\\r\\n        inputText = false,\\r\\n        textContent = \\"text\\",\\r\\n        inputLatex = false,\\r\\n        inputFunction = false,\\r\\n        elementAvailable = true,\\r\\n        takingControls = false,\\r\\n        inputElementId,\\r\\n        showSymbols = false,\\r\\n        uploadSymbol = false,\\r\\n        updateDrawing = false,\\r\\n        showLayers = false,\\r\\n        isDragged = false;\\r\\n\\r\\n    let filesMenu;\\r\\n    let showShapesMode = false,\\r\\n        showTextMode = false,\\r\\n        showLatexMode = false;\\r\\n\\r\\n    let isRotating = false,\\r\\n        stateChanged = false;\\r\\n\\r\\n    let isTransforming = false,\\r\\n        rotationMode = false;\\r\\n    let topbar, filesAnchor, filesAnchorClasses = {};\\r\\n    let showDocument = false;\\r\\n    let fileinput, image;\\r\\n    const updateSelectionBox = (id) => {\\r\\n        $elements[id].sbox.tl.x =\\r\\n            $elements[id].bbox.x * $elements[id].ctm.a +\\r\\n            $elements[id].bbox.y * $elements[id].ctm.c +\\r\\n            $elements[id].ctm.e;\\r\\n        $elements[id].sbox.tl.y =\\r\\n            $elements[id].bbox.x * $elements[id].ctm.b +\\r\\n            $elements[id].bbox.y * $elements[id].ctm.d +\\r\\n            $elements[id].ctm.f;\\r\\n\\r\\n        $elements[id].sbox.tr.x =\\r\\n            ($elements[id].bbox.x + $elements[id].bbox.width) *\\r\\n                $elements[id].ctm.a +\\r\\n            $elements[id].bbox.y * $elements[id].ctm.c +\\r\\n            $elements[id].ctm.e;\\r\\n        $elements[id].sbox.tr.y =\\r\\n            ($elements[id].bbox.x + $elements[id].bbox.width) *\\r\\n                $elements[id].ctm.b +\\r\\n            $elements[id].bbox.y * $elements[id].ctm.d +\\r\\n            $elements[id].ctm.f;\\r\\n\\r\\n        $elements[id].sbox.bl.x =\\r\\n            $elements[id].bbox.x * $elements[id].ctm.a +\\r\\n            ($elements[id].bbox.y + $elements[id].bbox.height) *\\r\\n                $elements[id].ctm.c +\\r\\n            $elements[id].ctm.e;\\r\\n        $elements[id].sbox.bl.y =\\r\\n            $elements[id].bbox.x * $elements[id].ctm.b +\\r\\n            ($elements[id].bbox.y + $elements[id].bbox.height) *\\r\\n                $elements[id].ctm.d +\\r\\n            $elements[id].ctm.f;\\r\\n\\r\\n        $elements[id].sbox.br.x =\\r\\n            ($elements[id].bbox.x + $elements[id].bbox.width) *\\r\\n                $elements[id].ctm.a +\\r\\n            ($elements[id].bbox.y + $elements[id].bbox.height) *\\r\\n                $elements[id].ctm.c +\\r\\n            $elements[id].ctm.e;\\r\\n        $elements[id].sbox.br.y =\\r\\n            ($elements[id].bbox.x + $elements[id].bbox.width) *\\r\\n                $elements[id].ctm.b +\\r\\n            ($elements[id].bbox.y + $elements[id].bbox.height) *\\r\\n                $elements[id].ctm.d +\\r\\n            $elements[id].ctm.f;\\r\\n\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const addImage = async (event) => {\\r\\n        image = event.target.files[0];\\r\\n        let reader = new FileReader();\\r\\n        reader.readAsDataURL(image);\\r\\n        reader.onload = event => {\\r\\n            let src = event.target.result;\\r\\n            let layer = 'Layer-'+$DRAWING.drawingID + '-' +$currentLayer;\\r\\n            if($elements.Layers.length > 0) {\\r\\n                if($elements.Layers[0] === 'Layer-0') {\\r\\n                    layer = 'Layer-' + $currentLayer;\\r\\n                }\\r\\n            }\\r\\n            let newImage = new Image({id: 'Image-' + $DRAWING.drawingID + '-' + $objectCount, layer:layer, parent: layer});\\r\\n            $elements[newImage.id] = newImage;\\r\\n            $elements[newImage.parent].children.push(newImage.id);\\r\\n            $objectCount = $objectCount + 1;\\r\\n\\r\\n            newImage.href = src;\\r\\n            $elements = $elements;\\r\\n             \\r\\n        };\\r\\n    };\\r\\n    const saveHistory = () => {\\r\\n        if (isDragged) {\\r\\n            $appHistory = [\\r\\n                ...$appHistory,\\r\\n                {\\r\\n                    id: $selectedId,\\r\\n                    change: {\\r\\n                        translatex: $elements[$selectedId].translatex,\\r\\n                        translatey: $elements[$selectedId].translatey,\\r\\n                    },\\r\\n                },\\r\\n            ];\\r\\n            $currentState = $appHistory.length - 1;\\r\\n        }\\r\\n    };\\r\\n    const text2plot = (pg, p, mathtext) => {\\r\\n        const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree\\r\\n        const code = plotNode.compile()        // returns {evaluate: function (scope) {...}}\\r\\n        pg.ymin = 0;  \\r\\n        pg.ymax = 100;\\r\\n        let points = [];\\r\\n        for(let i = pg.xmin; i < pg.xmax; i = i + pg.step) {\\r\\n            points.push({\\r\\n                x: i,\\r\\n                y: -code.evaluate({x: i})\\r\\n            })\\r\\n        }\\r\\n\\r\\n        let d = \\"M\\" + points[0].x + ',' + points[0].y;\\r\\n        for(let i = 1; i < points.length; i++) {\\r\\n            if(-points[i].y <  pg.ymin) {\\r\\n                pg.ymin = -points[i].y;\\r\\n            }\\r\\n            if(-points[i].y >  pg.ymax) {\\r\\n                pg.ymax = -points[i].y;\\r\\n            }\\r\\n            d += \\" L \\" + points[i].x + ',' + points[i].y;\\r\\n        }\\r\\n        p.d = d;\\r\\n        // return \`<path d=\\"\${d}\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" fill='none' vector-effect=\\"non-scaling-size\\" />\`\\r\\n    }\\r\\n    const createLine = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let line = new Line({\\r\\n            id: \\"Line-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        line.x1 = $BBOX.x + 2;\\r\\n        line.y1 = $BBOX.y + 2;\\r\\n        line.x2 = $BBOX.width / 2;\\r\\n        line.y2 = $BBOX.height / 2;\\r\\n        $elements[line.parent].children.push(line.id);\\r\\n        $elements[line.id] = line;\\r\\n        $objectCount = $objectCount + 1;\\r\\n        $elements = $elements;\\r\\n\\r\\n        $selectedId = line.id;\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: line.parent,\\r\\n                change: {\\r\\n                    children: $elements[line.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createCircle = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let circle = new Circle({\\r\\n            id: \\"Circle-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        circle.cx = $BBOX.x + $BBOX.width / 2;\\r\\n        circle.cy = $BBOX.y + $BBOX.height / 2;\\r\\n        circle.r = Math.min($BBOX.width / 4, 50);\\r\\n        circle.bbox = {\\r\\n            x: circle.cx - circle.r,\\r\\n            y: circle.cy - circle.r,\\r\\n            width: 2 * circle.r,\\r\\n            height: 2 * circle.r\\r\\n        }\\r\\n        \\r\\n        $elements[circle.parent].children.push(circle.id);\\r\\n        $elements[circle.id] = circle;\\r\\n        $objectCount = $objectCount + 1;\\r\\n        $elements = $elements;\\r\\n        \\r\\n        $selectedId = circle.id;\\r\\n        updateSelectionBox(circle.id)\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: circle.parent,\\r\\n                change: {\\r\\n                    children: $elements[circle.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createEllipse = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let ellipse = new Ellipse({\\r\\n            id: \\"Ellipse-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        ellipse.cx = $BBOX.x + $BBOX.width / 2;\\r\\n        ellipse.cy = $BBOX.y + $BBOX.height / 2;\\r\\n        ellipse.rx = Math.min($BBOX.width / 4, 100);\\r\\n        ellipse.ry = Math.min($BBOX.height / 4, 50);\\r\\n        ellipse.bbox = {\\r\\n            x: ellipse.cx - ellipse.rx,\\r\\n            y: ellipse.cy - ellipse.ry,\\r\\n            width: 2 * ellipse.rx,\\r\\n            height: 2 * ellipse.ry\\r\\n        }\\r\\n        \\r\\n        $elements[ellipse.parent].children.push(ellipse.id);\\r\\n        $elements[ellipse.id] = ellipse;\\r\\n        $objectCount = $objectCount + 1;\\r\\n        $elements = $elements;\\r\\n        \\r\\n        $selectedId = ellipse.id;\\r\\n        updateSelectionBox(ellipse.id);\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: ellipse.parent,\\r\\n                change: {\\r\\n                    children: $elements[ellipse.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createRect = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let rect = new Rectangle({\\r\\n            id: \\"Rect-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        rect.x = $BBOX.x + $BBOX.width / 2;\\r\\n        rect.y = $BBOX.y + $BBOX.height / 2;\\r\\n        rect.width = Math.min($BBOX.width / 3, 70);\\r\\n        rect.height = Math.min($BBOX.width / 4, 50);\\r\\n        rect.bbox = {\\r\\n            x: rect.x,\\r\\n            y: rect.y,\\r\\n            width: rect.width,\\r\\n            height: rect.height\\r\\n        }\\r\\n        $elements[rect.id] = rect;\\r\\n        $elements[rect.parent].children.push(rect.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedId = rect.id;\\r\\n        updateSelectionBox($selectedId);\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: rect.parent,\\r\\n                change: {\\r\\n                    children: $elements[rect.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n\\r\\n    const createRegular = () => {\\r\\n        isGettingn = false;\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let rect = new Regular({\\r\\n            n: n,\\r\\n            id: \\"Regular-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n            center: new Point(\\r\\n                $BBOX.x + $BBOX.width / 2,\\r\\n                $BBOX.y + $BBOX.height / 2\\r\\n            ),\\r\\n            r: Math.min($BBOX.width / 4, 50),\\r\\n        });\\r\\n        rect.axis = new Point(rect.r, rect.r);\\r\\n        rect.bbox = {\\r\\n            x: rect.center.x - rect.r,\\r\\n            y: rect.center.y - rect.r,\\r\\n            width: 2 * rect.r,\\r\\n            height: 2 * rect.r\\r\\n        }\\r\\n        \\r\\n        $elements[rect.id] = rect;\\r\\n        $elements[rect.parent].children.push(rect.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n\\r\\n        $selectedId = rect.id;\\r\\n        updateSelectionBox(rect.id);\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: rect.parent,\\r\\n                change: {\\r\\n                    children: $elements[rect.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createText = () => {\\r\\n        inputText = false;\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n\\r\\n        let text = new Text({\\r\\n            id: \\"Text-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            content: textContent,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        text.x = $BBOX.x + $BBOX.width / 2;\\r\\n        text.y = $BBOX.y + $BBOX.height / 2;\\r\\n        text.bbox = {\\r\\n            x: text.x,\\r\\n            y: text.y - 20,\\r\\n            width: 20 * text.content.length,\\r\\n            height: 25\\r\\n        }\\r\\n        \\r\\n        text.fontSize = $BBOX.width > 300 ? 20 : 5;\\r\\n        $elements[text.id] = text;\\r\\n        $elements[text.parent].children.push(text.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n\\r\\n        $selectedId = text.id;\\r\\n        updateSelectionBox(text.id);\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: text.parent,\\r\\n                change: {\\r\\n                    children: $elements[text.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createLatex = () => {\\r\\n        inputLatex = false;\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let text = new Latex({\\r\\n            id: \\"Latex-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            content: textContent,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        text.bbox = {\\r\\n            x: 0,\\r\\n            y: 0,\\r\\n            width: 20 * text.content.length,\\r\\n            height: 20\\r\\n        }\\r\\n        \\r\\n        text.tm =\\r\\n            $BBOX.width > 500\\r\\n                ? new DOMMatrix([\\r\\n                      0.05,\\r\\n                      0,\\r\\n                      0,\\r\\n                      0.05,\\r\\n                      $BBOX.x + $BBOX.width / 2,\\r\\n                      $BBOX.y + $BBOX.height / 2,\\r\\n                  ])\\r\\n                : new DOMMatrix([\\r\\n                      0.05,\\r\\n                      0,\\r\\n                      0,\\r\\n                      0.05,\\r\\n                      $BBOX.x + $BBOX.width / 2,\\r\\n                      $BBOX.y + $BBOX.height / 2,\\r\\n                  ]);\\r\\n        $elements[text.id] = text;\\r\\n        $elements[text.parent].children.push(text.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedId = text.id;\\r\\n        updateSelectionBox(text.id)\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: text.parent,\\r\\n                change: {\\r\\n                    children: $elements[text.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    };\\r\\n    const createPlot = () => {\\r\\n        inputFunction = false;\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let plotGroup = new Plot({\\r\\n            id: \\"Plot-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            functions: [textContent],\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        plotGroup.tm = new DOMMatrix([\\r\\n                      1,\\r\\n                      0,\\r\\n                      0,\\r\\n                      1,\\r\\n                      $BBOX.x + $BBOX.width / 2,\\r\\n                      $BBOX.y + $BBOX.height / 2,\\r\\n                  ])\\r\\n        $objectCount = $objectCount + 1;\\r\\n        let id = \\"Path-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount;\\r\\n        let path = new Path({ id: id, parent: plotGroup.id, layer: layer, isLocked: true });\\r\\n        text2plot(plotGroup, path, textContent);\\r\\n        plotGroup.children.push(id);\\r\\n        $elements[id] = path;\\r\\n        \\r\\n        $elements[plotGroup.id] = plotGroup;\\r\\n        $elements[plotGroup.parent].children.push(plotGroup.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedId = plotGroup.id;\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: plotGroup.parent,\\r\\n                change: {\\r\\n                    children: $elements[plotGroup.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    }\\r\\n    const createGrid = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let rect = new Grid({\\r\\n            id: \\"Grid-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            layer: layer,\\r\\n            parent: layer,\\r\\n        });\\r\\n        rect.x = $BBOX.x + $BBOX.width / 2;\\r\\n        rect.y = $BBOX.y + $BBOX.height / 2;\\r\\n        rect.bbox = {\\r\\n            x: rect.x,\\r\\n            y: rect.y,\\r\\n            width: 100,\\r\\n            height: 100\\r\\n        }\\r\\n        \\r\\n        $elements[rect.id] = rect;\\r\\n        $elements[rect.parent].children.push(rect.id);\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedId = rect.id;\\r\\n        updateSelectionBox(rect.id);\\r\\n        $appHistory = [\\r\\n            ...$appHistory,\\r\\n            {\\r\\n                id: rect.parent,\\r\\n                change: {\\r\\n                    children: $elements[rect.parent].children.map(item => item),\\r\\n                },\\r\\n            },\\r\\n            {\\r\\n                id: $selectedId,\\r\\n                change: {\\r\\n                    tm: $elements[$selectedId].tm,\\r\\n                    ctm: $elements[$selectedId].ctm,\\r\\n                    bbox: $elements[$selectedId].bbox,\\r\\n                    sbox: $elements[$selectedId].sbox,\\r\\n                    axis: $elements[$selectedId].axis,\\r\\n                },\\r\\n            }\\r\\n        ];\\r\\n        $currentState = $appHistory.length - 1;\\r\\n    }\\r\\n    const setLassoTool = () => {\\r\\n        $isLasso = !$isLasso;\\r\\n        if($isLasso) {\\r\\n            selectedTool = 'Lasso';\\r\\n        }\\r\\n        if (!$isLasso && $elements[\\"lasso\\"]) {\\r\\n            //remove lasso path\\r\\n            $elements[$elements[\\"lasso\\"].parent].children.splice(-1, 1);\\r\\n            $elements[\\"lasso\\"] = null;//better remove from the list\\r\\n            delete $elements[\\"lasso\\"];\\r\\n            $selectedId = null;\\r\\n        }\\r\\n    }\\r\\n    const takeAction = (evt) => {\\r\\n        switch(evt.detail.selectedAction) {\\r\\n            // case 'Line': {\\r\\n            //     createLine();\\r\\n            //     break;\\r\\n            // }\\r\\n            case 'Circle': {\\r\\n                createCircle();\\r\\n                break;\\r\\n            }\\r\\n            case 'Ellipse': {\\r\\n                createEllipse();\\r\\n                break;\\r\\n            }\\r\\n            case 'Rectangle': {\\r\\n                createRect();\\r\\n                break;\\r\\n            }\\r\\n            case 'Text': {\\r\\n                textContent = evt.detail.inputValue;\\r\\n                createText();\\r\\n                break;\\r\\n            }\\r\\n            case 'LaTeX': {\\r\\n                textContent = evt.detail.inputValue;\\r\\n                createLatex();\\r\\n                break;\\r\\n            }\\r\\n            case 'Plot': {\\r\\n                textContent = evt.detail.inputValue;\\r\\n                createPlot();\\r\\n                break;\\r\\n            }\\r\\n            case 'Regular': {\\r\\n                n = parseInt(evt.detail.inputValue);\\r\\n                createRegular();\\r\\n                break;\\r\\n            }\\r\\n            case 'AddNode': {\\r\\n                createPath(inputElementId, $boundingBox, true)\\r\\n                break;\\r\\n            }\\r\\n            case 'Lasso': {\\r\\n                break;\\r\\n            }\\r\\n            case 'Grid': {\\r\\n                createGrid();\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    const resetBoundingbox = (evt) => {\\r\\n        ctm = $boundingBox.getScreenCTM().inverse();\\r\\n    }\\r\\n    const getIndex = (a, arr) => {\\r\\n        if (!arr || arr.length === 0) return -1;\\r\\n        let index = -1;\\r\\n        for (let i = 0; i < arr.length; i++) {\\r\\n            if (a === arr[i]) index = i;\\r\\n        }\\r\\n        return index;\\r\\n    };\\r\\n    const compareFn = (a, b) => {\\r\\n        //a={id}\\r\\n\\r\\n        if ($elements[a].parent === $elements[b].parent) {\\r\\n            let ia = getIndex(a, $elements[$elements[a].parent].children);\\r\\n            let ib = getIndex(b, $elements[$elements[b].parent].children);\\r\\n            return ia - ib;\\r\\n        } else {\\r\\n            // let la = $elements[groupIda].treeNode.elements.length;\\r\\n            // let lb = $elements[groupIdb].treeNode.elements.length;\\r\\n            // if(la !== lb) return la - lb;\\r\\n            return compareFn(\\r\\n                $elements[$elements[a].parent],\\r\\n                $elements[$elements[b].parent]\\r\\n            );\\r\\n        }\\r\\n    };\\r\\n    const sortSelection = () => {\\r\\n        $selectedElements.sort(compareFn);\\r\\n        $selectedElements = $selectedElements;\\r\\n    };\\r\\n    const deleteElementsFromLayer = (elementList) => {\\r\\n        elementList.forEach((item) => {\\r\\n            let index = getIndex(item, $elements[$elements[item].parent].children);\\r\\n            $elements[$elements[item].parent].children.splice(index, 1);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const computeInitialSBox = (id) => {\\r\\n        let children = $elements[id].children;\\r\\n\\r\\n        let xMin = $elements[children[0]].sbox.tl.x;\\r\\n        let xMax = $elements[children[0]].sbox.br.x;\\r\\n        let yMin = $elements[children[0]].sbox.tl.y;\\r\\n        let yMax = $elements[children[0]].sbox.br.y;\\r\\n\\r\\n        for (let i = 0; i < children.length; i++) {\\r\\n            if ($elements[children[i]].sbox.tl.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.tl.x;\\r\\n            if ($elements[children[i]].sbox.bl.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.bl.x;\\r\\n            if ($elements[children[i]].sbox.tr.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.tr.x;\\r\\n            if ($elements[children[i]].sbox.br.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.br.x;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.y < yMin)\\r\\n                yMin = $elements[children[i]].sbox.tl.y;\\r\\n            if ($elements[children[i]].sbox.bl.y < yMin)\\r\\n                yMin = $elements[children[i]].sbox.bl.y;\\r\\n            if ($elements[children[i]].sbox.tr.y < xMin)\\r\\n                yMin = $elements[children[i]].sbox.tr.y;\\r\\n            if ($elements[children[i]].sbox.br.y < xMin)\\r\\n                yMin = $elements[children[i]].sbox.br.y;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.tl.x;\\r\\n            if ($elements[children[i]].sbox.bl.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.bl.x;\\r\\n            if ($elements[children[i]].sbox.tr.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.tr.x;\\r\\n            if ($elements[children[i]].sbox.br.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.br.x;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.y > yMax)\\r\\n                yMax = $elements[children[i]].sbox.tl.y;\\r\\n            if ($elements[children[i]].sbox.bl.y > yMax)\\r\\n                yMax = $elements[children[i]].sbox.bl.y;\\r\\n            if ($elements[children[i]].sbox.tr.y > xMax)\\r\\n                yMax = $elements[children[i]].sbox.tr.y;\\r\\n            if ($elements[children[i]].sbox.br.y > xMax)\\r\\n                yMax = $elements[children[i]].sbox.br.y;\\r\\n        }\\r\\n        $elements[id].sbox.tl = new Point(xMin, yMin);\\r\\n        $elements[id].sbox.tr = new Point(xMax, yMin);\\r\\n        $elements[id].sbox.bl = new Point(xMin, yMax);\\r\\n        $elements[id].sbox.br = new Point(xMax, yMax);\\r\\n\\r\\n        $elements[id].axis = new Point((xMin + xMax) / 2, (yMin + yMax) / 2);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const createGroup = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let group = new Group({\\r\\n            id: \\"Group-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            parent: layer,\\r\\n            layer: layer,\\r\\n        });\\r\\n        $elements[group.id] = group;\\r\\n        $selectedId = group.id;\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        sortSelection();\\r\\n\\r\\n        deleteElementsFromLayer($selectedElements); //remove references from parents\\r\\n        $elements[group.parent].children.push(group.id);\\r\\n        //update elements in $selectedElements\\r\\n        $selectedElements.forEach((id) => {\\r\\n            $elements[id].layer = group.layer;\\r\\n            $elements[id].parent = group.id;\\r\\n            $elements[id].isLocked = true;\\r\\n            group.children.push(id);\\r\\n            //tm of the element\\r\\n            // $elements[elem.id].tm = new DOMMatrix([\\r\\n            //     $elements[elem.id].CTM.a, $elements[elem.id].CTM.b, $elements[elem.id].CTM.c, $elements[elem.id].CTM.d, $elements[elem.id].CTM.e, $elements[elem.id].CTM.f\\r\\n            // ]);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n        computeInitialSBox(group.id);\\r\\n        $selectedElements = [];\\r\\n    };\\r\\n    const transformMode = () => {\\r\\n        // if(!newVertex) {\\r\\n        //     $showControls = false;\\r\\n        //     $showVertices = false;\\r\\n        // }\\r\\n        isTransforming = !isTransforming;\\r\\n        $showBBoxControls = !$showBBoxControls;\\r\\n        $showControls = false;\\r\\n        //create group if lasso element is selected\\r\\n        if($selectedElements && $selectedElements.length > 1) {\\r\\n            createGroup();\\r\\n        }\\r\\n        // if ($selectedId === \\"lasso\\") {\\r\\n        //     $elements[$elements[\\"lasso\\"].parent].children.splice(-1, 1);\\r\\n        //     $elements[\\"lasso\\"] = null;\\r\\n        //     $selectedId = null;\\r\\n        //     $elements = $elements;\\r\\n\\r\\n        //     if ($lassoElements.length > 1) {\\r\\n        //         createGroup();\\r\\n        //         $isLassoGroup = true;\\r\\n        //     } else {\\r\\n        //         $selectedId = $lassoElements[0];\\r\\n        //     }\\r\\n        // }\\r\\n    };\\r\\n    const getSelection = () => {\\r\\n        $selectionMode = !$selectionMode;\\r\\n        if ($selectionMode) {\\r\\n            $selectedElements = [];\\r\\n            $selectedVertices = [];\\r\\n            $svg.addEventListener(\\"click\\", getSelectionList);\\r\\n            $svg.addEventListener(\\"touchstart\\", getSelectionList);\\r\\n        } else {\\r\\n            $svg.removeEventListener(\\"click\\", getSelectionList);\\r\\n            $svg.removeEventListener(\\"touchstart\\", getSelectionList);\\r\\n        }\\r\\n    };\\r\\n    const getSelectionList = (evt) => {\\r\\n        evt.preventDefault();\\r\\n        let id, index;\\r\\n        \\r\\n        if (evt.target && !evt.target.classList.contains(\\"SVG\\")) {\\r\\n            if($showControls && evt.target.classList.contains('vertex')) {\\r\\n                id = evt.target.getAttribute(\\"id\\");\\r\\n                index = $selectedVertices.indexOf(id);\\r\\n                // console.log(id, index, evt.target)\\r\\n                if (id && index === -1) {\\r\\n                    $selectedVertices = [...$selectedVertices, id];\\r\\n                } else {\\r\\n                    $selectedVertices = $selectedVertices.filter(\\r\\n                        (item) => item !== id\\r\\n                    );\\r\\n                }\\r\\n                $selectedVertices = $selectedVertices;\\r\\n                console.log($selectedVertices)\\r\\n            } else {\\r\\n                if(!$selectedElements) return;\\r\\n                // id = evt.target.getAttribute(\\"id\\");\\r\\n                id = $selectedId;\\r\\n                index = $selectedElements.indexOf(id);\\r\\n                // console.log(id, index, evt.target)\\r\\n                if (id && index === -1) {\\r\\n                    $selectedElements = [...$selectedElements, id];\\r\\n                } else {\\r\\n                    $selectedElements = $selectedElements.filter(\\r\\n                        (item) => item !== id\\r\\n                    );\\r\\n                }\\r\\n                $selectedElements = $selectedElements;\\r\\n                // console.log($selectedElements)\\r\\n            }\\r\\n            \\r\\n        }\\r\\n    };\\r\\n    const updated = (evt) => {\\r\\n        dispatch(\\"updated\\", $DRAWING);\\r\\n        goto(dispatchUrl);\\r\\n    };\\r\\n    const cancelUpdate = (evt) => {\\r\\n        if (sourceApp === \\"Colorn\\") {\\r\\n            goto(dispatchUrl);\\r\\n        }\\r\\n        updateDrawing = false;\\r\\n    };\\r\\n    const deleteElement = (id) => {\\r\\n        elementAvailable = false;\\r\\n        //update the orders of smaller siblings\\r\\n        if ($elements[id]) {\\r\\n            let parent = $elements[id].parent;\\r\\n            let children = $elements[parent].children;\\r\\n            let index = -1;\\r\\n            for (let i = 0; i < children.length; i++) {\\r\\n                if (children[i] === id) index = i;\\r\\n            }\\r\\n            children.splice(index, 1);\\r\\n            delete $elements[id];\\r\\n            $elements[parent].children = children;\\r\\n            $elements = $elements;\\r\\n            $selectedId = null;\\r\\n            elementAvailable = true;\\r\\n        }\\r\\n    };\\r\\n    const deleteGroup = (id) => {\\r\\n        elementAvailable = false;\\r\\n        //update the orders of smaller siblings\\r\\n        let parent = $elements[id].parent;\\r\\n        let children = $elements[parent].children;\\r\\n        let index = -1;\\r\\n        for (let i = 0; i < children.length; i++) {\\r\\n            if (children[i] === id) index = i;\\r\\n        }\\r\\n        children.splice(index, 1);\\r\\n        $elements[parent].children = children;\\r\\n        while ($elements[id].children.length > 0) {\\r\\n            deleteItem($elements[id].children[0]);\\r\\n        }\\r\\n\\r\\n        delete $elements[id];\\r\\n\\r\\n        $elements = $elements;\\r\\n        $selectedId = null;\\r\\n        elementAvailable = true;\\r\\n    };\\r\\n    const deleteItem = (id) => {\\r\\n        if (id) {\\r\\n            if (id.split(\\"-\\")[0] === \\"Group\\") {\\r\\n                deleteGroup(id);\\r\\n            } else if(id.split(\\"-\\")[0] === \\"Layer\\") {\\r\\n                //remove reference from Layers\\r\\n                // console.log('Deleting layer...', id)\\r\\n                $elements.Layers = $elements.Layers.filter(elemId => elemId !== id);\\r\\n                $elements = $elements;\\r\\n            } else {\\r\\n                deleteElement(id);\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    // $: switch(topbar) {\\r\\n    //     case 'Document': {\\r\\n    //         filesMenu.setOpen(true);\\r\\n    //         break;\\r\\n    //     }\\r\\n    // }\\r\\n    // $:console.log('object entries...', Object.entries($elements).length)\\r\\n<\/script>\\r\\n<style>\\r\\n    .background {\\r\\n        position: fixed;\\r\\n        background: rgba(0, 0, 0, 0.05);\\r\\n        overflow: hidden;\\r\\n        height: 100%;\\r\\n        width: 100%;\\r\\n        display: grid;\\r\\n        grid-template-columns: 3em 1fr 3em;\\r\\n        grid-template-rows: 3em 1fr;\\r\\n        grid-template-areas:\\r\\n            \\"top top top\\"\\r\\n            \\"left canvasContainer right\\";\\r\\n        background-image: url(\\"/vectorial/background.svg\\");\\r\\n        background-repeat: no-repeat;\\r\\n        background-position: center;\\r\\n    }\\r\\n    .top {\\r\\n        grid-area: top;\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 110px;\\r\\n        z-index: 10;\\r\\n        flex-wrap: wrap;\\r\\n        height: 2.5em;\\r\\n        /* margin-left: 1em; */\\r\\n    }\\r\\n    .left {\\r\\n        grid-area: left;\\r\\n        display: flex;\\r\\n        margin-top: 10%;\\r\\n        align-items: center;\\r\\n        z-index: 2;\\r\\n        position: absolute;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .right {\\r\\n        grid-area: right;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        z-index: 2;\\r\\n        position: absolute;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .canvasContainer {\\r\\n        grid-area: canvasContainer;\\r\\n\\r\\n        overflow: hidden;\\r\\n        width: 85vw;\\r\\n        height: 85vh;\\r\\n\\r\\n        display: flex;\\r\\n        margin: auto;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        background-color: rgb(232, 232, 232);\\r\\n        background-image: url(\\"/vectorial/background.svg\\");\\r\\n        background-repeat: no-repeat;\\r\\n        background-position: center;\\r\\n    }\\r\\n    .leftside,\\r\\n    .rightside {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        align-items: center;\\r\\n        gap: 0.5em;\\r\\n    }\\r\\n    \\r\\n    .rightDropDown {\\r\\n        position: fixed;\\r\\n        z-index: 10;\\r\\n        top: 4.5em;\\r\\n        right: 4.5em;\\r\\n        \\r\\n        display: flex;\\r\\n        gap: 0.9em;\\r\\n        justify-content: start;\\r\\n        font-size: 0.7em;\\r\\n        \\r\\n        width: 300px;\\r\\n        \\r\\n        overflow-y: auto;\\r\\n        height: 600px;\\r\\n    }\\r\\n   \\r\\n</style>\\r\\n<svelte:head>\\r\\n    <link\\r\\n        rel=\\"stylesheet\\"\\r\\n        id=\\"theme\\"\\r\\n        href=\\"/smui{$darkMode ? '-dark' : ''}.css\\"\\r\\n    />\\r\\n</svelte:head>\\r\\n{#key $pageLoadState}\\r\\n    <LinearProgress bind:progress {closed} />\\r\\n{/key}\\r\\n<article class=\\"background\\">\\r\\n    <div class=\\"top\\">\\r\\n        <div class=\\"leftside\\">\\r\\n            <ActionBar bind:selectedTool on:doAction={takeAction} />\\r\\n        </div>\\r\\n        <div class=\\"rightside\\">\\r\\n            <IconButton on:click={() => showDocument = !showDocument} style=\\"background:{showDocument ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">article</Icon>\\r\\n            </IconButton>\\r\\n            <IconButton on:click={() => showHelp = !showHelp} style=\\"background:{showHelp ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">help</Icon>\\r\\n            </IconButton>\\r\\n        </div>\\r\\n       \\r\\n    </div>\\r\\n    <div class=\\"left\\">\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => selectedTool = 'Shapes'} style=\\"background:{selectedTool === 'Shapes' ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">interests</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip xPos=\\"end\\">\\r\\n                <Content>\\r\\n                    Select shapes to add to the drawing\\r\\n                </Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => selectedTool = 'Text'} style=\\"background:{selectedTool === 'Text' ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">text_fields</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Add text</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => selectedTool = 'LaTeX'} style=\\"background:{selectedTool === 'LaTeX' ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">functions</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Add latex</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => selectedTool = 'Plot'} style=\\"background:{selectedTool === 'Plot' ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-icons\\">show_chart</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Plot function</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => fileinput.click()}>\\r\\n                <input style=\\"display: none;\\" type=\\"file\\" accept=\\".jpg, .jpeg, .png\\"\\r\\n                            id=\\"input-file\\"\\r\\n                            name=\\"input-file\\"\\r\\n                            on:change={addImage}\\r\\n                            bind:this={fileinput}\\r\\n                            >\\r\\n                <Icon class=\\"material-icons\\">add_a_photo</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Add picture (jpg, jpeg, png)</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => selectedTool = 'Path'} style=\\"background:{selectedTool === 'Path' ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-symbols-outlined\\">stylus</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Enter path mode</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={getSelection} style=\\"background:{$selectionMode ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-symbols-outlined\\">select</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Select items into a list by clicking on each item. Click again on a selected item to remove it from the selection list. Click on this button again to exit selection mode.</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={setLassoTool} style=\\"background:{$isLasso ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-symbols-outlined\\">laps</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Select items by creating a closed area around them. First create a lasso path. Click on this button to exit lasso mode.</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={transformMode} style=\\"background:{isTransforming ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon component={Svg} viewBox=\\"-480 -290 420 420\\">\\r\\n                    <rect\\r\\n                    x=\\"0\\"\\r\\n                    y=\\"0\\"\\r\\n                    width=\\"280\\"\\r\\n                    height=\\"280\\"\\r\\n                    fill='none'\\r\\n                    stroke=\\"currentColor\\"\\r\\n                    stroke-width=\\"10\\"\\r\\n                    stroke-dasharray=\\"30\\"\\r\\n                    opacity=\\"1\\"\\r\\n                    transform=\\"translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"rgba(0, 200, 0, 1)\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-260 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-260 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-120 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-120 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-120 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-260 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-400 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                    <circle\\r\\n                        cx=\\"0\\"\\r\\n                        cy=\\"0\\"\\r\\n                        r=\\"30\\"\\r\\n                        fill=\\"currentColor\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        stroke-width=\\"1\\"\\r\\n                        stroke-dasharray=\\"none\\"\\r\\n                        opacity=\\"1\\"\\r\\n                        transform=\\"translate(-400 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)\\"\\r\\n                    />\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Transform mode. Resize by using circles on the boundary. Click on the center circle to activate rotation mode.</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => deleteItem($selectedId)}>\\r\\n                <Icon class=\\"material-icons\\">delete</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Delete selected item.</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper rich>\\r\\n            <IconButton on:click={() => $showGuides = !$showGuides} style=\\"background:{$showGuides ? 'rgba(255, 255, 255, 0.5)': 'none'}\\">\\r\\n                <Icon class=\\"material-symbols-outlined\\">grid_guides</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content>Show / Hide guides</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n    </div>\\r\\n    <div class=\\"right\\">\\r\\n        <AttributeOperations\\r\\n            bind:showAppearance\\r\\n            bind:showDimensions\\r\\n            bind:showSymbols\\r\\n            bind:uploadSymbol\\r\\n            bind:showLayers\\r\\n            bind:showFilters\\r\\n            bind:showMasks\\r\\n            bind:showMarkers\\r\\n        />\\r\\n        <!-- <Info /> -->\\r\\n        <!-- {#if uploadSymbol && $elements}\\r\\n            <div class=\\"rightDropDown\\">\\r\\n                <UploadSymbol\\r\\n                    on:symbolSaved={updateSymbolList}\\r\\n                    on:cancel={() => (uploadSymbol = false)}\\r\\n                />\\r\\n            </div>\\r\\n        {/if} -->\\r\\n        <!-- {#if showSymbols}\\r\\n            <SymbolList />\\r\\n        {/if} -->\\r\\n    </div>\\r\\n    <div class=\\"canvasContainer\\" bind:clientHeight={$clientHeight} bind:clientWidth={$clientWidth}>\\r\\n        <slot />\\r\\n        {#if showDocument || showHelp || updateDrawing || showAppearance || showDimensions || showFilters || showMarkers || showMasks || showLayers}\\r\\n            <div class=\\"rightDropDown\\">\\r\\n                    {#if showDocument}   \\r\\n                        <FileOperations\\r\\n                            bind:updateDrawing\\r\\n                            bind:uploadSymbol\\r\\n                            bind:showHelp\\r\\n                            {dispatchUrl}\\r\\n                            on:closeMenu={() => showDocument = false}\\r\\n                        />\\r\\n                    {/if}\\r\\n                    {#if showHelp}\\r\\n                        <Help />\\r\\n                    {/if}\\r\\n                    {#if updateDrawing && $elements}\\r\\n                        <UpdateDrawing\\r\\n                            {sourceApp}\\r\\n                            on:updated={updated}\\r\\n                            on:drawingSaved={() => goto(\\"/vectorial\\")}\\r\\n                            on:cancel={cancelUpdate}\\r\\n                        />\\r\\n                    {/if}\\r\\n                    {#if elementAvailable && showAppearance && Object.entries($elements).length > 0}\\r\\n                        <Appearance />\\r\\n                    {/if}\\r\\n                    {#if elementAvailable && showDimensions}\\r\\n                        <Dimensions />\\r\\n                    {/if}\\r\\n                    {#if elementAvailable && showFilters && Object.entries($elements).length > 0}\\r\\n                        <Filters />\\r\\n                    {/if}\\r\\n                    {#if elementAvailable && showMarkers && Object.entries($elements).length > 0}\\r\\n                        <Markers />\\r\\n                    {/if}\\r\\n                    {#if elementAvailable && showMasks && Object.entries($elements).length > 0}\\r\\n                        <Masks />\\r\\n                    {/if}\\r\\n                    {#if showLayers && Object.entries($elements).length > 0}\\r\\n                        <Layers />\\r\\n                    {/if}\\r\\n            </div>\\r\\n        {/if}\\r\\n    </div>\\r\\n</article>\\r\\n<!-- <Dialog bind:open={isGettingn}>\\r\\n    <Title style=\\"font-size: 1.5em;color:currentColor;margin:0;\\">Enter number of sides</Title>\\r\\n    <Content>\\r\\n        <Textfield type=\\"number\\" label=\\"n\\" bind:value={n} style=\\"margin: 0.5em;\\" variant=\\"filled\\"/>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={createRegular}>Done</Button>\\r\\n        <Button on:click={() => isGettingn = false}>Cancel</Button>\\r\\n    </Actions>\\r\\n</Dialog> -->\\r\\n\\r\\n\\r\\n"],"names":[],"mappings":"AAynCI,yBAAY,CACR,QAAQ,CAAE,KAAK,CACf,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC/B,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,kBAAkB,CAAE,GAAG,CAAC,GAAG,CAC3B,mBAAmB,CACf,aAAa;AACzB,YAAY,4BAA4B,CAChC,gBAAgB,CAAE,gCAAgC,CAClD,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MACzB,CACA,kBAAK,CACD,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,KAAK,CAChC,OAAO,CAAE,EAAE,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KAEZ,CACA,mBAAM,CACF,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,MACpB,CACA,oBAAO,CACH,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,MACpB,CACA,8BAAiB,CACb,SAAS,CAAE,eAAe,CAE1B,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,gBAAgB,CAAE,gCAAgC,CAClD,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MACzB,CACA,uBAAS,CACT,wBAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,KACT,CAEA,4BAAe,CACX,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,EAAE,CACX,GAAG,CAAE,KAAK,CACV,KAAK,CAAE,KAAK,CAEZ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,KAAK,CACV,eAAe,CAAE,KAAK,CACtB,SAAS,CAAE,KAAK,CAEhB,KAAK,CAAE,KAAK,CAEZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,KACZ"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $$unsubscribe_selectedId;
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_selectedElements;
  let $$unsubscribe_selectedVertices;
  let $$unsubscribe_showControls;
  let $$unsubscribe_svg;
  let $selectionMode, $$unsubscribe_selectionMode;
  let $$unsubscribe_showBBoxControls;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_currentLayer;
  let $$unsubscribe_boundingBox;
  let $isLasso, $$unsubscribe_isLasso;
  let $$unsubscribe_appHistory;
  let $$unsubscribe_currentState;
  let $BBOX, $$unsubscribe_BBOX;
  let $pageLoadState, $$unsubscribe_pageLoadState;
  let $$unsubscribe_defs;
  let $clientWidth, $$unsubscribe_clientWidth;
  let $clientHeight, $$unsubscribe_clientHeight;
  let $darkMode, $$unsubscribe_darkMode;
  let $showGuides, $$unsubscribe_showGuides;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => value);
  $$unsubscribe_selectedVertices = subscribe(selectedVertices, (value) => value);
  $$unsubscribe_showControls = subscribe(showControls, (value) => value);
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_selectionMode = subscribe(selectionMode, (value) => $selectionMode = value);
  $$unsubscribe_showBBoxControls = subscribe(showBBoxControls, (value) => value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_currentLayer = subscribe(currentLayer, (value) => value);
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => value);
  $$unsubscribe_isLasso = subscribe(isLasso, (value) => $isLasso = value);
  $$unsubscribe_appHistory = subscribe(appHistory, (value) => value);
  $$unsubscribe_currentState = subscribe(currentState, (value) => value);
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => $BBOX = value);
  $$unsubscribe_pageLoadState = subscribe(pageLoadState, (value) => $pageLoadState = value);
  $$unsubscribe_defs = subscribe(defs, (value) => value);
  $$unsubscribe_clientWidth = subscribe(clientWidth, (value) => $clientWidth = value);
  $$unsubscribe_clientHeight = subscribe(clientHeight, (value) => $clientHeight = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_showGuides = subscribe(showGuides, (value) => $showGuides = value);
  const config = {};
  create(all, config);
  let { sourceApp = "Vectorial" } = $$props;
  let { dispatchUrl = `/vectorial/drawings` } = $$props;
  createEventDispatcher();
  if (!$BBOX) {
    set_store_value(
      BBOX,
      $BBOX = {
        x: -$clientWidth / 2,
        y: -$clientHeight / 2,
        height: $clientHeight,
        width: $clientWidth
      },
      $BBOX
    );
  }
  let progress = 0;
  let closed = false;
  let timer;
  onDestroy(() => {
    clearInterval(timer);
  });
  function reset() {
    progress = 0;
    closed = false;
    clearInterval(timer);
    timer = setInterval(
      () => {
        progress += 0.1;
        if (!$pageLoadState && progress >= 0.7) progress = 0.7;
        if ($pageLoadState || progress >= 1) {
          progress = 1;
          closed = true;
          clearInterval(timer);
        }
      },
      100
    );
  }
  let selectedTool = "";
  let showFilters = false, showMarkers = false, showMasks = false, showAppearance = false, showDimensions = false, showSymbols = false, uploadSymbol = false, showLayers = false;
  if ($$props.sourceApp === void 0 && $$bindings.sourceApp && sourceApp !== void 0) $$bindings.sourceApp(sourceApp);
  if ($$props.dispatchUrl === void 0 && $$bindings.dispatchUrl && dispatchUrl !== void 0) $$bindings.dispatchUrl(dispatchUrl);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (!$pageLoadState) {
        reset();
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-191nvh5_START --><link rel="stylesheet" id="theme" href="${"/smui" + escape($darkMode ? "-dark" : "", true) + ".css"}"><!-- HEAD_svelte-191nvh5_END -->`, ""} ${validate_component(LinearProgress, "LinearProgress").$$render(
      $$result,
      { closed, progress },
      {
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {}
    )} <article class="background svelte-k315bx"><div class="top svelte-k315bx"><div class="leftside svelte-k315bx">${validate_component(ActionBar, "ActionBar").$$render(
      $$result,
      { selectedTool },
      {
        selectedTool: ($$value) => {
          selectedTool = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="rightside svelte-k315bx">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        style: "background:none"
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `article`;
            }
          })}`;
        }
      }
    )} ${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        style: "background:none"
      },
      {},
      {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `help`;
            }
          })}`;
        }
      }
    )}</div></div> <div class="left svelte-k315bx">${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + (selectedTool === "Shapes" ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `interests`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, { xPos: "end" }, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Select shapes to add to the drawing`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + (selectedTool === "Text" ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `text_fields`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Add text`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + (selectedTool === "LaTeX" ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `functions`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Add latex`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + (selectedTool === "Plot" ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `show_chart`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Plot function`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `<input style="display: none;" type="file" accept=".jpg, .jpeg, .png" id="input-file" name="input-file"> ${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `add_a_photo`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Add picture (jpg, jpeg, png)`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + (selectedTool === "Path" ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `stylus`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Enter path mode`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + ($selectionMode ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `select`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Select items into a list by clicking on each item. Click again on a selected item to remove it from the selection list. Click on this button again to exit selection mode.`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + ($isLasso ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `laps`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Select items by creating a closed area around them. First create a lasso path. Click on this button to exit lasso mode.`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:none"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render(
                $$result,
                {
                  component: Svg,
                  viewBox: "-480 -290 420 420"
                },
                {},
                {
                  default: () => {
                    return `<rect x="0" y="0" width="280" height="280" fill="none" stroke="currentColor" stroke-width="10" stroke-dasharray="30" opacity="1" transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></rect> <circle cx="0" cy="0" r="30" fill="rgba(0, 200, 0, 1)" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-260 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-260 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-120 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-120 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-120 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-260 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-400 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle> <circle cx="0" cy="0" r="30" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-400 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle>`;
                  }
                }
              )}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Transform mode. Resize by using circles on the boundary. Click on the center circle to activate rotation mode.`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `delete`;
              }
            })}`;
          }
        })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Delete selected item.`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            style: "background:" + ($showGuides ? "rgba(255, 255, 255, 0.5)" : "none")
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-symbols-outlined" }, {}, {
                default: () => {
                  return `grid_guides`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `Show / Hide guides`;
              }
            })}`;
          }
        })}`;
      }
    })}</div> <div class="right svelte-k315bx">${validate_component(AttributeOperations, "AttributeOperations").$$render(
      $$result,
      {
        showAppearance,
        showDimensions,
        showSymbols,
        uploadSymbol,
        showLayers,
        showFilters,
        showMasks,
        showMarkers
      },
      {
        showAppearance: ($$value) => {
          showAppearance = $$value;
          $$settled = false;
        },
        showDimensions: ($$value) => {
          showDimensions = $$value;
          $$settled = false;
        },
        showSymbols: ($$value) => {
          showSymbols = $$value;
          $$settled = false;
        },
        uploadSymbol: ($$value) => {
          uploadSymbol = $$value;
          $$settled = false;
        },
        showLayers: ($$value) => {
          showLayers = $$value;
          $$settled = false;
        },
        showFilters: ($$value) => {
          showFilters = $$value;
          $$settled = false;
        },
        showMasks: ($$value) => {
          showMasks = $$value;
          $$settled = false;
        },
        showMarkers: ($$value) => {
          showMarkers = $$value;
          $$settled = false;
        }
      },
      {}
    )}   </div> <div class="canvasContainer svelte-k315bx">${slots.default ? slots.default({}) : ``} ${showAppearance || showDimensions || showFilters || showMarkers || showMasks || showLayers ? `<div class="rightDropDown svelte-k315bx">${``} ${``} ${``} ${showAppearance && Object.entries($elements).length > 0 ? `${validate_component(Appearance, "Appearance").$$render($$result, {}, {}, {})}` : ``} ${showDimensions ? `${validate_component(Dimensions, "Dimensions").$$render($$result, {}, {}, {})}` : ``} ${showFilters && Object.entries($elements).length > 0 ? `${validate_component(Filters, "Filters").$$render($$result, {}, {}, {})}` : ``} ${showMarkers && Object.entries($elements).length > 0 ? `${validate_component(Markers, "Markers").$$render($$result, {}, {}, {})}` : ``} ${showMasks && Object.entries($elements).length > 0 ? `${validate_component(Masks, "Masks").$$render($$result, {}, {}, {})}` : ``} ${showLayers && Object.entries($elements).length > 0 ? `${validate_component(Layers, "Layers").$$render($$result, {}, {}, {})}` : ``}</div>` : ``}</div></article> `;
  } while (!$$settled);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_DRAWING();
  $$unsubscribe_selectedElements();
  $$unsubscribe_selectedVertices();
  $$unsubscribe_showControls();
  $$unsubscribe_svg();
  $$unsubscribe_selectionMode();
  $$unsubscribe_showBBoxControls();
  $$unsubscribe_objectCount();
  $$unsubscribe_currentLayer();
  $$unsubscribe_boundingBox();
  $$unsubscribe_isLasso();
  $$unsubscribe_appHistory();
  $$unsubscribe_currentState();
  $$unsubscribe_BBOX();
  $$unsubscribe_pageLoadState();
  $$unsubscribe_defs();
  $$unsubscribe_clientWidth();
  $$unsubscribe_clientHeight();
  $$unsubscribe_darkMode();
  $$unsubscribe_showGuides();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DSkjOaUG.js.map
