<script lang="ts">
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Paper, { Subtitle } from '@smui/paper';
    import Snackbar, { Label } from '@smui/snackbar';
    import IconButton, { Icon } from '@smui/icon-button';
    import Card, {Content, Actions} from '@smui/card';
    import {
        svg,
        appHistory,
        symbol,
        defs,
        objectCount,
        elementsNode,
        isCrop,
        canvasBackground,
        DRAWING,
        elements,
        boundingBox,
        BBOX,
        symbols,
    } from "$lib/vectorial/pages/vectorial/stores";
    import { clipboardData } from '$lib/vectorial/stores';
    import { page } from '$app/stores';
    import { goto } from "$app/navigation";
    import DownloadPNG from './DownloadPNG.svelte';
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Line } from "$lib/vectorial/utils/common/line";
    import { Circle } from "$lib/vectorial/utils/common/circle";
    import { Ellipse } from "$lib/vectorial/utils/common/ellipse";
    import { Rectangle } from "$lib/vectorial/utils/common/rectangle";
    import { Regular } from "$lib/vectorial/utils/common/regular";
    import { Text } from "$lib/vectorial/utils/common/text";
    import { Latex } from "$lib/vectorial/utils/common/latex";
    import { Plot } from "$lib/vectorial/utils/common/plot";
    import { Polyline } from "$lib/vectorial/utils/common/polyline";
    import { Path } from "$lib/vectorial/utils/common/path";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { Image } from "$lib/vectorial/utils/common/image";
    import { Grid } from "$lib/vectorial/utils/common/grid";
    import Button from "@smui/button";
    import List, { Item, Graphic, Separator } from '@smui/list';
    import Color from "$lib/vectorial/components/Color.svelte";
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    export let uploadSymbol = false;
    export let updateDrawing = false;

    export let dispatchUrl = `/${$page.data.user.publicID}/drawings`;
    let svgCopiedToClipboard, elementsToClipboard;
    const download = () => {
        goto("/download");
    };

    let svgUrl,
        svgData,
        copied = false,
        pngUrl,
        pngImg,
        pngData,
        isPNG = false,
        pngScale = 1;
const gridString = (id) => {
    let grd = `
    <g 
        id='${id}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    >`   
    let h = $elements[id].dX / $elements[id].nSubdivisions;
    if($elements[id].showSubdivisions) {
        for(let i = 0; i < Math.round($elements[id].width / h); i++) {
            grd += `<line x1='${h * i + $elements[id].x}' y1='${$elements[id].y}' x2='${h * i + $elements[id].x}' y2='${$elements[id].y + $elements[id].height}' stroke='${$elements[id].hPath.stroke}' stroke-width='${$elements[id].hPath.strokewidth}' stroke-dasharray='${$elements[id].hPath.strokedasharray}' opacity='${$elements[id].hPath.opacity}' stroke-linecap='${$elements[id].hPath.strokelinecap}' stroke-linejoin='${$elements[id].hPath.strokelinejoin}' stroke-miterlimit='${$elements[id].hPath.strokemiterlimit}' />`
        }
        let v = $elements[id].dY / $elements[id].nSubdivisions;
        for(let i = 0; i < Math.round($elements[id].height / v); i++) {
            grd += `<line x1='${$elements[id].x}' y1='${i * v + $elements[id].y}' x2='${$elements[id].x + $elements[id].width}' y2='${i * v + $elements[id].y}' stroke='${$elements[id].vPath.stroke}' stroke-width='${$elements[id].vPath.strokewidth}' stroke-dasharray='${$elements[id].vPath.strokedasharray}' opacity='${$elements[id].vPath.opacity}' stroke-linecap='${$elements[id].vPath.strokelinecap}' stroke-linejoin='${$elements[id].vPath.strokelinejoin}' stroke-miterlimit='${$elements[id].vPath.strokemiterlimit}'/>`
        }
    }
    for(let i = 0; i < Math.round($elements[id].width / $elements[id].dX); i++) {
        grd += `<line x1='${$elements[id].dX * i + $elements[id].x + $elements[id].dx}' y1='${$elements[id].y}' x2='${$elements[id].dX * i + $elements[id].x + $elements[id].dx}' y2='${$elements[id].y + $elements[id].height}' stroke='${$elements[id].HPath.stroke}' stroke-width='${$elements[id].HPath.strokewidth}' stroke-dasharray='${$elements[id].HPath.strokedasharray}' opacity='${$elements[id].HPath.opacity}' stroke-linecap='${$elements[id].HPath.strokelinecap}' stroke-linejoin='${$elements[id].HPath.strokelinejoin}' stroke-miterlimit='${$elements[id].HPath.strokemiterlimit}'/>`
    }
    for(let i = 0; i < Math.round($elements[id].height / $elements[id].dY); i++) {
        grd += `<line x1='${$elements[id].x}' y1='${$elements[id].dY * i + $elements[id].y + $elements[id].dy}' x2='${$elements[id].x + $elements[id].width}' y2='${$elements[id].dY * i + $elements[id].y + $elements[id].dy}' stroke='${$elements[id].VPath.stroke}' stroke-width='${$elements[id].VPath.strokewidth}' stroke-dasharray='${$elements[id].VPath.strokedasharray}' opacity='${$elements[id].VPath.opacity}' stroke-linecap='${$elements[id].VPath.strokelinecap}' stroke-linejoin='${$elements[id].VPath.strokelinejoin}' stroke-miterlimit='${$elements[id].VPath.strokemiterlimit}'/>`
    }
    grd +=`
    </g>`;
    return grd;
}
const elementString = (id) => {
        let paths = "";
        switch ($elements[id].tag) {
            case "path": {
                paths += `
    <path  
        id='${id}'
        d='${$elements[id].d}'
        fill='${$elements[id].fill}'
        fill-rule='${$elements[id].fillrule}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        stroke-linejoin='${$elements[id].strokelinejoin}'
        stroke-miterlimit='${$elements[id].strokemiterlimit}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        marker-start='${$elements[id].markerStart}'
        marker-mid='${$elements[id].markerMid}'
        marker-end='${$elements[id].markerEnd}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "text": {
                paths += `
    <text  
        id='${id}'
        x='${$elements[id].x}'
        y='${$elements[id].y}'
        font-size='${$elements[id].fontSize}px'
        font-weight='${$elements[id].fontWeight}'
        font-family='${$elements[id].fontFamily || "Roboto, sans-serif"}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${
                    $elements[id].tm.c
                } ${$elements[id].tm.d} ${$elements[id].tm.e} ${
                    $elements[id].tm.f
                })'
    >`;
                if ($elements[id].isTextOnPath) {
                    paths += `
        <textPath
            href='#${$elements[id].href}'
            startOffset='${$elements[id].startOffset}%'
        >
            ${$elements[id].content}
        </textPath>
    </text>
                        }`;
                } else {
                    paths += `
        ${$elements[id].content}
    </text>`;
                }

                break;
            }
            case "latex": {
                paths += `
    <g  
        id='${id}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    >${$elementsNode[id].innerHTML}
    </g>
                        `;
                break;
            }
            case "plot": {
                paths += `
    <g  
        id='${id}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    >
                        `;
                $elements[id].children.forEach((elem) => {
                    if ($elements[elem].children) {
                        paths += groupString(elem);
                    } else {
                        paths += elementString(elem);
                    }
                });
        paths += "</g>";
                break;
            }
            case "circle": {
                paths += `
    <circle  
        id='${id}'
        cx='${$elements[id].cx}'
        cy='${$elements[id].cy}'
        r='${$elements[id].r}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "ellipse": {
                paths += `
    <ellipse  
        id='${id}'
        cx='${$elements[id].cx}'
        cy='${$elements[id].cy}'
        rx='${$elements[id].rx}'
        ry='${$elements[id].ry}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "rect": {
                paths += `
    <rect  
        id='${id}'
        x='${$elements[id].x}'
        y='${$elements[id].y}'
        width='${$elements[id].width}'
        height='${$elements[id].height}'
        rx='${$elements[id].rx}'
        ry='${$elements[id].ry}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "line": {
                paths += `
    <line  
        id='${id}'
        x1='${$elements[id].x1}'
        y1='${$elements[id].y1}'
        x2='${$elements[id].x2}'
        y2='${$elements[id].y2}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "regular": {
                paths += `
    <polygon  
        id='${id}'
        points='${$elements[id].points}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        stroke-linecap='${$elements[id].strokelinecap}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case "image": {
                paths += `
    <image  
        id='${id}'
        href='${$elements[id].href}'
        x='${$elements[id].x}'
        y='${$elements[id].y}'
        width='${$elements[id].width}'
        height='${$elements[id].height}'
        rx='${$elements[id].rx}'
        ry='${$elements[id].ry}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        filter='${$elements[id].filter}'
        mask='${$elements[id].mask}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    />
                        `;
                break;
            }
            case 'grid': {
                paths += gridString(id);
                break;
            }
        }
        return paths;
};
const markerString = (id) => {
        let mrkr = "";
        mrkr += `
    <marker 
        id='${id}'
        refX='${$defs[id].refX}'
        refY='${$defs[id].refY}'
        markerWidth='${$defs[id].markerWidth}'
        markerHeight='${$defs[id].markerHeight}'
        markerUnits='${$defs[id].markerUnits}'
        orient='${$defs[id].orient}'
        viewBox='${$defs[id].viewBox}'
        preserveAspectRatio='${$defs[id].preserveAspectRatio}'
    >
        <path 
            d="${$defs[id].path.d}"
            fill='${$defs[id].path.fill}'
            stroke='${$defs[id].path.stroke}'
            stroke-width='${$defs[id].path.strokewidth}'
            stroke-dasharray='${$defs[id].path.strokedasharray}'
            opacity='${$defs[id].path.opacity}'
            filter='${$defs[id].path.filter}'
            transform='matrix(${$defs[id].path.tm.a} ${$defs[id].path.tm.b} ${$defs[id].path.tm.c} ${$defs[id].path.tm.d} ${$defs[id].path.tm.e} ${$defs[id].path.tm.f})'
        />
    </marker>
        `;
        return mrkr;
};
const defsString = (id) => {
        let fltrs = "";
        switch ($defs[id].tag) {
            case "textMask": {
                fltrs += `
    <mask id='${id}'>
                    `;
                switch ($elements[$defs[id].shape].tag) {
                    case "circle": {
                        fltrs += `
        <circle 
            cx='${$elements[$defs[id].shape].cx}'
            cy='${$elements[$defs[id].shape].cy}'
            r='${$elements[$defs[id].shape].r}'
            fill='white'
            stroke='${$elements[$defs[id].shape].stroke}'
            stroke-width='${$elements[$defs[id].shape].strokewidth}'
            stroke-dasharray='${$elements[$defs[id].shape].strokedasharray}'
            transform='matrix(${$elements[$defs[id].shape].tm.a} ${
                            $elements[$defs[id].shape].tm.b
                        } ${$elements[$defs[id].shape].tm.c} ${
                            $elements[$defs[id].shape].tm.d
                        } ${$elements[$defs[id].shape].tm.e} ${
                            $elements[$defs[id].shape].tm.f
                        })'
        />
                        `;
                        break;
                    }
                    case "rect": {
                        fltrs += `
        <rect 
            x='${$elements[$defs[id].shape].x}'
            y='${$elements[$defs[id].shape].y}'
            width='${$elements[$defs[id].shape].width}'
            height='${$elements[$defs[id].shape].height}'
            rx='${$elements[$defs[id].shape].rx}'
            ry='${$elements[$defs[id].shape].ry}'
            fill='white'
            stroke='${$elements[$defs[id].shape].stroke}'
            stroke-width='${$elements[$defs[id].shape].strokewidth}'
            stroke-dasharray='${$elements[$defs[id].shape].strokedasharray}'
            transform='matrix(${$elements[$defs[id].shape].tm.a} ${
                            $elements[$defs[id].shape].tm.b
                        } ${$elements[$defs[id].shape].tm.c} ${
                            $elements[$defs[id].shape].tm.d
                        } ${$elements[$defs[id].shape].tm.e} ${
                            $elements[$defs[id].shape].tm.f
                        })'
        />
                        `;
                        break;
                    }
                    case "regular": {
                        fltrs += `
        <polygon  
            points='${$elements[$defs[id].shape].points}'
            fill='white'
            stroke='${$elements[$defs[id].shape].stroke}'
            stroke-width='${$elements[$defs[id].shape].strokewidth}'
            stroke-dasharray='${$elements[$defs[id].shape].strokedasharray}'
            transform='matrix(${$elements[$defs[id].shape].tm.a} ${
                            $elements[$defs[id].shape].tm.b
                        } ${$elements[$defs[id].shape].tm.c} ${
                            $elements[$defs[id].shape].tm.d
                        } ${$elements[$defs[id].shape].tm.e} ${
                            $elements[$defs[id].shape].tm.f
                        })'
        />
                        `;
                        break;
                    }
                    case "path": {
                        fltrs += `
        <path  
            d="${$elements[$defs[id].shape].d}"
            fill='white'
            stroke='${$elements[$defs[id].shape].stroke}'
            stroke-width='${$elements[$defs[id].shape].strokewidth}'
            stroke-dasharray='${$elements[$defs[id].shape].strokedasharray}'
            transform='matrix(${$elements[$defs[id].shape].tm.a} ${
                            $elements[$defs[id].shape].tm.b
                        } ${$elements[$defs[id].shape].tm.c} ${
                            $elements[$defs[id].shape].tm.d
                        } ${$elements[$defs[id].shape].tm.e} ${
                            $elements[$defs[id].shape].tm.f
                        })'
        />
                        `;
                        break;
                    }
                    case "image": {
                        fltrs += `
        <image  
            x='${$elements[$defs[id].shape].x}' 
            y='${$elements[$defs[id].shape].y}'
            width='${$elements[$defs[id].shape].width}'
            height='${$elements[$defs[id].shape].height}'
            rx='${$elements[$defs[id].shape].rx}'
            ry='${$elements[$defs[id].shape].ry}'
            href='${$elements[$defs[id].shape].href}'
            fill='white'
            preserveAspectRatio='${
                $elements[$defs[id].shape].preserveAspectRatio
            }'
            transform='matrix(${$elements[$defs[id].shape].tm.a} ${
                            $elements[$defs[id].shape].tm.b
                        } ${$elements[$defs[id].shape].tm.c} ${
                            $elements[$defs[id].shape].tm.d
                        } ${$elements[$defs[id].shape].tm.e} ${
                            $elements[$defs[id].shape].tm.f
                        })'
            
        />
                        `;
                        break;
                    }
                }
                for (let text of $defs[id].text) {
                    fltrs += `
        <text  
            x='${$elements[text].x}'
            y='${$elements[text].y}'
            font-size='${$elements[text].fontSize}px'
            font-weight='${$elements[text].fontWeight}'
            font-family='${$elements[text].fontFamily || "Roboto, sans-serif"}'
            transform='matrix(${$elements[text].tm.a} ${$elements[text].tm.b} ${
                        $elements[text].tm.c
                    } ${$elements[text].tm.d} ${$elements[text].tm.e} ${
                        $elements[text].tm.f
                    })'
        >${$elements[text].content}
        </text>
                    `;
                }
                fltrs += `       
    </mask>
                `;
                break;
            }
            case "shadow": {
                fltrs += `
    <filter 
        id='${id}'
        x='${$defs[id].x}%'
        y='${$defs[id].y}%'
        width='${$defs[id].width}%'
        height='${$defs[id].height}%'
    >
        <feDropShadow 
            dx='${$defs[id].dx}'
            dy='${$defs[id].dy}'
            stdDeviation='${$defs[id].stdDeviation}'
            flood-color='${$defs[id].floodcolor}'
            flood-opacity='${$defs[id].floodopacity}'
        />
    </filter>
                `;
                break;
            }
            case "blur": {
                fltrs += `
    <filter 
        id='${id}'
        x='${$defs[id].x}%'
        y='${$defs[id].y}%'
        width='${$defs[id].width}%'
        height='${$defs[id].height}%'
    >
        <feDropShadow 
            in='${$defs[id].input}'
            stdDeviation='${$defs[id].stdDeviation}'
            edgeMode='${$defs[id].edgeMode}'
        />
    </filter>
                `;
                break;
            }
            case "specularLighting": {
                fltrs += `
    <filter 
        id='${id}'
        x='${$defs[id].x}%'
        y='${$defs[id].y}%'
        width='${$defs[id].width}%'
        height='${$defs[id].height}%'
    >
        <feSpecularLighting
            result='${$defs[id].result}'
            specularExponent='${$defs[id].specularExponent}'
            specularConstant='${$defs[id].specularConstant}'
            lighting-color='${$defs[id].lightingColor}'
            surfaceScale='${$defs[id].surfaceScale}'
        >
            <fePointLight x='${$defs[id].point.x}' y='${$defs[id].point.y}' z='${$defs[id].point.z}'/>
        </feSpecularLighting> 
        <feComposite
            in='${$defs[id].input}'
            in2='${$defs[id].input2}'
            operator='${$defs[id].operator}'
            k1='${$defs[id].k1}'
            k2='${$defs[id].k2}'
            k3='${$defs[id].k3}'
            k4='${$defs[id].k4}' />
    </filter>
                `;
                break;
            }
            case "diffuseLighting": {
                fltrs += `
    <filter 
        id='${id}'
        x='${$defs[id].x}%'
        y='${$defs[id].y}%'
        width='${$defs[id].width}%'
        height='${$defs[id].height}%'
    >
        <feDiffuseLighting
            result='${$defs[id].result}'
            specularExponent='${$defs[id].specularExponent}'
            specularConstant='${$defs[id].specularConstant}'
            lighting-color='${$defs[id].lightingColor}'
            surfaceScale='${$defs[id].surfaceScale}'
        >
            <fePointLight x='${$defs[id].point.x}' y='${$defs[id].point.y}' z='${$defs[id].point.z}'/>
        </feDiffuseLighting> 
        <feComposite
            in='${$defs[id].input}'
            in2='${$defs[id].input2}'
            operator='${$defs[id].operator}'
            k1='${$defs[id].k1}'
            k2='${$defs[id].k2}'
            k3='${$defs[id].k3}'
            k4='${$defs[id].k4}' />
    </filter>
                `;
                break;
            }
        }
        return fltrs;
};

const groupString = (id) => {
        let paths = `
    <g  
        class='draggable'
        id='${id}'
        fill='${$elements[id].fill}'
        stroke='${$elements[id].stroke}'
        stroke-width='${$elements[id].strokewidth}'
        stroke-dasharray='${$elements[id].strokedasharray}'
        vector-effect='${$elements[id].vectorEffect}'
        opacity='${$elements[id].opacity}'
        mask='${$elements[id].mask}'
        filter='${$elements[id].filter}'
        transform='matrix(${$elements[id].tm.a} ${$elements[id].tm.b} ${$elements[id].tm.c} ${$elements[id].tm.d} ${$elements[id].tm.e} ${$elements[id].tm.f})'
    >
                        `;
        $elements[id].children.forEach((elem) => {
            if ($elements[elem].children) {
                paths += groupString(elem);
            } else {
                paths += elementString(elem);
            }
        });
        paths += "</g>";
        return paths;
};
const patternString = (id) => {
    let ptrn = '';
    ptrn += `
    <pattern 
        id='${id}'
        x='${$defs[id].x}'
        y='${$defs[id].y}'
        width='${$defs[id].width}'
        height='${$defs[id].height}'
        viewBox='${$defs[id].viewBox}'
        href='${$defs[id].href}'
        patternContentUnits='${$defs[id].patternContentUnits}'
        patternUnits='${$defs[id].patternUnits}'
        vector-effect='${$defs[id].vectorEffect}'
        opacity='${$defs[id].opacity}'
        filter='${$defs[id].filter}'
        mask='${$defs[id].mask}'
        patternTransform='matrix(${$defs[id].patternTransform.a} ${$defs[id].patternTransform.b} ${$defs[id].patternTransform.c} ${$defs[id].patternTransform.d} ${$defs[id].patternTransform.e} ${$defs[id].patternTransform.f})'
    >`
    ptrn += groupString($defs[id].child);
    ptrn += `
    </pattern>
    `
    return ptrn;
}
const copyCode = () => {
    copied = true;
    let x = 0,
        y = 0,
        width = 1000,
        height = 1000,
        text = "";
    if ($BBOX) {
        x = $BBOX.x;
        y = $BBOX.y;
        width = $BBOX.width;
        height = $BBOX.height;
    }
    if (copied) {
        let svgtagStart = `<svg width="100%" height="100%" viewBox="${x} ${y} ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>`;
        let lingradients = "";
        let radgradients = "";
        let fltrs = "";
        let mrkrs = "";
        Object.keys($defs).forEach((id) => {
            if ($defs[id].tag === "linearGradient") {
                lingradients += `
                    <linearGradient id='${id}' x1="${$defs[id].start.x}%" y1="${$defs[id].start.y}%" x2="${$defs[id].end.x}%" y2="${$defs[id].end.y}%" gradientUnits="${$defs[id].gradientUnits}" spreadMethod="${$defs[id].spreadMethod}">`;
                $defs[id].colors.forEach((color) => {
                    lingradients += `<stop offset="${color.offset}%" stop-color="${color.stopColor}"/>`;
                });
                lingradients += `</linearGradient>`;
            }
            if ($defs[id].tag === "radialGradient") {
                radgradients += `
                    <radialGradient id='${id}' cx="${$defs[id].center.x}%" cy="${$defs[id].center.y}%" fx="${$defs[id].focus.x}%" fy="${$defs[id].focus.y}%" r="${$defs[id].r}%" fr="${$defs[id].fr}%"  gradientUnits="${$defs[id].gradientUnits}" spreadMethod="${$defs[id].spreadMethod}">`;
                $defs[id].colors.forEach((color) => {
                    radgradients += `<stop offset="${color.offset}%" stop-color="${color.stopColor}"/>`;
                });
                radgradients += `</radialGradient>`;
            }
            if ($defs[id].tag === "marker") {
                mrkrs += markerString(id);
            } else if($defs[id].tag === 'pattern') {
                mrkrs += patternString(id);
            } else {
                fltrs += defsString(id);
            }
        });
        mrkrs += `</defs>`;
        let id,
            paths = `<g>`;
        $elements.Layers.forEach((layer) => {
            paths += groupString(layer);
        });

        paths += "</g>";
        text =
            svgtagStart +
            lingradients +
            radgradients +
            fltrs +
            mrkrs +
            paths +
            "</svg>";
        // svgData = '<?xml version="1.0" standalone="no"?>\r\n' + text;
        svgData = text;
        navigator.clipboard.writeText(text);
    }
};
const copyToClipboard = () => {
    //get the necessary elements
    //copied element has to be a single group
    let copiedText = JSON.stringify({ defs: $defs, elements: $elements });
    $clipboardData = copiedText
    alert('Copied elements')
    elementsToClipboard.open();
    // navigator.clipboard.writeText(copiedText);
    // console.log(copiedText);
    // copyElements[$selectedId] = $elements[$selectedId];
    // for(let i = 0; i < $elements[$selectedId].children.length; i++) {
    //     copyElements[$elements[$selectedId].children[i]] = $elements[$elements[$selectedId].children[i]];
    // }
    // dispatch('closeMenu');
};
const downloadSVG = () => {
    console.log('downloading svg...')
    let svgData = $svg.outerHTML;
    navigator.clipboard.writeText(svgData);
    var svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
    });
    svgUrl = URL.createObjectURL(svgBlob);
    svgCopiedToClipboard.open();
};
let isCanvas = false;
const downloadPNG = (evt) => {
    isCanvas = true;
};

// const downloadPNG = async (evt) => {
//     try {
//         await downloadSVG(false);
//         const img = new Image();
//         img.src = svgUrl;
//         console.log(img.src)
//         img.onload = () => {
//             const canvas = document.createElement("canvas");
//             canvas.width = pngScale * $BBOX.width;
//             canvas.height = pngScale * $BBOX.height;
//             const ctx = canvas.getContext("2d");
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             pngUrl = canvas.toDataURL("image/png", 1.0);
//             const a = document.createElement("a");
//             a.href = pngUrl;
//             a.download = "mydrawing.png";
//             a.append(canvas);
//             a.click();
//             a.remove();
//         };
//         img.onerror = (error) => { console.error('Image load error', error); };
        
//     } catch (err) {
//         alert('Failed to download png')
//     }
    
// };
const setBBox = () => {
    $isCrop = !$isCrop;
    isPNG = false;
    // if($isCrop) {
    //     let rect = new Rectangle({id: 'CropRect', layer:'Layer-'+$currentLayer, parent: 'Layer-'+$currentLayer});
    //     rect.strokedasharray = 5;
    //     $elements[rect.id] = rect;
    //     $elements[rect.parent].children.push(rect.id);
    //     $objectCount = $objectCount + 1;

    //     $elements = $elements;
    // }
    // if(!$isCrop) {
    //     if($selectedId === 'CropRect') {
    //         $BBOX = {
    //             x: $elements[$selectedId].sbox.tl.x,
    //             y: $elements[$selectedId].sbox.tl.y,
    //             width: $elements[$selectedId].sbox.br.x - $elements[$selectedId].sbox.tl.x,
    //             height: $elements[$selectedId].sbox.br.y - $elements[$selectedId].sbox.tl.y
    //         }
    //         $elements[$elements[$selectedId].parent].children.splice($elements[$elements[$selectedId].parent].children.length - 1, 1)
    //         delete $elements[$selectedId];
    //         $elements = $elements;
    //         $selectedId = null;
    //     }
    // }
    // $BBOX = $boundingBox.getBBox({stroke: true, defs: true, clipped: true});
    // dispatch('closeMenu');
};
const setPNG = () => {
    isPNG = !isPNG;
    $isCrop = false;
    // dispatch('closeMenu');
}
const centerCanvas = () => {
    if ($boundingBox) {
        let bb = $boundingBox.getBBox({
            stroke: true,
            defs: true,
            clipped: true,
        });
        let deltaV = {
            x: bb.x + bb.width / 2 - ($BBOX.x + $BBOX.width / 2),
            y: bb.y + bb.height / 2 - ($BBOX.y + $BBOX.height / 2),
        };
        $BBOX.x += deltaV.x;
        $BBOX.y += deltaV.y;
    }
};
const iconCanvas = () => {
    if ($boundingBox) {
        // let bb = $boundingBox.getBBox({stroke: true, defs: true, clipped: true});
        // let deltaV = {
        //     x: (bb.x + bb.width/2) - ($BBOX.x + $BBOX.width/2),
        //     y: (bb.y + bb.height/2) - ($BBOX.y + $BBOX.height/2)
        // };
        // $BBOX.x += deltaV.x;
        // $BBOX.y += deltaV.y;
        $BBOX.x = 0;
        $BBOX.y = 0;
        $BBOX.width = 24;
        $BBOX.height = 24;
    }
};
const saveSymbol = () => {
    $symbol.elements = $elements;
    $symbol.defs = $defs;
    $symbol.viewBox = {
        x: $BBOX.x,
        y: $BBOX.y,
        width: $BBOX.width,
        height: $BBOX.height,
    };
    $symbol = $symbol;
    uploadSymbol = true;
};
const updateSymbolList = (evt) => {
    let symbol = evt.detail;
    $symbols = [...$symbols, symbol];
    uploadSymbol = false;
};
const getSymbol = async () => {
    showSymbols = !showSymbols;
    if (!symbolsDownloaded) {
        const res = await fetch("/api/vectorial/symbol");
        if (!res.ok) {
            alert("Failed to download symbols");
            return;
        }
        $symbols = await res.json();
        symbolsDownloaded = true;
    }
};
const insertSymbol = (symbol) => {
    // let path = new Path(symbol.image);
    // path.id = 'Path-' + $objectCount,
    // path.layer = $currentLayer,
    // path.order = $layers[$currentLayer].length;
    // $layers[$currentLayer].push('Path-' + $objectCount);
    // path.hydrate(symbol.image);
    // $layers = $layers;
    // $objectCount = $objectCount + 1;
    // $elements[path.id] = path;
    // $elements = $elements;
};
const saveDrawing = async () => {
    // let bb = $boundingBox.getBBox({stroke: true, defs: true, clipped: true})
    $DRAWING.elements = $elements;
    $DRAWING.defs = $defs;
    $DRAWING.viewBox = {
        x: $BBOX.x,
        y: $BBOX.y,
        width: $BBOX.width,
        height: $BBOX.height,
    };
    $DRAWING.appHistory = $appHistory;
    $DRAWING = $DRAWING;
    updateDrawing = true;
    dispatch('closeMenu');
};
const downloadDrawing = async () => {
    $DRAWING.elements = $elements;
    $DRAWING.defs = $defs;
    $DRAWING.viewBox = {
        x: $BBOX.x,
        y: $BBOX.y,
        width: $BBOX.width,
        height: $BBOX.height,
    };
    $DRAWING.appHistory = $appHistory;
    $DRAWING = $DRAWING;

    const jsonString = JSON.stringify($DRAWING, null, 2);
    const blob = new Blob([jsonString], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
const closeFile = async () => {
    let text = "Close without saving?";
    if (confirm(text) === true) {
        if (confirm) {
            goto(dispatchUrl);
        }
    }
};
const computeObjectCount = () => {
    let objcount = 0;
    let ids = Object.keys($elements);
    let defIds = Object.keys($defs);
    ids = [...ids, ...defIds];
    let counters = [];
    for(let i = 0; i < ids.length; i++) {
        let parts = ids[i].split('-');
        if(parts.length === 3) {
            counters.push(Number(parts[2]));
        }
    }
    if(counters.length > 0) {
        objcount = Math.max(...counters) + 1;
    } else {
        objcount = 0;
    }
    return objcount;
}
const updateElements = (drawing) => {
    //elements
    let elemIds = Object.keys(drawing.elements);
    elemIds.forEach((elemId) => {
        if (elemId !== "Layers") {
            if (drawing.elements[elemId].children) {
                drawing.elements[elemId].children.forEach(
                    (childId, index) => {
                        drawing.elements[elemId].children[index] =
                            childId.split("-")[0] +
                            "-" +
                            drawing.drawingID +
                            "-" +
                            (Number(childId.split("-")[2]) + $objectCount);
                    }
                );
            }
            //fill use filltype
            if (drawing.elements[elemId].fill?.includes("url")) {
                drawing.elements[elemId].fill =
                    drawing.elements[elemId].fill.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(drawing.elements[elemId].fill.split("-")[2].split(')')[0]) + $objectCount) + ')';
            }
            //stroke
            if (drawing.elements[elemId].stroke?.includes("url")) {
                drawing.elements[elemId].stroke =
                    drawing.elements[elemId].stroke.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(drawing.elements[elemId].stroke.split("-")[2].split(')')[0]) + $objectCount) + ')';
            }
            //markerStart, markerMid, markerEnd
            if (drawing.elements[elemId].markerStart?.includes("url")) {
                drawing.elements[elemId].markerStart =
                    drawing.elements[elemId].markerStart.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(drawing.elements[elemId].markerStart.split("-")[2].split(')')[0]) + $objectCount) + ')';
            }
            if (drawing.elements[elemId].markerMid?.includes("url")) {
                drawing.elements[elemId].markerMid =
                    drawing.elements[elemId].markerMid.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(drawing.elements[elemId].markerMid.split("-")[2].split(')')[0]) + $objectCount) + ')';
            }
            if (drawing.elements[elemId].markerEnd?.includes("url")) {
                drawing.elements[elemId].markerEnd =
                    drawing.elements[elemId].markerEnd.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(drawing.elements[elemId].markerEnd.split("-")[2].split(')')[0]) + $objectCount) + ')';
            }

            //mask
            if (drawing.elements[elemId].mask?.includes("url")) {
                let masks = drawing.elements[elemId].mask.split(" ");
                masks.forEach((mask, index) => {
                    if (mask.includes("url")) {
                        masks[index] =
                            mask.split("-")[0] +
                            "-" +
                            drawing.drawingID +
                            "-" +
                            (Number(mask.split("-")[2].split(')')[0]) + $objectCount) + ')';
                    }
                });
                drawing.elements[elemId].mask = masks.join(" ");
            }
            //filter
            if (drawing.elements[elemId].filter?.includes("url")) {
                let filters = drawing.elements[elemId].filter.split(" ");
                filters.forEach((filter, index) => {
                    if (filter.includes("url")) {
                        filters[index] =
                            filter.split("-")[0] +
                            "-" +
                            drawing.drawingID +
                            "-" +
                            (Number(filter.split("-")[2].split(')')[0]) + $objectCount) + ')';
                    }
                });
                drawing.elements[elemId].filter = filters.join(" ");
            }
            //layer, parent
            let layer = drawing.elements[elemId].layer?.split("-");
            if (layer && layer.length === 3) {
                drawing.elements[elemId].layer =
                    layer[0] + "-" + drawing.drawingID + "-" + (Number(layer[2]) + $objectCount);
            } else if (layer) {
                drawing.elements[elemId].layer =
                    layer[0] + "-" + drawing.drawingID + "-" + (Number(layer[1]) + $objectCount);
            }
            let parent = drawing.elements[elemId].parent?.split("-");
            if (parent && parent.length === 3) {
                drawing.elements[elemId].parent =
                    parent[0] + "-" + drawing.drawingID + "-" + (Number(parent[2]) + $objectCount);
            } else if (parent && parent.length === 2) {
                drawing.elements[elemId].parent =
                    parent[0] + "-" + drawing.drawingID + "-" + (Number(parent[1]) + $objectCount);
            } else if (parent) {
                drawing.elements[elemId].parent =
                    parent[0] + "-" + drawing.drawingID + "-" + 0;
            }
            let newId =
                elemId.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(elemId.split("-")[2]) + $objectCount);
            //id, layer, parent,
            drawing.elements[elemId].id = newId;
            delete Object.assign(drawing.elements, {
                [newId]: drawing.elements[elemId],
            })[elemId];
        }
    });
    drawing.elements["Layers"].forEach((layer, index) => {
        drawing.elements["Layers"][index] =
            layer.split("-")[0] +
            "-" +
            drawing.drawingID +
            "-" +
            (Number(layer.split("-")[2]) + $objectCount);
    });
};
const updateDefs = (drawing) => {
    //elements
    let elemIds = Object.keys(drawing.defs);
    elemIds.forEach((elemId) => {
        if (drawing.defs[elemId].children) {
            drawing.defs[elemId].children.forEach((childId, index) => {
                drawing.defs[elemId].children[index] =
                    childId.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(childId.split("-")[2]) + $objectCount);
            });
        }
        //fill use filltype
        if (drawing.defs[elemId].fill?.includes("url")) {
            drawing.defs[elemId].fill =
                drawing.defs[elemId].fill.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].fill.split("-")[2].split(')')[0]) + $objectCount) + ')';
        }
        //stroke
        if (drawing.defs[elemId].stroke?.includes("url")) {
            drawing.defs[elemId].stroke =
                drawing.defs[elemId].stroke.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].stroke.split("-")[2].split(')')[0]) + $objectCount) + ')';
        }
        //markerStart, markerMid, markerEnd
        if (drawing.defs[elemId].markerStart?.includes("url")) {
            drawing.defs[elemId].markerStart =
                drawing.defs[elemId].markerStart.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].markerStart.split("-")[2].split(')')[0]) + $objectCount) + ')';
        }
        if (drawing.defs[elemId].markerMid?.includes("url")) {
            drawing.defs[elemId].markerMid =
                drawing.defs[elemId].markerMid.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].markerMid.split("-")[2].split(')')[0]) + $objectCount) + ')';
        }
        if (drawing.defs[elemId].markerEnd?.includes("url")) {
            drawing.defs[elemId].markerEnd =
                drawing.defs[elemId].markerEnd.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].markerEnd.split("-")[2].split(')')[0]) + $objectCount) + ')';
        }

        //mask
        if (drawing.defs[elemId].mask?.includes("url")) {
            let masks = drawing.defs[elemId].mask.split(" ");
            masks.forEach((mask, index) => {
                if (mask.includes("url")) {
                    masks[index] =
                        mask.split("-")[0] +
                        "-" +
                        drawing.drawingID +
                        "-" +
                        (Number(mask.split("-")[2].split(')')[0]) + $objectCount) + ')';
                }
            });
            drawing.defs[elemId].mask = masks.join(" ");
        }
        //filter
        if (drawing.defs[elemId].filter?.includes("url")) {
            let filters = drawing.defs[elemId].filter.split(" ");
            filters.forEach((filter, index) => {
                if (filter.includes("url")) {
                    filters[index] =
                        filter.split("-")[0] +
                        "-" +
                        drawing.drawingID +
                        "-" +
                        (Number(filter.split("-")[2].split(')')[0]) + $objectCount) + ')';
                }
            });
            drawing.defs[elemId].filter = filters.join(" ");
        }
        //layer, parent
        let layer = drawing.defs[elemId].layer?.split("-");
        if (layer && layer.length === 3) {
            drawing.defs[elemId].layer =
                layer[0] + "-" + drawing.drawingID + "-" + (Number(layer[2]) + $objectCount);
        } else if (layer) {
            drawing.defs[elemId].layer =
                layer[0] + "-" + drawing.drawingID + "-" + layer[1];
        }
        let parent = drawing.defs[elemId].parent?.split("-");
        if (parent && parent.length === 3) {
            drawing.defs[elemId].parent =
                parent[0] + "-" + drawing.drawingID + "-" + (Number(parent[2]) + $objectCount);
        } else if (parent && parent.length === 2) {
            drawing.defs[elemId].parent =
                parent[0] + "-" + drawing.drawingID + "-" + (Number(parent[1]) + $objectCount);
        } else if (parent) {
            drawing.defs[elemId].parent =
                parent[0] + "-" + drawing.drawingID + "-" + 0;
        }
        if (drawing.defs[elemId].tag === "textMask") {
            drawing.defs[elemId].shape =
                drawing.defs[elemId].shape.split("-")[0] +
                "-" +
                drawing.drawingID +
                "-" +
                (Number(drawing.defs[elemId].shape.split("-")[2]) + $objectCount);
            let texts = drawing.defs[elemId].text;
            texts.forEach((text, index) => {
                texts[index] =
                    text.split("-")[0] +
                    "-" +
                    drawing.drawingID +
                    "-" +
                    (Number(text.split("-")[2]) + $objectCount);
            });
            drawing.defs[elemId].text = texts;
        }
        let newId =
            elemId.split("-")[0] +
            "-" +
            drawing.drawingID +
            "-" +
            (Number(elemId.split("-")[2]) + $objectCount);
        //id, layer, parent,
        drawing.defs[elemId].id = newId;
        delete Object.assign(drawing.defs, {
            [newId]: drawing.defs[elemId],
        })[elemId];
    });
};
const hydrateElement = (id) => {
    let elem;
    switch ($elements[id].tag) {
        case "g": {
            elem = new Group($elements[id]);
            break;
        }
        case "path": {
            elem = new Path($elements[id]);
            break;
        }
        case "regular": {
            elem = new Regular($elements[id]);
            break;
        }
        case "polyline": {
            elem = new Polyline($elements[id]);
            break;
        }
        case "line": {
            elem = new Line($elements[id]);
            break;
        }
        case "rect": {
            elem = new Rectangle($elements[id]);
            break;
        }
        case "circle": {
            elem = new Circle($elements[id]);
            break;
        }
        case "ellipse": {
            elem = new Ellipse($elements[id]);
            break;
        }
        case "text": {
            elem = new Text($elements[id]);
            break;
        }
        case "image": {
            elem = new Image($elements[id]);
            break;
        }
        case "latex": {
            elem = new Latex($elements[id]);
            break;
        }
        case "plot": {
            elem = new Plot($elements[id]);
            break;
        }
        case "grid": {
            elem = new Grid($elements[id]);
            break;
        }
    }
    elem.hydrate();
    $elements[id] = elem;

    $elements = $elements;
};
const hydrateElements = () => {
    //create transformList
    let elementList = Object.keys($elements).filter(
        (elemId) => elemId !== "Layers"
    );
    elementList.forEach((id) => {
        if ($elements[id]) hydrateElement(id);
    });
    $elements = $elements;
};
const pasteFromClipboard = async () => {
    let copiedText = $clipboardData;
    let drawing = JSON.parse(copiedText);
    
    drawing.drawingID = $DRAWING.drawingID;
    //augment $elements by copiedObj.copyElements
    //rename ids
    updateElements(drawing);
    updateDefs(drawing);
    //embed defs
    let defsKeys = Object.keys(drawing.defs);
    if(defsKeys) {
        for(let i = 0; i < defsKeys.length; i++) {
            $defs[defsKeys[i]] = drawing.defs[defsKeys[i]];
        }
        $defs = $defs;
    }
    let elemKeys = Object.keys(drawing.elements);
    if(elemKeys) {
        for(let i = 0; i < elemKeys.length; i++) {
            if(elemKeys[i] === 'Layers') {
                $elements['Layers'].push(...drawing.elements[elemKeys[i]]);
            } else {
                $elements[elemKeys[i]] = drawing.elements[elemKeys[i]];
            }
        }
        $elements = $elements;
        $objectCount = computeObjectCount();
        // console.log('Object count in file operations...', $objectCount)
    }
    // console.log('elements...', $elements)
    //hydrate objects
    hydrateElements();
    dispatch('closeMenu');
};
</script>
<article>
    <Paper style="padding:0;">
        <List dense>
            <!-- <Item on:SMUI:action={() => showHelp = !showHelp} style="background:{showHelp ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Graphic class="material-icons">help</Graphic>
                <Text>Help</Text>
            </Item> -->
            <Item on:SMUI:action={closeFile}>
                <Graphic class="material-icons">close</Graphic>
                <span class='listText'>Close file</span>
            </Item>
            <Item on:SMUI:action={setBBox} style="background:{$isCrop ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Graphic class="material-icons">crop</Graphic>
                <span class='listText'>Crop canvas</span>
            </Item>
            <Item on:SMUI:action={download}>
                <Graphic class="material-icons">share</Graphic>
                <span class='listText'>Open file in browser</span>
            </Item>
            <Item on:SMUI:action={downloadSVG} href={svgUrl} download="mydrawing.svg">
                <Graphic class="material-icons">polyline</Graphic>
                <!-- <Graphic>
                    <IconButton on:click={downloadSVG} href={svgUrl} download="mydrawing.svg">
                        <Icon class="material-icons">polyline</Icon>
                    </IconButton>
                </Graphic> -->
                <span class='listText'>Copy svg to clipboard</span>
            </Item>
            <Item on:SMUI:action={setPNG} style="background:{isPNG ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Graphic class="material-icons">image</Graphic>
                <span class='listText'>Download PNG</span>
            </Item>
            <Item on:SMUI:action={copyToClipboard}>
                <Graphic class="material-icons">copy_all</Graphic>
                <span class='listText'>Copy elements for another document</span>
            </Item>
            <Item on:SMUI:action={pasteFromClipboard}>
                <Graphic class="material-icons">content_copy</Graphic>
                <span class='listText'>Paste elements from another document</span>
            </Item>
            <Item on:SMUI:action={saveDrawing} style="background:{updateDrawing ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Graphic class="material-icons">save</Graphic>
                <span class='listText'>Save file</span>
            </Item>
            <Item on:SMUI:action={downloadDrawing} style="background:{updateDrawing ? 'rgba(255, 255, 255, 0.5)': 'none'}">
                <Graphic class="material-icons">save</Graphic>
                <span class='listText'>Download file</span>
            </Item>
            <Separator />
        </List> 
    </Paper>
    {#if $isCrop}
        <Card style="width:100%;">
            <Content>
                <h3 class="mdc-typography--headline6" style="margin:0">Crop canvas</h3>
                <div class="box">
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">X</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.x} />
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">Y</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.y} />
                                </label>
                            </span>
                        </div>
                    </div>
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">W</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.width} />
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">H</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.height} />
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </Content>
            <Actions>
                <Button on:click={centerCanvas}>Center</Button>
                <Button on:click={iconCanvas}>Icon</Button>
            </Actions>
        </Card>
        <Card>
            <Content>
                <h3 class="mdc-typography--headline6" style="margin:0">Canvas background</h3>
                <p>SVG file still has transparent background.</p>
                <Color bind:background={$canvasBackground} on:cancel={() => $isCrop = false}/>
            </Content>
        </Card>
    {/if}
    {#if isPNG}
        <!-- <div class="hbuttonsubgroup png"> -->
            <Card>
                <Content>
                    <div class="box">
                        <div class="attributeGroup">
                            <p style="font-weight:bold;margin-top:0;">SVG Dimensions</p>
                            <div class="action" style="padding:0">
                                <span class="text">W</span>
                                <span class="icon">
                                    {$BBOX.width}
                                </span>
                            </div>
                            <div class="action" style="padding:0">
                                <span class="text">H</span>
                                <span class="icon">
                                    {$BBOX.height}
                                </span>
                            </div>
                        </div>
                        <div class="attributeGroup">
                            <p style="font-weight:bold;margin-top:0;">PNG Dimensions</p>
                            <div class="action" style="padding:0">
                                <span class="text">W</span>
                                <span class="icon">
                                    {pngScale * $BBOX.width}
                                </span>
                            </div>
                            <div class="action" style="padding:0">
                                <span class="text">H</span>
                                <span class="icon">
                                    {pngScale * $BBOX.height}
                                </span>
                            </div>
                        </div>
                        <div class="action" style="padding:0">
                            <span class="text">Scale</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={pngScale} />
                                </label>
                            </span>
                        </div>
                    </div>
                    <!-- {#if svgUrl} -->
                    <!-- <img width="200px" src={svgUrl} alt='Preview' bind:this={pngImg}> -->
                    {#if isCanvas}
                        <DownloadPNG {pngScale}/>
                    {/if}
                </Content>
                <Actions>
                    <Button on:click={downloadPNG}>Create PNG</Button>
                    <Button on:click={() => (isPNG = false)}>Cancel</Button>
                </Actions>
            </Card>
        <!-- </div> -->
    {/if}
</article>
<Snackbar bind:this={svgCopiedToClipboard} class="snackbarSuccess">
    <Label>SVG file copied to clipboard.</Label>
    <!-- <Actions> -->
      <IconButton class="material-icons" title="Dismiss" on:click={() => svgCopiedToClipboard.close()}>close</IconButton>
    <!-- </Actions> -->
</Snackbar>
<Snackbar bind:this={elementsToClipboard} class="snackbarSuccess">
    <Label>SVG elements copied to be paste into another document.</Label>
    <!-- <Actions> -->
      <IconButton class="material-icons" title="Dismiss" on:click={() => elementsToClipboard.close()}>close</IconButton>
    <!-- </Actions> -->
</Snackbar>
<!-- <div class="buttons">
    <IconButton on:click={saveDrawing} style="background:{updateDrawing ? 'rgba(255, 255, 255, 0.5)': 'none'}">
        <Icon class="material-icons">save</Icon>
    </IconButton>
</div> -->
<!-- <div class="hbuttongroup"> -->
    <!-- <div class="infoButton">
        
        <span
            class="info {showDownloadMode ? 'active' : ''}"
            on:click={() => (showDownloadMode = !showDownloadMode)}>?</span
        >
        <span class="icon">
            <a
                class="download"
                on:click={downloadSVG}
                href={svgUrl}
                download="mydrawing.svg"
                title="Download SVG file (SVG is copied to clipboard as well). Make sure to crop the image first."
                ><span class="material-icons">polyline</span></a
            >
        </span>
        {#if showDownloadMode}
            <div class="infoPanel">
                <h3 style="padding-top:0">Download SVG</h3>
                <p>
                    Download SVG file (SVG is copied to clipboard as well). Make
                    sure to crop the image first.
                </p>
            </div>
        {/if}
    </div> -->
<!-- </div> -->
<!-- <Dialog bind:open={$isCrop}>
    <Title>Crop canvas</Title> -->
    
<!-- </Dialog> -->
<!-- {#if $isCrop}

    <div class="hbuttonsubgroup crop">
        <Card style="width:100%;">
            <Content>
                <div class="box">
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">X</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.x} />
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">Y</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.y} />
                                </label>
                            </span>
                        </div>
                    </div>
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">W</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.width} />
                                </label>
                            </span>
                        </div>
                        <br />
                        <div class="action" style="padding:0">
                            <span class="text">H</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$BBOX.height} />
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </Content>
            <Actions>
                <Button on:click={centerCanvas}>Center</Button>
                <Button on:click={iconCanvas}>Icon</Button>
            </Actions>
        </Card>
        <Card>
            <Content>
                <h3 class="mdc-typography--headline6" style="margin:0">Canvas background</h3>
                <p>SVG file still has transparent background.</p>
                <Color bind:background={$canvasBackground} />
            </Content>
        </Card>
    </div>
{/if} -->
    

<style>
    article {
        width: 300px;
        display:flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 24px;
    }
    
    .attributeGroup {
        background: rgb(184, 183, 183);
        border-radius: 10px;
        color: rgb(3, 3, 3);
        padding: 1em;
        margin: 1em 0;
    }
    .action {
        padding: 0.5em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon input {
        height: 2em;
        border-radius: 5px;
        width: 70px;
        outline: none;
        border: none;
    }
    .box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        align-items: center;
        justify-content: center;
    }
    .text {
        font-weight: bold;
        font-size: 1.2em;
        margin-right: 0.5em;
    }
    .listText {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

