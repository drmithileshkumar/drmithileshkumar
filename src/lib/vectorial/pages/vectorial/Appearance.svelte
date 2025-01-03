<script lang='ts'>
    //@ts-nocheck
    import Snackbar, { Actions, Label } from '@smui/snackbar';
    import Card, {Content} from '@smui/card';
    import IconButton, {Icon} from '@smui/icon-button';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import Slider from '$lib/vectorial/ui/Slider.svelte';
    import FormField from '$lib/vectorial/ui/FormField.svelte';
    import {svg, selectedId, elements, defs, objectCount, DRAWING, hasArrow, canvasBackground} from './stores';
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import Button from '@smui/button';
    import Color from '$lib/vectorial/components/Color.svelte';
    import SVGGroup from '$lib/vectorial/pages/vectorial/SVGGroup.svelte';
    import Textfield from '@smui/textfield';
    import ColorsInUse from './ColorsInUse.svelte';
    import {LinearGradient} from '$lib/vectorial/utils/common/linearGradient';
    import {RadialGradient} from '$lib/vectorial/utils/common/radialGradient';
    import {Pattern} from '$lib/vectorial/utils/common/pattern';
    import {Marker} from '$lib/vectorial/utils/common/marker';
    

            //strokelinecap='butt',//butt, round, square
            //strokelinejoin='miter',//arcs, bevel, miter, miter-clip, round
            //strokemiterlimit='4',//>=1
    import Chip, { Set, Text } from '@smui/chips';
 
    let arrowChoices = ['start', 'mid', 'end'];
    let selectedArrows = [];
    const linecaps = ['butt', 'round', 'square'];
    const linejoins = ['arcs', 'bevel', 'miter', 'miter-clip', 'round'];
    
    const fillparts = ['fill', 'stroke'];
    const filltypes = ['solid', 'linear', 'radial', 'pattern'];

    let filltype = $selectedId ? $elements[$selectedId]["filltype"]: '';
    let isNewLG = false, isNewRG = false, isNewPTRN = false;
    let selected = 'fill';
    let position = 'start';
    let currentLGId, currentRGId, currentPTRNId, takePatternGroupBar;
    const setStroke = (evt) => {
        $elements[$selectedId]['stroke'] = evt.detail.color;
        if($elements[$selectedId].tag === 'path') {
            if($elements[$selectedId].markerStart || $elements[$selectedId].markerMid || $elements[$selectedId].markerEnd) {
                setMarkerColor(evt.detail.color)
            }
        }
        $elements = $elements;
    }
    const setFill = (evt) => {
        // console.log('set color: ', evt.detail.color)
        $elements[$selectedId]['fill'] = evt.detail.color;
        $elements = $elements;
    }
    const createLinearGradient = () => {
        isNewLG = true;
        let lg = new LinearGradient({id: 'LinearGradient-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[lg.id] = lg;
        $elements[$selectedId]['fill'] = `url(#${lg.id})`;
        $elements[$selectedId]['filltype'] = 'linear';
        currentLGId = lg.id;
        $elements = $elements;
        $objectCount++;
    }
    const saveLinearGradient = () => {
        $defs = $defs
        isNewLG = false;
    }
    const removeLinearGradient = (lgrad) => {
        delete $defs[lgrad]
    }
    const editLinearGradient = (lgrad) => {
        currentLGId = lgrad;
        isNewLG = true;
    }
    const createRadialGradient = () => {
        isNewRG = true;
        let lg = new RadialGradient({id: 'RadialGradient-' +$DRAWING.drawingID + '-' + $objectCount})
    
        $defs[lg.id] = lg;
        $elements[$selectedId]['fill'] = `url(#${lg.id})`;
        $elements[$selectedId]['filltype'] = 'radial';
        currentRGId = lg.id;
        $elements = $elements;
        $objectCount++;
    }
    const saveRadialGradient = () => {
        $defs = $defs
        isNewRG = false;
    }
    const removeRadialGradient = (rgrad) => {
        delete $defs[rgrad]
    }
    const editRadialGradient = (lgrad) => {
        currentRGId = lgrad;
        isNewRG = true;
    }
    const setLinearGradient = (lg) => {
        $elements[$selectedId]['fill'] = `url(#${lg})`; 
        $elements[$selectedId]['filltype'] = 'linear';
        $elements = $elements;
        // x1 = lg.x1;
        // x2 = lg.x2;
        // y1 = lg.y1;
        // y2 = lg.y2;
        // colors = lg.colors;
    }
    const setRadialGradient = (lg) => {
        $elements[$selectedId]['fill'] = `url(#${lg})`; 
        $elements[$selectedId]['filltype'] = 'radial';
        $elements = $elements;
        // cx = lg.cx;
        // cy = lg.cy;
        // r = lg.r;
        // fx = lg.fx;
        // fy = lg.fy;
        // colors = lg.colors;
    }
    const createMarker = () => {
        $hasArrow = true;
        let arrow = new Marker({id: 'Arrow'});
        $defs[arrow.id] = arrow;
    }

    const setMarker = () => {
        if($selectedId && $elements[$selectedId] && $elements[$selectedId].tag === 'path') {
            $elements[$selectedId].markerStart = selectedArrows.indexOf('start') === -1 ? 'none' : 'url(#Arrow)';
            $elements[$selectedId].markerMid = selectedArrows.indexOf('mid') === -1 ? 'none' : 'url(#Arrow)';
            $elements[$selectedId].markerEnd = selectedArrows.indexOf('end') === -1 ? 'none' : 'url(#Arrow)';
            // for(let i = 0; i < selectedArrows.length; i++) {
            //     let position = selectedArrows[i];
            //     switch(position) {
            //         case 'start': {
            //             $elements[$selectedId].markerStart = $elements[$selectedId]['markerStart'].includes('Arrow') ? 'none' : 'url(#Arrow)';
            //             break;
            //         }
            //         case 'mid': {
            //             $elements[$selectedId].markerMid = $elements[$selectedId]['markerMid'].includes('Arrow') ? 'none' : 'url(#Arrow)';
            //             break;
            //         }
            //         case 'end': {
            //             $elements[$selectedId].markerEnd = $elements[$selectedId]['markerEnd'].includes('Arrow') ? 'none' : 'url(#Arrow)';
            //             break;
            //         }
            //     }
            // }
            
            $elements = $elements;
        }
    }
    const setMarkerColor = (color) => {
        let markerId = $elements[$selectedId]['markerEnd'];
        if(markerId === 'none') {
            markerId = $elements[$selectedId]['markerStart'];
        }
        if(markerId === 'none') {
            markerId = $elements[$selectedId]['markerMid'];
        }
        if(markerId && markerId !== 'none') {
            $defs[markerId.split('#')[1].split(')')[0]].path.fill = color;
            $defs[markerId.split('#')[1].split(')')[0]].path.stroke = color;
            $defs = $defs;
        }
    }
    const markerColor = (evt) => {
        setMarkerColor(evt.detail.fill)
    }
    const createPattern = () => {
        isNewPTRN = true;
        let ptrn = new Pattern({id: 'Pattern-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[ptrn.id] = ptrn;
        // $elements[$selectedId]['fill'] = `url(#${ptrn.id})`;
        // $elements[$selectedId]['filltype'] = 'linear';
        currentPTRNId = ptrn.id;
        $defs = $defs;
        $elements = $elements;
        $objectCount++;
        takePatternGroupBar.open();
        $svg.addEventListener('click', takePatternGroup);
        $svg.addEventListener('touchstart', takePatternGroup);
    }
    const takePatternGroup = (evt) => {
        evt.preventDefault();
        if($selectedId && $elements[$selectedId].tag === 'g') {
            $defs[currentPTRNId].child = $selectedId;
            $elements[$selectedId].patternId = currentPTRNId;
            $defs[currentPTRNId].viewBox = $elements[$selectedId].sbox.tl.x + ' ' + $elements[$selectedId].sbox.tl.y + ' ' + ($elements[$selectedId].bbox.width) + ' ' + ($elements[$selectedId].bbox.height);
            $defs = $defs;
            $svg.removeEventListener('click', takePatternGroup);
        }
    }
    const togglePattern = (ptrnId) => {
        let parent = $elements[$defs[ptrnId].child].parent;
        if($elements[parent].children.indexOf($defs[ptrnId].child) === -1) {
            $elements[parent].children = [...$elements[parent].children, $defs[ptrnId].child];
        } else {
            $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[ptrnId].child)
        }
        $elements = $elements;
    }
    const savePattern = () => {
        $defs = $defs
        isNewPTRN = false;
    }
    const removePattern = (ptrnId) => {
        delete $defs[ptrnId]
    }
    const editPattern = (ptrnId) => {
        currentPTRNId = ptrnId;
        isNewPTRN = true;
    }
    const setPattern = (ptrnId) => {
        $elements[$selectedId][selected] = `url(#${ptrnId})`; 
        $elements[$selectedId]['filltype'] = 'pattern';
        $elements = $elements;
    }
</script>
<style>
    article {
        width: 300px;
        /* padding-top: 1em; */
        margin-bottom: 1em;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .filltype {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
        margin-bottom: 0.5em;
    }
    .circle {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        border: 0.5px solid;
        cursor: pointer;
    }
    .rect {
        display: flex;
        width: 50px;
        height: 2em;
        border: 0.5px solid;
    }
    .position {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: start;
        /* gap: 1em; */
        /* margin: 0.5em; */
    }
    .attributeGroup {
        background: rgb(184, 183, 183);
        border-radius: 10px;
        color: rgb(3, 3, 3);
        padding: 1em;
        margin: 1em 0;
    }
    .action {
        padding: 0.5em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon input {
        height: 2em;
        border-radius: 5px;
        width: 70px;
        outline: none;
        border: none;
    }
    .box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        align-items: center;
        justify-content: center;
    }
</style>

{#if $selectedId}
<article>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline5" style="margin:0 0 0.5em 0;">Color</h1>
            <SegmentedButton singleSelect segments={fillparts} let:segment bind:selected>
                <Segment {segment}>
                    <Label>{segment}</Label>
                </Segment>
            </SegmentedButton>
                {#if selected === 'fill'}
                    <ColorsInUse fillStroke={selected} on:colorChosen={setFill}/>
                {:else if filltype === 'solid' && selected === 'stroke'}
                    <ColorsInUse fillStroke={selected} on:colorChosen={setStroke}/>
                {/if}
            <SegmentedButton singleSelect segments={filltypes} let:segment bind:selected={filltype}>
                <Segment {segment}>
                    <Label>{segment}</Label>
                </Segment>
            </SegmentedButton>
            <br>
            {#if (filltype === 'linear')}
                <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">Linear Gradients</h4>
                <DataTable table$aria-label="Linear gradients" style="width: 100%;">
                    <Body>
                        {#each Object.keys($defs) as lg}
                        {#if $defs[lg].tag === 'linearGradient'}
                        <Row>
                            <Cell style="width: 100%;"><span class="rect">
                                <svg width="100%" height="100%" on:click={() => setLinearGradient(lg)}>
                                    <defs>
                                        <linearGradient id={lg} x1="{$defs[lg].start.x}%" y1="{$defs[lg].start.y}%" x2="{$defs[lg].end.x}%" y2="{$defs[lg].end.y}%" >
                                            {#each $defs[lg]?.colors as color}
                                                <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                                            {/each}
                                        </linearGradient>
                                    </defs>
                                    <rect x="0" y="0" width="50px" height="2em" fill='url(#{lg})'/>
                                </svg>
                            </span></Cell>
                            <Cell>
                                <IconButton class="material-icons" on:click={() => editLinearGradient(lg)}>edit</IconButton>
                                <IconButton class="material-icons" on:click={() => removeLinearGradient(lg)}>delete</IconButton>
                            </Cell>
                        </Row>
                        {/if}
                        {/each}
                    </Body>
                </DataTable>
                <Button on:click={createLinearGradient}>New Linear Gradiant</Button>
                {#if isNewLG}
                    <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">New linear gradient</h4>
                    <div class="filltype">
                        <span class="circle" style="background:{$defs[currentLGId].colors[0].stopColor}" on:click={() => position='start'}></span>
                        <span class="rect">
                            <svg width="100%" height="100%">
                                <defs>
                                    <linearGradient id={currentLGId} x1="{$defs[currentLGId].start.x}%" y1="{$defs[currentLGId].start.y}%" x2="{$defs[currentLGId].end.x}%" y2="{$defs[currentLGId].end.y}%" >
                                        {#each $defs[currentLGId]?.colors as color}
                                            <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                                        {/each}
                                    </linearGradient>
                                </defs>
                                <rect x="0" y="0" width="50px" height="2em" fill={`url(#${currentLGId})`}/>
                            </svg>
                        </span>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <span class="circle" style="background:{$defs[currentLGId].colors[1].stopColor}" on:click={() => position='end'}></span>
                        
                        <Button on:click={saveLinearGradient}><Label>Save</Label></Button>
                    </div> 
                    <div class="position">
                        <FormField>
                            <Slider bind:value={$defs[currentLGId].start.x} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                x1
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentLGId].start.y} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                y1
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentLGId].end.x} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                x2
                            </span>
                        </FormField>
                        <FormField>
                            <Slider bind:value={$defs[currentLGId].end.y} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                y2
                            </span>
                        </FormField>
                        <FormField>
                            <Slider bind:value={$defs[currentLGId].colors[0].offset} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                Start offset
                            </span>
                        </FormField>
                        <FormField>
                            <Slider bind:value={$defs[currentLGId].colors[1].offset} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px;"
                            >
                                End offset
                            </span>
                        </FormField>
                    </div>
                    {#if position === 'start'} 
                    <Color noConfirm bind:background={$defs[currentLGId].colors[0].stopColor} />
                    {:else}
                    <Color noConfirm bind:background={$defs[currentLGId].colors[1].stopColor} />
                    {/if}
                {/if}
            {/if}
            {#if (filltype === 'radial')}
                <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">Radial Gradients</h4>
                <DataTable table$aria-label="Radial gradients" style="width: 100%;">
                    <Body>
                        {#each Object.keys($defs) as lg}
                        {#if $defs[lg].tag === 'radialGradient'}
                        <Row>
                            <Cell style="width: 100%;"><span class="rect">
                                <svg width="100%" height="100%" on:click={() => setRadialGradient(lg)}>
                                    <defs>
                                        <radialGradient id={lg} cx="{$defs[lg].center.x}%" cy="{$defs[lg].center.y}%" fx="{$defs[lg].focus.x}%" fy="{$defs[lg].focus.y}%" r="{$defs[lg].r}%" fr="{$defs[lg].fr}%">
                                            {#each $defs[lg]?.colors as color}
                                                <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                                            {/each}
                                        </radialGradient>
                                    </defs>
                                    <rect x="0" y="0" width="50px" height="2em" fill='url(#{lg})'/>
                                </svg>
                            </span></Cell>
                            <Cell>
                                <IconButton class="material-icons" on:click={() => editRadialGradient(lg)}>edit</IconButton>
                                <IconButton class="material-icons" on:click={() => removeRadialGradient(lg)}>delete</IconButton>
                            </Cell>
                        </Row>
                        {/if}
                        {/each}
                    </Body>
                </DataTable>
                <Button on:click={createRadialGradient}>New Radial Gradiant</Button>
                {#if isNewRG}
                    <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">New radial gradient</h4>
                    <div class="filltype">
                        <span class="circle" style="background:{$defs[currentRGId].colors[0].stopColor}" on:click={() => position='start'}></span>
                        <span class="rect">
                            <svg width="100%" height="100%">
                                <!-- svelte-ignore component-name-lowercase -->
                                <defs>
                                    <radialGradient id={currentRGId} cx="{$defs[currentRGId].center.x}" cy="{$defs[currentRGId].center.y}" r="{$defs[currentRGId].r}" fx="{$defs[currentRGId].focus.x}" fy="{$defs[currentRGId].focus.y}" fr="{$defs[currentRGId].fr}" >
                                        {#each $defs[currentRGId]?.colors as color}
                                            <stop offset="{color.offset}%" stop-color={color.stopColor}/>
                                        {/each}
                                    </radialGradient>
                                </defs>
                                <rect x="0" y="0" width="50px" height="2em" fill={`url(#${currentRGId})`}/>
                            </svg>
                        </span>
                        <span class="circle" style="background:{$defs[currentRGId].colors[1].stopColor}" on:click={() => position='end'}></span>
                        
                        <Button on:click={saveRadialGradient}><Label>Save</Label></Button>
                    </div> 
                    <div class="position">
                        <FormField>
                            <Slider bind:value={$defs[currentRGId].center.x} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                cx
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentRGId].center.y} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                cy
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentRGId].r} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                r
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentRGId].focus.x} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                fx
                            </span>
                        </FormField>
                        <FormField>
                            <Slider bind:value={$defs[currentRGId].focus.y} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                fy
                            </span>
                        </FormField>
                        <FormField >
                            <Slider bind:value={$defs[currentRGId].fr} min={0} max={100} step={0.001} />
                            <span
                                slot="label"
                                style="padding-right: 12px; width: 120px; display: block;"
                            >
                                fr
                            </span>
                        </FormField>
                    </div>
                    {#if position === 'start'} 
                    <Color noConfirm bind:background={$defs[currentRGId].colors[0].stopColor} />
                    {:else}
                    <Color noConfirm bind:background={$defs[currentRGId].colors[1].stopColor} />
                    {/if}
                {/if}
            {/if}
            {#if filltype === 'solid'}
                {#if selected === 'fill'}
                    <Color noConfirm background={$elements[$selectedId]['fill']} on:colorChosen={setFill} />
                {:else if selected === 'stroke'}
                    <Color noConfirm bind:background={$elements[$selectedId]['stroke']} on:colorChosen={markerColor}/>
                {/if}
            {/if}
            {#if filltype === 'pattern'}
            <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">Patterns</h4>
                <DataTable table$aria-label="Patterns" style="width: 100%;">
                    <Body>
                        {#each Object.keys($defs) as ptrnId}
                        {#if $defs[ptrnId].tag === 'pattern'}
                        <Row>
                            <Cell style="width: 100%;"><span class="rect">
                                <svg width="100%" height="100%" on:click={() => setPattern(ptrnId)}>
                                    <defs>
                                        <pattern x='{$defs[ptrnId].x}' y='{$defs[ptrnId].y}' width='{$defs[ptrnId].width}' height='{$defs[ptrnId].height}' viewBox='{$defs[ptrnId].viewBox}'>
                                            {#if $defs[ptrnId].child.length > 0}
                                                <SVGGroup id={$defs[ptrnId].child} />
                                            {/if}
                                        </pattern>
                                    </defs>
                                    <rect x="0" y="0" width="50px" height="2em" fill='url(#{ptrnId})' style="background: ${$canvasBackground}"/>
                                </svg>
                            </span></Cell>
                            <Cell>
                                <IconButton class="material-icons" on:click={() => editPattern(ptrnId)}>edit</IconButton>
                                <IconButton class="material-icons" on:click={() => removePattern(ptrnId)}>delete</IconButton>
                                <IconButton  toggle on:click={() => togglePattern(ptrnId)}>
                                    <Icon class="material-icons" on>visibility</Icon>
                                    <Icon class="material-icons">visibility_off</Icon>
                                </IconButton>
                            </Cell>
                        </Row>
                        {/if}
                        {/each}
                    </Body>
                </DataTable>
                <Button on:click={createPattern}>New Pattern</Button>
                {#if isNewPTRN}
                    <h4 class="mdc-typography--headline6" style="margin:1em 0 0em 0;">New Pattern</h4>
                    <div class="box">
                        <div class="attributeGroup">
                            <div class="action" style="padding:0">
                                <span class="text">W</span>
                                <span class="icon">
                                    <label>
                                        <input
                                            type="number"
                                            bind:value={$defs[currentPTRNId].width}
                                            step={1}
                                        />
                                    </label>
                                </span>
                            </div>
                            <br />
                            <div class="action" style="padding:0">
                                <span class="text">H</span>
                                <span class="icon">
                                    <label>
                                        <input
                                            type="number"
                                            bind:value={$defs[currentPTRNId].height}
                                            step={1}
                                        />
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div class="attributeGroup">
                            <div class="action" style="padding:0">
                                <span class="text">X</span>
                                <span class="icon">
                                    <label>
                                        <input
                                            type="number"
                                            bind:value={$defs[currentPTRNId].x}
                                            step={1}
                                        />
                                    </label>
                                </span>
                            </div>
                            <br />
                            <div class="action" style="padding:0">
                                <span class="text">Y</span>
                                <span class="icon">
                                    <label>
                                        <input
                                            type="number"
                                            bind:value={$defs[currentPTRNId].y}
                                            step={1}
                                        />
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <Textfield label="viewBox" bind:value={$defs[currentPTRNId].viewBox} />
                    <!-- <FormField style="width:100%">
                        <Checkbox bind:checked={$defs[currentPTRNId].preserveAspectRatio} />
                        <span slot="label">Preserve Aspect</span>
                    </FormField> -->
                    <Button on:click={savePattern}><Label>Save</Label></Button>
                {/if}
            {/if}
        </Content>
    </Card>
    <Card>
        <Content>
            <FormField align="end" style="display: flex; width:100%;margin-bottom: 1em;">
                <Slider withInput style="flex-grow: 1;width:100%;" bind:value={$elements[$selectedId].opacity} min={0} max={1} step={0.001} input$aria-label="Alpha" />
                <span
                    slot="label"
                    style="padding-right: 12px; width:100px; display: block;"
                >
                    Opacity
                </span>
            </FormField>
            
            <FormField align="end" style="display: flex;">
                <Slider withInput style="flex-grow: 1;" bind:value={$elements[$selectedId].strokewidth} min={0} max={100} step={0.001} input$aria-label="Stroke width" />
                <span
                    slot="label"
                    style="display: block; line-height:1; padding-right: 1em; width: max-content;"
                >
                    Stroke width
                </span>
            </FormField>
    
            <Textfield variant="filled" label="stroke dasharray" bind:value={$elements[$selectedId].strokedasharray} style="width:100%;margin: 1em 0;" input$emptyValueUndefined/>
        </Content>
    </Card>
    <Card>
        <Content>
        <h5 class="mdc-typography--headline6" style="margin:0 0 0em 0;">Marker</h5>
        <Button on:click={createMarker}>Create arrow</Button>
        {#if $hasArrow}
        
            <Set chips={arrowChoices} let:chip filter bind:selected={selectedArrows} on:SMUIChip:selection={setMarker}>
                <Chip {chip} touch>
                    <Text>{chip}</Text>
                </Chip>
            </Set>
        {/if}
        </Content>
    </Card>
    <Card>
        <Content>
            <h5 class="mdc-typography--headline6" style="margin:0 0 0 0;">Line Cap</h5>
            <SegmentedButton singleSelect segments={linecaps} let:segment bind:selected={$elements[$selectedId].strokelinecap}>
                <Segment {segment}>
                    {segment}
                </Segment>
            </SegmentedButton>
        </Content>
    </Card>
    <Card>
        <Content>
            <h5 class="mdc-typography--headline6" style="margin:0.5em 0 0.5em 0;">Line Join</h5>
            <SegmentedButton singleSelect segments={linejoins} let:segment bind:selected={$elements[$selectedId].strokelinejoin}>
                <Segment {segment}>
                    {segment}
                </Segment>
            </SegmentedButton>
            
            <FormField align="end" style="display: flex; margin-top:1em;">
                <Slider withInput style="flex-grow: 1;" bind:value={$elements[$selectedId].strokemiterlimit} min={1} max={100} step={0.001} input$aria-label="Alpha" />
                <span
                    slot="label"
                    style="padding-right: 12px; width: 120px; display: block;"
                >
                    Miter limit
                </span>
            </FormField>
        </Content>
    </Card>
</article>
<Snackbar bind:this={takePatternGroupBar}>
    <Label>Select a group element for the pattern.</Label>
    <Actions>
      <IconButton class="material-icons" title="Dismiss">close</IconButton>
    </Actions>
</Snackbar>
{/if}
