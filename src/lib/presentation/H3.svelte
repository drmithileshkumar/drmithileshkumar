<script>
    import {fade, fly} from 'svelte/transition';
    import {presentationMode, currentSlide} from '$lib/pages/notes/maths/stores';
    export let isActive = -1;
</script>
<style>
    .currentActive {
        /* background: gray; */
        color: tomato;
        /* padding: 1em; */
        border-radius: 10px;
        transition: all 1s;
    }
    h3 {
        font-size: 1.2em;
    }
</style>
{#if $presentationMode}
<h3 class="{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}" 
    transition:fly|global="{{ x: 200, duration: 1000}}"
    on:introstart={() => {isActive = -1}}
    on:introend={() => {isActive = $currentSlide}}
    on:outroend={() => {isActive = -1}}
    >
    <slot />
</h3>
{:else}
    <h3 class="{$$restProps.class || ''}">
        <slot />
    </h3>
{/if}