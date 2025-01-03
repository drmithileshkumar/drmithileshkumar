<script lang='ts'>
    //@ts-nocheck
    import IconButton, { Icon } from '@smui/icon-button';
    import { Svg } from '@smui/common';
    import { Input } from '@smui/textfield';
    import { createEventDispatcher } from 'svelte';
    import {addingNodes, boundingBox} from '$lib/vectorial/pages/vectorial/stores';
    import {PAN, panX, panY, selectedId, elements} from '$lib/vectorial/pages/vectorial/stores';
    import PathOperations from "$lib/vectorial/pages/vectorial/PathOperations.svelte";
    import CanvasOperations from "$lib/vectorial/pages/vectorial/CanvasOperations.svelte";
    import ElementOperations from "$lib/vectorial/pages/vectorial/ElementOperations.svelte";
    import GroupOperations from '$lib/vectorial/pages/vectorial/GroupOperations.svelte';
    import HistoryOperations from "$lib/vectorial/pages/vectorial/HistoryOperations.svelte";
    let dispatch = createEventDispatcher();
    export let selectedTool = '';
    let inputValue = '', ctm;
    let takingControls = false,
        inputElementId, elementAvailable = true, showMoreOperations = false;
    const doAction = (selectedAction) => {
        if(selectedAction === 'AddNode') $addingNodes = true;
        dispatch('doAction', {selectedAction, inputValue})
    }
    const resetBoundingbox = (evt) => {
        ctm = $boundingBox.getScreenCTM().inverse();
    }
</script>
<div class="actions noScrollBar">
    
        {#if selectedTool === 'Shapes'}
            <IconButton size="button" on:click={() => doAction('Line')}>
                <Icon component={Svg} viewBox="-45 -25 50 50">
                    <line
                        x1="-35"
                        y1="-20"
                        x2="0"
                        y2="20"
                        stroke="currentColor"
                        fill="none"
                        stroke-width="5"
                    />
                </Icon>
            </IconButton>
            <IconButton size="button" on:click={() => doAction('Circle')}>
                <Icon class="material-icons">
                    circle
                </Icon>
            </IconButton>
            <IconButton size="button" on:click={() => doAction('Ellipse')}>
                <Icon component={Svg} viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="12" ry="8" fill="currentColor" stroke-width="0" />
                </Icon>
            </IconButton>
            <!-- <IconButton size="button" on:click={createEllipse}>
                <Icon component={Svg} viewBox="-45 -25 90 50">
                    <ellipse rx="40" ry="20" cx="0" cy="0" stroke="black" fill='black' stroke-width="1" />
                </Icon>
            </IconButton> -->
            <IconButton size="button" on:click={() => doAction('Rectangle')}>
                <Icon class="material-icons">
                    square
                </Icon>
            </IconButton>
            <IconButton size="button" on:click={() => doAction('Regular')}>
                <Icon class="material-icons">
                    hexagon
                </Icon>
            </IconButton>
        {/if}
        {#if selectedTool === 'Text'}
            <div class="textInput">
                <Input
                    bind:value={inputValue}
                    placeholder="Text"
                    class="solo-input"
                />
                <IconButton size="button" on:click={() => doAction('Text')}>
                    <Icon class="material-icons">arrow_right_alt</Icon>
                </IconButton>
            </div>
        {/if}
        {#if selectedTool === 'LaTeX'}
            <div class="textInput">
                <Input
                    bind:value={inputValue}
                    placeholder="LaTeX"
                    class="solo-input"
                />
                <IconButton size="button" on:click={() => doAction('LaTeX')}>
                    <Icon class="material-icons">arrow_right_alt</Icon>
                </IconButton>
            </div>
        {/if}
        {#if selectedTool === 'Plot'}
            <div class="textInput">
                <Input
                    bind:value={inputValue}
                    placeholder="Plot function"
                    class="solo-input"
                />
                <IconButton size="button" on:click={() => doAction('Plot')}>
                    <Icon class="material-icons">arrow_right_alt</Icon>
                </IconButton>
            </div>
        {/if}
        {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path'}
            <PathOperations
                bind:inputElementId
                bind:takingControls
            />
        {/if}
        {#if $selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'g'}
            <GroupOperations />
        {/if}
    
    
</div>
<style>
    .actions {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
        justify-content: start;
        flex: 1;
        min-width:100%;
        overflow-x: auto;
    }

    * :global(.solo-input) {
        padding-left: 0.5em;
        flex-grow: 1;
        color: var(--mdc-theme-on-surface);
    }
    * :global(.solo-input::placeholder) {
        color: var(--mdc-theme-on-surface);
        opacity: 0.6;
    }
    .textInput {
        display: flex;
        align-items: center;
    }
</style>