<script id="MathJax-script" lang="ts">
    // @ts-nocheck
    import Chip, { Set, LeadingIcon, TrailingIcon } from '@smui/chips';
    import Switch from '@smui/switch';
    import FormField from '@smui/form-field';
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import Dialog, { Title, InitialFocus } from "@smui/dialog";

    let open = false;
    let response = "Nothing yet.";

    import IconButton, { Icon } from "@smui/icon-button";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Line } from "$lib/vectorial/utils/common/line";
    import { Circle } from "$lib/vectorial/utils/common/circle";
    import { Ellipse } from "$lib/vectorial/utils/common/ellipse";
    import { Rectangle } from "$lib/vectorial/utils/common/rectangle";
    import { Regular } from "$lib/vectorial/utils/common/regular";
    import { Text } from "$lib/vectorial/utils/common/text";
    import { Latex } from "$lib/vectorial/utils/common/latex";
    import { Plot } from "$lib/vectorial/utils/common/plot";
    import { Polyline } from "$lib/vectorial/utils/common/polyline";
    import { Path } from "$lib/vectorial/utils/common/path";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { Image } from "$lib/vectorial/utils/common/image";
    import { Grid } from "$lib/vectorial/utils/common/grid";
    import { page } from "$app/stores";
    import {
        defs,
        appHistory,
        BBOX,
        elements,
        drawingID,
        DRAWING,
        pointList,
        objectCount,
        localGallery
    } from "./stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { invalidate } from "$app/navigation";
    import { browser } from "$app/environment";
    import PreviewDrawing from "$lib/vectorial/pages/common/PreviewDrawing.svelte";
    import { createEventDispatcher } from "svelte";
    
    let dispatch = createEventDispatcher();
    export let drawing;
    export let editApp = `/vectorial/app`;
    let id;
    onMount(() => {
        MathJax.typeset();

    });

    const updateElements = (drawing) => {
    //elements
        let elemIds = Object.keys(drawing.elements);
        elemIds.forEach(elemId => {
            if(elemId !== 'Layers') {
                if(drawing.elements[elemId].children) {
                    drawing.elements[elemId].children.forEach((childId,index) => {
                        drawing.elements[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];
                    })
                }
                //fill use filltype
                if(drawing.elements[elemId].fill?.includes('url')) {
                    drawing.elements[elemId].fill = drawing.elements[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].fill.split('-')[2];
                }
                //stroke
                if(drawing.elements[elemId].stroke?.includes('url')) {
                    drawing.elements[elemId].stroke = drawing.elements[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].stroke.split('-')[2];
                }
                //markerStart, markerMid, markerEnd
                if(drawing.elements[elemId].markerStart?.includes('url')) {
                    drawing.elements[elemId].markerStart = drawing.elements[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerStart.split('-')[2];
                }
                if(drawing.elements[elemId].markerMid?.includes('url')) {
                    drawing.elements[elemId].markerMid = drawing.elements[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerMid.split('-')[2];
                }
                if(drawing.elements[elemId].markerEnd?.includes('url')) {
                    drawing.elements[elemId].markerEnd = drawing.elements[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerEnd.split('-')[2];
                }
                
                //mask
                if(drawing.elements[elemId].mask?.includes('url')) {
                    let masks = drawing.elements[elemId].mask.split(' ');
                    masks.forEach((mask, index) => {
                        if(mask.includes('url')) {
                            masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];
                        }
                    })
                    drawing.elements[elemId].mask = masks.join(' ');
                }
                //filter
                if(drawing.elements[elemId].filter?.includes('url')) {
                    let filters = drawing.elements[elemId].filter.split(' ');
                    filters.forEach((filter, index) => {
                        if(filter.includes('url')) {
                            filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];
                        }
                    })
                    drawing.elements[elemId].filter = filters.join(' ');
                }
                //layer, parent
                let layer = drawing.elements[elemId].layer?.split('-');
                if(layer && layer.length === 3) {
                    drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];
                } else if(layer) {
                    drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];
                }
                let parent = drawing.elements[elemId].parent?.split('-');
                if(parent && parent.length === 3) {
                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];
                } else if(parent && parent.length === 2) {
                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];
                } else if(parent) {
                    drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;
                }
                let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] 
                //id, layer, parent,
                drawing.elements[elemId].id = newId; 
                delete Object.assign(drawing.elements, {[newId]: drawing.elements[elemId]})[elemId]
            }
        })
        drawing.elements['Layers'].forEach((layer, index) => {
            drawing.elements['Layers'][index] = layer.split('-')[0] + '-' + drawing.drawingID + '-' + layer.split('-')[2];
        })
    }
    const updateDefs = (drawing) => {
        //elements
        let elemIds = Object.keys(drawing.defs);
        elemIds.forEach(elemId => {
            if(drawing.defs[elemId].children) {
                drawing.defs[elemId].children.forEach((childId, index) => {
                    drawing.defs[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];
                })
            }
            //fill use filltype
            if(drawing.defs[elemId].fill?.includes('url')) {
                drawing.defs[elemId].fill = drawing.defs[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].fill.split('-')[2];
            }
            //stroke
            if(drawing.defs[elemId].stroke?.includes('url')) {
                drawing.defs[elemId].stroke = drawing.defs[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].stroke.split('-')[2];
            }
            //markerStart, markerMid, markerEnd
            if(drawing.defs[elemId].markerStart?.includes('url')) {
                drawing.defs[elemId].markerStart = drawing.defs[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerStart.split('-')[2];
            }
            if(drawing.defs[elemId].markerMid?.includes('url')) {
                drawing.defs[elemId].markerMid = drawing.defs[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerMid.split('-')[2];
            }
            if(drawing.defs[elemId].markerEnd?.includes('url')) {
                drawing.defs[elemId].markerEnd = drawing.defs[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerEnd.split('-')[2];
            }
            
            //mask
            if(drawing.defs[elemId].mask?.includes('url')) {
                let masks = drawing.defs[elemId].mask.split(' ');
                masks.forEach((mask, index) => {
                    if(mask.includes('url')) {
                        masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];
                    }
                })
                drawing.defs[elemId].mask = masks.join(' ');
            }
            //filter
            if(drawing.defs[elemId].filter?.includes('url')) {
                let filters = drawing.defs[elemId].filter.split(' ');
                filters.forEach((filter, index) => {
                    if(filter.includes('url')) {
                        filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];
                    }
                })
                drawing.defs[elemId].filter = filters.join(' ');
            }
            //layer, parent
            let layer = drawing.defs[elemId].layer?.split('-');
            if(layer && layer.length === 3) {
                drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];
            } else if(layer) {
                drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];
            }
            let parent = drawing.defs[elemId].parent?.split('-');
            if(parent && parent.length === 3) {
                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];
            } else if(parent && parent.length === 2) {
                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];
            } else if(parent) {
                drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;
            }
            if(drawing.defs[elemId].tag === 'textMask') {
                drawing.defs[elemId].shape = drawing.defs[elemId].shape.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].shape.split('-')[2];
                let texts = drawing.defs[elemId].text;
                texts.forEach((text, index) => {
                    texts[index] = text.split('-')[0] + '-' + drawing.drawingID + '-' + text.split('-')[2];
                })
                drawing.defs[elemId].text = texts;
            }
            let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] 
            //id, layer, parent,
            drawing.defs[elemId].id = newId; 
            delete Object.assign(drawing.defs, {[newId]: drawing.defs[elemId]})[elemId]
        })
    }
    const updateHistory = (drawing) => {
        drawing.appHistory.forEach(history => {
            if(history.id) {
                history.id = history.id.split('-')[0] + '-' + drawing.drawingID + '-' + history.id.split('-')[2];
            }
        })
    }

    const deleteFile = async () => {
        open = false;
        // const res = await fetch("/vectorial/api/vectorial", {
        //     method: "DELETE",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({drawingID: drawing.drawingID}),
        // });
        // if (!res.ok) {
        //     alert("Failed to delete");
        //     return;
        // }

        let index = $localGallery.indexOf(drawing.drawingID);
        $localGallery.splice(index, 1);
        $localGallery = $localGallery;
        window.localStorage.removeItem(drawing.drawingID)
        dispatch('deleted', {drawingID: drawing.drawingID})
        goto(`/vectorial/drawings`);
        // invalidate(`/vectorial/api/${$page.data.user.publicID}/drawings`);
        // goto(`/vectorial/${$page.data.user.publicID}/drawings`);
    };
    const duplicateFile = async () => {
        // const res = await fetch("/vectorial/api/vectorial", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(drawing),
        // });
        // if (!res.ok) {
        //     alert("Failed to upload");
        //     return;
        // }
        // const { id } = await res.json();

        let id = 'local' + 'Image' + Math.floor(100*Math.random())
        let duplicateDrawing = JSON.parse(JSON.stringify(drawing)); 
        duplicateDrawing.drawingID = id;
        $localGallery = [...$localGallery, id];
        updateElements(duplicateDrawing);
        updateDefs(duplicateDrawing);
        updateHistory(duplicateDrawing)

        window.localStorage.setItem(id, JSON.stringify(duplicateDrawing))
        dispatch('duplicated', {drawing: duplicateDrawing})
        goto(`/vectorial/drawings`);
        // invalidate(`/vectorial/api/${$page.data.user.publicID}/drawings`);
        // goto(`/vectorial/${$page.data.user.publicID}/drawings`);
    };
    const showdetails = () => {
        //hydrate and go to edit mode
        $DRAWING = drawing;
        $BBOX = drawing.viewBox;
        $drawingID = $DRAWING.drawinID;
        $elements = $DRAWING.elements;
        $defs = $DRAWING.defs;
        $appHistory = $DRAWING.appHistory;
        hydrateElements();

        goto(editApp);
    };
    const computeObjectCount = () => {
        let objcount = 0;
        let ids = Object.keys($elements);
        let defIds = Object.keys($defs);
        ids = [...ids, ...defIds];
        // console.log(ids);
        let counters = [];
        for(let i = 0; i < ids.length; i++) {
            let parts = ids[i].split('-');
            if(parts.length === 3) {
                counters.push(Number(parts[2]));
            }
        }
        // console.log(counters)
        if(counters.length > 0) {
            objcount = Math.max(...counters) + 1;
        } else {
            objcount = 0;
        }
        return objcount;
    }
    const hydrateElement = (id) => {
        let elem;
        switch ($elements[id].tag) {
            case "g": {
                elem = new Group($elements[id]);
                break;
            }
            case "path": {
                elem = new Path($elements[id]);
                break;
            }
            case "regular": {
                elem = new Regular($elements[id]);
                break;
            }
            case "polyline": {
                elem = new Polyline($elements[id]);
                break;
            }
            case "line": {
                elem = new Line($elements[id]);
                break;
            }
            case "rect": {
                elem = new Rectangle($elements[id]);
                break;
            }
            case "circle": {
                elem = new Circle($elements[id]);
                break;
            }
            case "ellipse": {
                elem = new Ellipse($elements[id]);
                break;
            }
            case "text": {
                elem = new Text($elements[id]);
                break;
            }
            case "image": {
                elem = new Image($elements[id]);
                break;
            }
            case "latex": {
                elem = new Latex($elements[id]);
                break;
            }
            case "plot": {
                elem = new Plot($elements[id]);
                break;
            }
            case "grid": {
                elem = new Grid($elements[id]);
                break;
            }
        }
        if(id.includes('Path')) {
            // console.log('hydrating...', $elements[id].edges)
        }
        elem.hydrate();
        $elements[id] = elem;
        
        $elements = $elements;
    };
    const hydrateElements = () => {
        //create transformList
        let elementList = Object.keys($elements).filter(
            (elemId) => elemId !== "Layers"
        );
        elementList.forEach((id) => {
            if ($elements[id]) hydrateElement(id);
        });
        $objectCount = computeObjectCount();
        // console.log('Object count in Drawing hydrating...', $objectCount)
        $elements = $elements;
    };
    const saveIcon = async () => {
        const res = await fetch("/vectorial/api/icon", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(drawing),
        });
        if (!res.ok) {
            alert("Failed to upload");
            return;
        }
        alert("Icon saved");
    };
    let isPublic = drawing.permission === 'public'
    const changePermission = async () => {
        // const res = await fetch(`/vectorial/api/${$page.data.user.publicID}/drawings/permission`, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         drawingID: drawing.drawingID,
        //         permission: isPublic ? 'public':'private'
        //     })
        // })
        // if (!res.ok) {
        //     alert("Failed to update permission");
        //     return;
        // }
        // alert("Permission changed");
    }
    const downloadFile = async () => {
        $DRAWING = drawing;
        $BBOX = drawing.viewBox;
        $drawingID = $DRAWING.drawinID;
        $elements = $DRAWING.elements;
        $defs = $DRAWING.defs;
        $appHistory = $DRAWING.appHistory;
        const jsonString = JSON.stringify($DRAWING, null, 2);
        const blob = new Blob([jsonString], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'image.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    // getImage()
</script>

<Card style="width: 300px;">
    <Set chips={drawing.category} let:chip>
        <Chip {chip}>
            {chip}
        </Chip>
    </Set>
    <Media>
        <div class="img">
            <PreviewDrawing {drawing} />
        </div>
    </Media>
    <Content class="mdc-typography--body2">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
            {drawing.title}
        </h2>
        <h3
            class="mdc-typography--subtitle2"
            style="margin: 0 0 10px; color: #888;"
        >
            {drawing.description}
        </h3>
    </Content>
    <Actions>
        <!-- <FormField>
            <Switch bind:checked={isPublic} on:SMUISwitch:change={changePermission} />
            <span slot="label">{isPublic ? 'Public' : 'Private'}</span>
          </FormField> -->
        <ActionIcons>
            <IconButton class="material-icons" on:click={downloadFile} title="Download">
                download
            </IconButton>
            <IconButton
                class="material-icons"
                on:click={duplicateFile}
                title="Duplicate"
                >file_copy
            </IconButton>
            <IconButton
                class="material-icons"
                on:click={showdetails}
                title="Edit"
                >edit
            </IconButton>
            <IconButton
                class="material-icons"
                on:click={() => open = true}
                title="Delete"
                >delete
            </IconButton>
        </ActionIcons>
    </Actions>
</Card>
<Dialog
    bind:open
    aria-labelledby="default-focus-title"
    aria-describedby="default-focus-content"
>
    <Title id="default-focus-title">Delete Permanently</Title>
    <Content id="default-focus-content">
        Delete the file permanently. The deleted file can not be recovered.
    </Content>
    <Actions>
        <Button on:click={deleteFile}>
            <Label>Delete</Label>
        </Button>
        <Button
            defaultAction
            use={[InitialFocus]}
            on:click={() => (open = false)}
        >
            <Label>Cancel</Label>
        </Button>
    </Actions>
</Dialog>

<style>
    .img {
        width: 100%;
        height: 200px;
        background: gray;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        overflow: hidden;
    }
</style>
