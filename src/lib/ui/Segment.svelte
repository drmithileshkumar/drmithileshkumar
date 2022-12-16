<script>
// @ts-nocheck
    import {createEventDispatcher} from 'svelte';
    export let segment;
    export let title;
    let dispatch = createEventDispatcher();
    const dispatcher = (event) => {
        event.preventDefault();
        dispatch('click$preventDefault', {});
    }
</script>
<style>
    .segment {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
</style>
<span class="segment" {title} on:click={dispatcher}>
    <slot>
        <span {title}>{segment}</span>
    </slot>
</span>