<script>
// @ts-nocheck
    import {ripple} from '$lib/ui/ripple';
    export let segments;
    export let selected;
    export let label = '';
    export let singleSelect = false;
    let selection = new Set();
    const handleSelected = (item) => {
        if(singleSelect) {
            selected = item;
        } else {
            selection.add(item);
            selected = Array.from(selection);
        }
    }
</script>
<style>
    .segmentedButton {
        display: flex;
        flex-direction: row;
        border: 1px solid rgb(186, 186, 186);
        border-radius: 6px;
        align-items: center;
        justify-content: flex-start;
        height: 2.5em;
        width: fit-content;
        flex-wrap: wrap;
    }
    
    .segment {
        border-left: 1px solid rgb(186, 186, 186);
        /* padding: 0.5em 0.9em; */
        padding: 0 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: inherit;
        min-width: 2.5em;
        position: relative;
        overflow: hidden;
    }
    .segment:hover {
        background-color: rgba(0, 100, 150, 0.05);
    }
    .selected {
        background-color: rgba(0, 100, 150, 0.1);
        color: var(--dark);
    }
    .segment:first-child {
        border-left: none;
    }
    .label {
        font-size: 0.7em;
        padding: 0 0.2em;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
    }
</style>
<div class="container">
    {#if label.length > 0}
        <span class="label">{label}</span>
    {/if}
    <div class="segmentedButton">
        {#each segments as segment}
            <span use:ripple class="segment {singleSelect ? selected === segment ? 'selected' : '' : selected && selected.indexOf(segment) !== -1 ? 'selected' : ''}" on:click={ () => handleSelected(segment)} >
                <slot segment={segment}></slot>
            </span>
        {/each}
    </div>
</div>
