<script lang='ts'>
    //@ts-nocheck
    import {elementsNode, selectedElement, elements, svg, selectedId, selectedGroupId, activeElement, Z, showBBoxControls} from './stores';
    export let id;//
    const gethShifts = () => {
        let hlist = [];
        let h = $elements[id].dX / $elements[id].nSubdivisions;
        let nx = Math.round($elements[id].width / h);
        for(let i = 0; i <= nx; i++) {
            hlist = [...hlist, h * i + $elements[id].x]
        }
        return hlist;
    }
    const getvShifts = () => {
        let vlist = [];
        let v = $elements[id].dY / $elements[id].nSubdivisions;
        let ny = Math.round($elements[id].height / v);
        for(let i = 0; i <= ny; i++) {
            vlist = [...vlist, v * i + $elements[id].y]
        }
        return vlist;
    }
    const getHShifts = () => {
        let Hlist = [];
        let nX = Math.round($elements[id].width / $elements[id].dX);
        for(let i = 0; i <= nX; i++) {
            Hlist = [...Hlist, $elements[id].dX * i + $elements[id].x + $elements[id].dx]
        }
        return Hlist;
    }
    const getVShifts = () => {
        let Vlist = [];
        let nY = Math.round($elements[id].height / $elements[id].dY);
        for(let i = 0; i <= nY; i++) {
            Vlist = [...Vlist, $elements[id].dY * i + $elements[id].y + $elements[id].dy]
        }
        return Vlist;
    }
</script>
<g 
    id={id}
    bind:this={$elementsNode[id]}
    class='draggable'
    fill={$elements[id].fill}
    stroke={$elements[id].stroke}
    stroke-width={$elements[id].strokewidth}
    stroke-dasharray={$elements[id].strokedasharray}
    vector-effect={$elements[id].vectorEffect}
    opacity={$elements[id].opacity}
    filter={$elements[id].filter}
    mask={$elements[id].mask}
    transform='matrix({$elements[id].tm.a} {$elements[id].tm.b} {$elements[id].tm.c} {$elements[id].tm.d} {$elements[id].tm.e} {$elements[id].tm.f})'
>   {#key $elements[id].x + $elements[id].y + $elements[id].width + $elements[id].height + $elements[id].dX + $elements[id].dY + $elements[id].nSubdivisions}
        {#if $elements[id].showSubdivisions}
            {#each gethShifts() as c}
                <line class="Vectorial" x1='{c}' y1='{$elements[id].y}' x2='{c}' y2='{$elements[id].y + $elements[id].height}' stroke='{$elements[id].hPath.stroke}' stroke-width='{$elements[id].hPath.strokewidth}' stroke-dasharray='{$elements[id].hPath.strokedasharray}' opacity={$elements[id].hPath.opacity} stroke-linecap={$elements[id].hPath.strokelinecap} stroke-linejoin={$elements[id].hPath.strokelinejoin} stroke-miterlimit={$elements[id].hPath.strokemiterlimit} />
            {/each}
            {#each getvShifts() as c}
                <line class="Vectorial" x1='{$elements[id].x}' y1='{c}' x2='{$elements[id].x + $elements[id].width}' y2='{c}' stroke='{$elements[id].vPath.stroke}' stroke-width='{$elements[id].vPath.strokewidth}' stroke-dasharray='{$elements[id].vPath.strokedasharray}' opacity={$elements[id].vPath.opacity} stroke-linecap={$elements[id].vPath.strokelinecap} stroke-linejoin={$elements[id].vPath.strokelinejoin} stroke-miterlimit={$elements[id].vPath.strokemiterlimit} />
            {/each}
            {#each getHShifts() as c}
                <line class="Vectorial" x1='{c}' y1='{$elements[id].y}' x2='{c}' y2='{$elements[id].y + $elements[id].height}' stroke='{$elements[id].HPath.stroke}' stroke-width='{$elements[id].HPath.strokewidth}' stroke-dasharray='{$elements[id].HPath.strokedasharray}' opacity={$elements[id].HPath.opacity} stroke-linecap={$elements[id].HPath.strokelinecap} stroke-linejoin={$elements[id].HPath.strokelinejoin} stroke-miterlimit={$elements[id].HPath.strokemiterlimit} />
            {/each}
            {#each getVShifts() as c}
                <line class="Vectorial" x1='{$elements[id].x}' y1='{c}' x2='{$elements[id].x + $elements[id].width}' y2='{c}' stroke='{$elements[id].VPath.stroke}' stroke-width='{$elements[id].VPath.strokewidth}' stroke-dasharray='{$elements[id].VPath.strokedasharray}' opacity={$elements[id].VPath.opacity} stroke-linecap={$elements[id].VPath.strokelinecap} stroke-linejoin={$elements[id].VPath.strokelinejoin} stroke-miterlimit={$elements[id].VPath.strokemiterlimit} />
            {/each}
        {/if}
    {/key}
</g>

<style>
	

</style>