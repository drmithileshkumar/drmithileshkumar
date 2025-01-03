<script lang='ts'>
    //@ts-nocheck
    import Chip, { Set, Text } from '@smui/chips';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    import Checkbox from '@smui/checkbox';
    import IconButton from '@smui/icon-button';
    import Card, { Content, Actions } from '@smui/card'
    import {selectedId, elements, defs, objectCount, DRAWING, currentLayer} from './stores';
    
    import Color from '$lib/vectorial/components/Color.svelte';
    import Button, {Label} from '@smui/button';
    import {TextMask} from '$lib/vectorial/utils/common/textMask';
    import {Group} from '$lib/vectorial/utils/common/g';
    


    //filter x, y, width, height
    //shadow dx, dy, stdDeviation, floodcolor, floodopacity

    
    let isNewTextMask = false;
    
    let currentTextMaskId;
    
    const createGroup = () => {
        let layer = 'Layer-'+$DRAWING.drawingID + '-' +$currentLayer;
        if($elements.Layers.length > 0) {
            if($elements.Layers[0] === 'Layer-0') {
                layer = 'Layer-' + $currentLayer;
            }
        }
        let group = new Group({id: 'Group-' + $DRAWING.drawingID + '-' + $objectCount, parent: layer, layer:layer});
        $elements[group.id] = group;
        // $selectedId = group.id;
        $objectCount = $objectCount + 1;
        $elements[group.parent].children.push(group.id);
        $elements = $elements;
        return group.id;
        
        // sortSelection();
        
        
        // deleteElementsFromLayer($lassoElements);
        // $elements[group.parent].children.push(group.id);
        // $lassoElements.forEach(id => {
        //     $elements[id].layer = group.layer;
        //     $elements[id].parent = group.id;
        //     $elements[id].isLocked = true;
        //     group.children.push(id);
        // })
        
        // $elements = $elements;   
        // computeInitialSBox(group.id);     
        // $lassoElements = [];
    }
    const createTextMask = () => {
        isNewTextMask = true;
        let layer = "Layer-" + $DRAWING.drawingID + "-" + $currentLayer;
        let msk = new TextMask({id: 'TextMask-' + $DRAWING.drawingID + '-' + $objectCount, parent: layer, layer: layer})
        msk.shape = $selectedId;
        $defs[msk.id] = msk;
        let groupId = createGroup();
        msk.group = groupId;
        $elements[groupId]['mask'] = `url(#${msk.id})`;
        $elements[$selectedId].isLocked = true;
        $elements[$elements[$selectedId].parent].children = $elements[$elements[$selectedId].parent].children.filter(id => id !== $selectedId)
        $elements[$selectedId].parent = groupId;
        $elements[groupId].children.push($selectedId);
        // let masks = $elements[$selectedId]['mask'].split(' ');
        // let included = masks.indexOf(`url(#${msk.id})`);
        // if($elements[$selectedId]['mask'] === 'none') {
        //     $elements[$selectedId]['mask'] = '';
        // }
        // $elements[$selectedId]['mask'] = included === -1 ? $elements[$selectedId]['mask'] + ' ' + `url(#${msk.id})` : `url(#${msk.id})`;
        $selectedId = groupId;
        currentTextMaskId = msk.id;
        $defs = $defs;
        $elements = $elements;
    }
    const updateTextMask = () => {
        console.log($defs[currentTextMaskId].text)
        let parent;
        for(let i = 0; i < $defs[currentTextMaskId].text.length; i++) {
            if($elements[$selectedId].children && $elements[$selectedId].children.indexOf($defs[currentTextMaskId].text[i]) === -1) {
                $elements[$selectedId].children.push($defs[currentTextMaskId].text[i]);
                $elements[$defs[currentTextMaskId].text[i]].isLocked = true;
                parent = $elements[$defs[currentTextMaskId].text[i]].parent;
                if(parent !== $selectedId) {
                    $elements[parent].children = $elements[parent].children.filter(id => id !== $defs[currentTextMaskId].text[i])
                }
            }
            
        }
        $elements = $elements;
    }
    const saveTextMask = () => {
        $defs = $defs
        isNewTextMask = false;
    }
    const removeTextMask = (lgrad) => {
        delete $defs[lgrad]
        let masks = $elements[$selectedId]['mask'].split(' ');
        masks = masks.filter((ft => ft !== `url(#${lgrad})`));
        $elements[$selectedId]['mask'] = masks.join(' ');
        $defs = $defs;
        $elements = $elements;
    }
    const editTextMask = (lgrad) => {
        currentTextMaskId = lgrad;
        isNewTextMask = true;
    }
    
    const setTextMask = (msk) => {
        let masks = $elements[$selectedId]['mask'].split(' ');
        let included = masks.indexOf(`url(#${msk})`);
        if($elements[$selectedId]['mask'] === 'none') {
            $elements[$selectedId]['mask'] = '';
        }
        $elements[$selectedId]['mask'] = included === -1 ? $elements[$selectedId]['mask'] + ' ' + `url(#${msk})` : $elements[$selectedId]['mask'];
        $elements = $elements;
    }
    const addText = () => {

    }
    const removeText = () => {

    }
</script>
<style>
    article {
        width: 300px;
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .masktype {
        display: flex;
        flex-direction: row;
        gap: 1em;
        align-items: center;
        margin-bottom: 0.5em;
    }
    .active {
        font-weight: 600;
    }
</style>
{#if $selectedId}
<article>
    <Card>
        <Content>
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">Text Masks</h4>
            <DataTable table$aria-label="Masks" style="width: 100%;">
                <Body>
                    {#each Object.keys($defs) as msk}
                    {#if $defs[msk].tag === 'textMask'}
                    <Row>
                        <Cell><span class:active={$elements[$selectedId]['mask']?.includes(msk)}>{msk.split('-')[0] + msk.split('-')[2]}</span></Cell>
                        <Cell style="padding: 0;">
                            <IconButton class="material-icons" on:click={() => editTextMask(msk)}>edit</IconButton>
                            <IconButton class="material-icons" on:click={() => removeTextMask(msk)}>delete</IconButton>
                        </Cell>
                    </Row>
                    {/if}
                    {/each}
                </Body>
            </DataTable>
        </Content>
        <Actions>
            <Button on:click={createTextMask}>New TextMask</Button>
        </Actions>
    </Card>
    {#if isNewTextMask}
    <Card>
        <Content>
            <h4 class="mdc-typography--headline6" style="margin:0 0 0.5em 0;">New TextMask</h4>
            <div class="masktype">
                <span>
                    {currentTextMaskId.split('-')[0] + currentTextMaskId.split('-')[2]}
                </span>
                <Button on:click={saveTextMask}><Label>Save</Label></Button>
            </div> 
            
            <DataTable style="width: 100%">
                <Body>
                    {#each Object.keys($elements) as elemId}
                        {#if $elements[elemId].tag === 'text'}
                            <Row>
                                <Cell checkbox>
                                    <Checkbox
                                        bind:group={$defs[currentTextMaskId].text}
                                        value={elemId}
                                        on:change={updateTextMask}
                                    />
                                </Cell>
                                <Cell>
                                    {$elements[elemId].content}
                                </Cell>
                                <Cell>
                                    {elemId.split('-')[0] + elemId.split('-')[2]}
                                </Cell>
                            </Row>
                        {/if}
                    {/each}
                </Body>
            </DataTable>
            
        </Content>
    </Card>
    {/if}
</article>

{/if}