<script>
// @ts-nocheck
    import {createEventDispatcher} from 'svelte';
    import {clickOutside} from '$lib/vectorial/utils/clickOutside';
    let dispatch = createEventDispatcher();
    export let options = [];
    export let label = '';
    export let value;
    let showmenu = false;
    const select = () => {
        showmenu = true;
    }
    const setvalue = (option) => {
        value = option;
        showmenu = false;
        dispatch('selected');
    }
</script>
<style>
    fieldset {
        border-radius: 5px;
        /* min-width: 100px; */
        border: 1px solid;
        padding: 0.5em 0.2em;
        position: relative;
    }
    legend {
        font-size: 0.7em;
    }
    .value {
        padding: 0 0.5em;
        font-weight: bold;
        display: flex;
        cursor: pointer;
        height: 1.5em;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    li {
        cursor: pointer;
        padding: 0.5em 0;
        font-weight: 300;
        font-size: 0.8em;
    }

    li:hover, li:focus {
        font-weight: 500;
    }
    ul {
        position: absolute;
        list-style: none;
        box-shadow: 0 0 3px black;
        width: 100%;
        margin: 0;
        padding: 0.5em 0.5em;
        z-index: 100;
        background: white;
        margin-top: 0.3em;
        overflow: auto;
        max-height: 90vh;
    }
    
</style>

<fieldset  on:click={select}>
    <legend>
        {label}
    </legend>
    <span class="value">{value}</span>
    {#if showmenu}
    <ul on:change use:clickOutside on:outclick={() => showmenu = false}>
        {#each options as option}
            <li on:click={() => setvalue(option)}>
                {option}
            </li>
        {:else}
            <option value=null>No option</option>
        {/each}
    </ul>
    {/if}
</fieldset>