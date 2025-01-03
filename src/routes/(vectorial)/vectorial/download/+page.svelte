<script id="MathJax-script">
    //@ts-nocheck
    import {defs, elements, BBOX} from '$lib/vectorial/pages/vectorial/stores';
    import PreviewGroup from '$lib/vectorial/pages/common/PreviewGroup.svelte';
    import PreviewShadow from '$lib/vectorial/pages/common/PreviewShadow.svelte';
    import PreviewBlur from '$lib/vectorial/pages/common/PreviewBlur.svelte';
    import PreviewTextMask from '$lib/vectorial/pages/common/PreviewTextMask.svelte';
    import PreviewDiffuseLighting from '$lib/vectorial/pages/common/PreviewDiffuseLighting.svelte';
    import PreviewSpecularLighting from '$lib/vectorial/pages/common/PreviewSpecularLighting.svelte';
    import {onMount} from 'svelte';
    import PreviewMarker from '$lib/vectorial/pages/common/PreviewMarker.svelte';

    let x = 0, y = 0, width = 1000, height = 1000;
    onMount(() => {
        MathJax.typeset();
        if($BBOX) {
            x = $BBOX.x;
            y = $BBOX.y;
            width = $BBOX.width;
            height = $BBOX.height;
        }
    })
    const text2latex = (node, math) => {
        let mathoutput = MathJax.tex2svg(math);
        // $selectedId = element.id;
        let svg = mathoutput.children[0];
        svg.children[1].removeAttribute('stroke')
        svg.children[1].removeAttribute('fill');
        return svg.innerHTML;
    }
</script>
<style>

</style>
<svg width="100%" height="100%" viewBox="{x} {y} {width} {height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- svelte-ignore component-name-lowercase -->
    <defs>
        {#each Object.keys($defs) as def}
            {#if $defs[def].tag === 'textMask'}
                <PreviewTextMask textMask={$defs[def]} elements={$elements} />
            {/if}
            {#if $defs[def].tag === 'blur'}
                <PreviewBlur blur={$defs[def]} />
            {/if}
            {#if $defs[def].tag === 'shadow'}
                <PreviewShadow shadow={$defs[def]} />
            {/if}
            {#if $defs[def].tag === 'specularLighting'}
                <PreviewSpecularLighting specularLighting={$defs[def]} />
            {/if}
            {#if $defs[def].tag === 'diffuseLighting'}
                <PreviewDiffuseLighting diffuseLighting={$defs[def]} />
            {/if}
            {#if $defs[def].tag === 'linearGradient'}
                <linearGradient id={def} x1="{$defs[def].start.x}%" y1="{$defs[def].start.y}%" x2="{$defs[def].end.x}%" y2="{$defs[def].end.y}%" >
                    {#each $defs[def].colors as color}
                        <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                    {/each}
                </linearGradient>
            {/if}
            {#if $defs[def].tag === 'radialGradient'}
                <radialGradient id={def} cx="{$defs[def].center.x}%" cy="{$defs[def].center.y}%" r="{$defs[def].r}%" fx="{$defs[def].focus.x}%" fy="{$defs[def].focus.y}%" fr="{$defs[def].fr}%" >
                    {#each $defs[def].colors as color}
                        <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                    {/each}
                </radialGradient>
            {/if}
            {#if $defs[def].tag === 'marker'}
                <PreviewMarker marker={$defs[def]} />
            {/if}
        {/each}
    </defs>
    <g>
        {#each $elements.Layers as layer}
            <PreviewGroup id={layer} drawing={{elements: $elements}}/>
        {/each}
    </g>
</svg>