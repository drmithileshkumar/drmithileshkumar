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
</style>
{#if $presentationMode}
<h1 class="{$$restProps.class || ''} {$presentationMode && isActive === $currentSlide ? 'currentActive': ''}" 
    transition:fly="{{ x: 200, duration: 1000}}"
    on:introstart={() => {isActive = -1}}
    on:introend={() => {isActive = $currentSlide}}
    on:outroend={() => {isActive = -1}}
    >
    <slot />
</h1>
{:else}
    <h1 class="{$$restProps.class || ''}">
        <slot />
    </h1>
{/if}