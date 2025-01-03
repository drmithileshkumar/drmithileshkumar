<script lang='ts'>
    //@ts-nocheck
    import Chip, { Set, Text } from '@smui/chips';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import IconButton from '@smui/icon-button';
    import Card, { Content, Actions } from '@smui/card'
    import {selectedId, elements, defs, objectCount, DRAWING, currentLayer} from './stores';
    import SegmentedButton, {Segment} from '@smui/segmented-button';
    import Color from '$lib/vectorial/components/Color.svelte';
    import Button, {Label} from '@smui/button';

    import {Marker} from '$lib/vectorial/utils/common/marker';
    import {Group} from '$lib/vectorial/utils/common/g';


    //filter x, y, width, height
    //shadow dx, dy, stdDeviation, floodcolor, floodopacity

    
    let isNewMarker = false;
    let orientTypes = ['auto', 'auto-start-reverse']
    let currentMarkerId;
    
    const createArrow = () => {
        let mrk = new Marker({id: 'Arrow-' +$DRAWING.drawingID + '-' + $objectCount});
        $defs[mrk.id] = mrk;
        $objectCount++;
        $defs = $defs;
    }
    const createBar = () => {
        let mrk = new Marker({id: 'Bar-' + $DRAWING.drawingID + '-' + $objectCount});
        mrk.path.d = "M 0 0 L 0 10";
        mrk.path.strokewidth = 2;
        $defs[mrk.id] = mrk;
        $objectCount++;
        $defs = $defs;
    }
    const createMarker = () => {
        isNewMarker = true;
        let mrk = new Marker({id: 'Marker-' + $DRAWING.drawingID + '-' + $objectCount})
        
        $defs[mrk.id] = mrk;
        currentMarkerId = mrk.id;
        $defs = $defs;
        $elements = $elements;
    }
    const updateMarker = () => {
        let parent;
        for(let i = 0; i < $defs[currentMarkerId].text.length; i++) {
            if($elements[$selectedId].children.indexOf($defs[currentMarkerId].text[i]) === -1) {
                $elements[$selectedId].children.push($defs[currentMarkerId].text[i]);
                $elements[$defs[currentMarkerId].text[i]].isLocked = true;
                parent = $elements[$defs[currentMarkerId].text[i]].parent;
                if(parent !== $selectedId) {
                    $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[currentMarkerId].text[i])
                }
            }
            
        }
        $elements = $elements;
    }
    const saveMarker = () => {
        $defs = $defs
        isNewMarker = false;
    }
    const removeMarker = (lgrad) => {
        delete $defs[lgrad]
        // console.log($elements[$selectedId])
        if($elements[$selectedId]['marker']) {
            let markers = $elements[$selectedId]['marker'].split(' ');
            markers = markers.filter((ft => ft !== `url(#${lgrad})`));
            $elements[$selectedId]['marker'] = markers.join(' ');
        }
        
        $defs = $defs;
        $elements = $elements;
    }
    const editMarker = (lgrad) => {
        currentMarkerId = lgrad;
        isNewMarker = true;
    }
    
    const setMarker = (mrk, position) => {
        switch(position) {
            case 'start': {
                $elements[$selectedId]['markerStart'] = $elements[$selectedId]['markerStart'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
            case 'mid': {
                $elements[$selectedId]['markerMid'] = $elements[$selectedId]['markerMid'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
            case 'end': {
                $elements[$selectedId]['markerEnd'] = $elements[$selectedId]['markerEnd'].includes(mrk) ? 'none' : `url(#${mrk})`;
                break;
            }
        }
        $elements = $elements;
    }
    
</script>
<style>
    article {
        width: 300px;
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .markertype {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
        margin-bottom: 0.5em;
    }
    .rect {
        display: flex;
        width: 30px;
        height: 2em;
        border: 0.5px solid;
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
    /* .iconButton {
        font-size: 1.5em;
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    } */
    /* .active {
        font-weight: 600;
    } */
</style>
{#if $selectedId}
<article>
    <Card>
        <Content>
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Markers</h4>
            <DataTable table$aria-label="Markers" style="width: 100%;">
                <Body>
                    {#each Object.keys($defs) as mrk}
                    {#if $defs[mrk].tag === 'marker'}
                    <Row>
                        <Cell style="padding: 0 0 0 16px;"><span class="rect" style="background: {$elements[$selectedId]['markerStart']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                            <svg viewBox="-7 0 35 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'start')}>
                                
                                <!-- svelte-ignore component-name-lowercase -->
                                <defs>
                                    <marker 
                                        id={mrk}
                                        refX='{$defs[mrk].refX}'
                                        refY='{$defs[mrk].refY}'
                                        markerWidth='{$defs[mrk].markerWidth}'
                                        markerHeight='{$defs[mrk].markerHeight}'
                                        markerUnits={$defs[mrk].markerUnits}
                                        orient={$defs[mrk].orient}
                                        viewBox={$defs[mrk].viewBox}
                                        preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                    >
                                        <path 
                                            d="{$defs[mrk].path.d}"
                                            fill={$defs[mrk].path.fill}
                                            stroke={$defs[mrk].path.stroke}
                                            stroke-width={$defs[mrk].path.strokewidth}
                                            stroke-dasharray={$defs[mrk].path.strokedasharray}
                                            opacity={$defs[mrk].path.opacity}
                                            filter={$defs[mrk].path.filter}
                                        />
                                    </marker>

                                </defs>
                                <path d="M 5,10 H 25" marker-start={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="2" />
                            </svg>
                        </span></Cell>
                        <Cell style="padding: 0 0 0 16px;">
                            <span class="rect" style="background: {$elements[$selectedId]['markerMid']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                                <svg viewBox="0 0 30 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'mid')}>
                                    <defs>
                                        <marker 
                                            id={mrk}
                                            refX='{$defs[mrk].refX}'
                                            refY='{$defs[mrk].refY}'
                                            markerWidth='{$defs[mrk].markerWidth}'
                                            markerHeight='{$defs[mrk].markerHeight}'
                                            markerUnits={$defs[mrk].markerUnits}
                                            orient={$defs[mrk].orient}
                                            viewBox={$defs[mrk].viewBox}
                                            preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                        >
                                            <path 
                                                d="{$defs[mrk].path.d}"
                                                fill={$defs[mrk].path.fill}
                                                stroke={$defs[mrk].path.stroke}
                                                stroke-width={$defs[mrk].path.strokewidth}
                                                stroke-dasharray={$defs[mrk].path.strokedasharray}
                                                opacity={$defs[mrk].path.opacity}
                                                filter={$defs[mrk].path.filter}
                                            />
                                        </marker>

                                    </defs>
                                    <path d="M 3,10 H 15 H 25" marker-mid={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="1" />
                                </svg>
                            </span>
                        </Cell>
                        <Cell style="padding: 0 0 0 16px;">
                            <span class="rect" style="background: {$elements[$selectedId]['markerEnd']?.includes(mrk) ? 'rgba(255, 255, 255, 0.8)': 'rgba(255, 255, 255, 0.5)'};">
                                <svg viewBox="0 0 37 20" width="100%" height="100%" on:click={() => setMarker(mrk, 'end')}>
                                    <defs>
                                        <marker 
                                            id={mrk}
                                            refX='{$defs[mrk].refX}'
                                            refY='{$defs[mrk].refY}'
                                            markerWidth='{$defs[mrk].markerWidth}'
                                            markerHeight='{$defs[mrk].markerHeight}'
                                            markerUnits={$defs[mrk].markerUnits}
                                            orient={$defs[mrk].orient}
                                            viewBox={$defs[mrk].viewBox}
                                            preserveAspectRatio={$defs[mrk].preserveAspectRatio}
                                        >
                                            <path 
                                                d="{$defs[mrk].path.d}"
                                                fill={$defs[mrk].path.fill}
                                                stroke={$defs[mrk].path.stroke}
                                                stroke-width={$defs[mrk].path.strokewidth}
                                                stroke-dasharray={$defs[mrk].path.strokedasharray}
                                                opacity={$defs[mrk].path.opacity}
                                            />
                                        </marker>

                                    </defs>
                                    <path d="M 3,10 H 25" marker-end={`url(#${mrk})`} stroke={$defs[mrk].path.stroke} stroke-width="2" />
                                </svg>
                            </span>
                        </Cell>
                        <Cell style="padding: 0;">
                            <IconButton class="material-icons" on:click={() => editMarker(mrk)}>edit</IconButton>
                            <IconButton class="material-icons" on:click={() => removeMarker(mrk)}>delete</IconButton>
                        </Cell>
                    </Row>
                    {/if}
                    {/each}
                </Body>
            </DataTable>
        </Content>
        <Actions>
            <Button on:click={createArrow}>Arrow +</Button>
            <Button on:click={createBar}>Bar +</Button>
            <Button on:click={createMarker}>Marker +</Button>
        </Actions>
    </Card>
{#if isNewMarker}
<Card>
    <Content>
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Design Marker</h4>
            <div class="markertype">
                <span class="rect" style="background: rgba(255, 255, 255, 0.5)">
                    <svg width="100%" height="100%">
                        <defs>
                            <marker 
                                id={currentMarkerId}
                                refX='{$defs[currentMarkerId].refX}'
                                refY='{$defs[currentMarkerId].refY}'
                                markerWidth='{$defs[currentMarkerId].markerWidth}'
                                markerHeight='{$defs[currentMarkerId].markerHeight}'
                                markerUnits={$defs[currentMarkerId].markerUnits}
                                orient={$defs[currentMarkerId].orient}
                                viewBox={$defs[currentMarkerId].viewBox}
                                preserveAspectRatio={$defs[currentMarkerId].preserveAspectRatio}
                            >
                                <path 
                                    d="{$defs[currentMarkerId].path.d}"
                                    fill={$defs[currentMarkerId].path.fill}
                                    stroke={$defs[currentMarkerId].path.stroke}
                                    stroke-width={$defs[currentMarkerId].path.strokewidth}
                                    stroke-dasharray={$defs[currentMarkerId].path.strokedasharray}
                                    opacity={$defs[currentMarkerId].path.opacity}
                                />
                            </marker>

                        </defs>
                        <path d="M 3,10 H 25" marker-end={`url(#${currentMarkerId})`} stroke={$defs[currentMarkerId].path.stroke} />
                    </svg>
                </span>
                <Button on:click={saveMarker}><Label>Save</Label></Button>
            </div> 
            <!--  markerUnits, fill stroke, stroke-width, stroke-dasharray opacity -->
            <div class="inputAttribute">
                <div class="box">
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">W</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$defs[currentMarkerId].markerWidth} step={1}> 
                                </label>
                            </span>
                        </div>
                        <br>
                        <div class="action" style="padding:0">
                            <span class="text">H</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$defs[currentMarkerId].markerHeight} step={1}> 
                                </label>
                            </span>
                        </div>
                    </div>
                    <div class="attributeGroup">
                        <div class="action" style="padding:0">
                            <span class="text">X</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$defs[currentMarkerId].refX} step={1}> 
                                </label>
                            </span>
                        </div>
                        <br>
                        <div class="action" style="padding:0">
                            <span class="text">Y</span>
                            <span class="icon">
                                <label>
                                    <input type="number" bind:value={$defs[currentMarkerId].refY} step={1}> 
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="attributeGroup">
                    <label style="display:flex; align-items:center; gap: 1em;">
                        Preserve Aspect
                        <input type="checkbox" bind:checked={$defs[currentMarkerId].preserveAspectRatio} />
                    </label>
                </div>
                <div class="attributeGroup" style="display:flex; flex-direction: column; flex-wrap: no-wrap;">
                    <Set chips={orientTypes} let:chip choice bind:selected={$defs[currentMarkerId].orient}>
                        <Chip {chip}>
                          <Text>{chip}</Text>
                        </Chip>
                    </Set>
                    
                    <div class="action" style="padding:0">
                        <span class="text">Angle</span>
                        <span class="icon">
                            <label>
                                <input style="width: 30px;" type="number" bind:value={$defs[currentMarkerId].orient} step={1}> 
                            </label>
                        </span>
                    </div>
                </div>
                <div class="attributeGroup">
                    <div class="action" style="padding:0">
                        <span class="text">viewBox</span>
                        <span class="icon">
                            <label>
                                <input type="text" bind:value={$defs[currentMarkerId].viewBox}>
                            </label>
                        </span>
                    </div>
                </div>
                <h5 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Marker path</h5>
                <div class="attributeGroup">
                    <div class="action" style="padding:0">
                        <span class="text">d</span>
                        <span class="icon">
                            <label>
                                <input style="width: 100%;" type="text" bind:value={$defs[currentMarkerId].path.d}>
                            </label>
                        </span>
                    </div>
                </div>
                <div class="attributeGroup">
                    <div class="action" style="padding:0">
                        <span class="text">Stroke width</span>
                        <span class="icon">
                            <label>
                                <input style="width: 100%;" type="number" bind:value={$defs[currentMarkerId].path.strokewidth}>
                            </label>
                        </span>
                    </div>
                </div>
                <div class="attributeGroup">
                    <div class="action" style="padding:0">
                        <span class="text">Stroke</span>
                        <span class="icon">
                            <label>
                                <input style="width: 100%;" bind:value={$defs[currentMarkerId].path.stroke}>
                            </label>
                        </span>
                    </div>
                </div>
                <div class="attributeGroup">
                    <div class="action" style="padding:0">
                        <span class="text">Fill</span>
                        <span class="icon">
                            <label>
                                <input style="width: 100%;" bind:value={$defs[currentMarkerId].path.fill}>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        
        </Content>
    </Card>
{/if}
</article>

{/if}