<script lang='ts'>
    //@ts-nocheck
    import { onMount } from "svelte";
    export let pathname;
    export let origin;
    
    $: pathComponents = pathname.split('/').map((c, i) => {return {id: Math.random(), component: c}});
    $: pathUrls = pathComponents.map((u, index) => {
        let path = origin;
        for(let i = 0; i <= index; i++) {
            path += pathComponents[i].component + '/';
        }
        return path;
    })
    // $: console.log(pathComponents);
</script>
<style>
    .paths {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .paths a {
        text-decoration: none;
    }
</style>
<div class="paths">
                    
    {#each pathComponents as pathComponent, i (pathComponent.id)}
        <a href="{pathUrls[i]}">{pathComponent.component}</a> 
        <span class="material-symbols-outlined">
            {i > 0 && i < pathComponents.length - 1 ? 'chevron_right': ''}
        </span>
    {/each}
    
</div>