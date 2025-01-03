<script lang='ts'>
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Content,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Button, { Label } from '@smui/button';
    import IconButton, { Icon } from '@smui/icon-button';
    import { Svg } from '@smui/common';
    import { Input } from '@smui/textfield';
    import { createEventDispatcher } from 'svelte';
    import {addingNodes, boundingBox} from '$lib/vectorial/pages/vectorial/stores';
    import {PAN, panX, panY} from '$lib/vectorial/pages/vectorial/stores';
    import PathOperations from "$lib/vectorial/pages/vectorial/PathOperations.svelte";
    import CanvasOperations from "$lib/vectorial/pages/vectorial/CanvasOperations.svelte";
    import ElementOperations from "$lib/vectorial/pages/vectorial/ElementOperations.svelte";
    import GroupOperations from '$lib/vectorial/pages/vectorial/GroupOperations.svelte';
    import HistoryOperations from "$lib/vectorial/pages/vectorial/HistoryOperations.svelte";
    let dispatch = createEventDispatcher();
    export let selectedTool = '';
    let inputValue = '', ctm, isGettingn = false;
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
<div class="actions">
    <div class="left">
        {#if selectedTool === 'Shapes'}
        <!-- <Wrapper rich>
            <IconButton on:click={() => doAction('Line')}>
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
            <Tooltip>
                <Content>Draw line</Content>
            </Tooltip>
        </Wrapper> -->
        <Wrapper rich>
            <IconButton on:click={() => doAction('Circle')}>
                <Icon class="material-icons">
                    circle
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Draw circle</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => doAction('Ellipse')}>
                <Icon component={Svg} viewBox="0 0 24 24">
                    <ellipse cx="12" cy="12" rx="12" ry="8" fill="currentColor" stroke-width="0" />
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Draw ellipse</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => doAction('Rectangle')}>
                <Icon class="material-icons">
                    square
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Draw rectangle</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich style="display:flex;flex-direction:row;">
            <IconButton on:click={() => isGettingn = !isGettingn}>
                <Icon class="material-icons">
                    hexagon
                </Icon>
            </IconButton>
            {#if isGettingn}
                <div class="textInput">
                    <Input
                        type="number"
                        bind:value={inputValue}
                        placeholder="Number of sides"
                        class="solo-input"
                    />
                    <IconButton on:click={() => doAction('Regular')}>
                        <Icon class="material-icons">arrow_right_alt</Icon>
                    </IconButton>
                </div>
            {/if}
            <Tooltip>
                <Content>Draw regular polygon</Content>
            </Tooltip>
        </Wrapper>
        <Wrapper rich>
            <IconButton on:click={() => doAction('Grid')}>
                <Icon class="material-icons">
                    grid_on
                </Icon>
            </IconButton>
            <Tooltip>
                <Content>Create grid</Content>
            </Tooltip>
        </Wrapper>
        <!-- <Wrapper rich>
            <Tooltip>
                <Content></Content>
            </Tooltip>
        </Wrapper> -->
            
        {/if}
        {#if selectedTool === 'Text'}
            <div class="textInput">
                <Input
                    bind:value={inputValue}
                    placeholder="Text"
                    class="solo-input"
                />
                <IconButton on:click={() => doAction('Text')}>
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
                <IconButton on:click={() => doAction('LaTeX')}>
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
                <IconButton on:click={() => doAction('Plot')}>
                    <Icon class="material-icons">arrow_right_alt</Icon>
                </IconButton>
            </div>
        {/if}
        {#if selectedTool === 'Path' || selectedTool === 'Lasso'}
            <PathOperations
                bind:inputElementId
                bind:takingControls
            />
        {/if}
    </div>
    
    <div class="right">
        {#if showMoreOperations}
            <HistoryOperations />
            <CanvasOperations on:onZoom={resetBoundingbox} on:reset={resetBoundingbox}/>
            <ElementOperations bind:elementAvailable />
            <GroupOperations />
        {/if}
        <IconButton on:click={() => showMoreOperations = !showMoreOperations}>
            <Icon class="material-icons">more_vert</Icon>
        </IconButton>
    </div>
    
    
    
</div>
<style>
    .actions {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        min-width:100%;
    }
    .left, .right {
        display:flex;
        align-items: center;
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