import { c as compute_rest_props, a as subscribe } from "./utils.js";
import { c as create_ssr_component, h as add_attribute, e as escape, v as validate_component, i as each, a as get_current_component, g as getContext, b as spread, d as escape_attribute_value, f as escape_object, j as createEventDispatcher } from "./ssr2.js";
import { S as Set_1, C as Chip } from "./Set.js";
import { f as forwardEventsBuilder, c as classMap } from "./forwardEventsBuilder.js";
import { e as exclude, p as prefixFilter } from "./prefixFilter.js";
import { F as FormField } from "./FormField.js";
import { C as Card } from "./Card.js";
import { C as Content, a as ActionIcons } from "./ActionIcons.js";
import { M as Media } from "./Media.js";
import { A as Actions } from "./Actions.js";
import { B as Button } from "./Button.js";
import { C as CommonLabel } from "./CommonLabel.js";
import { D as Dialog } from "./Dialog.js";
import { T as Title } from "./Actions2.js";
import { I as IconButton } from "./IconButton.js";
import { p as page } from "./stores3.js";
import { e as elements, o as objectCount, d as defs, D as DRAWING, b as appHistory, a as drawingID, B as BBOX, l as localGallery } from "./stores6.js";
import "./client.js";
import { f as PreviewGroup, P as PreviewTextMask, a as PreviewBlur, b as PreviewShadow, c as PreviewSpecularLighting, d as PreviewDiffuseLighting, e as PreviewMarker } from "./PreviewTextMask.js";
function InitialFocus(node) {
  node.setAttribute("data-mdc-dialog-initial-focus", "");
  return {
    destroy() {
      node.removeAttribute("data-mdc-dialog-initial-focus");
    }
  };
}
const PreviewPattern = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ptrn } = $$props;
  let { drawing } = $$props;
  if ($$props.ptrn === void 0 && $$bindings.ptrn && ptrn !== void 0) $$bindings.ptrn(ptrn);
  if ($$props.drawing === void 0 && $$bindings.drawing && drawing !== void 0) $$bindings.drawing(drawing);
  return `<pattern${add_attribute("id", ptrn.id, 0)} x="${escape(ptrn.x, true) + "%"}" y="${escape(ptrn.y, true) + "%"}" width="${escape(ptrn.width, true) + "%"}" height="${escape(ptrn.height, true) + "%"}"${add_attribute("viewBox", ptrn.viewBox, 0)}${add_attribute("href", ptrn.href, 0)}${add_attribute("patternContentUnits", ptrn.patternContentUnits, 0)}${add_attribute("patternUnits", ptrn.patternUnits, 0)}${add_attribute("vector-effect", ptrn.vectorEffect, 0)}${add_attribute("opacity", ptrn.opacity, 0)}${add_attribute("filter", ptrn.filter, 0)}${add_attribute("mask", ptrn.mask, 0)} patternTransform="${"matrix(" + escape(ptrn.patternTransform.a, true) + " " + escape(ptrn.patternTransform.b, true) + " " + escape(ptrn.patternTransform.c, true) + " " + escape(ptrn.patternTransform.d, true) + " " + escape(ptrn.patternTransform.e, true) + " " + escape(ptrn.patternTransform.f, true) + ")"}">${validate_component(PreviewGroup, "PreviewGroup").$$render($$result, { id: ptrn.child, drawing }, {}, {})}</pattern>`;
});
const PreviewDrawing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { drawing } = $$props;
  let { innerHTML = "" } = $$props;
  if ($$props.drawing === void 0 && $$bindings.drawing && drawing !== void 0) $$bindings.drawing(drawing);
  if ($$props.innerHTML === void 0 && $$bindings.innerHTML && innerHTML !== void 0) $$bindings.innerHTML(innerHTML);
  return `<svg width="100%" height="100%" viewBox="${escape(parseFloat(drawing.viewBox.x) - 10, true) + " " + escape(parseFloat(drawing.viewBox.y) - 10, true) + " " + escape(parseFloat(drawing.viewBox.width) + 20, true) + " " + escape(parseFloat(drawing.viewBox.height) + 20, true)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${add_attribute("this", innerHTML, 0)}><defs>${each(Object.keys(drawing.defs), (def) => {
    return `${drawing.defs[def].tag === "textMask" ? `${validate_component(PreviewTextMask, "PreviewTextMask").$$render(
      $$result,
      {
        textMask: drawing.defs[def],
        elements: drawing.elements
      },
      {},
      {}
    )}` : ``} ${drawing.defs[def].tag === "blur" ? `${validate_component(PreviewBlur, "PreviewBlur").$$render($$result, { blur: drawing.defs[def] }, {}, {})}` : ``} ${drawing.defs[def].tag === "shadow" ? `${validate_component(PreviewShadow, "PreviewShadow").$$render($$result, { shadow: drawing.defs[def] }, {}, {})}` : ``} ${drawing.defs[def].tag === "specularLighting" ? `${validate_component(PreviewSpecularLighting, "PreviewSpecularLighting").$$render($$result, { specularLighting: drawing.defs[def] }, {}, {})}` : ``} ${drawing.defs[def].tag === "diffuseLighting" ? `${validate_component(PreviewDiffuseLighting, "PreviewDiffuseLighting").$$render($$result, { diffuseLighting: drawing.defs[def] }, {}, {})}` : ``} ${drawing.defs[def].tag === "linearGradient" ? `<linearGradient${add_attribute("id", def, 0)} x1="${escape(drawing.defs[def].start.x, true) + "%"}" y1="${escape(drawing.defs[def].start.y, true) + "%"}" x2="${escape(drawing.defs[def].end.x, true) + "%"}" y2="${escape(drawing.defs[def].end.y, true) + "%"}"${add_attribute("gradientUnits", drawing.defs[def].gradientUnits, 0)}${add_attribute("spreadMethod", drawing.defs[def].spreadMethod, 0)}>${each(drawing.defs[def].colors, (color) => {
      return `<stop${add_attribute("offset", color.offset, 0)}${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</linearGradient>` : ``} ${drawing.defs[def].tag === "radialGradient" ? `<radialGradient${add_attribute("id", def, 0)} cx="${escape(drawing.defs[def].center.x, true) + "%"}" cy="${escape(drawing.defs[def].center.y, true) + "%"}" r="${escape(drawing.defs[def].r, true) + "%"}" fx="${escape(drawing.defs[def].focus.x, true) + "%"}" fy="${escape(drawing.defs[def].focus.y, true) + "%"}" fr="${escape(drawing.defs[def].fr, true) + "%"}"${add_attribute("gradientUnits", drawing.defs[def].gradientUnits, 0)}${add_attribute("spreadMethod", drawing.defs[def].spreadMethod, 0)}>${each(drawing.defs[def].colors, (color) => {
      return `<stop${add_attribute("offset", color.offset, 0)}${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</radialGradient>` : ``} ${drawing.defs[def].tag === "marker" ? `${validate_component(PreviewMarker, "PreviewMarker").$$render($$result, { marker: drawing.defs[def] }, {}, {})}` : ``} ${drawing.defs[def].tag === "pattern" ? `${validate_component(PreviewPattern, "PreviewPattern").$$render($$result, { ptrn: drawing.defs[def], drawing }, {}, {})}` : ``}`;
  })}</defs><g>${each(drawing.elements["Layers"], (layer) => {
    return `${validate_component(PreviewGroup, "PreviewGroup").$$render($$result, { id: layer, drawing }, {}, {})}`;
  })}</g></svg>`;
});
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "disabled",
    "focusRing",
    "color",
    "group",
    "checked",
    "value",
    "processing",
    "icons",
    "icons$use",
    "icons$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { focusRing = false } = $$props;
  let { color = "primary" } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { processing = false } = $$props;
  let { icons = true } = $$props;
  let { icons$use = [] } = $$props;
  let { icons$class = "" } = $$props;
  let element;
  let internalClasses = {};
  let rippleElement;
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let selected = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked : group.indexOf(value) !== -1;
  let state = {
    get disabled() {
      return disabled;
    },
    set disabled(value2) {
      disabled = value2;
    },
    get processing() {
      return processing;
    },
    set processing(value2) {
      processing = value2;
    },
    get selected() {
      return selected;
    },
    set selected(value2) {
      selected = value2;
    }
  };
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousSelected = selected;
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0) $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.processing === void 0 && $$bindings.processing && processing !== void 0) $$bindings.processing(processing);
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0) $$bindings.icons(icons);
  if ($$props.icons$use === void 0 && $$bindings.icons$use && icons$use !== void 0) $$bindings.icons$use(icons$use);
  if ($$props.icons$class === void 0 && $$bindings.icons$class && icons$class !== void 0) $$bindings.icons$class(icons$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0) $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  {
    {
      if (!isUninitializedValue(group)) {
        if (previousSelected !== selected) {
          const idx = group.indexOf(value);
          if (selected && idx === -1) {
            group.push(value);
            group = group;
          } else if (!selected && idx !== -1) {
            group.splice(idx, 1);
            group = group;
          }
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            state.selected = false;
          } else if (idx > -1 && idxPrev === -1) {
            state.selected = true;
          }
        }
      }
      if (isUninitializedValue(checked)) ;
      else if (checked !== selected) {
        if (checked === previousChecked) {
          checked = selected;
        } else {
          state.selected = checked;
        }
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousSelected = selected;
    }
  }
  return `<button${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-switch": true,
          "mdc-switch--unselected": !selected,
          "mdc-switch--selected": selected,
          "mdc-switch--processing": processing,
          "smui-switch--color-secondary": color === "secondary",
          ...internalClasses
        }))
      },
      { type: "button" },
      { role: "switch" },
      {
        "aria-checked": escape_attribute_value(selected ? "true" : "false")
      },
      { disabled: disabled || null },
      escape_object(inputProps),
      escape_object(exclude($$restProps, ["icons$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow" data-svelte-h="svelte-fnhar4"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"${add_attribute("this", rippleElement, 0)}></div> ${icons ? `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [icons$class]: true,
          "mdc-switch__icons": true
        }))
      },
      escape_object(prefixFilter($$restProps, "icons$"))
    ],
    {}
  )}><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>` : ``}</div></div> ${focusRing ? `<div class="mdc-switch__focus-ring-wrapper" data-svelte-h="svelte-1dop874"><div class="mdc-switch__focus-ring"></div></div>` : ``} </button>`;
});
const css = {
  code: ".img.svelte-udat9z{width:100%;height:200px;background:gray;border-radius:10px;display:flex;align-items:center;justify-content:center;margin:auto;overflow:hidden}",
  map: `{"version":3,"file":"Drawing.svelte","sources":["Drawing.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\" lang=\\"ts\\">\\r\\n    // @ts-nocheck\\r\\n    import Chip, { Set, LeadingIcon, TrailingIcon } from '@smui/chips';\\r\\n    import Switch from '@smui/switch';\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Card, {\\r\\n        Content,\\r\\n        PrimaryAction,\\r\\n        Media,\\r\\n        MediaContent,\\r\\n        Actions,\\r\\n        ActionButtons,\\r\\n        ActionIcons,\\r\\n    } from \\"@smui/card\\";\\r\\n    import Button, { Label } from \\"@smui/button\\";\\r\\n    import Dialog, { Title, InitialFocus } from \\"@smui/dialog\\";\\r\\n\\r\\n    let open = false;\\r\\n    let response = \\"Nothing yet.\\";\\r\\n\\r\\n    import IconButton, { Icon } from \\"@smui/icon-button\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { Line } from \\"$lib/vectorial/utils/common/line\\";\\r\\n    import { Circle } from \\"$lib/vectorial/utils/common/circle\\";\\r\\n    import { Ellipse } from \\"$lib/vectorial/utils/common/ellipse\\";\\r\\n    import { Rectangle } from \\"$lib/vectorial/utils/common/rectangle\\";\\r\\n    import { Regular } from \\"$lib/vectorial/utils/common/regular\\";\\r\\n    import { Text } from \\"$lib/vectorial/utils/common/text\\";\\r\\n    import { Latex } from \\"$lib/vectorial/utils/common/latex\\";\\r\\n    import { Plot } from \\"$lib/vectorial/utils/common/plot\\";\\r\\n    import { Polyline } from \\"$lib/vectorial/utils/common/polyline\\";\\r\\n    import { Path } from \\"$lib/vectorial/utils/common/path\\";\\r\\n    import { Group } from \\"$lib/vectorial/utils/common/g\\";\\r\\n    import { Image } from \\"$lib/vectorial/utils/common/image\\";\\r\\n    import { Grid } from \\"$lib/vectorial/utils/common/grid\\";\\r\\n    import { page } from \\"$app/stores\\";\\r\\n    import {\\r\\n        defs,\\r\\n        appHistory,\\r\\n        BBOX,\\r\\n        elements,\\r\\n        drawingID,\\r\\n        DRAWING,\\r\\n        pointList,\\r\\n        objectCount,\\r\\n        localGallery\\r\\n    } from \\"./stores\\";\\r\\n    import { goto } from \\"$app/navigation\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { invalidate } from \\"$app/navigation\\";\\r\\n    import { browser } from \\"$app/environment\\";\\r\\n    import PreviewDrawing from \\"$lib/vectorial/pages/common/PreviewDrawing.svelte\\";\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    \\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let drawing;\\r\\n    export let editApp = \`/vectorial/app\`;\\r\\n    let id;\\r\\n    onMount(() => {\\r\\n        MathJax.typeset();\\r\\n\\r\\n    });\\r\\n\\r\\n    const updateElements = (drawing) => {\\r\\n    //elements\\r\\n        let elemIds = Object.keys(drawing.elements);\\r\\n        elemIds.forEach(elemId => {\\r\\n            if(elemId !== 'Layers') {\\r\\n                if(drawing.elements[elemId].children) {\\r\\n                    drawing.elements[elemId].children.forEach((childId,index) => {\\r\\n                        drawing.elements[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];\\r\\n                    })\\r\\n                }\\r\\n                //fill use filltype\\r\\n                if(drawing.elements[elemId].fill?.includes('url')) {\\r\\n                    drawing.elements[elemId].fill = drawing.elements[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].fill.split('-')[2];\\r\\n                }\\r\\n                //stroke\\r\\n                if(drawing.elements[elemId].stroke?.includes('url')) {\\r\\n                    drawing.elements[elemId].stroke = drawing.elements[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].stroke.split('-')[2];\\r\\n                }\\r\\n                //markerStart, markerMid, markerEnd\\r\\n                if(drawing.elements[elemId].markerStart?.includes('url')) {\\r\\n                    drawing.elements[elemId].markerStart = drawing.elements[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerStart.split('-')[2];\\r\\n                }\\r\\n                if(drawing.elements[elemId].markerMid?.includes('url')) {\\r\\n                    drawing.elements[elemId].markerMid = drawing.elements[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerMid.split('-')[2];\\r\\n                }\\r\\n                if(drawing.elements[elemId].markerEnd?.includes('url')) {\\r\\n                    drawing.elements[elemId].markerEnd = drawing.elements[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerEnd.split('-')[2];\\r\\n                }\\r\\n                \\r\\n                //mask\\r\\n                if(drawing.elements[elemId].mask?.includes('url')) {\\r\\n                    let masks = drawing.elements[elemId].mask.split(' ');\\r\\n                    masks.forEach((mask, index) => {\\r\\n                        if(mask.includes('url')) {\\r\\n                            masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];\\r\\n                        }\\r\\n                    })\\r\\n                    drawing.elements[elemId].mask = masks.join(' ');\\r\\n                }\\r\\n                //filter\\r\\n                if(drawing.elements[elemId].filter?.includes('url')) {\\r\\n                    let filters = drawing.elements[elemId].filter.split(' ');\\r\\n                    filters.forEach((filter, index) => {\\r\\n                        if(filter.includes('url')) {\\r\\n                            filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];\\r\\n                        }\\r\\n                    })\\r\\n                    drawing.elements[elemId].filter = filters.join(' ');\\r\\n                }\\r\\n                //layer, parent\\r\\n                let layer = drawing.elements[elemId].layer?.split('-');\\r\\n                if(layer && layer.length === 3) {\\r\\n                    drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];\\r\\n                } else if(layer) {\\r\\n                    drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];\\r\\n                }\\r\\n                let parent = drawing.elements[elemId].parent?.split('-');\\r\\n                if(parent && parent.length === 3) {\\r\\n                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];\\r\\n                } else if(parent && parent.length === 2) {\\r\\n                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];\\r\\n                } else if(parent) {\\r\\n                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;\\r\\n                }\\r\\n                let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] \\r\\n                //id, layer, parent,\\r\\n                drawing.elements[elemId].id = newId; \\r\\n                delete Object.assign(drawing.elements, {[newId]: drawing.elements[elemId]})[elemId]\\r\\n            }\\r\\n        })\\r\\n        drawing.elements['Layers'].forEach((layer, index) => {\\r\\n            drawing.elements['Layers'][index] = layer.split('-')[0] + '-' + drawing.drawingID + '-' + layer.split('-')[2];\\r\\n        })\\r\\n    }\\r\\n    const updateDefs = (drawing) => {\\r\\n        //elements\\r\\n        let elemIds = Object.keys(drawing.defs);\\r\\n        elemIds.forEach(elemId => {\\r\\n            if(drawing.defs[elemId].children) {\\r\\n                drawing.defs[elemId].children.forEach((childId, index) => {\\r\\n                    drawing.defs[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];\\r\\n                })\\r\\n            }\\r\\n            //fill use filltype\\r\\n            if(drawing.defs[elemId].fill?.includes('url')) {\\r\\n                drawing.defs[elemId].fill = drawing.defs[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].fill.split('-')[2];\\r\\n            }\\r\\n            //stroke\\r\\n            if(drawing.defs[elemId].stroke?.includes('url')) {\\r\\n                drawing.defs[elemId].stroke = drawing.defs[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].stroke.split('-')[2];\\r\\n            }\\r\\n            //markerStart, markerMid, markerEnd\\r\\n            if(drawing.defs[elemId].markerStart?.includes('url')) {\\r\\n                drawing.defs[elemId].markerStart = drawing.defs[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerStart.split('-')[2];\\r\\n            }\\r\\n            if(drawing.defs[elemId].markerMid?.includes('url')) {\\r\\n                drawing.defs[elemId].markerMid = drawing.defs[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerMid.split('-')[2];\\r\\n            }\\r\\n            if(drawing.defs[elemId].markerEnd?.includes('url')) {\\r\\n                drawing.defs[elemId].markerEnd = drawing.defs[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerEnd.split('-')[2];\\r\\n            }\\r\\n            \\r\\n            //mask\\r\\n            if(drawing.defs[elemId].mask?.includes('url')) {\\r\\n                let masks = drawing.defs[elemId].mask.split(' ');\\r\\n                masks.forEach((mask, index) => {\\r\\n                    if(mask.includes('url')) {\\r\\n                        masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];\\r\\n                    }\\r\\n                })\\r\\n                drawing.defs[elemId].mask = masks.join(' ');\\r\\n            }\\r\\n            //filter\\r\\n            if(drawing.defs[elemId].filter?.includes('url')) {\\r\\n                let filters = drawing.defs[elemId].filter.split(' ');\\r\\n                filters.forEach((filter, index) => {\\r\\n                    if(filter.includes('url')) {\\r\\n                        filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];\\r\\n                    }\\r\\n                })\\r\\n                drawing.defs[elemId].filter = filters.join(' ');\\r\\n            }\\r\\n            //layer, parent\\r\\n            let layer = drawing.defs[elemId].layer?.split('-');\\r\\n            if(layer && layer.length === 3) {\\r\\n                drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];\\r\\n            } else if(layer) {\\r\\n                drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];\\r\\n            }\\r\\n            let parent = drawing.defs[elemId].parent?.split('-');\\r\\n            if(parent && parent.length === 3) {\\r\\n                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];\\r\\n            } else if(parent && parent.length === 2) {\\r\\n                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];\\r\\n            } else if(parent) {\\r\\n                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;\\r\\n            }\\r\\n            if(drawing.defs[elemId].tag === 'textMask') {\\r\\n                drawing.defs[elemId].shape = drawing.defs[elemId].shape.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].shape.split('-')[2];\\r\\n                let texts = drawing.defs[elemId].text;\\r\\n                texts.forEach((text, index) => {\\r\\n                    texts[index] = text.split('-')[0] + '-' + drawing.drawingID + '-' + text.split('-')[2];\\r\\n                })\\r\\n                drawing.defs[elemId].text = texts;\\r\\n            }\\r\\n            let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] \\r\\n            //id, layer, parent,\\r\\n            drawing.defs[elemId].id = newId; \\r\\n            delete Object.assign(drawing.defs, {[newId]: drawing.defs[elemId]})[elemId]\\r\\n        })\\r\\n    }\\r\\n    const updateHistory = (drawing) => {\\r\\n        drawing.appHistory.forEach(history => {\\r\\n            if(history.id) {\\r\\n                history.id = history.id.split('-')[0] + '-' + drawing.drawingID + '-' + history.id.split('-')[2];\\r\\n            }\\r\\n        })\\r\\n    }\\r\\n\\r\\n    const deleteFile = async () => {\\r\\n        open = false;\\r\\n        // const res = await fetch(\\"/vectorial/api/vectorial\\", {\\r\\n        //     method: \\"DELETE\\",\\r\\n        //     headers: {\\r\\n        //         \\"content-type\\": \\"application/json\\",\\r\\n        //     },\\r\\n        //     body: JSON.stringify({drawingID: drawing.drawingID}),\\r\\n        // });\\r\\n        // if (!res.ok) {\\r\\n        //     alert(\\"Failed to delete\\");\\r\\n        //     return;\\r\\n        // }\\r\\n\\r\\n        let index = $localGallery.indexOf(drawing.drawingID);\\r\\n        $localGallery.splice(index, 1);\\r\\n        $localGallery = $localGallery;\\r\\n        window.localStorage.removeItem(drawing.drawingID)\\r\\n        dispatch('deleted', {drawingID: drawing.drawingID})\\r\\n        goto(\`/vectorial/drawings\`);\\r\\n        // invalidate(\`/vectorial/api/\${$page.data.user.publicID}/drawings\`);\\r\\n        // goto(\`/vectorial/\${$page.data.user.publicID}/drawings\`);\\r\\n    };\\r\\n    const duplicateFile = async () => {\\r\\n        // const res = await fetch(\\"/vectorial/api/vectorial\\", {\\r\\n        //     method: \\"POST\\",\\r\\n        //     headers: {\\r\\n        //         \\"content-type\\": \\"application/json\\",\\r\\n        //     },\\r\\n        //     body: JSON.stringify(drawing),\\r\\n        // });\\r\\n        // if (!res.ok) {\\r\\n        //     alert(\\"Failed to upload\\");\\r\\n        //     return;\\r\\n        // }\\r\\n        // const { id } = await res.json();\\r\\n\\r\\n        let id = 'local' + 'Image' + Math.floor(100*Math.random())\\r\\n        let duplicateDrawing = JSON.parse(JSON.stringify(drawing)); \\r\\n        duplicateDrawing.drawingID = id;\\r\\n        $localGallery = [...$localGallery, id];\\r\\n        updateElements(duplicateDrawing);\\r\\n        updateDefs(duplicateDrawing);\\r\\n        updateHistory(duplicateDrawing)\\r\\n\\r\\n        window.localStorage.setItem(id, JSON.stringify(duplicateDrawing))\\r\\n        dispatch('duplicated', {drawing: duplicateDrawing})\\r\\n        goto(\`/vectorial/drawings\`);\\r\\n        // invalidate(\`/vectorial/api/\${$page.data.user.publicID}/drawings\`);\\r\\n        // goto(\`/vectorial/\${$page.data.user.publicID}/drawings\`);\\r\\n    };\\r\\n    const showdetails = () => {\\r\\n        //hydrate and go to edit mode\\r\\n        $DRAWING = drawing;\\r\\n        $BBOX = drawing.viewBox;\\r\\n        $drawingID = $DRAWING.drawinID;\\r\\n        $elements = $DRAWING.elements;\\r\\n        $defs = $DRAWING.defs;\\r\\n        $appHistory = $DRAWING.appHistory;\\r\\n        hydrateElements();\\r\\n\\r\\n        goto(editApp);\\r\\n    };\\r\\n    const computeObjectCount = () => {\\r\\n        let objcount = 0;\\r\\n        let ids = Object.keys($elements);\\r\\n        let defIds = Object.keys($defs);\\r\\n        ids = [...ids, ...defIds];\\r\\n        // console.log(ids);\\r\\n        let counters = [];\\r\\n        for(let i = 0; i < ids.length; i++) {\\r\\n            let parts = ids[i].split('-');\\r\\n            if(parts.length === 3) {\\r\\n                counters.push(Number(parts[2]));\\r\\n            }\\r\\n        }\\r\\n        // console.log(counters)\\r\\n        if(counters.length > 0) {\\r\\n            objcount = Math.max(...counters) + 1;\\r\\n        } else {\\r\\n            objcount = 0;\\r\\n        }\\r\\n        return objcount;\\r\\n    }\\r\\n    const hydrateElement = (id) => {\\r\\n        let elem;\\r\\n        switch ($elements[id].tag) {\\r\\n            case \\"g\\": {\\r\\n                elem = new Group($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"path\\": {\\r\\n                elem = new Path($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"regular\\": {\\r\\n                elem = new Regular($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"polyline\\": {\\r\\n                elem = new Polyline($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"line\\": {\\r\\n                elem = new Line($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"rect\\": {\\r\\n                elem = new Rectangle($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"circle\\": {\\r\\n                elem = new Circle($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"ellipse\\": {\\r\\n                elem = new Ellipse($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"text\\": {\\r\\n                elem = new Text($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"image\\": {\\r\\n                elem = new Image($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"latex\\": {\\r\\n                elem = new Latex($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"plot\\": {\\r\\n                elem = new Plot($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n            case \\"grid\\": {\\r\\n                elem = new Grid($elements[id]);\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        if(id.includes('Path')) {\\r\\n            // console.log('hydrating...', $elements[id].edges)\\r\\n        }\\r\\n        elem.hydrate();\\r\\n        $elements[id] = elem;\\r\\n        \\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const hydrateElements = () => {\\r\\n        //create transformList\\r\\n        let elementList = Object.keys($elements).filter(\\r\\n            (elemId) => elemId !== \\"Layers\\"\\r\\n        );\\r\\n        elementList.forEach((id) => {\\r\\n            if ($elements[id]) hydrateElement(id);\\r\\n        });\\r\\n        $objectCount = computeObjectCount();\\r\\n        // console.log('Object count in Drawing hydrating...', $objectCount)\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const saveIcon = async () => {\\r\\n        const res = await fetch(\\"/vectorial/api/icon\\", {\\r\\n            method: \\"PUT\\",\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n            body: JSON.stringify(drawing),\\r\\n        });\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to upload\\");\\r\\n            return;\\r\\n        }\\r\\n        alert(\\"Icon saved\\");\\r\\n    };\\r\\n    let isPublic = drawing.permission === 'public'\\r\\n    const changePermission = async () => {\\r\\n        const res = await fetch(\`/vectorial/api/\${$page.data.user.publicID}/drawings/permission\`, {\\r\\n            method: \\"POST\\",\\r\\n            headers: {\\r\\n                \\"content-type\\": \\"application/json\\",\\r\\n            },\\r\\n            body: JSON.stringify({\\r\\n                drawingID: drawing.drawingID,\\r\\n                permission: isPublic ? 'public':'private'\\r\\n            })\\r\\n        })\\r\\n        if (!res.ok) {\\r\\n            alert(\\"Failed to update permission\\");\\r\\n            return;\\r\\n        }\\r\\n        alert(\\"Permission changed\\");\\r\\n    }\\r\\n    // getImage()\\r\\n<\/script>\\r\\n\\r\\n<Card style=\\"width: 300px;\\">\\r\\n    <Set chips={drawing.category} let:chip>\\r\\n        <Chip {chip}>\\r\\n            {chip}\\r\\n        </Chip>\\r\\n    </Set>\\r\\n    <Media>\\r\\n        <div class=\\"img\\">\\r\\n            <PreviewDrawing {drawing} />\\r\\n        </div>\\r\\n    </Media>\\r\\n    <Content class=\\"mdc-typography--body2\\">\\r\\n        <h2 class=\\"mdc-typography--headline6\\" style=\\"margin: 0;\\">\\r\\n            {drawing.title}\\r\\n        </h2>\\r\\n        <h3\\r\\n            class=\\"mdc-typography--subtitle2\\"\\r\\n            style=\\"margin: 0 0 10px; color: #888;\\"\\r\\n        >\\r\\n            {drawing.description}\\r\\n        </h3>\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <FormField>\\r\\n            <Switch bind:checked={isPublic} on:SMUISwitch:change={changePermission} />\\r\\n            <span slot=\\"label\\">{isPublic ? 'Public' : 'Private'}</span>\\r\\n          </FormField>\\r\\n        <ActionIcons>\\r\\n            <IconButton\\r\\n                class=\\"material-icons\\"\\r\\n                on:click={duplicateFile}\\r\\n                title=\\"Duplicate\\"\\r\\n                >file_copy\\r\\n            </IconButton>\\r\\n            <IconButton\\r\\n                class=\\"material-icons\\"\\r\\n                on:click={showdetails}\\r\\n                title=\\"Edit\\"\\r\\n                >edit\\r\\n            </IconButton>\\r\\n            <IconButton\\r\\n                class=\\"material-icons\\"\\r\\n                on:click={() => open = true}\\r\\n                title=\\"Delete\\"\\r\\n                >delete\\r\\n            </IconButton>\\r\\n        </ActionIcons>\\r\\n    </Actions>\\r\\n</Card>\\r\\n<Dialog\\r\\n    bind:open\\r\\n    aria-labelledby=\\"default-focus-title\\"\\r\\n    aria-describedby=\\"default-focus-content\\"\\r\\n>\\r\\n    <Title id=\\"default-focus-title\\">Delete Permanently</Title>\\r\\n    <Content id=\\"default-focus-content\\">\\r\\n        Delete the file permanently. The deleted file can not be recovered.\\r\\n    </Content>\\r\\n    <Actions>\\r\\n        <Button on:click={deleteFile}>\\r\\n            <Label>Delete</Label>\\r\\n        </Button>\\r\\n        <Button\\r\\n            defaultAction\\r\\n            use={[InitialFocus]}\\r\\n            on:click={() => (open = false)}\\r\\n        >\\r\\n            <Label>Cancel</Label>\\r\\n        </Button>\\r\\n    </Actions>\\r\\n</Dialog>\\r\\n\\r\\n<style>\\r\\n    .img {\\r\\n        width: 100%;\\r\\n        height: 200px;\\r\\n        background: gray;\\r\\n        border-radius: 10px;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        margin: auto;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0eI,kBAAK,CACD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACd"}`
};
const Drawing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $$unsubscribe_elements;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_defs;
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_appHistory;
  let $$unsubscribe_drawingID;
  let $$unsubscribe_BBOX;
  let $$unsubscribe_localGallery;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_elements = subscribe(elements, (value) => value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_defs = subscribe(defs, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_appHistory = subscribe(appHistory, (value) => value);
  $$unsubscribe_drawingID = subscribe(drawingID, (value) => value);
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => value);
  $$unsubscribe_localGallery = subscribe(localGallery, (value) => value);
  let open = false;
  createEventDispatcher();
  let { drawing } = $$props;
  let { editApp = `/vectorial/app` } = $$props;
  let isPublic = drawing.permission === "public";
  if ($$props.drawing === void 0 && $$bindings.drawing && drawing !== void 0) $$bindings.drawing(drawing);
  if ($$props.editApp === void 0 && $$bindings.editApp && editApp !== void 0) $$bindings.editApp(editApp);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { style: "width: 300px;" }, {}, {
      default: () => {
        return `${validate_component(Set_1, "Set").$$render($$result, { chips: drawing.category }, {}, {
          default: ({ chip }) => {
            return `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
              default: () => {
                return `${escape(chip)}`;
              }
            })}`;
          }
        })} ${validate_component(Media, "Media").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="img svelte-udat9z">${validate_component(PreviewDrawing, "PreviewDrawing").$$render($$result, { drawing }, {}, {})}</div>`;
          }
        })} ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
          default: () => {
            return `<h2 class="mdc-typography--headline6" style="margin: 0;">${escape(drawing.title)}</h2> <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; color: #888;">${escape(drawing.description)}</h3>`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
              label: () => {
                return `<span slot="label">${escape(isPublic ? "Public" : "Private")}</span>`;
              },
              default: () => {
                return `${validate_component(Switch, "Switch").$$render(
                  $$result,
                  { checked: isPublic },
                  {
                    checked: ($$value) => {
                      isPublic = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(ActionIcons, "ActionIcons").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    class: "material-icons",
                    title: "Duplicate"
                  },
                  {},
                  {
                    default: () => {
                      return `file_copy`;
                    }
                  }
                )} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons", title: "Edit" }, {}, {
                  default: () => {
                    return `edit`;
                  }
                })} ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons", title: "Delete" }, {}, {
                  default: () => {
                    return `delete`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })} ${validate_component(Dialog, "Dialog").$$render(
      $$result,
      {
        "aria-labelledby": "default-focus-title",
        "aria-describedby": "default-focus-content",
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
          return `${validate_component(Title, "Title").$$render($$result, { id: "default-focus-title" }, {}, {
            default: () => {
              return `Delete Permanently`;
            }
          })} ${validate_component(Content, "Content").$$render($$result, { id: "default-focus-content" }, {}, {
            default: () => {
              return `Delete the file permanently. The deleted file can not be recovered.`;
            }
          })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Delete`;
                    }
                  })}`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { defaultAction: true, use: [InitialFocus] }, {}, {
                default: () => {
                  return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Cancel`;
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
  $$unsubscribe_page();
  $$unsubscribe_elements();
  $$unsubscribe_objectCount();
  $$unsubscribe_defs();
  $$unsubscribe_DRAWING();
  $$unsubscribe_appHistory();
  $$unsubscribe_drawingID();
  $$unsubscribe_BBOX();
  $$unsubscribe_localGallery();
  return $$rendered;
});
export {
  Drawing as D
};
