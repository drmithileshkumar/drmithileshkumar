<script lang='ts'>
    //@ts-nocheck
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import IconButton from '@smui/icon-button';
    import Card, { Content } from '@smui/card'
    import Slider from '$lib/vectorial/ui/Slider.svelte';
    import FormField from '$lib/vectorial/ui/FormField.svelte';
    import {selectedId, elements, defs, objectCount, DRAWING} from './stores';
    
    import Color from '$lib/vectorial/components/Color.svelte';
    import Button, {Label} from '@smui/button';
    
    import {TextMask} from '$lib/vectorial/utils/common/textMask';
    import {Shadow} from '$lib/vectorial/utils/common/shadow';
    import {Blur} from '$lib/vectorial/utils/common/blur';
    import {SpecularLighting} from '$lib/vectorial/utils/common/specularLighting';
    import {DiffuseLighting} from '$lib/vectorial/utils/common/diffuseLighting';


    //filter x, y, width, height
    //shadow dx, dy, stdDeviation, floodcolor, floodopacity

    let isNewShadow = false;
    let isNewBlur = false;
    let isNewSpecular = false;
    let isNewDiffuse = false;
    let isNewTextMask = false;
    
    let currentShadowId, currentBlurId, currentSpecularId, currentDiffuseId, currentTextMaskId;
    
    const createShadow = () => {
        isNewShadow = true;
        let sdo = new Shadow({id: 'Shadow-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[sdo.id] = sdo;
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo.id})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo.id})` : `url(#${sdo.id})`;
        
        currentShadowId = sdo.id;
        $defs = $defs;
        $elements = $elements;
        $objectCount++;
    }
    const saveShadow = () => {
        $defs = $defs
        isNewShadow = false;
    }
    const removeShadow = (lgrad) => {
        isNewShadow = false;
        // delete $defs[lgrad]
        let filters = $elements[$selectedId]['filter'].split(' ');
        filters = filters.filter((ft => ft !== `url(#${lgrad})`));
        $elements[$selectedId]['filter'] = filters.join(' ');
        $defs = $defs;
        $elements = $elements;
    }
    const editShadow = (lgrad) => {
        currentShadowId = lgrad;
        isNewShadow = true;
    }
    
    const setShadow = (sdo) => {
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo})` : $elements[$selectedId]['filter'];
        $elements = $elements;
        // x1 = sdo.x1;
        // x2 = sdo.x2;
        // y1 = sdo.y1;
        // y2 = sdo.y2;
        // colors = sdo.colors;
    }
    const createBlur = () => {
        isNewBlur = true;
        let sdo = new Blur({id: 'Blur-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[sdo.id] = sdo;
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo.id})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo.id})` : `url(#${sdo.id})`;
        
        currentBlurId = sdo.id;
        $defs = $defs;
        $elements = $elements;
        $objectCount++;
    }
    const saveBlur = () => {
        $defs = $defs
        isNewBlur = false;
    }
    const removeBlur = (lgrad) => {
        isNewBlur = false;
        // delete $defs[lgrad]
        let filters = $elements[$selectedId]['filter'].split(' ');
        filters = filters.filter((ft => ft !== `url(#${lgrad})`));
        $elements[$selectedId]['filter'] = filters.join(' ');
        $defs = $defs;
        $elements = $elements;
    }
    const editBlur = (lgrad) => {
        currentBlurId = lgrad;
        isNewBlur = true;
    }
    
    const setBlur = (sdo) => {
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo})` : $elements[$selectedId]['filter'];
        $elements = $elements;
    }
    const createSpecular = () => {
        isNewSpecular = true;
        let sdo = new SpecularLighting({id: 'SpecularLighting-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[sdo.id] = sdo;
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo.id})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo.id})` : `url(#${sdo.id})`;
        
        currentSpecularId = sdo.id;
        $defs = $defs;
        $elements = $elements;
        $objectCount++;
    }
    const saveSpecular = () => {
        $defs = $defs
        isNewSpecular = false;
    }
    const removeSpecular = (lgrad) => {
        isNewSpecular = false;
        // delete $defs[lgrad]
        let filters = $elements[$selectedId]['filter'].split(' ');
        filters = filters.filter((ft => ft !== `url(#${lgrad})`));
        $elements[$selectedId]['filter'] = filters.join(' ');
        $defs = $defs;
        $elements = $elements;
    }
    const editSpecular = (lgrad) => {
        currentSpecularId = lgrad;
        isNewSpecular = true;
    }
    
    const setSpecular = (sdo) => {
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo})` : $elements[$selectedId]['filter'];
        $elements = $elements;
    }
    const createDiffuse = () => {
        isNewDiffuse = true;
        let sdo = new DiffuseLighting({id: 'DiffuseLighting-' + $DRAWING.drawingID + '-' + $objectCount})
    
        $defs[sdo.id] = sdo;
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo.id})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo.id})` : `url(#${sdo.id})`;
        
        currentDiffuseId = sdo.id;
        $defs = $defs;
        $elements = $elements;
        $objectCount++;
    }
    const saveDiffuse = () => {
        $defs = $defs
        isNewDiffuse = false;
    }
    const removeDiffuse = (lgrad) => {
        isNewDiffuse = false;
        // delete $defs[lgrad]
        let filters = $elements[$selectedId]['filter'].split(' ');
        filters = filters.filter((ft => ft !== `url(#${lgrad})`));
        $elements[$selectedId]['filter'] = filters.join(' ');
        $defs = $defs;
        $elements = $elements;
    }
    const editDiffuse = (lgrad) => {
        currentDiffuseId = lgrad;
        isNewDiffuse = true;
    }
    
    const setDiffuse = (sdo) => {
        let filters = $elements[$selectedId]['filter'].split(' ');
        let included = filters.indexOf(`url(#${sdo})`);
        if($elements[$selectedId]['filter'] === 'none') {
            $elements[$selectedId]['filter'] = '';
        }
        $elements[$selectedId]['filter'] = included === -1 ? $elements[$selectedId]['filter'] + ' ' + `url(#${sdo})` : $elements[$selectedId]['filter'];
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
    .filtertype {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
        margin-bottom: 0.5em;
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
</style>
{#if $selectedId}
<article>
    <Card>
        <Content>
        <!-- <h4>Shadow</h4> -->
        
        <!-- <ColorsInUse fillStroke={selected}/> -->
        
        <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Shadows</h4>
        <DataTable table$aria-label="Shadows" style="width: 100%;">
            <Body>
                {#each Object.keys($defs) as sdo}
                {#if $defs[sdo].tag === 'shadow'}
                <Row>
                    <Cell style="width: 100%;"><span class="rect">
                        <svg width="100%" height="100%" on:click={() => setShadow(sdo)}>
                            <!-- svelte-ignore component-name-lowercase -->
                            <defs>
                                <filter id={sdo} x="{$defs[sdo].x}%" y="{$defs[sdo].y}%" width="{$defs[sdo].width}%" height="{$defs[sdo].height}%" >
                                    <feDropShadow 
                                        dx={$defs[sdo].dx}
                                        dy={$defs[sdo].dy}
                                        stdDeviation={$defs[sdo].stdDeviation}
                                        flood-color={$defs[sdo].floodcolor}
                                        flood-opacity={$defs[sdo].floodopacity}
                                    />
                                </filter>
                            </defs>
                            <rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${sdo})`}/>
                        </svg>
                    </span></Cell>
                    <Cell>
                        <IconButton class="material-icons" on:click={() => editShadow(sdo)}>edit</IconButton>
                        <IconButton class="material-icons" on:click={() => removeShadow(sdo)}>delete</IconButton>
                    </Cell>
                </Row>
                {/if}
                {/each}
            </Body>
        </DataTable>
        <br>
        <Button on:click={createShadow}>New Shadow</Button>
        {#if isNewShadow}
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">New Shadow</h4>
            <div class="filtertype">
                <span class="rect">
                    <svg width="100%" height="100%">
                        <!-- svelte-ignore component-name-lowercase -->
                        <defs>
                            <filter id={currentShadowId} x="{$defs[currentShadowId].x}%" y="{$defs[currentShadowId].y}%" width="{$defs[currentShadowId].width}%" height="{$defs[currentShadowId].height}%" >
                                <feDropShadow 
                                    dx={$defs[currentShadowId].dx}
                                    dy={$defs[currentShadowId].dy}
                                    stdDeviation={$defs[currentShadowId].stdDeviation}
                                    flood-color={$defs[currentShadowId].floodcolor}
                                    flood-opacity={$defs[currentShadowId].floodopacity}
                                />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="50px" height="2em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${currentShadowId})`}/>
                    </svg>
                </span>
                <Button on:click={saveShadow}><Label>Save</Label></Button>
            </div> 
            <div class="position">
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].width} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        width
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].height} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        height
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].dx} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        dx
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].dy} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        dy
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].stdDeviation} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        Standard Deviation
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentShadowId].floodopacity} min={0} max={1} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        Opacity
                    </span>
                </FormField>
            </div>
            <Color noConfirm bind:background={$defs[currentShadowId].floodcolor} />
        {/if}
        </Content>
    </Card>
    <Card>
        <Content>
        <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Blur</h4>
        <DataTable table$aria-label="Blur" style="width: 100%;">
            <Body>
                {#each Object.keys($defs) as sdo}
                {#if $defs[sdo].tag === 'blur'}
                <Row>
                    <Cell style="width: 100%;"><span class="rect">
                        <svg width="100%" height="100%" on:click={() => setBlur(sdo)}>
                            <defs>
                                <filter id={sdo} x="{$defs[sdo].x}%" y="{$defs[sdo].y}%" width="{$defs[sdo].width}%" height="{$defs[sdo].height}%">
                                    <feGaussianBlur 
                                        in={$defs[sdo].input}
                                        stdDeviation={$defs[sdo].stdDeviation}
                                        edgeMode={$defs[sdo].edgeMode}
                                    />
                                </filter>
                            </defs>
                            <rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${sdo})`}/>
                        </svg>
                    </span></Cell>
                    <Cell>
                        <IconButton class="material-icons" on:click={() => editBlur(sdo)}>edit</IconButton>
                        <IconButton class="material-icons" on:click={() => removeBlur(sdo)}>delete</IconButton>
                    </Cell>
                </Row>
                {/if}
                {/each}
            </Body>
        </DataTable>
        <br>
        <Button on:click={createBlur}>New Blur</Button>
        {#if isNewBlur}
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">New Blur</h4>
            <div class="filtertype">
                <span class="rect">
                    <svg width="100%" height="100%">
                        <!-- svelte-ignore component-name-lowercase -->
                        <defs>
                            <filter id={currentBlurId} >
                                <feGaussianBlur
                                    in={$defs[currentBlurId].input}
                                    stdDeviation={$defs[currentBlurId].stdDeviation}
                                    edgeMode={$defs[currentBlurId].edgeMode}
                                />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="50px" height="2em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${currentBlurId})`}/>
                    </svg>
                </span>
                <Button on:click={saveBlur}><Label>Save</Label></Button>
            </div> 
            <div class="position">
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentBlurId].x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentBlurId].y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentBlurId].width} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        width
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentBlurId].height} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        height
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentBlurId].stdDeviation} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        Standard Deviation
                    </span>
                </FormField>
            </div>
        {/if}
        </Content>
    </Card>
    <Card>
        <Content>
        <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Specular Lighting</h4>
        <DataTable table$aria-label="Specular Lighting" style="width: 100%;">
            <Body>
                {#each Object.keys($defs) as sdo}
                {#if $defs[sdo].tag === 'specularLighting'}
                <Row>
                    <Cell style="width: 100%;"><span class="rect">
                        <svg width="100%" height="100%" on:click={() => setSpecular(sdo)}>
                            <!-- svelte-ignore component-name-lowercase -->
                            <defs>
                                <filter 
                                    id={sdo}
                                    x='{$defs[sdo].x}%'
                                    y='{$defs[sdo].y}%'
                                    width='{$defs[sdo].width}%'
                                    height='{$defs[sdo].height}%'
                                >
                                    <feSpecularLighting
                                        result={$defs[sdo].result}
                                        specularExponent={$defs[sdo].specularExponent}
                                        specularConstant={$defs[sdo].specularConstant}
                                        lighting-color={$defs[sdo].lightingColor}
                                        surfaceScale={$defs[sdo].surfaceScale}
                                    >
                                        <fePointLight x={$defs[sdo].point.x} y={$defs[sdo].point.y} z={$defs[sdo].point.z}/>
                                    </feSpecularLighting> 
                                    <feComposite
                                    in={$defs[sdo].input}
                                    in2={$defs[sdo].input2}
                                    operator={$defs[sdo].operator}
                                    k1={$defs[sdo].k1}
                                    k2={$defs[sdo].k2}
                                    k3={$defs[sdo].k3}
                                    k4={$defs[sdo].k4} />
                                </filter>
                            </defs>
                            <rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${sdo})`}/>
                        </svg>
                    </span></Cell>
                    <Cell>
                        <IconButton class="material-icons" on:click={() => editSpecular(sdo)}>edit</IconButton>
                        <IconButton class="material-icons" on:click={() => removeSpecular(sdo)}>delete</IconButton>
                    </Cell>
                </Row>
                {/if}
                {/each}
            </Body>
        </DataTable>
        <br>
        <Button on:click={createSpecular}>New Specular Lighting</Button>
        {#if isNewSpecular}
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">New Specular Lighting</h4>
            <div class="filtertype">
                <span class="rect">
                    <svg width="100%" height="100%">
                        <!-- svelte-ignore component-name-lowercase -->
                        <defs>
                            <filter 
                                id={currentSpecularId}
                                x='{$defs[currentSpecularId].x}%'
                                y='{$defs[currentSpecularId].y}%'
                                width='{$defs[currentSpecularId].width}%'
                                height='{$defs[currentSpecularId].height}%'
                            >
                                <feSpecularLighting
                                    result={$defs[currentSpecularId].result}
                                    specularExponent={$defs[currentSpecularId].specularExponent}
                                    specularConstant={$defs[currentSpecularId].specularConstant}
                                    lighting-color={$defs[currentSpecularId].lightingColor}
                                    surfaceScale={$defs[currentSpecularId].surfaceScale}
                                >
                                    <fePointLight x={$defs[currentSpecularId].point.x} y={$defs[currentSpecularId].point.y} z={$defs[currentSpecularId].point.z}/>
                                </feSpecularLighting> 
                                <feComposite
                                in={$defs[currentSpecularId].input}
                                in2={$defs[currentSpecularId].input2}
                                operator={$defs[currentSpecularId].operator}
                                k1={$defs[currentSpecularId].k1}
                                k2={$defs[currentSpecularId].k2}
                                k3={$defs[currentSpecularId].k3}
                                k4={$defs[currentSpecularId].k4} />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="50px" height="2em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${currentSpecularId})`}/>
                    </svg>
                </span>
                <Button on:click={saveSpecular}><Label>Save</Label></Button>
            </div> 
            <div class="position">
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].width} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        width
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].height} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        height
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].point.x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].point.y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].point.z} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point z
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].surfaceScale} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Surface Scale
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].specularExponent} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Specular Exponent
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].specularConstant} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Specular Constant
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].k1} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        k1
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].k2} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        k2
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].k3} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        k3
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentSpecularId].k4} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        k4
                    </span>
                </FormField>
            </div>
            <Color noConfirm bind:background={$defs[currentSpecularId].lightingColor} />
        {/if}
        </Content>
    </Card>
    <Card>
        <Content>
        <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Diffuse Lighting</h4>
        <DataTable table$aria-label="Diffuse Lighting" style="width: 100%;">
            <Body>
                {#each Object.keys($defs) as sdo}
                {#if $defs[sdo].tag === 'diffuseLighting'}
                <Row>
                    <Cell style="width: 100%;"><span class="rect">
                        <svg width="100%" height="100%" on:click={() => setDiffuse(sdo)}>
                            <!-- svelte-ignore component-name-lowercase -->
                            <defs>
                                <filter 
                                    id={sdo}
                                    x='{$defs[sdo].x}%'
                                    y='{$defs[sdo].y}%'
                                    width='{$defs[sdo].width}%'
                                    height='{$defs[sdo].height}%'
                                >
                                    <feDiffuseLighting
                                        result={$defs[sdo].result}
                                        specularExponent={$defs[sdo].specularExponent}
                                        specularConstant={$defs[sdo].specularConstant}
                                        lighting-color={$defs[sdo].lightingColor}
                                        surfaceScale={$defs[sdo].surfaceScale}
                                    >
                                        <fePointLight x={$defs[sdo].point.x} y={$defs[sdo].point.y} z={$defs[sdo].point.z}/>
                                    </feDiffuseLighting> 
                                    <feComposite
                                    in={$defs[sdo].input}
                                    in2={$defs[sdo].input2}
                                    operator={$defs[sdo].operator}
                                    k1={$defs[sdo].k1}
                                    k2={$defs[sdo].k2}
                                    k3={$defs[sdo].k3}
                                    k4={$defs[sdo].k4} />
                                </filter>
                            </defs>
                            <rect x="0" y="0" width="25px" height="1em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${sdo})`}/>
                        </svg>
                    </span></Cell>
                    <Cell>
                        <IconButton class="material-icons" on:click={() => editDiffuse(sdo)}>edit</IconButton>
                        <IconButton class="material-icons" on:click={() => removeDiffuse(sdo)}>delete</IconButton>
                    </Cell>
                </Row>
                {/if}
                {/each}
            </Body>
        </DataTable>
        <br>
        <Button on:click={createDiffuse}>New Diffuse Lighting</Button>
        {#if isNewDiffuse}
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">New Diffuse Lighting</h4>
            <div class="filtertype">
                <span class="rect">
                    <svg width="100%" height="100%">
                        <!-- svelte-ignore component-name-lowercase -->
                        <defs>
                            <filter 
                                id={currentDiffuseId}
                                x='{$defs[currentDiffuseId].x}%'
                                y='{$defs[currentDiffuseId].y}%'
                                width='{$defs[currentDiffuseId].width}%'
                                height='{$defs[currentDiffuseId].height}%'
                            >
                                <feDiffuseLighting
                                    result={$defs[currentDiffuseId].result}
                                    specularExponent={$defs[currentDiffuseId].specularExponent}
                                    specularConstant={$defs[currentDiffuseId].specularConstant}
                                    lighting-color={$defs[currentDiffuseId].lightingColor}
                                    surfaceScale={$defs[currentDiffuseId].surfaceScale}
                                >
                                    <fePointLight x={$defs[currentDiffuseId].point.x} y={$defs[currentDiffuseId].point.y} z={$defs[currentDiffuseId].point.z}/>
                                </feDiffuseLighting> 
                                <feComposite
                                in={$defs[currentDiffuseId].input}
                                in2={$defs[currentDiffuseId].input2}
                                operator={$defs[currentDiffuseId].operator}
                                k1={$defs[currentDiffuseId].k1}
                                k2={$defs[currentDiffuseId].k2}
                                k3={$defs[currentDiffuseId].k3}
                                k4={$defs[currentDiffuseId].k4} />
                            </filter>
                        </defs>
                        <rect x="0" y="0" width="50px" height="2em" fill="rgba(0, 0, 0, 0.5)" filter={`url(#${currentDiffuseId})`}/>
                    </svg>
                </span>
                <Button on:click={saveDiffuse}><Label>Save</Label></Button>
            </div> 
            <div class="position">
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].width} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        width
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].height} min={0} max={500} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        height
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].point.x} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point x
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].point.y} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point y
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].point.z} min={-100} max={100} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Point z
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].surfaceScale} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Surface Scale
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].diffuseExponent} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1;"
                    >
                        Diffuse Exponent
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].diffuseConstant} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        Diffuse Constant
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].k1} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        k1
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].k2} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        k2
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].k3} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        k3
                    </span>
                </FormField>
                <FormField align="end" style="display: flex;justify-content:end;">
                    <Slider withInput bind:value={$defs[currentDiffuseId].k4} min={0} max={10} step={0.001} />
                    <span
                        slot="label"
                        style="padding-right: 12px; line-height:1; line-height:1;"
                    >
                        k4
                    </span>
                </FormField>
            </div>
            <Color noConfirm bind:background={$defs[currentDiffuseId].lightingColor} />
        {/if}
        </Content>
    </Card>
</article>

{/if}