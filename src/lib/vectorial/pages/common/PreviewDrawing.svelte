<script lang='ts'>
    //@ts-nocheck
    import PreviewBlur from './PreviewBlur.svelte';
    import PreviewShadow from './PreviewShadow.svelte';
    import PreviewMarker from './PreviewMarker.svelte';
    import PreviewGroup from './PreviewGroup.svelte';
    import PreviewSpecularLighting from './PreviewSpecularLighting.svelte';
    import PreviewDiffuseLighting from './PreviewDiffuseLighting.svelte';
    import PreviewTextMask from './PreviewTextMask.svelte';
    import PreviewPattern from './PreviewPattern.svelte';
    export let drawing;
    export let innerHTML = '';
</script>
<svg bind:this={innerHTML} width="100%" height="100%" viewBox="{parseFloat(drawing.viewBox.x) - 10} {parseFloat(drawing.viewBox.y) - 10} {parseFloat(drawing.viewBox.width) + 20} {parseFloat(drawing.viewBox.height) + 20}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- svelte-ignore component-name-lowercase -->
    <defs>
        {#each Object.keys(drawing.defs) as def}
            {#if drawing.defs[def].tag === 'textMask'}
                <PreviewTextMask textMask={drawing.defs[def]} elements={drawing.elements} />
            {/if}
            {#if drawing.defs[def].tag === 'blur'}
                <PreviewBlur blur={drawing.defs[def]} />
            {/if}
            {#if drawing.defs[def].tag === 'shadow'}
                <PreviewShadow shadow={drawing.defs[def]} />
            {/if}
            {#if drawing.defs[def].tag === 'specularLighting'}
                <PreviewSpecularLighting specularLighting={drawing.defs[def]} />
            {/if}
            {#if drawing.defs[def].tag === 'diffuseLighting'}
                <PreviewDiffuseLighting diffuseLighting={drawing.defs[def]} />
            {/if}
            {#if drawing.defs[def].tag === 'linearGradient'}
                <linearGradient id={def} x1="{drawing.defs[def].start.x}%" y1="{drawing.defs[def].start.y}%" x2="{drawing.defs[def].end.x}%" y2="{drawing.defs[def].end.y}%" gradientUnits="{drawing.defs[def].gradientUnits}" spreadMethod="{drawing.defs[def].spreadMethod}">
                    {#each drawing.defs[def].colors as color}
                        <stop offset="{color.offset}" stop-color={color.stopColor}/>
                    {/each}
                </linearGradient>
            {/if}
            {#if drawing.defs[def].tag === 'radialGradient'}
                <radialGradient id={def} cx="{drawing.defs[def].center.x}%" cy="{drawing.defs[def].center.y}%" r="{drawing.defs[def].r}%" fx="{drawing.defs[def].focus.x}%" fy="{drawing.defs[def].focus.y}%" fr="{drawing.defs[def].fr}%" gradientUnits="{drawing.defs[def].gradientUnits}" spreadMethod="{drawing.defs[def].spreadMethod}">
                    {#each drawing.defs[def].colors as color}
                        <stop offset="{color.offset}" stop-color={color.stopColor}/>
                    {/each}
                </radialGradient>
            {/if}
            {#if drawing.defs[def].tag === 'marker'}
                <PreviewMarker marker={drawing.defs[def]} />
            {/if}
            {#if drawing.defs[def].tag === 'pattern'}
                <PreviewPattern ptrn={drawing.defs[def]} {drawing} />
            {/if}
        {/each}
    </defs>
    <g>
        {#each drawing.elements['Layers'] as layer}
            <PreviewGroup id={layer} drawing={drawing}/>
        {/each}
    </g>
    
</svg>