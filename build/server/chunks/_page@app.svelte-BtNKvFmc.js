import { a as subscribe, d as set_store_value } from './utils-DhkojCd_.js';
import { c as create_ssr_component, o as onDestroy, v as validate_component, j as createEventDispatcher, e as escape, a as add_attribute, i as each } from './ssr2-CDgUAJs6.js';
import './client-CAo-6NMJ.js';
import { D as DRAWING, k as appHistory, B as BBOX, m as defs, e as elements, o as objectCount, N as drawingID, Q as localDRAWING, l as currentState, s as selectedId, x as selectedControl1, y as selectedControl0, z as selectedVertex, I as pathMode, w as activeElement, i as boundingBox, R as panY, S as panX, C as onSVG, T as PAN, a as selectedElements, v as lassoElements, F as circleCenter, E as circledVertices, G as circleMode, H as mirrorVertex, J as mirrorMode, b as selectedVertices, c as showControls, U as selectedElement, A as elementsNode, f as selectionMode, V as screenCTM, u as canvasBackground, d as svg, Z, g as showBBoxControls, r as addingNodes, q as showGuides, h as currentLayer } from './stores6-tAd4Vci7.js';
import { M as MenuSurface } from './MenuSurface-DP6CwZ6B.js';
import { C as Content } from './ActionIcons-Bx2zL88O.js';
import './Suffix-CtI6fDI6.js';
import { W as Wrapper, T as Tooltip, C as Content$1 } from './RichActions-DI0nxjyr.js';
import { C as Card } from './Card-BZ_KNbGw.js';
import { A as Actions } from './Actions-DlQ11USC.js';
import { S as SegmentedButton, a as Segment } from './Segment-CO7DIWEy.js';
import { C as CommonLabel } from './CommonLabel-CFEgn-mu.js';
import { S as SVGGroup, a as Slider, C as ColorsInUse, P as PathOperations } from './ColorsInUse-CwpWyEbG.js';
import { B as Button } from './Button-DTp4JSRw.js';
import { F as FormField } from './FormField-CQ11Qxdo.js';
import { I as IconButton } from './IconButton-Bt4YIh4x.js';
import { D as DataTable, B as Body, R as Row, C as Cell } from './Cell-Y_QU_UIA.js';
import { C as Checkbox } from './Checkbox-6gc4AgBs.js';
import { T as Textfield } from './Textfield-B08XD1S3.js';
import { create, all } from 'mathjs';
import { C as CommonIcon, S as Svg } from './Svg-Dkxrus40.js';
import { I as Input } from './Input-CXqTjpeX.js';
import './Subtitle-BTe0DNL-.js';
import { c as currentPath } from './stores2-f06Es8-t.js';
import './exports-DKuYoYKl.js';
import './index2-D2s-XE5r.js';
import './forwardEventsBuilder-DOj2b3iN.js';
import './classAdderBuilder-BpEtv-Pl.js';
import './SmuiElement-CKXCSgE1.js';
import './prefixFilter-B6cFZsw3.js';
import './ContextFragment-CedcH2TL.js';
import './Ripple-N--aPaMn.js';
import './dispatch-BOSWPsEc.js';
import './NotchedOutline-Bg9Ljk79.js';

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  duplicate() {
    return new Point(this.x, this.y);
  }
  length(origin = new Point()) {
    return Math.sqrt((this.x - origin.x) * (this.x - origin.x) + (this.y - origin.y) * (this.y - origin.y));
  }
  sqlength() {
    return this.x * this.x + this.y * this.y;
  }
  angle(origin = new Point()) {
    let theta = Math.atan(Math.abs((this.y - origin.y) / (this.x - origin.x)));
    if (this.x >= origin.x && this.y >= origin.y) {
      theta = theta;
    }
    if (this.x < origin.x && this.y >= origin.y) {
      theta = Math.PI - theta;
    }
    if (this.x < origin.x && this.y < origin.y) {
      theta = Math.PI + theta;
    }
    if (this.x >= origin.x && this.y < origin.y) {
      theta = 2 * Math.PI - theta;
    }
    return theta;
  }
  isZero() {
    return this.x == 0 && this.y == 0;
  }
  scale(l) {
    return new Point(this.x * l, this.y * l);
  }
  a(q) {
    return new Point(this.x + q.x, this.y + q.y);
  }
  s(q) {
    return new Point(this.x - q.x, this.y - q.y);
  }
  m(q) {
    return new Point(this.x * q.x - this.y * q.y, this.x * q.y + this.y * q.x);
  }
  d(q) {
    if (q.isZero()) return "Infinity";
    else {
      let r = new Point(this.x * q.x + this.y * q.y, -this.x * q.y + this.y * q.x);
      return r.scale(r.sqlength());
    }
  }
  dot(q) {
    return this.x * q.x + this.y * q.y;
  }
  adot(q) {
    return this.x * q.x - this.y * q.y;
  }
  onLine(p1, p2) {
    return (p2.y - p1.y) * (this.x - p1.x) - (p2.x - p1.x) * (this.y - p1.y);
  }
  reflect(q) {
    let r = this.s(q);
    return q.a(r.scale(-1));
  }
  reflectControl(q, r) {
    let t = this.s(q);
    if (t.isZero()) return r;
    let u = t.scale(-1 / t.length());
    let t1 = r.s(q);
    if (t1.isZero()) return r;
    return q.a(u.scale(t1.length()));
  }
  rotate(theta, origin = new Point()) {
    let theta0 = this.angle(origin);
    let r = this.length(origin);
    let np = origin.a(new Point(r * Math.cos(theta + theta0), r * Math.sin(theta + theta0)));
    return np;
  }
  translate(dx, dy) {
    return new Point(this.x + dx, this.y + dy);
  }
  scalet(lx = 1, ly = 1) {
    return new Point(lx * this.x, ly * this.y);
  }
  transform(tm) {
    let x = this.x * tm.a + this.y * tm.b + tm.e;
    let y = this.x * tm.c + this.y * tm.d + tm.f;
    return new Point(x, y);
  }
  project(target) {
    let sql = target.sqlength();
    let dotp = this.dot(target);
    return target.scale(dotp / sql);
  }
  anglePair(p1, p2) {
    let angle2 = p2.angle(this);
    let angle1 = p1.angle(this);
    return angle2 - angle1;
  }
  signLine(p1, p2) {
    return (this.x - p1.x) * (p2.y - p1.y) - (this.y - p1.y) * (p2.x - p1.x);
  }
  perpendicularDistance(p1, p2) {
    let area = 0.5 * (p1.x * (this.y - p2.y) + this.x * (p2.y - p1.y) + p2.x * (p1.y - this.y));
    let d = p1.length(p2);
    return 2 * Math.abs(area) / d;
  }
  orientation(q, r) {
    let val = (q.y - this.y) * (r.x - q.x) - (q.x - this.x) * (r.y - q.y);
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
  }
  onSegment(p, q) {
    return this.x <= Math.max(p.x, q.x) && this.x >= Math.min(p.x, q.x) && this.y <= Math.max(p.y, q.y) && this.y >= Math.min(p.y, q.y);
  }
}
const css$6 = {
  code: "article.svelte-1ipqte7{display:flex;flex-direction:row}",
  map: `{"version":3,"file":"GroupOperations.svelte","sources":["GroupOperations.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Tooltip, {\\r\\n        Wrapper,\\r\\n        Title,\\r\\n        Content,\\r\\n        Link,\\r\\n        RichActions,\\r\\n    } from '@smui/tooltip';\\r\\n    import Paper, { Subtitle } from '@smui/paper';\\r\\n    import IconButton, { Icon } from '@smui/icon-button';\\r\\n    import {\\r\\n        onSVG,\\r\\n        pathMode,\\r\\n        lassoElements,\\r\\n        isLassoGroup,\\r\\n        showBBoxControls,\\r\\n        addingNodes,\\r\\n        Z,\\r\\n        isLasso,\\r\\n        svg,\\r\\n        canvasBackground,\\r\\n        DRAWING,\\r\\n        objectCount,\\r\\n        selectionMode,\\r\\n        selectedElement,\\r\\n        selectedElements,\\r\\n        selectedId,\\r\\n        selectedVertex,\\r\\n        selectedControl0,\\r\\n        selectedControl1,\\r\\n        currentLayer,\\r\\n        appHistory,\\r\\n        currentState,\\r\\n        activeElement,\\r\\n        BBOX,\\r\\n        symbols,\\r\\n        showControls,\\r\\n    } from \\"$lib/vectorial/pages/vectorial/stores\\";\\r\\n    import {\\r\\n        defs,\\r\\n        elements,\\r\\n        symbol,\\r\\n        mirrorVertex,\\r\\n        mirrorMode,\\r\\n        circleMode,\\r\\n        circledVertices,\\r\\n        circleCenter,\\r\\n    } from \\"$lib/vectorial/pages/vectorial/stores\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { Group } from \\"$lib/vectorial/utils/common/g\\";\\r\\n    let targetGroup;\\r\\n    const getIndex = (a, arr) => {\\r\\n        if (!arr || arr.length === 0) return -1;\\r\\n        let index = -1;\\r\\n        for (let i = 0; i < arr.length; i++) {\\r\\n            if (a === arr[i]) index = i;\\r\\n        }\\r\\n        return index;\\r\\n    };\\r\\n    const compareFn = (a, b) => {\\r\\n        //a={id}\\r\\n\\r\\n        if ($elements[a].parent === $elements[b].parent) {\\r\\n            let ia = getIndex(a, $elements[$elements[a].parent].children);\\r\\n            let ib = getIndex(b, $elements[$elements[b].parent].children);\\r\\n            return ia - ib;\\r\\n        } else {\\r\\n            // let la = $elements[groupIda].treeNode.elements.length;\\r\\n            // let lb = $elements[groupIdb].treeNode.elements.length;\\r\\n            // if(la !== lb) return la - lb;\\r\\n            return compareFn(\\r\\n                $elements[$elements[a].parent],\\r\\n                $elements[$elements[b].parent]\\r\\n            );\\r\\n        }\\r\\n    };\\r\\n    const sortSelection = () => {\\r\\n        $selectedElements.sort(compareFn);\\r\\n        $selectedElements = $selectedElements;\\r\\n    };\\r\\n    const deleteElementsFromLayer = (elementList) => {\\r\\n        elementList.forEach((item) => {\\r\\n            let index = getIndex(item, $elements[$elements[item].parent].children);\\r\\n            $elements[$elements[item].parent].children.splice(index, 1);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const computeInitialSBox = (id) => {\\r\\n        let children = $elements[id].children;\\r\\n\\r\\n        let xMin = $elements[children[0]].sbox.tl.x;\\r\\n        let xMax = $elements[children[0]].sbox.br.x;\\r\\n        let yMin = $elements[children[0]].sbox.tl.y;\\r\\n        let yMax = $elements[children[0]].sbox.br.y;\\r\\n\\r\\n        for (let i = 0; i < children.length; i++) {\\r\\n            if ($elements[children[i]].sbox.tl.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.tl.x;\\r\\n            if ($elements[children[i]].sbox.bl.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.bl.x;\\r\\n            if ($elements[children[i]].sbox.tr.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.tr.x;\\r\\n            if ($elements[children[i]].sbox.br.x < xMin)\\r\\n                xMin = $elements[children[i]].sbox.br.x;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.y < yMin)\\r\\n                yMin = $elements[children[i]].sbox.tl.y;\\r\\n            if ($elements[children[i]].sbox.bl.y < yMin)\\r\\n                yMin = $elements[children[i]].sbox.bl.y;\\r\\n            if ($elements[children[i]].sbox.tr.y < xMin)\\r\\n                yMin = $elements[children[i]].sbox.tr.y;\\r\\n            if ($elements[children[i]].sbox.br.y < xMin)\\r\\n                yMin = $elements[children[i]].sbox.br.y;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.tl.x;\\r\\n            if ($elements[children[i]].sbox.bl.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.bl.x;\\r\\n            if ($elements[children[i]].sbox.tr.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.tr.x;\\r\\n            if ($elements[children[i]].sbox.br.x > xMax)\\r\\n                xMax = $elements[children[i]].sbox.br.x;\\r\\n\\r\\n            if ($elements[children[i]].sbox.tl.y > yMax)\\r\\n                yMax = $elements[children[i]].sbox.tl.y;\\r\\n            if ($elements[children[i]].sbox.bl.y > yMax)\\r\\n                yMax = $elements[children[i]].sbox.bl.y;\\r\\n            if ($elements[children[i]].sbox.tr.y > xMax)\\r\\n                yMax = $elements[children[i]].sbox.tr.y;\\r\\n            if ($elements[children[i]].sbox.br.y > xMax)\\r\\n                yMax = $elements[children[i]].sbox.br.y;\\r\\n        }\\r\\n        $elements[id].sbox.tl = new Point(xMin, yMin);\\r\\n        $elements[id].sbox.tr = new Point(xMax, yMin);\\r\\n        $elements[id].sbox.bl = new Point(xMin, yMax);\\r\\n        $elements[id].sbox.br = new Point(xMax, yMax);\\r\\n\\r\\n        $elements[id].axis = new Point((xMin + xMax) / 2, (yMin + yMax) / 2);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const createGroup = () => {\\r\\n        let layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n        if ($elements.Layers.length > 0) {\\r\\n            if ($elements.Layers[0] === \\"Layer-0\\") {\\r\\n                layer = \\"Layer-\\" + $DRAWING.drawingID + \\"-\\" + $currentLayer;\\r\\n            }\\r\\n        }\\r\\n        let group = new Group({\\r\\n            id: \\"Group-\\" + $DRAWING.drawingID + \\"-\\" + $objectCount,\\r\\n            parent: layer,\\r\\n            layer: layer,\\r\\n        });\\r\\n        $elements[group.id] = group;\\r\\n        $selectedId = group.id;\\r\\n        $objectCount = $objectCount + 1;\\r\\n\\r\\n        sortSelection();\\r\\n\\r\\n        deleteElementsFromLayer($selectedElements); //remove references from parents\\r\\n        $elements[group.parent].children.push(group.id);\\r\\n        //update elements in $selectedElements\\r\\n        $selectedElements.forEach((id) => {\\r\\n            $elements[id].layer = group.layer;\\r\\n            $elements[id].parent = group.id;\\r\\n            $elements[id].isLocked = true;\\r\\n            group.children.push(id);\\r\\n            //tm of the element\\r\\n            // $elements[elem.id].tm = new DOMMatrix([\\r\\n            //     $elements[elem.id].CTM.a, $elements[elem.id].CTM.b, $elements[elem.id].CTM.c, $elements[elem.id].CTM.d, $elements[elem.id].CTM.e, $elements[elem.id].CTM.f\\r\\n            // ]);\\r\\n        });\\r\\n\\r\\n        $elements = $elements;\\r\\n        computeInitialSBox(group.id);\\r\\n        $selectedElements = [];\\r\\n    };\\r\\n    const ungroup = () => {\\r\\n        //copy children to parent\\r\\n        //change parent of children\\r\\n        //multiply tm to children\\r\\n        //delete the group\\r\\n        // console.log($elements);\\r\\n        if($elements[$elements[$selectedId].parent]) {\\r\\n            if ($elements[$selectedId].children) {\\r\\n                $elements[$selectedId].children.forEach((element) => {\\r\\n                    $elements[$elements[$selectedId].parent].children.push(element);\\r\\n                    $elements[element].parent = $elements[$selectedId].parent;\\r\\n                    $elements[element].tm = $elements[$selectedId].tm.multiply(\\r\\n                        $elements[element].tm\\r\\n                    );\\r\\n                    $elements[element].isLocked = false;\\r\\n                });\\r\\n            }\\r\\n            let index = getIndex(\\r\\n                $selectedId,\\r\\n                $elements[$elements[$selectedId].parent].children\\r\\n            );\\r\\n            $elements[$elements[$selectedId].parent].children.splice(index, 1);\\r\\n            delete $elements[$selectedId];\\r\\n            $selectedId = null;\\r\\n            $elements = $elements;\\r\\n        }\\r\\n        \\r\\n    };\\r\\n    const add2Group = () => {\\r\\n        if(!($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g')) return;\\r\\n        $svg.addEventListener('click', takeElement);\\r\\n        $svg.addEventListener('touchstart', takeElement);\\r\\n        targetGroup = $selectedId;\\r\\n    }\\r\\n    const takeElement = (evt) => {\\r\\n        evt.preventDefault();\\r\\n        if($selectedId && $elements[$selectedId]) {\\r\\n            //transfer group transforms to its children and set group transform to identity\\r\\n            $elements[targetGroup].children.forEach((element) => {\\r\\n                $elements[element].tm = $elements[targetGroup].tm.multiply($elements[element].tm);\\r\\n            });\\r\\n            $elements[targetGroup].tm = new DOMMatrix();\\r\\n            //Apply selected elements parent transform to the element\\r\\n            $elements[$selectedId].tm = $elements[$elements[$selectedId].parent].tm.multiply($elements[$selectedId].tm)\\r\\n            $elements[$elements[$selectedId].parent].children = $elements[$elements[$selectedId].parent].children.filter(id => id !== $selectedId);\\r\\n            $elements[$selectedId].parent = targetGroup;\\r\\n            $elements[targetGroup].children = [...$elements[targetGroup].children, $selectedId];\\r\\n            // console.log($elements[$elements[$selectedId].parent].children, $elements[targetGroup].children)\\r\\n            $elements = $elements;\\r\\n            $svg.removeEventListener('click', takeElement);\\r\\n            $svg.removeEventListener('touchstart', takeElement);\\r\\n        }\\r\\n    }\\r\\n<\/script>\\r\\n<article>\\r\\n    {#if $selectedElements && $selectedElements.length > 1}\\r\\n    <Wrapper rich>\\r\\n        <IconButton on:click={createGroup}>\\r\\n            <Icon class=\\"material-icons\\">group_add</Icon>\\r\\n        </IconButton>\\r\\n        <Tooltip>\\r\\n            <Content>\\r\\n                Group selected items\\r\\n            </Content>\\r\\n        </Tooltip>\\r\\n    </Wrapper>\\r\\n    \\r\\n    {/if}\\r\\n    {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g'}\\r\\n        <Wrapper>\\r\\n            <IconButton on:click={ungroup} mini>\\r\\n                <Icon class=\\"material-icons\\">group_remove</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content style=\\"color:currentColor\\">Ungroup selected group item</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n        <Wrapper>\\r\\n            <IconButton on:click={add2Group} mini>\\r\\n                <Icon class=\\"material-icons\\">add</Icon>\\r\\n            </IconButton>\\r\\n            <Tooltip>\\r\\n                <Content style=\\"color:currentColor\\">Add another element to the group</Content>\\r\\n            </Tooltip>\\r\\n        </Wrapper>\\r\\n    {/if}\\r\\n</article>\\r\\n<style>\\r\\n    article {\\r\\n        display:flex;\\r\\n        flex-direction:row;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AA0QI,sBAAQ,CACJ,QAAQ,IAAI,CACZ,eAAe,GACnB"}`
};
const GroupOperations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_svg;
  let $elements, $$unsubscribe_elements;
  let $selectedId, $$unsubscribe_selectedId;
  let $selectedElements, $$unsubscribe_selectedElements;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_currentLayer;
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_currentLayer = subscribe(currentLayer, (value) => value);
  $$result.css.add(css$6);
  $$unsubscribe_svg();
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_selectedElements();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  $$unsubscribe_currentLayer();
  return `<article class="svelte-1ipqte7">${$selectedElements && $selectedElements.length > 1 ? `${validate_component(Wrapper, "Wrapper").$$render($$result, { rich: true }, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `group_add`;
            }
          })}`;
        }
      })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `Group selected items`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``} ${$selectedId && $elements[$selectedId] && $elements[$selectedId].tag === "g" ? `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render($$result, { mini: true }, {}, {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `group_remove`;
            }
          })}`;
        }
      })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Content$1, "Content").$$render($$result, { style: "color:currentColor" }, {}, {
            default: () => {
              return `Ungroup selected group item`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(IconButton, "IconButton").$$render($$result, { mini: true }, {}, {
        default: () => {
          return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
            default: () => {
              return `add`;
            }
          })}`;
        }
      })} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Content$1, "Content").$$render($$result, { style: "color:currentColor" }, {}, {
            default: () => {
              return `Add another element to the group`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``} </article>`;
});
const css$5 = {
  code: ".solidColors.svelte-16xuud4{display:flex;flex-direction:row;gap:0.5em;flex-wrap:wrap;justify-content:start;padding:0.5em;background:rgba(234, 234, 234, 0.5)}.color.svelte-16xuud4{display:inline-flex;width:1.5em;height:1.5em;border-radius:50%;cursor:pointer;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"SolidColors.svelte","sources":["SolidColors.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {defs, elements, colors, selectedId} from './stores';\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    import { onMount } from 'svelte';\\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let fillStroke = 'fill';\\r\\n    let solidColors = ['rgba(255, 0, 0, 0)', 'rgba(255, 0, 0, 1)', 'rgba(0, 200, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(170, 170, 0, 1)', 'rgba(170, 0, 170, 1)', 'rgba(0, 170, 170, 1)']\\r\\n    let background;\\r\\n    const setColor = (color) => {\\r\\n        $elements[$selectedId][fillStroke] = color;\\r\\n        $elements[$selectedId]['filltype'] = 'solid';\\r\\n        background = color;\\r\\n        $elements = $elements;\\r\\n        dispatch(\\"colorChosen\\", { color: background });\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    .solidColors {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        flex-wrap: wrap;\\r\\n        justify-content: start;\\r\\n        padding: 0.5em;\\r\\n        background: rgba(234, 234, 234, 0.5);\\r\\n    }\\r\\n    .color {\\r\\n        display: inline-flex;\\r\\n        width: 1.5em;\\r\\n        height: 1.5em;\\r\\n        border-radius: 50%;\\r\\n        cursor: pointer;\\r\\n        /* box-shadow: 1px 1px 3px gray; */\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"solidColors\\">\\r\\n    {#each solidColors as color}\\r\\n        <!-- <span class=\\"color\\" style=\\"background: {color}\\" on:click={() => setColor(color)}></span> -->\\r\\n        <svg class=\\"color\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" >\\r\\n            <circle \\r\\n                cx={12}\\r\\n                cy={12}\\r\\n                stroke={'currentColor'}\\r\\n                stroke-width='1'\\r\\n                fill={color}\\r\\n                r='12'\\r\\n                on:click={() => setColor(color)}\\r\\n            />\\r\\n        </svg>\\r\\n    {/each}\\r\\n</div>"],"names":[],"mappings":"AAmBI,2BAAa,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACvC,CACA,qBAAO,CACH,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CAEf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const SolidColors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elements;
  let $$unsubscribe_selectedId;
  $$unsubscribe_elements = subscribe(elements, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  createEventDispatcher();
  let { fillStroke = "fill" } = $$props;
  let solidColors = [
    "rgba(255, 0, 0, 0)",
    "rgba(255, 0, 0, 1)",
    "rgba(0, 200, 0, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(170, 170, 0, 1)",
    "rgba(170, 0, 170, 1)",
    "rgba(0, 170, 170, 1)"
  ];
  if ($$props.fillStroke === void 0 && $$bindings.fillStroke && fillStroke !== void 0) $$bindings.fillStroke(fillStroke);
  $$result.css.add(css$5);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  return `<div class="solidColors svelte-16xuud4">${each(solidColors, (color) => {
    return ` <svg class="color svelte-16xuud4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle${add_attribute("cx", 12, 0)}${add_attribute("cy", 12, 0)}${add_attribute("stroke", "currentColor", 0)} stroke-width="1"${add_attribute("fill", color, 0)} r="12"></circle></svg>`;
  })}</div>`;
});
const css$4 = {
  code: ".linearGradients.svelte-1pzbn1d{display:flex;flex-direction:row;gap:0.5em;flex-wrap:wrap;justify-content:start;padding:0.5em;background:rgb(234, 234, 234)}.color.svelte-1pzbn1d{display:inline-flex;width:1.5em;height:1.5em;border-radius:50%;cursor:pointer;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"LinearGradients.svelte","sources":["LinearGradients.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {defs, elements, selectedId} from './stores';\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    import {LinearGradient} from '$lib/vectorial/utils/common/linearGradient';\\r\\n    import { onMount } from 'svelte';\\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let fillStroke = 'fill';\\r\\n    let linearGradients = [\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 0,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 100,\\r\\n            y2: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 0, 0, 0)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 1,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 0,\\r\\n            y2: 100,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 0, 0, 0)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 2,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 100,\\r\\n            y2: 100,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 0, 0, 0)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 3,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 100,\\r\\n            y2: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(255, 0, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 4,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 0,\\r\\n            y2: 100,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(255, 0, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'LinearGradient-' + 'VectorialApp' + '-' + 5,\\r\\n            x1: 0,\\r\\n            y1: 0,\\r\\n            x2: 100,\\r\\n            y2: 100,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(255, 0, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        }\\r\\n    ]\\r\\n    \\r\\n    const createLinearGradient = (index) => {\\r\\n        let lg = new LinearGradient({id: linearGradients[index].id})\\r\\n        lg.start.x = linearGradients[index].x1;\\r\\n        lg.start.y = linearGradients[index].y1;\\r\\n        lg.end.x = linearGradients[index].x2;\\r\\n        lg.end.y = linearGradients[index].y2;\\r\\n        lg.colors = linearGradients[index].colors;\\r\\n\\r\\n        $defs[lg.id] = lg;\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg.id})\`;\\r\\n        $elements[$selectedId]['filltype'] = 'linear';\\r\\n        $elements = $elements;\\r\\n        dispatch(\\"colorChosen\\", { color: \`url(#\${lg.id})\` });\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    .linearGradients {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        flex-wrap: wrap;\\r\\n        justify-content: start;\\r\\n        padding: 0.5em;\\r\\n        background: rgb(234, 234, 234);\\r\\n    }\\r\\n    .color {\\r\\n        display: inline-flex;\\r\\n        width: 1.5em;\\r\\n        height: 1.5em;\\r\\n        border-radius: 50%;\\r\\n        cursor: pointer;\\r\\n        /* box-shadow: 1px 1px 3px gray; */\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"linearGradients\\">\\r\\n    <svg width='0' height='0' xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" >\\r\\n        <defs>\\r\\n            {#each linearGradients as lg}\\r\\n                \\r\\n                <linearGradient id={lg.id} x1=\\"{lg.x1}%\\" y1=\\"{lg.y1}%\\" x2=\\"{lg.x2}%\\" y2=\\"{lg.y2}%\\" gradientUnits=\\"objectBoundingBox\\" \\r\\n                spreadMethod=\\"pad\\">\\r\\n                    {#each lg.colors as color}\\r\\n                        <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                    {/each}\\r\\n                </linearGradient>\\r\\n                \\r\\n                <!-- {#if $defs[def].tag === 'radialGradient'}\\r\\n                    <radialGradient id={def} cx=\\"{$defs[def].center.x}%\\" cy=\\"{$defs[def].center.y}%\\" r=\\"{$defs[def].r}%\\" fx=\\"{$defs[def].focus.x}%\\" fy=\\"{$defs[def].focus.y}%\\" fr=\\"{$defs[def].fr}%\\" >\\r\\n                        {#each $defs[def].colors as color}\\r\\n                            <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                        {/each}\\r\\n                    </radialGradient>\\r\\n                {/if} -->\\r\\n            {/each}\\r\\n        </defs>\\r\\n    </svg>\\r\\n    {#each linearGradients as lg, index}\\r\\n        <!-- <span class=\\"color\\" style=\\"background: {color}\\" on:click={() => setColor(color)}></span> -->\\r\\n        <svg class=\\"color\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" >\\r\\n            <circle \\r\\n                cx={12}\\r\\n                cy={12}\\r\\n                stroke={'white'}\\r\\n                stroke-width='1'\\r\\n                fill={\`url(#\${lg.id})\`}\\r\\n                r='12'\\r\\n                on:click={() => createLinearGradient(index)}\\r\\n            />\\r\\n        </svg>\\r\\n    {/each}\\r\\n</div>"],"names":[],"mappings":"AAkII,+BAAiB,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACjC,CACA,qBAAO,CACH,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CAEf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const LinearGradients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elements;
  let $$unsubscribe_selectedId;
  let $$unsubscribe_defs;
  $$unsubscribe_elements = subscribe(elements, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_defs = subscribe(defs, (value) => value);
  createEventDispatcher();
  let { fillStroke = "fill" } = $$props;
  let linearGradients = [
    {
      id: "LinearGradient-VectorialApp-0",
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 0,
      colors: [
        { offset: 0, stopColor: "rgba(0, 0, 0, 0)" },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "LinearGradient-VectorialApp-1",
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 100,
      colors: [
        { offset: 0, stopColor: "rgba(0, 0, 0, 0)" },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "LinearGradient-VectorialApp-2",
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
      colors: [
        { offset: 0, stopColor: "rgba(0, 0, 0, 0)" },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "LinearGradient-VectorialApp-3",
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(255, 0, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "LinearGradient-VectorialApp-4",
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 100,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(255, 0, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "LinearGradient-VectorialApp-5",
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(255, 0, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    }
  ];
  if ($$props.fillStroke === void 0 && $$bindings.fillStroke && fillStroke !== void 0) $$bindings.fillStroke(fillStroke);
  $$result.css.add(css$4);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  return `<div class="linearGradients svelte-1pzbn1d"><svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>${each(linearGradients, (lg) => {
    return `<linearGradient${add_attribute("id", lg.id, 0)} x1="${escape(lg.x1, true) + "%"}" y1="${escape(lg.y1, true) + "%"}" x2="${escape(lg.x2, true) + "%"}" y2="${escape(lg.y2, true) + "%"}" gradientUnits="objectBoundingBox" spreadMethod="pad">${each(lg.colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</linearGradient> `;
  })}</defs></svg> ${each(linearGradients, (lg, index) => {
    return ` <svg class="color svelte-1pzbn1d" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle${add_attribute("cx", 12, 0)}${add_attribute("cy", 12, 0)}${add_attribute("stroke", "white", 0)} stroke-width="1"${add_attribute("fill", `url(#${lg.id})`, 0)} r="12"></circle></svg>`;
  })}</div>`;
});
const css$3 = {
  code: ".radialGradients.svelte-4prulr{display:flex;flex-direction:row;gap:0.5em;flex-wrap:wrap;justify-content:start;padding:0.5em;background:rgb(234, 234, 234)}.color.svelte-4prulr{display:inline-flex;width:1.5em;height:1.5em;border-radius:50%;cursor:pointer;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"RadialGradients.svelte","sources":["RadialGradients.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import {defs, elements, selectedId} from './stores';\\r\\n    import { createEventDispatcher } from \\"svelte\\";\\r\\n    import {RadialGradient} from '$lib/vectorial/utils/common/radialGradient';\\r\\n    import { onMount } from 'svelte';\\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let fillStroke = 'fill';\\r\\n    let radialGradients = [\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 0,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 0, 0, 0)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 1,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(255, 0, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 2,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 170, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 3,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 0, 255, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 4,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(170, 170, 0, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        },\\r\\n        {\\r\\n            id: 'RadialGradient-' + 'VectorialApp' + '-' + 5,\\r\\n            cx: 50,\\r\\n            cy: 50,\\r\\n            fx: 50,\\r\\n            fy: 50,\\r\\n            r: 100,\\r\\n            fr: 0,\\r\\n            colors: [\\r\\n                {\\r\\n                    offset: 0,\\r\\n                    stopColor: 'rgba(0, 170, 170, 1)'\\r\\n                },\\r\\n                {\\r\\n                    offset: 100,\\r\\n                    stopColor: 'rgba(0, 0, 0, 1)'\\r\\n                }\\r\\n            ]\\r\\n        }\\r\\n    ]\\r\\n    \\r\\n    const createRadialGradient = (index) => {\\r\\n        let lg = new RadialGradient({id: radialGradients[index].id})\\r\\n        lg.center.x = radialGradients[index].cx;\\r\\n        lg.center.y = radialGradients[index].cy;\\r\\n        lg.focus.x = radialGradients[index].fx;\\r\\n        lg.focus.y = radialGradients[index].fy;\\r\\n        lg.r = radialGradients[index].r;\\r\\n        lg.fr = radialGradients[index].fr;\\r\\n        lg.colors = radialGradients[index].colors;\\r\\n\\r\\n        $defs[lg.id] = lg;\\r\\n        $elements[$selectedId]['fill'] = \`url(#\${lg.id})\`;\\r\\n        $elements[$selectedId]['filltype'] = 'radial';\\r\\n        $elements = $elements;\\r\\n        dispatch(\\"colorChosen\\", { color: \`url(#\${lg.id})\` });\\r\\n    }\\r\\n    \\r\\n<\/script>\\r\\n<style>\\r\\n    .radialGradients {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        flex-wrap: wrap;\\r\\n        justify-content: start;\\r\\n        padding: 0.5em;\\r\\n        background: rgb(234, 234, 234);\\r\\n    }\\r\\n    .color {\\r\\n        display: inline-flex;\\r\\n        width: 1.5em;\\r\\n        height: 1.5em;\\r\\n        border-radius: 50%;\\r\\n        cursor: pointer;\\r\\n        /* box-shadow: 1px 1px 3px gray; */\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n</style>\\r\\n<div class=\\"radialGradients\\">\\r\\n    <svg width='0' height='0' xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" >\\r\\n        <defs>\\r\\n            {#each radialGradients as lg}\\r\\n                \\r\\n                <radialGradient id={lg.id} cx=\\"{lg.cx}%\\" cy=\\"{lg.cy}%\\" fx=\\"{lg.fx}%\\" fy=\\"{lg.fy}%\\" r=\\"{lg.r}%\\" fr=\\"{lg.fr}%\\" gradientUnits=\\"objectBoundingBox\\" \\r\\n                spreadMethod=\\"pad\\">\\r\\n                    {#each lg.colors as color}\\r\\n                        <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                    {/each}\\r\\n                </radialGradient>\\r\\n                \\r\\n                <!-- {#if $defs[def].tag === 'radialGradient'}\\r\\n                    <radialGradient id={def} cx=\\"{$defs[def].center.x}%\\" cy=\\"{$defs[def].center.y}%\\" r=\\"{$defs[def].r}%\\" fx=\\"{$defs[def].focus.x}%\\" fy=\\"{$defs[def].focus.y}%\\" fr=\\"{$defs[def].fr}%\\" >\\r\\n                        {#each $defs[def].colors as color}\\r\\n                            <stop offset=\\"{color.offset}%\\" stop-color={color.stopColor}/>\\r\\n                        {/each}\\r\\n                    </radialGradient>\\r\\n                {/if} -->\\r\\n            {/each}\\r\\n        </defs>\\r\\n    </svg>\\r\\n    {#each radialGradients as lg, index}\\r\\n        <!-- <span class=\\"color\\" style=\\"background: {color}\\" on:click={() => setColor(color)}></span> -->\\r\\n        <svg class=\\"color\\" xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" >\\r\\n            <circle \\r\\n                cx={12}\\r\\n                cy={12}\\r\\n                stroke={'white'}\\r\\n                stroke-width='1'\\r\\n                fill={\`url(#\${lg.id})\`}\\r\\n                r='12'\\r\\n                on:click={() => createRadialGradient(index)}\\r\\n            />\\r\\n        </svg>\\r\\n    {/each}\\r\\n</div>"],"names":[],"mappings":"AAgJI,8BAAiB,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,KAAK,CACV,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACjC,CACA,oBAAO,CACH,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CAEf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB"}`
};
const RadialGradients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elements;
  let $$unsubscribe_selectedId;
  let $$unsubscribe_defs;
  $$unsubscribe_elements = subscribe(elements, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => value);
  $$unsubscribe_defs = subscribe(defs, (value) => value);
  createEventDispatcher();
  let { fillStroke = "fill" } = $$props;
  let radialGradients = [
    {
      id: "RadialGradient-VectorialApp-0",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        { offset: 0, stopColor: "rgba(0, 0, 0, 0)" },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "RadialGradient-VectorialApp-1",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(255, 0, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "RadialGradient-VectorialApp-2",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(0, 170, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "RadialGradient-VectorialApp-3",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(0, 0, 255, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "RadialGradient-VectorialApp-4",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(170, 170, 0, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    },
    {
      id: "RadialGradient-VectorialApp-5",
      cx: 50,
      cy: 50,
      fx: 50,
      fy: 50,
      r: 100,
      fr: 0,
      colors: [
        {
          offset: 0,
          stopColor: "rgba(0, 170, 170, 1)"
        },
        {
          offset: 100,
          stopColor: "rgba(0, 0, 0, 1)"
        }
      ]
    }
  ];
  if ($$props.fillStroke === void 0 && $$bindings.fillStroke && fillStroke !== void 0) $$bindings.fillStroke(fillStroke);
  $$result.css.add(css$3);
  $$unsubscribe_elements();
  $$unsubscribe_selectedId();
  $$unsubscribe_defs();
  return `<div class="radialGradients svelte-4prulr"><svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>${each(radialGradients, (lg) => {
    return `<radialGradient${add_attribute("id", lg.id, 0)} cx="${escape(lg.cx, true) + "%"}" cy="${escape(lg.cy, true) + "%"}" fx="${escape(lg.fx, true) + "%"}" fy="${escape(lg.fy, true) + "%"}" r="${escape(lg.r, true) + "%"}" fr="${escape(lg.fr, true) + "%"}" gradientUnits="objectBoundingBox" spreadMethod="pad">${each(lg.colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</radialGradient> `;
  })}</defs></svg> ${each(radialGradients, (lg, index) => {
    return ` <svg class="color svelte-4prulr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle${add_attribute("cx", 12, 0)}${add_attribute("cy", 12, 0)}${add_attribute("stroke", "white", 0)} stroke-width="1"${add_attribute("fill", `url(#${lg.id})`, 0)} r="12"></circle></svg>`;
  })}</div>`;
});
const css$2 = {
  code: "article.svelte-ltfhtv.svelte-ltfhtv{width:300px;display:flex;flex-direction:column;gap:0.5em}.attributeGroup.svelte-ltfhtv.svelte-ltfhtv{background:rgb(184, 183, 183);border-radius:10px;color:rgb(3, 3, 3);padding:1em;margin:1em 0}.action.svelte-ltfhtv.svelte-ltfhtv{padding:0.5em;cursor:pointer;display:flex;align-items:center;justify-content:space-between}.icon.svelte-ltfhtv input.svelte-ltfhtv{height:2em;border-radius:5px;width:70px;outline:none;border:none}.box.svelte-ltfhtv.svelte-ltfhtv{display:grid;grid-template-columns:1fr 1fr;gap:1em;align-items:center;justify-content:center}.iconButton.svelte-ltfhtv.svelte-ltfhtv{font-size:1.5em;background:rgba(0, 0, 0, 0.1);cursor:pointer}.opacities.svelte-ltfhtv.svelte-ltfhtv,.strokewidths.svelte-ltfhtv.svelte-ltfhtv{display:flex;align-items:center;margin:0 0 0.5em 0;border:1px solid rgb(6, 183, 242)}.opacity.svelte-ltfhtv.svelte-ltfhtv,.strokewidth.svelte-ltfhtv.svelte-ltfhtv{display:inline-block;width:30px;height:30px;background:white;cursor:pointer}.strokewidth.svelte-ltfhtv.svelte-ltfhtv{width:24.4px;height:24.4px}.active.svelte-ltfhtv.svelte-ltfhtv{border:1px solid red}.strokedash.svelte-ltfhtv.svelte-ltfhtv{display:flex;width:100%;height:30px;background:white}.rect.svelte-ltfhtv.svelte-ltfhtv{display:flex;width:30px;height:2em;border:0.5px solid}",
  map: `{"version":3,"file":"ContextBox.svelte","sources":["ContextBox.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import Tooltip, {\\r\\n        Wrapper,\\r\\n        Title,\\r\\n        Link,\\r\\n        RichActions,\\r\\n    } from '@smui/tooltip'; \\r\\n    import Card, { Content, Actions } from '@smui/card';\\r\\n    import {\\r\\n        DRAWING,\\r\\n        svg,\\r\\n        selectedId,\\r\\n        elements,\\r\\n        elementsNode,\\r\\n        selectedVertex,\\r\\n        selectedControl0,\\r\\n        selectedControl1,\\r\\n        activeElement,\\r\\n        lassoElements,\\r\\n        selectedElements,\\r\\n        boundingBox,\\r\\n        isLasso,\\r\\n        defs,\\r\\n        objectCount\\r\\n    } from \\"./stores\\";\\r\\n    import SegmentedButton, { Segment } from '@smui/segmented-button';\\r\\n    import { Label } from '@smui/common';\\r\\n    import Color from '$lib/vectorial/components/Color.svelte';\\r\\n    import ColorsInUse from './ColorsInUse.svelte';\\r\\n    import SolidColors from './SolidColors.svelte';\\r\\n    import LinearGradients from './LinearGradients.svelte';\\r\\n    import RadialGradients from './RadialGradients.svelte';\\r\\n    import Slider from \\"$lib/vectorial/ui/Slider.svelte\\";\\r\\n    import FormField from '@smui/form-field';\\r\\n    import Button from \\"@smui/button\\";\\r\\n    import IconButton from '@smui/icon-button';\\r\\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\\r\\n    import {Marker} from '$lib/vectorial/utils/common/marker';\\r\\n    import { ripple } from \\"$lib/vectorial/ui/ripple\\";\\r\\n\\r\\n    import Checkbox from '@smui/checkbox';\\r\\n    \\r\\n    import Textfield from \\"@smui/textfield\\";\\r\\n    import { Point } from \\"$lib/vectorial/utils/common/point\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { create, all } from 'mathjs'\\r\\n\\r\\n    const config = { }\\r\\n    const math = create(all, config)\\r\\n    const fillparts = ['fill', 'stroke'];\\r\\n    const filltypes = ['solid', 'linear', 'radial'];\\r\\n    const opacities = ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'];\\r\\n    const strokewidths = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];\\r\\n\\r\\n    const gridparts = ['hPath', 'vPath', 'HPath', 'VPath'];\\r\\n    let selectedGridPart = 'hPath';\\r\\n    let showSubdivisions = true;\\r\\n\\r\\n    let filltype = $selectedId && $elements[$selectedId] ? $elements[$selectedId][\\"filltype\\"]: '';\\r\\n    let isNewLG = false, isNewRG = false;\\r\\n    let selected = 'fill';\\r\\n    let position = 'start';\\r\\n    let currentLGId, currentRGId;\\r\\n\\r\\n    let x, y, width, height, angle = 0, textId;\\r\\n    let xPrev, yPrev, widthPrev, heightPrev, fixedPoint, anglePrev;\\r\\n    let preserveAspect = true, showAxis = true;\\r\\n    let subpath = 0,\\r\\n        index = 0,\\r\\n        verticesx = {},\\r\\n        tinx = {},\\r\\n        toutx = {},\\r\\n        verticesy = {},\\r\\n        tiny = {},\\r\\n        touty = {},\\r\\n        nodeType;\\r\\n    onMount(() => {\\r\\n        if (\\r\\n            $selectedId &&\\r\\n            $elements[$selectedId] &&\\r\\n            $elements[$selectedId].bbox\\r\\n        ) {\\r\\n            x = $elements[$selectedId].sbox.tl.x;\\r\\n            y = $elements[$selectedId].sbox.tl.y;\\r\\n            width = $elements[$selectedId].sbox.tl.length(\\r\\n                $elements[$selectedId].sbox.tr\\r\\n            );\\r\\n            height = $elements[$selectedId].sbox.tl.length(\\r\\n                $elements[$selectedId].sbox.bl\\r\\n            );\\r\\n            xPrev = x;\\r\\n            yPrev = y;\\r\\n            widthPrev = width;\\r\\n            heightPrev = height;\\r\\n            fixedPoint = new Point(\\r\\n                $elements[$selectedId].bbox.x,\\r\\n                $elements[$selectedId].bbox.y\\r\\n            );\\r\\n            angle = $elements[$selectedId].angle();\\r\\n            anglePrev = angle;\\r\\n            if ($elements[$selectedId].tag === \\"path\\") {\\r\\n                if ($selectedVertex) {\\r\\n                    let nodeIndex =\\r\\n                        $elements[$selectedId].edgeIndex($selectedVertex);\\r\\n                    subpath = nodeIndex.subpath;\\r\\n                    nodeType = \\"v\\";\\r\\n                    index = nodeIndex.index;\\r\\n                    verticesx[$selectedVertex] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].v.x;\\r\\n                    verticesy[$selectedVertex] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].v.y;\\r\\n                }\\r\\n                if ($selectedControl0) {\\r\\n                    let nodeIndex =\\r\\n                        $elements[$selectedId].edgeIndex($selectedControl0);\\r\\n                    subpath = nodeIndex.subpath;\\r\\n                    nodeType = \\"tout\\";\\r\\n                    index = nodeIndex.index;\\r\\n                    toutx[$selectedControl0] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].tout.x;\\r\\n                    touty[$selectedControl0] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].tout.y;\\r\\n                }\\r\\n                if ($selectedControl1) {\\r\\n                    let nodeIndex =\\r\\n                        $elements[$selectedId].edgeIndex($selectedControl1);\\r\\n                    subpath = nodeIndex.subpath;\\r\\n                    index = nodeIndex.index;\\r\\n                    nodeType = \\"tin\\";\\r\\n                    tinx[$selectedControl1] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].tin.x;\\r\\n                    tiny[$selectedControl1] =\\r\\n                        $elements[$selectedId].uiEdges[subpath][index].tin.y;\\r\\n                }\\r\\n            }\\r\\n            if($elements[$selectedId].tag === 'grid') {\\r\\n                showSubdivisions = $elements[$selectedId].showSubdivisions;\\r\\n            }\\r\\n            if($elements[$selectedId].tag === 'plot') {\\r\\n                showAxis = $elements[$selectedId].showAxis;\\r\\n            }\\r\\n        }\\r\\n    });\\r\\n    // $: x = $elements[$selectedId].sbox.tl.x;\\r\\n    // $: y = $elements[$selectedId].sbox.tl.y;\\r\\n    // $: width = $elements[$selectedId].sbox.tl.length(\\r\\n    //             $elements[$selectedId].sbox.tr\\r\\n    //         );\\r\\n    // $: height = $elements[$selectedId].sbox.tl.length(\\r\\n    //     $elements[$selectedId].sbox.bl\\r\\n    // );\\r\\n    const setColor = (evt) => {\\r\\n        if(selected === 'stroke') {\\r\\n            setStroke(evt);\\r\\n        }\\r\\n    }\\r\\n    const setStroke = (evt) => {\\r\\n        $elements[$selectedId]['stroke'] = evt.detail.color;\\r\\n        if($elements[$selectedId].tag === 'path') {\\r\\n            if($elements[$selectedId].markerStart || $elements[$selectedId].markerMid || $elements[$selectedId].markerEnd) {\\r\\n                setMarkerColor(evt.detail.color)\\r\\n            }\\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setFill = (evt) => {\\r\\n        // console.log('set color: ', evt.detail.color)\\r\\n        $elements[$selectedId]['fill'] = evt.detail.color;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setMarkerColor = (color) => {\\r\\n        let markerEndId = $elements[$selectedId]['markerEnd'];\\r\\n        if(markerEndId && markerEndId !== 'none') {\\r\\n            $defs[markerEndId.split('#')[1].split(')')[0]].path.fill = color;\\r\\n            $defs[markerEndId.split('#')[1].split(')')[0]].path.stroke = color;\\r\\n        }\\r\\n        let markerMidId = $elements[$selectedId]['markerMid'];\\r\\n        if(markerMidId && markerMidId !== 'none') {\\r\\n            $defs[markerMidId.split('#')[1].split(')')[0]].path.fill = color;\\r\\n            $defs[markerMidId.split('#')[1].split(')')[0]].path.stroke = color;\\r\\n        }\\r\\n        let markerStartId = $elements[$selectedId]['markerStart'];\\r\\n        if(markerStartId && markerStartId !== 'none') {\\r\\n            $defs[markerStartId.split('#')[1].split(')')[0]].path.fill = color;\\r\\n            $defs[markerStartId.split('#')[1].split(')')[0]].path.stroke = color;\\r\\n        }\\r\\n        $defs = $defs\\r\\n    }\\r\\n    const markerColor = (evt) => {\\r\\n        setMarkerColor(evt.detail.fill)\\r\\n    }\\r\\n    const changen = () => {\\r\\n        $elements[$selectedId].setPoints();\\r\\n        $elementsNode[$selectedId].setAttribute(\\r\\n            \\"points\\",\\r\\n            $elements[$selectedId].points\\r\\n        );\\r\\n        $elements[$selectedId].bbox = $elementsNode[$selectedId].getBBox();\\r\\n        $elements[$selectedId].updateSelectionBox();\\r\\n        $elements = $elements;\\r\\n        // saveHistory();\\r\\n    };\\r\\n    const updateSbox = (id = $selectedId) => {\\r\\n        $elementsNode[id] = $elementsNode[id];\\r\\n        $elements[id].bbox = $elementsNode[id]?.getBBox();\\r\\n        $elements[id].ctm = $boundingBox\\r\\n            .getScreenCTM()\\r\\n            .inverse()\\r\\n            .multiply($elementsNode[id].getScreenCTM());\\r\\n        $elements[id].updateSelectionBox();\\r\\n        $elementsNode = $elementsNode;\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    const changex = () => {\\r\\n        let dx = x - xPrev;\\r\\n        $elements[$selectedId].translate(dx, 0);\\r\\n        $elements = $elements;\\r\\n        xPrev = x;\\r\\n    };\\r\\n    const changey = () => {\\r\\n        let dy = y - yPrev;\\r\\n        $elements[$selectedId].translate(0, dy);\\r\\n        $elements = $elements;\\r\\n        yPrev = y;\\r\\n    };\\r\\n\\r\\n    const changeWidth = () => {\\r\\n        let scalex = width / widthPrev;\\r\\n        let scaley = $elements[$selectedId].preserveAspect ? scalex : 1;\\r\\n        $elements[$selectedId].scale(scalex, scaley, fixedPoint);\\r\\n        // height = height * scaley;\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n        widthPrev = width;\\r\\n    };\\r\\n    const changeHeight = () => {\\r\\n        let scaley = height / heightPrev;\\r\\n        let scalex = $elements[$selectedId].preserveAspect ? scaley : 1;\\r\\n        $elements[$selectedId].scale(scalex, scaley, fixedPoint);\\r\\n        width = width * scalex;\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n        heightPrev = height;\\r\\n    };\\r\\n    const changeRadius = () => {\\r\\n        updateSbox($selectedId);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    $: if (\\r\\n        $selectedId &&\\r\\n        $selectedVertex &&\\r\\n        $elements[$selectedId].tag === \\"path\\"\\r\\n        ) {\\r\\n        let nodeIndex = $elements[$selectedId].edgeIndex($selectedVertex);\\r\\n        nodeType = \\"v\\";\\r\\n        subpath = nodeIndex.subpath;\\r\\n        index = nodeIndex.index;\\r\\n        if (!verticesx[$selectedVertex] && subpath >= 0 && index >= 0) {\\r\\n            verticesx[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.x;\\r\\n            verticesy[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.y;\\r\\n        }\\r\\n    }\\r\\n    $: if (\\r\\n        $selectedId &&\\r\\n        $selectedControl0 &&\\r\\n        $elements[$selectedId].tag === \\"path\\"\\r\\n        ) {\\r\\n        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl0);\\r\\n        nodeType = \\"tout\\";\\r\\n        subpath = nodeIndex.subpath;\\r\\n        index = nodeIndex.index;\\r\\n        if (!toutx[$selectedControl0] && subpath >= 0 && index >= 0) {\\r\\n            toutx[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.x;\\r\\n            touty[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.y;\\r\\n        }\\r\\n    }\\r\\n    $: if (\\r\\n        $selectedId &&\\r\\n        $selectedControl1 &&\\r\\n        $elements[$selectedId].tag === \\"path\\"\\r\\n        ) {\\r\\n        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl1);\\r\\n        nodeType = \\"tin\\";\\r\\n        subpath = nodeIndex.subpath;\\r\\n        index = nodeIndex.index;\\r\\n        if (!tinx[$selectedControl1] && subpath >= 0 && index >= 0) {\\r\\n            tinx[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.x;\\r\\n            tiny[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.y;\\r\\n        }\\r\\n    }\\r\\n    const changeNodex = () => {\\r\\n        let dragOffset = {};\\r\\n        let coord;\\r\\n        if ($selectedVertex) {\\r\\n            dragOffset = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].v.x,\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedVertex,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"v\\"\\r\\n            );\\r\\n            verticesx[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.x;\\r\\n        }\\r\\n        if ($selectedControl0) {\\r\\n            dragOffset = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].tout.x,\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl0,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tout\\"\\r\\n            );\\r\\n            toutx[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.x;\\r\\n        }\\r\\n        if ($selectedControl1) {\\r\\n            dragOffset = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n            coord = {\\r\\n                x: $elements[$selectedId].uiEdges[subpath][index].tin.x,\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl1,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tin\\"\\r\\n            );\\r\\n            tinx[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.x;\\r\\n        }\\r\\n        $elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n    };\\r\\n    const changeNodey = () => {\\r\\n        let dragOffset = {};\\r\\n        let coord;\\r\\n        if ($selectedVertex) {\\r\\n            dragOffset = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: verticesy[$selectedVertex],\\r\\n            };\\r\\n            coord = {\\r\\n                x: verticesx[$selectedVertex],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].v.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedVertex,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"v\\"\\r\\n            );\\r\\n            verticesy[$selectedVertex] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].v.y;\\r\\n        }\\r\\n        if ($selectedControl0) {\\r\\n            dragOffset = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: touty[$selectedControl0],\\r\\n            };\\r\\n            coord = {\\r\\n                x: toutx[$selectedControl0],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].tout.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl0,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tout\\"\\r\\n            );\\r\\n            touty[$selectedControl0] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tout.y;\\r\\n        }\\r\\n        if ($selectedControl1) {\\r\\n            dragOffset = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: tiny[$selectedControl1],\\r\\n            };\\r\\n            coord = {\\r\\n                x: tinx[$selectedControl1],\\r\\n                y: $elements[$selectedId].uiEdges[subpath][index].tin.y,\\r\\n            };\\r\\n            $elements[$selectedId].updateControl(\\r\\n                $selectedControl1,\\r\\n                coord,\\r\\n                dragOffset,\\r\\n                \\"tin\\"\\r\\n            );\\r\\n            tiny[$selectedControl1] =\\r\\n                $elements[$selectedId].uiEdges[subpath][index].tin.y;\\r\\n        }\\r\\n        $elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n    };\\r\\n    const changeAngle = () => {\\r\\n        let dtheta = (Math.PI * (angle - anglePrev)) / 180;\\r\\n        $elements[$selectedId].rotate(dtheta, $elements[$selectedId].axis);\\r\\n        $elements = $elements;\\r\\n        anglePrev = angle;\\r\\n    };\\r\\n    const setPath = (id) => {\\r\\n        textId = id;\\r\\n        $svg.addEventListener(\\"click\\", setTextPath);\\r\\n    };\\r\\n    const setTextPath = (evt) => {\\r\\n        if ($elements[$selectedId].tag === \\"path\\") {\\r\\n            $elements[textId].href = $selectedId;\\r\\n            $elements[textId].tm = new DOMMatrix();\\r\\n            $elements[textId].showPath = true;\\r\\n            // updateSbox(textId)\\r\\n            $elements = $elements;\\r\\n\\r\\n            $svg.removeEventListener(\\"click\\", setTextPath);\\r\\n        }\\r\\n    };\\r\\n    const textPathVisibility = () => {\\r\\n        if ($elements[$selectedId].showPath) {\\r\\n            $elements[$elements[$selectedId].href].opacity = 1;\\r\\n            $elements = $elements;\\r\\n        } else {\\r\\n            $elements[$elements[$selectedId].href].opacity = 0;\\r\\n            $elements = $elements;\\r\\n        }\\r\\n    };\\r\\n    const reflect = (about) => {\\r\\n        $elements[$selectedId].reflect(about);\\r\\n        $elements = $elements;\\r\\n    };\\r\\n    \\r\\n    const compareHCorners = (a, b) => {\\r\\n        return a.tl.x - b.tl.x;\\r\\n    };\\r\\n    const compareVCorners = (a, b) => {\\r\\n        return a.tl.y - b.tl.y;\\r\\n    };\\r\\n    const distributeElements = (dir) => {\\r\\n        let corners = [];\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n            corners = [\\r\\n                ...corners,\\r\\n                {\\r\\n                    id: $selectedElements[i],\\r\\n                    tl: $elements[$selectedElements[i]].sbox.tl,\\r\\n                },\\r\\n            ];\\r\\n        }\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                corners.sort(compareHCorners);\\r\\n                let D = corners[corners.length - 1].tl.x - corners[0].tl.x;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(sum + i * gap, corners[0].tl.y));\\r\\n\\r\\n                    dx = sum + i * gap + corners[0].tl.x - corners[i].tl.x;\\r\\n                    dy = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.x -\\r\\n                        $elements[corners[i].id].sbox.tl.x;\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                corners.sort(compareVCorners);\\r\\n\\r\\n                let D = corners[corners.length - 1].tl.y - corners[0].tl.y;\\r\\n                let Sum = 0;\\r\\n                for (let i = 0; i < corners.length - 1; i++) {\\r\\n                    Sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n                }\\r\\n                let Gap = D - Sum;\\r\\n                let gap = Gap / (corners.length - 1);\\r\\n                let positions = [],\\r\\n                    sum = 0,\\r\\n                    dx = 0,\\r\\n                    dy = 0;\\r\\n                for (let i = 0; i < corners.length; i++) {\\r\\n                    positions.push(new Point(corners[0].tl.y, sum + i * gap));\\r\\n\\r\\n                    dy = sum + i * gap + corners[0].tl.y - corners[i].tl.y;\\r\\n                    dx = 0;\\r\\n\\r\\n                    sum +=\\r\\n                        $elements[corners[i].id].sbox.tr.y -\\r\\n                        $elements[corners[i].id].sbox.tl.y;\\r\\n\\r\\n                    $elements[corners[i].id].translate(dx, dy);\\r\\n                    $elements = $elements;\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    const alignElements = (dir, ancor) => {\\r\\n        if (!$selectedElements || $selectedElements.length === 0) return;\\r\\n        let dx = 0,\\r\\n            dy = 0;\\r\\n        switch (dir) {\\r\\n            case \\"H\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"L\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].axis.x -\\r\\n                                $elements[$selectedElements[i]].axis.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"R\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dx =\\r\\n                                $elements[$selectedElements[0]].sbox.tr.x -\\r\\n                                $elements[$selectedElements[i]].sbox.tr.x;\\r\\n                            dy = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n            case \\"V\\": {\\r\\n                switch (ancor) {\\r\\n                    case \\"T\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.tl.y -\\r\\n                                $elements[$selectedElements[i]].sbox.tl.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"C\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].axis.y -\\r\\n                                $elements[$selectedElements[i]].axis.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                    case \\"B\\": {\\r\\n                        for (let i = 0; i < $selectedElements.length; i++) {\\r\\n                            dy =\\r\\n                                $elements[$selectedElements[0]].sbox.br.y -\\r\\n                                $elements[$selectedElements[i]].sbox.br.y;\\r\\n                            dx = 0;\\r\\n\\r\\n                            $elements[$selectedElements[i]].translate(dx, dy);\\r\\n                            $elements = $elements;\\r\\n                        }\\r\\n                        break;\\r\\n                    }\\r\\n                }\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n    };\\r\\n    const setStrokewidth = (strokewidth) => {\\r\\n        $elements[$selectedId].strokewidth = strokewidth;\\r\\n        if($elements[$selectedId].strokedasharray !== 'none') {\\r\\n            if($elements[$selectedId].strokelinecap === 'round') {\\r\\n                setDotted();\\r\\n            } else {\\r\\n                setDashed();\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    const setSolid = () => {\\r\\n        $elements[$selectedId].strokedasharray = 'none';\\r\\n        $elements[$selectedId].strokelinecap = 'butt';\\r\\n    }\\r\\n    const setDashed = () => {\\r\\n        $elements[$selectedId].strokedasharray = \`\${Number($elements[$selectedId].strokewidth) * 3} \${Number($elements[$selectedId].strokewidth) * 2}\`;\\r\\n        $elements[$selectedId].strokelinecap = 'butt';\\r\\n    }\\r\\n    const setDotted = () => {\\r\\n        $elements[$selectedId].strokedasharray = \`0 \${Number($elements[$selectedId].strokewidth)*2}\`; \\r\\n        $elements[$selectedId].strokelinecap = 'round';\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const createArrow = () => {\\r\\n        let mrk = new Marker({id: 'Arrow-' +$DRAWING.drawingID + '-' + $objectCount});\\r\\n        $defs[mrk.id] = mrk;\\r\\n        $objectCount++;\\r\\n        $defs = $defs;\\r\\n    }\\r\\n    const createBar = () => {\\r\\n        let mrk = new Marker({id: 'Bar-' + $DRAWING.drawingID + '-' + $objectCount});\\r\\n        mrk.path.d = \\"M 0 0 L 0 10\\";\\r\\n        mrk.path.strokewidth = 2;\\r\\n        $defs[mrk.id] = mrk;\\r\\n        $objectCount++;\\r\\n        $defs = $defs;\\r\\n    }\\r\\n    const removeMarker = (lgrad) => {\\r\\n        delete $defs[lgrad]\\r\\n        // console.log($elements[$selectedId])\\r\\n        if($elements[$selectedId]['marker']) {\\r\\n            let markers = $elements[$selectedId]['marker'].split(' ');\\r\\n            markers = markers.filter((ft => ft !== \`url(#\${lgrad})\`));\\r\\n            $elements[$selectedId]['marker'] = markers.join(' ');\\r\\n        }\\r\\n        \\r\\n        $defs = $defs;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setMarker = (mrk, position) => {\\r\\n        switch(position) {\\r\\n            case 'start': {\\r\\n                $elements[$selectedId]['markerStart'] = $elements[$selectedId]['markerStart'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n            case 'mid': {\\r\\n                $elements[$selectedId]['markerMid'] = $elements[$selectedId]['markerMid'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n            case 'end': {\\r\\n                $elements[$selectedId]['markerEnd'] = $elements[$selectedId]['markerEnd'].includes(mrk) ? 'none' : \`url(#\${mrk})\`;\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const changenSubdivision = () => {\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const changedX = () => { $elements = $elements }\\r\\n    const changedY = () => { $elements = $elements }\\r\\n    const gridPathLabel = (p) => {\\r\\n        let lbl = '';\\r\\n        switch(p) {\\r\\n            case 'hPath': {\\r\\n                lbl = 'h-sub';\\r\\n                break;\\r\\n            }\\r\\n            case 'vPath': {\\r\\n                lbl = 'v-sub';\\r\\n                break;\\r\\n            }\\r\\n            case 'HPath': {\\r\\n                lbl = 'h-main'\\r\\n                break;\\r\\n            }\\r\\n            case 'VPath': {\\r\\n                lbl = 'v-main'\\r\\n                break;\\r\\n            }\\r\\n        }\\r\\n        return lbl;\\r\\n    }\\r\\n    const setGridStroke = (evt) => {\\r\\n        $elements[$selectedId][selectedGridPart]['stroke'] = evt.detail.color;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setGridSolid = () => {\\r\\n        $elements[$selectedId][selectedGridPart].strokedasharray = 'none';\\r\\n        $elements[$selectedId][selectedGridPart].strokelinecap = 'butt';\\r\\n    }\\r\\n    const setGridDashed = () => {\\r\\n        $elements[$selectedId][selectedGridPart].strokedasharray = \`\${Number($elements[$selectedId][selectedGridPart].strokewidth) * 3} \${Number($elements[$selectedId][selectedGridPart].strokewidth) * 2}\`;\\r\\n        $elements[$selectedId][selectedGridPart].strokelinecap = 'butt';\\r\\n    }\\r\\n    const setGridDotted = () => {\\r\\n        $elements[$selectedId][selectedGridPart].strokedasharray = \`0 \${Number($elements[$selectedId][selectedGridPart].strokewidth)*2}\`; \\r\\n        $elements[$selectedId][selectedGridPart].strokelinecap = 'round';\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setGridStrokewidth = (strokewidth) => {\\r\\n        $elements[$selectedId][selectedGridPart].strokewidth = strokewidth;\\r\\n        if($elements[$selectedId][selectedGridPart].strokedasharray !== 'none') {\\r\\n            if($elements[$selectedId][selectedGridPart].strokelinecap === 'round') {\\r\\n                setGridDotted();\\r\\n            } else {\\r\\n                setGridDashed();\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n\\r\\n    \\r\\n    let isTextOnPath = false, showPath = true;\\r\\n    $: if($selectedId && $elements[$selectedId]) {\\r\\n        $elements[$selectedId].preserveAspect = preserveAspect;\\r\\n        $elements[$selectedId].showAxis = showAxis;\\r\\n        if($elements[$selectedId].tag === 'text')\\r\\n            $elements[$selectedId].isTextOnPath = isTextOnPath;\\r\\n            $elements[$selectedId].showPath = showPath;\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const setShowSubdivisions = () => {\\r\\n        $elements[$selectedId].showSubdivisions = showSubdivisions; \\r\\n    }\\r\\n    const text2plot = (p, mathtext) => {\\r\\n        const plotNode = math.parse(mathtext)   // returns the root Node of an expression tree\\r\\n        const code = plotNode.compile()   \\r\\n        $elements[$selectedId].ymin = 0;  \\r\\n        $elements[$selectedId].ymax = 100;   // returns {evaluate: function (scope) {...}}\\r\\n        let points = [];\\r\\n        for(let i = $elements[$selectedId].xmin; i <= $elements[$selectedId].xmax; i = i + $elements[$selectedId].step/$elements[$selectedId].xscale) {\\r\\n            points.push({\\r\\n                x: i * $elements[$selectedId].xscale,\\r\\n                y: -code.evaluate({x: i}) * $elements[$selectedId].yscale\\r\\n            })\\r\\n        }\\r\\n\\r\\n        let d = \\"M\\" + points[0].x + ',' + points[0].y;\\r\\n        for(let i = 1; i < points.length; i++) {\\r\\n            if(-points[i].y <  $elements[$selectedId].ymin) {\\r\\n                $elements[$selectedId].ymin = -points[i].y;\\r\\n            }\\r\\n            if(-points[i].y >  $elements[$selectedId].ymax) {\\r\\n                $elements[$selectedId].ymax = -points[i].y;\\r\\n            }\\r\\n            d += \\" L \\" + points[i].x + ',' + points[i].y;\\r\\n        }\\r\\n        $elements[p].d = d;\\r\\n        $elements[$selectedId] = $elements[$selectedId];\\r\\n        $elements = $elements;\\r\\n        // return \`<path d=\\"\${d}\\" stroke=\\"rgba(0, 0, 0, 1)\\" stroke-width=\\"2\\" fill='none' vector-effect=\\"non-scaling-size\\" />\`\\r\\n    }\\r\\n    const plotFunction = (i, ftext) => {\\r\\n        text2plot($elements[$selectedId].children[i], ftext);\\r\\n        $elements[$selectedId] = $elements[$selectedId];\\r\\n        $elements = $elements;\\r\\n    }\\r\\n    const plotFunctions = () => {\\r\\n        for(let i = 0; i < $elements[$selectedId].children.length; i++) {\\r\\n            plotFunction(i, $elements[$selectedId].functions[i]);\\r\\n        }\\r\\n    }\\r\\n    // $: console.log($elements[$selectedId].showAxis)\\r\\n<\/script>\\r\\n\\r\\n{#if $elements && $selectedId && $elements[$selectedId]}\\r\\n    <article>\\r\\n        <!---------Position--------->\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">{$elements[$selectedId].name}</h4>\\r\\n                {#if $elements[$selectedId].tag === \\"rect\\" || $elements[$selectedId].tag === \\"image\\" || $elements[$selectedId].tag === 'grid'}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            x\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].x}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            y\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].y}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Width\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].width}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            input$aria-label=\\"Alpha\\"\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Height\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].height}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            input$aria-label=\\"Alpha\\"\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    {#if $elements[$selectedId].tag === \\"rect\\" || $elements[$selectedId].tag === \\"image\\"}\\r\\n                        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                            >\\r\\n                                rx\\r\\n                            </span>\\r\\n                            <Slider\\r\\n                                withInput\\r\\n                                bind:value={$elements[$selectedId].rx}\\r\\n                                min={0}\\r\\n                                max={2000}\\r\\n                                step={0.001}\\r\\n                                input$aria-label=\\"Alpha\\"\\r\\n                            />\\r\\n                        </FormField>\\r\\n                        <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                            <span\\r\\n                                slot=\\"label\\"\\r\\n                                style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                            >\\r\\n                                ry\\r\\n                            </span>\\r\\n                            <Slider\\r\\n                                withInput\\r\\n                                bind:value={$elements[$selectedId].ry}\\r\\n                                min={0}\\r\\n                                max={2000}\\r\\n                                step={0.001}\\r\\n                                input$aria-label=\\"Alpha\\"\\r\\n                            />\\r\\n                        </FormField>\\r\\n                    {/if}\\r\\n                {/if}\\r\\n                {#if $elements[$selectedId].tag === \\"circle\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            cx\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].cx}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            cy\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].cy}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Radius\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].r}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            input$aria-label=\\"Alpha\\"\\r\\n                            on:input={changeRadius}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                {#if $elements[$selectedId].tag === \\"ellipse\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            cx\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].cx}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            cy\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].cy}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Radius X\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].rx}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            input$aria-label=\\"Alpha\\"\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Radius Y\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].ry}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            input$aria-label=\\"Alpha\\"\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                {#if $elements[$selectedId].tag === \\"regular\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            n\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].n}\\r\\n                            min={3}\\r\\n                            max={50}\\r\\n                            step={1}\\r\\n                            on:change={changen}\\r\\n                            on:input={changen}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Side length\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].r}\\r\\n                            min={0}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changen}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                {#if $elements[$selectedId].tag === \\"text\\"}\\r\\n                    <div style=\\"display:flex;flex-direction:column;gap:0.5em;\\">\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            type=\\"number\\"\\r\\n                            style=\\"width: 100%\\"\\r\\n                            label=\\"Base x\\"\\r\\n                            bind:value={$elements[$selectedId].x}\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            type=\\"number\\"\\r\\n                            style=\\"width: 100%\\"\\r\\n                            label=\\"Base y\\"\\r\\n                            bind:value={$elements[$selectedId].y}\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            type=\\"number\\"\\r\\n                            style=\\"width: 100%\\"\\r\\n                            label=\\"Font size\\"\\r\\n                            bind:value={$elements[$selectedId].fontSize}\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            type=\\"number\\"\\r\\n                            style=\\"width: 100%\\"\\r\\n                            label=\\"Font Weight\\"\\r\\n                            bind:value={$elements[$selectedId].fontWeight}\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            style=\\"width: 100%\\"\\r\\n                            label=\\"Font Family\\"\\r\\n                            bind:value={$elements[$selectedId].fontFamily}\\r\\n                            input$emptyValueUndefined\\r\\n                        /> \\r\\n                    </div>\\r\\n                {/if}\\r\\n            </Content>\\r\\n        </Card>\\r\\n        {#if $elements[$selectedId] && $elements[$selectedId].tag === 'grid'}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Grid properties</h4>\\r\\n                    <FormField style=\\"width:100%\\">\\r\\n                        <Checkbox bind:checked={showSubdivisions} on:change={setShowSubdivisions} />\\r\\n                        <span slot=\\"label\\">Show subdivisions</span>\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            Sub division\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].nSubdivisions}\\r\\n                            min={1}\\r\\n                            max={50}\\r\\n                            step={1}\\r\\n                            on:change={changenSubdivision}\\r\\n                            on:input={changenSubdivision}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            dX\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].dX}\\r\\n                            on:change={changedX}\\r\\n                            on:input={changedX}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            dY\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].dY}\\r\\n                            on:change={changedY}\\r\\n                            on:input={changedY}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <br>\\r\\n                    <SegmentedButton singleSelect segments={gridparts} let:segment bind:selected={selectedGridPart}>\\r\\n                        <Segment {segment}>\\r\\n                            <Label>{gridPathLabel(segment)}</Label>\\r\\n                        </Segment>\\r\\n                    </SegmentedButton>\\r\\n                    <SolidColors fillStroke={'stroke'} on:colorChosen={setGridStroke} />\\r\\n                    <ColorsInUse fillStroke={'stroke'} on:colorChosen={setGridStroke}/>\\r\\n                    <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Opacity</h3>\\r\\n                    <div class=\\"opacities\\">\\r\\n                        {#each opacities as opacity}\\r\\n                            <span class=\\"opacity {$elements[$selectedId][selectedGridPart].opacity === opacity ? 'active':''}\\" style=\\"opacity: {opacity};\\" on:click={() => $elements[$selectedId][selectedGridPart].opacity = opacity}></span>\\r\\n                        {/each}\\r\\n                    </div>\\r\\n                    <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Stroke width</h3>\\r\\n                    <div class=\\"strokewidths\\">\\r\\n                        {#each strokewidths as strokewidth}\\r\\n                            <span class=\\"strokewidth {$elements[$selectedId][selectedGridPart].strokewidth === strokewidth ? 'active':''}\\" on:click={() => setGridStrokewidth(strokewidth)}>\\r\\n                            <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 24 24\\"><line x1=\\"0\\" x2=\\"24\\" y1=\\"12\\" y2=\\"12\\" stroke=\\"black\\" stroke-width={strokewidth} /></svg>\\r\\n                            </span>\\r\\n                        {/each}\\r\\n                    </div>\\r\\n                    <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Solid</h3>\\r\\n                    <span class=\\"strokedash\\" on:click={setGridSolid}>\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth}/></svg>\\r\\n                    </span>\\r\\n                    <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Dashed</h3>\\r\\n                    <span class=\\"strokedash\\" on:click={setGridDashed}>\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth} stroke-dasharray=\\"{$elements[$selectedId][selectedGridPart].strokewidth} {Number($elements[$selectedId][selectedGridPart].strokewidth) * 2}\\"/></svg>\\r\\n                    </span>\\r\\n                    <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Dotted</h3>\\r\\n                    <span class=\\"strokedash\\" on:click={setGridDotted}>\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId][selectedGridPart].strokewidth} stroke-dasharray=\\"{0} {Number($elements[$selectedId][selectedGridPart].strokewidth)*5}\\" stroke-linecap='round'/></svg>\\r\\n                    </span>\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        {#if $elements[$selectedId].hasOwnProperty([\\"content\\"])}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                \\r\\n                    {#if $elements[$selectedId].tag === \\"text\\"}\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            label=\\"Text\\"\\r\\n                            bind:value={$elements[$selectedId].content}\\r\\n                            on:input={updateSbox}\\r\\n                            style=\\"width: 100%\\"\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                    {/if}\\r\\n                    {#if $elements[$selectedId].tag === \\"latex\\"}\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            label=\\"Latex\\"\\r\\n                            bind:value={$elements[$selectedId].content}\\r\\n                            on:input={updateSbox}\\r\\n                            style=\\"width: 100%\\"\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                    {/if}\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        {#if $elements[$selectedId].tag === \\"plot\\"}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    {#each $elements[$selectedId].functions as ftext, i}\\r\\n                        <Textfield\\r\\n                            variant=\\"filled\\"\\r\\n                            label=\\"Function\\"\\r\\n                            bind:value={ftext}\\r\\n                            on:input={updateSbox}\\r\\n                            style=\\"width: 100%\\"\\r\\n                            input$emptyValueUndefined\\r\\n                        />\\r\\n                        <Button on:click={() => plotFunction(i, ftext)}>Done</Button>\\r\\n                    <br>\\r\\n                    {/each}\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        label=\\"Lower limit\\"\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={$elements[$selectedId].xmin}\\r\\n                        on:input={plotFunctions}\\r\\n                        style=\\"width: 100%\\"\\r\\n                        input$emptyValueUndefined\\r\\n                    />\\r\\n                    <br>\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        label=\\"Upper limit\\"\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={$elements[$selectedId].xmax}\\r\\n                        on:input={plotFunctions}\\r\\n                        style=\\"width: 100%\\"\\r\\n                        input$emptyValueUndefined\\r\\n                    />\\r\\n                    <br>\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        label=\\"x scale\\"\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={$elements[$selectedId].xscale}\\r\\n                        on:input={plotFunctions}\\r\\n                        style=\\"width: 100%\\"\\r\\n                        input$emptyValueUndefined\\r\\n                    />\\r\\n                    <br>\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        label=\\"y scale\\"\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={$elements[$selectedId].yscale}\\r\\n                        on:input={plotFunctions}\\r\\n                        style=\\"width: 100%\\"\\r\\n                        input$emptyValueUndefined\\r\\n                    />\\r\\n                    <br>\\r\\n                    <Textfield\\r\\n                        variant=\\"filled\\"\\r\\n                        label=\\"Step\\"\\r\\n                        type=\\"number\\"\\r\\n                        bind:value={$elements[$selectedId].step}\\r\\n                        on:input={plotFunctions}\\r\\n                        style=\\"width: 100%\\"\\r\\n                        input$emptyValueUndefined\\r\\n                    />\\r\\n                    <br>\\r\\n                    <FormField style=\\"width:100%\\">\\r\\n                        <Checkbox bind:checked={showAxis} />\\r\\n                        <span slot=\\"label\\">Show Axes</span>\\r\\n                    </FormField>\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        {#if $elements[$selectedId].tag === \\"text\\"}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Text on path</h4>\\r\\n                    <FormField style=\\"width:100%\\">\\r\\n                        <Checkbox bind:checked={isTextOnPath} />\\r\\n                        <span slot=\\"label\\">Text on path</span>\\r\\n                    </FormField>\\r\\n                    {#if $elements[$selectedId].isTextOnPath}\\r\\n                    <Wrapper>\\r\\n                        <Button on:click={() => setPath($selectedId)}\\r\\n                            >Choose path</Button\\r\\n                        >\\r\\n                        <Tooltip xPos=\\"center\\" yPos=\\"below\\">\\r\\n                            <Content>\\r\\n                                Click on this button and then click on a path to use the path for the text.\\r\\n                            </Content>\\r\\n                        </Tooltip>\\r\\n                    </Wrapper>\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">Start offset</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input\\r\\n                                        type=\\"number\\"\\r\\n                                        bind:value={$elements[$selectedId].startOffset}\\r\\n                                        step={1}\\r\\n                                    />\\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                        <FormField style=\\"width:100%\\">\\r\\n                            <Checkbox bind:checked={showPath} on:change={textPathVisibility} />\\r\\n                            <span slot=\\"label\\">Show path</span>\\r\\n                        </FormField>\\r\\n                    {/if}\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        <!-- sbox -->\\r\\n        \\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Bounding Box</h4>\\r\\n                <div class=\\"box\\">\\r\\n                    <div class=\\"attributeGroup\\">\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">W</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input\\r\\n                                        type=\\"number\\"\\r\\n                                        bind:value={width}\\r\\n                                        step={1}\\r\\n                                        on:input={changeWidth}\\r\\n                                    />\\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                        <br />\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">H</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input\\r\\n                                        type=\\"number\\"\\r\\n                                        bind:value={height}\\r\\n                                        step={1}\\r\\n                                        on:input={changeHeight}\\r\\n                                    />\\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\"attributeGroup\\">\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">X</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <!-- {#key $elements[$selectedId].sbox.tl.x} -->\\r\\n                                    <input\\r\\n                                        type=\\"number\\"\\r\\n                                        bind:value={x}\\r\\n                                        step={1}\\r\\n                                        on:input={changex}\\r\\n                                    />\\r\\n                                    <!-- {/key} -->\\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                        <br />\\r\\n                        <div class=\\"action\\" style=\\"padding:0\\">\\r\\n                            <span class=\\"text\\">Y</span>\\r\\n                            <span class=\\"icon\\">\\r\\n                                <label>\\r\\n                                    <input\\r\\n                                        type=\\"number\\"\\r\\n                                        bind:value={y}\\r\\n                                        step={1}\\r\\n                                        on:input={changey}\\r\\n                                    />\\r\\n                                </label>\\r\\n                            </span>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <FormField style=\\"width:100%\\">\\r\\n                    <Checkbox bind:checked={preserveAspect} />\\r\\n                    <span slot=\\"label\\">Preserve Aspect</span>\\r\\n                </FormField>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <!---------Point------>\\r\\n        {#if $selectedVertex || $selectedControl0 || $selectedControl1}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Point</h4>\\r\\n                {#if $selectedVertex && $elements[$selectedId].tag === \\"path\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            x\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][index].v.x}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodex}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            y\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][\\r\\n                                index\\r\\n                            ].v.y}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodey}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                {#if $selectedControl0 && $elements[$selectedId].tag === \\"path\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            x\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][\\r\\n                                index\\r\\n                            ].tout.x}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodex}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            y\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][\\r\\n                                index\\r\\n                            ].tout.y}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodey}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                {#if $selectedControl1 && $elements[$selectedId].tag === \\"path\\"}\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            x\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][\\r\\n                                index\\r\\n                            ].tin.x}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodex}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                    <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                        <span\\r\\n                            slot=\\"label\\"\\r\\n                            style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                        >\\r\\n                            y\\r\\n                        </span>\\r\\n                        <Slider\\r\\n                            withInput\\r\\n                            bind:value={$elements[$selectedId].uiEdges[subpath][\\r\\n                                index\\r\\n                            ].tin.y}\\r\\n                            min={-2000}\\r\\n                            max={2000}\\r\\n                            step={0.001}\\r\\n                            on:input={changeNodey}\\r\\n                        />\\r\\n                    </FormField>\\r\\n                {/if}\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        <!-----------Transforms------>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Transforms</h4>\\r\\n                <!-- <FormField align=\\"end\\" style=\\"display: flex;\\">\\r\\n                <span\\r\\n                    slot=\\"label\\"\\r\\n                    style=\\"padding-right: 10px; width:50px; display: block; line-height:1;\\"\\r\\n                >\\r\\n                    Angle\\r\\n                </span>\\r\\n                <Slider withInput bind:value={angle} min={-360} max={360} step={0.001} on:input={changeAngle}/>\\r\\n            </FormField> -->\\r\\n                <Textfield\\r\\n                    variant=\\"filled\\"\\r\\n                    type=\\"number\\"\\r\\n                    style=\\"width: 100%\\"\\r\\n                    label=\\"Rotate\\"\\r\\n                    suffix=\\"deg\\"\\r\\n                    min={-360}\\r\\n                    max={360}\\r\\n                    step={1}\\r\\n                    bind:value={angle}\\r\\n                    on:input={changeAngle}\\r\\n                    input$emptyValueUndefined\\r\\n                />\\r\\n            </Content>\\r\\n            <Actions>\\r\\n                <Button on:click={() => reflect(\\"V\\")}>\\r\\n                    <span class=\\"material-symbols-outlined\\">swap_horiz</span>\\r\\n                </Button>\\r\\n                <Button on:click={() => reflect(\\"H\\")}>\\r\\n                    <span class=\\"material-symbols-outlined\\">swap_vert</span>\\r\\n                </Button>\\r\\n            </Actions>\\r\\n        </Card>\\r\\n        {#if $selectedElements && $selectedElements.length > 0}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Alignment</h4>\\r\\n                    <div\\r\\n                        class=\\"attributeGroup\\"\\r\\n                        style=\\"display:flex; justify-content: space-between;\\"\\r\\n                    >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => distributeElements(\\"H\\")}\\r\\n                            title=\\"Distribute horizontally\\">horizontal_distribute</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => distributeElements(\\"V\\")}\\r\\n                            title=\\"Distribute vertically\\">vertical_distribute</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"H\\", \\"L\\")}\\r\\n                            title=\\"Align horizontal left\\">align_horizontal_left</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"H\\", \\"C\\")}\\r\\n                            title=\\"Align horizontal center\\">align_horizontal_center</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"H\\", \\"R\\")}\\r\\n                            title=\\"Align horizontal right\\">align_horizontal_right</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"V\\", \\"T\\")}\\r\\n                            title=\\"Align vertical top\\">align_vertical_top</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"V\\", \\"C\\")}\\r\\n                            title=\\"Align vertical center\\">align_vertical_center</span\\r\\n                        >\\r\\n                        <span\\r\\n                            class=\\"iconButton material-icons\\"\\r\\n                            use:ripple\\r\\n                            on:click={() => alignElements(\\"V\\", \\"B\\")}\\r\\n                            title=\\"Align vertical bottom\\">align_vertical_bottom</span\\r\\n                        >\\r\\n                    </div>\\r\\n                </Content>\\r\\n            </Card>\\r\\n        {/if}\\r\\n        <!-------Colors------->\\r\\n        {#if $elements[$selectedId].tag !== 'grid'}\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h1 class=\\"mdc-typography--headline5\\" style=\\"margin:0 0 0.5em 0;\\">Color</h1>\\r\\n                <SegmentedButton singleSelect segments={fillparts} let:segment bind:selected>\\r\\n                    <Segment {segment}>\\r\\n                        <Label>{segment}</Label>\\r\\n                    </Segment>\\r\\n                </SegmentedButton>\\r\\n                <SegmentedButton singleSelect segments={filltypes} let:segment bind:selected={$elements[$selectedId][\\"filltype\\"]}>\\r\\n                    <Segment {segment}>\\r\\n                        <Label>{segment}</Label>\\r\\n                    </Segment>\\r\\n                </SegmentedButton>\\r\\n                <SolidColors fillStroke={selected} on:colorChosen={setColor} />\\r\\n                {#if selected==='fill'}\\r\\n                    <LinearGradients on:colorChosen={() => {$elements[$selectedId][\\"filltype\\"] = 'linear'}, selected='fill'} />\\r\\n                    <RadialGradients on:colorChosen={() => {$elements[$selectedId][\\"filltype\\"] = 'radial'}, selected='fill'} />\\r\\n                {/if}\\r\\n                {#if selected === 'fill'}\\r\\n                    <ColorsInUse fillStroke={selected} on:colorChosen={setFill}/>\\r\\n                {:else if $elements[$selectedId][\\"filltype\\"] === 'solid' && selected === 'stroke'}\\r\\n                    <ColorsInUse fillStroke={selected} on:colorChosen={setStroke}/>\\r\\n                {/if}\\r\\n            </Content>\\r\\n        </Card>\\r\\n        <!------------Stroke------>\\r\\n        <Card>\\r\\n            <Content>\\r\\n                <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Opacity</h3>\\r\\n                <div class=\\"opacities\\">\\r\\n                    {#each opacities as opacity}\\r\\n                        <span class=\\"opacity {$elements[$selectedId].opacity === opacity ? 'active':''}\\" style=\\"opacity: {opacity};\\" on:click={() => $elements[$selectedId].opacity = opacity}></span>\\r\\n                    {/each}\\r\\n                </div>\\r\\n                <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Stroke width</h3>\\r\\n                <div class=\\"strokewidths\\">\\r\\n                    {#each strokewidths as strokewidth}\\r\\n                        <span class=\\"strokewidth {$elements[$selectedId].strokewidth === strokewidth ? 'active':''}\\" on:click={() => setStrokewidth(strokewidth)}>\\r\\n                        <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 24 24\\"><line x1=\\"0\\" x2=\\"24\\" y1=\\"12\\" y2=\\"12\\" stroke=\\"black\\" stroke-width={strokewidth} /></svg>\\r\\n                        </span>\\r\\n                    {/each}\\r\\n                </div>\\r\\n                <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Solid</h3>\\r\\n                <span class=\\"strokedash\\" on:click={setSolid}>\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId].strokewidth}/></svg>\\r\\n                </span>\\r\\n                <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Dashed</h3>\\r\\n                <span class=\\"strokedash\\" on:click={setDashed}>\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId].strokewidth} stroke-dasharray=\\"{$elements[$selectedId].strokewidth} {Number($elements[$selectedId].strokewidth) * 2}\\"/></svg>\\r\\n                </span>\\r\\n                <h3 class=\\"mdc-typography--headline6\\" style=\\"margin:0;\\">Dotted</h3>\\r\\n                <span class=\\"strokedash\\" on:click={setDotted}>\\r\\n                    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 300 30\\"><line x1=\\"0%\\" x2=\\"100%\\" y1=\\"50%\\" y2=\\"50%\\" stroke=\\"black\\" stroke-width={$elements[$selectedId].strokewidth} stroke-dasharray=\\"{0} {Number($elements[$selectedId].strokewidth)*5}\\" stroke-linecap='round'/></svg>\\r\\n                </span>\\r\\n            </Content>\\r\\n        </Card>\\r\\n        {/if}\\r\\n        <!---------Markers-------->\\r\\n        {#if $selectedId && $elements[$selectedId] && ($elements[$selectedId].tag === 'path' || $elements[$selectedId].tag === 'plot')}\\r\\n            <Card>\\r\\n                <Content>\\r\\n                    <h4 class=\\"mdc-typography--headline6\\" style=\\"margin:0 0 0.5em 0;\\">Markers</h4>\\r\\n                    <DataTable table$aria-label=\\"Markers\\" style=\\"width: 100%;\\">\\r\\n                        <Body>\\r\\n                            {#each Object.keys($defs) as mrk}\\r\\n                            {#if $defs[mrk].tag === 'marker'}\\r\\n                            <Row>\\r\\n                                <Cell style=\\"padding: 0 0 0 16px;\\"><span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerStart']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                                    <svg viewBox=\\"-7 0 35 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'start')}>\\r\\n                                        \\r\\n                                        <!-- svelte-ignore component-name-lowercase -->\\r\\n                                        <defs>\\r\\n                                            <marker \\r\\n                                                id={mrk}\\r\\n                                                refX='{$defs[mrk].refX}'\\r\\n                                                refY='{$defs[mrk].refY}'\\r\\n                                                markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                                markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                                markerUnits={$defs[mrk].markerUnits}\\r\\n                                                orient={$defs[mrk].orient}\\r\\n                                                viewBox={$defs[mrk].viewBox}\\r\\n                                                preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                            >\\r\\n                                                <path \\r\\n                                                    d=\\"{$defs[mrk].path.d}\\"\\r\\n                                                    fill={$defs[mrk].path.fill}\\r\\n                                                    stroke={$defs[mrk].path.stroke}\\r\\n                                                    stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                                    stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                                    opacity={$defs[mrk].path.opacity}\\r\\n                                                    filter={$defs[mrk].path.filter}\\r\\n                                                />\\r\\n                                            </marker>\\r\\n        \\r\\n                                        </defs>\\r\\n                                        <path d=\\"M 5,10 H 25\\" marker-start={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"2\\" />\\r\\n                                    </svg>\\r\\n                                </span></Cell>\\r\\n                                <Cell style=\\"padding: 0 0 0 16px;\\">\\r\\n                                    <span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerMid']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                                        <svg viewBox=\\"0 0 30 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'mid')}>\\r\\n                                            <defs>\\r\\n                                                <marker \\r\\n                                                    id={mrk}\\r\\n                                                    refX='{$defs[mrk].refX}'\\r\\n                                                    refY='{$defs[mrk].refY}'\\r\\n                                                    markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                                    markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                                    markerUnits={$defs[mrk].markerUnits}\\r\\n                                                    orient={$defs[mrk].orient}\\r\\n                                                    viewBox={$defs[mrk].viewBox}\\r\\n                                                    preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                                >\\r\\n                                                    <path \\r\\n                                                        d=\\"{$defs[mrk].path.d}\\"\\r\\n                                                        fill={$defs[mrk].path.fill}\\r\\n                                                        stroke={$defs[mrk].path.stroke}\\r\\n                                                        stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                                        stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                                        opacity={$defs[mrk].path.opacity}\\r\\n                                                        filter={$defs[mrk].path.filter}\\r\\n                                                    />\\r\\n                                                </marker>\\r\\n        \\r\\n                                            </defs>\\r\\n                                            <path d=\\"M 3,10 H 15 H 25\\" marker-mid={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"1\\" />\\r\\n                                        </svg>\\r\\n                                    </span>\\r\\n                                </Cell>\\r\\n                                <Cell style=\\"padding: 0 0 0 16px;\\">\\r\\n                                    <span class=\\"rect\\" style=\\"background: {$elements[$selectedId]['markerEnd']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};\\">\\r\\n                                        <svg viewBox=\\"0 0 37 20\\" width=\\"100%\\" height=\\"100%\\" on:click={() => setMarker(mrk, 'end')}>\\r\\n                                            <defs>\\r\\n                                                <marker \\r\\n                                                    id={mrk}\\r\\n                                                    refX='{$defs[mrk].refX}'\\r\\n                                                    refY='{$defs[mrk].refY}'\\r\\n                                                    markerWidth='{$defs[mrk].markerWidth}'\\r\\n                                                    markerHeight='{$defs[mrk].markerHeight}'\\r\\n                                                    markerUnits={$defs[mrk].markerUnits}\\r\\n                                                    orient={$defs[mrk].orient}\\r\\n                                                    viewBox={$defs[mrk].viewBox}\\r\\n                                                    preserveAspectRatio={$defs[mrk].preserveAspectRatio}\\r\\n                                                >\\r\\n                                                    <path \\r\\n                                                        d=\\"{$defs[mrk].path.d}\\"\\r\\n                                                        fill={$defs[mrk].path.fill}\\r\\n                                                        stroke={$defs[mrk].path.stroke}\\r\\n                                                        stroke-width={$defs[mrk].path.strokewidth}\\r\\n                                                        stroke-dasharray={$defs[mrk].path.strokedasharray}\\r\\n                                                        opacity={$defs[mrk].path.opacity}\\r\\n                                                    />\\r\\n                                                </marker>\\r\\n        \\r\\n                                            </defs>\\r\\n                                            <path d=\\"M 3,10 H 25\\" marker-end={\`url(#\${mrk})\`} stroke={$defs[mrk].path.stroke} stroke-width=\\"2\\" />\\r\\n                                        </svg>\\r\\n                                    </span>\\r\\n                                </Cell>\\r\\n                                <Cell style=\\"padding: 0;\\">\\r\\n                                    <!-- <IconButton class=\\"material-icons\\" on:click={() => editMarker(mrk)}>edit</IconButton> -->\\r\\n                                    <IconButton class=\\"material-icons\\" on:click={() => removeMarker(mrk)}>delete</IconButton>\\r\\n                                </Cell>\\r\\n                            </Row>\\r\\n                            {/if}\\r\\n                            {/each}\\r\\n                        </Body>\\r\\n                    </DataTable>\\r\\n                </Content>\\r\\n                <Actions>\\r\\n                    <Button on:click={createArrow}>Arrow +</Button>\\r\\n                    <Button on:click={createBar}>Bar +</Button>\\r\\n                    <!-- <Button on:click={createMarker}>Marker +</Button> -->\\r\\n                </Actions>\\r\\n            </Card>\\r\\n        {/if}\\r\\n    </article>\\r\\n{/if}\\r\\n\\r\\n\\r\\n<style>\\r\\n    article {\\r\\n        width: 300px;\\r\\n        display: flex;\\r\\n        flex-direction:column;\\r\\n        gap:0.5em;\\r\\n    }\\r\\n    .attributeGroup {\\r\\n        background: rgb(184, 183, 183);\\r\\n        border-radius: 10px;\\r\\n        color: rgb(3, 3, 3);\\r\\n        padding: 1em;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n    .action {\\r\\n        padding: 0.5em;\\r\\n        cursor: pointer;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    .icon input {\\r\\n        height: 2em;\\r\\n        border-radius: 5px;\\r\\n        width: 70px;\\r\\n        outline: none;\\r\\n        border: none;\\r\\n    }\\r\\n    .box {\\r\\n        display: grid;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n        gap: 1em;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .iconButton {\\r\\n        font-size: 1.5em;\\r\\n        background: rgba(0, 0, 0, 0.1);\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .opacities, .strokewidths {\\r\\n        display:flex;\\r\\n        align-items: center;\\r\\n        margin: 0 0 0.5em 0;\\r\\n        border: 1px solid rgb(6, 183, 242);\\r\\n    }\\r\\n    .opacity, .strokewidth {\\r\\n        display:inline-block;\\r\\n        width: 30px;\\r\\n        height: 30px;\\r\\n        background: white;\\r\\n        cursor: pointer;\\r\\n    }\\r\\n    .strokewidth {\\r\\n        width: 24.4px;\\r\\n        height: 24.4px;\\r\\n    }\\r\\n    .active {\\r\\n        border: 1px solid red;\\r\\n    }\\r\\n    .strokedash {\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n        height: 30px;\\r\\n        background: white;\\r\\n    }\\r\\n    .rect {\\r\\n        display: flex;\\r\\n        width: 30px;\\r\\n        height: 2em;\\r\\n        border: 0.5px solid;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkwDI,mCAAQ,CACJ,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,MAAM,CACrB,IAAI,KACR,CACA,2CAAgB,CACZ,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CAAC,CAChB,CACA,mCAAQ,CACJ,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aACrB,CACA,mBAAK,CAAC,mBAAM,CACR,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IACZ,CACA,gCAAK,CACD,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACrB,CACA,uCAAY,CACR,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,OACZ,CACA,sCAAU,CAAE,yCAAc,CACtB,QAAQ,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CACA,oCAAQ,CAAE,wCAAa,CACnB,QAAQ,YAAY,CACpB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,OACZ,CACA,wCAAa,CACT,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MACZ,CACA,mCAAQ,CACJ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,GACtB,CACA,uCAAY,CACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAChB,CACA,iCAAM,CACF,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,CAAC,KAClB"}`
};
const ContextBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedId, $$unsubscribe_selectedId;
  let $elements, $$unsubscribe_elements;
  let $defs, $$unsubscribe_defs;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_DRAWING;
  let $selectedElements, $$unsubscribe_selectedElements;
  let $$unsubscribe_svg;
  let $$unsubscribe_activeElement;
  let $selectedControl1, $$unsubscribe_selectedControl1;
  let $selectedControl0, $$unsubscribe_selectedControl0;
  let $selectedVertex, $$unsubscribe_selectedVertex;
  let $$unsubscribe_elementsNode;
  let $$unsubscribe_boundingBox;
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_activeElement = subscribe(activeElement, (value) => value);
  $$unsubscribe_selectedControl1 = subscribe(selectedControl1, (value) => $selectedControl1 = value);
  $$unsubscribe_selectedControl0 = subscribe(selectedControl0, (value) => $selectedControl0 = value);
  $$unsubscribe_selectedVertex = subscribe(selectedVertex, (value) => $selectedVertex = value);
  $$unsubscribe_elementsNode = subscribe(elementsNode, (value) => value);
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => value);
  const config = {};
  create(all, config);
  const fillparts = ["fill", "stroke"];
  const filltypes = ["solid", "linear", "radial"];
  const opacities = ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"];
  const strokewidths = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"];
  const gridparts = ["hPath", "vPath", "HPath", "VPath"];
  let selectedGridPart = "hPath";
  let showSubdivisions = true;
  $selectedId && $elements[$selectedId] ? $elements[$selectedId]["filltype"] : "";
  let selected = "fill";
  let x, y, width, height, angle = 0;
  let preserveAspect = true, showAxis = true;
  let subpath = 0, index = 0, verticesx = {}, tinx = {}, toutx = {};
  const gridPathLabel = (p) => {
    let lbl = "";
    switch (p) {
      case "hPath": {
        lbl = "h-sub";
        break;
      }
      case "vPath": {
        lbl = "v-sub";
        break;
      }
      case "HPath": {
        lbl = "h-main";
        break;
      }
      case "VPath": {
        lbl = "v-main";
        break;
      }
    }
    return lbl;
  };
  let isTextOnPath = false, showPath = true;
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($selectedId && $elements[$selectedId]) {
        set_store_value(elements, $elements[$selectedId].preserveAspect = preserveAspect, $elements);
        set_store_value(elements, $elements[$selectedId].showAxis = showAxis, $elements);
        if ($elements[$selectedId].tag === "text") set_store_value(elements, $elements[$selectedId].isTextOnPath = isTextOnPath, $elements);
        set_store_value(elements, $elements[$selectedId].showPath = showPath, $elements);
        elements.set($elements);
      }
    }
    {
      if ($selectedId && $selectedVertex && $elements[$selectedId].tag === "path") {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedVertex);
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!verticesx[$selectedVertex] && subpath >= 0 && index >= 0) {
          verticesx[$selectedVertex] = $elements[$selectedId].uiEdges[subpath][index].v.x;
          $elements[$selectedId].uiEdges[subpath][index].v.y;
        }
      }
    }
    {
      if ($selectedId && $selectedControl0 && $elements[$selectedId].tag === "path") {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl0);
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!toutx[$selectedControl0] && subpath >= 0 && index >= 0) {
          toutx[$selectedControl0] = $elements[$selectedId].uiEdges[subpath][index].tout.x;
          $elements[$selectedId].uiEdges[subpath][index].tout.y;
        }
      }
    }
    {
      if ($selectedId && $selectedControl1 && $elements[$selectedId].tag === "path") {
        let nodeIndex = $elements[$selectedId].edgeIndex($selectedControl1);
        subpath = nodeIndex.subpath;
        index = nodeIndex.index;
        if (!tinx[$selectedControl1] && subpath >= 0 && index >= 0) {
          tinx[$selectedControl1] = $elements[$selectedId].uiEdges[subpath][index].tin.x;
          $elements[$selectedId].uiEdges[subpath][index].tin.y;
        }
      }
    }
    $$rendered = `${$elements && $selectedId && $elements[$selectedId] ? `<article class="svelte-ltfhtv"> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">${escape($elements[$selectedId].name)}</h4> ${$elements[$selectedId].tag === "rect" || $elements[$selectedId].tag === "image" || $elements[$selectedId].tag === "grid" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-byufiv">x</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].x
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].x = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-tr70jw">y</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].y
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].y = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-18xyp4r">Width</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].width
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].width = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-am4y16">Height</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].height
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].height = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${$elements[$selectedId].tag === "rect" || $elements[$selectedId].tag === "image" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-9p83g9">rx</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].rx
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].rx = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-1yp6lz4">ry</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].ry
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].ry = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``}` : ``} ${$elements[$selectedId].tag === "circle" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-jh0p7a">cx</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].cx
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].cx = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-4glm57">cy</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].cy
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].cy = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-jgyf49">Radius</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].r
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].r = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``} ${$elements[$selectedId].tag === "ellipse" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-jh0p7a">cx</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].cx
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].cx = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-4glm57">cy</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].cy
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].cy = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-nbt1f5">Radius X</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].rx
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].rx = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-iir1ok">Radius Y</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    "input$aria-label": "Alpha",
                    value: $elements[$selectedId].ry
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].ry = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``} ${$elements[$selectedId].tag === "regular" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-oxsrxd">n</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 3,
                    max: 50,
                    step: 1,
                    value: $elements[$selectedId].n
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].n = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-17wltpy">Side length</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 0,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].r
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].r = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``} ${$elements[$selectedId].tag === "text" ? `<div style="display:flex;flex-direction:column;gap:0.5em;">${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                type: "number",
                style: "width: 100%",
                label: "Base x",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].x
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].x = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                type: "number",
                style: "width: 100%",
                label: "Base y",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].y
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].y = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                type: "number",
                style: "width: 100%",
                label: "Font size",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].fontSize
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].fontSize = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                type: "number",
                style: "width: 100%",
                label: "Font Weight",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].fontWeight
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].fontWeight = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                style: "width: 100%",
                label: "Font Family",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].fontFamily
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].fontFamily = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>` : ``}`;
          }
        })}`;
      }
    })} ${$elements[$selectedId] && $elements[$selectedId].tag === "grid" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-4vqzdu">Grid properties</h4> ${validate_component(FormField, "FormField").$$render($$result, { style: "width:100%" }, {}, {
              label: () => {
                return `<span slot="label" data-svelte-h="svelte-gbpg18">Show subdivisions</span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: showSubdivisions },
                  {
                    checked: ($$value) => {
                      showSubdivisions = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-oeczo4">Sub division</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: 1,
                    max: 50,
                    step: 1,
                    value: $elements[$selectedId].nSubdivisions
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].nSubdivisions = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-3ptci7">dX</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    value: $elements[$selectedId].dX
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].dX = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-nzoaay">dY</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    value: $elements[$selectedId].dY
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].dY = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} <br> ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: gridparts,
                selected: selectedGridPart
              },
              {
                selected: ($$value) => {
                  selectedGridPart = $$value;
                  $$settled = false;
                }
              },
              {
                default: ({ segment }) => {
                  return `${validate_component(Segment, "Segment").$$render($$result, { segment }, {}, {
                    default: () => {
                      return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(gridPathLabel(segment))}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} ${validate_component(SolidColors, "SolidColors").$$render($$result, { fillStroke: "stroke" }, {}, {})} ${validate_component(ColorsInUse, "ColorsInUse").$$render($$result, { fillStroke: "stroke" }, {}, {})} <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-17pfkv7">Opacity</h3> <div class="opacities svelte-ltfhtv">${each(opacities, (opacity) => {
              return `<span class="${"opacity " + escape(
                $elements[$selectedId][selectedGridPart].opacity === opacity ? "active" : "",
                true
              ) + " svelte-ltfhtv"}" style="${"opacity: " + escape(opacity, true) + ";"}"></span>`;
            })}</div> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-7i93zm">Stroke width</h3> <div class="strokewidths svelte-ltfhtv">${each(strokewidths, (strokewidth) => {
              return `<span class="${"strokewidth " + escape(
                $elements[$selectedId][selectedGridPart].strokewidth === strokewidth ? "active" : "",
                true
              ) + " svelte-ltfhtv"}"><svg width="100%" height="100%" viewBox="0 0 24 24"><line x1="0" x2="24" y1="12" y2="12" stroke="black"${add_attribute("stroke-width", strokewidth, 0)}></line></svg> </span>`;
            })}</div> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-1wirur1">Solid</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId][selectedGridPart].strokewidth, 0)}></line></svg></span> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-1xavo73">Dashed</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId][selectedGridPart].strokewidth, 0)} stroke-dasharray="${escape($elements[$selectedId][selectedGridPart].strokewidth, true) + " " + escape(Number($elements[$selectedId][selectedGridPart].strokewidth) * 2, true)}"></line></svg></span> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-bhqpam">Dotted</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId][selectedGridPart].strokewidth, 0)} stroke-dasharray="${escape(0, true) + " " + escape(Number($elements[$selectedId][selectedGridPart].strokewidth) * 5, true)}" stroke-linecap="round"></line></svg></span>`;
          }
        })}`;
      }
    })}` : ``} ${$elements[$selectedId].hasOwnProperty(["content"]) ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${$elements[$selectedId].tag === "text" ? `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Text",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].content
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].content = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``} ${$elements[$selectedId].tag === "latex" ? `${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Latex",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].content
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].content = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``}`;
          }
        })}`;
      }
    })}` : ``} ${$elements[$selectedId].tag === "plot" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${each($elements[$selectedId].functions, (ftext, i) => {
              return `${validate_component(Textfield, "Textfield").$$render(
                $$result,
                {
                  variant: "filled",
                  label: "Function",
                  style: "width: 100%",
                  input$emptyValueUndefined: true,
                  value: ftext
                },
                {
                  value: ($$value) => {
                    ftext = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Done`;
                }
              })} <br>`;
            })} ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Lower limit",
                type: "number",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].xmin
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].xmin = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <br> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Upper limit",
                type: "number",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].xmax
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].xmax = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <br> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "x scale",
                type: "number",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].xscale
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].xscale = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <br> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "y scale",
                type: "number",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].yscale
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].yscale = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <br> ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                label: "Step",
                type: "number",
                style: "width: 100%",
                input$emptyValueUndefined: true,
                value: $elements[$selectedId].step
              },
              {
                value: ($$value) => {
                  $elements[$selectedId].step = $$value;
                  $$settled = false;
                }
              },
              {}
            )} <br> ${validate_component(FormField, "FormField").$$render($$result, { style: "width:100%" }, {}, {
              label: () => {
                return `<span slot="label" data-svelte-h="svelte-1gjc2lf">Show Axes</span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: showAxis },
                  {
                    checked: ($$value) => {
                      showAxis = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}` : ``} ${$elements[$selectedId].tag === "text" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-1u4txke">Text on path</h4> ${validate_component(FormField, "FormField").$$render($$result, { style: "width:100%" }, {}, {
              label: () => {
                return `<span slot="label" data-svelte-h="svelte-txgtlo">Text on path</span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: isTextOnPath },
                  {
                    checked: ($$value) => {
                      isTextOnPath = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${$elements[$selectedId].isTextOnPath ? `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `Choose path`;
                  }
                })} ${validate_component(Tooltip, "Tooltip").$$render($$result, { xPos: "center", yPos: "below" }, {}, {
                  default: () => {
                    return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `Click on this button and then click on a path to use the path for the text.`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} <div class="action svelte-ltfhtv" style="padding:0"><span class="text" data-svelte-h="svelte-1lzowf9">Start offset</span> <span class="icon svelte-ltfhtv"><label><input type="number"${add_attribute("step", 1, 0)} class="svelte-ltfhtv"${add_attribute("value", $elements[$selectedId].startOffset, 0)}></label></span></div> ${validate_component(FormField, "FormField").$$render($$result, { style: "width:100%" }, {}, {
              label: () => {
                return `<span slot="label" data-svelte-h="svelte-qhoyo9">Show path</span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: showPath },
                  {
                    checked: ($$value) => {
                      showPath = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``}`;
          }
        })}`;
      }
    })}` : ``}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-1xuoix0">Bounding Box</h4> <div class="box svelte-ltfhtv"><div class="attributeGroup svelte-ltfhtv"><div class="action svelte-ltfhtv" style="padding:0"><span class="text" data-svelte-h="svelte-rwfh99">W</span> <span class="icon svelte-ltfhtv"><label><input type="number"${add_attribute("step", 1, 0)} class="svelte-ltfhtv"${add_attribute("value", width, 0)}></label></span></div> <br> <div class="action svelte-ltfhtv" style="padding:0"><span class="text" data-svelte-h="svelte-133york">H</span> <span class="icon svelte-ltfhtv"><label><input type="number"${add_attribute("step", 1, 0)} class="svelte-ltfhtv"${add_attribute("value", height, 0)}></label></span></div></div> <div class="attributeGroup svelte-ltfhtv"><div class="action svelte-ltfhtv" style="padding:0"><span class="text" data-svelte-h="svelte-147udzk">X</span> <span class="icon svelte-ltfhtv"><label> <input type="number"${add_attribute("step", 1, 0)} class="svelte-ltfhtv"${add_attribute("value", x, 0)}> </label></span></div> <br> <div class="action svelte-ltfhtv" style="padding:0"><span class="text" data-svelte-h="svelte-12ky6nn">Y</span> <span class="icon svelte-ltfhtv"><label><input type="number"${add_attribute("step", 1, 0)} class="svelte-ltfhtv"${add_attribute("value", y, 0)}></label></span></div></div></div> ${validate_component(FormField, "FormField").$$render($$result, { style: "width:100%" }, {}, {
              label: () => {
                return `<span slot="label" data-svelte-h="svelte-19m2wzd">Preserve Aspect</span>`;
              },
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { checked: preserveAspect },
                  {
                    checked: ($$value) => {
                      preserveAspect = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}  ${$selectedVertex || $selectedControl0 || $selectedControl1 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-p2mkh3">Point</h4> ${$selectedVertex && $elements[$selectedId].tag === "path" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-byufiv">x</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].v.x
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].v.x = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-tr70jw">y</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].v.y
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].v.y = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``} ${$selectedControl0 && $elements[$selectedId].tag === "path" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-byufiv">x</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].tout.x
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].tout.x = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-tr70jw">y</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].tout.y
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].tout.y = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``} ${$selectedControl1 && $elements[$selectedId].tag === "path" ? `${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-byufiv">x</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].tin.x
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].tin.x = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(FormField, "FormField").$$render($$result, { align: "end", style: "display: flex;" }, {}, {
              label: () => {
                return `<span slot="label" style="padding-right: 10px; width:50px; display: block; line-height:1;" data-svelte-h="svelte-tr70jw">y</span>`;
              },
              default: () => {
                return `${validate_component(Slider, "Slider").$$render(
                  $$result,
                  {
                    withInput: true,
                    min: -2e3,
                    max: 2e3,
                    step: 1e-3,
                    value: $elements[$selectedId].uiEdges[subpath][index].tin.y
                  },
                  {
                    value: ($$value) => {
                      $elements[$selectedId].uiEdges[subpath][index].tin.y = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}` : ``}`;
          }
        })}`;
      }
    })}` : ``}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-4b8amk">Transforms</h4>  ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                variant: "filled",
                type: "number",
                style: "width: 100%",
                label: "Rotate",
                suffix: "deg",
                min: -360,
                max: 360,
                step: 1,
                input$emptyValueUndefined: true,
                value: angle
              },
              {
                value: ($$value) => {
                  angle = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `<span class="material-symbols-outlined" data-svelte-h="svelte-5mtzeh">swap_horiz</span>`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `<span class="material-symbols-outlined" data-svelte-h="svelte-oyemzy">swap_vert</span>`;
              }
            })}`;
          }
        })}`;
      }
    })} ${$selectedElements && $selectedElements.length > 0 ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;" data-svelte-h="svelte-h8r2xq">Alignment</h4> <div class="attributeGroup svelte-ltfhtv" style="display:flex; justify-content: space-between;"><span class="iconButton material-icons svelte-ltfhtv" title="Distribute horizontally" data-svelte-h="svelte-1v730nn">horizontal_distribute</span> <span class="iconButton material-icons svelte-ltfhtv" title="Distribute vertically" data-svelte-h="svelte-1brluh">vertical_distribute</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align horizontal left" data-svelte-h="svelte-1er1muf">align_horizontal_left</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align horizontal center" data-svelte-h="svelte-17pzcsm">align_horizontal_center</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align horizontal right" data-svelte-h="svelte-10meb0x">align_horizontal_right</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align vertical top" data-svelte-h="svelte-1j8kggx">align_vertical_top</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align vertical center" data-svelte-h="svelte-k55kyo">align_vertical_center</span> <span class="iconButton material-icons svelte-ltfhtv" title="Align vertical bottom" data-svelte-h="svelte-1cqeqwz">align_vertical_bottom</span></div>`;
          }
        })}`;
      }
    })}` : ``}  ${$elements[$selectedId].tag !== "grid" ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
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
            )} ${validate_component(SegmentedButton, "SegmentedButton").$$render(
              $$result,
              {
                singleSelect: true,
                segments: filltypes,
                selected: $elements[$selectedId]["filltype"]
              },
              {
                selected: ($$value) => {
                  $elements[$selectedId]["filltype"] = $$value;
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
            )} ${validate_component(SolidColors, "SolidColors").$$render($$result, { fillStroke: selected }, {}, {})} ${selected === "fill" ? `${validate_component(LinearGradients, "LinearGradients").$$render($$result, {}, {}, {})} ${validate_component(RadialGradients, "RadialGradients").$$render($$result, {}, {}, {})}` : ``} ${selected === "fill" ? `${validate_component(ColorsInUse, "ColorsInUse").$$render($$result, { fillStroke: selected }, {}, {})}` : `${$elements[$selectedId]["filltype"] === "solid" && selected === "stroke" ? `${validate_component(ColorsInUse, "ColorsInUse").$$render($$result, { fillStroke: selected }, {}, {})}` : ``}`}`;
          }
        })}`;
      }
    })}  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-17pfkv7">Opacity</h3> <div class="opacities svelte-ltfhtv">${each(opacities, (opacity) => {
              return `<span class="${"opacity " + escape(
                $elements[$selectedId].opacity === opacity ? "active" : "",
                true
              ) + " svelte-ltfhtv"}" style="${"opacity: " + escape(opacity, true) + ";"}"></span>`;
            })}</div> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-7i93zm">Stroke width</h3> <div class="strokewidths svelte-ltfhtv">${each(strokewidths, (strokewidth) => {
              return `<span class="${"strokewidth " + escape(
                $elements[$selectedId].strokewidth === strokewidth ? "active" : "",
                true
              ) + " svelte-ltfhtv"}"><svg width="100%" height="100%" viewBox="0 0 24 24"><line x1="0" x2="24" y1="12" y2="12" stroke="black"${add_attribute("stroke-width", strokewidth, 0)}></line></svg> </span>`;
            })}</div> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-1wirur1">Solid</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId].strokewidth, 0)}></line></svg></span> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-1xavo73">Dashed</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId].strokewidth, 0)} stroke-dasharray="${escape($elements[$selectedId].strokewidth, true) + " " + escape(Number($elements[$selectedId].strokewidth) * 2, true)}"></line></svg></span> <h3 class="mdc-typography--headline6" style="margin:0;" data-svelte-h="svelte-bhqpam">Dotted</h3> <span class="strokedash svelte-ltfhtv"><svg width="100%" height="100%" viewBox="0 0 300 30"><line x1="0%" x2="100%" y1="50%" y2="50%" stroke="black"${add_attribute("stroke-width", $elements[$selectedId].strokewidth, 0)} stroke-dasharray="${escape(0, true) + " " + escape(Number($elements[$selectedId].strokewidth) * 5, true)}" stroke-linecap="round"></line></svg></span>`;
          }
        })}`;
      }
    })}` : ``}  ${$selectedId && $elements[$selectedId] && ($elements[$selectedId].tag === "path" || $elements[$selectedId].tag === "plot") ? `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
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
                                return `<span class="rect svelte-ltfhtv" style="${"background: " + escape(
                                  $elements[$selectedId]["markerStart"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="-7 0 35 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}${add_attribute("filter", $defs[mrk].path.filter, 0)}></path></marker></defs><path d="M 5,10 H 25"${add_attribute("marker-start", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="2"></path></svg> </span>`;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0 0 0 16px;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-ltfhtv" style="${"background: " + escape(
                                  $elements[$selectedId]["markerMid"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="0 0 30 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}${add_attribute("filter", $defs[mrk].path.filter, 0)}></path></marker></defs><path d="M 3,10 H 15 H 25"${add_attribute("marker-mid", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="1"></path></svg></span> `;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0 0 0 16px;" }, {}, {
                              default: () => {
                                return `<span class="rect svelte-ltfhtv" style="${"background: " + escape(
                                  $elements[$selectedId]["markerEnd"]?.includes(mrk) ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                                  true
                                ) + ";"}"><svg viewBox="0 0 37 20" width="100%" height="100%"><defs><marker${add_attribute("id", mrk, 0)}${add_attribute("refX", $defs[mrk].refX, 0)}${add_attribute("refY", $defs[mrk].refY, 0)}${add_attribute("markerWidth", $defs[mrk].markerWidth, 0)}${add_attribute("markerHeight", $defs[mrk].markerHeight, 0)}${add_attribute("markerUnits", $defs[mrk].markerUnits, 0)}${add_attribute("orient", $defs[mrk].orient, 0)}${add_attribute("viewBox", $defs[mrk].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[mrk].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[mrk].path.d, 0)}${add_attribute("fill", $defs[mrk].path.fill, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)}${add_attribute("stroke-width", $defs[mrk].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[mrk].path.strokedasharray, 0)}${add_attribute("opacity", $defs[mrk].path.opacity, 0)}></path></marker></defs><path d="M 3,10 H 25"${add_attribute("marker-end", `url(#${mrk})`, 0)}${add_attribute("stroke", $defs[mrk].path.stroke, 0)} stroke-width="2"></path></svg></span> `;
                              }
                            })} ${validate_component(Cell, "Cell").$$render($$result, { style: "padding: 0;" }, {}, {
                              default: () => {
                                return ` ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
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
        })} ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Arrow +`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Bar +`;
              }
            })} `;
          }
        })}`;
      }
    })}` : ``}</article>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_selectedId();
  $$unsubscribe_elements();
  $$unsubscribe_defs();
  $$unsubscribe_objectCount();
  $$unsubscribe_DRAWING();
  $$unsubscribe_selectedElements();
  $$unsubscribe_svg();
  $$unsubscribe_activeElement();
  $$unsubscribe_selectedControl1();
  $$unsubscribe_selectedControl0();
  $$unsubscribe_selectedVertex();
  $$unsubscribe_elementsNode();
  $$unsubscribe_boundingBox();
  return $$rendered;
});
const css$1 = {
  code: ".actions.svelte-1gs5lav{display:flex;flex-direction:row;gap:0.5em;align-items:center;justify-content:start;flex:1;min-width:100%;overflow-x:auto}.svelte-1gs5lav .solo-input{padding-left:0.5em;flex-grow:1;color:var(--mdc-theme-on-surface)}.svelte-1gs5lav .solo-input::placeholder{color:var(--mdc-theme-on-surface);opacity:0.6}.textInput.svelte-1gs5lav{display:flex;align-items:center}",
  map: `{"version":3,"file":"ContextActions.svelte","sources":["ContextActions.svelte"],"sourcesContent":["<script lang='ts'>\\r\\n    //@ts-nocheck\\r\\n    import IconButton, { Icon } from '@smui/icon-button';\\r\\n    import { Svg } from '@smui/common';\\r\\n    import { Input } from '@smui/textfield';\\r\\n    import { createEventDispatcher } from 'svelte';\\r\\n    import {addingNodes, boundingBox} from '$lib/vectorial/pages/vectorial/stores';\\r\\n    import {PAN, panX, panY, selectedId, elements} from '$lib/vectorial/pages/vectorial/stores';\\r\\n    import PathOperations from \\"$lib/vectorial/pages/vectorial/PathOperations.svelte\\";\\r\\n    import CanvasOperations from \\"$lib/vectorial/pages/vectorial/CanvasOperations.svelte\\";\\r\\n    import ElementOperations from \\"$lib/vectorial/pages/vectorial/ElementOperations.svelte\\";\\r\\n    import GroupOperations from '$lib/vectorial/pages/vectorial/GroupOperations.svelte';\\r\\n    import HistoryOperations from \\"$lib/vectorial/pages/vectorial/HistoryOperations.svelte\\";\\r\\n    let dispatch = createEventDispatcher();\\r\\n    export let selectedTool = '';\\r\\n    let inputValue = '', ctm;\\r\\n    let takingControls = false,\\r\\n        inputElementId, elementAvailable = true, showMoreOperations = false;\\r\\n    const doAction = (selectedAction) => {\\r\\n        if(selectedAction === 'AddNode') $addingNodes = true;\\r\\n        dispatch('doAction', {selectedAction, inputValue})\\r\\n    }\\r\\n    const resetBoundingbox = (evt) => {\\r\\n        ctm = $boundingBox.getScreenCTM().inverse();\\r\\n    }\\r\\n<\/script>\\r\\n<div class=\\"actions noScrollBar\\">\\r\\n    \\r\\n        {#if selectedTool === 'Shapes'}\\r\\n            <IconButton size=\\"button\\" on:click={() => doAction('Line')}>\\r\\n                <Icon component={Svg} viewBox=\\"-45 -25 50 50\\">\\r\\n                    <line\\r\\n                        x1=\\"-35\\"\\r\\n                        y1=\\"-20\\"\\r\\n                        x2=\\"0\\"\\r\\n                        y2=\\"20\\"\\r\\n                        stroke=\\"currentColor\\"\\r\\n                        fill=\\"none\\"\\r\\n                        stroke-width=\\"5\\"\\r\\n                    />\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <IconButton size=\\"button\\" on:click={() => doAction('Circle')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    circle\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <IconButton size=\\"button\\" on:click={() => doAction('Ellipse')}>\\r\\n                <Icon component={Svg} viewBox=\\"0 0 24 24\\">\\r\\n                    <ellipse cx=\\"12\\" cy=\\"12\\" rx=\\"12\\" ry=\\"8\\" fill=\\"currentColor\\" stroke-width=\\"0\\" />\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <!-- <IconButton size=\\"button\\" on:click={createEllipse}>\\r\\n                <Icon component={Svg} viewBox=\\"-45 -25 90 50\\">\\r\\n                    <ellipse rx=\\"40\\" ry=\\"20\\" cx=\\"0\\" cy=\\"0\\" stroke=\\"black\\" fill='black' stroke-width=\\"1\\" />\\r\\n                </Icon>\\r\\n            </IconButton> -->\\r\\n            <IconButton size=\\"button\\" on:click={() => doAction('Rectangle')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    square\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n            <IconButton size=\\"button\\" on:click={() => doAction('Regular')}>\\r\\n                <Icon class=\\"material-icons\\">\\r\\n                    hexagon\\r\\n                </Icon>\\r\\n            </IconButton>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'Text'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"Text\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton size=\\"button\\" on:click={() => doAction('Text')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'LaTeX'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"LaTeX\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton size=\\"button\\" on:click={() => doAction('LaTeX')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if selectedTool === 'Plot'}\\r\\n            <div class=\\"textInput\\">\\r\\n                <Input\\r\\n                    bind:value={inputValue}\\r\\n                    placeholder=\\"Plot function\\"\\r\\n                    class=\\"solo-input\\"\\r\\n                />\\r\\n                <IconButton size=\\"button\\" on:click={() => doAction('Plot')}>\\r\\n                    <Icon class=\\"material-icons\\">arrow_right_alt</Icon>\\r\\n                </IconButton>\\r\\n            </div>\\r\\n        {/if}\\r\\n        {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path'}\\r\\n            <PathOperations\\r\\n                bind:inputElementId\\r\\n                bind:takingControls\\r\\n            />\\r\\n        {/if}\\r\\n        {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g'}\\r\\n            <GroupOperations />\\r\\n        {/if}\\r\\n    \\r\\n    \\r\\n</div>\\r\\n<style>\\r\\n    .actions {\\r\\n        display: flex;\\r\\n        flex-direction: row;\\r\\n        gap: 0.5em;\\r\\n        align-items: center;\\r\\n        justify-content: start;\\r\\n        flex: 1;\\r\\n        min-width:100%;\\r\\n        overflow-x: auto;\\r\\n    }\\r\\n\\r\\n    * :global(.solo-input) {\\r\\n        padding-left: 0.5em;\\r\\n        flex-grow: 1;\\r\\n        color: var(--mdc-theme-on-surface);\\r\\n    }\\r\\n    * :global(.solo-input::placeholder) {\\r\\n        color: var(--mdc-theme-on-surface);\\r\\n        opacity: 0.6;\\r\\n    }\\r\\n    .textInput {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAqHI,uBAAS,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,KAAK,CACV,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAAK,CACtB,IAAI,CAAE,CAAC,CACP,UAAU,IAAI,CACd,UAAU,CAAE,IAChB,CAEA,eAAC,CAAS,WAAa,CACnB,YAAY,CAAE,KAAK,CACnB,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,IAAI,sBAAsB,CACrC,CACA,eAAC,CAAS,wBAA0B,CAChC,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,OAAO,CAAE,GACb,CACA,yBAAW,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB"}`
};
const ContextActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_boundingBox;
  let $$unsubscribe_addingNodes;
  let $selectedId, $$unsubscribe_selectedId;
  let $elements, $$unsubscribe_elements;
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => value);
  $$unsubscribe_addingNodes = subscribe(addingNodes, (value) => value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  createEventDispatcher();
  let { selectedTool = "" } = $$props;
  let inputValue = "";
  let takingControls = false, inputElementId;
  if ($$props.selectedTool === void 0 && $$bindings.selectedTool && selectedTool !== void 0) $$bindings.selectedTool(selectedTool);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="actions noScrollBar svelte-1gs5lav">${selectedTool === "Shapes" ? `${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { component: Svg, viewBox: "-45 -25 50 50" }, {}, {
          default: () => {
            return `<line x1="-35" y1="-20" x2="0" y2="20" stroke="currentColor" fill="none" stroke-width="5" class="svelte-1gs5lav"></line>`;
          }
        })}`;
      }
    })} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `circle`;
          }
        })}`;
      }
    })} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { component: Svg, viewBox: "0 0 24 24" }, {}, {
          default: () => {
            return `<ellipse cx="12" cy="12" rx="12" ry="8" fill="currentColor" stroke-width="0" class="svelte-1gs5lav"></ellipse>`;
          }
        })}`;
      }
    })}  ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `square`;
          }
        })}`;
      }
    })} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `hexagon`;
          }
        })}`;
      }
    })}` : ``} ${selectedTool === "Text" ? `<div class="textInput svelte-1gs5lav">${validate_component(Input, "Input").$$render(
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
    )} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${selectedTool === "LaTeX" ? `<div class="textInput svelte-1gs5lav">${validate_component(Input, "Input").$$render(
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
    )} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${selectedTool === "Plot" ? `<div class="textInput svelte-1gs5lav">${validate_component(Input, "Input").$$render(
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
    )} ${validate_component(IconButton, "IconButton").$$render($$result, { size: "button" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `arrow_right_alt`;
          }
        })}`;
      }
    })}</div>` : ``} ${$selectedId && $elements[$selectedId] && $elements[$selectedId].tag === "path" ? `${validate_component(PathOperations, "PathOperations").$$render(
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
    )}` : ``} ${$selectedId && $elements[$selectedId] && $elements[$selectedId].tag === "g" ? `${validate_component(GroupOperations, "GroupOperations").$$render($$result, {}, {}, {})}` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_boundingBox();
  $$unsubscribe_addingNodes();
  $$unsubscribe_selectedId();
  $$unsubscribe_elements();
  return $$rendered;
});
const SVGShadow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<filter${add_attribute("id", id, 0)} x="${escape($defs[id].x, true) + "%"}" y="${escape($defs[id].y, true) + "%"}" width="${escape($defs[id].width, true) + "%"}" height="${escape($defs[id].height, true) + "%"}"><feDropShadow${add_attribute("dx", $defs[id].dx, 0)}${add_attribute("dy", $defs[id].dy, 0)}${add_attribute("stdDeviation", $defs[id].stdDeviation, 0)}${add_attribute("flood-color", $defs[id].floodcolor, 0)}${add_attribute("flood-opacity", $defs[id].floodopacity, 0)}></feDropShadow></filter>`;
});
const SVGBlur = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<filter${add_attribute("id", id, 0)} x="${escape($defs[id].x, true) + "%"}" y="${escape($defs[id].y, true) + "%"}" width="${escape($defs[id].width, true) + "%"}" height="${escape($defs[id].height, true) + "%"}"><feGaussianBlur${add_attribute("in", $defs[id].input, 0)}${add_attribute("stdDeviation", $defs[id].stdDeviation, 0)}${add_attribute("edgeMode", $defs[id].edgeMode, 0)}></feGaussianBlur></filter>`;
});
const SVGPattern = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<pattern${add_attribute("id", id, 0)} x="${escape($defs[id].x, true) + "%"}" y="${escape($defs[id].y, true) + "%"}" width="${escape($defs[id].width, true) + "%"}" height="${escape($defs[id].height, true) + "%"}"${add_attribute("viewBox", $defs[id].viewBox, 0)}${add_attribute("href", $defs[id].href, 0)}${add_attribute("patternContentUnits", $defs[id].patternContentUnits, 0)}${add_attribute("patternUnits", $defs[id].patternUnits, 0)}${add_attribute("vector-effect", $defs[id].vectorEffect, 0)}${add_attribute("opacity", $defs[id].opacity, 0)}${add_attribute("filter", $defs[id].filter, 0)}${add_attribute("mask", $defs[id].mask, 0)} patternTransform="${"matrix(" + escape($defs[id].patternTransform.a, true) + " " + escape($defs[id].patternTransform.b, true) + " " + escape($defs[id].patternTransform.c, true) + " " + escape($defs[id].patternTransform.d, true) + " " + escape($defs[id].patternTransform.e, true) + " " + escape($defs[id].patternTransform.f, true) + ")"}">${$defs[id].child.length > 0 ? `${validate_component(SVGGroup, "SVGGroup").$$render($$result, { id: $defs[id].child }, {}, {})}` : ``}</pattern>`;
});
const SVGMarker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<marker${add_attribute("id", id, 0)}${add_attribute("refX", $defs[id].refX, 0)}${add_attribute("refY", $defs[id].refY, 0)}${add_attribute("markerWidth", $defs[id].markerWidth, 0)}${add_attribute("markerHeight", $defs[id].markerHeight, 0)}${add_attribute("markerUnits", $defs[id].markerUnits, 0)}${add_attribute("orient", $defs[id].orient, 0)}${add_attribute("viewBox", $defs[id].viewBox, 0)}${add_attribute("preserveAspectRatio", $defs[id].preserveAspectRatio, 0)}><path${add_attribute("d", $defs[id].path.d, 0)}${add_attribute("fill", $defs[id].path.fill, 0)}${add_attribute("stroke", $defs[id].path.stroke, 0)}${add_attribute("stroke-width", $defs[id].path.strokewidth, 0)}${add_attribute("stroke-dasharray", $defs[id].path.strokedasharray, 0)}${add_attribute("opacity", $defs[id].path.opacity, 0)}${add_attribute("filter", $defs[id].path.filter, 0)} transform="${"matrix(" + escape($defs[id].path.tm.a, true) + " " + escape($defs[id].path.tm.b, true) + " " + escape($defs[id].path.tm.c, true) + " " + escape($defs[id].path.tm.d, true) + " " + escape($defs[id].path.tm.e, true) + " " + escape($defs[id].path.tm.f, true) + ")"}"></path></marker>`;
});
const SVGSpecularLighting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<filter${add_attribute("id", id, 0)} x="${escape($defs[id].x, true) + "%"}" y="${escape($defs[id].y, true) + "%"}" width="${escape($defs[id].width, true) + "%"}" height="${escape($defs[id].height, true) + "%"}"><feSpecularLighting${add_attribute("result", $defs[id].result, 0)}${add_attribute("specularExponent", $defs[id].specularExponent, 0)}${add_attribute("specularConstant", $defs[id].specularConstant, 0)}${add_attribute("lighting-color", $defs[id].lightingColor, 0)}${add_attribute("surfaceScale", $defs[id].surfaceScale, 0)}><fePointLight${add_attribute("x", $defs[id].point.x, 0)}${add_attribute("y", $defs[id].point.y, 0)}${add_attribute("z", $defs[id].point.z, 0)}></fePointLight></feSpecularLighting><feComposite${add_attribute("in", $defs[id].input, 0)}${add_attribute("in2", $defs[id].input2, 0)}${add_attribute("operator", $defs[id].operator, 0)}${add_attribute("k1", $defs[id].k1, 0)}${add_attribute("k2", $defs[id].k2, 0)}${add_attribute("k3", $defs[id].k3, 0)}${add_attribute("k4", $defs[id].k4, 0)}></feComposite></filter>`;
});
const SVGDiffuseLighting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_defs();
  return `<filter${add_attribute("id", id, 0)} x="${escape($defs[id].x, true) + "%"}" y="${escape($defs[id].y, true) + "%"}" width="${escape($defs[id].width, true) + "%"}" height="${escape($defs[id].height, true) + "%"}"><feDiffuseLighting${add_attribute("result", $defs[id].result, 0)}${add_attribute("diffuseConstant", $defs[id].diffuseConstant, 0)}${add_attribute("lighting-color", $defs[id].lightingColor, 0)}${add_attribute("surfaceScale", $defs[id].surfaceScale, 0)}><fePointLight${add_attribute("x", $defs[id].point.x, 0)}${add_attribute("y", $defs[id].point.y, 0)}${add_attribute("z", $defs[id].point.z, 0)}></fePointLight></feDiffuseLighting><feComposite${add_attribute("in", $defs[id].input, 0)}${add_attribute("in2", $defs[id].input2, 0)}${add_attribute("operator", $defs[id].operator, 0)}${add_attribute("k1", $defs[id].k1, 0)}${add_attribute("k2", $defs[id].k2, 0)}${add_attribute("k3", $defs[id].k3, 0)}${add_attribute("k4", $defs[id].k4, 0)}></feComposite></filter>`;
});
const SVGTextMask = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $elements, $$unsubscribe_elements;
  let $defs, $$unsubscribe_defs;
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$unsubscribe_elements();
  $$unsubscribe_defs();
  return `<mask${add_attribute("id", id, 0)} x="-10%" y="-10%" width="120%" height="120%" transform="${"matrix(" + escape($elements[$defs[id].parent]?.tm.a, true) + " " + escape($elements[$defs[id].parent]?.tm.b, true) + " " + escape($elements[$defs[id].parent]?.tm.c, true) + " " + escape($elements[$defs[id].parent]?.tm.d, true) + " " + escape($elements[$defs[id].parent]?.tm.e, true) + " " + escape($elements[$defs[id].parent]?.tm.f, true) + ")"}">${$elements[$defs[id].shape].tag === "circle" ? `<circle${add_attribute("cx", $elements[$defs[id].shape].cx, 0)}${add_attribute("cy", $elements[$defs[id].shape].cy, 0)}${add_attribute("r", $elements[$defs[id].shape].r, 0)} fill="white"${add_attribute("stroke", $elements[$defs[id].shape].stroke, 0)}${add_attribute("stroke-width", $elements[$defs[id].shape].strokewidth, 0)}${add_attribute("stroke-dasharray", $elements[$defs[id].shape].strokedasharray, 0)} transform="${"matrix(" + escape($elements[$defs[id].shape].tm.a, true) + " " + escape($elements[$defs[id].shape].tm.b, true) + " " + escape($elements[$defs[id].shape].tm.c, true) + " " + escape($elements[$defs[id].shape].tm.d, true) + " " + escape($elements[$defs[id].shape].tm.e, true) + " " + escape($elements[$defs[id].shape].tm.f, true) + ")"}"></circle>` : `${$elements[$defs[id].shape].tag === "rect" ? `<rect${add_attribute("x", $elements[$defs[id].shape].x, 0)}${add_attribute("y", $elements[$defs[id].shape].y, 0)}${add_attribute("width", $elements[$defs[id].shape].width, 0)}${add_attribute("height", $elements[$defs[id].shape].height, 0)}${add_attribute("rx", $elements[$defs[id].shape].rx, 0)}${add_attribute("ry", $elements[$defs[id].shape].ry, 0)} fill="white"${add_attribute("stroke", $elements[$defs[id].shape].stroke, 0)}${add_attribute("stroke-width", $elements[$defs[id].shape].strokewidth, 0)}${add_attribute("stroke-dasharray", $elements[$defs[id].shape].strokedasharray, 0)} transform="${"matrix(" + escape($elements[$defs[id].shape].tm.a, true) + " " + escape($elements[$defs[id].shape].tm.b, true) + " " + escape($elements[$defs[id].shape].tm.c, true) + " " + escape($elements[$defs[id].shape].tm.d, true) + " " + escape($elements[$defs[id].shape].tm.e, true) + " " + escape($elements[$defs[id].shape].tm.f, true) + ")"}"></rect>` : `${$elements[$defs[id].shape].tag === "regular" ? `<polygon${add_attribute("points", $elements[$defs[id].shape].points, 0)} fill="white"${add_attribute("stroke", $elements[$defs[id].shape].stroke, 0)}${add_attribute("stroke-width", $elements[$defs[id].shape].strokewidth, 0)}${add_attribute("stroke-dasharray", $elements[$defs[id].shape].strokedasharray, 0)} transform="${"matrix(" + escape($elements[$defs[id].shape].tm.a, true) + " " + escape($elements[$defs[id].shape].tm.b, true) + " " + escape($elements[$defs[id].shape].tm.c, true) + " " + escape($elements[$defs[id].shape].tm.d, true) + " " + escape($elements[$defs[id].shape].tm.e, true) + " " + escape($elements[$defs[id].shape].tm.f, true) + ")"}"></polygon>` : `${$elements[$defs[id].shape].tag === "path" ? `<path${add_attribute("d", $elements[$defs[id].shape].d, 0)} fill="white"${add_attribute("stroke", $elements[$defs[id].shape].stroke, 0)}${add_attribute("stroke-width", $elements[$defs[id].shape].strokewidth, 0)}${add_attribute("stroke-dasharray", $elements[$defs[id].shape].strokedasharray, 0)} transform="${"matrix(" + escape($elements[$defs[id].shape].tm.a, true) + " " + escape($elements[$defs[id].shape].tm.b, true) + " " + escape($elements[$defs[id].shape].tm.c, true) + " " + escape($elements[$defs[id].shape].tm.d, true) + " " + escape($elements[$defs[id].shape].tm.e, true) + " " + escape($elements[$defs[id].shape].tm.f, true) + ")"}"></path>` : `${$elements[$defs[id].shape].tag === "image" ? `<image${add_attribute("x", $elements[$defs[id].shape].x, 0)}${add_attribute("y", $elements[$defs[id].shape].y, 0)}${add_attribute("width", $elements[$defs[id].shape].width, 0)}${add_attribute("height", $elements[$defs[id].shape].height, 0)}${add_attribute("rx", $elements[$defs[id].shape].rx, 0)}${add_attribute("ry", $elements[$defs[id].shape].ry, 0)}${add_attribute("href", $elements[$defs[id].shape].href, 0)} fill="white"${add_attribute("preserveAspectRatio", $elements[$defs[id].shape].preserveAspectRatio, 0)} transform="${"matrix(" + escape($elements[$defs[id].shape].tm.a, true) + " " + escape($elements[$defs[id].shape].tm.b, true) + " " + escape($elements[$defs[id].shape].tm.c, true) + " " + escape($elements[$defs[id].shape].tm.d, true) + " " + escape($elements[$defs[id].shape].tm.e, true) + " " + escape($elements[$defs[id].shape].tm.f, true) + ")"}"></image>` : ``}`}`}`}`}${each($defs[id].text, (text) => {
    return `<text${add_attribute("x", $elements[text].x, 0)}${add_attribute("y", $elements[text].y, 0)} font-size="${escape($elements[text].fontSize, true) + "px"}"${add_attribute("font-weight", $elements[text].fontWeight, 0)} transform="${"matrix(" + escape($elements[text].tm.a, true) + " " + escape($elements[text].tm.b, true) + " " + escape($elements[text].tm.c, true) + " " + escape($elements[text].tm.d, true) + " " + escape($elements[text].tm.e, true) + " " + escape($elements[text].tm.f, true) + ")"}">${escape($elements[text].content)}</text>`;
  })}</mask>`;
});
const css = {
  code: ".SVG.svelte-p2dk90{touch-action:none}.canvas.svelte-p2dk90{width:fit-content;height:fit-content;background:white;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.3)}.contextBox.svelte-p2dk90{position:fixed;left:50px;top:50px;display:grid;grid-template-columns:48px 1fr;grid-template-rows:48px 1fr;z-index:100;width:348px;height:348px;overflow-x:hidden}.boxVisibility.svelte-p2dk90{position:fixed;left:50px;top:50px;width:48px;height:48px;background:green;display:flex;align-items:center;justify-content:center;cursor:pointer}.dragBar.svelte-p2dk90{position:fixed;width:48px;height:300px;background:red;z-index:200;left:50px;top:98px;font-size:48px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;justify-content:center}.dragBar.svelte-p2dk90:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.contextActions.svelte-p2dk90{position:fixed;width:300px;height:48px;z-index:200;left:98px;top:50px;font-size:48px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;overflow-x:auto}.content.svelte-p2dk90{background:black;width:300px;height:300px;margin-left:48px;box-shadow:1px 1px 1px gray;margin-top:48px}",
  map: `{"version":3,"file":"Vectorial.svelte","sources":["Vectorial.svelte"],"sourcesContent":["<script id=\\"MathJax-script\\" lang=\\"ts\\">\\r\\n\\t//@ts-nocheck\\r\\n\\timport { createEventDispatcher } from 'svelte';\\r\\n\\timport {\\r\\n\\t\\tonSVG,\\r\\n\\t\\tpathMode,\\r\\n\\t\\tlassoElements,\\r\\n\\t\\tshowBBoxControls,\\r\\n\\t\\taddingNodes,\\r\\n\\t\\tPAN,\\r\\n\\t\\tpanX,\\r\\n\\t\\tpanY,\\r\\n\\t\\tZ,\\r\\n\\t\\tscreenCTM,\\r\\n\\t\\tsvg,\\r\\n\\t\\tcanvasBackground,\\r\\n\\t\\tDRAWING,\\r\\n\\t\\tobjectCount,\\r\\n\\t\\tselectionMode,\\r\\n\\t\\tselectedElement,\\r\\n\\t\\tselectedId,\\r\\n\\t\\tselectedVertex,\\r\\n\\t\\tselectedControl0,\\r\\n\\t\\tselectedControl1,\\r\\n\\t\\tcurrentLayer,\\r\\n\\t\\tappHistory,\\r\\n\\t\\tcurrentState,\\r\\n\\t\\tactiveElement,\\r\\n\\t\\tBBOX,\\r\\n\\t\\tsymbols,\\r\\n\\t\\tshowControls,\\r\\n\\t\\tshowGuides,\\r\\n\\t\\tboundingBox\\r\\n\\t} from '$lib/vectorial/pages/vectorial/stores';\\r\\n\\timport {\\r\\n\\t\\tdefs,\\r\\n\\t\\telements,\\r\\n\\t\\telementsNode,\\r\\n\\t\\tsymbol,\\r\\n\\t\\tmirrorVertex,\\r\\n\\t\\tmirrorMode,\\r\\n\\t\\tcircleMode,\\r\\n\\t\\tcircledVertices,\\r\\n\\t\\tcircleCenter\\r\\n\\t} from '$lib/vectorial/pages/vectorial/stores';\\r\\n\\t// import {typeset} from '$lib/vectorial/shared/typeset';\\r\\n\\t//import stores\\r\\n\\timport { onMount } from 'svelte';\\r\\n\\timport MenuSurface from '@smui/menu-surface';\\r\\n\\timport Card, { Content, Actions } from '@smui/card';\\r\\n\\timport Button, { Label } from '@smui/button';\\r\\n\\timport Textfield from '@smui/textfield';\\r\\n\\timport { Point } from '$lib/vectorial/utils/common/point';\\r\\n\\timport ContextBox from '$lib/vectorial/pages/vectorial/ContextBox.svelte';\\r\\n\\timport ContextActions from '$lib/vectorial/pages/vectorial/ContextActions.svelte';\\r\\n\\timport SVGGroup from '$lib/vectorial/pages/vectorial/SVGGroup.svelte';\\r\\n\\r\\n\\timport SVGShadow from '$lib/vectorial/pages/vectorial/SVGShadow.svelte';\\r\\n\\timport SVGBlur from '$lib/vectorial/pages/vectorial/SVGBlur.svelte';\\r\\n\\timport SVGPattern from '$lib/vectorial/pages/vectorial/SVGPattern.svelte';\\r\\n\\timport SVGMarker from '$lib/vectorial/pages/vectorial/SVGMarker.svelte';\\r\\n\\timport SVGSpecularLighting from '$lib/vectorial/pages/vectorial/SVGSpecularLighting.svelte';\\r\\n\\timport SVGDiffuseLighting from '$lib/vectorial/pages/vectorial/SVGDiffuseLighting.svelte';\\r\\n\\timport SVGTextMask from '$lib/vectorial/pages/vectorial/SVGTextMask.svelte';\\r\\n\\timport { selectedElements, selectedVertices } from './stores';\\r\\n\\r\\n\\t// export let sourceApp = \\"Vectorial\\";\\r\\n\\t// export let dispatchUrl = \`/\${$page.data.user.publicID}/drawings\`;\\r\\n\\tlet dispatch = createEventDispatcher();\\r\\n\\tlet showContextBox = true;\\r\\n\\tonMount(() => {\\r\\n\\t\\tMathJax.typeset();\\r\\n\\r\\n\\t\\t// hydrateElements();\\r\\n\\t\\t// hydrateElementData();\\r\\n\\t});\\r\\n\\r\\n\\tlet isRotating = false,\\r\\n\\t\\tstateChanged = false;\\r\\n\\r\\n\\tlet rotationMode = false;\\r\\n\\tlet contextActions, contextContent, contextBox, boxVisibility;\\r\\n\\tlet showVirtualVertex = false,\\r\\n\\t\\tvirtualVertex = null;\\r\\n\\r\\n\\tconst stretch = (id) => {\\r\\n\\t\\tif (id.split('-')[0] === 'Group') {\\r\\n\\t\\t\\t$elements[id].stretchNodes();\\r\\n\\t\\t\\t$elements = $elements;\\r\\n\\t\\t\\tfor (let i = 0; i < $elements[id].treeNode.elements.length; i++) {\\r\\n\\t\\t\\t\\tstretch($elements[id].treeNode.elements[i].id);\\r\\n\\t\\t\\t}\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t$elements[id].stretchNodes();\\r\\n\\t\\t\\t$elements = $elements;\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\r\\n\\tconst translate = (id, dx, dy) => {\\r\\n\\t\\tif (id.split('-')[0] === 'Group') {\\r\\n\\t\\t\\t$elements[id].translate(dx, dy);\\r\\n\\t\\t\\tfor (let i = 0; i < $elements[id].treeNode.elements.length; i++) {\\r\\n\\t\\t\\t\\ttranslate($elements[id].treeNode.elements[i].id, dx, dy);\\r\\n\\t\\t\\t}\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t$elements[id].translate(dx, dy);\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\tconst rotateAngle = (id, theta, axisx, axisy) => {\\r\\n\\t\\tif (id.split('-')[0] === 'Group') {\\r\\n\\t\\t\\tfor (let i = 0; i < $elements[id].treeNode.elements.length; i++) {\\r\\n\\t\\t\\t\\trotateAngle($elements[id].treeNode.elements[i].id, theta, axisx, axisy);\\r\\n\\t\\t\\t}\\r\\n\\t\\t} else {\\r\\n\\t\\t\\t$elements[id].rotate(theta, axisx, axisy);\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\tconst rotate = (id, coord, dx, dy) => {\\r\\n\\t\\t//small angles\\r\\n\\t\\t//compute angle\\r\\n\\t\\tlet DX = coord.x - $elements[id].axisx;\\r\\n\\t\\tlet DY = coord.y - $elements[id].axisy;\\r\\n\\t\\tlet r = Math.sqrt(DX * DX + DY * DY);\\r\\n\\t\\tlet dr = Math.sqrt(dx * dx + dy * dy);\\r\\n\\t\\tlet sign = 1;\\r\\n\\t\\tif (DX >= 0 && DY >= 0) {\\r\\n\\t\\t\\tif (dy <= dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX < 0 && DY > 0) {\\r\\n\\t\\t\\tif (dy >= -dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX < 0 && DY < 0) {\\r\\n\\t\\t\\tif (dy >= dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX > 0 && DY < 0) {\\r\\n\\t\\t\\tif (dy <= -dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tlet theta = (sign * dr) / r;\\r\\n\\t\\trotateAngle(id, theta, $elements[id].axisx, $elements[id].axisy);\\r\\n\\t};\\r\\n\\r\\n\\tconst updateSelectionBox = (id) => {\\r\\n\\t\\t$elements[id].sbox.tl.x =\\r\\n\\t\\t\\t$elements[id].bbox.x * $elements[id].ctm.a +\\r\\n\\t\\t\\t$elements[id].bbox.y * $elements[id].ctm.c +\\r\\n\\t\\t\\t$elements[id].ctm.e;\\r\\n\\t\\t$elements[id].sbox.tl.y =\\r\\n\\t\\t\\t$elements[id].bbox.x * $elements[id].ctm.b +\\r\\n\\t\\t\\t$elements[id].bbox.y * $elements[id].ctm.d +\\r\\n\\t\\t\\t$elements[id].ctm.f;\\r\\n\\r\\n\\t\\t$elements[id].sbox.tr.x =\\r\\n\\t\\t\\t($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a +\\r\\n\\t\\t\\t$elements[id].bbox.y * $elements[id].ctm.c +\\r\\n\\t\\t\\t$elements[id].ctm.e;\\r\\n\\t\\t$elements[id].sbox.tr.y =\\r\\n\\t\\t\\t($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b +\\r\\n\\t\\t\\t$elements[id].bbox.y * $elements[id].ctm.d +\\r\\n\\t\\t\\t$elements[id].ctm.f;\\r\\n\\r\\n\\t\\t$elements[id].sbox.bl.x =\\r\\n\\t\\t\\t$elements[id].bbox.x * $elements[id].ctm.a +\\r\\n\\t\\t\\t($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c +\\r\\n\\t\\t\\t$elements[id].ctm.e;\\r\\n\\t\\t$elements[id].sbox.bl.y =\\r\\n\\t\\t\\t$elements[id].bbox.x * $elements[id].ctm.b +\\r\\n\\t\\t\\t($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d +\\r\\n\\t\\t\\t$elements[id].ctm.f;\\r\\n\\r\\n\\t\\t$elements[id].sbox.br.x =\\r\\n\\t\\t\\t($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a +\\r\\n\\t\\t\\t($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c +\\r\\n\\t\\t\\t$elements[id].ctm.e;\\r\\n\\t\\t$elements[id].sbox.br.y =\\r\\n\\t\\t\\t($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b +\\r\\n\\t\\t\\t($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d +\\r\\n\\t\\t\\t$elements[id].ctm.f;\\r\\n\\r\\n\\t\\t$elements = $elements;\\r\\n\\t};\\r\\n\\r\\n\\tconst rotateObject = (coord, change) => {\\r\\n\\t\\tlet dx = change.x;\\r\\n\\t\\tlet dy = change.y;\\r\\n\\t\\tlet cx = $elements[$selectedId].axis.x;\\r\\n\\t\\tlet cy = $elements[$selectedId].axis.y;\\r\\n\\t\\tlet DX = coord.x - cx;\\r\\n\\t\\tlet DY = coord.y - cy;\\r\\n\\t\\tlet r = Math.sqrt(DX * DX + DY * DY);\\r\\n\\t\\tif (r < 5) return;\\r\\n\\t\\tlet dr = Math.sqrt(dx * dx + dy * dy);\\r\\n\\t\\tlet sign = 1;\\r\\n\\t\\tif (DX >= 0 && DY >= 0) {\\r\\n\\t\\t\\tif (dy <= dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX < 0 && DY > 0) {\\r\\n\\t\\t\\tif (dy >= -dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX < 0 && DY < 0) {\\r\\n\\t\\t\\tif (dy >= dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tif (DX > 0 && DY < 0) {\\r\\n\\t\\t\\tif (dy <= -dx) sign = -1;\\r\\n\\t\\t}\\r\\n\\t\\tlet theta = (sign * dr) / r;\\r\\n\\r\\n\\t\\t$elements[$selectedId].rotate(theta, $elements[$selectedId].axis);\\r\\n\\t\\tif ($selectedId === 'lasso') {\\r\\n\\t\\t\\t$lassoElements.forEach((elementId) => {\\r\\n\\t\\t\\t\\t$elements[elementId].rotate(theta, $elements[$selectedId].axis);\\r\\n\\t\\t\\t});\\r\\n\\t\\t}\\r\\n\\r\\n\\t\\t$elements = $elements;\\r\\n\\t};\\r\\n\\tconst transformVector = (vec, tm) => {\\r\\n\\t\\treturn new Point(tm.a * vec.x + tm.c * vec.y + tm.e, tm.b * vec.x + tm.d * vec.y + tm.f);\\r\\n\\t};\\r\\n\\tconst scaleElement = (id, coord, offset, change, fixedPoint) => {\\r\\n\\t\\tif (change.x === 0 && change.y === 0) return;\\r\\n\\t\\t// let inv = $elements[id].tm.inverse();\\r\\n\\t\\t// let fixedPoint1 = transformVector(fixedPoint, inv);\\r\\n\\t\\t// let coord1 = transformVector(coord, inv);\\r\\n\\t\\t// let offset1 = transformVector(offset, inv);\\r\\n\\t\\t// let change1 = {\\r\\n\\t\\t//     x: coord1.x - offset1.x,\\r\\n\\t\\t//     y: coord1.y - offset1.y\\r\\n\\t\\t// };\\r\\n\\t\\tlet scalex = 1;\\r\\n\\t\\tlet scaley = 1;\\r\\n\\t\\tlet W = Math.abs(fixedPoint.x - offset.x);\\r\\n\\t\\tlet H = Math.abs(fixedPoint.y - offset.y);\\r\\n\\t\\tlet nW = Math.abs(fixedPoint.x - coord.x);\\r\\n\\t\\tlet nH = Math.abs(fixedPoint.y - coord.y);\\r\\n\\t\\tscalex = nW / W;\\r\\n\\t\\tscaley = nH / H;\\r\\n\\t\\t$elements[id].scalePost(scalex, scaley, fixedPoint);\\r\\n\\t};\\r\\n\\tconst scaleObject = (coord, offset, change, constraint) => {\\r\\n\\t\\tif (change.x === 0 && change.y === 0) return;\\r\\n\\t\\tlet inv = $elements[$selectedId].tm.inverse();\\r\\n\\r\\n\\t\\tlet coord1 = transformVector(coord, inv);\\r\\n\\t\\tlet offset1 = transformVector(offset, inv);\\r\\n\\t\\tlet change1 = {\\r\\n\\t\\t\\tx: coord1.x - offset1.x,\\r\\n\\t\\t\\ty: coord1.y - offset1.y\\r\\n\\t\\t};\\r\\n\\t\\tlet scalex = 1;\\r\\n\\t\\tlet scaley = 1;\\r\\n\\t\\tlet newHeight = $elements[$selectedId].bbox.height;\\r\\n\\t\\tlet newWidth = $elements[$selectedId].bbox.width;\\r\\n\\t\\tlet fixedPoint = {\\r\\n\\t\\t\\tx: $elements[$selectedId].bbox.x,\\r\\n\\t\\t\\ty: $elements[$selectedId].bbox.y\\r\\n\\t\\t};\\r\\n\\t\\tlet fp = {\\r\\n\\t\\t\\tx: $elements[$selectedId].sbox.tl.x,\\r\\n\\t\\t\\ty: $elements[$selectedId].sbox.tl.y\\r\\n\\t\\t};\\r\\n\\t\\tswitch (constraint) {\\r\\n\\t\\t\\tcase 'bottommid': {\\r\\n\\t\\t\\t\\tscaley = 1 + change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewHeight += change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'midright': {\\r\\n\\t\\t\\t\\tscalex = 1 + change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = $elements[$selectedId].preserveAspect ? scalex : scaley;\\r\\n\\t\\t\\t\\tnewWidth += change1.x;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'midleft': {\\r\\n\\t\\t\\t\\tfixedPoint.x = fixedPoint.x + newWidth;\\r\\n\\t\\t\\t\\tfp.x = $elements[$selectedId].sbox.tr.x;\\r\\n\\t\\t\\t\\tscalex = 1 - change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = $elements[$selectedId].preserveAspect ? scalex : scaley;\\r\\n\\t\\t\\t\\tnewWidth -= change1.x;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'topmid': {\\r\\n\\t\\t\\t\\tfixedPoint.y = fixedPoint.y + newHeight;\\r\\n\\t\\t\\t\\tfp.y = $elements[$selectedId].sbox.bl.y;\\r\\n\\t\\t\\t\\tscaley = 1 - change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewHeight -= change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'bottomright': {\\r\\n\\t\\t\\t\\tscalex = 1 + change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = 1 + change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewWidth += change1.x;\\r\\n\\t\\t\\t\\tnewHeight += change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'bottomleft': {\\r\\n\\t\\t\\t\\tfixedPoint.x = fixedPoint.x + newWidth;\\r\\n\\t\\t\\t\\tfp.x = $elements[$selectedId].sbox.tr.x;\\r\\n\\t\\t\\t\\tscalex = 1 - change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = 1 + change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewWidth -= change1.x;\\r\\n\\t\\t\\t\\tnewHeight += change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'topright': {\\r\\n\\t\\t\\t\\tfixedPoint.y = fixedPoint.y + newHeight;\\r\\n\\t\\t\\t\\tfp.y = $elements[$selectedId].sbox.bl.y;\\r\\n\\t\\t\\t\\tscalex = 1 + change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = 1 - change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewWidth += change1.x;\\r\\n\\t\\t\\t\\tnewHeight -= change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tcase 'topleft': {\\r\\n\\t\\t\\t\\tfixedPoint.x = fixedPoint.x + newWidth;\\r\\n\\t\\t\\t\\tfixedPoint.y = fixedPoint.y + newHeight;\\r\\n\\t\\t\\t\\tfp.x = $elements[$selectedId].sbox.tr.x;\\r\\n\\t\\t\\t\\tfp.y = $elements[$selectedId].sbox.bl.y;\\r\\n\\t\\t\\t\\tscalex = 1 - change1.x / $elements[$selectedId].bbox.width;\\r\\n\\t\\t\\t\\tscaley = 1 - change1.y / $elements[$selectedId].bbox.height;\\r\\n\\t\\t\\t\\tscalex = $elements[$selectedId].preserveAspect ? scaley : scalex;\\r\\n\\t\\t\\t\\tnewWidth -= change1.x;\\r\\n\\t\\t\\t\\tnewHeight -= change1.y;\\r\\n\\t\\t\\t\\tbreak;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\t$elements[$selectedId].scale(scalex, scaley, fixedPoint);\\r\\n\\t\\t$elements[$selectedId].scaleSbox(change.x, change.y, constraint);\\r\\n\\t\\t// if($selectedId === 'lasso') {\\r\\n\\t\\t//     $lassoElements.forEach(elementId => {\\r\\n\\t\\t//         scaleElement(elementId, coord, offset, change, fp);\\r\\n\\t\\t//         $elements[elementId].scalePost(scalex, scaley, fixedPoint)\\r\\n\\t\\t//         $elements[elementId].scaleSbox(change.x, change.y, constraint);\\r\\n\\t\\t//     })\\r\\n\\t\\t// }\\r\\n\\r\\n\\t\\t$elements = $elements;\\r\\n\\t};\\r\\n\\tconst addNewVertex = () => {\\r\\n\\t\\t$elements[$selectedId].addVertex($selectedVertex, virtualVertex.v);\\r\\n\\t\\tshowVirtualVertex = false;\\r\\n\\t\\t$elements = $elements;\\r\\n\\t};\\r\\n\\tconst computePatternViewBox = (id, sbox) => {\\r\\n\\t\\tlet xvalues = [sbox.tl.x, sbox.tr.x, sbox.bl.x, sbox.br.x];\\r\\n\\t\\tlet yvalues = [sbox.tl.y, sbox.tr.y, sbox.bl.y, sbox.br.y];\\r\\n\\t\\tlet xmin = Math.min(...xvalues);\\r\\n\\t\\tlet xmax = Math.max(...xvalues);\\r\\n\\t\\tlet ymin = Math.min(...yvalues);\\r\\n\\t\\tlet ymax = Math.max(...yvalues);\\r\\n\\t\\tif ($elements[id].tag === 'g' && $elements[id].patternId) {\\r\\n\\t\\t\\t$defs[$elements[id].patternId].viewBox =\\r\\n\\t\\t\\t\\txmin + ' ' + ymin + ' ' + (xmax - xmin) + ' ' + (ymax - ymin);\\r\\n\\t\\t\\t$defs = $defs;\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\t$: if ($boundingBox) $screenCTM = $boundingBox.getScreenCTM().inverse();\\r\\n\\texport function makeDraggable(node) {\\r\\n\\t\\tnode.addEventListener(\\r\\n\\t\\t\\t'touchstart',\\r\\n\\t\\t\\tfunction (e) {\\r\\n\\t\\t\\t\\te.preventDefault();\\r\\n\\t\\t\\t},\\r\\n\\t\\t\\tfalse\\r\\n\\t\\t);\\r\\n\\t\\tnode.addEventListener('pointerdown', startDrag, false);\\r\\n\\t\\tnode.addEventListener('pointerup', endDrag, false);\\r\\n\\t\\tnode.addEventListener('pointerleave', endDrag, false);\\r\\n\\t\\tnode.addEventListener('pointercancel', endDrag, false);\\r\\n\\t\\tnode.addEventListener('pointermove', drag, false);\\r\\n\\t\\tlet dragOffset;\\r\\n\\t\\tlet isDragging = false;\\r\\n\\t\\tlet isScaling = false;\\r\\n\\t\\tlet scaleNode = '';\\r\\n\\t\\tlet handeledByTouch = false;\\r\\n\\t\\tfunction getPointerPosition(evt) {\\r\\n\\t\\t\\tlet clientx = evt.clientX;\\r\\n\\t\\t\\tlet clienty = evt.clientY;\\r\\n\\t\\t\\treturn {\\r\\n\\t\\t\\t\\tx: $screenCTM.a * clientx + $screenCTM.c * clienty + $screenCTM.e,\\r\\n\\t\\t\\t\\ty: $screenCTM.b * clientx + $screenCTM.d * clienty + $screenCTM.f\\r\\n\\t\\t\\t};\\r\\n\\t\\t}\\r\\n\\t\\tfunction startDrag(evt) {\\r\\n\\t\\t\\t// console.log(evt.target)\\r\\n\\t\\t\\tevt.preventDefault();\\r\\n\\t\\t\\tlet target = evt.target;\\r\\n\\t\\t\\t// if(!(target && target.classList && (target.classList.contains('Vectorial') || target.classList.contains('draggable')))) return;\\r\\n\\t\\t\\t// console.log(target);\\r\\n\\t\\t\\tif ($pathMode) return;\\r\\n\\r\\n\\t\\t\\tif (!target) return;\\r\\n\\t\\t\\tlet targetId = target.getAttribute('id');\\r\\n\\t\\t\\tif (targetId === 'NewPoint') return;\\r\\n\\t\\t\\tif (target.classList.contains('dragBar')) {\\r\\n\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\treturn;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (target.classList.contains('SVG')) {\\r\\n\\t\\t\\t\\t$onSVG = true;\\r\\n\\t\\t\\t\\t$selectedId = null;\\r\\n\\t\\t\\t\\t$selectedElements = [];\\r\\n\\t\\t\\t\\t$selectionMode = false;\\r\\n\\t\\t\\t\\tif ($PAN) {\\r\\n\\t\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\treturn;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (target.classList.contains('SelectionBox') && $elementsNode[target.getAttribute('id')]) {\\r\\n\\t\\t\\t\\ttarget = $elementsNode[target.getAttribute('id')];\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\ttargetId = target.getAttribute('id');\\r\\n\\t\\t\\tlet isDraggable = target.classList.contains('draggable');\\r\\n\\t\\t\\twhile (!(targetId && isDraggable)) {\\r\\n\\t\\t\\t\\ttarget = target.parentNode;\\r\\n\\t\\t\\t\\t// console.log(target.classList);\\r\\n\\t\\t\\t\\tif (!target || target.classList.contains('SVG')) return;\\r\\n\\t\\t\\t\\tif (target) {\\r\\n\\t\\t\\t\\t\\ttargetId = target.getAttribute('id');\\r\\n\\t\\t\\t\\t\\tisDraggable = target.classList.contains('draggable');\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (target.classList.contains('circleCenter')) {\\r\\n\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t} else if (target.classList.contains('ui')) {\\r\\n\\t\\t\\t\\tif (target.classList.contains('vertex')) {\\r\\n\\t\\t\\t\\t\\t$selectedVertex = targetId;\\r\\n\\t\\t\\t\\t\\t$selectedControl0 = null;\\r\\n\\t\\t\\t\\t\\t$selectedControl1 = null;\\r\\n\\t\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (target.classList.contains('tout')) {\\r\\n\\t\\t\\t\\t\\t$selectedVertex = null;\\r\\n\\t\\t\\t\\t\\t$selectedControl1 = null;\\r\\n\\t\\t\\t\\t\\t$selectedControl0 = targetId;\\r\\n\\t\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (target.classList.contains('tin')) {\\r\\n\\t\\t\\t\\t\\t$selectedVertex = null;\\r\\n\\t\\t\\t\\t\\t$selectedControl0 = null;\\r\\n\\t\\t\\t\\t\\t$selectedControl1 = targetId;\\r\\n\\t\\t\\t\\t\\tisDragging = true;\\r\\n\\t\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (target.classList.contains('axis')) {\\r\\n\\t\\t\\t\\t\\tisRotating = true;\\r\\n\\t\\t\\t\\t\\trotationMode = !rotationMode;\\r\\n\\t\\t\\t\\t\\tisDragging = false;\\r\\n\\t\\t\\t\\t\\t// console.log(isRotating, rotationMode)\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (target.classList.contains('bbox')) {\\r\\n\\t\\t\\t\\t\\tisScaling = true;\\r\\n\\t\\t\\t\\t\\tisDragging = false;\\r\\n\\t\\t\\t\\t\\tisRotating = false;\\r\\n\\t\\t\\t\\t\\tscaleNode = target.getAttribute('id');\\r\\n\\t\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t} else {\\r\\n\\t\\t\\t\\twhile ($elements[targetId] && $elements[targetId].isLocked) {\\r\\n\\t\\t\\t\\t\\ttarget = target.parentNode;\\r\\n\\t\\t\\t\\t\\ttargetId = target.getAttribute('id');\\r\\n\\t\\t\\t\\t\\tif ($elements[targetId].parent === 'SVG') return;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t$selectedId = targetId;\\r\\n\\t\\t\\t\\t// console.log($selectedId)\\r\\n\\t\\t\\t\\t$selectedElement = target;\\r\\n\\t\\t\\t\\t$activeElement = target;\\r\\n\\t\\t\\t\\t$elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n\\t\\t\\t\\t$elements[$selectedId].ctm = $boundingBox\\r\\n\\t\\t\\t\\t\\t?.getScreenCTM()\\r\\n\\t\\t\\t\\t\\t.inverse()\\r\\n\\t\\t\\t\\t\\t.multiply($activeElement.getScreenCTM());\\r\\n\\r\\n\\t\\t\\t\\t$elements[$selectedId].transformUIControls();\\r\\n\\t\\t\\t\\tupdateSelectionBox($selectedId);\\r\\n\\r\\n\\t\\t\\t\\t$elements[$selectedId].axis.x =\\r\\n\\t\\t\\t\\t\\t($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2;\\r\\n\\t\\t\\t\\t$elements[$selectedId].axis.y =\\r\\n\\t\\t\\t\\t\\t($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2;\\r\\n\\t\\t\\t\\t$elements = $elements;\\r\\n\\t\\t\\t\\tif ($elements[$selectedId].tag === 'g' && $elements[$selectedId].patternId) {\\r\\n\\t\\t\\t\\t\\tcomputePatternViewBox($selectedId, $elements[$selectedId].sbox);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t// console.log($elements[$selectedId].ctm)\\r\\n\\t\\t\\t\\t// updateSelectionBox($selectedId);\\r\\n\\t\\t\\t\\tdragOffset = getPointerPosition(evt);\\r\\n\\t\\t\\t\\tisDragging = !rotationMode;\\r\\n\\t\\t\\t\\tif (rotationMode) isRotating = true;\\r\\n\\t\\t\\t\\t// $showControls = false;\\r\\n\\t\\t\\t\\t$onSVG = false;\\r\\n\\t\\t\\t\\t// console.log($selectedId)\\r\\n\\t\\t\\t\\t// $appHistory = [\\r\\n\\t\\t\\t\\t//     ...$appHistory,\\r\\n\\t\\t\\t\\t//     {\\r\\n\\t\\t\\t\\t//         id: $selectedId,\\r\\n\\t\\t\\t\\t//         change: {\\r\\n\\t\\t\\t\\t//             tm: $elements[$selectedId].tm,\\r\\n\\t\\t\\t\\t//             ctm: $elements[$selectedId].ctm,\\r\\n\\t\\t\\t\\t//             bbox: $elements[$selectedId].bbox,\\r\\n\\t\\t\\t\\t//             sbox: $elements[$selectedId].sbox,\\r\\n\\t\\t\\t\\t//             axis: $elements[$selectedId].axis,\\r\\n\\t\\t\\t\\t//         },\\r\\n\\t\\t\\t\\t//     },\\r\\n\\t\\t\\t\\t// ];\\r\\n\\t\\t\\t\\t// $currentState = $appHistory.length - 1;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tfunction drag(evt) {\\r\\n\\t\\t\\tevt.preventDefault();\\r\\n\\t\\t\\tlet target = evt.target;\\r\\n\\t\\t\\t// if(!(target && target.classList && (target.classList.contains('Vectorial') || target.classList.contains('draggable')))) return;\\r\\n\\t\\t\\t// console.log(evt.target.classList.contains('SVG') && !$PAN)\\r\\n\\t\\t\\t// if(evt.target.classList.contains('SVG') && !$PAN) return;\\r\\n\\t\\t\\tif (!(isDragging || isRotating || isScaling)) return;\\r\\n\\t\\t\\t// console.log(evt.target);\\r\\n\\t\\t\\tif ($pathMode) return;\\r\\n\\r\\n\\t\\t\\tif (!target) return;\\r\\n\\t\\t\\tif (target.classList.contains('dragBar') && isDragging) {\\r\\n\\t\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n\\t\\t\\t\\tlet change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);\\r\\n\\t\\t\\t\\ttarget.style.left = target.offsetLeft + change.x + 'px';\\r\\n\\t\\t\\t\\ttarget.style.top = target.offsetTop + change.y + 'px';\\r\\n\\t\\t\\t\\ttarget.parentNode.style.left = target.parentNode.offsetLeft + change.x + 'px';\\r\\n\\t\\t\\t\\ttarget.parentNode.style.top = target.parentNode.offsetTop + change.y + 'px';\\r\\n\\t\\t\\t\\tcontextActions.style.left = contextActions.offsetLeft + change.x + 'px';\\r\\n\\t\\t\\t\\tcontextActions.style.top = contextActions.offsetTop + change.y + 'px';\\r\\n\\t\\t\\t\\tboxVisibility.style.left = boxVisibility.offsetLeft + change.x + 'px';\\r\\n\\t\\t\\t\\tboxVisibility.style.top = boxVisibility.offsetTop + change.y + 'px';\\r\\n\\t\\t\\t\\tdragOffset = {\\r\\n\\t\\t\\t\\t\\tx: coord.x,\\r\\n\\t\\t\\t\\t\\ty: coord.y\\r\\n\\t\\t\\t\\t};\\r\\n\\t\\t\\t\\treturn;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (isDragging && !$PAN) {\\r\\n\\t\\t\\t\\tisRotating = false;\\r\\n\\r\\n\\t\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n\\t\\t\\t\\tlet change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);\\r\\n\\t\\t\\t\\tif (evt.target.classList.contains('circleCenter')) {\\r\\n\\t\\t\\t\\t\\t$circleCenter = $circleCenter.a(change);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tif (\\r\\n\\t\\t\\t\\t\\t$showControls &&\\r\\n\\t\\t\\t\\t\\t$selectedId &&\\r\\n\\t\\t\\t\\t\\t$activeElement &&\\r\\n\\t\\t\\t\\t\\t$elements[$selectedId].tag === 'path'\\r\\n\\t\\t\\t\\t) {\\r\\n\\t\\t\\t\\t\\tif ($selectedVertices && $selectedVertices.length > 0) {\\r\\n\\t\\t\\t\\t\\t\\tshowVirtualVertex = false;\\r\\n\\t\\t\\t\\t\\t\\tvirtualVertex = null;\\r\\n\\t\\t\\t\\t\\t\\t$selectedVertices.forEach((vId) => {\\r\\n\\t\\t\\t\\t\\t\\t\\t$elements[$selectedId].updateControl(\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tvId,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tcoord,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tdragOffset,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t'v',\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$mirrorMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$mirrorVertex,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$circleMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$circledVertices,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t$circleCenter\\r\\n\\t\\t\\t\\t\\t\\t\\t);\\r\\n\\t\\t\\t\\t\\t\\t});\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n\\t\\t\\t\\t\\t} else if ($selectedVertex) {\\r\\n\\t\\t\\t\\t\\t\\tshowVirtualVertex = false;\\r\\n\\t\\t\\t\\t\\t\\tvirtualVertex = null;\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].updateControl(\\r\\n\\t\\t\\t\\t\\t\\t\\t$selectedVertex,\\r\\n\\t\\t\\t\\t\\t\\t\\tcoord,\\r\\n\\t\\t\\t\\t\\t\\t\\tdragOffset,\\r\\n\\t\\t\\t\\t\\t\\t\\t'v',\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorVertex,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circledVertices,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleCenter\\r\\n\\t\\t\\t\\t\\t\\t);\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n\\t\\t\\t\\t\\t} else if ($selectedControl0) {\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].updateControl(\\r\\n\\t\\t\\t\\t\\t\\t\\t$selectedControl0,\\r\\n\\t\\t\\t\\t\\t\\t\\tcoord,\\r\\n\\t\\t\\t\\t\\t\\t\\tdragOffset,\\r\\n\\t\\t\\t\\t\\t\\t\\t'tout',\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorVertex,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circledVertices,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleCenter\\r\\n\\t\\t\\t\\t\\t\\t);\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n\\t\\t\\t\\t\\t} else if ($selectedControl1) {\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].updateControl(\\r\\n\\t\\t\\t\\t\\t\\t\\t$selectedControl1,\\r\\n\\t\\t\\t\\t\\t\\t\\tcoord,\\r\\n\\t\\t\\t\\t\\t\\t\\tdragOffset,\\r\\n\\t\\t\\t\\t\\t\\t\\t'tin',\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$mirrorVertex,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleMode,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circledVertices,\\r\\n\\t\\t\\t\\t\\t\\t\\t$circleCenter\\r\\n\\t\\t\\t\\t\\t\\t);\\r\\n\\t\\t\\t\\t\\t\\t$elements[$selectedId].bbox = $activeElement.getBBox();\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t} else if ($selectedId && $elements[$selectedId]) {\\r\\n\\t\\t\\t\\t\\t// console.log('Dragging...', isDragging)\\r\\n\\t\\t\\t\\t\\t$elements[$selectedId].translate(change.x, change.y);\\r\\n\\t\\t\\t\\t\\tif ($selectedId === 'lasso') {\\r\\n\\t\\t\\t\\t\\t\\t$lassoElements.forEach((elementId) => {\\r\\n\\t\\t\\t\\t\\t\\t\\t$elements[elementId].translate(change.x, change.y);\\r\\n\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t\\t} else if ($selectedElements?.length > 0) {\\r\\n\\t\\t\\t\\t\\t\\t$selectedElements.forEach((elementId) => {\\r\\n\\t\\t\\t\\t\\t\\t\\tif ($selectedId !== elementId) $elements[elementId].translate(change.x, change.y);\\r\\n\\t\\t\\t\\t\\t\\t});\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\tif (Math.abs(change.x) + Math.abs(change.y) > 1) stateChanged = true;\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t$elements = $elements;\\r\\n\\t\\t\\t\\t// translateObject(change);\\r\\n\\t\\t\\t\\tdragOffset = {\\r\\n\\t\\t\\t\\t\\tx: coord.x,\\r\\n\\t\\t\\t\\t\\ty: coord.y\\r\\n\\t\\t\\t\\t};\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (isRotating && rotationMode) {\\r\\n\\t\\t\\t\\tisDragging = false;\\r\\n\\t\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n\\t\\t\\t\\tlet change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);\\r\\n\\t\\t\\t\\trotateObject(coord, change);\\r\\n\\t\\t\\t\\tdragOffset = {\\r\\n\\t\\t\\t\\t\\tx: coord.x,\\r\\n\\t\\t\\t\\t\\ty: coord.y\\r\\n\\t\\t\\t\\t};\\r\\n\\t\\t\\t\\tstateChanged = true;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (isScaling) {\\r\\n\\t\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n\\t\\t\\t\\tlet change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);\\r\\n\\t\\t\\t\\tscaleObject(coord, dragOffset, change, scaleNode);\\r\\n\\r\\n\\t\\t\\t\\t$elements = $elements;\\r\\n\\t\\t\\t\\t// scaleObject(coord, dragOffset, change, scaleNode);\\r\\n\\t\\t\\t\\tdragOffset = {\\r\\n\\t\\t\\t\\t\\tx: coord.x,\\r\\n\\t\\t\\t\\t\\ty: coord.y\\r\\n\\t\\t\\t\\t};\\r\\n\\t\\t\\t\\tstateChanged = true;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif ($PAN && isDragging && $onSVG) {\\r\\n\\t\\t\\t\\tlet coord = getPointerPosition(evt);\\r\\n\\t\\t\\t\\t$panX += coord.x - dragOffset.x;\\r\\n\\t\\t\\t\\t$panY += coord.y - dragOffset.y;\\r\\n\\t\\t\\t\\tdragOffset.x = coord.x;\\r\\n\\t\\t\\t\\tdragOffset.y = coord.y;\\r\\n\\t\\t\\t}\\r\\n\\t\\t\\tif (\\r\\n\\t\\t\\t\\t(isDragging || isRotating || isScaling) &&\\r\\n\\t\\t\\t\\t$selectedId &&\\r\\n\\t\\t\\t\\t$boundingBox &&\\r\\n\\t\\t\\t\\t$activeElement\\r\\n\\t\\t\\t) {\\r\\n\\t\\t\\t\\t$elements[$selectedId].ctm = $boundingBox\\r\\n\\t\\t\\t\\t\\t.getScreenCTM()\\r\\n\\t\\t\\t\\t\\t.inverse()\\r\\n\\t\\t\\t\\t\\t.multiply($activeElement.getScreenCTM());\\r\\n\\r\\n\\t\\t\\t\\t$elements[$selectedId].transformUIControls();\\r\\n\\t\\t\\t\\tupdateSelectionBox($selectedId);\\r\\n\\t\\t\\t\\t$elements[$selectedId].axis.x =\\r\\n\\t\\t\\t\\t\\t($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2;\\r\\n\\t\\t\\t\\t$elements[$selectedId].axis.y =\\r\\n\\t\\t\\t\\t\\t($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2;\\r\\n\\t\\t\\t\\t$elements = $elements;\\r\\n\\t\\t\\t\\tif ($elements[$selectedId].tag === 'g' && $elements[$selectedId].patternId) {\\r\\n\\t\\t\\t\\t\\tcomputePatternViewBox($selectedId, $elements[$selectedId].sbox);\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t\\tfunction endDrag(evt) {\\r\\n\\t\\t\\tif (evt.target.classList.contains('dragBar')) {\\r\\n\\t\\t\\t\\tisDragging = false;\\r\\n\\t\\t\\t\\tdragOffset = null;\\r\\n\\t\\t\\t} else if (!$pathMode) {\\r\\n\\t\\t\\t\\tif (isDragging || isRotating || isScaling) {\\r\\n\\t\\t\\t\\t\\tif ($selectedVertex) {\\r\\n\\t\\t\\t\\t\\t\\tif ($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path') {\\r\\n\\t\\t\\t\\t\\t\\t\\tvirtualVertex = $elements[$selectedId].computeMidVertex($selectedVertex);\\r\\n\\t\\t\\t\\t\\t\\t\\tshowVirtualVertex = true;\\r\\n\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t} else if ($selectedControl0) {\\r\\n\\t\\t\\t\\t\\t} else if ($selectedControl1) {\\r\\n\\t\\t\\t\\t\\t} else {\\r\\n\\t\\t\\t\\t\\t\\t// if (\\r\\n\\t\\t\\t\\t\\t\\t//     !stateChanged &&\\r\\n\\t\\t\\t\\t\\t\\t//     $selectedId &&\\r\\n\\t\\t\\t\\t\\t\\t//     $elements[$selectedId]\\r\\n\\t\\t\\t\\t\\t\\t// ) {\\r\\n\\t\\t\\t\\t\\t\\t//     $appHistory.pop();\\r\\n\\t\\t\\t\\t\\t\\t//     $appHistory = $appHistory;\\r\\n\\t\\t\\t\\t\\t\\t//     $currentState = $appHistory.length - 1;\\r\\n\\t\\t\\t\\t\\t\\t// }\\r\\n\\t\\t\\t\\t\\t\\tif (stateChanged && $selectedId && $elements[$selectedId]) {\\r\\n\\t\\t\\t\\t\\t\\t\\t$appHistory = [\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t...$appHistory,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid: $selectedId,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchange: {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttm: $elements[$selectedId].tm,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tctm: $elements[$selectedId].ctm,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbbox: $elements[$selectedId].bbox,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tsbox: $elements[$selectedId].sbox,\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\taxis: $elements[$selectedId].axis\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t\\t\\t];\\r\\n\\t\\t\\t\\t\\t\\t\\t$currentState = $appHistory.length - 1;\\r\\n\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\tisDragging = false;\\r\\n\\t\\t\\t\\tisRotating = false;\\r\\n\\t\\t\\t\\tisScaling = false;\\r\\n\\t\\t\\t\\tstateChanged = false;\\r\\n\\t\\t\\t\\t// handeledByTouch = false;\\r\\n\\t\\t\\t}\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tconst setContextBoxWidth = () => {\\r\\n\\t\\tshowContextBox = !showContextBox;\\r\\n\\t\\tcontextBox.style.width = showContextBox ? '348px' : '58px';\\r\\n\\t\\tcontextActions.style.width = showContextBox ? '300px' : '10px';\\r\\n\\t\\t// contextContent.style.width = showContextBox ? '300px' : '10px';\\r\\n\\t};\\r\\n\\t// export function doubleClick(node) {\\r\\n\\t//     node.addEventListener(\\"dbl\\")\\r\\n\\t// }\\r\\n\\t// $: console.log($selectedVertex, $selectedControl0, $selectedControl1, Number($selectedControl0))\\r\\n    \\r\\n<\/script>\\r\\n\\r\\n<div class=\\"canvas\\" style=\\"background: {$canvasBackground};\\">\\r\\n\\t<svg\\r\\n\\t\\tclass=\\"SVG Vectorial\\"\\r\\n\\t\\tbind:this={$svg}\\r\\n\\t\\twidth={$BBOX.width}\\r\\n\\t\\theight={$BBOX.height}\\r\\n\\t\\tviewBox=\\"{$BBOX.x} {$BBOX.y} {$BBOX.width} {$BBOX.height}\\"\\r\\n\\t\\tuse:makeDraggable\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\txmlns:xlink=\\"http://www.w3.org/1999/xlink\\"\\r\\n\\t>\\r\\n\\t\\t<g\\r\\n\\t\\t\\tclass=\\"Vectorial\\"\\r\\n\\t\\t\\tbind:this={$boundingBox}\\r\\n\\t\\t\\ttransform=\\"translate({$panX} {$panY}) scale({$Z})\\"\\r\\n\\t\\t>\\r\\n\\t\\t\\t<defs>\\r\\n\\t\\t\\t\\t{#each Object.keys($defs) as def}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'shadow'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGShadow id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'textMask'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGTextMask id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'blur'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGBlur id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'specularLighting'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGSpecularLighting id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'diffuseLighting'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGDiffuseLighting id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'linearGradient'}\\r\\n\\t\\t\\t\\t\\t\\t<linearGradient\\r\\n\\t\\t\\t\\t\\t\\t\\tid={def}\\r\\n\\t\\t\\t\\t\\t\\t\\tx1=\\"{$defs[def].start.x}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ty1=\\"{$defs[def].start.y}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tx2=\\"{$defs[def].end.x}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ty2=\\"{$defs[def].end.y}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tgradientUnits={$defs[def].gradientUnits}\\r\\n\\t\\t\\t\\t\\t\\t\\tspreadMethod={$defs[def].spreadMethod}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{#each $defs[def].colors as color}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<stop offset=\\"{color.offset}%\\" stop-color={color.stopColor} />\\r\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t\\t</linearGradient>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'radialGradient'}\\r\\n\\t\\t\\t\\t\\t\\t<radialGradient\\r\\n\\t\\t\\t\\t\\t\\t\\tid={def}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx=\\"{$defs[def].center.x}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tcy=\\"{$defs[def].center.y}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tr=\\"{$defs[def].r}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tfx=\\"{$defs[def].focus.x}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tfy=\\"{$defs[def].focus.y}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tfr=\\"{$defs[def].fr}%\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tgradientUnits={$defs[def].gradientUnits}\\r\\n\\t\\t\\t\\t\\t\\t\\tspreadMethod={$defs[def].spreadMethod}\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t{#each $defs[def].colors as color}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<stop offset=\\"{color.offset}%\\" stop-color={color.stopColor} />\\r\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t\\t</radialGradient>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'marker'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGMarker id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $defs[def].tag === 'pattern'}\\r\\n\\t\\t\\t\\t\\t\\t<SVGPattern id={def} />\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t</defs>\\r\\n\\t\\t\\t{#if $elements}\\r\\n\\t\\t\\t\\t{#if !$onSVG}\\r\\n\\t\\t\\t\\t\\t{#if $selectedId && $elements[$selectedId]}\\r\\n\\t\\t\\t\\t\\t\\t<polygon\\r\\n\\t\\t\\t\\t\\t\\t\\tid={$selectedId}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"SelectionBox Vectorial\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tpoints=\\"{$elements[$selectedId].sbox.tl.x},{$elements[$selectedId].sbox.tl\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.y} {$elements[$selectedId].sbox.tr.x},{$elements[$selectedId].sbox.tr\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.y} {$elements[$selectedId].sbox.br.x},{$elements[$selectedId].sbox.br\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.y} {$elements[$selectedId].sbox.bl.x},{$elements[$selectedId].sbox.bl.y}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"blue\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"{5 / $Z},{5 / $Z}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={0.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"rgba(255, 255, 255, 0)\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{#if $selectedElements}\\r\\n\\t\\t\\t\\t\\t{#each $selectedElements as elem}\\r\\n\\t\\t\\t\\t\\t\\t<polygon\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"Vectorial\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tpoints=\\"{$elements[elem].sbox.tl.x},{$elements[elem].sbox.tl.y} {$elements[elem].sbox\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.tr.x},{$elements[elem].sbox.tr.y} {$elements[elem].sbox.br.x},{$elements[elem].sbox\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t.br.y} {$elements[elem].sbox.bl.x},{$elements[elem].sbox.bl.y}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"blue\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-dasharray=\\"{5 / $Z},{5 / $Z}\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={0.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t{#each $elements.Layers as layerId}\\r\\n\\t\\t\\t\\t<SVGGroup id={layerId} />\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t\\t<!-- {#if $isLasso && $elements['lasso']}\\r\\n                <SVGPath id={'lasso'} />\\r\\n            {/if} -->\\r\\n\\t\\t\\t{#if $elements && $selectedId && $elements[$selectedId]}\\r\\n\\t\\t\\t\\t{#if !$onSVG}\\r\\n\\t\\t\\t\\t\\t{#if $showBBoxControls}\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'topleft'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable topleft ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$elements[$selectedId].sbox.tl.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$elements[$selectedId].sbox.tl.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'topright'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable topright ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$elements[$selectedId].sbox.tr.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$elements[$selectedId].sbox.tr.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'bottomleft'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable bottomleft ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$elements[$selectedId].sbox.bl.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$elements[$selectedId].sbox.bl.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'bottomright'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable bottomright ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$elements[$selectedId].sbox.br.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$elements[$selectedId].sbox.br.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'topmid'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable topmid ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.tr.x) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.tr.y) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'midleft'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable midleft ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.bl.x) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.bl.y) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'midright'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable midright ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={($elements[$selectedId].sbox.tr.x + $elements[$selectedId].sbox.br.x) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={($elements[$selectedId].sbox.tr.y + $elements[$selectedId].sbox.br.y) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'bottommid'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable bottommid ui bbox Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={($elements[$selectedId].sbox.bl.x + $elements[$selectedId].sbox.br.x) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={($elements[$selectedId].sbox.bl.y + $elements[$selectedId].sbox.br.y) / 2}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid={'axis'}\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable axis ui Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$elements[$selectedId].axis.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$elements[$selectedId].axis.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill={rotationMode ? 'green' : 'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\r\\n\\t\\t\\t\\t{#if $selectedId && ($showControls || $addingNodes) && $elements[$selectedId].tag === 'path'}\\r\\n\\t\\t\\t\\t\\t{#each $elements[$selectedId].uiEdges as subpaths}\\r\\n\\t\\t\\t\\t\\t\\t{#each subpaths as edge (edge.id)}\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if ($selectedVertex && Number($selectedVertex) === Number(edge.id)) || ($selectedControl0 && Number($selectedControl0) === Number(edge.id)) || ($selectedControl1 && Number($selectedControl1) === Number(edge.id))}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if edge.tin !== 'NA'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tx1={edge.tin.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ty1={edge.tin.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tx2={edge.v.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ty2={edge.v.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke={'gray'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={0.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid={edge.id}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={'draggable ui tin Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcx={edge.tin.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcy={edge.tin.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tr={3.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill={Number($selectedControl1) === edge.id ? 'red' : 'teal'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<title>c0</title>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</circle>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{#if edge.tout !== 'NA'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tx1={edge.tout.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ty1={edge.tout.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tx2={edge.v.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ty2={edge.v.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke={'gray'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={0.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tid={edge.id}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={'draggable ui tout Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcx={edge.tout.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcy={edge.tout.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tr={3.5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"white\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tfill={Number($selectedControl0) === edge.id ? 'red' : 'teal'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t><title>c1</title></circle\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if edge.t === 'smooth'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid={edge.id}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={'draggable ui vertex Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcx={edge.v.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcy={edge.v.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tr={4 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke={edge.c === 'M' ? 'black' : 'white'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfill={Number($selectedVertex) === edge.id\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'red'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: edge.c === 'M'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'white'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'goldenrod'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<title>{edge.c}</title>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</circle>\\r\\n\\t\\t\\t\\t\\t\\t\\t{:else if edge.t === 'sharp'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<rect\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid={edge.id}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass={'draggable ui vertex Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tx={edge.v.x - 4 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ty={edge.v.y - 4 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\twidth={8 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\theight={8 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke={edge.c === 'M' ? 'black' : 'white'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfill={Number($selectedVertex) === edge.id\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'red'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: edge.c === 'M'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'white'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t? 'goldenrod'\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t: 'black'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<title>{edge.c}</title>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t</rect>\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t\\t<!-- {#if edge.c === \\"M\\"}\\r\\n                                <circle\\r\\n                                    id={edge.id}\\r\\n                                    class={\\"draggable ui vertex\\"}\\r\\n                                    cx={edge.v.x}\\r\\n                                    cy={edge.v.y}\\r\\n                                    r={5 / $Z}\\r\\n                                    stroke=\\"red\\"\\r\\n                                    stroke-width={1 / $Z}\\r\\n                                    fill=\\"none\\"\\r\\n                                />\\r\\n                            {/if} -->\\r\\n\\t\\t\\t\\t\\t\\t\\t{#if edge.c === 'A'}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"Vectorial\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tid={edge.id}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcx={edge.center.x}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcy={edge.center.y}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t\\t\\t{#if $circleMode && $circleCenter}\\r\\n\\t\\t\\t\\t\\t\\t<circle\\r\\n\\t\\t\\t\\t\\t\\t\\tid=\\"circleCenter\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass={'draggable circleCenter Vectorial'}\\r\\n\\t\\t\\t\\t\\t\\t\\tcx={$circleCenter.x}\\r\\n\\t\\t\\t\\t\\t\\t\\tcy={$circleCenter.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tr={5 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"green\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"green\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t\\t{#if $selectedVertex && virtualVertex && showVirtualVertex}\\r\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\r\\n\\t\\t\\t\\t\\t\\t<rect\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"Vectorial\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tid={virtualVertex.id}\\r\\n\\t\\t\\t\\t\\t\\t\\ton:click={addNewVertex}\\r\\n\\t\\t\\t\\t\\t\\t\\tx={virtualVertex.v.x - 4 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\ty={virtualVertex.v.y - 4 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\twidth={8 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\theight={8 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke={virtualVertex.c === 'M' ? 'black' : 'white'}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width={1 / $Z}\\r\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"green\\"\\r\\n\\t\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t\\t\\t<title>{virtualVertex.id}</title>\\r\\n\\t\\t\\t\\t\\t\\t</rect>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t\\t{#if $showGuides}\\r\\n\\t\\t\\t\\t{#each Object.keys($elements) as id}\\r\\n\\t\\t\\t\\t\\t{#if $elements[id].axis && $elements[id].sbox}\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$BBOX.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$elements[id].axis.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$BBOX.x + $BBOX.x + $BBOX.width}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$elements[id].axis.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$elements[id].axis.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$BBOX.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$elements[id].axis.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$BBOX.y + $BBOX.height}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$BBOX.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$elements[id].sbox.tl.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$BBOX.x + $BBOX.x + $BBOX.width}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$elements[id].sbox.tl.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$elements[id].sbox.tl.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$BBOX.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$elements[id].sbox.tl.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$BBOX.y + $BBOX.height}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$BBOX.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$elements[id].sbox.br.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$BBOX.x + $BBOX.x + $BBOX.width}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$elements[id].sbox.br.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t\\t<line\\r\\n\\t\\t\\t\\t\\t\\t\\tx1={$elements[id].sbox.br.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty1={$BBOX.y}\\r\\n\\t\\t\\t\\t\\t\\t\\tx2={$elements[id].sbox.br.x}\\r\\n\\t\\t\\t\\t\\t\\t\\ty2={$BBOX.y + $BBOX.height}\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke=\\"red\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tstroke-width=\\"0.5px\\"\\r\\n\\t\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t\\t{/each}\\r\\n\\t\\t\\t{/if}\\r\\n\\t\\t</g>\\r\\n\\t</svg>\\r\\n\\t{#if $selectedId || $selectedVertex || $selectedControl0 || $selectedControl1}\\r\\n\\t\\t<div class=\\"contextBox mdc-elevation--z10 Vectorial\\" bind:this={contextBox}>\\r\\n\\t\\t\\t<div\\r\\n\\t\\t\\t\\tclass=\\"material-icons boxVisibility\\"\\r\\n\\t\\t\\t\\tbind:this={boxVisibility}\\r\\n\\t\\t\\t\\ton:click={setContextBoxWidth}\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t{showContextBox ? 'close_fullscreen' : 'fullscreen'}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"dragBar draggable Vectorial material-icons\\" use:makeDraggable>drag_indicator</div>\\r\\n\\t\\t\\t<div class=\\"contextActions noScrollBar\\" bind:this={contextActions}>\\r\\n\\t\\t\\t\\t<MenuSurface static style=\\"width:100%; height:100%;\\">\\r\\n\\t\\t\\t\\t\\t<ContextActions />\\r\\n\\t\\t\\t\\t</MenuSurface>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\"content\\" bind:this={contextContent}>\\r\\n\\t\\t\\t\\t{#key $selectedId}\\r\\n\\t\\t\\t\\t\\t<ContextBox />\\r\\n\\t\\t\\t\\t{/key}\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t{/if}\\r\\n</div>\\r\\n\\r\\n<!-- <div class=\\"animations\\">\\r\\n    <h4 class=\\"center\\">Animations</h4>\\r\\n</div> -->\\r\\n\\r\\n<style>\\r\\n\\t.SVG {\\r\\n\\t\\ttouch-action: none;\\r\\n\\t}\\r\\n\\r\\n\\t/* .vbuttongroup {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n    } */\\r\\n\\r\\n\\t.canvas {\\r\\n\\t\\twidth: fit-content;\\r\\n\\t\\theight: fit-content;\\r\\n\\t\\tbackground: white;\\r\\n\\t\\tbox-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);\\r\\n\\t}\\r\\n\\r\\n\\t.contextBox {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\tleft: 50px;\\r\\n\\t\\ttop: 50px;\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: 48px 1fr;\\r\\n\\t\\tgrid-template-rows: 48px 1fr;\\r\\n\\t\\tz-index: 100;\\r\\n\\t\\twidth: 348px;\\r\\n\\t\\theight: 348px;\\r\\n\\t\\toverflow-x: hidden;\\r\\n\\t}\\r\\n\\t.boxVisibility {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\tleft: 50px;\\r\\n\\t\\ttop: 50px;\\r\\n\\t\\twidth: 48px;\\r\\n\\t\\theight: 48px;\\r\\n\\t\\tbackground: green;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t}\\r\\n\\t.dragBar {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\twidth: 48px;\\r\\n\\t\\theight: 300px;\\r\\n\\t\\tbackground: red;\\r\\n\\t\\tz-index: 200;\\r\\n\\t\\tleft: 50px;\\r\\n\\t\\ttop: 98px;\\r\\n\\t\\tfont-size: 48px;\\r\\n\\t\\tcursor: move; /* fallback if grab cursor is unsupported */\\r\\n\\t\\tcursor: grab;\\r\\n\\t\\tcursor: -moz-grab;\\r\\n\\t\\tcursor: -webkit-grab;\\r\\n\\t\\t-webkit-user-select: none; /* Safari */\\r\\n\\t\\t-ms-user-select: none; /* IE 10 and IE 11 */\\r\\n\\t\\tuser-select: none; /* Standard syntax */\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t}\\r\\n\\t.dragBar:active {\\r\\n\\t\\tcursor: grabbing;\\r\\n\\t\\tcursor: -moz-grabbing;\\r\\n\\t\\tcursor: -webkit-grabbing;\\r\\n\\t}\\r\\n\\t.contextActions {\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\theight: 48px;\\r\\n\\t\\t/* background: gray; */\\r\\n\\t\\tz-index: 200;\\r\\n\\t\\tleft: 98px;\\r\\n\\t\\ttop: 50px;\\r\\n\\t\\tfont-size: 48px;\\r\\n\\t\\t/* border-radius: 10px 0 0 10px; */\\r\\n\\t\\tcursor: move; /* fallback if grab cursor is unsupported */\\r\\n\\t\\tcursor: grab;\\r\\n\\t\\tcursor: -moz-grab;\\r\\n\\t\\tcursor: -webkit-grab;\\r\\n\\t\\t-webkit-user-select: none; /* Safari */\\r\\n\\t\\t-ms-user-select: none; /* IE 10 and IE 11 */\\r\\n\\t\\tuser-select: none; /* Standard syntax */\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\toverflow-x: auto;\\r\\n\\t}\\r\\n\\t.content {\\r\\n\\t\\tbackground: black;\\r\\n\\t\\twidth: 300px;\\r\\n\\t\\theight: 300px;\\r\\n\\t\\tmargin-left: 48px;\\r\\n\\t\\tbox-shadow: 1px 1px 1px gray;\\r\\n\\t\\tmargin-top: 48px;\\r\\n\\t}\\r\\n\\t/* .appearance {\\r\\n        position: absolute;\\r\\n        z-index: 10;\\r\\n        top: 5em;\\r\\n        right: 3em;\\r\\n        padding: 0.5em 1em;\\r\\n        background: rgb(219, 219, 219);\\r\\n        border-radius: 10px;\\r\\n        display: flex;\\r\\n        gap: 0.9em;\\r\\n        align-items: center;\\r\\n        justify-content: start;\\r\\n        font-size: 0.7em;\\r\\n        color: rgb(48, 48, 48);\\r\\n        width: 300px;\\r\\n        box-shadow: 0 0 3px black;\\r\\n    } */\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0qCC,kBAAK,CACJ,YAAY,CAAE,IACf,CASA,qBAAQ,CACP,KAAK,CAAE,WAAW,CAClB,MAAM,CAAE,WAAW,CACnB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1C,CAEA,yBAAY,CACX,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,IAAI,CAAC,GAAG,CAC/B,kBAAkB,CAAE,IAAI,CAAC,GAAG,CAC5B,OAAO,CAAE,GAAG,CACZ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,MACb,CACA,4BAAe,CACd,QAAQ,CAAE,KAAK,CACf,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,OACT,CACA,sBAAS,CACR,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,GAAG,CACZ,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,SAAS,CACjB,MAAM,CAAE,YAAY,CACpB,mBAAmB,CAAE,IAAI,CACzB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAClB,CACA,sBAAQ,OAAQ,CACf,MAAM,CAAE,QAAQ,CAChB,MAAM,CAAE,aAAa,CACrB,MAAM,CAAE,gBACT,CACA,6BAAgB,CACf,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,GAAG,CACZ,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IAAI,CAEf,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,SAAS,CACjB,MAAM,CAAE,YAAY,CACpB,mBAAmB,CAAE,IAAI,CACzB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IACb,CACA,sBAAS,CACR,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAC5B,UAAU,CAAE,IACb"}`
};
const Vectorial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appHistory, $$unsubscribe_appHistory;
  let $currentState, $$unsubscribe_currentState;
  let $selectedId, $$unsubscribe_selectedId;
  let $elements, $$unsubscribe_elements;
  let $selectedControl1, $$unsubscribe_selectedControl1;
  let $selectedControl0, $$unsubscribe_selectedControl0;
  let $selectedVertex, $$unsubscribe_selectedVertex;
  let $pathMode, $$unsubscribe_pathMode;
  let $activeElement, $$unsubscribe_activeElement;
  let $boundingBox, $$unsubscribe_boundingBox;
  let $panY, $$unsubscribe_panY;
  let $panX, $$unsubscribe_panX;
  let $onSVG, $$unsubscribe_onSVG;
  let $PAN, $$unsubscribe_PAN;
  let $selectedElements, $$unsubscribe_selectedElements;
  let $lassoElements, $$unsubscribe_lassoElements;
  let $circleCenter, $$unsubscribe_circleCenter;
  let $circledVertices, $$unsubscribe_circledVertices;
  let $circleMode, $$unsubscribe_circleMode;
  let $mirrorVertex, $$unsubscribe_mirrorVertex;
  let $mirrorMode, $$unsubscribe_mirrorMode;
  let $selectedVertices, $$unsubscribe_selectedVertices;
  let $showControls, $$unsubscribe_showControls;
  let $selectedElement, $$unsubscribe_selectedElement;
  let $elementsNode, $$unsubscribe_elementsNode;
  let $selectionMode, $$unsubscribe_selectionMode;
  let $screenCTM, $$unsubscribe_screenCTM;
  let $defs, $$unsubscribe_defs;
  let $canvasBackground, $$unsubscribe_canvasBackground;
  let $BBOX, $$unsubscribe_BBOX;
  let $svg, $$unsubscribe_svg;
  let $Z, $$unsubscribe_Z;
  let $showBBoxControls, $$unsubscribe_showBBoxControls;
  let $addingNodes, $$unsubscribe_addingNodes;
  let $showGuides, $$unsubscribe_showGuides;
  $$unsubscribe_appHistory = subscribe(appHistory, (value) => $appHistory = value);
  $$unsubscribe_currentState = subscribe(currentState, (value) => $currentState = value);
  $$unsubscribe_selectedId = subscribe(selectedId, (value) => $selectedId = value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_selectedControl1 = subscribe(selectedControl1, (value) => $selectedControl1 = value);
  $$unsubscribe_selectedControl0 = subscribe(selectedControl0, (value) => $selectedControl0 = value);
  $$unsubscribe_selectedVertex = subscribe(selectedVertex, (value) => $selectedVertex = value);
  $$unsubscribe_pathMode = subscribe(pathMode, (value) => $pathMode = value);
  $$unsubscribe_activeElement = subscribe(activeElement, (value) => $activeElement = value);
  $$unsubscribe_boundingBox = subscribe(boundingBox, (value) => $boundingBox = value);
  $$unsubscribe_panY = subscribe(panY, (value) => $panY = value);
  $$unsubscribe_panX = subscribe(panX, (value) => $panX = value);
  $$unsubscribe_onSVG = subscribe(onSVG, (value) => $onSVG = value);
  $$unsubscribe_PAN = subscribe(PAN, (value) => $PAN = value);
  $$unsubscribe_selectedElements = subscribe(selectedElements, (value) => $selectedElements = value);
  $$unsubscribe_lassoElements = subscribe(lassoElements, (value) => $lassoElements = value);
  $$unsubscribe_circleCenter = subscribe(circleCenter, (value) => $circleCenter = value);
  $$unsubscribe_circledVertices = subscribe(circledVertices, (value) => $circledVertices = value);
  $$unsubscribe_circleMode = subscribe(circleMode, (value) => $circleMode = value);
  $$unsubscribe_mirrorVertex = subscribe(mirrorVertex, (value) => $mirrorVertex = value);
  $$unsubscribe_mirrorMode = subscribe(mirrorMode, (value) => $mirrorMode = value);
  $$unsubscribe_selectedVertices = subscribe(selectedVertices, (value) => $selectedVertices = value);
  $$unsubscribe_showControls = subscribe(showControls, (value) => $showControls = value);
  $$unsubscribe_selectedElement = subscribe(selectedElement, (value) => $selectedElement = value);
  $$unsubscribe_elementsNode = subscribe(elementsNode, (value) => $elementsNode = value);
  $$unsubscribe_selectionMode = subscribe(selectionMode, (value) => $selectionMode = value);
  $$unsubscribe_screenCTM = subscribe(screenCTM, (value) => $screenCTM = value);
  $$unsubscribe_defs = subscribe(defs, (value) => $defs = value);
  $$unsubscribe_canvasBackground = subscribe(canvasBackground, (value) => $canvasBackground = value);
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => $BBOX = value);
  $$unsubscribe_svg = subscribe(svg, (value) => $svg = value);
  $$unsubscribe_Z = subscribe(Z, (value) => $Z = value);
  $$unsubscribe_showBBoxControls = subscribe(showBBoxControls, (value) => $showBBoxControls = value);
  $$unsubscribe_addingNodes = subscribe(addingNodes, (value) => $addingNodes = value);
  $$unsubscribe_showGuides = subscribe(showGuides, (value) => $showGuides = value);
  createEventDispatcher();
  let isRotating = false, stateChanged = false;
  let rotationMode = false;
  let contextActions, contextContent, contextBox, boxVisibility;
  let showVirtualVertex = false, virtualVertex = null;
  const updateSelectionBox = (id) => {
    set_store_value(elements, $elements[id].sbox.tl.x = $elements[id].bbox.x * $elements[id].ctm.a + $elements[id].bbox.y * $elements[id].ctm.c + $elements[id].ctm.e, $elements);
    set_store_value(elements, $elements[id].sbox.tl.y = $elements[id].bbox.x * $elements[id].ctm.b + $elements[id].bbox.y * $elements[id].ctm.d + $elements[id].ctm.f, $elements);
    set_store_value(elements, $elements[id].sbox.tr.x = ($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a + $elements[id].bbox.y * $elements[id].ctm.c + $elements[id].ctm.e, $elements);
    set_store_value(elements, $elements[id].sbox.tr.y = ($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b + $elements[id].bbox.y * $elements[id].ctm.d + $elements[id].ctm.f, $elements);
    set_store_value(elements, $elements[id].sbox.bl.x = $elements[id].bbox.x * $elements[id].ctm.a + ($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c + $elements[id].ctm.e, $elements);
    set_store_value(elements, $elements[id].sbox.bl.y = $elements[id].bbox.x * $elements[id].ctm.b + ($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d + $elements[id].ctm.f, $elements);
    set_store_value(elements, $elements[id].sbox.br.x = ($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.a + ($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.c + $elements[id].ctm.e, $elements);
    set_store_value(elements, $elements[id].sbox.br.y = ($elements[id].bbox.x + $elements[id].bbox.width) * $elements[id].ctm.b + ($elements[id].bbox.y + $elements[id].bbox.height) * $elements[id].ctm.d + $elements[id].ctm.f, $elements);
    elements.set($elements);
  };
  const rotateObject = (coord, change) => {
    let dx = change.x;
    let dy = change.y;
    let cx = $elements[$selectedId].axis.x;
    let cy = $elements[$selectedId].axis.y;
    let DX = coord.x - cx;
    let DY = coord.y - cy;
    let r = Math.sqrt(DX * DX + DY * DY);
    if (r < 5) return;
    let dr = Math.sqrt(dx * dx + dy * dy);
    let sign = 1;
    if (DX >= 0 && DY >= 0) {
      if (dy <= dx) sign = -1;
    }
    if (DX < 0 && DY > 0) {
      if (dy >= -dx) sign = -1;
    }
    if (DX < 0 && DY < 0) {
      if (dy >= dx) sign = -1;
    }
    if (DX > 0 && DY < 0) {
      if (dy <= -dx) sign = -1;
    }
    let theta = sign * dr / r;
    $elements[$selectedId].rotate(theta, $elements[$selectedId].axis);
    if ($selectedId === "lasso") {
      $lassoElements.forEach((elementId) => {
        $elements[elementId].rotate(theta, $elements[$selectedId].axis);
      });
    }
    elements.set($elements);
  };
  const transformVector = (vec, tm) => {
    return new Point(tm.a * vec.x + tm.c * vec.y + tm.e, tm.b * vec.x + tm.d * vec.y + tm.f);
  };
  const scaleObject = (coord, offset, change, constraint) => {
    if (change.x === 0 && change.y === 0) return;
    let inv = $elements[$selectedId].tm.inverse();
    let coord1 = transformVector(coord, inv);
    let offset1 = transformVector(offset, inv);
    let change1 = {
      x: coord1.x - offset1.x,
      y: coord1.y - offset1.y
    };
    let scalex = 1;
    let scaley = 1;
    let newHeight = $elements[$selectedId].bbox.height;
    let newWidth = $elements[$selectedId].bbox.width;
    let fixedPoint = {
      x: $elements[$selectedId].bbox.x,
      y: $elements[$selectedId].bbox.y
    };
    ({
      x: $elements[$selectedId].sbox.tl.x,
      y: $elements[$selectedId].sbox.tl.y
    });
    switch (constraint) {
      case "bottommid": {
        scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newHeight += change1.y;
        break;
      }
      case "midright": {
        scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
        scaley = $elements[$selectedId].preserveAspect ? scalex : scaley;
        newWidth += change1.x;
        break;
      }
      case "midleft": {
        fixedPoint.x = fixedPoint.x + newWidth;
        $elements[$selectedId].sbox.tr.x;
        scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
        scaley = $elements[$selectedId].preserveAspect ? scalex : scaley;
        newWidth -= change1.x;
        break;
      }
      case "topmid": {
        fixedPoint.y = fixedPoint.y + newHeight;
        $elements[$selectedId].sbox.bl.y;
        scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newHeight -= change1.y;
        break;
      }
      case "bottomright": {
        scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
        scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newWidth += change1.x;
        newHeight += change1.y;
        break;
      }
      case "bottomleft": {
        fixedPoint.x = fixedPoint.x + newWidth;
        $elements[$selectedId].sbox.tr.x;
        scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
        scaley = 1 + change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newWidth -= change1.x;
        newHeight += change1.y;
        break;
      }
      case "topright": {
        fixedPoint.y = fixedPoint.y + newHeight;
        $elements[$selectedId].sbox.bl.y;
        scalex = 1 + change1.x / $elements[$selectedId].bbox.width;
        scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newWidth += change1.x;
        newHeight -= change1.y;
        break;
      }
      case "topleft": {
        fixedPoint.x = fixedPoint.x + newWidth;
        fixedPoint.y = fixedPoint.y + newHeight;
        $elements[$selectedId].sbox.tr.x;
        $elements[$selectedId].sbox.bl.y;
        scalex = 1 - change1.x / $elements[$selectedId].bbox.width;
        scaley = 1 - change1.y / $elements[$selectedId].bbox.height;
        scalex = $elements[$selectedId].preserveAspect ? scaley : scalex;
        newWidth -= change1.x;
        newHeight -= change1.y;
        break;
      }
    }
    $elements[$selectedId].scale(scalex, scaley, fixedPoint);
    $elements[$selectedId].scaleSbox(change.x, change.y, constraint);
    elements.set($elements);
  };
  const computePatternViewBox = (id, sbox) => {
    let xvalues = [sbox.tl.x, sbox.tr.x, sbox.bl.x, sbox.br.x];
    let yvalues = [sbox.tl.y, sbox.tr.y, sbox.bl.y, sbox.br.y];
    let xmin = Math.min(...xvalues);
    let xmax = Math.max(...xvalues);
    let ymin = Math.min(...yvalues);
    let ymax = Math.max(...yvalues);
    if ($elements[id].tag === "g" && $elements[id].patternId) {
      set_store_value(defs, $defs[$elements[id].patternId].viewBox = xmin + " " + ymin + " " + (xmax - xmin) + " " + (ymax - ymin), $defs);
      defs.set($defs);
    }
  };
  function makeDraggable(node) {
    node.addEventListener(
      "touchstart",
      function(e) {
        e.preventDefault();
      },
      false
    );
    node.addEventListener("pointerdown", startDrag, false);
    node.addEventListener("pointerup", endDrag, false);
    node.addEventListener("pointerleave", endDrag, false);
    node.addEventListener("pointercancel", endDrag, false);
    node.addEventListener("pointermove", drag, false);
    let dragOffset;
    let isDragging = false;
    let isScaling = false;
    let scaleNode = "";
    function getPointerPosition(evt) {
      let clientx = evt.clientX;
      let clienty = evt.clientY;
      return {
        x: $screenCTM.a * clientx + $screenCTM.c * clienty + $screenCTM.e,
        y: $screenCTM.b * clientx + $screenCTM.d * clienty + $screenCTM.f
      };
    }
    function startDrag(evt) {
      evt.preventDefault();
      let target = evt.target;
      if ($pathMode) return;
      if (!target) return;
      let targetId = target.getAttribute("id");
      if (targetId === "NewPoint") return;
      if (target.classList.contains("dragBar")) {
        isDragging = true;
        dragOffset = getPointerPosition(evt);
        return;
      }
      if (target.classList.contains("SVG")) {
        set_store_value(onSVG, $onSVG = true, $onSVG);
        set_store_value(selectedId, $selectedId = null, $selectedId);
        set_store_value(selectedElements, $selectedElements = [], $selectedElements);
        set_store_value(selectionMode, $selectionMode = false, $selectionMode);
        if ($PAN) {
          dragOffset = getPointerPosition(evt);
          isDragging = true;
        }
        return;
      }
      if (target.classList.contains("SelectionBox") && $elementsNode[target.getAttribute("id")]) {
        target = $elementsNode[target.getAttribute("id")];
      }
      targetId = target.getAttribute("id");
      let isDraggable = target.classList.contains("draggable");
      while (!(targetId && isDraggable)) {
        target = target.parentNode;
        if (!target || target.classList.contains("SVG")) return;
        if (target) {
          targetId = target.getAttribute("id");
          isDraggable = target.classList.contains("draggable");
        }
      }
      if (target.classList.contains("circleCenter")) {
        isDragging = true;
        dragOffset = getPointerPosition(evt);
      } else if (target.classList.contains("ui")) {
        if (target.classList.contains("vertex")) {
          set_store_value(selectedVertex, $selectedVertex = targetId, $selectedVertex);
          set_store_value(selectedControl0, $selectedControl0 = null, $selectedControl0);
          set_store_value(selectedControl1, $selectedControl1 = null, $selectedControl1);
          isDragging = true;
          dragOffset = getPointerPosition(evt);
        }
        if (target.classList.contains("tout")) {
          set_store_value(selectedVertex, $selectedVertex = null, $selectedVertex);
          set_store_value(selectedControl1, $selectedControl1 = null, $selectedControl1);
          set_store_value(selectedControl0, $selectedControl0 = targetId, $selectedControl0);
          isDragging = true;
          dragOffset = getPointerPosition(evt);
        }
        if (target.classList.contains("tin")) {
          set_store_value(selectedVertex, $selectedVertex = null, $selectedVertex);
          set_store_value(selectedControl0, $selectedControl0 = null, $selectedControl0);
          set_store_value(selectedControl1, $selectedControl1 = targetId, $selectedControl1);
          isDragging = true;
          dragOffset = getPointerPosition(evt);
        }
        if (target.classList.contains("axis")) {
          isRotating = true;
          rotationMode = !rotationMode;
          isDragging = false;
        }
        if (target.classList.contains("bbox")) {
          isScaling = true;
          isDragging = false;
          isRotating = false;
          scaleNode = target.getAttribute("id");
          dragOffset = getPointerPosition(evt);
        }
      } else {
        while ($elements[targetId] && $elements[targetId].isLocked) {
          target = target.parentNode;
          targetId = target.getAttribute("id");
          if ($elements[targetId].parent === "SVG") return;
        }
        set_store_value(selectedId, $selectedId = targetId, $selectedId);
        set_store_value(selectedElement, $selectedElement = target, $selectedElement);
        set_store_value(activeElement, $activeElement = target, $activeElement);
        set_store_value(elements, $elements[$selectedId].bbox = $activeElement.getBBox(), $elements);
        set_store_value(elements, $elements[$selectedId].ctm = $boundingBox?.getScreenCTM().inverse().multiply($activeElement.getScreenCTM()), $elements);
        $elements[$selectedId].transformUIControls();
        updateSelectionBox($selectedId);
        set_store_value(elements, $elements[$selectedId].axis.x = ($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2, $elements);
        set_store_value(elements, $elements[$selectedId].axis.y = ($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2, $elements);
        elements.set($elements);
        if ($elements[$selectedId].tag === "g" && $elements[$selectedId].patternId) {
          computePatternViewBox($selectedId, $elements[$selectedId].sbox);
        }
        dragOffset = getPointerPosition(evt);
        isDragging = !rotationMode;
        if (rotationMode) isRotating = true;
        set_store_value(onSVG, $onSVG = false, $onSVG);
      }
    }
    function drag(evt) {
      evt.preventDefault();
      let target = evt.target;
      if (!(isDragging || isRotating || isScaling)) return;
      if ($pathMode) return;
      if (!target) return;
      if (target.classList.contains("dragBar") && isDragging) {
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        target.style.left = target.offsetLeft + change.x + "px";
        target.style.top = target.offsetTop + change.y + "px";
        target.parentNode.style.left = target.parentNode.offsetLeft + change.x + "px";
        target.parentNode.style.top = target.parentNode.offsetTop + change.y + "px";
        contextActions.style.left = contextActions.offsetLeft + change.x + "px";
        contextActions.style.top = contextActions.offsetTop + change.y + "px";
        boxVisibility.style.left = boxVisibility.offsetLeft + change.x + "px";
        boxVisibility.style.top = boxVisibility.offsetTop + change.y + "px";
        dragOffset = { x: coord.x, y: coord.y };
        return;
      }
      if (isDragging && !$PAN) {
        isRotating = false;
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        if (evt.target.classList.contains("circleCenter")) {
          set_store_value(circleCenter, $circleCenter = $circleCenter.a(change), $circleCenter);
        }
        if ($showControls && $selectedId && $activeElement && $elements[$selectedId].tag === "path") {
          if ($selectedVertices && $selectedVertices.length > 0) {
            showVirtualVertex = false;
            virtualVertex = null;
            $selectedVertices.forEach((vId) => {
              $elements[$selectedId].updateControl(vId, coord, dragOffset, "v", $mirrorMode, $mirrorVertex, $circleMode, $circledVertices, $circleCenter);
            });
            set_store_value(elements, $elements[$selectedId].bbox = $activeElement.getBBox(), $elements);
          } else if ($selectedVertex) {
            showVirtualVertex = false;
            virtualVertex = null;
            $elements[$selectedId].updateControl($selectedVertex, coord, dragOffset, "v", $mirrorMode, $mirrorVertex, $circleMode, $circledVertices, $circleCenter);
            set_store_value(elements, $elements[$selectedId].bbox = $activeElement.getBBox(), $elements);
          } else if ($selectedControl0) {
            $elements[$selectedId].updateControl($selectedControl0, coord, dragOffset, "tout", $mirrorMode, $mirrorVertex, $circleMode, $circledVertices, $circleCenter);
            set_store_value(elements, $elements[$selectedId].bbox = $activeElement.getBBox(), $elements);
          } else if ($selectedControl1) {
            $elements[$selectedId].updateControl($selectedControl1, coord, dragOffset, "tin", $mirrorMode, $mirrorVertex, $circleMode, $circledVertices, $circleCenter);
            set_store_value(elements, $elements[$selectedId].bbox = $activeElement.getBBox(), $elements);
          }
        } else if ($selectedId && $elements[$selectedId]) {
          $elements[$selectedId].translate(change.x, change.y);
          if ($selectedId === "lasso") {
            $lassoElements.forEach((elementId) => {
              $elements[elementId].translate(change.x, change.y);
            });
          } else if ($selectedElements?.length > 0) {
            $selectedElements.forEach((elementId) => {
              if ($selectedId !== elementId) $elements[elementId].translate(change.x, change.y);
            });
          }
          if (Math.abs(change.x) + Math.abs(change.y) > 1) stateChanged = true;
        }
        elements.set($elements);
        dragOffset = { x: coord.x, y: coord.y };
      }
      if (isRotating && rotationMode) {
        isDragging = false;
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        rotateObject(coord, change);
        dragOffset = { x: coord.x, y: coord.y };
        stateChanged = true;
      }
      if (isScaling) {
        let coord = getPointerPosition(evt);
        let change = new Point(coord.x - dragOffset.x, coord.y - dragOffset.y);
        scaleObject(coord, dragOffset, change, scaleNode);
        elements.set($elements);
        dragOffset = { x: coord.x, y: coord.y };
        stateChanged = true;
      }
      if ($PAN && isDragging && $onSVG) {
        let coord = getPointerPosition(evt);
        set_store_value(panX, $panX += coord.x - dragOffset.x, $panX);
        set_store_value(panY, $panY += coord.y - dragOffset.y, $panY);
        dragOffset.x = coord.x;
        dragOffset.y = coord.y;
      }
      if ((isDragging || isRotating || isScaling) && $selectedId && $boundingBox && $activeElement) {
        set_store_value(elements, $elements[$selectedId].ctm = $boundingBox.getScreenCTM().inverse().multiply($activeElement.getScreenCTM()), $elements);
        $elements[$selectedId].transformUIControls();
        updateSelectionBox($selectedId);
        set_store_value(elements, $elements[$selectedId].axis.x = ($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.br.x) / 2, $elements);
        set_store_value(elements, $elements[$selectedId].axis.y = ($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.br.y) / 2, $elements);
        elements.set($elements);
        if ($elements[$selectedId].tag === "g" && $elements[$selectedId].patternId) {
          computePatternViewBox($selectedId, $elements[$selectedId].sbox);
        }
      }
    }
    function endDrag(evt) {
      if (evt.target.classList.contains("dragBar")) {
        isDragging = false;
        dragOffset = null;
      } else if (!$pathMode) {
        if (isDragging || isRotating || isScaling) {
          if ($selectedVertex) {
            if ($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === "path") {
              virtualVertex = $elements[$selectedId].computeMidVertex($selectedVertex);
              showVirtualVertex = true;
            }
          } else if ($selectedControl0) ;
          else if ($selectedControl1) ;
          else {
            if (stateChanged && $selectedId && $elements[$selectedId]) {
              set_store_value(
                appHistory,
                $appHistory = [
                  ...$appHistory,
                  {
                    id: $selectedId,
                    change: {
                      tm: $elements[$selectedId].tm,
                      ctm: $elements[$selectedId].ctm,
                      bbox: $elements[$selectedId].bbox,
                      sbox: $elements[$selectedId].sbox,
                      axis: $elements[$selectedId].axis
                    }
                  }
                ],
                $appHistory
              );
              set_store_value(currentState, $currentState = $appHistory.length - 1, $currentState);
            }
          }
        }
        isDragging = false;
        isRotating = false;
        isScaling = false;
        stateChanged = false;
      }
    }
  }
  if ($$props.makeDraggable === void 0 && $$bindings.makeDraggable && makeDraggable !== void 0) $$bindings.makeDraggable(makeDraggable);
  $$result.css.add(css);
  {
    if ($boundingBox) set_store_value(screenCTM, $screenCTM = $boundingBox.getScreenCTM().inverse(), $screenCTM);
  }
  $$unsubscribe_appHistory();
  $$unsubscribe_currentState();
  $$unsubscribe_selectedId();
  $$unsubscribe_elements();
  $$unsubscribe_selectedControl1();
  $$unsubscribe_selectedControl0();
  $$unsubscribe_selectedVertex();
  $$unsubscribe_pathMode();
  $$unsubscribe_activeElement();
  $$unsubscribe_boundingBox();
  $$unsubscribe_panY();
  $$unsubscribe_panX();
  $$unsubscribe_onSVG();
  $$unsubscribe_PAN();
  $$unsubscribe_selectedElements();
  $$unsubscribe_lassoElements();
  $$unsubscribe_circleCenter();
  $$unsubscribe_circledVertices();
  $$unsubscribe_circleMode();
  $$unsubscribe_mirrorVertex();
  $$unsubscribe_mirrorMode();
  $$unsubscribe_selectedVertices();
  $$unsubscribe_showControls();
  $$unsubscribe_selectedElement();
  $$unsubscribe_elementsNode();
  $$unsubscribe_selectionMode();
  $$unsubscribe_screenCTM();
  $$unsubscribe_defs();
  $$unsubscribe_canvasBackground();
  $$unsubscribe_BBOX();
  $$unsubscribe_svg();
  $$unsubscribe_Z();
  $$unsubscribe_showBBoxControls();
  $$unsubscribe_addingNodes();
  $$unsubscribe_showGuides();
  return `<div class="canvas svelte-p2dk90" style="${"background: " + escape($canvasBackground, true) + ";"}"><svg class="SVG Vectorial svelte-p2dk90"${add_attribute("width", $BBOX.width, 0)}${add_attribute("height", $BBOX.height, 0)} viewBox="${escape($BBOX.x, true) + " " + escape($BBOX.y, true) + " " + escape($BBOX.width, true) + " " + escape($BBOX.height, true)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${add_attribute("this", $svg, 0)}><g class="Vectorial" transform="${"translate(" + escape($panX, true) + " " + escape($panY, true) + ") scale(" + escape($Z, true) + ")"}"${add_attribute("this", $boundingBox, 0)}><defs>${each(Object.keys($defs), (def) => {
    return `${$defs[def].tag === "shadow" ? `${validate_component(SVGShadow, "SVGShadow").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "textMask" ? `${validate_component(SVGTextMask, "SVGTextMask").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "blur" ? `${validate_component(SVGBlur, "SVGBlur").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "specularLighting" ? `${validate_component(SVGSpecularLighting, "SVGSpecularLighting").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "diffuseLighting" ? `${validate_component(SVGDiffuseLighting, "SVGDiffuseLighting").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "linearGradient" ? `<linearGradient${add_attribute("id", def, 0)} x1="${escape($defs[def].start.x, true) + "%"}" y1="${escape($defs[def].start.y, true) + "%"}" x2="${escape($defs[def].end.x, true) + "%"}" y2="${escape($defs[def].end.y, true) + "%"}"${add_attribute("gradientUnits", $defs[def].gradientUnits, 0)}${add_attribute("spreadMethod", $defs[def].spreadMethod, 0)}>${each($defs[def].colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</linearGradient>` : ``} ${$defs[def].tag === "radialGradient" ? `<radialGradient${add_attribute("id", def, 0)} cx="${escape($defs[def].center.x, true) + "%"}" cy="${escape($defs[def].center.y, true) + "%"}" r="${escape($defs[def].r, true) + "%"}" fx="${escape($defs[def].focus.x, true) + "%"}" fy="${escape($defs[def].focus.y, true) + "%"}" fr="${escape($defs[def].fr, true) + "%"}"${add_attribute("gradientUnits", $defs[def].gradientUnits, 0)}${add_attribute("spreadMethod", $defs[def].spreadMethod, 0)}>${each($defs[def].colors, (color) => {
      return `<stop offset="${escape(color.offset, true) + "%"}"${add_attribute("stop-color", color.stopColor, 0)}></stop>`;
    })}</radialGradient>` : ``} ${$defs[def].tag === "marker" ? `${validate_component(SVGMarker, "SVGMarker").$$render($$result, { id: def }, {}, {})}` : ``} ${$defs[def].tag === "pattern" ? `${validate_component(SVGPattern, "SVGPattern").$$render($$result, { id: def }, {}, {})}` : ``}`;
  })}</defs>${$elements ? `${!$onSVG ? `${$selectedId && $elements[$selectedId] ? `<polygon${add_attribute("id", $selectedId, 0)} class="SelectionBox Vectorial" points="${escape($elements[$selectedId].sbox.tl.x, true) + "," + escape($elements[$selectedId].sbox.tl.y, true) + " " + escape($elements[$selectedId].sbox.tr.x, true) + "," + escape($elements[$selectedId].sbox.tr.y, true) + " " + escape($elements[$selectedId].sbox.br.x, true) + "," + escape($elements[$selectedId].sbox.br.y, true) + " " + escape($elements[$selectedId].sbox.bl.x, true) + "," + escape($elements[$selectedId].sbox.bl.y, true)}" stroke="blue" stroke-dasharray="${escape(5 / $Z, true) + "," + escape(5 / $Z, true)}"${add_attribute("stroke-width", 0.5 / $Z, 0)} fill="rgba(255, 255, 255, 0)"></polygon>` : ``}` : ``} ${$selectedElements ? `${each($selectedElements, (elem) => {
    return `<polygon class="Vectorial" points="${escape($elements[elem].sbox.tl.x, true) + "," + escape($elements[elem].sbox.tl.y, true) + " " + escape($elements[elem].sbox.tr.x, true) + "," + escape($elements[elem].sbox.tr.y, true) + " " + escape($elements[elem].sbox.br.x, true) + "," + escape($elements[elem].sbox.br.y, true) + " " + escape($elements[elem].sbox.bl.x, true) + "," + escape($elements[elem].sbox.bl.y, true)}" stroke="blue" stroke-dasharray="${escape(5 / $Z, true) + "," + escape(5 / $Z, true)}"${add_attribute("stroke-width", 0.5 / $Z, 0)} fill="none"></polygon>`;
  })}` : ``}` : ``}${each($elements.Layers, (layerId) => {
    return `${validate_component(SVGGroup, "SVGGroup").$$render($$result, { id: layerId }, {}, {})}`;
  })}${$elements && $selectedId && $elements[$selectedId] ? `${!$onSVG ? `${$showBBoxControls ? `<circle${add_attribute("id", "topleft", 0)}${add_attribute("class", "draggable topleft ui bbox Vectorial", 0)}${add_attribute("cx", $elements[$selectedId].sbox.tl.x, 0)}${add_attribute("cy", $elements[$selectedId].sbox.tl.y, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "topright", 0)}${add_attribute("class", "draggable topright ui bbox Vectorial", 0)}${add_attribute("cx", $elements[$selectedId].sbox.tr.x, 0)}${add_attribute("cy", $elements[$selectedId].sbox.tr.y, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "bottomleft", 0)}${add_attribute("class", "draggable bottomleft ui bbox Vectorial", 0)}${add_attribute("cx", $elements[$selectedId].sbox.bl.x, 0)}${add_attribute("cy", $elements[$selectedId].sbox.bl.y, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "bottomright", 0)}${add_attribute("class", "draggable bottomright ui bbox Vectorial", 0)}${add_attribute("cx", $elements[$selectedId].sbox.br.x, 0)}${add_attribute("cy", $elements[$selectedId].sbox.br.y, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "topmid", 0)}${add_attribute("class", "draggable topmid ui bbox Vectorial", 0)}${add_attribute("cx", ($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.tr.x) / 2, 0)}${add_attribute("cy", ($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.tr.y) / 2, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "midleft", 0)}${add_attribute("class", "draggable midleft ui bbox Vectorial", 0)}${add_attribute("cx", ($elements[$selectedId].sbox.tl.x + $elements[$selectedId].sbox.bl.x) / 2, 0)}${add_attribute("cy", ($elements[$selectedId].sbox.tl.y + $elements[$selectedId].sbox.bl.y) / 2, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "midright", 0)}${add_attribute("class", "draggable midright ui bbox Vectorial", 0)}${add_attribute("cx", ($elements[$selectedId].sbox.tr.x + $elements[$selectedId].sbox.br.x) / 2, 0)}${add_attribute("cy", ($elements[$selectedId].sbox.tr.y + $elements[$selectedId].sbox.br.y) / 2, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "bottommid", 0)}${add_attribute("class", "draggable bottommid ui bbox Vectorial", 0)}${add_attribute("cx", ($elements[$selectedId].sbox.bl.x + $elements[$selectedId].sbox.br.x) / 2, 0)}${add_attribute("cy", ($elements[$selectedId].sbox.bl.y + $elements[$selectedId].sbox.br.y) / 2, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle> <circle${add_attribute("id", "axis", 0)}${add_attribute("class", "draggable axis ui Vectorial", 0)}${add_attribute("cx", $elements[$selectedId].axis.x, 0)}${add_attribute("cy", $elements[$selectedId].axis.y, 0)}${add_attribute("r", 5 / $Z, 0)}${add_attribute("fill", rotationMode ? "green" : "black", 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}></circle>` : ``}` : ``} ${$selectedId && ($showControls || $addingNodes) && $elements[$selectedId].tag === "path" ? `${each($elements[$selectedId].uiEdges, (subpaths) => {
    return `${each(subpaths, (edge) => {
      return `${$selectedVertex && Number($selectedVertex) === Number(edge.id) || $selectedControl0 && Number($selectedControl0) === Number(edge.id) || $selectedControl1 && Number($selectedControl1) === Number(edge.id) ? `${edge.tin !== "NA" ? `<line${add_attribute("x1", edge.tin.x, 0)}${add_attribute("y1", edge.tin.y, 0)}${add_attribute("x2", edge.v.x, 0)}${add_attribute("y2", edge.v.y, 0)}${add_attribute("stroke", "gray", 0)}${add_attribute("stroke-width", 0.5 / $Z, 0)}></line> <circle${add_attribute("id", edge.id, 0)}${add_attribute("class", "draggable ui tin Vectorial", 0)}${add_attribute("cx", edge.tin.x, 0)}${add_attribute("cy", edge.tin.y, 0)}${add_attribute("r", 3.5 / $Z, 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}${add_attribute("fill", Number($selectedControl1) === edge.id ? "red" : "teal", 0)}><title>c0</title></circle>` : ``} ${edge.tout !== "NA" ? `<line${add_attribute("x1", edge.tout.x, 0)}${add_attribute("y1", edge.tout.y, 0)}${add_attribute("x2", edge.v.x, 0)}${add_attribute("y2", edge.v.y, 0)}${add_attribute("stroke", "gray", 0)}${add_attribute("stroke-width", 0.5 / $Z, 0)}></line> <circle${add_attribute("id", edge.id, 0)}${add_attribute("class", "draggable ui tout Vectorial", 0)}${add_attribute("cx", edge.tout.x, 0)}${add_attribute("cy", edge.tout.y, 0)}${add_attribute("r", 3.5 / $Z, 0)} stroke="white"${add_attribute("stroke-width", 1 / $Z, 0)}${add_attribute("fill", Number($selectedControl0) === edge.id ? "red" : "teal", 0)}><title>c1</title></circle>` : ``}` : ``} ${edge.t === "smooth" ? `<circle${add_attribute("id", edge.id, 0)}${add_attribute("class", "draggable ui vertex Vectorial", 0)}${add_attribute("cx", edge.v.x, 0)}${add_attribute("cy", edge.v.y, 0)}${add_attribute("r", 4 / $Z, 0)}${add_attribute("stroke", edge.c === "M" ? "black" : "white", 0)}${add_attribute("stroke-width", 1 / $Z, 0)}${add_attribute(
        "fill",
        Number($selectedVertex) === edge.id ? "red" : edge.c === "M" ? "white" : $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1 ? "goldenrod" : "black",
        0
      )}><title>${escape(edge.c)}</title></circle>` : `${edge.t === "sharp" ? `<rect${add_attribute("id", edge.id, 0)}${add_attribute("class", "draggable ui vertex Vectorial", 0)}${add_attribute("x", edge.v.x - 4 / $Z, 0)}${add_attribute("y", edge.v.y - 4 / $Z, 0)}${add_attribute("width", 8 / $Z, 0)}${add_attribute("height", 8 / $Z, 0)}${add_attribute("stroke", edge.c === "M" ? "black" : "white", 0)}${add_attribute("stroke-width", 1 / $Z, 0)}${add_attribute(
        "fill",
        Number($selectedVertex) === edge.id ? "red" : edge.c === "M" ? "white" : $selectedVertices && $selectedVertices.indexOf(String(edge.id)) !== -1 ? "goldenrod" : "black",
        0
      )}><title>${escape(edge.c)}</title></rect>` : ``}`}  ${edge.c === "A" ? `<circle class="Vectorial"${add_attribute("id", edge.id, 0)}${add_attribute("cx", edge.center.x, 0)}${add_attribute("cy", edge.center.y, 0)}${add_attribute("r", 5 / $Z, 0)} stroke="red"${add_attribute("stroke-width", 1 / $Z, 0)} fill="none"></circle>` : ``}`;
    })}`;
  })} ${$circleMode && $circleCenter ? `<circle id="circleCenter"${add_attribute("class", "draggable circleCenter Vectorial", 0)}${add_attribute("cx", $circleCenter.x, 0)}${add_attribute("cy", $circleCenter.y, 0)}${add_attribute("r", 5 / $Z, 0)} stroke="green"${add_attribute("stroke-width", 1 / $Z, 0)} fill="green"></circle>` : ``} ${$selectedVertex && virtualVertex && showVirtualVertex ? ` <rect class="Vectorial"${add_attribute("id", virtualVertex.id, 0)}${add_attribute("x", virtualVertex.v.x - 4 / $Z, 0)}${add_attribute("y", virtualVertex.v.y - 4 / $Z, 0)}${add_attribute("width", 8 / $Z, 0)}${add_attribute("height", 8 / $Z, 0)}${add_attribute("stroke", virtualVertex.c === "M" ? "black" : "white", 0)}${add_attribute("stroke-width", 1 / $Z, 0)} fill="green"><title>${escape(virtualVertex.id)}</title></rect>` : ``}` : ``}` : ``}${$showGuides ? `${each(Object.keys($elements), (id) => {
    return `${$elements[id].axis && $elements[id].sbox ? `<line${add_attribute("x1", $BBOX.x, 0)}${add_attribute("y1", $elements[id].axis.y, 0)}${add_attribute("x2", $BBOX.x + $BBOX.x + $BBOX.width, 0)}${add_attribute("y2", $elements[id].axis.y, 0)} stroke="red" stroke-width="0.5px"></line> <line${add_attribute("x1", $elements[id].axis.x, 0)}${add_attribute("y1", $BBOX.y, 0)}${add_attribute("x2", $elements[id].axis.x, 0)}${add_attribute("y2", $BBOX.y + $BBOX.height, 0)} stroke="red" stroke-width="0.5px"></line> <line${add_attribute("x1", $BBOX.x, 0)}${add_attribute("y1", $elements[id].sbox.tl.y, 0)}${add_attribute("x2", $BBOX.x + $BBOX.x + $BBOX.width, 0)}${add_attribute("y2", $elements[id].sbox.tl.y, 0)} stroke="red" stroke-width="0.5px"></line> <line${add_attribute("x1", $elements[id].sbox.tl.x, 0)}${add_attribute("y1", $BBOX.y, 0)}${add_attribute("x2", $elements[id].sbox.tl.x, 0)}${add_attribute("y2", $BBOX.y + $BBOX.height, 0)} stroke="red" stroke-width="0.5px"></line> <line${add_attribute("x1", $BBOX.x, 0)}${add_attribute("y1", $elements[id].sbox.br.y, 0)}${add_attribute("x2", $BBOX.x + $BBOX.x + $BBOX.width, 0)}${add_attribute("y2", $elements[id].sbox.br.y, 0)} stroke="red" stroke-width="0.5px"></line> <line${add_attribute("x1", $elements[id].sbox.br.x, 0)}${add_attribute("y1", $BBOX.y, 0)}${add_attribute("x2", $elements[id].sbox.br.x, 0)}${add_attribute("y2", $BBOX.y + $BBOX.height, 0)} stroke="red" stroke-width="0.5px"></line>` : ``}`;
  })}` : ``}</g></svg> ${$selectedId || $selectedVertex || $selectedControl0 || $selectedControl1 ? `<div class="contextBox mdc-elevation--z10 Vectorial svelte-p2dk90"${add_attribute("this", contextBox, 0)}><div class="material-icons boxVisibility svelte-p2dk90"${add_attribute("this", boxVisibility, 0)}>${escape("close_fullscreen")}</div> <div class="dragBar draggable Vectorial material-icons svelte-p2dk90" data-svelte-h="svelte-jx7aug">drag_indicator</div> <div class="contextActions noScrollBar svelte-p2dk90"${add_attribute("this", contextActions, 0)}>${validate_component(MenuSurface, "MenuSurface").$$render(
    $$result,
    {
      static: true,
      style: "width:100%; height:100%;"
    },
    {},
    {
      default: () => {
        return `${validate_component(ContextActions, "ContextActions").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</div> <div class="content svelte-p2dk90"${add_attribute("this", contextContent, 0)}>${validate_component(ContextBox, "ContextBox").$$render($$result, {}, {}, {})}</div></div>` : ``}</div> `;
});
const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_DRAWING;
  let $$unsubscribe_appHistory;
  let $$unsubscribe_BBOX;
  let $$unsubscribe_defs;
  let $elements, $$unsubscribe_elements;
  let $$unsubscribe_objectCount;
  let $$unsubscribe_drawingID;
  let $$unsubscribe_localDRAWING;
  let $currentPath, $$unsubscribe_currentPath;
  $$unsubscribe_DRAWING = subscribe(DRAWING, (value) => value);
  $$unsubscribe_appHistory = subscribe(appHistory, (value) => value);
  $$unsubscribe_BBOX = subscribe(BBOX, (value) => value);
  $$unsubscribe_defs = subscribe(defs, (value) => value);
  $$unsubscribe_elements = subscribe(elements, (value) => $elements = value);
  $$unsubscribe_objectCount = subscribe(objectCount, (value) => value);
  $$unsubscribe_drawingID = subscribe(drawingID, (value) => value);
  $$unsubscribe_localDRAWING = subscribe(localDRAWING, (value) => value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  set_store_value(currentPath, $currentPath = "App", $currentPath);
  let saveTimer;
  onDestroy(() => clearInterval(saveTimer));
  $$unsubscribe_DRAWING();
  $$unsubscribe_appHistory();
  $$unsubscribe_BBOX();
  $$unsubscribe_defs();
  $$unsubscribe_elements();
  $$unsubscribe_objectCount();
  $$unsubscribe_drawingID();
  $$unsubscribe_localDRAWING();
  $$unsubscribe_currentPath();
  return `${$$result.head += `<!-- HEAD_svelte-1jiv4jr_START -->${$$result.title = `<title>Vectorial</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/vectorial/app"><meta name="description" content="Graphics Drawing Application."><!-- HEAD_svelte-1jiv4jr_END -->`, ""} ${$elements ? `${validate_component(Vectorial, "Vectorial").$$render($$result, {}, {}, {})}` : ``}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@app.svelte-BtNKvFmc.js.map
