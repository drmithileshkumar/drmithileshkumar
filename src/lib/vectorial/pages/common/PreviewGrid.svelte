<script lang='ts'>
    //@ts-nocheck
    export let grd;
    const gethShifts = () => {
        let hlist = [];
        let h = grd.dX / grd.nSubdivisions;
        let nx = Math.round(grd.width / h);
        for(let i = 0; i <= nx; i++) {
            hlist = [...hlist, h * i + grd.x]
        }
        return hlist;
    }
    const getvShifts = () => {
        let vlist = [];
        let v = grd.dY / grd.nSubdivisions;
        let ny = Math.round(grd.height / v);
        for(let i = 0; i <= ny; i++) {
            vlist = [...vlist, v * i + grd.y]
        }
        return vlist;
    }
    const getHShifts = () => {
        let Hlist = [];
        let nX = Math.round(grd.width / grd.dX);
        for(let i = 0; i <= nX; i++) {
            Hlist = [...Hlist, grd.dX * i + grd.x + grd.dx]
        }
        return Hlist;
    }
    const getVShifts = () => {
        let Vlist = [];
        let nY = Math.round(grd.height / grd.dY);
        for(let i = 0; i <= nY; i++) {
            Vlist = [...Vlist, grd.dY * i + grd.y + grd.dy]
        }
        return Vlist;
    }
</script>
<g 
    id={grd.id}
    fill={grd.fill}
    stroke={grd.stroke}
    stroke-width={grd.strokewidth}
    stroke-dasharray={grd.strokedasharray}
    vector-effect={grd.vectorEffect}
    opacity={grd.opacity}
    filter={grd.filter}
    mask={grd.mask}
    transform='matrix({grd.tm.a} {grd.tm.b} {grd.tm.c} {grd.tm.d} {grd.tm.e} {grd.tm.f})'
>   {#key grd.x + grd.y + grd.width + grd.height}
        {#if grd.showSubdivisions}
            {#each gethShifts() as c}
                <line class="Vectorial" x1='{c}' y1='{grd.y}' x2='{c}' y2='{grd.y + grd.height}' stroke='{grd.hPath.stroke}' stroke-width='{grd.hPath.strokewidth}' stroke-dasharray='{grd.hPath.strokedasharray}' opacity={grd.hPath.opacity} stroke-linecap={grd.hPath.strokelinecap} stroke-linejoin={grd.hPath.strokelinejoin} stroke-miterlimit={grd.hPath.strokemiterlimit} />
            {/each}
            {#each getvShifts() as c}
                <line class="Vectorial" x1='{grd.x}' y1='{c}' x2='{grd.x + grd.width}' y2='{c}' stroke='{grd.vPath.stroke}' stroke-width='{grd.vPath.strokewidth}' stroke-dasharray='{grd.vPath.strokedasharray}' opacity={grd.vPath.opacity} stroke-linecap={grd.vPath.strokelinecap} stroke-linejoin={grd.vPath.strokelinejoin} stroke-miterlimit={grd.vPath.strokemiterlimit} />
            {/each}
        {/if}
        {#each getHShifts() as c}
            <line class="Vectorial" x1='{c}' y1='{grd.y}' x2='{c}' y2='{grd.y + grd.height}' stroke='{grd.HPath.stroke}' stroke-width='{grd.HPath.strokewidth}' stroke-dasharray='{grd.HPath.strokedasharray}' opacity={grd.HPath.opacity} stroke-linecap={grd.HPath.strokelinecap} stroke-linejoin={grd.HPath.strokelinejoin} stroke-miterlimit={grd.HPath.strokemiterlimit} />
        {/each}
        {#each getVShifts() as c}
            <line class="Vectorial" x1='{grd.x}' y1='{c}' x2='{grd.x + grd.width}' y2='{c}' stroke='{grd.VPath.stroke}' stroke-width='{grd.VPath.strokewidth}' stroke-dasharray='{grd.VPath.strokedasharray}' opacity={grd.VPath.opacity} stroke-linecap={grd.VPath.strokelinecap} stroke-linejoin={grd.VPath.strokelinejoin} stroke-miterlimit={grd.VPath.strokemiterlimit} />
        {/each}
    {/key}
</g>

<style>
	

</style>