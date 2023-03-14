<script>
    
    import { spring } from 'svelte/motion';
    import {onMount} from 'svelte';
    
    import Nav from '$lib/components/Nav.svelte';
    import Analytics from '$lib/components/Analytics.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    let showmenu = true;
    let W;
    let menuwidth = spring(200, {stiffness: 0.1, damping: 0.5});
    $: menuwidth.set(showmenu ? 200 : 0);
    
</script>
<Analytics />
<Nav />
<div class="container" bind:clientWidth={W}>
    <!-- <div class="leftpanel" style="width: {$menuwidth}px">
        <Login />
    </div>
    <div class="menucontrol" on:click={() => showmenu = !showmenu}>
        {#if showmenu}
            <span style="font-size: 10px;">&#9664;</span>
        {:else}
            <span style="font-size: 10px;">&#9654;</span>
        {/if}
        
    </div>
    <div class="contentpanel" style="width: {W - $menuwidth - 10}px; box-sizing:border-box;">
        <slot />
    </div>     -->
    <slot />
    
</div>
<Footer />
<style>
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        padding: 1em;
    }
    /* .leftpanel {
        grid-area: leftpanel;
        height: 100vh;
        overflow: auto;
        scrollbar-width: thin;
        box-sizing: border-box;
    }
    
    .contentpanel {
        grid-area: contentpanel;
        padding: 0.5em;
        height: fit-content;
        font-weight: 500;
        word-spacing: 0.13em;
        line-height: 1.45;
        box-sizing: border-box;
    } */

    ::-webkit-scrollbar {
        width: 10px;
    }
</style>
